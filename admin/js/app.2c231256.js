(function(){"use strict";var e={8872:function(e,t,l){var a=l(7764),o=l(4108),s=l(9096),n=l(2500),i=l(2312);const r=(0,i.O6)("adminStore",{state:()=>({mysqlTable:[{name:"mws_metrics",status:0,size:0},{name:"mws_metrics_units",status:0,size:0},{name:"mws_abonent",status:0,size:0},{name:"mws_abonent_status",status:0,size:0}],metric:[]}),actions:{async checkTable(){const e=await new Promise((e=>{BX.rest.callMethod("mwsproactiverest.checktable",{table:this.mysqlTable},(t=>{e(t.data())}))}));this.mysqlTable=e,console.log(this.mysqlTable)},async getDealCategory(){const e=await new Promise((e=>{BX.rest.callMethod("crm.status.entity.types",{},(t=>{t.error()?e(t.error()):e(t.data())}))}));return e},async setMetric(e){const t=new Promise(((t,l)=>{BX.rest.callMethod("mwsproactiverest.metric.add",{metric:e},(e=>{e.error()?l(e.error()):t(e.data())}))}));return t},async getMetric(){const e=await new Promise((e=>{BX.rest.callMethod("mwsproactiverest.metric.getList",{order:[],filter:[],select:[]},(t=>{e(t.data())}))}));console.log(e),this.metric=e}},getters:{getTableCheck(e){return e.mysqlTable},getTableMetric(e){return e.metric}}});var c=l(8072);const u=e=>((0,o.ED)("data-v-0f8e4587"),e=e(),(0,o.ii)(),e),d={class:"flex flex-nowrap flex-row gap-3"},m={class:"m-0 word-wrap"},p={class:"flex gap-3 mt-1"},f={class:"flex flex-column"},b={class:"flex flex-nowrap flex-column gap-2"},v=u((()=>(0,o.QD)("p",{class:"m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1))),g=u((()=>(0,o.QD)("p",{class:"m-0"}," Функция для передачи метрик из АСУО в битрикс 24. Принемает в себя JSON ",-1))),Q=u((()=>(0,o.QD)("p",{class:"m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1))),h=u((()=>(0,o.QD)("div",{style:{position:"relative"}},[(0,o.QD)("div",{style:{position:"absolute",top:"-10000px",left:"-10000px"}},[(0,o.QD)("textarea",{type:"text",id:"copyBuf",style:{width:"1px",height:"1px"}})])],-1)));var y={__name:"Connect",setup(e){const t=(0,c.W)(),l=r(),a=((0,i.Ou)(l),(0,n.IL)(""));(0,o.u2)((async()=>{await l.checkTable();const e=await new Promise((e=>{BX.rest.callMethod("mwsproactiverest.getToken",{},(t=>{e(t.data())}))}));a&&(a.value=e)}));const u=async()=>{const e=y(128);a.value=e;const l=await new Promise((t=>{BX.rest.callMethod("mwsproactiverest.setToken",{genToken:e},(e=>{t(e.data())}))}));l&&t.add({severity:"success",summary:"Установлен новый токен!",detail:"",life:3e3})},y=e=>{let t="abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789",l="";for(let a=0;a<e;a++){let e=Math.floor(Math.random()*t.length);l+=t.substring(e,e+1)}return l},x=()=>{var e=document.getElementById("copyBuf");e.value=a.value,e.select(),document.execCommand("copy")};return(e,t)=>{const i=(0,o.E1)("Button"),r=(0,o.E1)("Card"),c=(0,o.E1)("Panel"),y=(0,o.E1)("Toast");return(0,o.Wz)(),(0,o.An)(o.ae,null,[(0,o.QD)("div",d,[(0,o.K2)(r,{class:"w-30rem"},{header:(0,o.Ql)((()=>[])),title:(0,o.Ql)((()=>[(0,o.mY)("Токен")])),subtitle:(0,o.Ql)((()=>[(0,o.mY)("Авторизация для подключения")])),content:(0,o.Ql)((()=>[(0,o.QD)("p",m,(0,s.WA)(a.value),1)])),footer:(0,o.Ql)((()=>[(0,o.QD)("div",p,[(0,o.K2)(i,{label:"Копировать",severity:"secondary",outlined:"",class:"w-full",onClick:t[0]||(t[0]=e=>x())}),(0,o.K2)(i,{label:a.value.length>0?"Перевыпустить":"Сгенерировать",class:"w-full",onClick:t[1]||(t[1]=e=>u())},null,8,["label"])])])),_:1}),(0,o.K2)(r,{class:"w-30rem"},{header:(0,o.Ql)((()=>[])),title:(0,o.Ql)((()=>[(0,o.mY)("Таблицы")])),subtitle:(0,o.Ql)((()=>[])),content:(0,o.Ql)((()=>[(0,o.QD)("div",f,[((0,o.Wz)(!0),(0,o.An)(o.ae,null,(0,o.mi)((0,n.KV)(l).getTableCheck,(e=>((0,o.Wz)(),(0,o.An)("div",{class:(0,s.WN)(["flex align-items-center justify-content-between h-3rem font-bold border-round m-2 p-2",1==e.status?"bg-green-300":"bg-red-300"])},[(0,o.QD)("span",null,(0,s.WA)(e.name),1),(0,o.mY)(),(0,o.QD)("span",null,(0,s.WA)(e.size+" Мб"),1)],2)))),256))])])),footer:(0,o.Ql)((()=>[])),_:1}),(0,o.K2)(r,{class:"w-full"},{header:(0,o.Ql)((()=>[])),title:(0,o.Ql)((()=>[(0,o.mY)("Методы ")])),subtitle:(0,o.Ql)((()=>[(0,o.mY)("Точка входа: https://btrx.ugmk-telecom.ru/integration/index.php")])),content:(0,o.Ql)((()=>[(0,o.QD)("div",b,[(0,o.K2)(c,{header:"setAlarm",collapsed:"false",toggleable:"",pt:{header:e=>({id:"myPanelHeader",style:{"user-select":"none"},class:["border-primary",{"bg-primary":e.state.d_collapsed,"bg-primary-reverse":!e.state.d_collapsed}]}),content:{class:"border-primary text-lg text-primary-700"},title:"text-xl",toggler:()=>"bg-primary hover:bg-primary-reverse"}},{default:(0,o.Ql)((()=>[v])),_:1},8,["pt"]),(0,o.K2)(c,{header:"setMetric",collapsed:"false",toggleable:"",pt:{header:e=>({id:"myPanelHeader",style:{"user-select":"none"},class:["border-primary",{"bg-primary":e.state.d_collapsed,"bg-primary-reverse":!e.state.d_collapsed}]}),content:{class:"border-primary text-lg text-primary-700"},title:"text-xl",toggler:()=>"bg-primary hover:bg-primary-reverse"}},{default:(0,o.Ql)((()=>[g])),_:1},8,["pt"]),(0,o.K2)(c,{header:"setMore",collapsed:"false",toggleable:"",pt:{header:e=>({id:"myPanelHeader",style:{"user-select":"none"},class:["border-primary",{"bg-primary":e.state.d_collapsed,"bg-primary-reverse":!e.state.d_collapsed}]}),content:{class:"border-primary text-lg text-primary-700"},title:"text-xl",toggler:()=>"bg-primary hover:bg-primary-reverse"}},{default:(0,o.Ql)((()=>[Q])),_:1},8,["pt"])])])),footer:(0,o.Ql)((()=>[])),_:1})]),h,(0,o.K2)(y)],64)}}},x=l(4100);const w=(0,x.c)(y,[["__scopeId","data-v-0f8e4587"]]);var D=w;const _=e=>((0,o.ED)("data-v-20134f99"),e=e(),(0,o.ii)(),e),K={class:"flex flex-wrap flex-column gap-3"},T={class:"mb-3"},E={class:"w-20rem word-wrap"},A={class:"w-20rem word-wrap"},k=_((()=>(0,o.QD)("span",{class:"align-content-center"}," В данный момент нет не одной метрики. ",-1))),V={class:"flex flex-wrap flex-row gap-3 justify-content-start"},W=_((()=>(0,o.QD)("span",{class:"p-text-secondary block mb-5"},"Update your information.",-1))),q={class:"flex flex-column gap-3 mb-3"},Y=_((()=>(0,o.QD)("label",{for:"metricName",class:"font-semibold"},"Название метрики",-1))),M={class:"flex flex-column gap-3 mb-5"},C=_((()=>(0,o.QD)("label",{for:"metricMeaning",class:"font-semibold"},"Возможные значения",-1))),P={class:"flex flex-column gap-3 mb-5"},I=_((()=>(0,o.QD)("label",{for:"metriStandart",class:"font-semibold"},"Стандарт",-1))),O={class:"flex flex-column gap-3 mb-5"},z=_((()=>(0,o.QD)("label",{for:"metricDescription",class:"font-semibold"},"Описание метрики",-1))),B={class:"flex flex-column gap-3 mb-5"},L=_((()=>(0,o.QD)("label",{for:"metricTests",class:"font-semibold"},"Регламент тестов",-1))),N={class:"flex justify-content-end gap-2"};var S={__name:"ProactiveAdmin",setup(e){const t=(0,c.W)(),l=r(),a=(0,i.Ou)(l),u=(0,n.IL)(!1),d=(0,n.IL)(""),m=(0,n.IL)(""),p=(0,n.IL)(""),f=(0,n.IL)(""),b=(0,n.IL)(""),v=async()=>{const e={NAME:d.value,MEANING:m.value,STANDART:p.value,DESCRIPTION:f.value,TESTS:b.value},a=await l.setMetric(e);a>0?t.add({severity:"success",summary:"Метрика успешно добавлена",detail:"",life:3e3}):t.add({severity:"error",summary:"Неудалось добавить метрику",detail:"",life:3e3})};return(0,o.u2)((async()=>{await l.getDealCategory();await l.getMetric()})),(e,t)=>{const i=(0,o.E1)("Button"),r=(0,o.E1)("Column"),c=(0,o.E1)("DataTable"),g=(0,o.E1)("Panel"),Q=(0,o.E1)("Listbox"),h=(0,o.E1)("InputText"),y=(0,o.E1)("Inplace"),x=(0,o.E1)("Card"),w=(0,o.E1)("Textarea"),D=(0,o.E1)("Dialog"),_=(0,o.iS)("tooltip");return(0,o.Wz)(),(0,o.An)("div",K,[(0,o.K2)(g,{toggleable:"",collapsed:"false",class:"w-full"},{header:(0,o.Ql)((()=>[(0,o.mY)(" Метрики "),(0,o.QD)("span",null," Всего "+(0,s.WA)((0,n.KV)(a).metric.value.length)+" метрик",1)])),default:(0,o.Ql)((()=>[(0,o.QD)("div",T,[(0,o.K2)(i,{label:"Добавить",onClick:t[0]||(t[0]=e=>u.value=!u.value)})]),(0,o.K2)(c,{value:(0,n.KV)(l).getTableMetric,paginator:"",rows:5,rowsPerPageOptions:[5,10,20,50]},{empty:(0,o.Ql)((()=>[k])),default:(0,o.Ql)((()=>[(0,o.K2)(r,{field:"id"},{header:(0,o.Ql)((()=>[(0,o.mY)(" Ид ")])),body:(0,o.Ql)((e=>[(0,o.mY)((0,s.WA)(e.data.id),1)])),_:1}),(0,o.K2)(r,{field:"metricName"},{header:(0,o.Ql)((()=>[(0,o.mY)(" Метрика ")])),body:(0,o.Ql)((e=>[(0,o.mY)((0,s.WA)(e.data.metricName),1)])),_:1}),(0,o.K2)(r,{field:"values"},{header:(0,o.Ql)((()=>[(0,o.mY)(" Возможное значение ")])),body:(0,o.Ql)((e=>[(0,o.mY)((0,s.WA)(e.data.values),1)])),_:1}),(0,o.K2)(r,{field:"normal"},{header:(0,o.Ql)((()=>[(0,o.mY)(" Норматив ")])),body:(0,o.Ql)((e=>[(0,o.mY)((0,s.WA)(e.data.normal),1)])),_:1}),(0,o.K2)(r,{field:"description"},{header:(0,o.Ql)((()=>[(0,o.mY)(" Описание ")])),body:(0,o.Ql)((e=>[(0,o.wt)(((0,o.Wz)(),(0,o.An)("div",E,[(0,o.mY)((0,s.WA)(e.data.description),1)])),[[_,{value:e.data.description,showDelay:1e3,hideDelay:300}]])])),_:1}),(0,o.K2)(r,{field:"check"},{header:(0,o.Ql)((()=>[(0,o.mY)(" Регламент тестов ")])),body:(0,o.Ql)((e=>[(0,o.wt)(((0,o.Wz)(),(0,o.An)("div",A,[(0,o.mY)((0,s.WA)(e.data.description)+(0,s.WA)(e.data.check),1)])),[[_,{value:e.data.check,showDelay:1e3,hideDelay:300}]])])),_:1})])),_:1},8,["value"])])),_:1}),(0,o.K2)(g,{header:"Привязки к сушностям",toggleable:"",collapsed:"false",class:"w-full"},{default:(0,o.Ql)((()=>[(0,o.QD)("div",V,[(0,o.K2)(x,null,{header:(0,o.Ql)((()=>[])),title:(0,o.Ql)((()=>[(0,o.mY)("Сделки воронка")])),subtitle:(0,o.Ql)((()=>[])),content:(0,o.Ql)((()=>[(0,o.K2)(Q,{options:e.lists,optionLabel:"name",class:"w-14rem",listStyle:"max-height:250px"},null,8,["options"])])),footer:(0,o.Ql)((()=>[(0,o.K2)(y,{onClose:t[2]||(t[2]=t=>e.testEvent(e.test)),closable:!0,closeIcon:"pi pi-check"},{display:(0,o.Ql)((()=>[(0,o.mY)((0,s.WA)("Добавить"))])),content:(0,o.Ql)((()=>[(0,o.K2)(h,{modelValue:e.text,"onUpdate:modelValue":t[1]||(t[1]=t=>e.text=t),autofocus:""},null,8,["modelValue"])])),_:1})])),_:1}),(0,o.K2)(x,null,{header:(0,o.Ql)((()=>[])),title:(0,o.Ql)((()=>[(0,o.mY)("Лицевые счета (смарт процесс)")])),subtitle:(0,o.Ql)((()=>[])),content:(0,o.Ql)((()=>[(0,o.K2)(Q,{options:e.lists,optionLabel:"name",class:"w-14rem",listStyle:"max-height:250px"},null,8,["options"])])),footer:(0,o.Ql)((()=>[(0,o.K2)(y,{onClose:t[4]||(t[4]=t=>e.testEvent(e.test)),closable:!0,closeIcon:"pi pi-check"},{display:(0,o.Ql)((()=>[(0,o.mY)((0,s.WA)("Добавить"))])),content:(0,o.Ql)((()=>[(0,o.K2)(h,{modelValue:e.text,"onUpdate:modelValue":t[3]||(t[3]=t=>e.text=t),autofocus:""},null,8,["modelValue"])])),_:1})])),_:1})])])),_:1}),(0,o.K2)(D,{visible:u.value,"onUpdate:visible":t[12]||(t[12]=e=>u.value=e),header:"Добавить метрику",style:{width:"35rem"},position:"topright",modal:!0,draggable:!1},{default:(0,o.Ql)((()=>[W,(0,o.QD)("div",q,[Y,(0,o.K2)(h,{id:"metricName",modelValue:d.value,"onUpdate:modelValue":t[5]||(t[5]=e=>d.value=e),class:"flex-auto",autocomplete:"off"},null,8,["modelValue"])]),(0,o.QD)("div",M,[C,(0,o.K2)(h,{id:"metricMeaning",modelValue:m.value,"onUpdate:modelValue":t[6]||(t[6]=e=>m.value=e),class:"flex-auto",autocomplete:"off"},null,8,["modelValue"])]),(0,o.QD)("div",P,[I,(0,o.K2)(h,{id:"metricStandart",modelValue:p.value,"onUpdate:modelValue":t[7]||(t[7]=e=>p.value=e),class:"flex-auto",autocomplete:"off"},null,8,["modelValue"])]),(0,o.QD)("div",O,[z,(0,o.K2)(w,{id:"metricDescription",modelValue:f.value,"onUpdate:modelValue":t[8]||(t[8]=e=>f.value=e),autoResize:"",rows:"5",cols:"30"},null,8,["modelValue"])]),(0,o.QD)("div",B,[L,(0,o.K2)(w,{id:"metricTests",modelValue:b.value,"onUpdate:modelValue":t[9]||(t[9]=e=>b.value=e),autoResize:"",rows:"5",cols:"30"},null,8,["modelValue"])]),(0,o.QD)("div",N,[(0,o.K2)(i,{type:"button",label:"Отмена",severity:"secondary",onClick:t[10]||(t[10]=e=>u.value=!u.value)}),(0,o.K2)(i,{type:"button",label:"Сохранить",onClick:t[11]||(t[11]=t=>(e.visible=!1,v()))})])])),_:1},8,["visible"])])}}};const U=(0,x.c)(S,[["__scopeId","data-v-20134f99"]]);var j=U;const X=(0,o.QD)("div",{class:"flex align-items-center gap-2"},[(0,o.QD)("span",{class:"font-bold white-space-nowrap"},"Подключение")],-1),R=(0,o.QD)("div",{class:"flex align-items-center gap-2"},[(0,o.QD)("span",{class:"font-bold white-space-nowrap"},"Проактивный Сервис")],-1),H=(0,o.QD)("div",{class:"flex align-items-center gap-2"},[(0,o.QD)("span",{class:"font-bold white-space-nowrap"},"Аварии / ППР")],-1),F=(0,o.QD)("div",{class:"flex align-items-center gap-2"},[(0,o.QD)("span",{class:"font-bold white-space-nowrap"},"Общие справочники")],-1),G=(0,o.QD)("div",{class:"flex align-items-center gap-2"},[(0,o.QD)("span",{class:"font-bold white-space-nowrap"},"Доступ")],-1),J=(0,o.QD)("p",{class:"m-0"}," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ",-1);var Z={__name:"App",setup(e){return(e,t)=>{const l=(0,o.E1)("TabPanel"),a=(0,o.E1)("Entity"),s=(0,o.E1)("TabView"),n=(0,o.E1)("Toast");return(0,o.Wz)(),(0,o.An)(o.ae,null,[(0,o.K2)(s,null,{default:(0,o.Ql)((()=>[(0,o.K2)(l,null,{header:(0,o.Ql)((()=>[X])),default:(0,o.Ql)((()=>[(0,o.K2)(D)])),_:1}),(0,o.K2)(l,null,{header:(0,o.Ql)((()=>[R])),default:(0,o.Ql)((()=>[(0,o.K2)(j)])),_:1}),(0,o.K2)(l,null,{header:(0,o.Ql)((()=>[H])),_:1}),(0,o.K2)(l,null,{header:(0,o.Ql)((()=>[F])),default:(0,o.Ql)((()=>[(0,o.K2)(a)])),_:1}),(0,o.K2)(l,null,{header:(0,o.Ql)((()=>[G])),default:(0,o.Ql)((()=>[J])),_:1})])),_:1}),(0,o.K2)(n)],64)}}};const $=Z;var ee=$,te=l(9476),le=l(2752),ae=l(8830),oe=l(8724),se=l(1588),ne=l(3716),ie=l(6588),re=l(5844),ce=l(5160),ue=l(100),de=l(6960),me=l(5556),pe=l(7540);const fe=(0,a.W0)(ee),be=(0,i.Kw)();fe.use(be),fe.use(te.cp),fe.use(le.c),fe.component("TabView",oe.c),fe.component("TabPanel",se.c),fe.component("Card",ne.c),fe.component("Button",ae.c),fe.component("Panel",ie.c),fe.component("DataTable",re.c),fe.component("Column",ce.c),fe.component("Dialog",ue.c),fe.component("InputText",de.c),fe.component("Textarea",me.c),fe.component("Toast",pe.c),fe.mount("#app")}},t={};function l(a){var o=t[a];if(void 0!==o)return o.exports;var s=t[a]={exports:{}};return e[a].call(s.exports,s,s.exports,l),s.exports}l.m=e,function(){var e=[];l.O=function(t,a,o,s){if(!a){var n=1/0;for(u=0;u<e.length;u++){a=e[u][0],o=e[u][1],s=e[u][2];for(var i=!0,r=0;r<a.length;r++)(!1&s||n>=s)&&Object.keys(l.O).every((function(e){return l.O[e](a[r])}))?a.splice(r--,1):(i=!1,s<n&&(n=s));if(i){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[a,o,s]}}(),function(){l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,{a:t}),t}}(),function(){l.d=function(e,t){for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};l.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,s,n=a[0],i=a[1],r=a[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(o in i)l.o(i,o)&&(l.m[o]=i[o]);if(r)var u=r(l)}for(t&&t(a);c<n.length;c++)s=n[c],l.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return l.O(u)},a=self["webpackChunkproactive_admin_pack"]=self["webpackChunkproactive_admin_pack"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=l.O(void 0,[999],(function(){return l(8872)}));a=l.O(a)})();
//# sourceMappingURL=app.2c231256.js.map