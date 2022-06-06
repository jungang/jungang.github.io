import{S as e,g as a,a as s,h as t,n as o,s as r,o as l,c as i,w as n,b as d,d as c,e as u,r as h,F as f,f as m,i as p,j as _,t as b,k as g,l as y}from"./index.9588ac03.js";import{_ as w}from"./uni-search-bar.b7b53ad0.js";import{r as k}from"./uni-app.es.3623048a.js";import{_ as j}from"./uni-dateformat.9374a6d8.js";import{_ as M}from"./uni-list-item.0b0db49f.js";import{_ as R}from"./uni-load-state.5f7afcd3.js";import{_ as v}from"./uni-list.5c1dec51.js";import{_ as x}from"./unicloud-db.c0c53493.js";import{s as T}from"./uni-status-bar.7b5f59ea.js";import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";import"./uni-icons.66bbb871.js";let D;const L=e.database();var B=C({components:{statusBar:T},computed:{inputPlaceholder:e=>"en"==a("CURRENT_LANG")?"Please enter the search content":"请输入搜索内容",colList(){return[L.collection("opendb-news-articles").where(this.where).field("avatar,title,last_modify_date,user_id").getTemp(),L.collection("uni-id-users").field("_id,username").getTemp()]}},data:()=>({where:'"article_status" == 1',keyword:"",showRefresh:!1,listHight:0}),watch:{keyword(e,a){let s='"article_status" == 1 ';this.where=e?`"article_status" == 1 && /${e}/.test(title)`:s}},async onReady(){this.listHight="auto",D=this.$refs.udb},async onShow(){this.keyword=s().globalData.searchText,s().globalData.searchText=""},methods:{searchClick(e){t(),o({url:"/pages/list/search/search",animationType:"fade-in"})},retry(){this.refresh()},refresh(){D.loadData({clear:!0},(()=>{r(),console.log("end")})),console.log("refresh")},loadMore(){D.loadMore()},onqueryerror(e){console.error(e)},onpullingdown(e){console.log(e),this.showRefresh=!0,e.pullingDistance>100&&this.refresh()}},onPullDownRefresh(){this.refresh()},onReachBottom(){this.loadMore()}},[["render",function(e,a,s,t,o,r){const T=k(m("uni-search-bar"),w),C=p,D=g,L=y,B=k(m("uni-dateformat"),j),N=k(m("uni-list-item"),M),P=k(m("uni-load-state"),R),E=k(m("uni-list"),v),H=k(m("unicloud-db"),x);return l(),i(C,{class:"pages"},{default:n((()=>[d(C,{class:"uni-search-box"},{default:n((()=>[d(T,{modelValue:o.keyword,"onUpdate:modelValue":a[0]||(a[0]=e=>o.keyword=e),ref:"searchBar",radius:"100",cancelButton:"none",disabled:"",placeholder:r.inputPlaceholder},null,8,["modelValue","placeholder"]),d(C,{class:"cover-search-bar",onClick:r.searchClick},null,8,["onClick"])])),_:1}),d(H,{ref:"udb",onError:r.onqueryerror,collection:r.colList,"page-size":10},{default:n((({data:e,pagination:a,hasMore:s,loading:t,error:m,options:p})=>[d(E,{class:"uni-list",border:!1,style:c({height:o.listHight})},{default:n((()=>[(l(!0),u(f,null,h(e,((e,a)=>(l(),i(N,{to:"/pages/list/detail?id="+e._id+"&title="+e.title,key:a},{header:n((()=>[d(D,{class:"avatar",src:e.avatar,mode:"aspectFill"},null,8,["src"])])),body:n((()=>[d(C,{class:"main"},{default:n((()=>[d(L,{class:"title"},{default:n((()=>[_(b(e.title),1)])),_:2},1024),d(C,{class:"info"},{default:n((()=>[d(L,{class:"author"},{default:n((()=>[_(b(e.user_id[0]?e.user_id[0].username:""),1)])),_:2},1024),d(B,{class:"last_modify_date",date:e.last_modify_date,format:"yyyy-MM-dd",threshold:[6e4,2592e6]},null,8,["date"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["to"])))),128)),d(P,{onNetworkResume:r.refresh,state:{data:e,pagination:a,hasMore:s,loading:t,error:m},onLoadMore:r.loadMore},null,8,["onNetworkResume","state","onLoadMore"])])),_:2},1032,["style"])])),_:1},8,["onError","collection"])])),_:1})}],["__scopeId","data-v-62b7ec46"]]);export{B as default};
