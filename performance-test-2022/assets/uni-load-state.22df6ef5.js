import{K as e,P as t,Q as o,S as a,l as s,o as r,c as n,w as i,b as p,d as l,t as d,g as c,f as u,i as m}from"./index.efa6eab6.js";import{_ as f}from"./uni-load-more.a827ef09.js";import{r as k}from"./uni-app.es.2c453ccb.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";var w={en:{noData:"No Data",noNetwork:"Network error",toSet:"Go to settings",error:"error"},"zh-Hans":{noData:"暂无数据",noNetwork:"网络异常",toSet:"前往设置",error:"错误"}};const{t:g}=e(w);var y=h({name:"uni-load-state",computed:{noData:()=>g("noData"),noNetwork:()=>g("noNetwork"),toSet:()=>g("toSet"),error:()=>g("error")},data:()=>({networkType:""}),props:{state:{type:Object,default:()=>({loading:!0,hasMore:!1,pagination:{pages:0},data:[],error:{}})}},mounted(){t((({networkType:e})=>{"none"==this.networkType&&"none"!=e&&this.$emit("networkResume"),this.networkType=e})),o({success:({networkType:e})=>{this.networkType=e}})},methods:{appear(){!this.state.loading&&this.state.hasMore&&this.$emit("loadMore")},openSettings(){if("ios"==a().platform){var e=plus.ios.import("UIApplication").sharedApplication(),t=plus.ios.import("NSURL"),o=t.URLWithString("App-prefs:root=General");e.openURL(o),plus.ios.deleteObject(o),plus.ios.deleteObject(t),plus.ios.deleteObject(e)}else{var s=plus.android.importClass("android.content.Intent"),r=plus.android.importClass("android.provider.Settings"),n=plus.android.runtimeMainActivity(),i=new s(r.ACTION_SETTINGS);n.startActivity(i)}}}},[["render",function(e,t,o,a,h,w){const g=c,y=u,S=m,_=k(s("uni-load-more"),f);return r(),n(S,{onAppear:w.appear},{default:i((()=>[o.state.error?(r(),n(S,{key:0},{default:i((()=>["none"==h.networkType?(r(),n(S,{key:0,class:"box"},{default:i((()=>[p(g,{class:"icon-image",src:"./assets/disconnection.be358d85.png",mode:"widthFix"}),p(y,{class:"tip-text"},{default:i((()=>[l(d(w.noNetwork),1)])),_:1}),p(S,{class:"btn btn-default",onClick:w.openSettings},{default:i((()=>[p(y,{class:"btn-text"},{default:i((()=>[l(d(w.toSet),1)])),_:1})])),_:1},8,["onClick"])])),_:1})):(r(),n(y,{key:1,class:"error"},{default:i((()=>[l(d(w.error)+"："+d(JSON.stringify(o.state.error)),1)])),_:1}))])),_:1})):(r(),n(_,{key:1,class:"uni-load-more",status:o.state.loading?"loading":o.state.hasMore?"hasMore":"noMore"},null,8,["status"]))])),_:1},8,["onAppear"])}],["__scopeId","data-v-3c7fa5c9"]]);export{y as _};
