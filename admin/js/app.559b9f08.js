(function(){"use strict";var e={4138:function(e,l,a){var t=a(7764),o=a(4108),n=a(9096),s=a(2500),i=a(2312);const r=(0,i.O6)("adminStore",{state:()=>({mysqlTable:[{name:"mws_metrics",status:0,size:0},{name:"mws_metrics_units",status:0,size:0},{name:"mws_abonent",status:0,size:0},{name:"mws_abonent_status",status:0,size:0}],metric:[]}),actions:{async checkTable(){const e=new Promise((e=>{BX.rest.callMethod("mwsproactiverest.checktable",{table:this.mysqlTable},(l=>{e(l.data())}))}));this.mysqlTable=e},async getDealCategory(){const e=await new Promise((e=>{BX.rest.callMethod("crm.status.entity.types",{},(l=>{l.error()?e(l.error()):e(l.data())}))}));return e}},getters:{}}),c=e=>((0,o.ED)("data-v-a9e5c7ae"),e=e(),(0,o.ii)(),e),u={class:"flex flex-nowrap flex-row gap-3"},d={class:"m-0 word-wrap"},m={class:"flex gap-3 mt-1"},p={class:"flex flex-column"},f={class:"flex flex-nowrap flex-column gap-2"},b=c((()=>(0,o.QD)("p",{class:"m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1))),v=c((()=>(0,o.QD)("p",{class:"m-0"}," Функция для передачи метрик из АСУО в битрикс 24. Принемает в себя JSON ",-1))),g=c((()=>(0,o.QD)("p",{class:"m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1))),Q=c((()=>(0,o.QD)("div",{style:{position:"relative"}},[(0,o.QD)("div",{style:{position:"absolute",top:"-10000px",left:"-10000px"}},[(0,o.QD)("textarea",{type:"text",id:"copyBuf",style:{width:"1px",height:"1px"}})])],-1)));var h={__name:"Connect",setup(e){const l=r(),a=(0,i.Ou)(l),t=(0,s.IL)("");(0,o.u2)((async()=>{await l.checkTable();const e=await new Promise((e=>{BX.rest.callMethod("mwsproactiverest.getToken",{},(l=>{e(l.data())}))}));t&&(t.value=e)}));const c=async()=>{const e=h(128);t.value=e;await new Promise((l=>{BX.rest.callMethod("mwsproactiverest.setToken",{genToken:e},(e=>{l(e.data())}))}))},h=e=>{let l="abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789",a="";for(let t=0;t<e;t++){let e=Math.floor(Math.random()*l.length);a+=l.substring(e,e+1)}return a},y=()=>{var e=document.getElementById("copyBuf");e.value=t.value,e.select(),document.execCommand("copy")};return(e,l)=>{const i=(0,o.E1)("Button"),r=(0,o.E1)("Card"),h=(0,o.E1)("Panel");return(0,o.Wz)(),(0,o.An)(o.ae,null,[(0,o.QD)("div",u,[(0,o.K2)(r,{class:"w-30rem"},{header:(0,o.Ql)((()=>[])),title:(0,o.Ql)((()=>[(0,o.mY)("Токен")])),subtitle:(0,o.Ql)((()=>[(0,o.mY)("Авторизация для подключения")])),content:(0,o.Ql)((()=>[(0,o.QD)("p",d,(0,n.WA)(t.value),1)])),footer:(0,o.Ql)((()=>[(0,o.QD)("div",m,[(0,o.K2)(i,{label:"Копировать",severity:"secondary",outlined:"",class:"w-full",onClick:l[0]||(l[0]=e=>y())}),(0,o.K2)(i,{label:t.value.length>0?"Перевыпустить":"Сгенерировать",class:"w-full",onClick:l[1]||(l[1]=e=>c())},null,8,["label"])])])),_:1}),(0,o.K2)(r,{class:"w-30rem"},{header:(0,o.Ql)((()=>[])),title:(0,o.Ql)((()=>[(0,o.mY)("Таблицы")])),subtitle:(0,o.Ql)((()=>[])),content:(0,o.Ql)((()=>[(0,o.QD)("div",p,[((0,o.Wz)(!0),(0,o.An)(o.ae,null,(0,o.mi)((0,s.KV)(a).mysqlTable.value,(e=>((0,o.Wz)(),(0,o.An)("div",{class:(0,n.WN)(["flex align-items-center justify-content-between h-3rem font-bold border-round m-2 p-2",1==e.status?"bg-green-300":"bg-red-300"])},[(0,o.QD)("span",null,(0,n.WA)(e.name),1),(0,o.mY)(),(0,o.QD)("span",null,(0,n.WA)(e.size+" Мб"),1)],2)))),256))])])),footer:(0,o.Ql)((()=>[])),_:1}),(0,o.K2)(r,{class:"w-full"},{header:(0,o.Ql)((()=>[])),title:(0,o.Ql)((()=>[(0,o.mY)("Методы ")])),subtitle:(0,o.Ql)((()=>[(0,o.mY)("Точка входа: https://btrx.ugmk-telecom.ru/integration/index.php")])),content:(0,o.Ql)((()=>[(0,o.QD)("div",f,[(0,o.K2)(h,{header:"setAlarm",collapsed:"false",toggleable:"",pt:{header:e=>({id:"myPanelHeader",style:{"user-select":"none"},class:["border-primary",{"bg-primary":e.state.d_collapsed,"bg-primary-reverse":!e.state.d_collapsed}]}),content:{class:"border-primary text-lg text-primary-700"},title:"text-xl",toggler:()=>"bg-primary hover:bg-primary-reverse"}},{default:(0,o.Ql)((()=>[b])),_:1},8,["pt"]),(0,o.K2)(h,{header:"setMetric",collapsed:"false",toggleable:"",pt:{header:e=>({id:"myPanelHeader",style:{"user-select":"none"},class:["border-primary",{"bg-primary":e.state.d_collapsed,"bg-primary-reverse":!e.state.d_collapsed}]}),content:{class:"border-primary text-lg text-primary-700"},title:"text-xl",toggler:()=>"bg-primary hover:bg-primary-reverse"}},{default:(0,o.Ql)((()=>[v])),_:1},8,["pt"]),(0,o.K2)(h,{header:"setMore",collapsed:"false",toggleable:"",pt:{header:e=>({id:"myPanelHeader",style:{"user-select":"none"},class:["border-primary",{"bg-primary":e.state.d_collapsed,"bg-primary-reverse":!e.state.d_collapsed}]}),content:{class:"border-primary text-lg text-primary-700"},title:"text-xl",toggler:()=>"bg-primary hover:bg-primary-reverse"}},{default:(0,o.Ql)((()=>[g])),_:1},8,["pt"])])])),footer:(0,o.Ql)((()=>[])),_:1})]),Q],64)}}},y=a(4100);const x=(0,y.c)(h,[["__scopeId","data-v-a9e5c7ae"]]);var w=x;a(3248);const D=e=>((0,o.ED)("data-v-2beae0a4"),e=e(),(0,o.ii)(),e),_={class:"flex flex-wrap flex-column gap-3"},K={class:"mb-3"},k={class:"w-20rem word-wrap"},E={class:"w-20rem word-wrap"},T=D((()=>(0,o.QD)("span",{class:"align-content-center"}," В данный момент нет не одной метрики. ",-1))),V={class:"flex flex-wrap flex-row gap-3 justify-content-start"},A=D((()=>(0,o.QD)("span",{class:"p-text-secondary block mb-5"},"Update your information.",-1))),Y={class:"flex flex-column gap-3 mb-3"},q=D((()=>(0,o.QD)("label",{for:"metricName",class:"font-semibold"},"Название метрики",-1))),W={class:"flex flex-column gap-3 mb-5"},C=D((()=>(0,o.QD)("label",{for:"metricMeaning",class:"font-semibold"},"Возможные значения",-1))),P={class:"flex flex-column gap-3 mb-5"},I=D((()=>(0,o.QD)("label",{for:"metriStandart",class:"font-semibold"},"Стандарт",-1))),O={class:"flex flex-column gap-3 mb-5"},z=D((()=>(0,o.QD)("label",{for:"metricDescription",class:"font-semibold"},"Описание метрики",-1))),L={class:"flex flex-column gap-3 mb-5"},M=D((()=>(0,o.QD)("label",{for:"metricTests",class:"font-semibold"},"Регламент тестов",-1))),B={class:"flex justify-content-end gap-2"};var U={__name:"ProactiveAdmin",setup(e){const l=r(),a=(0,i.Ou)(l),t=(0,s.IL)(!1),c=(0,s.IL)(""),u=(0,s.IL)(""),d=(0,s.IL)(""),m=(0,s.IL)(""),p=(0,s.IL)(""),f=(0,s.IL)([{name:"Новое",code:"NY"},{name:"Повторное",code:"RM"},{name:"Обработано",code:"LDN"}]),b=(0,s.IL)(""),v=e=>{f.value.push({name:b.value}),b.value=""};return(0,o.u2)((async()=>{const e=await l.getDealCategory();console.log(e)})),(e,l)=>{const i=(0,o.E1)("Button"),r=(0,o.E1)("Column"),g=(0,o.E1)("DataTable"),Q=(0,o.E1)("Panel"),h=(0,o.E1)("Listbox"),y=(0,o.E1)("InputText"),x=(0,o.E1)("Inplace"),w=(0,o.E1)("Card"),D=(0,o.E1)("Textarea"),U=(0,o.E1)("Dialog"),N=(0,o.iS)("tooltip");return(0,o.Wz)(),(0,o.An)("div",_,[(0,o.K2)(Q,{toggleable:"",collapsed:"false",class:"w-full"},{header:(0,o.Ql)((()=>[(0,o.mY)(" Метрики "),(0,o.QD)("span",null," Всего "+(0,n.WA)((0,s.KV)(a).metric.value.length)+" метрик",1)])),default:(0,o.Ql)((()=>[(0,o.QD)("div",K,[(0,o.K2)(i,{label:"Добавить",onClick:l[0]||(l[0]=e=>t.value=!t.value)})]),(0,o.K2)(g,{value:(0,s.KV)(a).metric.value,paginator:"",rows:5,rowsPerPageOptions:[5,10,20,50]},{empty:(0,o.Ql)((()=>[T])),default:(0,o.Ql)((()=>[(0,o.K2)(r,{field:"id"},{header:(0,o.Ql)((()=>[(0,o.mY)(" Ид ")])),body:(0,o.Ql)((e=>[(0,o.mY)((0,n.WA)(e.data.id),1)])),_:1}),(0,o.K2)(r,{field:"metricName"},{header:(0,o.Ql)((()=>[(0,o.mY)(" Метрика ")])),body:(0,o.Ql)((e=>[(0,o.mY)((0,n.WA)(e.data.metricName),1)])),_:1}),(0,o.K2)(r,{field:"values"},{header:(0,o.Ql)((()=>[(0,o.mY)(" Возможное значение ")])),body:(0,o.Ql)((e=>[(0,o.mY)((0,n.WA)(e.data.values),1)])),_:1}),(0,o.K2)(r,{field:"normal"},{header:(0,o.Ql)((()=>[(0,o.mY)(" Норматив ")])),body:(0,o.Ql)((e=>[(0,o.mY)((0,n.WA)(e.data.normal),1)])),_:1}),(0,o.K2)(r,{field:"description"},{header:(0,o.Ql)((()=>[(0,o.mY)(" Описание ")])),body:(0,o.Ql)((e=>[(0,o.wt)(((0,o.Wz)(),(0,o.An)("div",k,[(0,o.mY)((0,n.WA)(e.data.description),1)])),[[N,{value:e.data.description,showDelay:1e3,hideDelay:300}]])])),_:1}),(0,o.K2)(r,{field:"check"},{header:(0,o.Ql)((()=>[(0,o.mY)(" Регламент тестов ")])),body:(0,o.Ql)((e=>[(0,o.wt)(((0,o.Wz)(),(0,o.An)("div",E,[(0,o.mY)((0,n.WA)(e.data.description)+(0,n.WA)(e.data.check),1)])),[[N,{value:e.data.check,showDelay:1e3,hideDelay:300}]])])),_:1})])),_:1},8,["value"])])),_:1}),(0,o.K2)(Q,{header:"Привязки к сушностям",toggleable:"",collapsed:"false",class:"w-full"},{default:(0,o.Ql)((()=>[(0,o.QD)("div",V,[(0,o.K2)(w,null,{header:(0,o.Ql)((()=>[])),title:(0,o.Ql)((()=>[(0,o.mY)("Сделки воронка")])),subtitle:(0,o.Ql)((()=>[])),content:(0,o.Ql)((()=>[(0,o.K2)(h,{options:f.value,optionLabel:"name",class:"w-14rem",listStyle:"max-height:250px"},null,8,["options"])])),footer:(0,o.Ql)((()=>[(0,o.K2)(x,{onClose:l[2]||(l[2]=l=>v(e.test)),closable:!0,closeIcon:"pi pi-check"},{display:(0,o.Ql)((()=>[(0,o.mY)((0,n.WA)("Добавить"))])),content:(0,o.Ql)((()=>[(0,o.K2)(y,{modelValue:b.value,"onUpdate:modelValue":l[1]||(l[1]=e=>b.value=e),autofocus:""},null,8,["modelValue"])])),_:1})])),_:1}),(0,o.K2)(w,null,{header:(0,o.Ql)((()=>[])),title:(0,o.Ql)((()=>[(0,o.mY)("Лицевые счета (смарт процесс)")])),subtitle:(0,o.Ql)((()=>[])),content:(0,o.Ql)((()=>[(0,o.K2)(h,{options:f.value,optionLabel:"name",class:"w-14rem",listStyle:"max-height:250px"},null,8,["options"])])),footer:(0,o.Ql)((()=>[(0,o.K2)(x,{onClose:l[4]||(l[4]=l=>v(e.test)),closable:!0,closeIcon:"pi pi-check"},{display:(0,o.Ql)((()=>[(0,o.mY)((0,n.WA)("Добавить"))])),content:(0,o.Ql)((()=>[(0,o.K2)(y,{modelValue:b.value,"onUpdate:modelValue":l[3]||(l[3]=e=>b.value=e),autofocus:""},null,8,["modelValue"])])),_:1})])),_:1})])])),_:1}),(0,o.K2)(U,{visible:t.value,"onUpdate:visible":l[12]||(l[12]=e=>t.value=e),header:"Добавить метрику",style:{width:"35rem"},position:"topright",modal:!0,draggable:!1},{default:(0,o.Ql)((()=>[A,(0,o.QD)("div",Y,[q,(0,o.K2)(y,{id:"metricName",modelValue:c.value,"onUpdate:modelValue":l[5]||(l[5]=e=>c.value=e),class:"flex-auto",autocomplete:"off"},null,8,["modelValue"])]),(0,o.QD)("div",W,[C,(0,o.K2)(y,{id:"metricMeaning",modelValue:u.value,"onUpdate:modelValue":l[6]||(l[6]=e=>u.value=e),class:"flex-auto",autocomplete:"off"},null,8,["modelValue"])]),(0,o.QD)("div",P,[I,(0,o.K2)(y,{id:"metricStandart",modelValue:d.value,"onUpdate:modelValue":l[7]||(l[7]=e=>d.value=e),class:"flex-auto",autocomplete:"off"},null,8,["modelValue"])]),(0,o.QD)("div",O,[z,(0,o.K2)(D,{id:"metricDescription",modelValue:m.value,"onUpdate:modelValue":l[8]||(l[8]=e=>m.value=e),autoResize:"",rows:"5",cols:"30"},null,8,["modelValue"])]),(0,o.QD)("div",L,[M,(0,o.K2)(D,{id:"metricTests",modelValue:p.value,"onUpdate:modelValue":l[9]||(l[9]=e=>p.value=e),autoResize:"",rows:"5",cols:"30"},null,8,["modelValue"])]),(0,o.QD)("div",B,[(0,o.K2)(i,{type:"button",label:"Отмена",severity:"secondary",onClick:l[10]||(l[10]=e=>t.value=!t.value)}),(0,o.K2)(i,{type:"button",label:"Сохранить",onClick:l[11]||(l[11]=l=>e.visible=!1)})])])),_:1},8,["visible"])])}}};const N=(0,y.c)(U,[["__scopeId","data-v-2beae0a4"]]);var j=N;const S=(0,o.QD)("div",{class:"flex align-items-center gap-2"},[(0,o.QD)("span",{class:"font-bold white-space-nowrap"},"Подключение")],-1),X=(0,o.QD)("div",{class:"flex align-items-center gap-2"},[(0,o.QD)("span",{class:"font-bold white-space-nowrap"},"Проактивный Сервис")],-1),H=(0,o.QD)("div",{class:"flex align-items-center gap-2"},[(0,o.QD)("span",{class:"font-bold white-space-nowrap"},"Аварии / ППР")],-1),R=(0,o.QD)("div",{class:"flex align-items-center gap-2"},[(0,o.QD)("span",{class:"font-bold white-space-nowrap"},"Общие справочники")],-1),F=(0,o.QD)("div",{class:"flex align-items-center gap-2"},[(0,o.QD)("span",{class:"font-bold white-space-nowrap"},"Доступ")],-1),G=(0,o.QD)("p",{class:"m-0"}," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ",-1);var J={__name:"App",setup(e){return(e,l)=>{const a=(0,o.E1)("TabPanel"),t=(0,o.E1)("Entity"),n=(0,o.E1)("TabView"),s=(0,o.E1)("Toast");return(0,o.Wz)(),(0,o.An)(o.ae,null,[(0,o.K2)(n,null,{default:(0,o.Ql)((()=>[(0,o.K2)(a,null,{header:(0,o.Ql)((()=>[S])),default:(0,o.Ql)((()=>[(0,o.K2)(w)])),_:1}),(0,o.K2)(a,null,{header:(0,o.Ql)((()=>[X])),default:(0,o.Ql)((()=>[(0,o.K2)(j)])),_:1}),(0,o.K2)(a,null,{header:(0,o.Ql)((()=>[H])),_:1}),(0,o.K2)(a,null,{header:(0,o.Ql)((()=>[R])),default:(0,o.Ql)((()=>[(0,o.K2)(t)])),_:1}),(0,o.K2)(a,null,{header:(0,o.Ql)((()=>[F])),default:(0,o.Ql)((()=>[G])),_:1})])),_:1}),(0,o.K2)(s)],64)}}};const Z=J;var $=Z,ee=a(9476),le=a(9716),ae=a(8830),te=a(8724),oe=a(1588),ne=a(3716),se=a(6588),ie=a(5844),re=a(5160),ce=a(100),ue=a(6960),de=a(5556),me=a(7540);const pe=(0,t.W0)($),fe=(0,i.Kw)();pe.use(fe),pe.use(ee.cp),pe.use(le.c),pe.component("TabView",te.c),pe.component("TabPanel",oe.c),pe.component("Card",ne.c),pe.component("Button",ae.c),pe.component("Panel",se.c),pe.component("DataTable",ie.c),pe.component("Column",re.c),pe.component("Dialog",ce.c),pe.component("InputText",ue.c),pe.component("Textarea",de.c),pe.component("Toast",me.c),pe.mount("#app")}},l={};function a(t){var o=l[t];if(void 0!==o)return o.exports;var n=l[t]={exports:{}};return e[t].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(l,t,o,n){if(!t){var s=1/0;for(u=0;u<e.length;u++){t=e[u][0],o=e[u][1],n=e[u][2];for(var i=!0,r=0;r<t.length;r++)(!1&n||s>=n)&&Object.keys(a.O).every((function(e){return a.O[e](t[r])}))?t.splice(r--,1):(i=!1,n<s&&(s=n));if(i){e.splice(u--,1);var c=o();void 0!==c&&(l=c)}}return l}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[t,o,n]}}(),function(){a.n=function(e){var l=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(l,{a:l}),l}}(),function(){a.d=function(e,l){for(var t in l)a.o(l,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:l[t]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)}}(),function(){var e={524:0};a.O.j=function(l){return 0===e[l]};var l=function(l,t){var o,n,s=t[0],i=t[1],r=t[2],c=0;if(s.some((function(l){return 0!==e[l]}))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(r)var u=r(a)}for(l&&l(t);c<s.length;c++)n=s[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},t=self["webpackChunkproactive_admin_pack"]=self["webpackChunkproactive_admin_pack"]||[];t.forEach(l.bind(null,0)),t.push=l.bind(null,t.push.bind(t))}();var t=a.O(void 0,[999],(function(){return a(4138)}));t=a.O(t)})();
//# sourceMappingURL=app.559b9f08.js.map