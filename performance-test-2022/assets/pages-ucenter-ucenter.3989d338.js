var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(t,s,i)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i,l=(e,t)=>{for(var s in t||(t={}))o.call(t,s)&&a(e,s,t[s]);if(i)for(var s of i(t))n.call(t,s)&&a(e,s,t[s]);return e},r=(e,i)=>t(e,s(i));import{V as c,X as d,R as u,W as h,C as g,G as f,l as p,o as _,c as m,w as y,b as k,d as I,t as b,B as w,J as C,F as x,n as L,g as v,f as F,i as $,Z as A,D as S,a5 as E,e as R}from"./index.efa6eab6.js";import{_ as T}from"./uni-icons.e62a94a4.js";import{r as j}from"./uni-app.es.2c453ccb.js";import{_ as O}from"./uni-popup.b19516d6.js";import{_ as D}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as V}from"./cloud-image.6a029f8f.js";import{_ as P,a as B}from"./uni-grid.fcadf64c.js";import{_ as M,a as U}from"./uni-list.f71a14f1.js";const G="RewardedVideo",z="FullScreenVideo";const q="csj";class J{constructor(e,t={}){this._isLoad=!1,this._isLoading=!1,this._lastLoadTime=0,this._lastError=null,this._retryCount=0,this._loadCallback=null,this._closeCallback=null,this._errorCallback=null;const s=this._ad=e;s.onLoad((e=>{this._isLoading=!1,this._isLoad=!0,this._lastLoadTime=Date.now(),this.onLoad()})),s.onClose((e=>{this._isLoad=!1,this.onClose(e)})),s.onVerify&&s.onVerify((e=>{})),s.onError((({code:e,message:t})=>{this._isLoading=!1;const s={code:e,errMsg:t};if(-5008!==e){if(this._retryCount<1)return this._retryCount+=1,void this._loadAd();this._lastError=s,this.onError(s)}else this._loadAd()}))}get isExpired(){return 0!==this._lastLoadTime&&Math.abs(Date.now()-this._lastLoadTime)>18e5}get isLoading(){return this._isLoading}getProvider(){return this._ad.getProvider()}load(e,t){this._loadCallback=e,this._errorCallback=t,this._isLoading||(this._isLoad?this.onLoad():(this._retryCount=0,this._loadAd()))}show(e){if(this._closeCallback=e,this._isLoading||!this._isLoad)return;if(null!==this._lastError)return void this.onError(this._lastError);this.getProvider()===q&&this.isExpired?this._loadAd():this._ad.show()}onLoad(e){null!=this._loadCallback&&this._loadCallback()}onClose(e){null!=this._closeCallback&&this._closeCallback({isEnded:e.isEnded})}onError(e){null!=this._errorCallback&&this._errorCallback(e)}destroy(){this._ad.destroy()}_loadAd(){this._isLoad=!1,this._isLoading=!0,this._lastError=null,this._ad.load()}}class W extends J{constructor(e={}){super(plus.ad.createRewardedVideoAd(e),e)}}class X extends J{constructor(e={}){super(plus.ad.createFullScreenVideoAd(e),e)}}var Z=new class{constructor(){this._ads={}}load(e,t,s){let i=this._fixOldOptions(e),{adpid:o}=i;o&&!this.isBusy(o)&&this.get(i).load(t,s)}show(e,t,s){let i=this._fixOldOptions(e),{adpid:o}=i;if(o){c({mask:!0});var n=this.get(i);n.load((()=>{d(),n.show((e=>{t&&t(e)}))}),(e=>{d(),s&&s(e)}))}}isBusy(e){return this._ads[e]&&this._ads[e].isLoading}get(e){const{adpid:t,singleton:s=!0}=e;return!1===s&&this._ads[t]&&(this._ads[t].destroy(),delete this._ads[t]),delete e.singleton,this._ads[t]||(this._ads[t]=this._createAdInstance(e)),this._ads[t]}_createAdInstance(e){const t=e.adType||G;delete e.adType;let s=null;return t===G?s=new W(e):t===z&&(s=new X(e)),s}_fixOldOptions(e){return"string"==typeof e?{adpid:e}:e}};const H=u.database().action("signIn").collection("opendb-sign-in");new Date((new Date).toLocaleDateString()).getTime();var K=D({name:"uni-signIn",data:()=>({total:0,scores:0,weekdays:[1,2,3,4,5,6,7],signInRes:{days:[],n:0}}),mounted(){},methods:{async getSignedInInfo(e="今日已签过"){const t=new Date((new Date).toLocaleDateString()).getTime();let s=await H.where(`'user_id' == $env.uid && 'date' == ${t} && 'isDelete' == false`).get();return s.result.data.length&&(this.signInRes=s.result,this.$refs.popup.open(),h({title:e,duration:3e3,icon:"none"})),s.result.data},async showRewardedVideoAd(){let e=await this.getSignedInInfo();if(console.log(e),e&&0==e.length){let{_id:e}=g("userInfo");if(console.log(e,g("userInfo")),!e)return f({url:"/pages/ucenter/login-page/index/index"});Z.show({adpid:1733738477,adType:"RewardedVideo",urlCallback:{userId:e,extra:"uniSignIn"}},(e=>{if(e&&e.isEnded){console.log("onClose "+e.isEnded);let t=0;c({mask:!0});let s=setInterval((async i=>{t++,e=await this.getSignedInInfo("签到成功"),(t>2||e.length)&&(e.length||h({title:"签到失败！",icon:"error",duration:6e3}),clearInterval(s),d())}),2e3)}else console.log("onClose "+e.isEnded),h({title:"播放中途退出,签到失败！",icon:"error",duration:5e3})}),(e=>{console.log(e),h({title:e.errMsg,icon:"none"})}))}},async open(){c({mask:!0});try{let e=await this.getSignedInInfo();if(e&&0==e.length){let e=await H.add({});console.log(e),d(),this.signInRes=e.result,this.$refs.popup.open(),7==this.signInRes.days.length?h({title:"你已完成7日连续签到，获得60积分！",icon:"none",duration:5e3}):h({title:"签到成功,获得10积分！",icon:"none",duration:5e3})}}catch(e){d(),console.error(e)}},closeMe(e){this.$refs.popup.close()}}},[["render",function(e,t,s,i,o,n){const a=v,l=F,r=$,c=j(p("uni-icons"),T),d=j(p("uni-popup"),O);return _(),m(r,null,{default:y((()=>[k(d,{ref:"popup",type:"center"},{default:y((()=>[k(a,{class:"background-img",src:"./assets/background.42813c32.png",mode:"width"}),k(r,{class:"content"},{default:y((()=>[k(r,{class:"main"},{default:y((()=>[k(l,{class:"title"},{default:y((()=>[I("今日签到成功")])),_:1}),k(l,{class:"total"},{default:y((()=>[I("本轮已签到"+b(o.signInRes.days.length)+"天",1)])),_:1}),k(l,{class:"scores"},{default:y((()=>[I("当前积分："+b(o.signInRes.score),1)])),_:1})])),_:1}),k(r,null,{default:y((()=>[k(r,{class:"days-box"},{default:y((()=>[(_(!0),w(x,null,C(o.weekdays,((e,t)=>(_(),m(r,{class:"days",key:t},{default:y((()=>[o.signInRes.days.includes(e-1)?(_(),m(c,{key:0,class:"icon active",color:"#FFFFFF",type:"checkmarkempty"})):(_(),w(x,{key:1},[e<o.signInRes.n?(_(),m(c,{key:0,class:"icon active",color:"#FFFFFF",type:"closeempty"})):(_(),m(c,{key:1,class:"icon",type:"checkmarkempty",color:"#FFFFFF"}))],64)),o.signInRes.days.includes(e-1)||e>o.signInRes.n?(_(),m(l,{key:2,class:L(["day",{grey:e>o.signInRes.n}])},{default:y((()=>[I("第"+b(e)+"天",1)])),_:2},1032,["class"])):(_(),m(l,{key:3,class:"day"},{default:y((()=>[I("缺卡")])),_:1}))])),_:2},1024)))),128))])),_:1}),k(r,{class:"tip-box"},{default:y((()=>[k(l,{class:"tip"},{default:y((()=>[I("签到一次得10积分")])),_:1}),k(r,{class:"row"},{default:y((()=>[k(l,{class:"tip"},{default:y((()=>[I("连续签到7天可多得")])),_:1}),k(l,{class:"red"},{default:y((()=>[I("50")])),_:1}),k(l,{class:"tip"},{default:y((()=>[I("积分")])),_:1})])),_:1})])),_:1})])),_:1}),k(c,{onClick:n.closeMe,class:"close-icon",type:"closeempty",size:"20",color:"#AAAAAA"},null,8,["onClick"])])),_:1})])),_:1},512)])),_:1})}],["__scopeId","data-v-6c90e780"]]);const N=u.database();var Q=D({data(){return{gridList:[{text:this.$t("mine.showText"),icon:"chat"},{text:this.$t("mine.showText"),icon:"cloud-upload"},{text:this.$t("mine.showText"),icon:"contact"},{text:this.$t("mine.showText"),icon:"download"}],ucenterList:[[{title:this.$t("mine.signIn"),event:"signIn",icon:"compose"},{title:this.$t("mine.readArticles"),to:"/pages/ucenter/read-news-log/read-news-log",icon:"flag"},{title:this.$t("mine.myScore"),to:"",event:"getScore",icon:"paperplane"}],[{title:this.$t("mine.feedback"),to:"/uni_modules/uni-feedback/pages/opendb-feedback/opendb-feedback",icon:"help"},{title:this.$t("mine.settings"),to:"/pages/ucenter/settings/settings",icon:"gear"}],[{title:this.$t("mine.about"),to:"/pages/ucenter/about/about",icon:"info"}]],listStyles:{height:"150rpx",width:"150rpx",border:{color:"#eee",width:"1px",style:"solid",radius:"100%"}}}},onLoad(){},computed:r(l({},A({userInfo:"user/info",hasLogin:"user/hasLogin"})),{appConfig:()=>S().globalData.config}),methods:r(l({},E({setUserInfo:"user/login"})),{toSettings(){f({url:"/pages/ucenter/settings/settings"})},signIn(){this.$refs.signIn.open()},signInByAd(){this.$refs.signIn.showRewardedVideoAd()},ucenterListClick(e){!e.to&&e.event&&this[e.event]()},async checkVersion(){let e=await new Promise(((e,t)=>{t({message:"请在App中使用"})}));console.log(e),e.result.code>0||h({title:e.result.message,icon:"none"})},toUserInfo(){f({url:"/pages/ucenter/userinfo/userinfo"})},tapGrid(e){h({title:this.$t("mine.clicked")+" "+(e+1),icon:"none"})},gotoMarket(){},getScore(){if(!this.userInfo)return h({title:this.$t("mine.checkScore"),icon:"none"});c({mask:!0}),N.collection("uni-id-scores").where('"user_id" == $env.uid').field("score,balance").orderBy("create_date","desc").limit(1).get().then((e=>{console.log(e);const t=e.result.data[0];let s="";s=t?this.$t("mine.currentScore")+t.balance:this.$t("mine.noScore"),h({title:s,icon:"none"})})).finally((()=>{d()}))},async share(){let{result:e}=await u.callFunction({name:"uni-id-cf",data:{action:"getUserInviteCode"}});console.log(e);let t=e.myInviteCode||e.userInfo.my_invite_code;console.log(t),this.appConfig.about}})},[["render",function(e,t,s,i,o,n){const a=j(p("uni-sign-in"),K),l=j(p("cloud-image"),V),r=v,c=F,d=$,u=j(p("uni-icons"),T),h=j(p("uni-grid-item"),P),g=j(p("uni-grid"),B),f=j(p("uni-list-item"),M),L=j(p("uni-list"),U);return _(),m(d,{class:"center"},{default:y((()=>[k(a,{ref:"signIn"},null,512),k(d,{class:"userInfo",onClickCapture:n.toUserInfo},{default:y((()=>[e.userInfo.avatar_file&&e.userInfo.avatar_file.url?(_(),m(l,{key:0,width:"150rpx",height:"150rpx",src:e.userInfo.avatar_file.url},null,8,["src"])):(_(),m(r,{key:1,class:"logo-img",src:"./assets/defaultAvatarUrl.80fc747f.png"})),k(d,{class:"logo-title"},{default:y((()=>[e.hasLogin?(_(),m(c,{key:0,class:"uer-name"},{default:y((()=>[I(b(e.userInfo.nickname||e.userInfo.username||e.userInfo.mobile),1)])),_:1})):(_(),m(c,{key:1,class:"uer-name"},{default:y((()=>[I(b(e.$t("mine.notLogged")),1)])),_:1}))])),_:1})])),_:1},8,["onClickCapture"]),k(g,{class:"grid",column:4,showBorder:!1,square:!0},{default:y((()=>[(_(!0),w(x,null,C(o.gridList,((e,t)=>(_(),m(h,{class:"item",onClick:e=>n.tapGrid(t),key:t},{default:y((()=>[k(u,{class:"icon",color:"#007AFF",type:e.icon,size:"26"},null,8,["type"]),k(c,{class:"text"},{default:y((()=>[I(b(e.text),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1}),(_(!0),w(x,null,C(o.ucenterList,((e,t)=>(_(),m(L,{class:"center-list",key:t},{default:y((()=>[(_(!0),w(x,null,C(e,((e,t)=>(_(),m(f,{title:e.title,link:"",rightText:e.rightText,key:t,clickable:!0,to:e.to,onClick:t=>n.ucenterListClick(e),"show-extra-icon":!0,extraIcon:{type:e.icon,color:"#999"}},{footer:y((()=>[e.showBadge?(_(),m(d,{key:0,class:"item-footer"},{default:y((()=>[k(c,{class:"item-footer-text"},{default:y((()=>[I(b(e.rightText),1)])),_:2},1024),k(d,{class:"item-footer-badge"})])),_:2},1024)):R("",!0)])),_:2},1032,["title","rightText","to","onClick","extraIcon"])))),128))])),_:2},1024)))),128))])),_:1})}],["__scopeId","data-v-77059c6a"]]);export{Q as default};
