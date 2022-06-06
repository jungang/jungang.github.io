var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(t,i,o)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[i]=o,a=(e,t)=>{for(var i in t||(t={}))n.call(t,i)&&s(e,i,t[i]);if(o)for(var i of o(t))l.call(t,i)&&s(e,i,t[i]);return e},u=(e,o)=>t(e,i(o));import{m as r,o as c,c as p,w as d,b as f,C as h,j as m,t as g,p as b,l as y,i as _,I as v,S as k,T as x,a2 as $,O as T,R as C,a6 as S,P as I,f as M,_ as w,a9 as P,Q as B,n as j,as as O}from"./index.18541c3e.js";import{_ as N}from"./cloud-image.65f585b5.js";import{r as F}from"./uni-app.es.aff9600a.js";import{_ as A}from"./uni-icons.1f9744ac.js";import{_ as U}from"./uni-list-item.7e7ca9e7.js";import{_ as D}from"./uni-list.c0a0c801.js";import{_ as L}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as G}from"./uni-popup.5a80fa5b.js";var V={data:()=>({}),created(){this.popup=this.getParent()},methods:{getParent(e="uniPopup"){let t=this.$parent,i=t.$options.name;for(;i!==e;){if(t=t.$parent,!t)return!1;i=t.$options.name}return t}}},W={en:{"uni-popup.cancel":"cancel","uni-popup.ok":"ok","uni-popup.placeholder":"pleace enter","uni-popup.title":"Hint","uni-popup.shareTitle":"Share to"},"zh-Hans":{"uni-popup.cancel":"取消","uni-popup.ok":"确定","uni-popup.placeholder":"请输入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"},"zh-Hant":{"uni-popup.cancel":"取消","uni-popup.ok":"確定","uni-popup.placeholder":"請輸入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}};const{t:z}=r(W);var H=L({name:"uniPopupDialog",mixins:[V],emits:["confirm","close"],props:{value:{type:[String,Number],default:""},placeholder:{type:[String,Number],default:""},type:{type:String,default:"error"},mode:{type:String,default:"base"},title:{type:String,default:""},content:{type:String,default:""},beforeClose:{type:Boolean,default:!1},cancelText:{type:String,default:""},confirmText:{type:String,default:""}},data:()=>({dialogType:"error",focus:!1,val:""}),computed:{okText(){return this.confirmText||z("uni-popup.ok")},closeText(){return this.cancelText||z("uni-popup.cancel")},placeholderText(){return this.placeholder||z("uni-popup.placeholder")},titleText(){return this.title||z("uni-popup.title")}},watch:{type(e){this.dialogType=e},mode(e){"input"===e&&(this.dialogType="info")},value(e){this.val=e}},created(){this.popup.disableMask(),"input"===this.mode?(this.dialogType="info",this.val=this.value):this.dialogType=this.type},mounted(){this.focus=!0},methods:{onOk(){"input"===this.mode?this.$emit("confirm",this.val):this.$emit("confirm"),this.beforeClose||this.popup.close()},closeDialog(){this.$emit("close"),this.beforeClose||this.popup.close()},close(){this.popup.close()}}},[["render",function(e,t,i,o,n,l){const s=y,a=_,u=v;return c(),p(a,{class:"uni-popup-dialog"},{default:d((()=>[f(a,{class:"uni-dialog-title"},{default:d((()=>[f(s,{class:h(["uni-dialog-title-text",["uni-popup__"+n.dialogType]])},{default:d((()=>[m(g(l.titleText),1)])),_:1},8,["class"])])),_:1}),"base"===i.mode?(c(),p(a,{key:0,class:"uni-dialog-content"},{default:d((()=>[b(e.$slots,"default",{},(()=>[f(s,{class:"uni-dialog-content-text"},{default:d((()=>[m(g(i.content),1)])),_:1})]),!0)])),_:3})):(c(),p(a,{key:1,class:"uni-dialog-content"},{default:d((()=>[b(e.$slots,"default",{},(()=>[f(u,{class:"uni-dialog-input",modelValue:n.val,"onUpdate:modelValue":t[0]||(t[0]=e=>n.val=e),type:"text",placeholder:l.placeholderText,focus:n.focus},null,8,["modelValue","placeholder","focus"])]),!0)])),_:3})),f(a,{class:"uni-dialog-button-group"},{default:d((()=>[f(a,{class:"uni-dialog-button",onClick:l.closeDialog},{default:d((()=>[f(s,{class:"uni-dialog-button-text"},{default:d((()=>[m(g(l.closeText),1)])),_:1})])),_:1},8,["onClick"]),f(a,{class:"uni-dialog-button uni-border-left",onClick:l.onOk},{default:d((()=>[f(s,{class:"uni-dialog-button-text uni-button-color"},{default:d((()=>[m(g(l.okText),1)])),_:1})])),_:1},8,["onClick"])])),_:1})])),_:3})}],["__scopeId","data-v-53d80307"]]);k.database().collection("uni-id-users");var R=L({emits:["next"],computed:a({},x({userInfo:"user/info",login:"user/hasLogin"})),data:()=>({}),methods:u(a({},$({setUserInfo:"user/login"})),{beforeGetphonenumber(){T({mask:!0}),wx.checkSession({success(){console.log("session_key 未过期"),C()},fail(){console.log("session_key 已经失效，正在执行更新"),S({success({code:e}){k.callFunction({name:"uni-id-cf",data:{action:"refreshSessionKey",params:{code:e}},complete:e=>{console.log(e),C()}})},fail:e=>{console.error(e)}})}})},bindMobileByMpWeixin(e){console.log(e.detail),"getPhoneNumber:ok"==e.errMsg?k.callFunction({name:"uni-id-cf",data:{action:"bindMobileByMpWeixin",params:e.detail},complete:e=>{console.log(e)},success:e=>{I({title:e.result.msg||"绑定成功",icon:"none"}),0===e.result.code&&this.setUserInfo({mobile:e.result.mobile}),this.closeMe()}}):this.closeMe()},async open(e){this.$refs.popup.open(),this.beforeGetphonenumber()},closeMe(e){this.$refs.popup.close()}})},[["render",function(e,t,i,o,n,l){const s=y,a=w,u=_,r=F(M("uni-popup"),G);return c(),p(r,{ref:"popup",type:"bottom"},{default:d((()=>[f(u,{class:"box"},{default:d((()=>[f(s,{class:"headBox"},{default:d((()=>[m("绑定资料")])),_:1}),f(s,{class:"tip"},{default:d((()=>[m("将一键获取你的手机号码绑定你的个人资料")])),_:1}),f(u,{class:"btnBox"},{default:d((()=>[f(s,{onClick:l.closeMe,class:"close"},{default:d((()=>[m("关闭")])),_:1},8,["onClick"]),f(a,{class:"agree",type:"warn",onClick:l.beforeGetphonenumber,"open-type":"getPhoneNumber",onGetphonenumber:l.bindMobileByMpWeixin},{default:d((()=>[m("获取")])),_:1},8,["onClick","onGetphonenumber"])])),_:1})])),_:1})])),_:1},512)}],["__scopeId","data-v-f3ae4302"]]);const q=k.database().collection("uni-id-users");var E=L({data:()=>({univerifyStyle:{authButton:{title:"本机号码一键绑定"},otherLoginButton:{title:"其他号码绑定"}}}),onLoad(){this.univerifyStyle.authButton.title=this.$t("userinfo.bindPhoneNumber"),this.univerifyStyle.otherLoginButton.title=this.$t("userinfo.bindOtherLogin"),P({title:this.$t("userinfo.navigationBarTitle")})},computed:u(a({},x({userInfo:"user/info",login:"user/hasLogin"})),{avatar_file(){if(this.userInfo.avatar_file&&this.userInfo.avatar_file.url)return this.userInfo.avatar_file}}),methods:u(a({},$({setUserInfo:"user/login"})),{bindMobile(){this.bindMobileBySmsCode()},univerify(){S({provider:"univerify",univerifyStyle:this.univerifyStyle,success:async e=>{console.log(e.authResult),k.callFunction({name:"uni-id-cf",data:{action:"bindMobileByUniverify",params:e.authResult},success:({result:e})=>{console.log(e),0===e.code?(this.setUserInfo({mobile:e.mobile}),uni.closeAuthView()):B({content:e.msg,showCancel:!1,complete(){uni.closeAuthView()}})}})},fail:e=>{console.log(e),"30002"!=e.code&&"30001"!=e.code||this.bindMobileBySmsCode()}})},bindMobileBySmsCode(){j({url:"/pages/ucenter/userinfo/bind-mobile/bind-mobile"})},setNickname(e){console.log(e),e?(q.where("_id==$env.uid").update({nickname:e}).then((t=>{console.log(t),t.result.updated?(I({title:this.$t("common.updateSucceeded"),icon:"none"}),this.setUserInfo({nickname:e})):I({title:this.$t("userinfo.noChange"),icon:"none"})})),this.$refs.dialog.close()):this.$refs.dialog.open()},setAvatarFile(e){T({title:this.$t("userinfo.setting"),mask:!0}),q.where("_id==$env.uid").update({avatar_file:e}).then((t=>{console.log(t),I(e?{icon:"none",title:this.$t("userinfo.setSucceeded")}:{icon:"none",title:this.$t("userinfo.deleteSucceeded")}),this.setUserInfo({avatar_file:e})})).catch((e=>{B({content:e.message||this.$t("userinfo.requestFail"),showCancel:!1})})).finally((()=>{C()}))},uploadAvatarImg(e){const t={quality:100,width:600,height:600,resize:!0};O({count:1,crop:t,success:async e=>{console.log(e);let i=e.tempFiles[0],o={extname:i.name.split(".")[i.name.split(".").length-1]},n=e.tempFilePaths[0];n=await new Promise((e=>{j({url:"/pages/ucenter/userinfo/cropImage?path="+n+`&options=${JSON.stringify(t)}`,animationType:"fade-in",events:{success:t=>{e(t)}}})})),console.log(this.userInfo);let l=this.userInfo._id+""+Date.now();o.name=l,T({title:this.$t("userinfo.uploading"),mask:!0});let{fileID:s}=await k.uploadFile({filePath:n,cloudPath:l,fileType:"image"});o.url=s,console.log({avatar_file:o}),C(),this.setAvatarFile(o)}})}})},[["render",function(e,t,i,o,n,l){const s=y,a=F(M("cloud-image"),N),u=F(M("uni-icons"),A),r=_,h=F(M("uni-list-item"),U),b=F(M("uni-list"),D),v=F(M("uni-popup-dialog"),H),k=F(M("uni-popup"),G),x=F(M("uni-bindMobileByMpWeixin"),R);return c(),p(r,null,{default:d((()=>[f(b,null,{default:d((()=>[f(h,{class:"item"},{body:d((()=>[f(r,{class:"item"},{default:d((()=>[f(s,null,{default:d((()=>[m(g(e.$t("userinfo.ProfilePhoto")),1)])),_:1}),l.avatar_file?(c(),p(a,{key:0,onClick:l.uploadAvatarImg,src:l.avatar_file.url,width:"50px",height:"50px"},null,8,["onClick","src"])):(c(),p(u,{key:1,onClick:l.uploadAvatarImg,class:"chooseAvatar",type:"plusempty",size:"30",color:"#dddddd"},null,8,["onClick"]))])),_:1})])),_:1}),f(h,{class:"item",onClick:t[0]||(t[0]=e=>l.setNickname("")),title:e.$t("userinfo.nickname"),rightText:e.userInfo.nickname||e.$t("userinfo.notSet"),link:""},null,8,["title","rightText"]),f(h,{class:"item",onClick:l.bindMobile,title:e.$t("userinfo.phoneNumber"),rightText:e.userInfo.mobile||e.$t("userinfo.notSpecified"),link:""},null,8,["onClick","title","rightText"])])),_:1}),f(k,{ref:"dialog",type:"dialog"},{default:d((()=>[f(v,{mode:"input",value:e.userInfo.nickname,onConfirm:l.setNickname,title:e.$t("userinfo.setNickname"),placeholder:e.$t("userinfo.setNicknamePlaceholder")},null,8,["value","onConfirm","title","placeholder"])])),_:1},512),f(x,{ref:"uni-bindMobileByMpWeixin"},null,512)])),_:1})}],["__scopeId","data-v-2c5ef4d8"]]);export{E as default};
