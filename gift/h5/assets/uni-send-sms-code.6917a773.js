import{P as e,S as t,Q as s,o as r,c as i,w as n,b as o,j as a,t as c,C as d,l as u,i as l}from"./index.9588ac03.js";import{_ as m}from"./plugin-vue_export-helper.21dcd24c.js";var h=m({name:"uni-send-sms-code",props:{count:{type:[String,Number],default:60},phone:{type:[String,Number],default:""},codeType:{type:String,default:()=>"login"}},data:()=>({reverseNumber:0,reverseTimer:null}),computed:{innerText(){return 0==this.reverseNumber?this.$t("common.getVerifyCode"):this.$t("smsCode.resendVerifyCode")+"("+this.reverseNumber+"s)"}},created(){this.initClick()},methods:{initClick(){this.start=function(e,t){let s;return t=t||500,function(){let r=this,i=arguments;s&&clearTimeout(s);let n=!s;s=setTimeout((()=>{s=null}),t),n&&e.apply(r,i)}}((()=>{0==this.reverseNumber&&this.sendMsg()}))},sendMsg(){if(!/^1\d{10}$/.test(this.phone))return e({title:this.$t("smsCode.phoneErrTip"),icon:"none"});t.callFunction({name:"uni-id-cf",data:{action:"sendSmsCode",params:{mobile:this.phone,type:this.codeType}},success:({result:t})=>{console.log(t),0===t.code?(e({title:this.$t("smsCode.sendSuccessTip"),icon:"none"}),this.reverseNumber=Number(this.count),this.getCode(),this.$emit("getCode")):s({content:t.msg,showCancel:!1})}})},getCode(){if(0==this.reverseNumber)return clearTimeout(this.reverseTimer),void(this.reverseTimer=null);this.reverseNumber--,this.reverseTimer=setTimeout((()=>{this.getCode()}),1e3)}}},[["render",function(e,t,s,m,h,p){const v=u,C=l;return r(),i(C,{class:"short-code-btn","hover-class":"hover",onClick:e.start},{default:n((()=>[o(v,{class:d(["inner-text",0==h.reverseNumber?"inner-text-active":""])},{default:n((()=>[a(c(p.innerText),1)])),_:1},8,["class"])])),_:1},8,["onClick"])}],["__scopeId","data-v-dced2eda"]]);export{h as _};
