(function(){"use strict";var e={3064:function(e,t,l){var a=l(5130),s=l(6768),i=l(4232),n=l(144),o=(l(4114),l(3367));const r=(0,o.nY)("adminStore",{state:()=>({mysqlTable:[{name:"mws_metrics",status:0,size:0},{name:"mws_metrics_units",status:0,size:0},{name:"mws_abonent",status:0,size:0},{name:"mws_abonent_status",status:0,size:0},{name:"mws_ip_check",status:0,size:0},{name:"mws_settings",status:0,size:0}],metric:[],proactiveStatus:[],dealCategory:[],dealFields:[],smartLists:[],smartFields:[],listAll:[],listCity:[],settings:{categoryMain:null,categoryKC:null,categoryAO:null,smartPersonalAccount:null,listCity:null,sityDay:[],defaultDay:0,dealField:{engineer:null,technicist:null},smartField:{personalAccount:null,address:null,city:null,asigned:null}}}),actions:{async getSettings(){const e=await new Promise((e=>{BX.rest.callMethod("mwsproactiverest.setting.getList",{filter:{NAME:"PROACTIVE"},select:["*"]},(t=>{e(t.data())}))}));if(e.length>0&&e[0].SETTING_STRING){const t=JSON.parse(e[0].SETTING_STRING);this.settings={categoryMain:t.categoryMain?t.categoryMain:null,categoryKC:t.categoryKC?t.categoryKC:null,categoryAO:t.categoryAO?t.categoryAO:null,smartPersonalAccount:t.smartPersonalAccount?t.smartPersonalAccount:null,listCity:t.listCity?t.listCity:null,sityDay:t.sityDay?t.sityDay:[],defaultDay:t.defaultDay?t.defaultDay:0,dealField:{engineer:t.dealField&&t.dealField.engineer?t.dealField.engineer:null,technicist:t.dealField&&t.dealField.technicist?t.dealField.technicist:null},smartField:{personalAccount:t.smartField&&t.smartField.personalAccount?t.smartField.personalAccount:null,address:t.smartField&&t.smartField.address?t.smartField.address:null,city:t.smartField&&t.smartField.city?t.smartField.city:null,asigned:t.smartField&&t.smartField.asigned?t.smartField.asigned:null}}}},async checkTable(){const e=await new Promise((e=>{BX.rest.callMethod("mwsproactiverest.checktable",{table:this.mysqlTable},(t=>{e(t.data())}))}));this.mysqlTable=e},async getDealCategory(){const e=await new Promise((e=>{BX.rest.callMethod("crm.dealcategory.list",{},(t=>{t.error()?e(t.error()):e(t.data())}))}));this.dealCategory=e},async getDealFields(){const e=await new Promise((e=>{BX.rest.callMethod("crm.deal.fields",{},(t=>{e(t.data())}))}));for(var t in e)this.dealFields.push({ID:t,NAME:e[t].title})},async getSmartFields(){if(this.settings.smartPersonalAccount){const e=await new Promise((e=>{BX.rest.callMethod("mwsproactiverest.getUserFields",{ENTITY_ID:this.settings.smartPersonalAccount.ID},(t=>{e(t.data())}))}));this.smartFields=e}},async getSmarts(){const e=await new Promise((e=>{BX.rest.callMethod("mwsproactiverest.smart.getSmarts",{},(t=>{e(t.data())}))}));this.smartLists=e},async getLists(){const e=await new Promise((e=>{BX.rest.callMethod("mwsproactiverest.getLists",{},(t=>{e(t.data())}))}));this.listAll=e},async getCities(){if(this.settings.listCity){const e=await new Promise((e=>{BX.rest.callMethod("mwsproactiverest.list.getElements",{ID:this.settings.listCity},(t=>{e(t.data())}))}));this.listCity=e}},async setMetric(e){const t=new Promise(((t,l)=>{BX.rest.callMethod("mwsproactiverest.metric.add",{metric:e},(e=>{e.error()?l(e.error()):t(e.data())}))}));return t},async getMetric(){const e=await new Promise((e=>{BX.rest.callMethod("mwsproactiverest.metric.getList",{order:[],filter:[],select:["*"]},(t=>{e(t.data())}))}));e.forEach((e=>{this.metric.push({id:e.ID,metricName:e.NAME,metricASUO:e.METRIC_ASUO,metricMeaning:e.MEANING,metricStandart:e.STANDART,metricDescription:e.DESCRIPTION,metricTests:e.TESTS})}))},async updateMetric(e){const t=await new Promise((t=>{BX.rest.callMethod("mwsproactiverest.metric.update",{ID:e.id,fields:{NAME:e.metricName,METRIC_ASUO:e.metricASUO,MEANING:e.metricMeaning,STANDART:e.metricStandart,DESCRIPTION:e.metricDescription,TESTS:e.metricTests}},(e=>{e.error()?t(e.error()):t(e.data())}))}));return t},async deleteMetric(e){const t=await new Promise((t=>{BX.rest.callMethod("mwsproactiverest.metric.delete",{ID:e.id},(e=>{t(e.data())}))}));return t},async getProactiveStatuses(){const e=await new Promise((e=>{BX.rest.callMethod("mwsproactiverest.abonentStatus.getList",{order:[],filter:[],select:["*"]},(t=>{e(t.data())}))}));this.proactiveStatus=e}},getters:{getTableCheck(e){return e.mysqlTable},getTableMetric(e){return e.metric},getStatus(e){return e.proactiveStatus},getDdealCategory(e){return e.dealCategory},getSmartLists(e){return e.smartLists},getListAll(e){return e.listAll},getFieldsDeal(e){return e.dealFields},getFieldsSmart(e){return e.smartFields}}});var d=l(2151);const c=e=>((0,s.Qi)("data-v-1a7a466f"),e=e(),(0,s.jt)(),e),u={class:"flex flex-nowrap flex-row gap-3"},m={class:"m-0 word-wrap"},p={class:"flex gap-3 mt-1"},g={class:"flex flex-column"},v=c((()=>(0,s.Lk)("p",null,"Точка входа: https://btrx.ugmk-telecom.ru/integration/index.php",-1))),f=c((()=>(0,s.Lk)("p",null,'Заголовок авторизации: "Bitrix-Mws-Proactive-Integration-Token"',-1))),b=c((()=>(0,s.Lk)("p",null,'Заголовок метода: "Bitrix-Mws-Proactive-Integration-Command"',-1))),k={class:"flex flex-nowrap flex-column gap-2"},y=c((()=>(0,s.Lk)("p",{class:"m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1))),h=c((()=>(0,s.Lk)("p",{class:"m-0"}," Функция для передачи метрик из АСУО в битрикс 24. Принемает в себя JSON ",-1))),w=c((()=>(0,s.Lk)("div",{class:"m-3"}," Функция для получения данных о ресурсах которые моджно освободить из билинга в битрикс24. Принемает в себя JSON ",-1))),F={class:"flex flex-row flex-nowrap"},L=c((()=>(0,s.Lk)("div",{class:"flex align-items-center pl-2"}," Пример JSON ",-1))),_=c((()=>(0,s.Lk)("code",null,[(0,s.Lk)("pre",null,'  [\n    {\n        "person": "Иванов1 Иван1 Иванович1",\n        "ip":"10.7.1.41",\n        "port":22,\n        "abonent":270574555,\n        "gateway":"pi-56"\n    }\n ]\n               ')],-1))),x=c((()=>(0,s.Lk)("div",{class:"flex align-items-center pl-2"}," Пример кода на PHP ",-1))),R=c((()=>(0,s.Lk)("code",null,[(0,s.Lk)("pre",null,[(0,s.eW)('  $curl = curl_init();\n\n  curl_setopt_array($curl, array(\n  CURLOPT_URL => \'http://btrx.ugmk-telecom.ru/proactive/integration/index.php\',\n  CURLOPT_RETURNTRANSFER => true,\n  CURLOPT_ENCODING => \'\',\n  CURLOPT_MAXREDIRS => 10,\n  CURLOPT_TIMEOUT => 0,\n  CURLOPT_FOLLOWLOCATION => true,\n  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n  CURLOPT_CUSTOMREQUEST => \'POST\',\n  CURLOPT_POSTFIELDS =>\'[\n        {\n          "person": "Иванов1 Иван1 Иванович1",\n          "ip":"10.7.1.41",\n          "port":22,\n          "abonent":270574555,\n          "gateway":"pi-56"\n        }]\',\n  CURLOPT_HTTPHEADER => array(\n               \'Bitrix-Mws-Proactive-Integration-Command: setIpCheck\', '),(0,s.Lk)("span",{style:{color:"green"}},"// Передаем  комманду в заголовке"),(0,s.eW)("\n               'Content-Type: application/json'\n            ),\n          ));\n\n  $response = curl_exec($curl);\n\n  curl_close($curl);\n  echo $response;\n                          ")])],-1))),T=c((()=>(0,s.Lk)("div",{style:{position:"relative"}},[(0,s.Lk)("div",{style:{position:"absolute",top:"-10000px",left:"-10000px"}},[(0,s.Lk)("textarea",{type:"text",id:"copyBuf",style:{width:"1px",height:"1px"}})])],-1)));var C={__name:"Connect",setup(e){const t=(0,d.d)(),l=r(),a=((0,o.bP)(l),(0,n.KR)(""));(0,s.sV)((async()=>{await l.checkTable();const e=await new Promise((e=>{BX.rest.callMethod("mwsproactiverest.getToken",{},(t=>{e(t.data())}))}));a&&(a.value=e)}));const c=async()=>{const e=C(128);a.value=e;const l=await new Promise((t=>{BX.rest.callMethod("mwsproactiverest.setToken",{genToken:e},(e=>{t(e.data())}))}));l&&t.add({severity:"success",summary:"Установлен новый токен!",detail:"",life:3e3})},C=e=>{let t="abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789",l="";for(let a=0;a<e;a++){let e=Math.floor(Math.random()*t.length);l+=t.substring(e,e+1)}return l},A=()=>{var e=document.getElementById("copyBuf");e.value=a.value,e.select(),document.execCommand("copy")};return(e,t)=>{const o=(0,s.g2)("Button"),r=(0,s.g2)("Card"),d=(0,s.g2)("Panel"),C=(0,s.g2)("Fieldset"),V=(0,s.g2)("Toast");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",u,[(0,s.bF)(r,{class:"w-30rem"},{header:(0,s.k6)((()=>[])),title:(0,s.k6)((()=>[(0,s.eW)("Токен")])),subtitle:(0,s.k6)((()=>[(0,s.eW)("Авторизация для подключения")])),content:(0,s.k6)((()=>[(0,s.Lk)("p",m,(0,i.v_)(a.value),1)])),footer:(0,s.k6)((()=>[(0,s.Lk)("div",p,[(0,s.bF)(o,{label:"Копировать",severity:"secondary",outlined:"",class:"w-full",onClick:t[0]||(t[0]=e=>A())}),(0,s.bF)(o,{label:a.value.length>0?"Перевыпустить":"Сгенерировать",class:"w-full",onClick:t[1]||(t[1]=e=>c())},null,8,["label"])])])),_:1}),(0,s.bF)(r,{class:"w-30rem"},{header:(0,s.k6)((()=>[])),title:(0,s.k6)((()=>[(0,s.eW)("Таблицы")])),subtitle:(0,s.k6)((()=>[])),content:(0,s.k6)((()=>[(0,s.Lk)("div",g,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)((0,n.R1)(l).getTableCheck,(e=>((0,s.uX)(),(0,s.CE)("div",{class:(0,i.C4)(["flex align-items-center justify-content-between h-3rem font-bold border-round m-2 p-2",1==e.status?"bg-green-300":"bg-red-300"])},[(0,s.Lk)("span",null,(0,i.v_)(e.name),1),(0,s.eW)(),(0,s.Lk)("span",null,(0,i.v_)(e.size+" Мб"),1)],2)))),256))])])),footer:(0,s.k6)((()=>[])),_:1}),(0,s.bF)(r,{class:"w-full"},{header:(0,s.k6)((()=>[])),title:(0,s.k6)((()=>[(0,s.eW)("Методы")])),subtitle:(0,s.k6)((()=>[v,f,b])),content:(0,s.k6)((()=>[(0,s.Lk)("div",k,[(0,s.bF)(d,{header:"setAlarm",collapsed:"false",toggleable:"",pt:{header:e=>({id:"myPanelHeader",style:{"user-select":"none"},class:["border-primary",{"bg-primary":e.state.d_collapsed,"bg-primary-reverse":!e.state.d_collapsed}]}),content:{class:"border-primary text-lg text-primary-700"},title:"text-xl",toggler:()=>"bg-primary hover:bg-primary-reverse"}},{default:(0,s.k6)((()=>[y])),_:1},8,["pt"]),(0,s.bF)(d,{header:"setMetric",collapsed:"false",toggleable:"",pt:{header:e=>({id:"myPanelHeader",style:{"user-select":"none"},class:["border-primary",{"bg-primary":e.state.d_collapsed,"bg-primary-reverse":!e.state.d_collapsed}]}),content:{class:"border-primary text-lg text-primary-700"},title:"text-xl",toggler:()=>"bg-primary hover:bg-primary-reverse"}},{default:(0,s.k6)((()=>[h])),_:1},8,["pt"]),(0,s.bF)(d,{header:"setIpCheck",collapsed:"false",toggleable:"",pt:{header:e=>({id:"myPanelHeader",style:{"user-select":"none"},class:["border-primary",{"bg-primary":e.state.d_collapsed,"bg-primary-reverse":!e.state.d_collapsed}]}),content:{class:"border-primary text-lg text-primary-700"},title:"text-xl",toggler:()=>"bg-primary hover:bg-primary-reverse"}},{default:(0,s.k6)((()=>[w,(0,s.Lk)("div",F,[(0,s.bF)(C,null,{legend:(0,s.k6)((()=>[L])),default:(0,s.k6)((()=>[_])),_:1}),(0,s.bF)(C,null,{legend:(0,s.k6)((()=>[x])),default:(0,s.k6)((()=>[R])),_:1})])])),_:1},8,["pt"])])])),footer:(0,s.k6)((()=>[])),_:1})]),T,(0,s.bF)(V)],64)}}},A=l(1241);const V=(0,A.A)(C,[["__scopeId","data-v-1a7a466f"]]);var M=V;const E=e=>((0,s.Qi)("data-v-9cd4e60c"),e=e(),(0,s.jt)(),e),S={class:"flex flex-wrap flex-column gap-3"},P={class:"mb-3"},D={class:"w-20rem word-wrap"},N={class:"w-20rem word-wrap"},I=E((()=>(0,s.Lk)("span",{class:"align-content-center"}," В данный момент нет не одной метрики. ",-1))),U={key:0,class:"mb-3"},O={class:"flex flex-nowrap flex-row gap-3 justify-content-start"},W={class:"flex flex-column gap-3"},X={key:0,class:"mt-3"},B=E((()=>(0,s.Lk)("div",{class:"p-card-title"},"Связанные поля",-1))),K={class:"field"},j=E((()=>(0,s.Lk)("label",{for:"lastname2"},"Инженер",-1))),q={class:"field"},G=E((()=>(0,s.Lk)("label",{for:"lastname4"},"Техник",-1))),z={key:0,class:"mt-3"},H=E((()=>(0,s.Lk)("div",{class:"p-card-title"},"Связанные поля",-1))),Q={class:"field"},$=E((()=>(0,s.Lk)("label",{for:"firstname1"},"Лицевой счет",-1))),J={class:"field"},Y=E((()=>(0,s.Lk)("label",{for:"lastname2"},"Адрес",-1))),Z={class:"field"},ee=E((()=>(0,s.Lk)("label",{for:"lastname3"},"Участок связи или город",-1))),te={class:"field"},le=E((()=>(0,s.Lk)("label",{for:"lastname4"},"Ответственный",-1))),ae={class:"mt-3"},se={class:"field"},ie=E((()=>(0,s.Lk)("label",{for:"firstname1"},"Повторное обрашение значение в днях",-1))),ne={class:"flex justify-content-end"},oe={class:"flex justify-content-end"},re=E((()=>(0,s.Lk)("span",{class:"p-text-secondary block mb-5"},"Update your information.",-1))),de={class:"flex flex-column gap-3 mb-3"},ce=E((()=>(0,s.Lk)("label",{for:"metricName",class:"font-semibold"},"Название метрики",-1))),ue={class:"flex flex-column gap-3 mb-3"},me=E((()=>(0,s.Lk)("label",{for:"metricName",class:"font-semibold"},"ID метрики АСУО",-1))),pe={class:"flex flex-column gap-3 mb-5"},ge=E((()=>(0,s.Lk)("label",{for:"metricMeaning",class:"font-semibold"},"Возможные значения",-1))),ve={class:"flex flex-column gap-3 mb-5"},fe=E((()=>(0,s.Lk)("label",{for:"metriStandart",class:"font-semibold"},"Стандарт",-1))),be={class:"flex flex-column gap-3 mb-5"},ke=E((()=>(0,s.Lk)("label",{for:"metricDescription",class:"font-semibold"},"Описание метрики",-1))),ye={class:"flex flex-column gap-3 mb-5"},he=E((()=>(0,s.Lk)("label",{for:"metricTests",class:"font-semibold"},"Регламент тестов",-1))),we={class:"flex justify-content-end gap-2"},Fe={class:"flex flex-column"},Le={class:"flex align-items-center justify-content-between h-3rem font-bold border-round m-2 p-2"},_e={class:"flex justify-content-end gap-2"},xe={class:"flex flex-column gap-3 mb-3"},Re=E((()=>(0,s.Lk)("label",{for:"metricName",class:"font-semibold"},"Город",-1))),Te={class:"flex flex-column gap-3 mb-3"},Ce=E((()=>(0,s.Lk)("label",{for:"metricName",class:"font-semibold"},"Повторяемость дни",-1))),Ae={class:"flex justify-content-end gap-2"};var Ve={__name:"ProactiveAdmin",setup(e){const t=(0,d.d)(),l=r(),a=(0,o.bP)(l),c=(0,n.KR)(!1),u=(0,n.KR)(!1),m=(0,n.KR)(!1),p=(0,n.KR)(""),g=(0,n.KR)(""),v=(0,n.KR)(""),f=(0,n.KR)(""),b=(0,n.KR)(""),k=(0,n.KR)(""),y=(0,n.KR)([]),h=(0,n.KR)([]),w=((0,n.KR)(),(0,n.KR)()),F=(0,n.KR)(),L=async()=>{a.settings.value.sityDay.push({ID:w.value.ID,NAME:w.value.NAME,DAY:F.value})},_=async()=>{const e={NAME:p.value,METRIC_ASUO:g.value,MEANING:v.value,STANDART:f.value,DESCRIPTION:b.value,TESTS:k.value},a=await l.setMetric(e);a>0?(t.add({severity:"success",summary:"Метрика успешно добавлена",detail:"",life:3e3}),await l.getMetric(),p.value="",g.value="",v.value="",f.value="",b.value="",k.value=""):t.add({severity:"error",summary:"Неудалось добавить метрику",detail:"",life:3e3})},x=async e=>{let{newData:s,index:i}=e;a.metric.value[i]=s;const n=await l.updateMetric(s);n?t.add({severity:"success",summary:"Метрика успешно добавлена",detail:"",life:3e3}):t.add({severity:"error",summary:"Неудалось добавить метрику",detail:"",life:3e3})},R=()=>{h.value.forEach((async e=>{const a=await l.deleteMetric(e);a?t.add({severity:"success",summary:"Метрика успешно удалена",detail:"",life:3e3}):t.add({severity:"error",summary:"Неудалось удалить метрику",detail:"",life:3e3})}))},T=async e=>{a.listCity.value=e.value.ID,await l.getCities()},C=async e=>{await l.getSmartFields()},A=async()=>{const e=await new Promise((e=>{BX.rest.callMethod("mwsproactiverest.setting.getList",{filter:{NAME:"PROACTIVE"},select:["ID"]},(t=>{e(t.data())}))}));if(0==e.length){await new Promise((e=>{BX.rest.callMethod("mwsproactiverest.setting.add",{setting:{NAME:"PROACTIVE",SETTING_STRING:a.settings.value}})}))}else{console.log(e[0]);await new Promise((t=>{BX.rest.callMethod("mwsproactiverest.setting.update",{ID:e[0].ID,fields:{SETTING_STRING:a.settings.value}})}))}};return(0,s.sV)((async()=>{await l.getSettings(),console.log(a.settings.value),await l.getDealCategory(),await l.getDealFields(),await l.getSmarts(),await l.getSmartFields(),await l.getLists(),await l.getCities(),await l.getMetric()})),(e,t)=>{const o=(0,s.g2)("Button"),r=(0,s.g2)("Column"),d=(0,s.g2)("InputText"),V=(0,s.g2)("Textarea"),M=(0,s.g2)("DataTable"),E=(0,s.g2)("Panel"),Ve=(0,s.g2)("Dropdown"),Me=(0,s.g2)("Card"),Ee=(0,s.g2)("Dialog"),Se=(0,s.gN)("tooltip");return(0,s.uX)(),(0,s.CE)("div",S,[(0,s.bF)(E,{toggleable:"",collapsed:"false",class:"w-full"},{header:(0,s.k6)((()=>[(0,s.eW)(" Метрики "),(0,s.Lk)("span",null," Всего "+(0,i.v_)((0,n.R1)(a).metric.value.length)+" метрик",1)])),default:(0,s.k6)((()=>[(0,s.Lk)("div",P,[(0,s.bF)(o,{label:"Добавить",onClick:t[0]||(t[0]=e=>c.value=!c.value)})]),(0,s.bF)(M,{value:(0,n.R1)(l).getTableMetric,paginator:"",rows:5,rowsPerPageOptions:[5,10,20,50],editingRows:y.value,"onUpdate:editingRows":t[1]||(t[1]=e=>y.value=e),selection:h.value,"onUpdate:selection":t[2]||(t[2]=e=>h.value=e),editMode:"row",dataKey:"id",onRowEditSave:x},{empty:(0,s.k6)((()=>[I])),default:(0,s.k6)((()=>[(0,s.bF)(r,{selectionMode:"multiple",headerStyle:"width: 3rem"}),(0,s.bF)(r,{field:"id"},{header:(0,s.k6)((()=>[(0,s.eW)(" Ид ")])),body:(0,s.k6)((e=>[(0,s.eW)((0,i.v_)(e.data.id),1)])),_:1}),(0,s.bF)(r,{field:"metricName"},{header:(0,s.k6)((()=>[(0,s.eW)(" Метрика ")])),body:(0,s.k6)((e=>[(0,s.eW)((0,i.v_)(e.data.metricName),1)])),editor:(0,s.k6)((({data:e,field:t})=>[(0,s.bF)(d,{modelValue:e[t],"onUpdate:modelValue":l=>e[t]=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,s.bF)(r,{field:"metricASUO"},{header:(0,s.k6)((()=>[(0,s.eW)(" Ид метрики АСУО ")])),body:(0,s.k6)((e=>[(0,s.eW)((0,i.v_)(e.data.metricASUO),1)])),editor:(0,s.k6)((({data:e,field:t})=>[(0,s.bF)(d,{modelValue:e[t],"onUpdate:modelValue":l=>e[t]=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,s.bF)(r,{field:"metricMeaning"},{header:(0,s.k6)((()=>[(0,s.eW)(" Возможное значение ")])),body:(0,s.k6)((e=>[(0,s.eW)((0,i.v_)(e.data.metricMeaning),1)])),editor:(0,s.k6)((({data:e,field:t})=>[(0,s.bF)(d,{modelValue:e[t],"onUpdate:modelValue":l=>e[t]=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,s.bF)(r,{field:"metricStandart"},{header:(0,s.k6)((()=>[(0,s.eW)(" Норматив ")])),body:(0,s.k6)((e=>[(0,s.eW)((0,i.v_)(e.data.metricStandart),1)])),editor:(0,s.k6)((({data:e,field:t})=>[(0,s.bF)(d,{modelValue:e[t],"onUpdate:modelValue":l=>e[t]=l},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,s.bF)(r,{field:"metricDescription"},{header:(0,s.k6)((()=>[(0,s.eW)(" Описание ")])),body:(0,s.k6)((e=>[(0,s.bo)(((0,s.uX)(),(0,s.CE)("div",D,[(0,s.eW)((0,i.v_)(e.data.metricDescription),1)])),[[Se,{value:e.data.metricDescription,showDelay:1e3,hideDelay:300}]])])),editor:(0,s.k6)((({data:e,field:t})=>[(0,s.bF)(V,{modelValue:e[t],"onUpdate:modelValue":l=>e[t]=l,autoResize:"",rows:"5",cols:"30"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,s.bF)(r,{field:"metricTests"},{header:(0,s.k6)((()=>[(0,s.eW)(" Регламент тестов ")])),body:(0,s.k6)((e=>[(0,s.bo)(((0,s.uX)(),(0,s.CE)("div",N,[(0,s.eW)((0,i.v_)(e.data.metricTests),1)])),[[Se,{value:e.data.metricTests,showDelay:1e3,hideDelay:300}]])])),editor:(0,s.k6)((({data:e,field:t})=>[(0,s.bF)(V,{modelValue:e[t],"onUpdate:modelValue":l=>e[t]=l,autoResize:"",rows:"5",cols:"30"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,s.bF)(r,{rowEditor:!0,style:{width:"10%","min-width":"8rem"},bodyStyle:"text-align:center"})])),_:1},8,["value","editingRows","selection"]),h.value.length>0?((0,s.uX)(),(0,s.CE)("div",U,[(0,s.bF)(o,{label:"Удалить",onClick:t[3]||(t[3]=e=>u.value=!u.value)})])):(0,s.Q3)("",!0)])),_:1}),(0,s.bF)(E,{header:"Привязки к сушностям",toggleable:"",collapsed:"false",class:"w-full"},{default:(0,s.k6)((()=>[(0,s.Lk)("div",O,[(0,s.bF)(Me,null,{header:(0,s.k6)((()=>[])),title:(0,s.k6)((()=>[(0,s.eW)("Сделки воронка")])),subtitle:(0,s.k6)((()=>[])),content:(0,s.k6)((()=>[(0,s.Lk)("div",W,[(0,s.bF)(Ve,{modelValue:(0,n.R1)(a).settings.value.categoryMain,"onUpdate:modelValue":t[4]||(t[4]=e=>(0,n.R1)(a).settings.value.categoryMain=e),options:(0,n.R1)(l).getDdealCategory,optionLabel:"NAME",placeholder:"Выбирете воронку заявок ",checkmark:"",highlightOnSelect:!1,class:"w-full"},null,8,["modelValue","options"])]),(0,n.R1)(l).getFieldsDeal?((0,s.uX)(),(0,s.CE)("div",X,[B,(0,s.Lk)("div",K,[j,(0,s.bF)(Ve,{modelValue:(0,n.R1)(a).settings.value.dealField.engineer,"onUpdate:modelValue":t[5]||(t[5]=e=>(0,n.R1)(a).settings.value.dealField.engineer=e),options:(0,n.R1)(l).getFieldsDeal,optionLabel:"NAME",placeholder:"Выбирете поле Инжинер",id:"lastname2",class:"w-full"},null,8,["modelValue","options"])]),(0,s.Lk)("div",q,[G,(0,s.bF)(Ve,{modelValue:(0,n.R1)(a).settings.value.dealField.technicist,"onUpdate:modelValue":t[6]||(t[6]=e=>(0,n.R1)(a).settings.value.dealField.technicist=e),options:(0,n.R1)(l).getFieldsDeal,optionLabel:"NAME",placeholder:"Выбирете поле Техник",id:"lastname4",class:"w-full"},null,8,["modelValue","options"])])])):(0,s.Q3)("",!0)])),_:1}),(0,s.bF)(Me,null,{header:(0,s.k6)((()=>[])),title:(0,s.k6)((()=>[(0,s.eW)("Лицевые счета (смарт процесс)")])),subtitle:(0,s.k6)((()=>[])),content:(0,s.k6)((()=>[(0,s.bF)(Ve,{modelValue:(0,n.R1)(a).settings.value.smartPersonalAccount,"onUpdate:modelValue":t[7]||(t[7]=e=>(0,n.R1)(a).settings.value.smartPersonalAccount=e),options:(0,n.R1)(l).getSmartLists,onChange:C,optionLabel:"NAME",placeholder:"Выбирете смарт процесс",checkmark:"",highlightOnSelect:!1,class:"w-full"},null,8,["modelValue","options"]),(0,n.R1)(l).getFieldsSmart?((0,s.uX)(),(0,s.CE)("div",z,[H,(0,s.Lk)("div",Q,[$,(0,s.bF)(Ve,{id:"firstname1",modelValue:(0,n.R1)(a).settings.value.smartField.personalAccount,"onUpdate:modelValue":t[8]||(t[8]=e=>(0,n.R1)(a).settings.value.smartField.personalAccount=e),options:(0,n.R1)(l).getFieldsSmart,optionLabel:"NAME",class:"w-full"},null,8,["modelValue","options"])]),(0,s.Lk)("div",J,[Y,(0,s.bF)(Ve,{id:"lastname2",modelValue:(0,n.R1)(a).settings.value.smartField.address,"onUpdate:modelValue":t[9]||(t[9]=e=>(0,n.R1)(a).settings.value.smartField.address=e),options:(0,n.R1)(l).getFieldsSmart,optionLabel:"NAME",class:"w-full"},null,8,["modelValue","options"])]),(0,s.Lk)("div",Z,[ee,(0,s.bF)(Ve,{id:"lastname3",modelValue:(0,n.R1)(a).settings.value.smartField.city,"onUpdate:modelValue":t[10]||(t[10]=e=>(0,n.R1)(a).settings.value.smartField.city=e),options:(0,n.R1)(l).getFieldsSmart,optionLabel:"NAME",class:"w-full"},null,8,["modelValue","options"])]),(0,s.Lk)("div",te,[le,(0,s.bF)(Ve,{id:"lastname4",modelValue:(0,n.R1)(a).settings.value.smartField.asigned,"onUpdate:modelValue":t[11]||(t[11]=e=>(0,n.R1)(a).settings.value.smartField.asigned=e),options:(0,n.R1)(l).getFieldsSmart,optionLabel:"NAME",class:"w-full"},null,8,["modelValue","options"])])])):(0,s.Q3)("",!0)])),_:1}),(0,s.bF)(Me,{class:"w-30rem"},{title:(0,s.k6)((()=>[(0,s.eW)("Город")])),content:(0,s.k6)((()=>[(0,s.bF)(Ve,{modelValue:(0,n.R1)(a).settings.value.listCity,"onUpdate:modelValue":t[12]||(t[12]=e=>(0,n.R1)(a).settings.value.listCity=e),options:(0,n.R1)(l).getListAll,onChange:T,optionLabel:"NAME",placeholder:"Выбирете список",checkmark:"",highlightOnSelect:!1,class:"w-full"},null,8,["modelValue","options"]),(0,s.Lk)("div",ae,[(0,s.Lk)("div",se,[ie,(0,s.bF)(d,{modelValue:(0,n.R1)(a).settings.value.defaultDay,"onUpdate:modelValue":t[13]||(t[13]=e=>(0,n.R1)(a).settings.value.defaultDay=e),id:"firstname1 ",class:"w-full"},null,8,["modelValue"])]),(0,s.bF)(M,{value:(0,n.R1)(a).settings.value.sityDay,size:"small",key:"ID",class:"w-full"},{footer:(0,s.k6)((()=>[(0,s.Lk)("div",ne,[(0,s.bF)(o,{label:"Добавить",onClick:t[14]||(t[14]=e=>m.value=!m.value)})])])),default:(0,s.k6)((()=>[(0,s.bF)(r,{field:"NAME"},{header:(0,s.k6)((()=>[(0,s.eW)("Город")])),body:(0,s.k6)((e=>[(0,s.eW)((0,i.v_)(e.data.NAME),1)])),_:1}),(0,s.bF)(r,{field:"DAY"},{header:(0,s.k6)((()=>[(0,s.eW)("Дни")])),_:1})])),_:1},8,["value"])])])),_:1})]),(0,s.bF)(Me,{class:"w-full mt-3"},{content:(0,s.k6)((()=>[(0,s.Lk)("div",oe,[(0,s.bF)(o,{label:"Сохранить",onClick:t[15]||(t[15]=e=>A())})])])),_:1})])),_:1}),(0,s.bF)(Ee,{visible:c.value,"onUpdate:visible":t[24]||(t[24]=e=>c.value=e),header:"Добавить метрику",style:{width:"35rem"},position:"topright",modal:!0,draggable:!1},{default:(0,s.k6)((()=>[re,(0,s.Lk)("div",de,[ce,(0,s.bF)(d,{id:"metricName",modelValue:p.value,"onUpdate:modelValue":t[16]||(t[16]=e=>p.value=e),class:"flex-auto",autocomplete:"off"},null,8,["modelValue"])]),(0,s.Lk)("div",ue,[me,(0,s.bF)(d,{id:"metricName",modelValue:g.value,"onUpdate:modelValue":t[17]||(t[17]=e=>g.value=e),class:"flex-auto",autocomplete:"off"},null,8,["modelValue"])]),(0,s.Lk)("div",pe,[ge,(0,s.bF)(d,{id:"metricMeaning",modelValue:v.value,"onUpdate:modelValue":t[18]||(t[18]=e=>v.value=e),class:"flex-auto",autocomplete:"off"},null,8,["modelValue"])]),(0,s.Lk)("div",ve,[fe,(0,s.bF)(d,{id:"metricStandart",modelValue:f.value,"onUpdate:modelValue":t[19]||(t[19]=e=>f.value=e),class:"flex-auto",autocomplete:"off"},null,8,["modelValue"])]),(0,s.Lk)("div",be,[ke,(0,s.bF)(V,{id:"metricDescription",modelValue:b.value,"onUpdate:modelValue":t[20]||(t[20]=e=>b.value=e),autoResize:"",rows:"5",cols:"30"},null,8,["modelValue"])]),(0,s.Lk)("div",ye,[he,(0,s.bF)(V,{id:"metricTests",modelValue:k.value,"onUpdate:modelValue":t[21]||(t[21]=e=>k.value=e),autoResize:"",rows:"5",cols:"30"},null,8,["modelValue"])]),(0,s.Lk)("div",we,[(0,s.bF)(o,{type:"button",label:"Отмена",severity:"secondary",onClick:t[22]||(t[22]=e=>c.value=!c.value)}),(0,s.bF)(o,{type:"button",label:"Сохранить",onClick:t[23]||(t[23]=e=>(c.value=!1,_()))})])])),_:1},8,["visible"]),(0,s.bF)(Ee,{visible:u.value,"onUpdate:visible":t[27]||(t[27]=e=>u.value=e),header:"Удаление метрик",style:{width:"35rem"},position:"topright",modal:!0,draggable:!1},{default:(0,s.k6)((()=>[(0,s.bF)(Me,{class:"w-20rem"},{header:(0,s.k6)((()=>[])),title:(0,s.k6)((()=>[(0,s.eW)("Удалить выбраные Метрики?")])),subtitle:(0,s.k6)((()=>[(0,s.eW)("Удалятся только метрики данные из АСУО останутся в таблице")])),content:(0,s.k6)((()=>[(0,s.Lk)("div",Fe,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(h.value,(e=>((0,s.uX)(),(0,s.CE)("div",Le,[(0,s.Lk)("span",null,(0,i.v_)(e.id),1),(0,s.eW)(),(0,s.Lk)("span",null,(0,i.v_)(e.metricName),1)])))),256))])])),footer:(0,s.k6)((()=>[(0,s.Lk)("div",_e,[(0,s.bF)(o,{type:"button",label:"Отмена",severity:"secondary",onClick:t[25]||(t[25]=e=>(u.value=!u.value,h.value=[]))}),(0,s.bF)(o,{type:"button",label:"Удалить",onClick:t[26]||(t[26]=e=>(u.value=!1,R()))})])])),_:1})])),_:1},8,["visible"]),(0,s.bF)(Ee,{visible:m.value,"onUpdate:visible":t[32]||(t[32]=e=>m.value=e),header:"Добавить повторяемость",style:{width:"35rem"},position:"topright",modal:!0,draggable:!1},{default:(0,s.k6)((()=>[(0,s.Lk)("div",xe,[Re,(0,s.bF)(Ve,{id:"metricName",modelValue:w.value,"onUpdate:modelValue":t[28]||(t[28]=e=>w.value=e),options:(0,n.R1)(a).listCity.value,optionLabel:"NAME",placeholder:"Выбирете город",class:"flex-auto",autocomplete:"off"},null,8,["modelValue","options"])]),(0,s.Lk)("div",Te,[Ce,(0,s.bF)(d,{id:"metricName",modelValue:F.value,"onUpdate:modelValue":t[29]||(t[29]=e=>F.value=e),class:"flex-auto",autocomplete:"off"},null,8,["modelValue"])]),(0,s.Lk)("div",Ae,[(0,s.bF)(o,{type:"button",label:"Отмена",severity:"secondary",onClick:t[30]||(t[30]=e=>m.value=!m.value)}),(0,s.bF)(o,{type:"button",label:"Сохранить",onClick:t[31]||(t[31]=e=>(m.value=!1,L()))})])])),_:1},8,["visible"])])}}};const Me=(0,A.A)(Ve,[["__scopeId","data-v-9cd4e60c"]]);var Ee=Me;const Se={class:"flex flex-row justify-content-start"},Pe=(0,s.Lk)("span",{class:"font-medium text-900 block mb-2"},"Добавить статус для Проактивного сервиса",-1);var De={__name:"Entity",setup(e){const t=r(),l=((0,o.bP)(t),(0,n.KR)()),a=(0,n.KR)(),i=e=>{l.value.toggle(e)};return(0,s.sV)((async()=>{t.getProactiveStatuses()})),(e,o)=>{const r=(0,s.g2)("Column"),d=(0,s.g2)("DataTable"),c=(0,s.g2)("Button"),u=(0,s.g2)("Card"),m=(0,s.g2)("InputText"),p=(0,s.g2)("InputGroupAddon"),g=(0,s.g2)("InputGroup"),v=(0,s.g2)("OverlayPanel"),f=(0,s.g2)("Panel");return(0,s.uX)(),(0,s.Wv)(f,{header:"Статусы",toggleable:"",collapsed:"false",class:"w-full"},{default:(0,s.k6)((()=>[(0,s.Lk)("div",Se,[(0,s.bF)(u,{class:"p-3"},{title:(0,s.k6)((()=>[(0,s.eW)("Проактивный сервис")])),content:(0,s.k6)((()=>[(0,s.bF)(d,{value:(0,n.R1)(t).getStatus,size:"small",key:"ID",style:{width:"20rem"}},{default:(0,s.k6)((()=>[(0,s.bF)(r,{field:"ID"},{header:(0,s.k6)((()=>[(0,s.eW)("Ид")])),_:1}),(0,s.bF)(r,{field:"NAME"},{header:(0,s.k6)((()=>[(0,s.eW)("Статус")])),_:1})])),_:1},8,["value"])])),footer:(0,s.k6)((()=>[(0,s.bF)(c,{label:"Добавить",onClick:i})])),_:1}),(0,s.bF)(v,{ref_key:"proactive",ref:l},{default:(0,s.k6)((()=>[Pe,(0,s.bF)(g,null,{default:(0,s.k6)((()=>[(0,s.bF)(m,{value:a.value,"onUpdate:value":o[0]||(o[0]=e=>a.value=e),readonly:"",class:"w-25rem"},null,8,["value"]),(0,s.bF)(p,null,{default:(0,s.k6)((()=>[(0,s.bF)(c,{label:"Создать"})])),_:1})])),_:1})])),_:1},512)])])),_:1})}}};const Ne=De;var Ie=Ne;const Ue=(0,s.Lk)("div",{class:"flex align-items-center gap-2"},[(0,s.Lk)("span",{class:"font-bold white-space-nowrap"},"Подключение")],-1),Oe=(0,s.Lk)("div",{class:"flex align-items-center gap-2"},[(0,s.Lk)("span",{class:"font-bold white-space-nowrap"},"Проактивный Сервис")],-1),We=(0,s.Lk)("div",{class:"flex align-items-center gap-2"},[(0,s.Lk)("span",{class:"font-bold white-space-nowrap"},"Аварии / ППР")],-1),Xe=(0,s.Lk)("div",{class:"flex align-items-center gap-2"},[(0,s.Lk)("span",{class:"font-bold white-space-nowrap"},"Общие справочники")],-1),Be=(0,s.Lk)("div",{class:"flex align-items-center gap-2"},[(0,s.Lk)("span",{class:"font-bold white-space-nowrap"},"Доступ")],-1),Ke=(0,s.Lk)("p",{class:"m-0"}," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ",-1);var je={__name:"App",setup(e){return(e,t)=>{const l=(0,s.g2)("TabPanel"),a=(0,s.g2)("TabView"),i=(0,s.g2)("Toast");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(a,null,{default:(0,s.k6)((()=>[(0,s.bF)(l,null,{header:(0,s.k6)((()=>[Ue])),default:(0,s.k6)((()=>[(0,s.bF)(M)])),_:1}),(0,s.bF)(l,null,{header:(0,s.k6)((()=>[Oe])),default:(0,s.k6)((()=>[(0,s.bF)(Ee)])),_:1}),(0,s.bF)(l,null,{header:(0,s.k6)((()=>[We])),_:1}),(0,s.bF)(l,null,{header:(0,s.k6)((()=>[Xe])),default:(0,s.k6)((()=>[(0,s.bF)(Ie)])),_:1}),(0,s.bF)(l,null,{header:(0,s.k6)((()=>[Be])),default:(0,s.k6)((()=>[Ke])),_:1})])),_:1}),(0,s.bF)(i)],64)}}};const qe=je;var Ge=qe,ze=l(9119),He=l(6883),Qe=l(5120),$e=l(1265),Je=l(1414),Ye=l(3985),Ze=l(353),et=l(7123),tt=l(6846),lt=l(9267),at=l(2211),st=l(4412),it=l(2894),nt=l(1288),ot=l(5254),rt=l(930);const dt=(0,a.Ef)(Ge),ct=(0,o.Ey)();dt.use(ct),dt.use(ze.Ay),dt.use(He.A),dt.component("TabView",$e.A),dt.component("Fieldset",rt.A),dt.component("TabPanel",Je.A),dt.component("Card",Ye.A),dt.component("Button",Qe.A),dt.component("Panel",Ze.A),dt.component("DataTable",et.A),dt.component("Column",tt.A),dt.component("Dialog",lt.A),dt.component("InputText",at.A),dt.component("Textarea",st.A),dt.component("Toast",it.A),dt.component("OverlayPanel",nt.A),dt.component("Dropdown",ot.A),dt.mount("#app")}},t={};function l(a){var s=t[a];if(void 0!==s)return s.exports;var i=t[a]={exports:{}};return e[a].call(i.exports,i,i.exports,l),i.exports}l.m=e,function(){var e=[];l.O=function(t,a,s,i){if(!a){var n=1/0;for(c=0;c<e.length;c++){a=e[c][0],s=e[c][1],i=e[c][2];for(var o=!0,r=0;r<a.length;r++)(!1&i||n>=i)&&Object.keys(l.O).every((function(e){return l.O[e](a[r])}))?a.splice(r--,1):(o=!1,i<n&&(n=i));if(o){e.splice(c--,1);var d=s();void 0!==d&&(t=d)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[a,s,i]}}(),function(){l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,{a:t}),t}}(),function(){l.d=function(e,t){for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};l.O.j=function(t){return 0===e[t]};var t=function(t,a){var s,i,n=a[0],o=a[1],r=a[2],d=0;if(n.some((function(t){return 0!==e[t]}))){for(s in o)l.o(o,s)&&(l.m[s]=o[s]);if(r)var c=r(l)}for(t&&t(a);d<n.length;d++)i=n[d],l.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return l.O(c)},a=self["webpackChunkproactive_admin_pack"]=self["webpackChunkproactive_admin_pack"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=l.O(void 0,[504],(function(){return l(3064)}));a=l.O(a)})();
//# sourceMappingURL=app.2324bb2e.js.map