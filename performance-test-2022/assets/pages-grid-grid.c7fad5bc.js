var e=Object.defineProperty,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(t,o,s)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[o]=s;import{o as r,c as d,w as l,r as n,a,B as c,J as u,F as p,e as h,n as g,b,d as f,t as m,i as _,f as y,Z as k,W as w,G as x,g as C,_ as I,l as v,$ as j}from"./index.efa6eab6.js";import{_ as B}from"./plugin-vue_export-helper.21dcd24c.js";import{r as S}from"./uni-app.es.2c453ccb.js";import{_ as $}from"./unicloud-db.4680f85e.js";import{_ as L}from"./uni-section.1e86effc.js";import{_ as O,a as D}from"./uni-grid.fcadf64c.js";import{s as T}from"./uni-status-bar.6d45e855.js";var F=B({name:"UniSwiperDot",emits:["clickItem"],props:{info:{type:Array,default:()=>[]},current:{type:Number,default:0},dotsStyles:{type:Object,default:()=>({})},mode:{type:String,default:"default"},field:{type:String,default:""}},data:()=>({dots:{width:6,height:6,bottom:10,color:"#fff",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",selectedBackgroundColor:"#333",selectedBorder:"1px rgba(0, 0, 0, .9) solid"}}),watch:{dotsStyles(e){this.dots=Object.assign(this.dots,this.dotsStyles)},mode(e){"indexes"===e?(this.dots.width=14,this.dots.height=14):(this.dots.width=6,this.dots.height=6)}},created(){"indexes"===this.mode&&(this.dots.width=12,this.dots.height=12),this.dots=Object.assign(this.dots,this.dotsStyles)},methods:{clickItem(e){this.$emit("clickItem",e)}}},[["render",function(e,t,o,s,i,k){const w=_,x=y;return r(),d(w,{class:"uni-swiper__warp"},{default:l((()=>[n(e.$slots,"default",{},void 0,!0),"default"===o.mode?(r(),d(w,{style:a({bottom:i.dots.bottom+"px"}),class:"uni-swiper__dots-box",key:"default"},{default:l((()=>[(r(!0),c(p,null,u(o.info,((e,t)=>(r(),d(w,{onClick:e=>k.clickItem(t),style:a({width:(t===o.current?2*i.dots.width:i.dots.width)+"px",height:i.dots.width/2+"px","background-color":t!==o.current?i.dots.backgroundColor:i.dots.selectedBackgroundColor,"border-radius":"0px"}),key:t,class:"uni-swiper__dots-item uni-swiper__dots-bar"},null,8,["onClick","style"])))),128))])),_:1},8,["style"])):h("",!0),"dot"===o.mode?(r(),d(w,{style:a({bottom:i.dots.bottom+"px"}),class:"uni-swiper__dots-box",key:"dot"},{default:l((()=>[(r(!0),c(p,null,u(o.info,((e,t)=>(r(),d(w,{onClick:e=>k.clickItem(t),style:a({width:i.dots.width+"px",height:i.dots.height+"px","background-color":t!==o.current?i.dots.backgroundColor:i.dots.selectedBackgroundColor,border:t!==o.current?i.dots.border:i.dots.selectedBorder}),key:t,class:"uni-swiper__dots-item"},null,8,["onClick","style"])))),128))])),_:1},8,["style"])):h("",!0),"round"===o.mode?(r(),d(w,{style:a({bottom:i.dots.bottom+"px"}),class:"uni-swiper__dots-box",key:"round"},{default:l((()=>[(r(!0),c(p,null,u(o.info,((e,t)=>(r(),d(w,{onClick:e=>k.clickItem(t),class:g([[t===o.current&&"uni-swiper__dots-long"],"uni-swiper__dots-item"]),style:a({width:(t===o.current?3*i.dots.width:i.dots.width)+"px",height:i.dots.height+"px","background-color":t!==o.current?i.dots.backgroundColor:i.dots.selectedBackgroundColor,border:t!==o.current?i.dots.border:i.dots.selectedBorder}),key:t},null,8,["onClick","class","style"])))),128))])),_:1},8,["style"])):h("",!0),"nav"===o.mode?(r(),d(w,{key:"nav",style:a({"background-color":o.dotsStyles.backgroundColor,bottom:"0"}),class:"uni-swiper__dots-box uni-swiper__dots-nav"},{default:l((()=>[b(x,{style:a({color:o.dotsStyles.color}),class:"uni-swiper__dots-nav-item"},{default:l((()=>[f(m(o.current+1+"/"+o.info.length+" "+o.info[o.current][o.field]),1)])),_:1},8,["style"])])),_:1},8,["style"])):h("",!0),"indexes"===o.mode?(r(),d(w,{key:"indexes",style:a({bottom:i.dots.bottom+"px"}),class:"uni-swiper__dots-box"},{default:l((()=>[(r(!0),c(p,null,u(o.info,((e,t)=>(r(),d(w,{onClick:e=>k.clickItem(t),style:a({width:i.dots.width+"px",height:i.dots.height+"px",color:t===o.current?i.dots.selectedColor:i.dots.color,"background-color":t!==o.current?i.dots.backgroundColor:i.dots.selectedBackgroundColor,border:t!==o.current?i.dots.border:i.dots.selectedBorder}),key:t,class:"uni-swiper__dots-item uni-swiper__dots-indexes"},{default:l((()=>[b(x,{class:"uni-swiper__dots-indexes-text"},{default:l((()=>[f(m(t+1),1)])),_:2},1024)])),_:2},1032,["onClick","style"])))),128))])),_:1},8,["style"])):h("",!0)])),_:3})}],["__scopeId","data-v-065ac2b6"]]);var P=B({components:{statusBar:T},data:()=>({gridList:[],current:0,swiperDotIndex:0}),computed:((e,r)=>{for(var d in r||(r={}))o.call(r,d)&&i(e,d,r[d]);if(t)for(var d of t(r))s.call(r,d)&&i(e,d,r[d]);return e})({},k({hasLogin:"user/hasLogin"})),onLoad(){let e=[];for(var t=0;t<3;t++)e.push(this.$t("grid.visibleToAll"));for(t=0;t<3;t++)e.push(this.$t("grid.invisibleToTourists"));for(t=0;t<3;t++)e.push(this.$t("grid.adminVisible"));this.gridList=e},methods:{change(e){w({title:this.$t("grid.clickTip")+` ${e.detail.index} `+this.$t("grid.clickTipGrid"),icon:"none"})},onqueryload(e){},changeSwiper(e){this.current=e.detail.current},clickItem(e){this.swiperDotIndex=e},clickBannerItem(e){e.open_url&&x({url:"/pages/common/webview/webview?url="+e.open_url+"&title="+e.title,success:e=>{},fail:()=>{},complete:()=>{}})}}},[["render",function(e,t,o,s,i,n){const a=C,g=_,k=j,w=I,x=S(v("uni-swiper-dot"),F),B=S(v("unicloud-db"),$),T=S(v("uni-section"),L),P=y,q=S(v("uni-grid-item"),O),A=S(v("uni-grid"),D);return r(),d(g,{class:"warp"},{default:l((()=>[b(B,{ref:"bannerdb",collection:"opendb-banner",field:"_id,bannerfile,open_url,title",onLoad:n.onqueryload},{default:l((({data:e,loading:t,error:o,options:s})=>[t||e.length?(r(),d(x,{key:1,class:"uni-swiper-dot-box",onClickItem:n.clickItem,info:e,current:i.current,field:"content"},{default:l((()=>[b(w,{class:"swiper-box",onChange:n.changeSwiper,current:i.swiperDotIndex},{default:l((()=>[(r(!0),c(p,null,u(e,((e,t)=>(r(),d(k,{key:e._id},{default:l((()=>[b(g,{class:"swiper-item",onClick:t=>n.clickBannerItem(e)},{default:l((()=>[b(a,{class:"banner-image",src:e.bannerfile.url,mode:"aspectFill",draggable:!1},null,8,["src"])])),_:2},1032,["onClick"])])),_:2},1024)))),128))])),_:2},1032,["onChange","current"])])),_:2},1032,["onClickItem","info","current"])):(r(),d(a,{key:0,class:"banner-image",src:"./assets/empty.fb65cbab.png",mode:"aspectFill",draggable:!1}))])),_:1},8,["onLoad"]),b(T,{title:e.$t("grid.grid"),style:{margin:"0"},type:"line"},null,8,["title"]),b(g,{class:"example-body"},{default:l((()=>[b(A,{column:3,highlight:!0,onChange:n.change},{default:l((()=>[(r(!0),c(p,null,u(i.gridList,((t,o)=>(r(),c(p,null,[o<3||o>2&&o<6&&e.hasLogin||o>5&&e.uniIDHasRole("admin")?(r(),d(q,{index:o,key:o},{default:l((()=>[b(g,{class:"grid-item-box",style:{"background-color":"#fff"}},{default:l((()=>[b(a,{src:"/static/grid/c"+(o+1)+".png",class:"image",mode:"aspectFill"},null,8,["src"]),b(P,{class:"text"},{default:l((()=>[f(m(t),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["index"])):h("",!0)],64)))),256))])),_:1},8,["onChange"])])),_:1})])),_:1})}],["__scopeId","data-v-65550c10"]]);export{P as default};
