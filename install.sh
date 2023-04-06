#!/bin/bash
#
# https://github.com/LuckyPuppy514/automatic-theater/install.sh
# 作者：LuckyPuppy514
# 时间：2022-08-25
#
# 本脚本用于安装 automatic-theater
#

set -e

echo "|------------------------------------------------------|"
echo "|                                                      |"
echo "|                  Automatic Theater                   |" 
echo "|  https://github.com/LuckyPuppy514/automatic-theater  |"
echo "|                                                      |"
echo "|------------------------------------------------------|"
echo ""
echo "|------------------------------------------------------|"
echo "|                     当前配置如下                     |"
echo "|------------------------------------------------------|"
cat ./docker-compose-default.env
echo "|------------------------------------------------------|"
echo ""
echo "确认信息，并继续执行？（是：y，否：n）："
read CONFIRM
YES=y
if [[ "${CONFIRM}" == "${YES}" ]]; then
	echo ""
else
	echo "取消并退出"
	exit
fi

echo ""
echo "开始创建目录 ......"
. ./docker-compose-default.env
if [[ ! -d ${MEDIA_PATH} ]]; then
	sudo mkdir -p ${MEDIA_PATH}
	echo "✅  创建目录成功：${MEDIA_PATH}"
fi
if [[ ! -d ${MEDIA_PATH}/movie ]]; then
	sudo mkdir ${MEDIA_PATH}/movie
	echo "✅  创建目录成功：${MEDIA_PATH}/movie"
fi
if [[ ! -d ${MEDIA_PATH}/serial ]]; then
	sudo mkdir ${MEDIA_PATH}/serial
	echo "✅  创建目录成功：${MEDIA_PATH}/serial"
fi
if [[ ! -d ${MEDIA_PATH}/anime ]]; then
	sudo mkdir ${MEDIA_PATH}/anime
	echo "✅  创建目录成功：${MEDIA_PATH}/anime"
fi
if [[ ! -d ${MEDIA_PATH}/download ]]; then
	sudo mkdir ${MEDIA_PATH}/download
	echo "✅  创建目录成功：${MEDIA_PATH}/download"
fi
echo "✅  创建目录成功"

echo ""
echo "修改目录权限 ......"
sudo chown -R ${USERNAME}:${GROUPNAME} ${MEDIA_PATH}
sudo chmod -R 770 ${MEDIA_PATH}
echo "✅  修改媒体目录权限成功"

echo "|"
echo "|------------------------------------------------------|"
echo "|                     当前目录结构                     |"
echo "|------------------------------------------------------|"
ls -l ${MEDIA_PATH}
echo "|------------------------------------------------------|"

echo ""
echo "生成环境变量 ......"
sudo cp ./docker-compose-default.env ./.env
echo "✅  生成环境变量成功"

echo ""
echo "修改目录权限 ......"
sudo chown -R ${USERNAME}:${GROUPNAME} ../automatic-theater
sudo chmod -R 770 ../automatic-theater
echo "✅  修改 automatic-theater 目录权限成功"

echo ""
echo "添加显卡配置 ......"
sudo cp ./docker-compose-default.yml ./docker-compose.yml
sudo chown -R ${USERNAME}:${GROUPNAME} ./docker-compose.yml
sudo chmod -R 770 ./docker-compose.yml
DEVICE=""
if [[ -d "/dev/dri" ]]; then
	DEVICE="/dev/dri:/dev/dri"
fi
if [[ -d "/dev/vchiq" ]]; then
	DEVICE="/dev/vchiq:/dev/vchiq"
fi
if [[ ${DEVICE} ]]; then
	sudo echo "    devices:" >> ./docker-compose.yml
	sudo echo "      - ${DEVICE}" >> ./docker-compose.yml
	echo "✅  添加硬件加速设备成功"
else
	echo "✖️  未检测到 /dev/dri 或 /dev/vchiq，无法为 Emby 添加硬件加速设备"
fi

echo "✅  程序执行完毕 ✅"
