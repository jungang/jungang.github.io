(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fa50ad1"],{"1a04":function(t,e,n){},"48f4":function(t,e,n){"use strict";function i(t){return"NavigationDuplicated"===t.name||t.message&&-1!==t.message.indexOf("redundant navigation")}function a(t,e){var n=e.to,a=e.url,r=e.replace;if(n&&t){var s=t[r?"replace":"push"](n);s&&s.catch&&s.catch((function(t){if(t&&!i(t))throw t}))}else a&&(r?location.replace(a):location.href=a)}function r(t){a(t.parent&&t.parent.$router,t.props)}n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return s}));var s={url:String,replace:Boolean,to:[String,Object]}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var i=n("1d80"),a=n("577e"),r=n("5899"),s="["+r+"]",c=RegExp("^"+s+s+"*"),o=RegExp(s+s+"*$"),u=function(t){return function(e){var n=a(i(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:u(1),end:u(2),trim:u(3)}},"58e6":function(t,e,n){"use strict";var i=n("d282"),a=n("1325"),r=n("a8c1"),s=n("3875"),c=n("543e"),o=Object(i["a"])("pull-refresh"),u=o[0],l=o[1],f=o[2],d=50,h=["pulling","loosing","success"];e["a"]=u({mixins:[s["a"]],props:{disabled:Boolean,successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:[Number,String],value:{type:Boolean,required:!0},successDuration:{type:[Number,String],default:500},animationDuration:{type:[Number,String],default:300},headHeight:{type:[Number,String],default:d}},data:function(){return{status:"normal",distance:0,duration:0}},computed:{touchable:function(){return"loading"!==this.status&&"success"!==this.status&&!this.disabled},headStyle:function(){if(this.headHeight!==d)return{height:this.headHeight+"px"}}},watch:{value:function(t){this.duration=this.animationDuration,t?this.setStatus(+this.headHeight,!0):this.slots("success")||this.successText?this.showSuccessTip():this.setStatus(0,!1)}},mounted:function(){this.bindTouchEvent(this.$refs.track),this.scrollEl=Object(r["c"])(this.$el)},methods:{checkPullStart:function(t){this.ceiling=0===Object(r["b"])(this.scrollEl),this.ceiling&&(this.duration=0,this.touchStart(t))},onTouchStart:function(t){this.touchable&&this.checkPullStart(t)},onTouchMove:function(t){this.touchable&&(this.ceiling||this.checkPullStart(t),this.touchMove(t),this.ceiling&&this.deltaY>=0&&"vertical"===this.direction&&(Object(a["c"])(t),this.setStatus(this.ease(this.deltaY))))},onTouchEnd:function(){var t=this;this.touchable&&this.ceiling&&this.deltaY&&(this.duration=this.animationDuration,"loosing"===this.status?(this.setStatus(+this.headHeight,!0),this.$emit("input",!0),this.$nextTick((function(){t.$emit("refresh")}))):this.setStatus(0))},ease:function(t){var e=+(this.pullDistance||this.headHeight);return t>e&&(t=t<2*e?e+(t-e)/2:1.5*e+(t-2*e)/4),Math.round(t)},setStatus:function(t,e){var n;n=e?"loading":0===t?"normal":t<(this.pullDistance||this.headHeight)?"pulling":"loosing",this.distance=t,n!==this.status&&(this.status=n)},genStatus:function(){var t=this.$createElement,e=this.status,n=this.distance,i=this.slots(e,{distance:n});if(i)return i;var a=[],r=this[e+"Text"]||f(e);return-1!==h.indexOf(e)&&a.push(t("div",{class:l("text")},[r])),"loading"===e&&a.push(t(c["a"],{attrs:{size:"16"}},[r])),a},showSuccessTip:function(){var t=this;this.status="success",setTimeout((function(){t.setStatus(0)}),this.successDuration)}},render:function(){var t=arguments[0],e={transitionDuration:this.duration+"ms",transform:this.distance?"translate3d(0,"+this.distance+"px, 0)":""};return t("div",{class:l()},[t("div",{ref:"track",class:l("track"),style:e},[t("div",{class:l("head"),style:this.headStyle},[this.genStatus()]),this.slots()])])}})},"66b9":function(t,e,n){"use strict";n("68ef"),n("9d70"),n("3743"),n("e3b3"),n("bc1b")},"6ab3":function(t,e,n){},7027:function(t,e,n){},7156:function(t,e,n){var i=n("861d"),a=n("d2bb");t.exports=function(t,e,n){var r,s;return a&&"function"==typeof(r=e.constructor)&&r!==n&&i(s=r.prototype)&&s!==n.prototype&&a(t,s),t}},7744:function(t,e,n){"use strict";var i=n("c31d"),a=n("861b"),r=n.n(a),s=n("d282"),c=n("a142"),o=n("ba31"),u=n("48f4"),l=n("dfaf"),f=n("ad06"),d=Object(s["a"])("cell"),h=d[0],b=d[1];function p(t,e,n,i){var a,s=e.icon,l=e.size,d=e.title,h=e.label,p=e.value,g=e.isLink,v=n.title||Object(c["c"])(d);function m(){var i=n.label||Object(c["c"])(h);if(i)return t("div",{class:[b("label"),e.labelClass]},[n.label?n.label():h])}function S(){if(v)return t("div",{class:[b("title"),e.titleClass],style:e.titleStyle},[n.title?n.title():t("span",[d]),m()])}function x(){var i=n.default||Object(c["c"])(p);if(i)return t("div",{class:[b("value",{alone:!v}),e.valueClass]},[n.default?n.default():t("span",[p])])}function y(){return n.icon?n.icon():s?t(f["a"],{class:b("left-icon"),attrs:{name:s,classPrefix:e.iconPrefix}}):void 0}function O(){var i=n["right-icon"];if(i)return i();if(g){var a=e.arrowDirection;return t(f["a"],{class:b("right-icon"),attrs:{name:a?"arrow-"+a:"arrow"}})}}function w(t){Object(o["a"])(i,"click",t),Object(u["a"])(i)}var k=null!=(a=e.clickable)?a:g,_={clickable:k,center:e.center,required:e.required,borderless:!e.border};return l&&(_[l]=l),t("div",r()([{class:b(_),attrs:{role:k?"button":null,tabindex:k?0:null},on:{click:w}},Object(o["b"])(i)]),[y(),S(),x(),O(),null==n.extra?void 0:n.extra()])}p.props=Object(i["a"])({},l["a"],u["c"]),e["a"]=h(p)},"7c75":function(t,e,n){"use strict";var i=n("7027"),a=n.n(i);a.a},a9e3:function(t,e,n){"use strict";var i=n("83ab"),a=n("da84"),r=n("94ca"),s=n("6eeb"),c=n("5135"),o=n("c6b6"),u=n("7156"),l=n("d9b5"),f=n("c04e"),d=n("d039"),h=n("7c73"),b=n("241c").f,p=n("06cf").f,g=n("9bf2").f,v=n("58a8").trim,m="Number",S=a[m],x=S.prototype,y=o(h(x))==m,O=function(t){if(l(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,i,a,r,s,c,o,u=f(t,"number");if("string"==typeof u&&u.length>2)if(u=v(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+u}for(r=u.slice(2),s=r.length,c=0;c<s;c++)if(o=r.charCodeAt(c),o<48||o>a)return NaN;return parseInt(r,i)}return+u};if(r(m,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var w,k=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof k&&(y?d((function(){x.valueOf.call(n)})):o(n)!=m)?u(new S(O(e)),n,k):O(e)},_=i?b(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),j=0;_.length>j;j++)c(S,w=_[j])&&!c(k,w)&&g(k,w,p(S,w));k.prototype=x,x.constructor=k,s(a,m,k)}},ab71:function(t,e,n){"use strict";n("68ef"),n("e3b3"),n("6ab3")},b1d2:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"e",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return s})),n.d(e,"d",(function(){return c})),n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return u}));var i="van-hairline",a=i+"--top",r=i+"--left",s=i+"--bottom",c=i+"--surround",o=i+"--top-bottom",u=i+"-unset--top-bottom"},b650:function(t,e,n){"use strict";var i=n("c31d"),a=n("861b"),r=n.n(a),s=n("d282"),c=n("ba31"),o=n("b1d2"),u=n("48f4"),l=n("ad06"),f=n("543e"),d=Object(s["a"])("button"),h=d[0],b=d[1];function p(t,e,n,i){var a,s=e.tag,d=e.icon,h=e.type,p=e.color,g=e.plain,v=e.disabled,m=e.loading,S=e.hairline,x=e.loadingText,y=e.iconPosition,O={};function w(t){e.loading&&t.preventDefault(),m||v||(Object(c["a"])(i,"click",t),Object(u["a"])(i))}function k(t){Object(c["a"])(i,"touchstart",t)}p&&(O.color=g?p:"white",g||(O.background=p),-1!==p.indexOf("gradient")?O.border=0:O.borderColor=p);var _=[b([h,e.size,{plain:g,loading:m,disabled:v,hairline:S,block:e.block,round:e.round,square:e.square}]),(a={},a[o["d"]]=S,a)];function j(){return m?n.loading?n.loading():t(f["a"],{class:b("loading"),attrs:{size:e.loadingSize,type:e.loadingType,color:"currentColor"}}):n.icon?t("div",{class:b("icon")},[n.icon()]):d?t(l["a"],{attrs:{name:d,classPrefix:e.iconPrefix},class:b("icon")}):void 0}function N(){var i,a=[];return"left"===y&&a.push(j()),i=m?x:n.default?n.default():e.text,i&&a.push(t("span",{class:b("text")},[i])),"right"===y&&a.push(j()),a}return t(s,r()([{style:O,class:_,attrs:{type:e.nativeType,disabled:v},on:{click:w,touchstart:k}},Object(c["b"])(i)]),[t("div",{class:b("content")},[N()])])}p.props=Object(i["a"])({},u["c"],{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"},iconPosition:{type:String,default:"left"}}),e["a"]=h(p)},bc1b:function(t,e,n){},caa2:function(t,e,n){"use strict";n.r(e);var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tasks"}},[t.isLoading?n("van-loading"):t._e(),t.listData.length<=0&&t.finished?n("van-empty",{attrs:{description:"暂无数据"}}):t._e(),t.listData.length>0?n("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了",error:t.error,"error-text":"请求失败，点击重新加载"},on:{"update:error":function(e){t.error=e},load:t.$_loadData},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},t._l(t.listData,(function(e,i){return n("van-cell",{key:i,staticClass:"item",attrs:{title:e.dis},on:{click:function(n){return t.taskDetail(e)}},scopedSlots:t._u([{key:"icon",fn:function(){return[n("div",{staticClass:"icon"})]},proxy:!0},{key:"label",fn:function(){return[n("span",{style:{color:t.styleDict(e.rw_zt)}},[t._v(t._s(t._f("statusDict")(e.rw_zt)))])]},proxy:!0},{key:"default",fn:function(){return[n("van-button",{directives:[{name:"show",rawName:"v-show",value:0==e.rw_zt||22==e.rw_zt||32==e.rw_zt||42==e.rw_zt,expression:"item.rw_zt == 0 ||  item.rw_zt == 22 ||  item.rw_zt == 32  ||  item.rw_zt == 42"}],staticClass:"button",attrs:{type:"primary"},on:{click:function(n){return n.stopPropagation(),t.submitInspect(e)}}},[t._v("提交")])]},proxy:!0}],null,!0)})})),1)],1):t._e(),n("p",{staticClass:"notice"},[t._v("请联系管理员指派任务")])],1)},r=[],s=n("c964"),c=(n("e7e5"),n("d399")),o=(n("e17f"),n("2241")),u=n("fc11"),l=(n("66b9"),n("b650")),f=(n("0653"),n("34e9")),d=(n("c194"),n("7744")),h=(n("2994"),n("2bdd")),b=(n("5246"),n("6b41")),p=(n("ab71"),n("58e6")),g=(n("ac1e"),n("543e")),v=(n("91d5"),n("f0ca")),m=(n("96cf"),n("b0c0"),n("a9e3"),n("99af"),n("a18c")),S=n("ea7f"),x={name:"Tasks",components:(i={},Object(u["a"])(i,v["a"].name,v["a"]),Object(u["a"])(i,g["a"].name,g["a"]),Object(u["a"])(i,p["a"].name,p["a"]),Object(u["a"])(i,b["a"].name,b["a"]),Object(u["a"])(i,h["a"].name,h["a"]),Object(u["a"])(i,d["a"].name,d["a"]),Object(u["a"])(i,f["a"].name,f["a"]),Object(u["a"])(i,l["a"].name,l["a"]),i),filters:{statusDict:function(t){switch(t){case"0":return"调查中";case"10":return"待质检";case"20":return"一检已分配";case"21":return"一检通过";case"22":return"一检不通过";case"30":return"二检已分配";case"31":return"二检通过";case"32":return"二检不通过";case"40":return"三检已分配";case"41":return"三检通过";case"42":return"三检已分配"}}},data:function(){return{listData:[],error:!1,isLoading:!1,finished:!1,params:{pageNum:1,pageSize:10}}},created:function(){var t=this;this.init(),this.$bus.$off("REFRESH"),this.$bus.$on("REFRESH",(function(e){t.onRefresh(e)}))},methods:{styleDict:function(t){switch(t){case"0":return"#ffc108";case"10":return"#ffc108";case"20":return"blue";case"21":return"green";case"22":return"red";case"30":return"blue";case"31":return"green";case"32":return"red";case"40":return"blue";case"41":return"green";case"42":return"red"}},submitInspect:function(t){var e=this;o["a"].confirm({title:"标题",message:"请确认是否提交 ".concat(t.dis," 任务")}).then((function(){Object(S["a"])({uuid:t.uuid,rw_zt:Number(t.rw_zt)}).then((function(t){200==t.code&&(Object(c["a"])("提交成功"),e.init())}))})).catch((function(){}))},init:function(){this.$_loadData()},$_loadData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(S["b"])(t.params).then((function(e){t.listData=t.listData.concat(e.rows),t.isLoading=!1,t.params.pageNum++,t.listData.length>=e.total&&(t.finished=!0)})).catch((function(e){console.error("🚀 ~ err:",e),t.error=!0,t.isLoading=!1}));case 2:case"end":return e.stop()}}),e)})))()},taskDetail:function(t){m["a"].push({name:"Map",params:t})},onRefresh:function(){this.params.pageNum=1,this.finished=!1,this.isLoading=!0,this.listData=[],this.$_loadData()},onLoad:function(){}}},y=x,O=(n("7c75"),n("2877")),w=Object(O["a"])(y,a,r,!1,null,"04b805d3",null);e["default"]=w.exports},db85:function(t,e,n){"use strict";function i(t){var e=[];function n(t){t.forEach((function(t){e.push(t),t.componentInstance&&n(t.componentInstance.$children.map((function(t){return t.$vnode}))),t.children&&n(t.children)}))}return n(t),e}function a(t,e){var n=e.$vnode.componentOptions;if(n&&n.children){var a=i(n.children);t.sort((function(t,e){return a.indexOf(t.$vnode)-a.indexOf(e.$vnode)}))}}n.d(e,"a",(function(){return a}))},dfaf:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,iconPrefix:String,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0},clickable:{type:Boolean,default:null}}}}]);