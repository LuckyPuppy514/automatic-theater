#!/bin/bash
#
# https://github.com/LuckyPuppy514/automatic-theater/install.sh
# 作者：LuckyPuppy514
# 时间：2022-08-25
#
# 本脚本用于安装 automatic-theater
#

set -e

# 输出用户信息
echo ""
echo "@LuckyPuppy514 https://github.com/LuckyPuppy514"
echo ""
echo "==============================================="
echo "||"
echo "|| root 用户信息如下："
echo -n "|| "
sudo id
echo "||"
echo "|| 当前用户信息如下："
echo -n "|| "
id
echo "||"
echo "==============================================="
echo ""

# 输入要使用的用户信息
echo "请输入用户名和组名：username:groupname，建议不要使用 root 用户，例如：atm:atm"
read USERNAME_GROUPNAME
until [[ ${USERNAME_GROUPNAME} ]]
do
	echo "用户名和组名不能为空，请重新输入"
	read USERNAME_GROUPNAME
done

echo "请输入用户ID，回车默认：1000"
read PUID
if [[ ! ${PUID} ]]; then
	PUID=1000
fi
echo "请输入组ID，回车默认：1000"
read PGID
if [[ ! ${PGID} ]]; then
	PGID=1000
fi

# 输入媒体保存路径
echo "请输入媒体保存路径（建议使用空目录，旧文件后续自行手动移过来即可），回车默认：/mnt/mergerfs/media/video"
read MEDIA_PATH
if [[ ! ${MEDIA_PATH} ]]; then
MEDIA_PATH=/mnt/mergerfs/media/video
fi

# 输出确认信息
echo ""
echo "==============================================="
echo "|| 你输入的信息如下："
echo "|| 用户名和组名："${USERNAME_GROUPNAME}
echo "|| 用户ID："${PUID}
echo "|| 组ID："${PGID}
echo "|| 媒体保存路径："${MEDIA_PATH}
echo "==============================================="
echo ""
echo "确认信息，并继续执行？（是：y，否：n）："
read CONFIRM
YES=y
if [[ "${CONFIRM}" == "${YES}" ]]; then
	echo ""
else
	echo "退出"
	exit
fi

# 创建目录
if [[ ! -d ${MEDIA_PATH} ]]; then
	sudo mkdir -p ${MEDIA_PATH}
	echo "创建目录成功：${MEDIA_PATH}"
fi
if [[ ! -d ${MEDIA_PATH}/movie ]]; then
	sudo mkdir ${MEDIA_PATH}/movie
	echo "创建目录成功：${MEDIA_PATH}/movie"
fi
if [[ ! -d ${MEDIA_PATH}/serial ]]; then
	sudo mkdir ${MEDIA_PATH}/serial
	echo "创建目录成功：${MEDIA_PATH}/serial"
fi
if [[ ! -d ${MEDIA_PATH}/anime ]]; then
	sudo mkdir ${MEDIA_PATH}/anime
	echo "创建目录成功：${MEDIA_PATH}/anime"
fi
if [[ ! -d ${MEDIA_PATH}/download ]]; then
	sudo mkdir ${MEDIA_PATH}/download
	echo "创建目录成功：${MEDIA_PATH}/download"
fi

# 修改媒体目录权限
sudo chown -R ${USERNAME_GROUPNAME} ${MEDIA_PATH}
sudo chmod -R 770 ${MEDIA_PATH}
echo "修改媒体目录权限成功"

# 输出媒体目录结构
echo ""
echo "==============================================="
echo "媒体目录结构如下："
ls -l ${MEDIA_PATH}
echo ""
echo "==============================================="
echo ""

# 生成 docker-compose 环境变量
sudo echo "# 媒体保存路径" > ./.env;
sudo echo "MEDIA_PATH=${MEDIA_PATH}" >> ./.env;
sudo echo "" >> ./.env;
sudo echo "# 配置保存路径" >> ./.env;
sudo echo "CONFIG_PATH=./config" >> ./.env;
sudo echo "" >> ./.env;
sudo echo "# 用户ID和组ID" >> ./.env;
sudo echo "PUID=${PUID}" >> ./.env;
sudo echo "PGID=${PGID}" >> ./.env;
sudo echo "" >> ./.env;
sudo echo "# JPROXY_TAG" >> ./.env;
UNAME_M=`uname -m`
if [[ "${UNAME_M}" =~ "x86" ]]; then
	sudo echo "JPROXY_TAG=latest" >> ./.env;
else
	sudo echo "JPROXY_TAG=arm64v8-latest" >> ./.env;
fi
echo "生成 docker-compose 环境变量成功"
echo ""
echo "==============================================="
echo "docker-compose 环境变量如下："
cat ./.env
echo "==============================================="
echo ""

# 修改 automatic-theater 目录权限
sudo chown -R ${USERNAME_GROUPNAME} ../automatic-theater
sudo chmod -R 770 ../automatic-theater

# 为 emby 添加显卡设备
sudo cp docker-compose.default.yml docker-compose.yml
sudo chmod -R 770 ./docker-compose.yml
DEVICE=""
if [[ -d "/dev/dri" ]]; then
	DEVICE="/dev/dri:/dev/dri"
fi
if [[ -d "/dev/vchiq" ]]; then
	DEVICE="/dev/vchiq:/dev/vchiq"
fi
if [[ ${DEVICE} ]]; then
	sudo echo "    devices:" >> docker-compose.yml
	sudo echo "      - ${DEVICE}" >> docker-compose.yml
	echo "添加显卡设备配置成功"
else
	echo "未检测到/dev/dri或/dev/vchiq，无法为 Emby 添加硬件加速设备"
fi

echo "执行完毕"