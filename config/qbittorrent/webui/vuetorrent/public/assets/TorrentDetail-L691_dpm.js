import{u as rt,n as ne,l as ae,f as _e,g as ce,h as Ye,i as ke,j as Te,a as te,k as I,m as be,y as ye,J,D as Ve,c as X,d as W,ax as ze,V as le,b as it,aF as st,v as Be,aj as Je,ak as ut,r as C,e as Oe,aG as dt,aH as Q,aI as Z,q as P,a3 as pe,K as ee,ay as Ne,z as de,_ as Se,A as ct,B as mt,T as ft,aJ as vt,aK as pt,aL as _t,aM as gt,aN as ht,a4 as Pe,aO as yt,aP as Ie,ag as Xe,a8 as Qe,aQ as Ge,a1 as Ke,ar as wt,C as Dt,as as $t,at as se,au as ue}from"./index-fj5-vamU.js";import{d as V,a as kt,J as Tt,g as H,K as oe,r as xe,M as Ce,A as ge,a2 as u,a3 as O,a4 as t,u as n,Z as l,W as y,m as e,Y as Fe,a9 as L,ao as Ze,D as bt,ab as c,n as he,a7 as $,a8 as R,F as B,ae as Vt,a0 as Nt,c as M,w as me,x as Ue,a5 as He,au as Ot,I as Re,a6 as Le,aa as St,$ as Ct,q as Ft}from"./vue-EkRptf2M.js";import{_ as At}from"./dayjs-PZR0PBzP.js";import{d as je}from"./dayjs.min-lc5slf-X.js";import{an as It}from"./vuetify-FD_HUlNY.js";var E=(f=>(f[f.DISABLED=-1]="DISABLED",f[f.DO_NOT_DOWNLOAD=0]="DO_NOT_DOWNLOAD",f[f.NORMAL=1]="NORMAL",f[f.HIGH=6]="HIGH",f[f.MAXIMAL=7]="MAXIMAL",f))(E||{}),$e=(f=>(f[f.MISSING=0]="MISSING",f[f.DOWNLOADING=1]="DOWNLOADING",f[f.DOWNLOADED=2]="DOWNLOADED",f))($e||{}),Y=(f=>(f[f.DISABLED=0]="DISABLED",f[f.NOT_YET_CONTACTED=1]="NOT_YET_CONTACTED",f[f.WORKING=2]="WORKING",f[f.UPDATING=3]="UPDATING",f[f.NOT_WORKING=4]="NOT_WORKING",f))(Y||{});const Pt={pdf:"mdi-file-pdf-box",png:"mdi-file-image",jpg:"mdi-file-image",jpeg:"mdi-file-image",tiff:"mdi-file-image",doc:"mdi-file-document",docx:"mdi-file-document",txt:"mdi-file-document",nfo:"mdi-information-variant-box",mp3:"mdi-music",wav:"mdi-music",flac:"mdi-music",avi:"mdi-movie",mp4:"mdi-movie",mkv:"mdi-movie",mov:"mdi-movie",wmv:"mdi-movie",srt:"mdi-subtitles",idx:"mdi-subtitles",sub:"mdi-subtitles",rar:"mdi-folder-zip",zip:"mdi-folder-zip",gz:"mdi-folder-zip","7z":"mdi-folder-zip",exe:"mdi-application",msi:"mdi-application",dmg:"mdi-application",deb:"mdi-application",iso:"mdi-application",jar:"mdi-application"};function Lt(f){const a=f.split(".").pop()?.toLowerCase()||"";return Pt[a]||"mdi-file"}function qe(){return{type:"root",name:"",fullName:"",id:"",children:[]}}function zt(f){const a=V(qe());return kt(()=>{const d=qe(),r=Tt(f)??[];for(const m of r){let w=d;m.name.replace("\\","/").split("/").reduce((_,s)=>{const i=_===""?s:_+"/"+s;if(m.name.replace("\\","/").split("/").pop()===s){const b={type:"file",name:s,fullName:i,id:m.index,availability:m.availability,index:m.index,is_seed:m.is_seed,priority:m.priority,progress:m.progress,size:m.size};w.children.push(b)}else{const b=w.children.find(T=>T.name===s);if(b)w=b;else{const T={type:"folder",name:s,fullName:i,id:i,children:[]};w.children.push(T),w=T}}return i},"")}a.value=d}),{tree:a}}const et=H({__name:"MoveTorrentFileDialog",props:{guid:{},hash:{},isFolder:{type:Boolean},oldName:{}},setup(f){const a=f,{isOpened:d}=rt(a.guid),{t:r}=oe(),m=ne(),w=V(),_=V(),s=V(!1),i=xe({newName:""}),b=[h=>!!h||r("dialogs.moveTorrent.required")];async function T(){await w.value?.validate(),s.value&&(a.isFolder?await m.renameTorrentFolder(a.hash,a.oldName,i.newName):await m.renameTorrentFile(a.hash,a.oldName,i.newName),A())}const A=()=>{d.value=!1};return Ce(()=>{if(i.newName=a.oldName,a.isFolder)ge(()=>_.value?.select());else{const h=i.newName.lastIndexOf("/"),N=i.newName.lastIndexOf(".");ge(()=>{_.value?.setSelectionRange(h+1,N==-1?i.newName.length:N)})}}),(h,N)=>(u(),O(be,{modelValue:n(d),"onUpdate:modelValue":N[3]||(N[3]=F=>bt(d)?d.value=F:null)},{default:t(()=>[e(ae,null,{default:t(()=>[e(_e,null,{default:t(()=>[y(l(n(r)("dialogs.moveTorrentFile.title",1+Number(h.isFolder))),1)]),_:1}),e(ce,null,{default:t(()=>[e(n(Ye),{modelValue:s.value,"onUpdate:modelValue":N[1]||(N[1]=F=>s.value=F),ref_key:"form",ref:w,onSubmit:N[2]||(N[2]=Fe(()=>{},["prevent"]))},{default:t(()=>[h.oldName?(u(),O(ke,{key:0,"model-value":h.oldName,disabled:"",label:h.$t("dialogs.moveTorrentFile.oldName")},null,8,["model-value","label"])):L("",!0),e(ke,{modelValue:i.newName,"onUpdate:modelValue":N[0]||(N[0]=F=>i.newName=F),ref_key:"input",ref:_,rules:b,autofocus:"",label:h.$t("dialogs.moveTorrent.newPath"),onKeydown:Ze(T,["enter"])},null,8,["modelValue","label"])]),_:1},8,["modelValue"])]),_:1}),e(Te,null,{default:t(()=>[e(te),e(I,{color:"error",onClick:A},{default:t(()=>[y(l(h.$t("common.cancel")),1)]),_:1}),e(I,{color:"accent",disabled:!s.value,onClick:T},{default:t(()=>[y(l(h.$t("common.save")),1)]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),Bt={class:"mr-2"},xt={class:"mr-2"},Ut={class:"mr-4"},Rt={class:"ml-2"},Mt=H({__name:"FileNode",props:{node:{}},emits:["renameFile","setFilePriority"],setup(f){const{t:a}=oe(),d=ye(),r=[{name:a("constants.file_priority.max"),icon:"mdi-priority-high",value:E.MAXIMAL},{name:a("constants.file_priority.high"),icon:"mdi-arrow-up",value:E.HIGH},{name:a("constants.file_priority.normal"),icon:"mdi-arrow-down",value:E.NORMAL},{name:a("constants.file_priority.unwanted"),icon:"mdi-priority-low",value:E.DO_NOT_DOWNLOAD}];function m(w){return r.find(_=>_.value===w.priority)?.name||""}return(w,_)=>(u(),O(W,{title:w.node.name,value:w.node.index,"prepend-icon":n(Lt)(w.node.name)},{append:t(()=>[c("span",Bt,"[ "+l(n(J)(w.node.size,n(d).useBinarySize))+" ]",1),c("span",xt,l(n(Ve)(w.node.progress)),1),c("span",Ut,"[ "+l(m(w.node))+" ]",1),e(it,{"open-on-hover":"","open-on-click":"","open-delay":"0","close-delay":"0"},{activator:t(({props:s})=>[e(I,he(s,{class:"mr-2",color:"accent",size:"x-small",icon:"mdi-trending-up"}),null,16)]),default:t(()=>[e(X,null,{default:t(()=>[(u(),$(B,null,R(r,s=>e(W,{onClick:i=>w.$emit("setFilePriority",w.node,s.value)},{default:t(()=>[e(ze,null,{default:t(()=>[e(le,null,{default:t(()=>[y(l(s.icon),1)]),_:2},1024),c("span",Rt,l(s.name),1)]),_:2},1024)]),_:2},1032,["onClick"])),64))]),_:1})]),_:1}),e(I,{color:"accent",size:"x-small",icon:"mdi-pencil",onClick:_[0]||(_[0]=Fe(s=>w.$emit("renameFile",w.node),["stop"]))})]),_:1},8,["title","value","prepend-icon"]))}}),Et={class:"mr-2"},Wt=H({__name:"FolderNode",props:{node:{}},emits:["renameFolder","renameFile","setFilePriority"],setup(f){const{t:a}=oe();function d(r){let m=0,w=0;for(const s of r.children)s.type==="file"?m++:s.type==="folder"&&w++;const _=[];return m>0&&_.push(a("torrentDetail.content.fileInfo",m)),w>0&&_.push(a("torrentDetail.content.folderInfo",w)),_.join(", ")}return(r,m)=>{const w=Vt("FolderNode",!0);return u(),O(st,{value:r.node.type==="root"?"(root)":r.node.fullName},{activator:t(({props:_})=>[e(W,he(_,{"prepend-icon":r.node.type==="root"?"mdi-file-tree":"mdi-folder",title:r.node.type==="root"?r.$t("torrentDetail.content.rootNode"):r.node.name,value:r.node.type==="root"?"(root)":r.node.fullName}),{append:t(({isActive:s})=>[c("span",Et,l(d(r.node)),1),r.node.type==="folder"?(u(),O(I,{key:0,color:"accent",size:"x-small",icon:"mdi-pencil",onClick:m[0]||(m[0]=Fe(i=>r.$emit("renameFolder",r.node),["stop"]))})):L("",!0),e(le,{icon:s?"mdi-chevron-up":"mdi-chevron-down"},null,8,["icon"])]),_:2},1040,["prepend-icon","title","value"])]),default:t(()=>[(u(!0),$(B,null,R(r.node.children,_=>(u(),$(B,null,[_.type==="folder"?(u(),O(w,{key:0,node:_,onRenameFolder:m[1]||(m[1]=s=>r.$emit("renameFolder",s)),onRenameFile:m[2]||(m[2]=s=>r.$emit("renameFile",s)),onSetFilePriority:m[3]||(m[3]=(s,i)=>r.$emit("setFilePriority",s,i))},null,8,["node"])):L("",!0),_.type==="file"?(u(),O(Mt,{key:1,node:_,onRenameFile:m[4]||(m[4]=s=>r.$emit("renameFile",s)),onSetFilePriority:m[5]||(m[5]=(s,i)=>r.$emit("setFilePriority",s,i))},null,8,["node"])):L("",!0)],64))),256))]),_:1},8,["value"])}}}),Gt=H({__name:"RootNode",props:{root:{}},emits:["renameFolder","renameFile","setFilePriority"],setup(f){return(a,d)=>(u(),O(X,{density:"compact","select-strategy":"classic"},{default:t(()=>[e(Wt,{node:a.root,onRenameFolder:d[0]||(d[0]=r=>a.$emit("renameFolder",r)),onRenameFile:d[1]||(d[1]=r=>a.$emit("renameFile",r)),onSetFilePriority:d[2]||(d[2]=(r,m)=>a.$emit("setFilePriority",r,m))},null,8,["node"])]),_:1}))}}),Kt=H({__name:"Content",props:{torrent:{},isActive:{type:Boolean}},setup(f){const a=f,d=Be(),r=ne(),{fileContentInterval:m}=Nt(ye()),{pause:w,resume:_}=Je(g,m,{immediate:!1,immediateCallback:!0}),s=V(!1),i=V(!1),b=V([]),{tree:T}=zt(b),A=V(["(root)"]),h=V(""),N=xe({hash:"",isFolder:!1,oldName:""}),F=M({get:()=>b.value.filter(v=>v.priority!==E.DO_NOT_DOWNLOAD).map(v=>v.index),async set(v){const U=b.value.filter(D=>D.priority!==E.DO_NOT_DOWNLOAD).map(D=>D.index),G=U.filter(D=>!v.includes(D)).map(D=>b.value.find(S=>S.index===D)).filter(D=>D&&D.priority!==E.DO_NOT_DOWNLOAD).map(D=>D.index),k=v.filter(D=>!U.includes(D)).map(D=>b.value.find(S=>S.index===D)).filter(D=>D&&D.priority===E.DO_NOT_DOWNLOAD).map(D=>D.index);G.length&&await r.setTorrentFilePriority(a.torrent.hash,G,E.DO_NOT_DOWNLOAD),k.length&&await r.setTorrentFilePriority(a.torrent.hash,k,E.NORMAL),await g()}});async function z(v){N.hash=a.torrent.hash,N.isFolder=v.type==="folder",N.oldName=v.fullName,h.value=d.createDialog(et,N)}async function p(v,U){await r.setTorrentFilePriority(a.torrent.hash,[v.index],U),await g()}async function g(){s.value||(s.value=!0,i.value=!0,await ge(),b.value=await r.fetchFiles(a.torrent.hash),i.value=!1,s.value=!1,await ge())}return me(()=>a.isActive,v=>{v?(_(),g()):w()}),me(()=>d.isDialogOpened(h.value),v=>{v||g()}),Ue(()=>{_()}),(v,U)=>(u(),O(ae,{loading:i.value,flat:""},{default:t(()=>[e(Gt,{opened:A.value,"onUpdate:opened":U[0]||(U[0]=G=>A.value=G),selected:F.value,"onUpdate:selected":U[1]||(U[1]=G=>F.value=G),root:n(T),onRenameFolder:z,onRenameFile:z,onSetFilePriority:p},null,8,["opened","selected","root"])]),_:1},8,["loading"]))}}),Ht={class:"pl-4"},jt={class:"pr-4"},q=H({__name:"InfoBase",props:{compact:{type:Boolean}},setup(f){return(a,d)=>(u(),O(C,{cols:"12",sm:"6",lg:"3"},{default:t(()=>[e(ut,{rounded:"xl",class:"d-flex align-center py-2 border"},{default:t(()=>[c("div",Ht,[He(a.$slots,"title")]),e(te),c("div",jt,[He(a.$slots,"text")])]),_:3})]),_:3}))}}),qt={key:0,class:"d-flex gap"},Yt=H({__name:"Info",props:{torrent:{},isActive:{type:Boolean}},setup(f){const a=f,d=ne(),r=Oe(),m=ye(),w=M({get:()=>a.torrent.auto_tmm,set:p=>d.toggleAutoTmm([a.torrent.hash],p)}),_=M({get:()=>a.torrent.f_l_piece_prio,set:()=>d.toggleFLPiecePrio([a.torrent.hash])}),s=M({get:()=>a.torrent.forced,set:p=>{p?r.forceResumeTorrents([a.torrent.hash]):r.resumeTorrents([a.torrent.hash])}}),i=M({get:()=>a.torrent.seq_dl,set:()=>d.toggleSeqDl([a.torrent.hash])}),b=M({get:()=>a.torrent.super_seeding,set:p=>d.setSuperSeeding([a.torrent.hash],p)}),T=[{title:"added_on",text:"added_on"},{title:"completed_on",text:"completed_on"},{title:"last_activity",text:"last_activity"},{title:"seen_complete",text:"seen_complete"}],A=[{title:"ratio_time_limit",text:"ratio_time_limit"},{title:"seeding_time",text:"seeding_time"},{title:"time_active",text:"time_active"}],h=[{title:"downloaded",text:"downloaded"},{title:"downloaded_session",text:"downloaded_session"},{title:"uploaded",text:"uploaded"},{title:"uploaded_session",text:"uploaded_session"},{title:"size",text:"size"},{title:"total_size",text:"total_size"},{title:"amount_left",text:"amount_left"},{title:"global_volume",text:"globalVolume"}],N=[{title:"download_limit",text:"dl_limit"},{title:"download_speed",text:"dlspeed"},{title:"upload_limit",text:"up_limit"},{title:"upload_speed",text:"upspeed"},{title:"avg_download_speed",text:"avgDownloadSpeed"},{title:"avg_upload_speed",text:"avgUploadSpeed"},{title:"global_speed",text:"globalSpeed"}],F=[{title:"available_peers",text:"available_peers"},{title:"available_seeds",text:"available_seeds"},{title:"num_leechs",text:"num_leechs"},{title:"num_seeds",text:"num_seeds"},{title:"ratio",text:"ratio"},{title:"ratio_limit",text:"ratio_limit"},{title:"availability",text:"availability"},{title:"eta",text:"eta"},{title:"category",text:"category"},{title:"state",text:"stateString"},{title:"trackers_count",text:"trackers_count"},{title:"priority",text:"priority"}],z=[{title:"content_path",text:"content_path"},{title:"download_path",text:"download_path"},{title:"hash",text:"hash"},{title:"infohash_v1",text:"infohash_v1"},{title:"infohash_v2",text:"infohash_v2"},{title:"magnet",text:"magnet"},{title:"name",text:"name"},{title:"save_path",text:"savePath"},{title:"tracker",text:"tracker"}];return(p,g)=>(u(),O(X,{class:"text-select"},{default:t(()=>[e(W,null,{default:t(()=>[e(dt,null,{default:t(()=>[e(Q,{title:p.$t("torrentDetail.info.datetime_values")},{default:t(()=>[e(Z,null,{default:t(()=>[e(P,null,{default:t(()=>[(u(),$(B,null,R(T,v=>e(q,null,Ot({title:t(()=>[y(l(p.$t(`torrent.properties.${v.title}`)),1)]),_:2},[p.torrent[v.text]>0?{name:"text",fn:t(()=>[y(l(n(je)(p.torrent[v.text]*1e3).format(n(m).dateFormat??"DD/MM/YYYY, HH:mm:ss")),1)]),key:"0"}:{name:"text",fn:t(()=>[y(l(p.$t("common.NA")),1)]),key:"1"}]),1024)),64))]),_:1})]),_:1})]),_:1},8,["title"]),e(Q,{title:p.$t("torrentDetail.info.duration_values")},{default:t(()=>[e(Z,null,{default:t(()=>[e(P,null,{default:t(()=>[(u(),$(B,null,R(A,v=>e(q,null,{title:t(()=>[y(l(p.$t(`torrent.properties.${v.title}`)),1)]),text:t(()=>[y(l(n(je).duration(p.torrent[v.text],"s").humanize()),1)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1},8,["title"]),e(Q,{title:p.$t("torrentDetail.info.boolean_values")},{default:t(()=>[e(Z,null,{default:t(()=>[e(P,null,{default:t(()=>[e(q,null,{title:t(()=>[e(pe,{modelValue:w.value,"onUpdate:modelValue":g[0]||(g[0]=v=>w.value=v),"hide-details":"",density:"compact",label:p.$t("torrent.properties.auto_tmm")},null,8,["modelValue","label"])]),_:1}),e(q,null,{title:t(()=>[e(pe,{modelValue:_.value,"onUpdate:modelValue":g[1]||(g[1]=v=>_.value=v),"hide-details":"",density:"compact",label:p.$t("torrent.properties.f_l_piece_prio")},null,8,["modelValue","label"])]),_:1}),e(q,null,{title:t(()=>[e(pe,{modelValue:s.value,"onUpdate:modelValue":g[2]||(g[2]=v=>s.value=v),"hide-details":"",density:"compact",label:p.$t("torrent.properties.forced")},null,8,["modelValue","label"])]),_:1}),e(q,null,{title:t(()=>[e(pe,{modelValue:i.value,"onUpdate:modelValue":g[3]||(g[3]=v=>i.value=v),"hide-details":"",density:"compact",label:p.$t("torrent.properties.seq_dl")},null,8,["modelValue","label"])]),_:1}),e(q,null,{title:t(()=>[e(pe,{modelValue:b.value,"onUpdate:modelValue":g[4]||(g[4]=v=>b.value=v),"hide-details":"",density:"compact",label:p.$t("torrent.properties.super_seeding")},null,8,["modelValue","label"])]),_:1})]),_:1})]),_:1})]),_:1},8,["title"]),e(Q,{title:p.$t("torrentDetail.info.data_values")},{default:t(()=>[e(Z,null,{default:t(()=>[e(P,null,{default:t(()=>[(u(),$(B,null,R(h,v=>e(q,null,{title:t(()=>[y(l(p.$t(`torrent.properties.${v.title}`)),1)]),text:t(()=>[y(l(n(J)(p.torrent[v.text],n(m).useBinarySize)),1)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1},8,["title"]),e(Q,{title:p.$t("torrentDetail.info.speed_values")},{default:t(()=>[e(Z,null,{default:t(()=>[e(P,null,{default:t(()=>[(u(),$(B,null,R(N,v=>e(q,null,{title:t(()=>[y(l(p.$t(`torrent.properties.${v.title}`)),1)]),text:t(()=>[y(l(n(ee)(p.torrent[v.text],n(m).useBitSpeed)),1)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1},8,["title"]),e(Q,{title:p.$t("torrentDetail.info.text_values")},{default:t(()=>[e(Z,null,{default:t(()=>[e(P,null,{default:t(()=>[(u(),$(B,null,R(F,v=>e(q,null,{title:t(()=>[y(l(p.$t(`torrent.properties.${v.title}`)),1)]),text:t(()=>[y(l(p.torrent[v.text]),1)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1},8,["title"]),e(Q,{title:p.$t("torrentDetail.info.long_text_values")},{default:t(()=>[e(Z,null,{default:t(()=>[e(X,null,{default:t(()=>[(u(),$(B,null,R(z,v=>e(W,{title:p.$t(`torrent.properties.${v.title}`)},{default:t(()=>[e(Ne,null,{default:t(()=>[y(l(p.torrent[v.text]),1)]),_:2},1024)]),_:2},1032,["title"])),64)),e(W,{title:p.$t("torrent.properties.tags")},{default:t(()=>[p.torrent.tags?.length?(u(),$("div",qt,[(u(!0),$(B,null,R(p.torrent.tags,v=>(u(),O(de,{variant:"flat",color:"tag"},{default:t(()=>[y(l(v),1)]),_:2},1024))),256))])):(u(),O(Ne,{key:1},{default:t(()=>[y(l(p.$t("torrent.properties.empty_tags")),1)]),_:1}))]),_:1},8,["title"])]),_:1})]),_:1})]),_:1},8,["title"])]),_:1})]),_:1})]),_:1}))}}),Jt=Se(Yt,[["__scopeId","data-v-9c68744d"]]),Xt=["href"],Qt={key:1},Zt={class:"my-1"},el={class:"mr-2"},tl={key:0},ll={key:2},al={key:0},nl={key:1},ol={key:2},rl={key:3},il={key:4},sl={key:0},ul=H({__name:"Overview",props:{torrent:{},isActive:{type:Boolean}},setup(f){const a=f,{t:d}=oe(),r=It(),m=Be(),w=ne(),_=Oe(),s=ye(),i=V(),b=V(""),T=V(0),A=V([]),h=V(0),N=V(0),F=V(""),z=V(0),p=V(0),g=V(0),v=V(0),U=M(()=>`torrent-${a.torrent.state}`),G=M(()=>`${parseInt(ct(z.value,!0))} ${mt(z.value,!0)}`),k=M(()=>a.torrent.state===ft.META_DL),D=M(()=>!k.value&&g.value>0&&g.value<s.canvasRenderThreshold),S=M(()=>D.value&&g.value<s.canvasRefreshThreshold);async function we(){const o=await _.getTorrentProperties(a.torrent.hash);b.value=o.comment,T.value=o.dl_speed_avg,g.value=o.pieces_num,p.value=o.pieces_have,z.value=o.piece_size,v.value=o.up_speed_avg}async function j(){A.value=await w.fetchFiles(a.torrent.hash),N.value=A.value.length;const o=A.value.filter(K=>K.priority!==E.DO_NOT_DOWNLOAD);h.value=o.length,h.value===1&&(F.value=o[0].name)}async function Me(){if(!i.value)return;const o=await w.fetchPieceState(a.torrent.hash);i.value.width=o.length||-1;const K=i.value.getContext("2d");K.clearRect(0,0,i.value.width,i.value.height);let x="",re=1;for(let ie=0;ie<o.length;++ie){const Ae=o[ie];let fe="";if(Ae===$e.DOWNLOADING)fe=r.current.value.colors["torrent-downloading"];else if(Ae===$e.DOWNLOADED)fe=r.current.value.colors["torrent-pausedUP"];else if(Ae===$e.MISSING){const nt=A.value.filter(ve=>ve.priority!==E.DO_NOT_DOWNLOAD).map(ve=>ve.piece_range);for(const[ve,ot]of nt)if(ie>ve&&ie<ot){fe=r.current.value.colors["torrent-pausedDL"];break}}if(fe===x){++re;continue}x!==""&&(K.fillStyle=x,K.fillRect(ie-re,0,re,i.value.height)),re=1,x=fe}x!==""&&(K.fillStyle=x,K.fillRect(o.length-re,0,re,i.value.height))}async function tt(){await navigator.clipboard.writeText(a.torrent.hash)}function De(o){m.createDialog(At,{hashes:[a.torrent.hash],mode:o})}function Ee(){m.createDialog(et,{hash:a.torrent.hash,isFolder:!1,oldName:F.value})}const{resume:lt,pause:at}=Je(async()=>{await j(),S.value&&await Me()},s.fileContentInterval,{immediate:!0,immediateCallback:!0});me(()=>a.isActive,o=>{o?lt():at()}),me(()=>a.torrent,async()=>{await we()});function We(o){if(m.hasActiveDialog)return!1;if(o.key==="d")return o.preventDefault(),De("dl"),!0;if(o.key==="s")return o.preventDefault(),De("save"),!0;if(o.key==="f"&&h.value===1)return o.preventDefault(),Ee(),!0}return Ue(()=>{document.addEventListener("keydown",We)}),Re(()=>{document.removeEventListener("keydown",We)}),(o,K)=>o.torrent?(u(),O(ae,{key:0},{default:t(()=>[e(_e,{class:"text-wrap"},{default:t(()=>[y(l(o.torrent.name),1)]),_:1}),e(_t,null,{default:t(()=>[c("div",null,[(u(!0),$(B,null,R(n(pt)(b.value),x=>(u(),$("span",null,[n(vt)(x)?(u(),$("a",{key:0,target:"_blank",href:x},l(x),9,Xt)):(u(),$("span",Qt,l(x),1))]))),256))]),c("div",Zt,[c("span",el,l(o.torrent.hash),1),e(I,{variant:"outlined",rounded:"",onClick:tt},{default:t(()=>[y(l(o.$t("torrentDetail.overview.copy_hash")),1)]),_:1})])]),_:1}),e(ce,null,{default:t(()=>[e(P,null,{default:t(()=>[e(C,{cols:"12",md:"6"},{default:t(()=>[e(P,null,{default:t(()=>[e(C,{cols:"4"},{default:t(()=>[e(gt,{color:U.value,indeterminate:k.value,size:100,"model-value":o.torrent?.progress*100||0,width:15},{default:t(()=>[k.value?(u(),$("span",tl,l(o.$t("torrentDetail.overview.fetchingMetadata")),1)):o.torrent.progress===1?(u(),O(le,{key:1,icon:"mdi-check",size:"x-large"})):(u(),$("span",ll,l(n(Ve)(o.torrent.progress)),1))]),_:1},8,["color","indeterminate","model-value"])]),_:1}),e(C,{cols:"8",class:"d-flex flex-column align-center justify-center"},{default:t(()=>[k.value?(u(),$("div",al,[c("span",null,l(o.$t("torrentDetail.overview.waitingForMetadata")),1)])):D.value?(u(),$("div",nl,[c("canvas",{ref_key:"canvas",ref:i,width:"0",height:"10"},null,512)])):L("",!0),!k.value&&!D.value?(u(),$("div",ol,[c("span",null,l(o.$t("torrentDetail.overview.canvasRenderDisabled")),1)])):!k.value&&!S.value?(u(),$("div",rl,[c("span",null,l(o.$t("torrentDetail.overview.canvasRefreshDisabled")),1)])):L("",!0),g.value>0?(u(),$("div",il,[c("span",null,l(n(d)("torrentDetail.overview.pieceCount",{owned:p.value,total:g.value,pieceSize:G.value})),1)])):L("",!0),c("div",null,[e(le,{icon:"mdi-arrow-down"}),y(" "+l(n(ee)(o.torrent.dlspeed,n(s).useBitSpeed))+" ",1),e(le,{icon:"mdi-arrow-up"}),y(" "+l(n(ee)(o.torrent.upspeed,n(s).useBitSpeed)),1)])]),_:1})]),_:1}),e(P,null,{default:t(()=>[e(C,{cols:"6"},{default:t(()=>[c("div",null,l(o.$t("torrent.properties.download_path"))+":",1),c("div",null,l(o.torrent.download_path),1),e(I,{icon:"mdi-pencil",color:"accent",size:"x-small",onClick:K[0]||(K[0]=x=>De("dl"))})]),_:1}),e(C,{cols:"6"},{default:t(()=>[c("div",null,l(o.$t("torrentDetail.overview.fileCount"))+":",1),c("div",null,l(h.value)+" / "+l(N.value),1),h.value===1?(u(),$("div",sl,l(F.value),1)):L("",!0),h.value===1?(u(),O(I,{key:1,icon:"mdi-pencil",color:"accent",size:"x-small",onClick:Ee})):L("",!0)]),_:1})]),_:1}),e(P,null,{default:t(()=>[e(C,{cols:"6"},{default:t(()=>[c("div",null,l(o.$t("torrent.properties.save_path"))+":",1),c("div",null,l(o.torrent.savePath),1),e(I,{icon:"mdi-pencil",color:"accent",size:"x-small",onClick:K[1]||(K[1]=x=>De("save"))})]),_:1}),e(C,{cols:"6"},{default:t(()=>[c("div",null,l(o.$t("torrent.properties.content_path"))+":",1),c("div",null,l(o.torrent.content_path),1)]),_:1})]),_:1})]),_:1}),e(C,{cols:"12",md:"6"},{default:t(()=>[e(P,null,{default:t(()=>[e(C,{cols:"6"},{default:t(()=>[c("div",null,l(o.$t("torrent.properties.state"))+":",1),e(de,{variant:"flat",color:U.value},{default:t(()=>[y(l(o.$t(`torrent.state.${o.torrent.state}`)),1)]),_:1},8,["color"])]),_:1}),e(C,{cols:"6"},{default:t(()=>[c("div",null,l(o.$t("torrent.properties.category"))+":",1),e(de,{variant:"flat",color:"category"},{default:t(()=>[y(l(o.torrent.category.length?o.torrent.category:o.$t("navbar.side.filters.uncategorized")),1)]),_:1})]),_:1})]),_:1}),e(P,null,{default:t(()=>[e(C,{cols:"6"},{default:t(()=>[c("div",null,l(o.$t("torrent.properties.tracker"))+":",1),e(de,{variant:"flat",color:"tracker"},{default:t(()=>[y(l(o.torrent.tracker?n(ht)(o.torrent.tracker):o.$t("navbar.side.filters.untracked")),1)]),_:1})]),_:1}),e(C,{cols:"6",class:"d-flex flex-wrap chipgap"},{default:t(()=>[c("div",null,l(o.$t("torrent.properties.tags"))+":",1),o.torrent.tags?(u(!0),$(B,{key:0},R(o.torrent.tags,x=>(u(),O(de,{key:x,variant:"flat",color:"tag"},{default:t(()=>[y(l(x),1)]),_:2},1024))),128)):L("",!0),!o.torrent.tags||o.torrent.tags.length===0?(u(),O(de,{key:1,variant:"flat",color:"tag"},{default:t(()=>[y(l(o.$t("navbar.side.filters.untagged")),1)]),_:1})):L("",!0)]),_:1})]),_:1}),e(P,null,{default:t(()=>[e(C,{cols:"6"},{default:t(()=>[c("div",null,l(o.$t("torrentDetail.overview.selectedFileSize"))+":",1),c("div",null,l(n(J)(o.torrent.size,n(s).useBinarySize))+" / "+l(n(J)(o.torrent.total_size,n(s).useBinarySize)),1)]),_:1}),e(C,{cols:"6"},{default:t(()=>[c("div",null,l(o.$t("torrentDetail.overview.ratio"))+":",1),c("div",null,l(o.torrent.ratio),1)]),_:1})]),_:1}),e(P,null,{default:t(()=>[e(C,{cols:"6"},{default:t(()=>[c("div",null,l(o.$t("torrentDetail.overview.downloaded"))+":",1),c("div",null,l(n(J)(o.torrent.downloaded,n(s).useBinarySize)),1)]),_:1}),e(C,{cols:"6"},{default:t(()=>[c("div",null,l(o.$t("torrentDetail.overview.uploaded"))+":",1),c("div",null,l(n(J)(o.torrent.uploaded,n(s).useBinarySize)),1)]),_:1})]),_:1}),e(P,null,{default:t(()=>[e(C,{cols:"6"},{default:t(()=>[c("div",null,l(o.$t("torrentDetail.overview.dlSpeedAverage"))+":",1),c("div",null,l(n(ee)(T.value,n(s).useBitSpeed)),1)]),_:1}),e(C,{cols:"6"},{default:t(()=>[c("div",null,l(o.$t("torrentDetail.overview.upSpeedAverage"))+":",1),c("div",null,l(n(ee)(v.value,n(s).useBitSpeed)),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):L("",!0)}}),dl=Se(ul,[["__scopeId","data-v-817413b9"]]),cl={class:"d-flex"},ml={key:0},fl=["alt","src","title"],vl=["title"],pl={class:"text-subtitle-2 text-grey"},_l=["title"],gl={class:"d-flex flex-column"},hl={class:"text-h5"},yl=H({__name:"Peers",props:{torrent:{},isActive:{type:Boolean}},setup(f){const a=f,{t:d}=oe(),r=ne(),m=ye(),w=V(!1),_=V([]),s=V(""),i=V(null),b=V(!1);async function T(){w.value=!0,_.value=Object.entries((await r.getTorrentPeers(a.torrent.hash)).peers).map(([z,p])=>({...p,host:z})),w.value=!1}async function A(){s.value.length&&(await r.addTorrentPeers(a.torrent.hash,s.value.split(`
`)),await T(),h())}function h(){b.value=!1,s.value=""}async function N(z){await r.banPeers([z.host]),await T()}async function F(z){z??a.isActive?(await T(),i.value=setInterval(T,5e3)):(clearInterval(i.value),i.value=null)}return Ce(F),Re(()=>F(!1)),me(()=>a.isActive,F),(z,p)=>(u(),O(X,null,{default:t(()=>[(u(!0),$(B,null,R(_.value,(g,v)=>(u(),$(B,null,[v>0?(u(),O(Pe,{key:0,color:"white"})):L("",!0),e(W,null,{default:t(()=>[c("div",cl,[c("div",null,[e(ze,{class:"overflow-visible text-select"},{default:t(()=>[g.country_code?(u(),$("span",ml,[n(yt)?(u(),$("img",{key:0,alt:n(Ie)(g.country_code).char,src:n(Ie)(g.country_code).url,title:g.country,style:{"max-width":"32px"}},null,8,fl)):(u(),$("span",{key:1,title:g.country},l(n(Ie)(g.country_code).char),9,vl))])):L("",!0),c("span",null,l(g.ip),1),c("span",pl," :"+l(g.port),1)]),_:2},1024),e(Ne,{class:"d-block"},{default:t(()=>[c("div",null,[y(" Flags: "),c("span",{class:"cursor-help",title:g.flags_desc},l(g.flags),9,_l)]),c("div",null,"Progress: "+l(n(Ve)(g.progress)),1),c("div",null,[e(le,{icon:"mdi-arrow-down",color:"download"}),y(" "+l(n(ee)(g.dl_speed,n(m).useBitSpeed))+" ",1),e(le,{icon:"mdi-arrow-up",color:"upload"}),y(" "+l(n(ee)(g.up_speed,n(m).useBitSpeed)),1)]),c("div",null,l(n(J)(g.downloaded,n(m).useBinarySize))+" | "+l(n(J)(g.uploaded,n(m).useBinarySize)),1),c("div",null,"Relevance: "+l(n(Ve)(g.relevance)),1)]),_:2},1024)]),e(te),c("div",gl,[e(I,{color:"red",icon:"mdi-cancel",variant:"text",onClick:U=>N(g)},null,8,["onClick"])])])]),_:2},1024)],64))),256)),_.value.length===0?(u(),O(W,{key:0},{default:t(()=>[y(l(z.$t("torrentDetail.peers.emptyList")),1)]),_:1})):L("",!0),e(W,null,{default:t(()=>[c("div",{class:Le(["d-flex gap py-5",z.$vuetify.display.mobile?"flex-column":"justify-space-evenly"])},[e(be,{modelValue:b.value,"onUpdate:modelValue":p[1]||(p[1]=g=>b.value=g),"max-width":"750px"},{activator:t(({props:g})=>[e(I,he(g,{variant:"flat",text:n(d)("torrentDetail.peers.addPeers.title"),color:"accent"}),null,16,["text"])]),default:t(()=>[e(ae,null,{default:t(()=>[e(_e,null,{default:t(()=>[c("span",hl,l(n(d)("torrentDetail.peers.addPeers.title")),1)]),_:1}),e(ce,null,{default:t(()=>[e(Xe,null,{default:t(()=>[e(P,null,{default:t(()=>[e(C,{cols:"12"},{default:t(()=>[e(Qe,{modelValue:s.value,"onUpdate:modelValue":p[0]||(p[0]=g=>s.value=g),label:n(d)("torrentDetail.peers.addPeers.newPeers"),placeholder:n(d)("torrentDetail.peers.addPeers.newPeersPlaceholder"),hint:n(d)("torrentDetail.peers.addPeers.newPeersHint")},null,8,["modelValue","label","placeholder","hint"])]),_:1})]),_:1})]),_:1})]),_:1}),e(Te,null,{default:t(()=>[e(te),e(I,{color:"error",onClick:h},{default:t(()=>[y(l(n(d)("common.cancel")),1)]),_:1}),e(I,{color:"accent",onClick:A},{default:t(()=>[y(l(n(d)("common.ok")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],2)]),_:1})]),_:1}))}}),wl=Se(yl,[["__scopeId","data-v-04aee0ca"]]),Dl=H({__name:"TagsAndCategories",props:{torrent:{},isActive:{type:Boolean}},setup(f){const a=f,d=ne(),r=Oe(),m=M(()=>d.categories.map(i=>i.name).indexOf(a.torrent.category)),w=M(()=>d.tags.filter(i=>a.torrent.tags?.includes(i)));async function _(i){a.torrent.category===i?await r.setTorrentCategory([a.torrent.hash],""):await r.setTorrentCategory([a.torrent.hash],i)}async function s(i){a.torrent.tags?.includes(i)?await r.removeTorrentTags([a.torrent.hash],[i]):await r.addTorrentTags([a.torrent.hash],[i])}return Ce(async()=>{await d.fetchCategories(),await d.fetchTags()}),(i,b)=>(u(),O(ae,null,{default:t(()=>[e(ce,null,{default:t(()=>[e(P,null,{default:t(()=>[e(C,{cols:"12",md:"6"},{default:t(()=>[e(Ge,{"model-value":w.value,multiple:""},{default:t(()=>[e(X,null,{default:t(()=>[e(Ke,null,{default:t(()=>[y(l(i.$t("torrentDetail.tagsAndCategories.tags")),1)]),_:1}),(u(!0),$(B,null,R(n(d).tags,T=>(u(),O(W,{title:T,variant:i.torrent.tags?.includes(T)?"tonal":void 0,"base-color":i.torrent.tags?.includes(T)?"accent":void 0,onClick:A=>s(T)},null,8,["title","variant","base-color","onClick"]))),256))]),_:1})]),_:1},8,["model-value"])]),_:1}),e(C,{cols:"12",md:"6"},{default:t(()=>[e(Ge,{"model-value":m.value},{default:t(()=>[e(X,null,{default:t(()=>[e(Ke,null,{default:t(()=>[y(l(i.$t("torrentDetail.tagsAndCategories.categories")),1)]),_:1}),(u(!0),$(B,null,R(n(d).categories,T=>(u(),O(W,{title:T.name,variant:T.name===a.torrent.category?"tonal":void 0,"base-color":T.name===a.torrent.category?"accent":void 0,onClick:A=>_(T.name)},null,8,["title","variant","base-color","onClick"]))),256))]),_:1})]),_:1},8,["model-value"])]),_:1})]),_:1})]),_:1})]),_:1}))}}),$l={class:"d-flex"},kl={key:0},Tl={key:1},bl={key:2},Vl={key:3},Nl={key:0,class:"d-flex flex-column"},Ol={class:"text-h5"},Sl={class:"text-h5"},Cl=H({__name:"Trackers",props:{torrent:{},isActive:{type:Boolean}},setup(f){const a=f,{t:d}=oe(),r=ne();function m(k){switch(k){case Y.DISABLED:return d("constants.trackerStatus.disabled");case Y.NOT_YET_CONTACTED:return d("constants.trackerStatus.not_yet_contacted");case Y.WORKING:return d("constants.trackerStatus.working");case Y.UPDATING:return d("constants.trackerStatus.updating");case Y.NOT_WORKING:return d("constants.trackerStatus.not_working");default:return""}}function w(k){return typeof k=="number"?k===-1?"N/A":k.valueOf():!k||k.num_peers===-1||k?.num_seeds===-1||k?.num_leeches===-1?"N/A":d("torrentDetail.trackers.peersValue",{peers:k.num_peers,seeds:k.num_seeds,leeches:k.num_leeches})}const _=V(!1),s=V([]),i=V(""),b=V(null),T=V(!1),A=[k=>!!k||d("torrentDetail.trackers.editTracker.newUrlRequired")],h=xe({isVisible:!1,isFormValid:!1,oldUrl:"",newUrl:""});function N(k){h.isVisible=!0,h.oldUrl=k.url,h.newUrl=k.url,ge(()=>{document.getElementById("input")?.select()})}async function F(){_.value=!0,s.value=(await r.getTorrentTrackers(a.torrent.hash)).map(k=>({...k,isSelectable:k.tier!==-1})),_.value=!1}async function z(){i.value.length&&(await r.addTorrentTrackers(a.torrent.hash,i.value),await F(),p())}function p(){T.value=!1,i.value=""}async function g(){h.isFormValid&&(await r.editTorrentTracker(a.torrent.hash,h.oldUrl,h.newUrl),h.isVisible=!1,await F())}async function v(k){await r.removeTorrentTrackers(a.torrent.hash,[k.url]),await F()}async function U(){await r.reannounceTorrents([a.torrent.hash])}async function G(k){k??a.isActive?(await F(),b.value=setInterval(F,5e3)):(clearInterval(b.value),b.value=null)}return Ce(G),Re(()=>G(!1)),me(()=>a.isActive,G),(k,D)=>(u(),O(X,null,{default:t(()=>[(u(!0),$(B,null,R(s.value,(S,we)=>(u(),$(B,null,[we===3?(u(),O(Pe,{key:0,color:"white",thickness:"5"})):we>0?(u(),O(Pe,{key:1,class:"mx-5",color:"white"})):L("",!0),e(W,null,{default:t(()=>[c("div",$l,[c("div",{class:Le(`tracker-${n(Y)[S.status].toLowerCase()}`)},[e(ze,{class:"text-break text-wrap"},{default:t(()=>[y(l(S.url),1)]),_:2},1024),e(Ne,{class:"d-block"},{default:t(()=>[S.msg?(u(),$("div",kl,l(S.msg),1)):(u(),$("div",Tl,l(m(S.status)),1)),S.tier>=0?(u(),$("div",bl,l(n(d)("torrentDetail.trackers.tier",S.tier)),1)):L("",!0),S.status!==n(Y).NOT_WORKING?(u(),$("div",Vl,[c("div",null,l(w(S)),1),c("div",null,"Downloads: "+l(w(S.num_downloaded)),1)])):L("",!0)]),_:2},1024)],2),e(te),S.tier>=0?(u(),$("div",Nl,[e(be,{modelValue:h.isVisible,"onUpdate:modelValue":D[4]||(D[4]=j=>h.isVisible=j),"max-width":"750px"},{activator:t(({props:j})=>[e(I,he(j,{icon:"mdi-pencil",variant:"text",onClick:Me=>N(S)}),null,16,["onClick"])]),default:t(()=>[e(ae,null,{default:t(()=>[e(_e,null,{default:t(()=>[c("span",Ol,l(n(d)("torrentDetail.trackers.editTracker.title")),1)]),_:1}),e(ce,null,{default:t(()=>[e(n(Ye),{modelValue:h.isFormValid,"onUpdate:modelValue":D[1]||(D[1]=j=>h.isFormValid=j),onSubmit:D[2]||(D[2]=Fe(()=>{},["prevent"]))},{default:t(()=>[e(n(ke),{"model-value":h.oldUrl,disabled:"",label:k.$t("torrentDetail.trackers.editTracker.oldUrl")},null,8,["model-value","label"]),e(n(ke),{modelValue:h.newUrl,"onUpdate:modelValue":D[0]||(D[0]=j=>h.newUrl=j),id:"input",rules:A,label:k.$t("torrentDetail.trackers.editTracker.newUrl"),autofocus:"",onKeydown:Ze(g,["enter"])},null,8,["modelValue","label"])]),_:1},8,["modelValue"])]),_:1}),e(Te,null,{default:t(()=>[e(te),e(I,{color:"error",disabled:!h.isFormValid,onClick:D[3]||(D[3]=j=>h.isVisible=!1)},{default:t(()=>[y(l(n(d)("common.cancel")),1)]),_:1},8,["disabled"]),e(I,{color:"accent",onClick:g},{default:t(()=>[y(l(n(d)("common.ok")),1)]),_:1})]),_:1})]),_:1})]),_:2},1032,["modelValue"]),e(I,{color:"red",icon:"mdi-delete",variant:"text",onClick:j=>v(S)},null,8,["onClick"])])):L("",!0)])]),_:2},1024)],64))),256)),e(W,null,{default:t(()=>[c("div",{class:Le(["d-flex gap py-5",k.$vuetify.display.mobile?"flex-column":"justify-space-evenly"])},[e(be,{modelValue:T.value,"onUpdate:modelValue":D[6]||(D[6]=S=>T.value=S),"max-width":"750px"},{activator:t(({props:S})=>[e(I,he(S,{variant:"flat",text:n(d)("torrentDetail.trackers.addTrackers.title"),color:"accent"}),null,16,["text"])]),default:t(()=>[e(ae,null,{default:t(()=>[e(_e,null,{default:t(()=>[c("span",Sl,l(n(d)("torrentDetail.trackers.addTrackers.title")),1)]),_:1}),e(ce,null,{default:t(()=>[e(Xe,null,{default:t(()=>[e(P,null,{default:t(()=>[e(C,{cols:"12"},{default:t(()=>[e(Qe,{modelValue:i.value,"onUpdate:modelValue":D[5]||(D[5]=S=>i.value=S),label:n(d)("torrentDetail.trackers.addTrackers.newTrackers"),hint:n(d)("torrentDetail.trackers.addTrackers.newTrackersHint")},null,8,["modelValue","label","hint"])]),_:1})]),_:1})]),_:1})]),_:1}),e(Te,null,{default:t(()=>[e(te),e(I,{color:"error",onClick:p},{default:t(()=>[y(l(n(d)("common.cancel")),1)]),_:1}),e(I,{color:"accent",onClick:z},{default:t(()=>[y(l(n(d)("common.ok")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(I,{variant:"flat",disabled:s.value.length===3,text:n(d)("torrentDetail.trackers.reannounce"),color:"primary",onClick:U},null,8,["disabled","text"])],2)]),_:1})]),_:1}))}}),Fl=Se(Cl,[["__scopeId","data-v-ed947913"]]),Al={class:"pa-3"},Il={style:{"font-size":"1.6em !important"},class:"subtitle-1 ml-2"},Pl={class:"d-flex justify-end"},Rl=H({__name:"TorrentDetail",setup(f){const a=St(),d=Ct(),{t:r}=oe(),m=Be(),w=Oe(),_=V("overview"),s=M(()=>a.params.hash),i=M(()=>w.getTorrentByHash(s.value)),b=()=>{d.push({name:"dashboard"})};function T(A){if(m.hasActiveDialog)return!1;if(A.key==="Delete")return m.createDialog(Dt,{hashes:[s.value]}),A.preventDefault(),!0;A.key==="Escape"&&b()}return Ue(()=>{document.addEventListener("keydown",T)}),Ft(()=>{document.removeEventListener("keydown",T)}),(A,h)=>(u(),$("div",Al,[e(P,{"no-gutters":"",align:"center",justify:"center"},{default:t(()=>[e(C,null,{default:t(()=>[c("h1",Il,l(n(r)("torrentDetail.title")),1)]),_:1}),e(C,null,{default:t(()=>[c("div",Pl,[e(I,{icon:"mdi-close",variant:"plain",onClick:b})])]),_:1})]),_:1}),e(P,{class:"ma-0 pa-0"},{default:t(()=>[e($t,{modelValue:_.value,"onUpdate:modelValue":h[0]||(h[0]=N=>_.value=N),"bg-color":"primary",grow:"","show-arrows":""},{default:t(()=>[e(se,{value:"overview"},{default:t(()=>[y(l(n(r)("torrentDetail.tabs.overview")),1)]),_:1}),e(se,{value:"info"},{default:t(()=>[y(l(n(r)("torrentDetail.tabs.info")),1)]),_:1}),e(se,{value:"trackers"},{default:t(()=>[y(l(n(r)("torrentDetail.tabs.trackers")),1)]),_:1}),e(se,{value:"peers"},{default:t(()=>[y(l(n(r)("torrentDetail.tabs.peers")),1)]),_:1}),e(se,{value:"content"},{default:t(()=>[y(l(n(r)("torrentDetail.tabs.content")),1)]),_:1}),e(se,{value:"tagsAndCategories"},{default:t(()=>[y(l(n(r)("torrentDetail.tabs.tagsAndCategories")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1}),i.value?(u(),O(wt,{key:0,modelValue:_.value,"onUpdate:modelValue":h[1]||(h[1]=N=>_.value=N),touch:!1},{default:t(()=>[e(ue,{value:"overview"},{default:t(()=>[e(dl,{torrent:i.value,"is-active":_.value==="overview"},null,8,["torrent","is-active"])]),_:1}),e(ue,{value:"info"},{default:t(()=>[e(Jt,{torrent:i.value,"is-active":_.value==="info"},null,8,["torrent","is-active"])]),_:1}),e(ue,{value:"trackers"},{default:t(()=>[e(Fl,{torrent:i.value,"is-active":_.value==="trackers"},null,8,["torrent","is-active"])]),_:1}),e(ue,{value:"peers"},{default:t(()=>[e(wl,{torrent:i.value,"is-active":_.value==="peers"},null,8,["torrent","is-active"])]),_:1}),e(ue,{value:"content"},{default:t(()=>[e(Kt,{torrent:i.value,"is-active":_.value==="content"},null,8,["torrent","is-active"])]),_:1}),e(ue,{value:"tagsAndCategories"},{default:t(()=>[e(Dl,{torrent:i.value,"is-active":_.value==="tagsAndCategories"},null,8,["torrent","is-active"])]),_:1})]),_:1},8,["modelValue"])):L("",!0)]))}});export{Rl as default};