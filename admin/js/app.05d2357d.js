(function(){"use strict";var e={588:function(e,l,t){var a=t(7764),s=t(4108),o=t(9096),i=t(2500),n=(t(3248),t(2312));const r=(0,n.O6)("adminStore",{state:()=>({mysqlTable:[{name:"mws_metrics",status:0,size:0},{name:"mws_metrics_units",status:0,size:0},{name:"mws_abonent",status:0,size:0},{name:"mws_abonent_status",status:0,size:0},{name:"mws_settings",status:0,size:0}],metric:[],proactiveStatus:[],dealCategory:[],smartLists:[],listAll:[],listCity:[],settings:{categoryMain:null,categoryKC:null,categoryAO:null,listCity:null,sityDay:[],defaultDay:0}}),actions:{async checkTable(){const e=await new Promise((e=>{BX.rest.callMethod("mwsproactiverest.checktable",{table:this.mysqlTable},(l=>{e(l.data())}))}));this.mysqlTable=e,console.log(this.mysqlTable)},async getDealCategory(){const e=await new Promise((e=>{BX.rest.callMethod("crm.dealcategory.list",{},(l=>{l.error()?e(l.error()):e(l.data())}))}));this.dealCategory=e},async getSmarts(){const e=await new Promise((e=>{BX.rest.callMethod("mwsproactiverest.smart.getSmarts",{},(l=>{e(l.data())}))}));this.smartLists=e},async getLists(){const e=await new Promise((e=>{BX.rest.callMethod("mwsproactiverest.getLists",{},(l=>{e(l.data())}))}));this.listAll=e},async getCities(){if(this.settings.listCity){const e=await new Promise((e=>{BX.rest.callMethod("mwsproactiverest.list.getElements",{ID:this.settings.listCity},(l=>{e(l.data())}))}));this.listCity=e}},async setMetric(e){const l=new Promise(((l,t)=>{BX.rest.callMethod("mwsproactiverest.metric.add",{metric:e},(e=>{e.error()?t(e.error()):l(e.data())}))}));return l},async getMetric(){const e=await new Promise((e=>{BX.rest.callMethod("mwsproactiverest.metric.getList",{order:[],filter:[],select:["*"]},(l=>{e(l.data())}))}));e.forEach((e=>{this.metric.push({id:e.ID,metricName:e.NAME,metricASUO:e.METRIC_ASUO,metricMeaning:e.MEANING,metricStandart:e.STANDART,metricDescription:e.DESCRIPTION,metricTests:e.TESTS})}))},async updateMetric(e){const l=await new Promise((l=>{BX.rest.callMethod("mwsproactiverest.metric.update",{ID:e.id,fields:{NAME:e.metricName,METRIC_ASUO:e.metricASUO,MEANING:e.metricMeaning,STANDART:e.metricStandart,DESCRIPTION:e.metricDescription,TESTS:e.metricTests}},(e=>{e.error()?l(e.error()):l(e.data())}))}));return l},async deleteMetric(e){const l=await new Promise((l=>{BX.rest.callMethod("mwsproactiverest.metric.delete",{ID:e.id},(e=>{l(e.data())}))}));return l},async getProactiveStatuses(){const e=await new Promise((e=>{BX.rest.callMethod("mwsproactiverest.abonentStatus.getList",{order:[],filter:[],select:["*"]},(l=>{e(l.data())}))}));this.proactiveStatus=e}},getters:{getTableCheck(e){return e.mysqlTable},getTableMetric(e){return e.metric},getStatus(e){return e.proactiveStatus},getDdealCategory(e){return e.dealCategory},getSmartLists(e){return e.smartLists},getListAll(e){return e.listAll}}});var c=t(8072);const d=e=>((0,s.ED)("data-v-0f8e4587"),e=e(),(0,s.ii)(),e),u={class:"flex flex-nowrap flex-row gap-3"},m={class:"m-0 word-wrap"},p={class:"flex gap-3 mt-1"},f={class:"flex flex-column"},v={class:"flex flex-nowrap flex-column gap-2"},g=d((()=>(0,s.QD)("p",{class:"m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1))),b=d((()=>(0,s.QD)("p",{class:"m-0"}," Функция для передачи метрик из АСУО в битрикс 24. Принемает в себя JSON ",-1))),y=d((()=>(0,s.QD)("p",{class:"m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1))),Q=d((()=>(0,s.QD)("div",{style:{position:"relative"}},[(0,s.QD)("div",{style:{position:"absolute",top:"-10000px",left:"-10000px"}},[(0,s.QD)("textarea",{type:"text",id:"copyBuf",style:{width:"1px",height:"1px"}})])],-1)));var h={__name:"Connect",setup(e){const l=(0,c.W)(),t=r(),a=((0,n.Ou)(t),(0,i.IL)(""));(0,s.u2)((async()=>{await t.checkTable();const e=await new Promise((e=>{BX.rest.callMethod("mwsproactiverest.getToken",{},(l=>{e(l.data())}))}));a&&(a.value=e)}));const d=async()=>{const e=h(128);a.value=e;const t=await new Promise((l=>{BX.rest.callMethod("mwsproactiverest.setToken",{genToken:e},(e=>{l(e.data())}))}));t&&l.add({severity:"success",summary:"Установлен новый токен!",detail:"",life:3e3})},h=e=>{let l="abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789",t="";for(let a=0;a<e;a++){let e=Math.floor(Math.random()*l.length);t+=l.substring(e,e+1)}return t},w=()=>{var e=document.getElementById("copyBuf");e.value=a.value,e.select(),document.execCommand("copy")};return(e,l)=>{const n=(0,s.E1)("Button"),r=(0,s.E1)("Card"),c=(0,s.E1)("Panel"),h=(0,s.E1)("Toast");return(0,s.Wz)(),(0,s.An)(s.ae,null,[(0,s.QD)("div",u,[(0,s.K2)(r,{class:"w-30rem"},{header:(0,s.Ql)((()=>[])),title:(0,s.Ql)((()=>[(0,s.mY)("Токен")])),subtitle:(0,s.Ql)((()=>[(0,s.mY)("Авторизация для подключения")])),content:(0,s.Ql)((()=>[(0,s.QD)("p",m,(0,o.WA)(a.value),1)])),footer:(0,s.Ql)((()=>[(0,s.QD)("div",p,[(0,s.K2)(n,{label:"Копировать",severity:"secondary",outlined:"",class:"w-full",onClick:l[0]||(l[0]=e=>w())}),(0,s.K2)(n,{label:a.value.length>0?"Перевыпустить":"Сгенерировать",class:"w-full",onClick:l[1]||(l[1]=e=>d())},null,8,["label"])])])),_:1}),(0,s.K2)(r,{class:"w-30rem"},{header:(0,s.Ql)((()=>[])),title:(0,s.Ql)((()=>[(0,s.mY)("Таблицы")])),subtitle:(0,s.Ql)((()=>[])),content:(0,s.Ql)((()=>[(0,s.QD)("div",f,[((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)((0,i.KV)(t).getTableCheck,(e=>((0,s.Wz)(),(0,s.An)("div",{class:(0,o.WN)(["flex align-items-center justify-content-between h-3rem font-bold border-round m-2 p-2",1==e.status?"bg-green-300":"bg-red-300"])},[(0,s.QD)("span",null,(0,o.WA)(e.name),1),(0,s.mY)(),(0,s.QD)("span",null,(0,o.WA)(e.size+" Мб"),1)],2)))),256))])])),footer:(0,s.Ql)((()=>[])),_:1}),(0,s.K2)(r,{class:"w-full"},{header:(0,s.Ql)((()=>[])),title:(0,s.Ql)((()=>[(0,s.mY)("Методы ")])),subtitle:(0,s.Ql)((()=>[(0,s.mY)("Точка входа: https://btrx.ugmk-telecom.ru/integration/index.php")])),content:(0,s.Ql)((()=>[(0,s.QD)("div",v,[(0,s.K2)(c,{header:"setAlarm",collapsed:"false",toggleable:"",pt:{header:e=>({id:"myPanelHeader",style:{"user-select":"none"},class:["border-primary",{"bg-primary":e.state.d_collapsed,"bg-primary-reverse":!e.state.d_collapsed}]}),content:{class:"border-primary text-lg text-primary-700"},title:"text-xl",toggler:()=>"bg-primary hover:bg-primary-reverse"}},{default:(0,s.Ql)((()=>[g])),_:1},8,["pt"]),(0,s.K2)(c,{header:"setMetric",collapsed:"false",toggleable:"",pt:{header:e=>({id:"myPanelHeader",style:{"user-select":"none"},class:["border-primary",{"bg-primary":e.state.d_collapsed,"bg-primary-reverse":!e.state.d_collapsed}]}),content:{class:"border-primary text-lg text-primary-700"},title:"text-xl",toggler:()=>"bg-primary hover:bg-primary-reverse"}},{default:(0,s.Ql)((()=>[b])),_:1},8,["pt"]),(0,s.K2)(c,{header:"setMore",collapsed:"false",toggleable:"",pt:{header:e=>({id:"myPanelHeader",style:{"user-select":"none"},class:["border-primary",{"bg-primary":e.state.d_collapsed,"bg-primary-reverse":!e.state.d_collapsed}]}),content:{class:"border-primary text-lg text-primary-700"},title:"text-xl",toggler:()=>"bg-primary hover:bg-primary-reverse"}},{default:(0,s.Ql)((()=>[y])),_:1},8,["pt"])])])),footer:(0,s.Ql)((()=>[])),_:1})]),Q,(0,s.K2)(h)],64)}}},w=t(4100);const D=(0,w.c)(h,[["__scopeId","data-v-0f8e4587"]]);var K=D;const x=e=>((0,s.ED)("data-v-a34abbbc"),e=e(),(0,s.ii)(),e),V={class:"flex flex-wrap flex-column gap-3"},_={class:"mb-3"},A={class:"w-20rem word-wrap"},E={class:"w-20rem word-wrap"},C=x((()=>(0,s.QD)("span",{class:"align-content-center"}," В данный момент нет не одной метрики. ",-1))),M={key:0,class:"mb-3"},T={class:"flex flex-wrap flex-row gap-3 justify-content-start"},I={class:"flex flex-column gap-3"},S={class:"mt-3"},k=x((()=>(0,s.QD)("div",{class:"p-card-title"},"Связанные поля",-1))),U={class:"field"},N=x((()=>(0,s.QD)("label",{for:"lastname2"},"Инженер",-1))),O={class:"field"},Y=x((()=>(0,s.QD)("label",{for:"lastname4"},"Техник",-1))),L={class:"mt-3"},P=x((()=>(0,s.QD)("div",{class:"p-card-title"},"Связанные поля",-1))),W={class:"field"},z=x((()=>(0,s.QD)("label",{for:"firstname1"},"Лицевой счет",-1))),q={class:"field"},B=x((()=>(0,s.QD)("label",{for:"lastname2"},"Адрес",-1))),R={class:"field"},j=x((()=>(0,s.QD)("label",{for:"lastname3"},"Участок связи или город",-1))),X={class:"field"},G=x((()=>(0,s.QD)("label",{for:"lastname4"},"Ответственный",-1))),H={class:"mt-3"},F={class:"field"},J=x((()=>(0,s.QD)("label",{for:"firstname1"},"Повторное обрашение значение в днях",-1))),Z={class:"flex justify-content-end"},$=x((()=>(0,s.QD)("span",{class:"p-text-secondary block mb-5"},"Update your information.",-1))),ee={class:"flex flex-column gap-3 mb-3"},le=x((()=>(0,s.QD)("label",{for:"metricName",class:"font-semibold"},"Название метрики",-1))),te={class:"flex flex-column gap-3 mb-3"},ae=x((()=>(0,s.QD)("label",{for:"metricName",class:"font-semibold"},"ID метрики АСУО",-1))),se={class:"flex flex-column gap-3 mb-5"},oe=x((()=>(0,s.QD)("label",{for:"metricMeaning",class:"font-semibold"},"Возможные значения",-1))),ie={class:"flex flex-column gap-3 mb-5"},ne=x((()=>(0,s.QD)("label",{for:"metriStandart",class:"font-semibold"},"Стандарт",-1))),re={class:"flex flex-column gap-3 mb-5"},ce=x((()=>(0,s.QD)("label",{for:"metricDescription",class:"font-semibold"},"Описание метрики",-1))),de={class:"flex flex-column gap-3 mb-5"},ue=x((()=>(0,s.QD)("label",{for:"metricTests",class:"font-semibold"},"Регламент тестов",-1))),me={class:"flex justify-content-end gap-2"},pe={class:"flex flex-column"},fe={class:"flex align-items-center justify-content-between h-3rem font-bold border-round m-2 p-2"},ve={class:"flex justify-content-end gap-2"},ge={class:"flex flex-column gap-3 mb-3"},be=x((()=>(0,s.QD)("label",{for:"metricName",class:"font-semibold"},"Город",-1))),ye={class:"flex flex-column gap-3 mb-3"},Qe=x((()=>(0,s.QD)("label",{for:"metricName",class:"font-semibold"},"Повторяемость дни",-1))),he={class:"flex justify-content-end gap-2"};var we={__name:"ProactiveAdmin",setup(e){const l=(0,c.W)(),t=r(),a=(0,n.Ou)(t),d=(0,i.IL)(!1),u=(0,i.IL)(!1),m=(0,i.IL)(!1),p=(0,i.IL)(""),f=(0,i.IL)(""),v=(0,i.IL)(""),g=(0,i.IL)(""),b=(0,i.IL)(""),y=(0,i.IL)(""),Q=(0,i.IL)([]),h=(0,i.IL)([]),w=(0,i.IL)(),D=(0,i.IL)(),K=(0,i.IL)(),x=async()=>{a.settings.value.sityDay.push({ID:D.value.ID,NAME:D.value.NAME,DAY:K.value})},we=async()=>{const e={NAME:p.value,METRIC_ASUO:f.value,MEANING:v.value,STANDART:g.value,DESCRIPTION:b.value,TESTS:y.value},a=await t.setMetric(e);a>0?l.add({severity:"success",summary:"Метрика успешно добавлена",detail:"",life:3e3}):l.add({severity:"error",summary:"Неудалось добавить метрику",detail:"",life:3e3})},De=async e=>{let{newData:s,index:o}=e;a.metric.value[o]=s;const i=await t.updateMetric(s);i?l.add({severity:"success",summary:"Метрика успешно добавлена",detail:"",life:3e3}):l.add({severity:"error",summary:"Неудалось добавить метрику",detail:"",life:3e3})},Ke=()=>{h.value.forEach((async e=>{const a=await t.deleteMetric(e);a?l.add({severity:"success",summary:"Метрика успешно удалена",detail:"",life:3e3}):l.add({severity:"error",summary:"Неудалось удалить метрику",detail:"",life:3e3})}))},xe=async e=>{a.listCity.value=e.value.ID,await t.getCities()};return(0,s.u2)((async()=>{await t.getDealCategory(),await t.getSmarts(),await t.getLists(),await t.getCities(),await t.getMetric()})),(e,l)=>{const n=(0,s.E1)("Button"),r=(0,s.E1)("Column"),c=(0,s.E1)("InputText"),Ve=(0,s.E1)("Textarea"),_e=(0,s.E1)("DataTable"),Ae=(0,s.E1)("Panel"),Ee=(0,s.E1)("Dropdown"),Ce=(0,s.E1)("Inplace"),Me=(0,s.E1)("Card"),Te=(0,s.E1)("Dialog"),Ie=(0,s.iS)("tooltip");return(0,s.Wz)(),(0,s.An)("div",V,[(0,s.K2)(Ae,{toggleable:"",collapsed:"false",class:"w-full"},{header:(0,s.Ql)((()=>[(0,s.mY)(" Метрики "),(0,s.QD)("span",null," Всего "+(0,o.WA)((0,i.KV)(a).metric.value.length)+" метрик",1)])),default:(0,s.Ql)((()=>[(0,s.QD)("div",_,[(0,s.K2)(n,{label:"Добавить",onClick:l[0]||(l[0]=e=>d.value=!d.value)})]),(0,s.K2)(_e,{value:(0,i.KV)(t).getTableMetric,paginator:"",rows:5,rowsPerPageOptions:[5,10,20,50],editingRows:Q.value,"onUpdate:editingRows":l[1]||(l[1]=e=>Q.value=e),selection:h.value,"onUpdate:selection":l[2]||(l[2]=e=>h.value=e),editMode:"row",dataKey:"id",onRowEditSave:De},{empty:(0,s.Ql)((()=>[C])),default:(0,s.Ql)((()=>[(0,s.K2)(r,{selectionMode:"multiple",headerStyle:"width: 3rem"}),(0,s.K2)(r,{field:"id"},{header:(0,s.Ql)((()=>[(0,s.mY)(" Ид ")])),body:(0,s.Ql)((e=>[(0,s.mY)((0,o.WA)(e.data.id),1)])),_:1}),(0,s.K2)(r,{field:"metricName"},{header:(0,s.Ql)((()=>[(0,s.mY)(" Метрика ")])),body:(0,s.Ql)((e=>[(0,s.mY)((0,o.WA)(e.data.metricName),1)])),editor:(0,s.Ql)((({data:e,field:l})=>[(0,s.K2)(c,{modelValue:e[l],"onUpdate:modelValue":t=>e[l]=t},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,s.K2)(r,{field:"metricASUO"},{header:(0,s.Ql)((()=>[(0,s.mY)(" Ид метрики АСУО ")])),body:(0,s.Ql)((e=>[(0,s.mY)((0,o.WA)(e.data.metricASUO),1)])),editor:(0,s.Ql)((({data:e,field:l})=>[(0,s.K2)(c,{modelValue:e[l],"onUpdate:modelValue":t=>e[l]=t},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,s.K2)(r,{field:"metricMeaning"},{header:(0,s.Ql)((()=>[(0,s.mY)(" Возможное значение ")])),body:(0,s.Ql)((e=>[(0,s.mY)((0,o.WA)(e.data.metricMeaning),1)])),editor:(0,s.Ql)((({data:e,field:l})=>[(0,s.K2)(c,{modelValue:e[l],"onUpdate:modelValue":t=>e[l]=t},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,s.K2)(r,{field:"metricStandart"},{header:(0,s.Ql)((()=>[(0,s.mY)(" Норматив ")])),body:(0,s.Ql)((e=>[(0,s.mY)((0,o.WA)(e.data.metricStandart),1)])),editor:(0,s.Ql)((({data:e,field:l})=>[(0,s.K2)(c,{modelValue:e[l],"onUpdate:modelValue":t=>e[l]=t},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,s.K2)(r,{field:"metricDescription"},{header:(0,s.Ql)((()=>[(0,s.mY)(" Описание ")])),body:(0,s.Ql)((e=>[(0,s.wt)(((0,s.Wz)(),(0,s.An)("div",A,[(0,s.mY)((0,o.WA)(e.data.metricDescription),1)])),[[Ie,{value:e.data.metricDescription,showDelay:1e3,hideDelay:300}]])])),editor:(0,s.Ql)((({data:e,field:l})=>[(0,s.K2)(Ve,{modelValue:e[l],"onUpdate:modelValue":t=>e[l]=t,autoResize:"",rows:"5",cols:"30"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,s.K2)(r,{field:"metricTests"},{header:(0,s.Ql)((()=>[(0,s.mY)(" Регламент тестов ")])),body:(0,s.Ql)((e=>[(0,s.wt)(((0,s.Wz)(),(0,s.An)("div",E,[(0,s.mY)((0,o.WA)(e.data.metricTests),1)])),[[Ie,{value:e.data.metricTests,showDelay:1e3,hideDelay:300}]])])),editor:(0,s.Ql)((({data:e,field:l})=>[(0,s.K2)(Ve,{modelValue:e[l],"onUpdate:modelValue":t=>e[l]=t,autoResize:"",rows:"5",cols:"30"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,s.K2)(r,{rowEditor:!0,style:{width:"10%","min-width":"8rem"},bodyStyle:"text-align:center"})])),_:1},8,["value","editingRows","selection"]),h.value.length>0?((0,s.Wz)(),(0,s.An)("div",M,[(0,s.K2)(n,{label:"Удалить",onClick:l[3]||(l[3]=e=>u.value=!u.value)})])):(0,s.g1)("",!0)])),_:1}),(0,s.K2)(Ae,{header:"Привязки к сушностям",toggleable:"",collapsed:"false",class:"w-full"},{default:(0,s.Ql)((()=>[(0,s.QD)("div",T,[(0,s.K2)(Me,null,{header:(0,s.Ql)((()=>[])),title:(0,s.Ql)((()=>[(0,s.mY)("Сделки воронка")])),subtitle:(0,s.Ql)((()=>[])),content:(0,s.Ql)((()=>[(0,s.QD)("div",I,[(0,s.K2)(Ee,{modelValue:(0,i.KV)(a).settings.value.categoryMain,"onUpdate:modelValue":l[4]||(l[4]=e=>(0,i.KV)(a).settings.value.categoryMain=e),options:(0,i.KV)(t).getDdealCategory,optionLabel:"NAME",placeholder:"Выбирете воронку заявок ",checkmark:"",highlightOnSelect:!1,class:"w-full"},null,8,["modelValue","options"]),(0,s.K2)(Ee,{modelValue:(0,i.KV)(a).settings.value.categoryKC,"onUpdate:modelValue":l[5]||(l[5]=e=>(0,i.KV)(a).settings.value.categoryKC=e),options:(0,i.KV)(t).getDdealCategory,optionLabel:"NAME",placeholder:"Выбирете воронку КЦ ",checkmark:"",highlightOnSelect:!1,class:"w-full"},null,8,["modelValue","options"]),(0,s.K2)(Ee,{modelValue:(0,i.KV)(a).settings.value.categoryAO,"onUpdate:modelValue":l[6]||(l[6]=e=>(0,i.KV)(a).settings.value.categoryAO=e),options:(0,i.KV)(t).getDdealCategory,optionLabel:"NAME",placeholder:"Выбирете воронку AО ",checkmark:"",highlightOnSelect:!1,class:"w-full"},null,8,["modelValue","options"])]),(0,s.QD)("div",S,[k,(0,s.QD)("div",U,[N,(0,s.K2)(Ee,{id:"lastname2",class:"w-full"})]),(0,s.QD)("div",O,[Y,(0,s.K2)(Ee,{id:"lastname4",class:"w-full"})])])])),footer:(0,s.Ql)((()=>[(0,s.K2)(Ce,{onClose:l[8]||(l[8]=l=>e.testEvent(e.test)),closable:!0,closeIcon:"pi pi-check"},{display:(0,s.Ql)((()=>[(0,s.mY)((0,o.WA)("Добавить"))])),content:(0,s.Ql)((()=>[(0,s.K2)(c,{modelValue:e.text,"onUpdate:modelValue":l[7]||(l[7]=l=>e.text=l),autofocus:""},null,8,["modelValue"])])),_:1})])),_:1}),(0,s.K2)(Me,null,{header:(0,s.Ql)((()=>[])),title:(0,s.Ql)((()=>[(0,s.mY)("Лицевые счета (смарт процесс)")])),subtitle:(0,s.Ql)((()=>[])),content:(0,s.Ql)((()=>[(0,s.K2)(Ee,{modelValue:w.value,"onUpdate:modelValue":l[9]||(l[9]=e=>w.value=e),options:(0,i.KV)(t).getSmartLists,optionLabel:"NAME",placeholder:"Выбирете смарт процесс",checkmark:"",highlightOnSelect:!1,class:"w-full"},null,8,["modelValue","options"]),(0,s.QD)("div",L,[P,(0,s.QD)("div",W,[z,(0,s.K2)(Ee,{id:"firstname1 ",class:"w-full"})]),(0,s.QD)("div",q,[B,(0,s.K2)(Ee,{id:"lastname2",class:"w-full"})]),(0,s.QD)("div",R,[j,(0,s.K2)(Ee,{id:"lastname3",class:"w-full"})]),(0,s.QD)("div",X,[G,(0,s.K2)(Ee,{id:"lastname4",class:"w-full"})])])])),footer:(0,s.Ql)((()=>[(0,s.K2)(Ce,{onClose:l[11]||(l[11]=l=>e.testEvent(e.test)),closable:!0,closeIcon:"pi pi-check"},{display:(0,s.Ql)((()=>[(0,s.mY)((0,o.WA)("Добавить"))])),content:(0,s.Ql)((()=>[(0,s.K2)(c,{modelValue:e.text,"onUpdate:modelValue":l[10]||(l[10]=l=>e.text=l),autofocus:""},null,8,["modelValue"])])),_:1})])),_:1}),(0,s.K2)(Me,{class:"w-30rem"},{title:(0,s.Ql)((()=>[(0,s.mY)("Город")])),content:(0,s.Ql)((()=>[(0,s.K2)(Ee,{modelValue:(0,i.KV)(a).settings.value.listCity,"onUpdate:modelValue":l[12]||(l[12]=e=>(0,i.KV)(a).settings.value.listCity=e),options:(0,i.KV)(t).getListAll,onChange:xe,optionLabel:"NAME",placeholder:"Выбирете список",checkmark:"",highlightOnSelect:!1,class:"w-full"},null,8,["modelValue","options"]),(0,s.QD)("div",H,[(0,s.QD)("div",F,[J,(0,s.K2)(c,{modelValue:(0,i.KV)(a).settings.value.defaultDay,"onUpdate:modelValue":l[13]||(l[13]=e=>(0,i.KV)(a).settings.value.defaultDay=e),id:"firstname1 ",class:"w-full"},null,8,["modelValue"])]),(0,s.K2)(_e,{value:(0,i.KV)(a).settings.value.sityDay,size:"small",key:"ID",class:"w-full"},{footer:(0,s.Ql)((()=>[(0,s.QD)("div",Z,[(0,s.K2)(n,{label:"Добавить",onClick:l[14]||(l[14]=e=>m.value=!m.value)})])])),default:(0,s.Ql)((()=>[(0,s.K2)(r,{field:"NAME"},{header:(0,s.Ql)((()=>[(0,s.mY)("Город")])),body:(0,s.Ql)((e=>[(0,s.mY)((0,o.WA)(e.data.NAME),1)])),_:1}),(0,s.K2)(r,{field:"DAY"},{header:(0,s.Ql)((()=>[(0,s.mY)("Дни")])),_:1})])),_:1},8,["value"])])])),_:1})])])),_:1}),(0,s.K2)(Te,{visible:d.value,"onUpdate:visible":l[23]||(l[23]=e=>d.value=e),header:"Добавить метрику",style:{width:"35rem"},position:"topright",modal:!0,draggable:!1},{default:(0,s.Ql)((()=>[$,(0,s.QD)("div",ee,[le,(0,s.K2)(c,{id:"metricName",modelValue:p.value,"onUpdate:modelValue":l[15]||(l[15]=e=>p.value=e),class:"flex-auto",autocomplete:"off"},null,8,["modelValue"])]),(0,s.QD)("div",te,[ae,(0,s.K2)(c,{id:"metricName",modelValue:f.value,"onUpdate:modelValue":l[16]||(l[16]=e=>f.value=e),class:"flex-auto",autocomplete:"off"},null,8,["modelValue"])]),(0,s.QD)("div",se,[oe,(0,s.K2)(c,{id:"metricMeaning",modelValue:v.value,"onUpdate:modelValue":l[17]||(l[17]=e=>v.value=e),class:"flex-auto",autocomplete:"off"},null,8,["modelValue"])]),(0,s.QD)("div",ie,[ne,(0,s.K2)(c,{id:"metricStandart",modelValue:g.value,"onUpdate:modelValue":l[18]||(l[18]=e=>g.value=e),class:"flex-auto",autocomplete:"off"},null,8,["modelValue"])]),(0,s.QD)("div",re,[ce,(0,s.K2)(Ve,{id:"metricDescription",modelValue:b.value,"onUpdate:modelValue":l[19]||(l[19]=e=>b.value=e),autoResize:"",rows:"5",cols:"30"},null,8,["modelValue"])]),(0,s.QD)("div",de,[ue,(0,s.K2)(Ve,{id:"metricTests",modelValue:y.value,"onUpdate:modelValue":l[20]||(l[20]=e=>y.value=e),autoResize:"",rows:"5",cols:"30"},null,8,["modelValue"])]),(0,s.QD)("div",me,[(0,s.K2)(n,{type:"button",label:"Отмена",severity:"secondary",onClick:l[21]||(l[21]=e=>d.value=!d.value)}),(0,s.K2)(n,{type:"button",label:"Сохранить",onClick:l[22]||(l[22]=e=>(d.value=!1,we()))})])])),_:1},8,["visible"]),(0,s.K2)(Te,{visible:u.value,"onUpdate:visible":l[26]||(l[26]=e=>u.value=e),header:"Удаление метрик",style:{width:"35rem"},position:"topright",modal:!0,draggable:!1},{default:(0,s.Ql)((()=>[(0,s.K2)(Me,{class:"w-20rem"},{header:(0,s.Ql)((()=>[])),title:(0,s.Ql)((()=>[(0,s.mY)("Удалить выбраные Метрики?")])),subtitle:(0,s.Ql)((()=>[(0,s.mY)("Удалятся только метрики данные из АСУО останутся в таблице")])),content:(0,s.Ql)((()=>[(0,s.QD)("div",pe,[((0,s.Wz)(!0),(0,s.An)(s.ae,null,(0,s.mi)(h.value,(e=>((0,s.Wz)(),(0,s.An)("div",fe,[(0,s.QD)("span",null,(0,o.WA)(e.id),1),(0,s.mY)(),(0,s.QD)("span",null,(0,o.WA)(e.metricName),1)])))),256))])])),footer:(0,s.Ql)((()=>[(0,s.QD)("div",ve,[(0,s.K2)(n,{type:"button",label:"Отмена",severity:"secondary",onClick:l[24]||(l[24]=e=>(u.value=!u.value,h.value=[]))}),(0,s.K2)(n,{type:"button",label:"Удалить",onClick:l[25]||(l[25]=e=>(u.value=!1,Ke()))})])])),_:1})])),_:1},8,["visible"]),(0,s.K2)(Te,{visible:m.value,"onUpdate:visible":l[31]||(l[31]=e=>m.value=e),header:"Добавить повторяемость",style:{width:"35rem"},position:"topright",modal:!0,draggable:!1},{default:(0,s.Ql)((()=>[(0,s.QD)("div",ge,[be,(0,s.K2)(Ee,{id:"metricName",modelValue:D.value,"onUpdate:modelValue":l[27]||(l[27]=e=>D.value=e),options:(0,i.KV)(a).listCity.value,class:"flex-auto",autocomplete:"off"},null,8,["modelValue","options"])]),(0,s.QD)("div",ye,[Qe,(0,s.K2)(c,{id:"metricName",modelValue:K.value,"onUpdate:modelValue":l[28]||(l[28]=e=>K.value=e),class:"flex-auto",autocomplete:"off"},null,8,["modelValue"])]),(0,s.QD)("div",he,[(0,s.K2)(n,{type:"button",label:"Отмена",severity:"secondary",onClick:l[29]||(l[29]=e=>m.value=!m.value)}),(0,s.K2)(n,{type:"button",label:"Сохранить",onClick:l[30]||(l[30]=e=>(m.value=!1,x()))})])])),_:1},8,["visible"])])}}};const De=(0,w.c)(we,[["__scopeId","data-v-a34abbbc"]]);var Ke=De;const xe={class:"flex flex-row justify-content-start"},Ve=(0,s.QD)("span",{class:"font-medium text-900 block mb-2"},"Добавить статус для Проактивного сервиса",-1);var _e={__name:"Entity",setup(e){const l=r(),t=((0,n.Ou)(l),(0,i.IL)()),a=(0,i.IL)(),o=e=>{t.value.toggle(e)};return(0,s.u2)((async()=>{l.getProactiveStatuses()})),(e,n)=>{const r=(0,s.E1)("Column"),c=(0,s.E1)("DataTable"),d=(0,s.E1)("Button"),u=(0,s.E1)("Card"),m=(0,s.E1)("InputText"),p=(0,s.E1)("InputGroupAddon"),f=(0,s.E1)("InputGroup"),v=(0,s.E1)("OverlayPanel"),g=(0,s.E1)("Panel");return(0,s.Wz)(),(0,s.Az)(g,{header:"Статусы",toggleable:"",collapsed:"false",class:"w-full"},{default:(0,s.Ql)((()=>[(0,s.QD)("div",xe,[(0,s.K2)(u,{class:"p-3"},{title:(0,s.Ql)((()=>[(0,s.mY)("Проактивный сервис")])),content:(0,s.Ql)((()=>[(0,s.K2)(c,{value:(0,i.KV)(l).getStatus,size:"small",key:"ID",style:{width:"20rem"}},{default:(0,s.Ql)((()=>[(0,s.K2)(r,{field:"ID"},{header:(0,s.Ql)((()=>[(0,s.mY)("Ид")])),_:1}),(0,s.K2)(r,{field:"NAME"},{header:(0,s.Ql)((()=>[(0,s.mY)("Статус")])),_:1})])),_:1},8,["value"])])),footer:(0,s.Ql)((()=>[(0,s.K2)(d,{label:"Добавить",onClick:o})])),_:1}),(0,s.K2)(v,{ref_key:"proactive",ref:t},{default:(0,s.Ql)((()=>[Ve,(0,s.K2)(f,null,{default:(0,s.Ql)((()=>[(0,s.K2)(m,{value:a.value,"onUpdate:value":n[0]||(n[0]=e=>a.value=e),readonly:"",class:"w-25rem"},null,8,["value"]),(0,s.K2)(p,null,{default:(0,s.Ql)((()=>[(0,s.K2)(d,{label:"Создать"})])),_:1})])),_:1})])),_:1},512)])])),_:1})}}};const Ae=_e;var Ee=Ae;const Ce=(0,s.QD)("div",{class:"flex align-items-center gap-2"},[(0,s.QD)("span",{class:"font-bold white-space-nowrap"},"Подключение")],-1),Me=(0,s.QD)("div",{class:"flex align-items-center gap-2"},[(0,s.QD)("span",{class:"font-bold white-space-nowrap"},"Проактивный Сервис")],-1),Te=(0,s.QD)("div",{class:"flex align-items-center gap-2"},[(0,s.QD)("span",{class:"font-bold white-space-nowrap"},"Аварии / ППР")],-1),Ie=(0,s.QD)("div",{class:"flex align-items-center gap-2"},[(0,s.QD)("span",{class:"font-bold white-space-nowrap"},"Общие справочники")],-1),Se=(0,s.QD)("div",{class:"flex align-items-center gap-2"},[(0,s.QD)("span",{class:"font-bold white-space-nowrap"},"Доступ")],-1),ke=(0,s.QD)("p",{class:"m-0"}," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ",-1);var Ue={__name:"App",setup(e){return(e,l)=>{const t=(0,s.E1)("TabPanel"),a=(0,s.E1)("TabView"),o=(0,s.E1)("Toast");return(0,s.Wz)(),(0,s.An)(s.ae,null,[(0,s.K2)(a,null,{default:(0,s.Ql)((()=>[(0,s.K2)(t,null,{header:(0,s.Ql)((()=>[Ce])),default:(0,s.Ql)((()=>[(0,s.K2)(K)])),_:1}),(0,s.K2)(t,null,{header:(0,s.Ql)((()=>[Me])),default:(0,s.Ql)((()=>[(0,s.K2)(Ke)])),_:1}),(0,s.K2)(t,null,{header:(0,s.Ql)((()=>[Te])),_:1}),(0,s.K2)(t,null,{header:(0,s.Ql)((()=>[Ie])),default:(0,s.Ql)((()=>[(0,s.K2)(Ee)])),_:1}),(0,s.K2)(t,null,{header:(0,s.Ql)((()=>[Se])),default:(0,s.Ql)((()=>[ke])),_:1})])),_:1}),(0,s.K2)(o)],64)}}};const Ne=Ue;var Oe=Ne,Ye=t(9476),Le=t(2752),Pe=t(8830),We=t(8724),ze=t(1588),qe=t(3716),Be=t(6588),Re=t(1356),je=t(5160),Xe=t(100),Ge=t(6960),He=t(5556),Fe=t(7540),Je=t(3512),Ze=t(6892);const $e=(0,a.W0)(Oe),el=(0,n.Kw)();$e.use(el),$e.use(Ye.cp),$e.use(Le.c),$e.component("TabView",We.c),$e.component("TabPanel",ze.c),$e.component("Card",qe.c),$e.component("Button",Pe.c),$e.component("Panel",Be.c),$e.component("DataTable",Re.c),$e.component("Column",je.c),$e.component("Dialog",Xe.c),$e.component("InputText",Ge.c),$e.component("Textarea",He.c),$e.component("Toast",Fe.c),$e.component("OverlayPanel",Je.c),$e.component("Dropdown",Ze.c),$e.mount("#app")}},l={};function t(a){var s=l[a];if(void 0!==s)return s.exports;var o=l[a]={exports:{}};return e[a].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(l,a,s,o){if(!a){var i=1/0;for(d=0;d<e.length;d++){a=e[d][0],s=e[d][1],o=e[d][2];for(var n=!0,r=0;r<a.length;r++)(!1&o||i>=o)&&Object.keys(t.O).every((function(e){return t.O[e](a[r])}))?a.splice(r--,1):(n=!1,o<i&&(i=o));if(n){e.splice(d--,1);var c=s();void 0!==c&&(l=c)}}return l}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[a,s,o]}}(),function(){t.n=function(e){var l=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(l,{a:l}),l}}(),function(){t.d=function(e,l){for(var a in l)t.o(l,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:l[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)}}(),function(){var e={524:0};t.O.j=function(l){return 0===e[l]};var l=function(l,a){var s,o,i=a[0],n=a[1],r=a[2],c=0;if(i.some((function(l){return 0!==e[l]}))){for(s in n)t.o(n,s)&&(t.m[s]=n[s]);if(r)var d=r(t)}for(l&&l(a);c<i.length;c++)o=i[c],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(d)},a=self["webpackChunkproactive_admin_pack"]=self["webpackChunkproactive_admin_pack"]||[];a.forEach(l.bind(null,0)),a.push=l.bind(null,a.push.bind(a))}();var a=t.O(void 0,[999],(function(){return t(588)}));a=t.O(a)})();
//# sourceMappingURL=app.05d2357d.js.map