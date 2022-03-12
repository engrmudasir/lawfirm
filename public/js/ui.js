"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[522],{5787:(l,t,e)=>{e.d(t,{Z:()=>g});var n=e(821),o=e(2119),u=e(5317),i=e(625),a=e(4695),r={class:"flex items-center justify-center flex-col md:flex-row text-2xl text-gray-500 dark:text-gray-400 mb-12"},s=(0,n._)("span",{class:"md:mr-3"},"Please star this project on",-1),c={href:"https://github.com/justboil/admin-one-vue-tailwind",class:"inline-flex items-center justify-center text-blue-600",target:"_blank"},d=(0,n._)("span",null,"GitHub",-1),m={class:"text-2xl text-gray-500 dark:text-gray-400 mb-12"},f=(0,n.Uk)(" Check out other components and layouts at"),U=(0,n._)("br",null,null,-1),b=(0,n.Uk)(" , "),S=(0,n._)("br",null,null,-1),p=(0,n.Uk)(" screen samples "),w=(0,n._)("h1",{class:"text-2xl text-gray-500 dark:text-gray-400"},[(0,n.Uk)(" Get more with "),(0,n._)("a",{href:"https://justboil.me/tailwind-admin-templates/vue-dashboard/",target:"_blank",class:"text-blue-600"},"Premium version")],-1);const g={setup:function(l){var t=(0,o.tv)().getRoutes(),e=[];for(var g in t){var x=t[g].path,W=t[g].meta&&t[g].meta.title?t[g].meta.title:null;W&&e.push({path:x,title:W})}return function(l,t){var o=(0,n.up)("router-link");return(0,n.wg)(),(0,n.j4)(i.Z,{last:""},{default:(0,n.w5)((function(){return[(0,n._)("h1",r,[s,(0,n._)("a",c,[(0,n.Wm)(a.Z,{path:(0,n.SU)(u.LcO),size:"36",class:"mr-1"},null,8,["path"]),d])]),(0,n._)("h1",m,[f,U,((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(e,(function(l,t){return(0,n.wg)(),(0,n.iD)(n.HY,{key:l.path},[(0,n.Wm)(o,{to:l.path,class:"text-blue-600"},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,n.zw)(l.title),1)]})),_:2},1032,["to"]),t+1<e.length?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[b],64)):(0,n.kq)("",!0)],64)})),64)),S,p]),w]})),_:1})}}}},7007:(l,t,e)=>{e.d(t,{Z:()=>a});var n=e(821),o=["type","name","value"],u=(0,n._)("span",{class:"check"},null,-1),i={class:"control-label"};const a={props:{options:{type:Object,default:function(){}},name:{type:String,required:!0},type:{type:String,default:"checkbox"},column:Boolean,modelValue:{type:[Object,Array,String,Number],default:null}},emits:["update:modelValue"],setup:function(l,t){var e=t.emit,a=l,r=(0,n.Fl)({get:function(){return a.modelValue},set:function(l){e("update:modelValue",l)}}),s=(0,n.Fl)((function(){return"radio"===a.type?"radio":"checkbox"}));return function(t,e){return(0,n.wg)(),(0,n.iD)("div",{class:(0,n.C_)(["flex justify-start flex-wrap -mb-3",{"flex-col":l.column}])},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.options,(function(t,a){return(0,n.wg)(),(0,n.iD)("label",{key:a,class:(0,n.C_)([l.type,"mr-6 mb-3 last:mr-0"])},[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":e[0]||(e[0]=function(l){return(0,n.dq)(r)?r.value=l:null}),type:(0,n.SU)(s),name:l.name,value:a},null,8,o),[[n.YZ,(0,n.SU)(r)]]),u,(0,n._)("span",i,(0,n.zw)(t),1)],2)})),128))],2)}}}},9938:(l,t,e)=>{e.d(t,{Z:()=>a});var n=e(821),o={class:"mb-6 last:mb-0"},u={key:0,class:"block font-bold mb-2"},i={key:1,class:"text-xs text-gray-500 dark:text-gray-400 mt-1"};const a={props:{label:{type:String,default:null},help:{type:String,default:null}},setup:function(l){var t=(0,n.Rr)(),e=(0,n.Fl)((function(){var l=[],e=t.default().length;return e>1&&l.push("grid grid-cols-1 gap-3"),2===e&&l.push("md:grid-cols-2"),l}));return function(t,a){return(0,n.wg)(),(0,n.iD)("div",o,[l.label?((0,n.wg)(),(0,n.iD)("label",u,(0,n.zw)(l.label),1)):(0,n.kq)("",!0),(0,n._)("div",{class:(0,n.C_)((0,n.SU)(e))},[(0,n.WI)(t.$slots,"default")],2),l.help?((0,n.wg)(),(0,n.iD)("div",i,(0,n.zw)(l.help),1)):(0,n.kq)("",!0)])}}}},625:(l,t,e)=>{e.d(t,{Z:()=>u});var n=e(821),o={key:1,class:"text-2xl text-gray-500 dark:text-gray-400"};const u={props:{custom:Boolean,first:Boolean,last:Boolean},setup:function(l){return function(t,e){return(0,n.wg)(),(0,n.iD)("section",{class:(0,n.C_)(["py-24 px-6 lg:px-0 lg:max-w-2xl lg:mx-auto text-center",{"-mb-6":l.first,"-mt-6":l.last,"-my-6":!l.first&&!l.last}])},[l.custom?(0,n.WI)(t.$slots,"default",{key:0}):((0,n.wg)(),(0,n.iD)("h1",o,[(0,n.WI)(t.$slots,"default")]))],2)}}}},5858:(l,t,e)=>{e.r(t),e.d(t,{default:()=>L});var n=e(821),o=e(8637),u=e(5317),i=e(2338),a=e(7100),r=e(6295),s=e(7856),c=e(2576),d=e(2489),m=e(711),f=e(3053),U=e(8406),b=e(625),S=e(9938),p=e(7007),w=e(5787),g=e(2961),x=(0,n._)("p",null,"This is sample modal",-1),W=(0,n._)("p",null,"This is sample modal",-1),Z=(0,n._)("p",null,"This is sample modal",-1),_=(0,n.Uk)("UI Components"),h=(0,n.Uk)(" Dark mode "),k={class:"text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400"},y=(0,n.Uk)(" Modal examples "),v={class:"space-y-12"},O=(0,n._)("div",{class:"space-y-3"},[(0,n._)("p",null,"Click to see in action")],-1),B=(0,n._)("div",{class:"space-y-3"},[(0,n._)("h1",{class:"text-2xl"}," Unhandled exception "),(0,n._)("p",null,"Click to see in action")],-1),C=(0,n._)("div",{class:"space-y-3"},[(0,n._)("h1",{class:"text-2xl"}," Success "),(0,n._)("p",null,"Click to see in action")],-1),V=(0,n._)("h1",{class:"text-2xl text-gray-500 dark:text-gray-400"}," Notifications ",-1),D={class:"flex items-center justify-center mt-6"},H=(0,n._)("b",null,"Info state",-1),j=(0,n.Uk)(". Notification "),N=(0,n._)("b",null,"Success state",-1),F=(0,n.Uk)(". Notification "),I=(0,n._)("b",null,"Warning state",-1),q=(0,n.Uk)(". Notification "),z=(0,n._)("b",null,"Danger state",-1),T=(0,n.Uk)(". Notification "),Y=(0,n._)("b",null,"White",-1),M=(0,n.Uk)(". Notification "),A=(0,n._)("b",null,"Light",-1),P=(0,n.Uk)(". Notification "),R=(0,n.Uk)("Buttons"),$=(0,n.Uk)("Cards"),E={class:"grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2"},G=(0,n._)("div",{class:"text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400"}," With title ",-1),K=(0,n._)("div",{class:"text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400"}," With title & icons ",-1);const L={setup:function(l){var t=(0,n.iH)(["Admin","UI Components"]),e=(0,n.iH)(!1),L=(0,n.iH)(!1),Q=(0,n.iH)(!1),J=(0,n.iH)([]),X=(0,n.Fl)((function(){return J.value.indexOf("outline")>-1})),ll=(0,n.iH)([]),tl=(0,n.Fl)((function(){return ll.value.indexOf("outline")>-1})),el=(0,n.Fl)((function(){return ll.value.indexOf("small")>-1})),nl=(0,n.Fl)((function(){return ll.value.indexOf("disabled")>-1})),ol=(0,o.oR)(),ul=function(){ol.dispatch("darkMode")};return function(l,o){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(U.Z,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=function(l){return e.value=l}),title:"Please confirm action","button-label":"Confirm","has-cancel":""},{default:(0,n.w5)((function(){return[x]})),_:1},8,["modelValue"]),(0,n.Wm)(U.Z,{modelValue:L.value,"onUpdate:modelValue":o[1]||(o[1]=function(l){return L.value=l}),"large-title":"Unhandled exception",button:"danger",shake:""},{default:(0,n.w5)((function(){return[W]})),_:1},8,["modelValue"]),(0,n.Wm)(U.Z,{modelValue:Q.value,"onUpdate:modelValue":o[2]||(o[2]=function(l){return Q.value=l}),"large-title":"Success",button:"success"},{default:(0,n.w5)((function(){return[Z]})),_:1},8,["modelValue"]),(0,n.Wm)(r.Z,{"title-stack":t.value},null,8,["title-stack"]),(0,n.Wm)(a.Z,null,{default:(0,n.w5)((function(){return[_]})),_:1}),(0,n.Wm)(b.Z,{first:""},{default:(0,n.w5)((function(){return[h]})),_:1}),(0,n.Wm)(i.Z,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(s.Z,{class:"md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto"},{default:(0,n.w5)((function(){return[(0,n._)("div",k,[(0,n.Wm)(d.Z,{label:"Toggle",outline:"",onClick:ul})])]})),_:1})]})),_:1}),(0,n.Wm)(b.Z,null,{default:(0,n.w5)((function(){return[y]})),_:1}),(0,n.Wm)(i.Z,null,{default:(0,n.w5)((function(){return[(0,n._)("div",v,[(0,n.Wm)(s.Z,{title:"Confirm modal","header-icon":(0,n.SU)(u.r5M),class:"cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto",hoverable:"",onClick:o[3]||(o[3]=function(l){return e.value=!0})},{default:(0,n.w5)((function(){return[O,(0,n.Wm)(f.Z),(0,n.Wm)(c.Z,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(d.Z,{label:"Confirm",color:"info"}),(0,n.Wm)(d.Z,{label:"Cancel",color:"info",outline:""})]})),_:1})]})),_:1},8,["header-icon"]),(0,n.Wm)(s.Z,{class:"cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto",hoverable:"",onClick:o[4]||(o[4]=function(l){return L.value=!0})},{default:(0,n.w5)((function(){return[B,(0,n.Wm)(f.Z),(0,n.Wm)(c.Z,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(d.Z,{label:"Done",color:"danger"})]})),_:1})]})),_:1}),(0,n.Wm)(s.Z,{class:"cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto",hoverable:"",onClick:o[5]||(o[5]=function(l){return Q.value=!0})},{default:(0,n.w5)((function(){return[C,(0,n.Wm)(f.Z),(0,n.Wm)(d.Z,{label:"Done",color:"success"})]})),_:1})])]})),_:1}),(0,n.Wm)(b.Z,{custom:""},{default:(0,n.w5)((function(){return[V,(0,n._)("div",D,[(0,n.Wm)(p.Z,{modelValue:J.value,"onUpdate:modelValue":o[6]||(o[6]=function(l){return J.value=l}),type:"switch",name:"notifications-switch",options:{outline:"Outline"}},null,8,["modelValue"])])]})),_:1}),(0,n.Wm)(i.Z,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(m.Z,{color:"info",icon:(0,n.SU)(u.EaN),outline:(0,n.SU)(X)},{right:(0,n.w5)((function(){return[(0,n.Wm)(d.Z,{icon:(0,n.SU)(u.fOx),label:"Button",color:"info",outline:(0,n.SU)(X),small:""},null,8,["icon","outline"])]})),default:(0,n.w5)((function(){return[H,j]})),_:1},8,["icon","outline"]),(0,n.Wm)(m.Z,{color:"success",icon:(0,n.SU)(u.k6A),outline:(0,n.SU)(X)},{right:(0,n.w5)((function(){return[(0,n.Wm)(d.Z,{icon:(0,n.SU)(u.fOx),label:"Button",color:"success",outline:(0,n.SU)(X),small:""},null,8,["icon","outline"])]})),default:(0,n.w5)((function(){return[N,F]})),_:1},8,["icon","outline"]),(0,n.Wm)(m.Z,{color:"warning",icon:(0,n.SU)(u._gM),outline:(0,n.SU)(X)},{right:(0,n.w5)((function(){return[(0,n.Wm)(d.Z,{icon:(0,n.SU)(u.fOx),label:"Button",color:"warning",outline:(0,n.SU)(X),small:""},null,8,["icon","outline"])]})),default:(0,n.w5)((function(){return[I,q]})),_:1},8,["icon","outline"]),(0,n.Wm)(m.Z,{color:"danger",icon:(0,n.SU)(u.fr4),outline:(0,n.SU)(X)},{right:(0,n.w5)((function(){return[(0,n.Wm)(d.Z,{icon:(0,n.SU)(u.fOx),label:"Button",color:"danger",outline:(0,n.SU)(X),small:""},null,8,["icon","outline"])]})),default:(0,n.w5)((function(){return[z,T]})),_:1},8,["icon","outline"]),(0,n.Wm)(m.Z,{color:"white",icon:(0,n.SU)(u.ghH),outline:(0,n.SU)(X)},{default:(0,n.w5)((function(){return[Y,M]})),_:1},8,["icon","outline"]),(0,n.Wm)(m.Z,{color:"light",icon:(0,n.SU)(u.zuO),outline:(0,n.SU)(X)},{default:(0,n.w5)((function(){return[A,P]})),_:1},8,["icon","outline"])]})),_:1}),(0,n.Wm)(b.Z,null,{default:(0,n.w5)((function(){return[R]})),_:1}),(0,n.Wm)(i.Z,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(s.Z,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(S.Z,{label:"Settings"},{default:(0,n.w5)((function(){return[(0,n.Wm)(p.Z,{modelValue:ll.value,"onUpdate:modelValue":o[7]||(o[7]=function(l){return ll.value=l}),name:"buttons-switch",type:"switch",options:{outline:"Outline",small:"Small",disabled:"Disabled"}},null,8,["modelValue"])]})),_:1}),(0,n.Wm)(f.Z),(0,n.Wm)(c.Z,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(d.Z,{color:"white",label:"Button",small:(0,n.SU)(el),outline:(0,n.SU)(tl),disabled:(0,n.SU)(nl)},null,8,["small","outline","disabled"]),(0,n.Wm)(d.Z,{color:"light",label:"Button",small:(0,n.SU)(el),outline:(0,n.SU)(tl),disabled:(0,n.SU)(nl)},null,8,["small","outline","disabled"]),(0,n.Wm)(d.Z,{color:"info",label:"Button",small:(0,n.SU)(el),outline:(0,n.SU)(tl),disabled:(0,n.SU)(nl)},null,8,["small","outline","disabled"]),(0,n.Wm)(d.Z,{color:"success",label:"Button",small:(0,n.SU)(el),outline:(0,n.SU)(tl),disabled:(0,n.SU)(nl)},null,8,["small","outline","disabled"]),(0,n.Wm)(d.Z,{color:"warning",label:"Button",small:(0,n.SU)(el),outline:(0,n.SU)(tl),disabled:(0,n.SU)(nl)},null,8,["small","outline","disabled"]),(0,n.Wm)(d.Z,{color:"danger",label:"Button",small:(0,n.SU)(el),outline:(0,n.SU)(tl),disabled:(0,n.SU)(nl)},null,8,["small","outline","disabled"])]})),_:1}),(0,n.Wm)(f.Z),(0,n.Wm)(c.Z,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(d.Z,{color:"white",label:"Button",icon:(0,n.SU)(u.fOx),small:(0,n.SU)(el),outline:(0,n.SU)(tl),disabled:(0,n.SU)(nl)},null,8,["icon","small","outline","disabled"]),(0,n.Wm)(d.Z,{color:"light",label:"Button",icon:(0,n.SU)(u.fOx),small:(0,n.SU)(el),outline:(0,n.SU)(tl),disabled:(0,n.SU)(nl)},null,8,["icon","small","outline","disabled"]),(0,n.Wm)(d.Z,{color:"info",label:"Button",icon:(0,n.SU)(u.fOx),small:(0,n.SU)(el),outline:(0,n.SU)(tl),disabled:(0,n.SU)(nl)},null,8,["icon","small","outline","disabled"]),(0,n.Wm)(d.Z,{color:"success",label:"Button",icon:(0,n.SU)(u.fOx),small:(0,n.SU)(el),outline:(0,n.SU)(tl),disabled:(0,n.SU)(nl)},null,8,["icon","small","outline","disabled"]),(0,n.Wm)(d.Z,{color:"warning",label:"Button",icon:(0,n.SU)(u.fOx),small:(0,n.SU)(el),outline:(0,n.SU)(tl),disabled:(0,n.SU)(nl)},null,8,["icon","small","outline","disabled"]),(0,n.Wm)(d.Z,{color:"danger",label:"Button",icon:(0,n.SU)(u.fOx),small:(0,n.SU)(el),outline:(0,n.SU)(tl),disabled:(0,n.SU)(nl)},null,8,["icon","small","outline","disabled"])]})),_:1}),(0,n.Wm)(f.Z),(0,n.Wm)(c.Z,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(d.Z,{color:"white",icon:(0,n.SU)(u.fOx),small:(0,n.SU)(el),outline:(0,n.SU)(tl),disabled:(0,n.SU)(nl)},null,8,["icon","small","outline","disabled"]),(0,n.Wm)(d.Z,{color:"light",icon:(0,n.SU)(u.fOx),small:(0,n.SU)(el),outline:(0,n.SU)(tl),disabled:(0,n.SU)(nl)},null,8,["icon","small","outline","disabled"]),(0,n.Wm)(d.Z,{color:"info",icon:(0,n.SU)(u.fOx),small:(0,n.SU)(el),outline:(0,n.SU)(tl),disabled:(0,n.SU)(nl)},null,8,["icon","small","outline","disabled"]),(0,n.Wm)(d.Z,{color:"success",icon:(0,n.SU)(u.fOx),small:(0,n.SU)(el),outline:(0,n.SU)(tl),disabled:(0,n.SU)(nl)},null,8,["icon","small","outline","disabled"]),(0,n.Wm)(d.Z,{color:"warning",icon:(0,n.SU)(u.fOx),small:(0,n.SU)(el),outline:(0,n.SU)(tl),disabled:(0,n.SU)(nl)},null,8,["icon","small","outline","disabled"]),(0,n.Wm)(d.Z,{color:"danger",icon:(0,n.SU)(u.fOx),small:(0,n.SU)(el),outline:(0,n.SU)(tl),disabled:(0,n.SU)(nl)},null,8,["icon","small","outline","disabled"])]})),_:1})]})),_:1})]})),_:1}),(0,n.Wm)(b.Z,null,{default:(0,n.w5)((function(){return[$]})),_:1}),(0,n.Wm)(i.Z,null,{default:(0,n.w5)((function(){return[(0,n._)("div",E,[(0,n.Wm)(s.Z,{title:"With Title",mb:""},{default:(0,n.w5)((function(){return[G]})),_:1}),(0,n.Wm)(s.Z,{title:"Title & Icons",icon:(0,n.SU)(u.qOQ),"header-icon":(0,n.SU)(u.r5M),mb:""},{default:(0,n.w5)((function(){return[K]})),_:1},8,["icon","header-icon"])]),(0,n.Wm)(g.Z,{icon:(0,n.SU)(u.fr4),title:"Empty variation"},null,8,["icon"]),(0,n.Wm)(s.Z,{empty:""})]})),_:1}),(0,n.Wm)(w.Z)],64)}}}}}]);