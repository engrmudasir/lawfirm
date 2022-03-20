"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[790],{5787:(e,t,l)=>{l.d(t,{Z:()=>x});var n=l(821),a=l(2119),u=l(5317),o=l(625),r=l(4695),i={class:"flex items-center justify-center flex-col md:flex-row text-2xl text-gray-500 dark:text-gray-400 mb-12"},s=(0,n._)("span",{class:"md:mr-3"},"Please star this project on",-1),c={href:"https://github.com/justboil/admin-one-vue-tailwind",class:"inline-flex items-center justify-center text-blue-600",target:"_blank"},m=(0,n._)("span",null,"GitHub",-1),d={class:"text-2xl text-gray-500 dark:text-gray-400 mb-12"},p=(0,n.Uk)(" Check out other components and layouts at"),f=(0,n._)("br",null,null,-1),b=(0,n.Uk)(" , "),y=(0,n._)("br",null,null,-1),w=(0,n.Uk)(" screen samples "),h=(0,n._)("h1",{class:"text-2xl text-gray-500 dark:text-gray-400"},[(0,n.Uk)(" Get more with "),(0,n._)("a",{href:"https://justboil.me/tailwind-admin-templates/vue-dashboard/",target:"_blank",class:"text-blue-600"},"Premium version")],-1);const x={setup:function(e){var t=(0,a.tv)().getRoutes(),l=[];for(var x in t){var g=t[x].path,k=t[x].meta&&t[x].meta.title?t[x].meta.title:null;k&&l.push({path:g,title:k})}return function(e,t){var a=(0,n.up)("router-link");return(0,n.wg)(),(0,n.j4)(o.Z,{last:""},{default:(0,n.w5)((function(){return[(0,n._)("h1",i,[s,(0,n._)("a",c,[(0,n.Wm)(r.Z,{path:(0,n.SU)(u.LcO),size:"36",class:"mr-1"},null,8,["path"]),m])]),(0,n._)("h1",d,[p,f,((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(l,(function(e,t){return(0,n.wg)(),(0,n.iD)(n.HY,{key:e.path},[(0,n.Wm)(a,{to:e.path,class:"text-blue-600"},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,n.zw)(e.title),1)]})),_:2},1032,["to"]),t+1<l.length?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[b],64)):(0,n.kq)("",!0)],64)})),64)),y,w]),h]})),_:1})}}}},7007:(e,t,l)=>{l.d(t,{Z:()=>r});var n=l(821),a=["type","name","value"],u=(0,n._)("span",{class:"check"},null,-1),o={class:"control-label"};const r={props:{options:{type:Object,default:function(){}},name:{type:String,required:!0},type:{type:String,default:"checkbox"},column:Boolean,modelValue:{type:[Object,Array,String,Number],default:null}},emits:["update:modelValue"],setup:function(e,t){var l=t.emit,r=e,i=(0,n.Fl)({get:function(){return r.modelValue},set:function(e){l("update:modelValue",e)}}),s=(0,n.Fl)((function(){return"radio"===r.type?"radio":"checkbox"}));return function(t,l){return(0,n.wg)(),(0,n.iD)("div",{class:(0,n.C_)(["flex justify-start flex-wrap -mb-3",{"flex-col":e.column}])},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.options,(function(t,r){return(0,n.wg)(),(0,n.iD)("label",{key:r,class:(0,n.C_)([e.type,"mr-6 mb-3 last:mr-0"])},[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":l[0]||(l[0]=function(e){return(0,n.dq)(i)?i.value=e:null}),type:(0,n.SU)(s),name:e.name,value:r},null,8,a),[[n.YZ,(0,n.SU)(i)]]),u,(0,n._)("span",o,(0,n.zw)(t),1)],2)})),128))],2)}}}},9938:(e,t,l)=>{l.d(t,{Z:()=>s});var n=l(821),a={class:"mb-6 last:mb-0"},u={key:0,class:"block font-bold mb-2"},o={key:1,class:"text-xs text-gray-500 dark:text-gray-400 mt-1"},r={key:2,class:"text-xs text-blue-500 dark:text-blue-400 mt-1"},i={key:3,class:"text-xs text-red-500 dark:text-red-400 mt-1"};const s={props:{label:{type:String,default:null},help:{type:String,default:null},info:{type:String,default:null},error:{type:String,default:null}},setup:function(e){var t=(0,n.Rr)(),l=(0,n.Fl)((function(){var e=[],l=t.default().length;return l>1&&e.push("grid grid-cols-1 gap-3"),2===l&&e.push("md:grid-cols-2"),e}));return function(t,s){return(0,n.wg)(),(0,n.iD)("div",a,[e.label?((0,n.wg)(),(0,n.iD)("label",u,(0,n.zw)(e.label),1)):(0,n.kq)("",!0),(0,n._)("div",{class:(0,n.C_)((0,n.SU)(l))},[(0,n.WI)(t.$slots,"default")],2),e.help?((0,n.wg)(),(0,n.iD)("div",o,(0,n.zw)(e.help),1)):(0,n.kq)("",!0),e.info?((0,n.wg)(),(0,n.iD)("div",r,(0,n.zw)(e.info),1)):e.error?((0,n.wg)(),(0,n.iD)("div",i,(0,n.zw)(e.error),1)):(0,n.kq)("",!0)])}}}},1809:(e,t,l)=>{l.d(t,{Z:()=>m});var n=l(821),a=l(5317),u=l(8685),o={class:"flex items-stretch justify-start relative"},r={class:"inline-flex"},i=["accept"],s={key:0},c={class:"inline-flex px-4 py-2 justify-center bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 border rounded-r"};const m={props:{modelValue:{type:[Object,File,Array],default:null},label:{type:String,default:"Upload"},icon:{type:String,default:a.xyB},accept:{type:String,default:null},color:{type:String,default:"info"}},emits:["update:modelValue"],setup:function(e,t){var l=t.emit,a=e,m=(0,n.iH)(null),d=(0,n.iH)(a.modelValue),p=(0,n.Fl)((function(){return a.modelValue}));(0,n.YP)(p,(function(e){d.value=e,e||(m.value.input.value=null)}));var f=function(e){var t=e.target.files||e.dataTransfer.files;d.value=t[0],l("update:modelValue",d.value)};return function(t,l){return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("label",r,[(0,n.Wm)(u.Z,{as:"a",label:e.label,icon:e.icon,color:e.color,class:(0,n.C_)({"rounded-r-none":d.value})},null,8,["label","icon","color","class"]),(0,n._)("input",{ref_key:"root",ref:m,type:"file",class:"absolute top-0 left-0 w-full h-full opacity-0 outline-none cursor-pointer -z-1",accept:e.accept,onInput:f},null,40,i)]),d.value?((0,n.wg)(),(0,n.iD)("div",s,[(0,n._)("span",c,(0,n.zw)(d.value.name),1)])):(0,n.kq)("",!0)])}}}},625:(e,t,l)=>{l.d(t,{Z:()=>u});var n=l(821),a={key:1,class:"text-2xl text-gray-500 dark:text-gray-400"};const u={props:{custom:Boolean,first:Boolean,last:Boolean},setup:function(e){return function(t,l){return(0,n.wg)(),(0,n.iD)("section",{class:(0,n.C_)(["py-24 px-6 lg:px-0 lg:max-w-2xl lg:mx-auto text-center",{"-mb-6":e.first,"-mt-6":e.last,"-my-6":!e.first&&!e.last}])},[e.custom?(0,n.WI)(t.$slots,"default",{key:0}):((0,n.wg)(),(0,n.iD)("h1",a,[(0,n.WI)(t.$slots,"default")]))],2)}}}},101:(e,t,l)=>{l.r(t),l.d(t,{default:()=>k});var n=l(821),a=l(5317),u=l(2338),o=l(3743),r=l(7856),i=l(7007),s=l(1809),c=l(7100),m=l(9938),d=l(8734),p=l(3053),f=l(8685),b=l(2576),y=l(5787),w=l(625),h=l(2961),x=(0,n.Uk)("Forms"),g=(0,n.Uk)(" Custom elements ");const k={setup:function(e){var t=(0,n.iH)(["Admin","Forms"]),l=[{id:1,label:"Business development"},{id:2,label:"Marketing"},{id:3,label:"Sales"}],k=(0,n.qj)({name:"John Doe",email:"john.doe@example.com",phone:"",department:l[0],subject:"",question:""}),v=(0,n.qj)({checkbox:["lorem"],radio:"one",switch:["one"],file:null}),U=function(){};return function(e,Z){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(o.Z,{"title-stack":t.value},null,8,["title-stack"]),(0,n.Wm)(c.Z,null,{default:(0,n.w5)((function(){return[x]})),_:1}),(0,n.Wm)(u.Z,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(h.Z,{icon:(0,n.SU)(a.fmz),title:"Forms example"},null,8,["icon"]),(0,n.Wm)(r.Z,{title:"Forms",icon:(0,n.SU)(a.hjO),form:"",onSubmit:(0,n.iM)(U,["prevent"])},{default:(0,n.w5)((function(){return[(0,n.Wm)(m.Z,{label:"Grouped with icons"},{default:(0,n.w5)((function(){return[(0,n.Wm)(d.Z,{modelValue:(0,n.SU)(k).name,"onUpdate:modelValue":Z[0]||(Z[0]=function(e){return(0,n.SU)(k).name=e}),icon:(0,n.SU)(a.rI3)},null,8,["modelValue","icon"]),(0,n.Wm)(d.Z,{modelValue:(0,n.SU)(k).email,"onUpdate:modelValue":Z[1]||(Z[1]=function(e){return(0,n.SU)(k).email=e}),type:"email",icon:(0,n.SU)(a.xaU)},null,8,["modelValue","icon"])]})),_:1}),(0,n.Wm)(m.Z,{label:"With help line",help:"Do not enter the leading zero"},{default:(0,n.w5)((function(){return[(0,n.Wm)(d.Z,{modelValue:(0,n.SU)(k).phone,"onUpdate:modelValue":Z[2]||(Z[2]=function(e){return(0,n.SU)(k).phone=e}),type:"tel",placeholder:"Your phone number"},null,8,["modelValue"])]})),_:1}),(0,n.Wm)(m.Z,{label:"Dropdown"},{default:(0,n.w5)((function(){return[(0,n.Wm)(d.Z,{modelValue:(0,n.SU)(k).department,"onUpdate:modelValue":Z[3]||(Z[3]=function(e){return(0,n.SU)(k).department=e}),options:l},null,8,["modelValue"])]})),_:1}),(0,n.Wm)(p.Z),(0,n.Wm)(m.Z,{label:"Question",help:"Your question. Max 255 characters"},{default:(0,n.w5)((function(){return[(0,n.Wm)(d.Z,{type:"textarea",placeholder:"Explain how we can help you"})]})),_:1}),(0,n.Wm)(p.Z),(0,n.Wm)(b.Z,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(f.Z,{type:"submit",color:"info",label:"Submit"}),(0,n.Wm)(f.Z,{type:"reset",color:"info",outline:"",label:"Reset"})]})),_:1})]})),_:1},8,["icon","onSubmit"])]})),_:1}),(0,n.Wm)(w.Z,null,{default:(0,n.w5)((function(){return[g]})),_:1}),(0,n.Wm)(u.Z,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(r.Z,{title:"Custom elements",icon:(0,n.SU)(a.fmz)},{default:(0,n.w5)((function(){return[(0,n.Wm)(m.Z,{label:"Checkbox","wrap-body":""},{default:(0,n.w5)((function(){return[(0,n.Wm)(i.Z,{modelValue:(0,n.SU)(v).checkbox,"onUpdate:modelValue":Z[4]||(Z[4]=function(e){return(0,n.SU)(v).checkbox=e}),name:"sample-checkbox",options:{lorem:"Lorem",ipsum:"Ipsum",dolore:"Dolore"}},null,8,["modelValue"])]})),_:1}),(0,n.Wm)(p.Z),(0,n.Wm)(m.Z,{label:"Radio","wrap-body":""},{default:(0,n.w5)((function(){return[(0,n.Wm)(i.Z,{modelValue:(0,n.SU)(v).radio,"onUpdate:modelValue":Z[5]||(Z[5]=function(e){return(0,n.SU)(v).radio=e}),name:"sample-radio",type:"radio",options:{one:"One",two:"Two"}},null,8,["modelValue"])]})),_:1}),(0,n.Wm)(p.Z),(0,n.Wm)(m.Z,{label:"Switch"},{default:(0,n.w5)((function(){return[(0,n.Wm)(i.Z,{modelValue:(0,n.SU)(v).switch,"onUpdate:modelValue":Z[6]||(Z[6]=function(e){return(0,n.SU)(v).switch=e}),name:"sample-switch",type:"switch",options:{one:"One",two:"Two"}},null,8,["modelValue"])]})),_:1}),(0,n.Wm)(p.Z),(0,n.Wm)(s.Z,{modelValue:(0,n.SU)(v).file,"onUpdate:modelValue":Z[7]||(Z[7]=function(e){return(0,n.SU)(v).file=e})},null,8,["modelValue"])]})),_:1},8,["icon"])]})),_:1}),(0,n.Wm)(y.Z)],64)}}}}}]);