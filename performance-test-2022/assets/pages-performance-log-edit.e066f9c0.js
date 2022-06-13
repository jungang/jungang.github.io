var e=Object.defineProperty,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(a,t,o)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o,l=(e,l)=>{for(var n in l||(l={}))t.call(l,n)&&r(e,n,l[n]);if(a)for(var n of a(l))o.call(l,n)&&r(e,n,l[n]);return e};import{R as n,V as m,X as s,W as u,a8 as i,s as d,o as f,c,w as p,b,d as h,l as y,h as _,m as v,i as g}from"./index.45e10b73.js";import{_ as D}from"./uni-easyinput.d7f9f53b.js";import{r as V}from"./uni-app.es.af6e5358.js";import{_ as j}from"./uni-forms-item.f6dc14d2.js";import{_ as w}from"./uni-forms.da2dce3e.js";import{v as k}from"./performance-log.11745477.js";import{_ as O}from"./plugin-vue_export-helper.21dcd24c.js";import"./uni-icons.4aeae8d3.js";const C=n.database();function U(e){let a={};for(let t in k)e.indexOf(t)>-1&&(a[t]=k[t]);return a}var x=O({data(){let e={event_key:null,array_length:null,event_type:"",comment:"",browser:null};return{formData:e,formOptions:{},rules:l({},U(Object.keys(e)))}},onLoad(e){if(e.id){const a=e.id;this.formDataId=a,this.getDetail(a)}},onReady(){this.$refs.form.setRules(this.rules)},methods:{submit(){m({mask:!0}),this.$refs.form.validate().then((e=>this.submitForm(e))).catch((()=>{})).finally((()=>{s()}))},submitForm(e){return C.collection("performance-log").doc(this.formDataId).update(e).then((e=>{u({icon:"none",title:"修改成功"}),this.getOpenerEventChannel().emit("refreshData"),setTimeout((()=>i()),500)})).catch((e=>{d({content:e.message||"请求服务失败",showCancel:!1})}))},getDetail(e){m({mask:!0}),C.collection("performance-log").doc(e).field("event_key,array_length,event_type,comment,browser").get().then((e=>{const a=e.result.data[0];a&&(this.formData=a)})).catch((e=>{d({content:e.message||"请求服务失败",showCancel:!1})})).finally((()=>{s()}))}}},[["render",function(e,a,t,o,r,l){const n=V(y("uni-easyinput"),D),m=V(y("uni-forms-item"),j),s=_("undefined"),u=v,i=g,d=V(y("uni-forms"),w);return f(),c(i,{class:"uni-container"},{default:p((()=>[b(d,{ref:"form",value:r.formData,"validate-trigger":"submit","err-show-type":"toast"},{default:p((()=>[b(m,{name:"event_key",label:""},{default:p((()=>[b(n,{placeholder:"毫秒数",type:"number",modelValue:r.formData.event_key,"onUpdate:modelValue":a[0]||(a[0]=e=>r.formData.event_key=e)},null,8,["modelValue"])])),_:1}),b(m,{name:"array_length",label:""},{default:p((()=>[b(n,{placeholder:"数组长度",type:"number",modelValue:r.formData.array_length,"onUpdate:modelValue":a[1]||(a[1]=e=>r.formData.array_length=e)},null,8,["modelValue"])])),_:1}),b(m,{name:"event_type",label:""},{default:p((()=>[b(n,{placeholder:"事件类型",modelValue:r.formData.event_type,"onUpdate:modelValue":a[2]||(a[2]=e=>r.formData.event_type=e)},null,8,["modelValue"])])),_:1}),b(m,{name:"comment",label:""},{default:p((()=>[b(n,{placeholder:"备注，事件新增、缘由",modelValue:r.formData.comment,"onUpdate:modelValue":a[3]||(a[3]=e=>r.formData.comment=e),trim:"both"},null,8,["modelValue"])])),_:1}),b(m,{name:"browser",label:""},{default:p((()=>[b(s,{modelValue:r.formData.browser,"onUpdate:modelValue":a[4]||(a[4]=e=>r.formData.browser=e)},null,8,["modelValue"])])),_:1}),b(i,{class:"uni-button-group"},{default:p((()=>[b(u,{type:"primary",class:"uni-button",onClick:l.submit},{default:p((()=>[h("提交")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["value"])])),_:1})}],["__scopeId","data-v-428a0a2c"]]);export{x as default};
