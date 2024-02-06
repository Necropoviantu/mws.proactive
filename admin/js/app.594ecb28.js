(function(){"use strict";var e={7066:function(e,l,t){var a=t(7764),o=t(4108),s=t(9096),i=t(2500),n=(t(3248),t(2312));const r=(0,n.O6)("adminStore",{state:()=>({mysqlTable:[{name:"mws_metrics",status:0,size:0},{name:"mws_metrics_units",status:0,size:0},{name:"mws_abonent",status:0,size:0},{name:"mws_abonent_status",status:0,size:0}],metric:[],proactiveStatus:[]}),actions:{async checkTable(){const e=await new Promise((e=>{BX.rest.callMethod("mwsproactiverest.checktable",{table:this.mysqlTable},(l=>{e(l.data())}))}));this.mysqlTable=e,console.log(this.mysqlTable)},async getDealCategory(){const e=await new Promise((e=>{BX.rest.callMethod("crm.status.entity.types",{},(l=>{l.error()?e(l.error()):e(l.data())}))}));return e},async setMetric(e){const l=new Promise(((l,t)=>{BX.rest.callMethod("mwsproactiverest.metric.add",{metric:e},(e=>{e.error()?t(e.error()):l(e.data())}))}));return l},async getMetric(){const e=await new Promise((e=>{BX.rest.callMethod("mwsproactiverest.metric.getList",{order:[],filter:[],select:["*"]},(l=>{e(l.data())}))}));e.forEach((e=>{this.metric.push({id:e.ID,metricName:e.NAME,metricASUO:e.METRIC_ASUO,metricMeaning:e.MEANING,metricStandart:e.STANDART,metricDescription:e.DESCRIPTION,metricTests:e.TESTS})}))},async updateMetric(e){const l=await new Promise((l=>{BX.rest.callMethod("mwsproactiverest.metric.update",{ID:e.id,fields:{NAME:e.metricName,METRIC_ASUO:e.metricASUO,MEANING:e.metricMeaning,STANDART:e.metricStandart,DESCRIPTION:e.metricDescription,TESTS:e.metricTests}},(e=>{e.error()?l(e.error()):l(e.data())}))}));return l},async deleteMetric(e){const l=await new Promise((l=>{BX.rest.callMethod("mwsproactiverest.metric.delete",{ID:e.id},(e=>{l(e.data())}))}));return l},async getProactiveStatuses(){const e=await new Promise((e=>{BX.rest.callMethod("mwsproactiverest.abonentStatus.getList",{order:[],filter:[],select:["*"]},(l=>{e(l.data())}))}));this.proactiveStatus=e}},getters:{getTableCheck(e){return e.mysqlTable},getTableMetric(e){return e.metric},getStatus(e){return e.proactiveStatus}}});var c=t(8072);const d=e=>((0,o.ED)("data-v-0f8e4587"),e=e(),(0,o.ii)(),e),u={class:"flex flex-nowrap flex-row gap-3"},m={class:"m-0 word-wrap"},p={class:"flex gap-3 mt-1"},f={class:"flex flex-column"},v={class:"flex flex-nowrap flex-column gap-2"},b=d((()=>(0,o.QD)("p",{class:"m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1))),Q=d((()=>(0,o.QD)("p",{class:"m-0"}," Функция для передачи метрик из АСУО в битрикс 24. Принемает в себя JSON ",-1))),g=d((()=>(0,o.QD)("p",{class:"m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1))),h=d((()=>(0,o.QD)("div",{style:{position:"relative"}},[(0,o.QD)("div",{style:{position:"absolute",top:"-10000px",left:"-10000px"}},[(0,o.QD)("textarea",{type:"text",id:"copyBuf",style:{width:"1px",height:"1px"}})])],-1)));var y={__name:"Connect",setup(e){const l=(0,c.W)(),t=r(),a=((0,n.Ou)(t),(0,i.IL)(""));(0,o.u2)((async()=>{await t.checkTable();const e=await new Promise((e=>{BX.rest.callMethod("mwsproactiverest.getToken",{},(l=>{e(l.data())}))}));a&&(a.value=e)}));const d=async()=>{const e=y(128);a.value=e;const t=await new Promise((l=>{BX.rest.callMethod("mwsproactiverest.setToken",{genToken:e},(e=>{l(e.data())}))}));t&&l.add({severity:"success",summary:"Установлен новый токен!",detail:"",life:3e3})},y=e=>{let l="abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789",t="";for(let a=0;a<e;a++){let e=Math.floor(Math.random()*l.length);t+=l.substring(e,e+1)}return t},w=()=>{var e=document.getElementById("copyBuf");e.value=a.value,e.select(),document.execCommand("copy")};return(e,l)=>{const n=(0,o.E1)("Button"),r=(0,o.E1)("Card"),c=(0,o.E1)("Panel"),y=(0,o.E1)("Toast");return(0,o.Wz)(),(0,o.An)(o.ae,null,[(0,o.QD)("div",u,[(0,o.K2)(r,{class:"w-30rem"},{header:(0,o.Ql)((()=>[])),title:(0,o.Ql)((()=>[(0,o.mY)("Токен")])),subtitle:(0,o.Ql)((()=>[(0,o.mY)("Авторизация для подключения")])),content:(0,o.Ql)((()=>[(0,o.QD)("p",m,(0,s.WA)(a.value),1)])),footer:(0,o.Ql)((()=>[(0,o.QD)("div",p,[(0,o.K2)(n,{label:"Копировать",severity:"secondary",outlined:"",class:"w-full",onClick:l[0]||(l[0]=e=>w())}),(0,o.K2)(n,{label:a.value.length>0?"Перевыпустить":"Сгенерировать",class:"w-full",onClick:l[1]||(l[1]=e=>d())},null,8,["label"])])])),_:1}),(0,o.K2)(r,{class:"w-30rem"},{header:(0,o.Ql)((()=>[])),title:(0,o.Ql)((()=>[(0,o.mY)("Таблицы")])),subtitle:(0,o.Ql)((()=>[])),content:(0,o.Ql)((()=>[(0,o.QD)("div",f,[((0,o.Wz)(!0),(0,o.An)(o.ae,null,(0,o.mi)((0,i.KV)(t).getTableCheck,(e=>((0,o.Wz)(),(0,o.An)("div",{class:(0,s.WN)(["flex align-items-center justify-content-between h-3rem font-bold border-round m-2 p-2",1==e.status?"bg-green-300":"bg-red-300"])},[(0,o.QD)("span",null,(0,s.WA)(e.name),1),(0,o.mY)(),(0,o.QD)("span",null,(0,s.WA)(e.size+" Мб"),1)],2)))),256))])])),footer:(0,o.Ql)((()=>[])),_:1}),(0,o.K2)(r,{class:"w-full"},{header:(0,o.Ql)((()=>[])),title:(0,o.Ql)((()=>[(0,o.mY)("Методы ")])),subtitle:(0,o.Ql)((()=>[(0,o.mY)("Точка входа: https://btrx.ugmk-telecom.ru/integration/index.php")])),content:(0,o.Ql)((()=>[(0,o.QD)("div",v,[(0,o.K2)(c,{header:"setAlarm",collapsed:"false",toggleable:"",pt:{header:e=>({id:"myPanelHeader",style:{"user-select":"none"},class:["border-primary",{"bg-primary":e.state.d_collapsed,"bg-primary-reverse":!e.state.d_collapsed}]}),content:{class:"border-primary text-lg text-primary-700"},title:"text-xl",toggler:()=>"bg-primary hover:bg-primary-reverse"}},{default:(0,o.Ql)((()=>[b])),_:1},8,["pt"]),(0,o.K2)(c,{header:"setMetric",collapsed:"false",toggleable:"",pt:{header:e=>({id:"myPanelHeader",style:{"user-select":"none"},class:["border-primary",{"bg-primary":e.state.d_collapsed,"bg-primary-reverse":!e.state.d_collapsed}]}),content:{class:"border-primary text-lg text-primary-700"},title:"text-xl",toggler:()=>"bg-primary hover:bg-primary-reverse"}},{default:(0,o.Ql)((()=>[Q])),_:1},8,["pt"]),(0,o.K2)(c,{header:"setMore",collapsed:"false",toggleable:"",pt:{header:e=>({id:"myPanelHeader",style:{"user-select":"none"},class:["border-primary",{"bg-primary":e.state.d_collapsed,"bg-primary-reverse":!e.state.d_collapsed}]}),content:{class:"border-primary text-lg text-primary-700"},title:"text-xl",toggler:()=>"bg-primary hover:bg-primary-reverse"}},{default:(0,o.Ql)((()=>[g])),_:1},8,["pt"])])])),footer:(0,o.Ql)((()=>[])),_:1})]),h,(0,o.K2)(y)],64)}}},w=t(4100);const D=(0,w.c)(y,[["__scopeId","data-v-0f8e4587"]]);var x=D;const K=e=>((0,o.ED)("data-v-5e45f9e1"),e=e(),(0,o.ii)(),e),_={class:"flex flex-wrap flex-column gap-3"},V={class:"mb-3"},E={class:"w-20rem word-wrap"},A={class:"w-20rem word-wrap"},T=K((()=>(0,o.QD)("span",{class:"align-content-center"}," В данный момент нет не одной метрики. ",-1))),M={key:0,class:"mb-3"},I={class:"flex flex-wrap flex-row gap-3 justify-content-start"},S={class:"flex flex-column gap-3"},k={class:"mt-3"},U=K((()=>(0,o.QD)("div",{class:"p-card-title"},"Связанные поля",-1))),N={class:"field"},O=K((()=>(0,o.QD)("label",{for:"lastname2"},"Инженер",-1))),C={class:"field"},P=K((()=>(0,o.QD)("label",{for:"lastname4"},"Техник",-1))),W={class:"mt-3"},Y=K((()=>(0,o.QD)("div",{class:"p-card-title"},"Связанные поля",-1))),q={class:"field"},z=K((()=>(0,o.QD)("label",{for:"firstname1"},"Лицевой счет",-1))),L={class:"field"},R=K((()=>(0,o.QD)("label",{for:"lastname2"},"Адрес",-1))),B={class:"field"},j=K((()=>(0,o.QD)("label",{for:"lastname3"},"Участок связи или город",-1))),X={class:"field"},G=K((()=>(0,o.QD)("label",{for:"lastname4"},"Ответственный",-1))),H=K((()=>(0,o.QD)("span",{class:"p-text-secondary block mb-5"},"Update your information.",-1))),F={class:"flex flex-column gap-3 mb-3"},J=K((()=>(0,o.QD)("label",{for:"metricName",class:"font-semibold"},"Название метрики",-1))),Z={class:"flex flex-column gap-3 mb-3"},$=K((()=>(0,o.QD)("label",{for:"metricName",class:"font-semibold"},"ID метрики АСУО",-1))),ee={class:"flex flex-column gap-3 mb-5"},le=K((()=>(0,o.QD)("label",{for:"metricMeaning",class:"font-semibold"},"Возможные значения",-1))),te={class:"flex flex-column gap-3 mb-5"},ae=K((()=>(0,o.QD)("label",{for:"metriStandart",class:"font-semibold"},"Стандарт",-1))),oe={class:"flex flex-column gap-3 mb-5"},se=K((()=>(0,o.QD)("label",{for:"metricDescription",class:"font-semibold"},"Описание метрики",-1))),ie={class:"flex flex-column gap-3 mb-5"},ne=K((()=>(0,o.QD)("label",{for:"metricTests",class:"font-semibold"},"Регламент тестов",-1))),re={class:"flex justify-content-end gap-2"},ce={class:"flex flex-column"},de={class:"flex align-items-center justify-content-between h-3rem font-bold border-round m-2 p-2"},ue={class:"flex justify-content-end gap-2"};var me={__name:"ProactiveAdmin",setup(e){const l=(0,c.W)(),t=r(),a=(0,n.Ou)(t),d=(0,i.IL)(!1),u=(0,i.IL)(!1),m=(0,i.IL)(""),p=(0,i.IL)(""),f=(0,i.IL)(""),v=(0,i.IL)(""),b=(0,i.IL)(""),Q=(0,i.IL)(""),g=(0,i.IL)([]),h=(0,i.IL)([]),y=(0,i.IL)(),w=(0,i.IL)([{ID:1,NAME:"Лицевые счета"}]),D=async()=>{const e={NAME:m.value,METRIC_ASUO:p.value,MEANING:f.value,STANDART:v.value,DESCRIPTION:b.value,TESTS:Q.value},a=await t.setMetric(e);a>0?l.add({severity:"success",summary:"Метрика успешно добавлена",detail:"",life:3e3}):l.add({severity:"error",summary:"Неудалось добавить метрику",detail:"",life:3e3})},x=async e=>{let{newData:o,index:s}=e;a.metric.value[s]=o;const i=await t.updateMetric(o);i?l.add({severity:"success",summary:"Метрика успешно добавлена",detail:"",life:3e3}):l.add({severity:"error",summary:"Неудалось добавить метрику",detail:"",life:3e3})},K=()=>{h.value.forEach((async e=>{const a=await t.deleteMetric(e);a?l.add({severity:"success",summary:"Метрика успешно удалена",detail:"",life:3e3}):l.add({severity:"error",summary:"Неудалось удалить метрику",detail:"",life:3e3})}))};return(0,o.u2)((async()=>{await t.getDealCategory();await t.getMetric()})),(e,l)=>{const n=(0,o.E1)("Button"),r=(0,o.E1)("Column"),c=(0,o.E1)("InputText"),me=(0,o.E1)("Textarea"),pe=(0,o.E1)("DataTable"),fe=(0,o.E1)("Panel"),ve=(0,o.E1)("Dropdown"),be=(0,o.E1)("Inplace"),Qe=(0,o.E1)("Card"),ge=(0,o.E1)("Dialog"),he=(0,o.iS)("tooltip");return(0,o.Wz)(),(0,o.An)("div",_,[(0,o.K2)(fe,{toggleable:"",collapsed:"false",class:"w-full"},{header:(0,o.Ql)((()=>[(0,o.mY)(" Метрики "),(0,o.QD)("span",null," Всего "+(0,s.WA)((0,i.KV)(a).metric.value.length)+" метрик",1)])),default:(0,o.Ql)((()=>[(0,o.QD)("div",V,[(0,o.K2)(n,{label:"Добавить",onClick:l[0]||(l[0]=e=>d.value=!d.value)})]),(0,o.K2)(pe,{value:(0,i.KV)(t).getTableMetric,paginator:"",rows:5,rowsPerPageOptions:[5,10,20,50],editingRows:g.value,"onUpdate:editingRows":l[1]||(l[1]=e=>g.value=e),selection:h.value,"onUpdate:selection":l[2]||(l[2]=e=>h.value=e),editMode:"row",dataKey:"id",onRowEditSave:x},{empty:(0,o.Ql)((()=>[T])),default:(0,o.Ql)((()=>[(0,o.K2)(r,{selectionMode:"multiple",headerStyle:"width: 3rem"}),(0,o.K2)(r,{field:"id"},{header:(0,o.Ql)((()=>[(0,o.mY)(" Ид ")])),body:(0,o.Ql)((e=>[(0,o.mY)((0,s.WA)(e.data.id),1)])),_:1}),(0,o.K2)(r,{field:"metricName"},{header:(0,o.Ql)((()=>[(0,o.mY)(" Метрика ")])),body:(0,o.Ql)((e=>[(0,o.mY)((0,s.WA)(e.data.metricName),1)])),editor:(0,o.Ql)((({data:e,field:l})=>[(0,o.K2)(c,{modelValue:e[l],"onUpdate:modelValue":t=>e[l]=t},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,o.K2)(r,{field:"metricASUO"},{header:(0,o.Ql)((()=>[(0,o.mY)(" Ид метрики АСУО ")])),body:(0,o.Ql)((e=>[(0,o.mY)((0,s.WA)(e.data.metricASUO),1)])),editor:(0,o.Ql)((({data:e,field:l})=>[(0,o.K2)(c,{modelValue:e[l],"onUpdate:modelValue":t=>e[l]=t},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,o.K2)(r,{field:"metricMeaning"},{header:(0,o.Ql)((()=>[(0,o.mY)(" Возможное значение ")])),body:(0,o.Ql)((e=>[(0,o.mY)((0,s.WA)(e.data.metricMeaning),1)])),editor:(0,o.Ql)((({data:e,field:l})=>[(0,o.K2)(c,{modelValue:e[l],"onUpdate:modelValue":t=>e[l]=t},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,o.K2)(r,{field:"metricStandart"},{header:(0,o.Ql)((()=>[(0,o.mY)(" Норматив ")])),body:(0,o.Ql)((e=>[(0,o.mY)((0,s.WA)(e.data.metricStandart),1)])),editor:(0,o.Ql)((({data:e,field:l})=>[(0,o.K2)(c,{modelValue:e[l],"onUpdate:modelValue":t=>e[l]=t},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,o.K2)(r,{field:"metricDescription"},{header:(0,o.Ql)((()=>[(0,o.mY)(" Описание ")])),body:(0,o.Ql)((e=>[(0,o.wt)(((0,o.Wz)(),(0,o.An)("div",E,[(0,o.mY)((0,s.WA)(e.data.metricDescription),1)])),[[he,{value:e.data.metricDescription,showDelay:1e3,hideDelay:300}]])])),editor:(0,o.Ql)((({data:e,field:l})=>[(0,o.K2)(me,{modelValue:e[l],"onUpdate:modelValue":t=>e[l]=t,autoResize:"",rows:"5",cols:"30"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,o.K2)(r,{field:"metricTests"},{header:(0,o.Ql)((()=>[(0,o.mY)(" Регламент тестов ")])),body:(0,o.Ql)((e=>[(0,o.wt)(((0,o.Wz)(),(0,o.An)("div",A,[(0,o.mY)((0,s.WA)(e.data.metricTests),1)])),[[he,{value:e.data.metricTests,showDelay:1e3,hideDelay:300}]])])),editor:(0,o.Ql)((({data:e,field:l})=>[(0,o.K2)(me,{modelValue:e[l],"onUpdate:modelValue":t=>e[l]=t,autoResize:"",rows:"5",cols:"30"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,o.K2)(r,{rowEditor:!0,style:{width:"10%","min-width":"8rem"},bodyStyle:"text-align:center"})])),_:1},8,["value","editingRows","selection"]),h.value.length>0?((0,o.Wz)(),(0,o.An)("div",M,[(0,o.K2)(n,{label:"Удалить",onClick:l[3]||(l[3]=e=>u.value=!u.value)})])):(0,o.g1)("",!0)])),_:1}),(0,o.K2)(fe,{header:"Привязки к сушностям",toggleable:"",collapsed:"false",class:"w-full"},{default:(0,o.Ql)((()=>[(0,o.QD)("div",I,[(0,o.K2)(Qe,null,{header:(0,o.Ql)((()=>[])),title:(0,o.Ql)((()=>[(0,o.mY)("Сделки воронка")])),subtitle:(0,o.Ql)((()=>[])),content:(0,o.Ql)((()=>[(0,o.QD)("div",S,[(0,o.K2)(ve,{modelValue:y.value,"onUpdate:modelValue":l[4]||(l[4]=e=>y.value=e),options:w.value,optionLabel:"NAME",placeholder:"Выбирете воронку заявок ",checkmark:"",highlightOnSelect:!1,class:"w-full"},null,8,["modelValue","options"]),(0,o.K2)(ve,{modelValue:y.value,"onUpdate:modelValue":l[5]||(l[5]=e=>y.value=e),options:w.value,optionLabel:"NAME",placeholder:"Выбирете воронку КЦ ",checkmark:"",highlightOnSelect:!1,class:"w-full"},null,8,["modelValue","options"]),(0,o.K2)(ve,{modelValue:y.value,"onUpdate:modelValue":l[6]||(l[6]=e=>y.value=e),options:w.value,optionLabel:"NAME",placeholder:"Выбирете воронку AО ",checkmark:"",highlightOnSelect:!1,class:"w-full"},null,8,["modelValue","options"])]),(0,o.QD)("div",k,[U,(0,o.QD)("div",N,[O,(0,o.K2)(ve,{id:"lastname2",class:"w-full"})]),(0,o.QD)("div",C,[P,(0,o.K2)(ve,{id:"lastname4",class:"w-full"})])])])),footer:(0,o.Ql)((()=>[(0,o.K2)(be,{onClose:l[8]||(l[8]=l=>e.testEvent(e.test)),closable:!0,closeIcon:"pi pi-check"},{display:(0,o.Ql)((()=>[(0,o.mY)((0,s.WA)("Добавить"))])),content:(0,o.Ql)((()=>[(0,o.K2)(c,{modelValue:e.text,"onUpdate:modelValue":l[7]||(l[7]=l=>e.text=l),autofocus:""},null,8,["modelValue"])])),_:1})])),_:1}),(0,o.K2)(Qe,null,{header:(0,o.Ql)((()=>[])),title:(0,o.Ql)((()=>[(0,o.mY)("Лицевые счета (смарт процесс)")])),subtitle:(0,o.Ql)((()=>[])),content:(0,o.Ql)((()=>[(0,o.K2)(ve,{modelValue:y.value,"onUpdate:modelValue":l[9]||(l[9]=e=>y.value=e),options:w.value,optionLabel:"NAME",placeholder:"Выбирете смарт процесс",checkmark:"",highlightOnSelect:!1,class:"w-full"},null,8,["modelValue","options"]),(0,o.QD)("div",W,[Y,(0,o.QD)("div",q,[z,(0,o.K2)(ve,{id:"firstname1 ",class:"w-full"})]),(0,o.QD)("div",L,[R,(0,o.K2)(ve,{id:"lastname2",class:"w-full"})]),(0,o.QD)("div",B,[j,(0,o.K2)(ve,{id:"lastname3",class:"w-full"})]),(0,o.QD)("div",X,[G,(0,o.K2)(ve,{id:"lastname4",class:"w-full"})])])])),footer:(0,o.Ql)((()=>[(0,o.K2)(be,{onClose:l[11]||(l[11]=l=>e.testEvent(e.test)),closable:!0,closeIcon:"pi pi-check"},{display:(0,o.Ql)((()=>[(0,o.mY)((0,s.WA)("Добавить"))])),content:(0,o.Ql)((()=>[(0,o.K2)(c,{modelValue:e.text,"onUpdate:modelValue":l[10]||(l[10]=l=>e.text=l),autofocus:""},null,8,["modelValue"])])),_:1})])),_:1})])])),_:1}),(0,o.K2)(ge,{visible:d.value,"onUpdate:visible":l[20]||(l[20]=e=>d.value=e),header:"Добавить метрику",style:{width:"35rem"},position:"topright",modal:!0,draggable:!1},{default:(0,o.Ql)((()=>[H,(0,o.QD)("div",F,[J,(0,o.K2)(c,{id:"metricName",modelValue:m.value,"onUpdate:modelValue":l[12]||(l[12]=e=>m.value=e),class:"flex-auto",autocomplete:"off"},null,8,["modelValue"])]),(0,o.QD)("div",Z,[$,(0,o.K2)(c,{id:"metricName",modelValue:p.value,"onUpdate:modelValue":l[13]||(l[13]=e=>p.value=e),class:"flex-auto",autocomplete:"off"},null,8,["modelValue"])]),(0,o.QD)("div",ee,[le,(0,o.K2)(c,{id:"metricMeaning",modelValue:f.value,"onUpdate:modelValue":l[14]||(l[14]=e=>f.value=e),class:"flex-auto",autocomplete:"off"},null,8,["modelValue"])]),(0,o.QD)("div",te,[ae,(0,o.K2)(c,{id:"metricStandart",modelValue:v.value,"onUpdate:modelValue":l[15]||(l[15]=e=>v.value=e),class:"flex-auto",autocomplete:"off"},null,8,["modelValue"])]),(0,o.QD)("div",oe,[se,(0,o.K2)(me,{id:"metricDescription",modelValue:b.value,"onUpdate:modelValue":l[16]||(l[16]=e=>b.value=e),autoResize:"",rows:"5",cols:"30"},null,8,["modelValue"])]),(0,o.QD)("div",ie,[ne,(0,o.K2)(me,{id:"metricTests",modelValue:Q.value,"onUpdate:modelValue":l[17]||(l[17]=e=>Q.value=e),autoResize:"",rows:"5",cols:"30"},null,8,["modelValue"])]),(0,o.QD)("div",re,[(0,o.K2)(n,{type:"button",label:"Отмена",severity:"secondary",onClick:l[18]||(l[18]=e=>d.value=!d.value)}),(0,o.K2)(n,{type:"button",label:"Сохранить",onClick:l[19]||(l[19]=e=>(d.value=!1,D()))})])])),_:1},8,["visible"]),(0,o.K2)(ge,{visible:u.value,"onUpdate:visible":l[23]||(l[23]=e=>u.value=e),header:"Удаление метрик",style:{width:"35rem"},position:"topright",modal:!0,draggable:!1},{default:(0,o.Ql)((()=>[(0,o.K2)(Qe,{class:"w-30rem"},{header:(0,o.Ql)((()=>[])),title:(0,o.Ql)((()=>[(0,o.mY)("Удалить выбраные Метрики?")])),subtitle:(0,o.Ql)((()=>[(0,o.mY)("Удалятся только метрики данные из АСУО останутся в таблице")])),content:(0,o.Ql)((()=>[(0,o.QD)("div",ce,[((0,o.Wz)(!0),(0,o.An)(o.ae,null,(0,o.mi)(h.value,(e=>((0,o.Wz)(),(0,o.An)("div",de,[(0,o.QD)("span",null,(0,s.WA)(e.id),1),(0,o.mY)(),(0,o.QD)("span",null,(0,s.WA)(e.metricName),1)])))),256))])])),footer:(0,o.Ql)((()=>[(0,o.QD)("div",ue,[(0,o.K2)(n,{type:"button",label:"Отмена",severity:"secondary",onClick:l[21]||(l[21]=e=>(u.value=!u.value,h.value=[]))}),(0,o.K2)(n,{type:"button",label:"Удалить",onClick:l[22]||(l[22]=e=>(u.value=!1,K()))})])])),_:1})])),_:1},8,["visible"])])}}};const pe=(0,w.c)(me,[["__scopeId","data-v-5e45f9e1"]]);var fe=pe;const ve={class:"flex flex-row justify-content-start"},be=(0,o.QD)("span",{class:"font-medium text-900 block mb-2"},"Добавить статус для Проактивного сервиса",-1);var Qe={__name:"Entity",setup(e){const l=r(),t=((0,n.Ou)(l),(0,i.IL)()),a=(0,i.IL)(),s=e=>{t.value.toggle(e)};return(0,o.u2)((async()=>{l.getProactiveStatuses()})),(e,n)=>{const r=(0,o.E1)("Column"),c=(0,o.E1)("DataTable"),d=(0,o.E1)("Button"),u=(0,o.E1)("Card"),m=(0,o.E1)("InputText"),p=(0,o.E1)("InputGroupAddon"),f=(0,o.E1)("InputGroup"),v=(0,o.E1)("OverlayPanel"),b=(0,o.E1)("Panel");return(0,o.Wz)(),(0,o.Az)(b,{header:"Статусы",toggleable:"",collapsed:"false",class:"w-full"},{default:(0,o.Ql)((()=>[(0,o.QD)("div",ve,[(0,o.K2)(u,{class:"p-3"},{title:(0,o.Ql)((()=>[(0,o.mY)("Проактивный сервис")])),content:(0,o.Ql)((()=>[(0,o.K2)(c,{value:(0,i.KV)(l).getStatus,size:"small",key:"ID",style:{width:"20rem"}},{default:(0,o.Ql)((()=>[(0,o.K2)(r,{field:"ID"},{header:(0,o.Ql)((()=>[(0,o.mY)("Ид")])),_:1}),(0,o.K2)(r,{field:"NAME"},{header:(0,o.Ql)((()=>[(0,o.mY)("Статус")])),_:1})])),_:1},8,["value"])])),footer:(0,o.Ql)((()=>[(0,o.K2)(d,{label:"Добавить",onClick:s})])),_:1}),(0,o.K2)(v,{ref_key:"proactive",ref:t},{default:(0,o.Ql)((()=>[be,(0,o.K2)(f,null,{default:(0,o.Ql)((()=>[(0,o.K2)(m,{value:a.value,"onUpdate:value":n[0]||(n[0]=e=>a.value=e),readonly:"",class:"w-25rem"},null,8,["value"]),(0,o.K2)(p,null,{default:(0,o.Ql)((()=>[(0,o.K2)(d,{label:"Создать"})])),_:1})])),_:1})])),_:1},512)])])),_:1})}}};const ge=Qe;var he=ge;const ye=(0,o.QD)("div",{class:"flex align-items-center gap-2"},[(0,o.QD)("span",{class:"font-bold white-space-nowrap"},"Подключение")],-1),we=(0,o.QD)("div",{class:"flex align-items-center gap-2"},[(0,o.QD)("span",{class:"font-bold white-space-nowrap"},"Проактивный Сервис")],-1),De=(0,o.QD)("div",{class:"flex align-items-center gap-2"},[(0,o.QD)("span",{class:"font-bold white-space-nowrap"},"Аварии / ППР")],-1),xe=(0,o.QD)("div",{class:"flex align-items-center gap-2"},[(0,o.QD)("span",{class:"font-bold white-space-nowrap"},"Общие справочники")],-1),Ke=(0,o.QD)("div",{class:"flex align-items-center gap-2"},[(0,o.QD)("span",{class:"font-bold white-space-nowrap"},"Доступ")],-1),_e=(0,o.QD)("p",{class:"m-0"}," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ",-1);var Ve={__name:"App",setup(e){return(e,l)=>{const t=(0,o.E1)("TabPanel"),a=(0,o.E1)("TabView"),s=(0,o.E1)("Toast");return(0,o.Wz)(),(0,o.An)(o.ae,null,[(0,o.K2)(a,null,{default:(0,o.Ql)((()=>[(0,o.K2)(t,null,{header:(0,o.Ql)((()=>[ye])),default:(0,o.Ql)((()=>[(0,o.K2)(x)])),_:1}),(0,o.K2)(t,null,{header:(0,o.Ql)((()=>[we])),default:(0,o.Ql)((()=>[(0,o.K2)(fe)])),_:1}),(0,o.K2)(t,null,{header:(0,o.Ql)((()=>[De])),_:1}),(0,o.K2)(t,null,{header:(0,o.Ql)((()=>[xe])),default:(0,o.Ql)((()=>[(0,o.K2)(he)])),_:1}),(0,o.K2)(t,null,{header:(0,o.Ql)((()=>[Ke])),default:(0,o.Ql)((()=>[_e])),_:1})])),_:1}),(0,o.K2)(s)],64)}}};const Ee=Ve;var Ae=Ee,Te=t(9476),Me=t(2752),Ie=t(8830),Se=t(8724),ke=t(1588),Ue=t(3716),Ne=t(6588),Oe=t(1356),Ce=t(5160),Pe=t(100),We=t(6960),Ye=t(5556),qe=t(7540),ze=t(3512),Le=t(6892);const Re=(0,a.W0)(Ae),Be=(0,n.Kw)();Re.use(Be),Re.use(Te.cp),Re.use(Me.c),Re.component("TabView",Se.c),Re.component("TabPanel",ke.c),Re.component("Card",Ue.c),Re.component("Button",Ie.c),Re.component("Panel",Ne.c),Re.component("DataTable",Oe.c),Re.component("Column",Ce.c),Re.component("Dialog",Pe.c),Re.component("InputText",We.c),Re.component("Textarea",Ye.c),Re.component("Toast",qe.c),Re.component("OverlayPanel",ze.c),Re.component("Dropdown",Le.c),Re.mount("#app")}},l={};function t(a){var o=l[a];if(void 0!==o)return o.exports;var s=l[a]={exports:{}};return e[a].call(s.exports,s,s.exports,t),s.exports}t.m=e,function(){var e=[];t.O=function(l,a,o,s){if(!a){var i=1/0;for(d=0;d<e.length;d++){a=e[d][0],o=e[d][1],s=e[d][2];for(var n=!0,r=0;r<a.length;r++)(!1&s||i>=s)&&Object.keys(t.O).every((function(e){return t.O[e](a[r])}))?a.splice(r--,1):(n=!1,s<i&&(i=s));if(n){e.splice(d--,1);var c=o();void 0!==c&&(l=c)}}return l}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[a,o,s]}}(),function(){t.n=function(e){var l=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(l,{a:l}),l}}(),function(){t.d=function(e,l){for(var a in l)t.o(l,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:l[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)}}(),function(){var e={524:0};t.O.j=function(l){return 0===e[l]};var l=function(l,a){var o,s,i=a[0],n=a[1],r=a[2],c=0;if(i.some((function(l){return 0!==e[l]}))){for(o in n)t.o(n,o)&&(t.m[o]=n[o]);if(r)var d=r(t)}for(l&&l(a);c<i.length;c++)s=i[c],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(d)},a=self["webpackChunkproactive_admin_pack"]=self["webpackChunkproactive_admin_pack"]||[];a.forEach(l.bind(null,0)),a.push=l.bind(null,a.push.bind(a))}();var a=t.O(void 0,[999],(function(){return t(7066)}));a=t.O(a)})();
//# sourceMappingURL=app.594ecb28.js.map