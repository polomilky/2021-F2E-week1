(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"17b3":function(t,e,a){},"17e3":function(t,e,a){},"1a9b":function(t,e,a){"use strict";a("17e3")},"88ab":function(t,e,a){"use strict";a("c02c")},c02c:function(t,e,a){},d8a4:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[null!==this.homeselect.location?a("ViewDetailsHeader",{attrs:{gettitle:this.locationTypeName,getHomeSelect:t.homeselect},on:{listenToChildEvent:t.getDatafromChild}}):t._e(),0!==this.detailDatas.length?a("ViewDetails",{attrs:{gettitle:this.locationTypeName,getData:this.detailDatas}}):a("HomeNoSection",{attrs:{sectionType:this.locationTypeName}})],1)},s=[],n=(a("99af"),a("6c2d")),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.setHeader__sty},[i("div",{staticClass:"header__bg"},[i("div",{staticClass:"logo__sty"},[i("h1",{staticClass:"white--text"},[i("a",{on:{click:t.toHome}},[i("img",{staticClass:"logoImg__sty",attrs:{src:a("cf05")}}),i("font",{staticClass:"ml-4 logoText__sty"},[t._v("TaiFun旅遊網")])],1)])]),i("div",{staticClass:"title__sty"},[i("p",{staticClass:"mb-7"},[t._v("尋找"+t._s(t.title.locationName))]),i("p",[t._v(t._s(t.title.locationType))]),i("div",{staticClass:"mb-8 keyword__sty"},[i("v-text-field",{staticClass:"pa-0 input__sty",attrs:{label:"請輸入關鍵字",outlined:"",solo:"",dense:"","hide-details":"auto","append-icon":"mdi-magnify"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchKey.apply(null,arguments)}},model:{value:t.keywordText,callback:function(e){t.keywordText=e},expression:"keywordText"}}),i("v-btn",{staticClass:"ml-2 pa-6 filterBtn__sty",attrs:{depressed:""},on:{click:function(e){t.show.dialog=!0}}},[i("v-icon",{attrs:{left:"",color:"white"}},[t._v(" mdi-filter ")]),t._v(" 篩選 ")],1),i("v-dialog",{staticClass:"dialog__sty",model:{value:t.show.dialog,callback:function(e){t.$set(t.show,"dialog",e)},expression:"show.dialog"}},[i("v-card",{staticClass:"pa-5"},[i("v-card-title",{staticClass:"pb-0"},[t._v("分類")]),i("v-row",[i("v-card-title",[i("v-col",{attrs:{col:"6"}},[i("v-select",{attrs:{items:t.typeItems,"item-text":"name","item-value":"value",label:"分類",dense:"",outlined:"","hide-details":"auto","return-object":""},on:{change:t.getSelectType},model:{value:t.selectItem,callback:function(e){t.selectItem=e},expression:"selectItem"}})],1)],1)],1),i("v-divider"),i("v-row",{staticClass:"mt-0"},[i("v-col",{staticClass:"pb-0",attrs:{col:"6"}},[i("v-card-title",{staticClass:"pb-0"},[t._v("北部地區")]),i("v-card-title",{staticClass:"pb-0"},[i("v-select",{attrs:{items:t.countryNorthItems,"item-text":"name","item-value":"value",label:"選擇縣市",dense:"",outlined:"","hide-details":"auto","return-object":""},on:{change:t.getSelectCountry},model:{value:t.selectCountey,callback:function(e){t.selectCountey=e},expression:"selectCountey"}})],1)],1),i("v-col",{staticClass:"pb-0",attrs:{col:"6"}},[i("v-card-title",{staticClass:"pb-0"},[t._v("中部地區")]),i("v-card-title",{staticClass:"pb-0"},[i("v-select",{attrs:{items:t.countryCenterItems,"item-text":"name","item-value":"value",label:"選擇縣市",dense:"",outlined:"","hide-details":"auto","return-object":""},on:{change:t.getSelectCountry},model:{value:t.selectCountey,callback:function(e){t.selectCountey=e},expression:"selectCountey"}})],1)],1)],1),i("v-row",{staticClass:"mt-0"},[i("v-col",{staticClass:"pb-0",attrs:{col:"6"}},[i("v-card-title",{staticClass:"pb-0"},[t._v("南部地區")]),i("v-card-title",{staticClass:"pb-0"},[i("v-select",{attrs:{items:t.countrySouthItems,"item-text":"name","item-value":"value",label:"選擇縣市",dense:"",outlined:"","hide-details":"auto","return-object":""},on:{change:t.getSelectCountry},model:{value:t.selectCountey,callback:function(e){t.selectCountey=e},expression:"selectCountey"}})],1)],1),i("v-col",{staticClass:"pb-0",attrs:{col:"6"}},[i("v-card-title",{staticClass:"pb-0"},[t._v("東部地區")]),i("v-card-title",{staticClass:"pb-0"},[i("v-select",{attrs:{items:t.countryEastItems,"item-text":"name","item-value":"value",label:"選擇縣市",dense:"",outlined:"","hide-details":"auto","return-object":""},on:{change:t.getSelectCountry},model:{value:t.selectCountey,callback:function(e){t.selectCountey=e},expression:"selectCountey"}})],1)],1)],1),i("v-row",{staticClass:"mt-0"},[i("v-col",{attrs:{col:"6"}},[i("v-card-title",{staticClass:"pb-0"},[t._v("離島地區")]),i("v-card-title",[i("v-select",{attrs:{items:t.countryIslandItems,"item-text":"name","item-value":"value",label:"選擇縣市",dense:"",outlined:"","hide-details":"auto","return-object":""},on:{change:t.getSelectCountry},model:{value:t.selectCountey,callback:function(e){t.selectCountey=e},expression:"selectCountey"}})],1)],1),i("v-col",{attrs:{col:"6"}})],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{staticClass:"white--text searchFilterBtn__sty",on:{click:t.search}},[t._v(" 搜尋 ")]),i("v-spacer")],1)],1)],1),i("v-dialog",{staticClass:"Mdialog__sty",attrs:{fullscreen:""},model:{value:t.show.Mdialog,callback:function(e){t.$set(t.show,"Mdialog",e)},expression:"show.Mdialog"}},[i("v-card",{staticClass:"pa-5"},[i("v-card-title",{staticClass:"pb-0"},[t._v("分類")]),i("v-card-title",[i("v-select",{attrs:{items:t.typeItems,"item-text":"name","item-value":"value",label:"分類",dense:"",outlined:"","hide-details":"auto","return-object":""},on:{change:t.getSelectType},model:{value:t.selectItem,callback:function(e){t.selectItem=e},expression:"selectItem"}})],1),i("v-card-title",{staticClass:"pb-0"},[t._v("北部地區")]),i("v-card-title",{staticClass:"pb-0"},[i("v-select",{attrs:{items:t.countryNorthItems,"item-text":"name","item-value":"value",label:"選擇縣市",dense:"",outlined:"","hide-details":"auto","return-object":""},on:{change:t.getSelectCountry},model:{value:t.selectCountey,callback:function(e){t.selectCountey=e},expression:"selectCountey"}})],1),i("v-card-title",{staticClass:"pb-0"},[t._v("中部地區")]),i("v-card-title",{staticClass:"pb-0"},[i("v-select",{attrs:{items:t.countryCenterItems,"item-text":"name","item-value":"value",label:"選擇縣市",dense:"",outlined:"","hide-details":"auto","return-object":""},on:{change:t.getSelectCountry},model:{value:t.selectCountey,callback:function(e){t.selectCountey=e},expression:"selectCountey"}})],1),i("v-card-title",{staticClass:"pb-0"},[t._v("南部地區")]),i("v-card-title",{staticClass:"pb-0"},[i("v-select",{attrs:{items:t.countrySouthItems,"item-text":"name","item-value":"value",label:"選擇縣市",dense:"",outlined:"","hide-details":"auto","return-object":""},on:{change:t.getSelectCountry},model:{value:t.selectCountey,callback:function(e){t.selectCountey=e},expression:"selectCountey"}})],1),i("v-card-title",{staticClass:"pb-0"},[t._v("東部地區")]),i("v-card-title",{staticClass:"pb-0"},[i("v-select",{attrs:{items:t.countryEastItems,"item-text":"name","item-value":"value",label:"選擇縣市",dense:"",outlined:"","hide-details":"auto","return-object":""},on:{change:t.getSelectCountry},model:{value:t.selectCountey,callback:function(e){t.selectCountey=e},expression:"selectCountey"}})],1),i("v-card-title",{staticClass:"pb-0"},[t._v("離島地區")]),i("v-card-title",[i("v-select",{attrs:{items:t.countryIslandItems,"item-text":"name","item-value":"value",label:"選擇縣市",dense:"",outlined:"","hide-details":"auto","return-object":""},on:{change:t.getSelectCountry},model:{value:t.selectCountey,callback:function(e){t.selectCountey=e},expression:"selectCountey"}})],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{staticClass:"white--text searchFilterBtn__sty",on:{click:t.search}},[t._v(" 搜尋 ")]),i("v-spacer")],1)],1)],1),i("v-btn",{staticClass:"ml-2 pa-0 filterMBtn__sty",attrs:{depressed:""},on:{click:function(e){t.show.Mdialog=!0}}},[i("v-icon",{attrs:{color:"white"}},[t._v("mdi-filter")])],1)],1),i("p",{staticClass:"mt-n8 mb-0 pr-1 filterMText__sty"},[t._v("篩選")]),i("v-btn",{staticClass:"py-6 px-12 white--text searchBtn__sty",attrs:{depressed:""},on:{click:t.searchKey}},[t._v(" 搜尋 ")])],1)])])},c=[],o=(a("b0c0"),a("498a"),{name:"ViewDetailsHeader",props:["gettitle","getHomeSelect"],data:function(){return{typeItems:[{name:"熱門景點",value:"ScenicSpot"},{name:"熱門美食",value:"Restaurant"},{name:"近期活動",value:"Activity"}],countryNorthItems:[{name:"基隆市",value:"Keelung"},{name:"臺北市",value:"Taipei"},{name:"新北市",value:"NewTaipei"},{name:"桃園市",value:"Taoyuan"},{name:"新竹縣",value:"HsinchuCounty"},{name:"新竹市",value:"Hsinchu"}],countryCenterItems:[{name:"苗栗縣",value:"MiaoliCounty"},{name:"台中市",value:"Taichung"},{name:"彰化縣",value:"ChanghuaCounty"},{name:"南投縣",value:"NantouCounty"},{name:"雲林縣",value:"YunlinCounty"}],countrySouthItems:[{name:"嘉義縣",value:"ChiayiCounty"},{name:"嘉義市",value:"Chiayi"},{name:"臺南市",value:"Tainan"},{name:"高雄市",value:"Kaohsiung"},{name:"屏東縣",value:"PingtungCounty"}],countryEastItems:[{name:"宜蘭縣",value:"YilanCounty"},{name:"花蓮縣",value:"HualienCounty"},{name:"臺東縣",value:"TaitungCounty"}],countryIslandItems:[{name:"連江縣",value:"LienchiangCounty"},{name:"金門縣",value:"KinmenCounty"},{name:"澎湖縣",value:"PenghuCounty"}],show:{dialog:!1,Mdialog:!1},selectItem:this.getHomeSelect.locationType,selectCountey:this.getHomeSelect.location,getSearchData:[],keywordText:null,title:{locationName:"臺灣",locationType:this.gettitle}}},computed:{setHeader__sty:function(){return"熱門景點"===this.title.locationType?"header__sty header__view__sty":"熱門美食"===this.title.locationType?"header__sty header__restaurant__sty":"近期活動"===this.title.locationType?"header__sty header__activity__sty":"header__sty"}},methods:{init:function(){this.title.locationName=sessionStorage.getItem("locationName")},getSelectCountry:function(t){this.selectCountey=t.value,this.title.locationName=t.name.substr(0,2)},getSelectType:function(t){this.selectItem=t.value,this.title.locationType=t.name},getAuthorizationHeader:function(){var t="c73fee44c4c940f5a8d8bab640a4e5bd",e="Skml7ofY7at5RaJdUQ50e5A7J6g",a=(new Date).toGMTString(),i=new n["a"]("SHA-1","TEXT");i.setHMACKey(e,"TEXT"),i.update("x-date: "+a);var s=i.getHMAC("B64"),l='hmac username="'.concat(t,'",algorithm="hmac-sha1",headers="x-date",signature="').concat(s,'"');return{Authorization:l,"X-Date":a}},getData:function(){var t=this;this.axios.get("https://ptx.transportdata.tw/MOTC/v2/Tourism/".concat(this.selectItem,"/").concat(this.selectCountey,"?").concat(this.apiPath,"&$format=JSON"),{headers:this.getAuthorizationHeader()}).then((function(e){t.getSearchData=e.data,t.$emit("listenToChildEvent",t.getSearchData,t.title.locationType)})).catch((function(t){alert(t.response.data.message)}))},search:function(){this.apiPath="",this.getData(),this.show.dialog=!1,this.show.Mdialog=!1},searchKey:function(){if(null===this.keywordText)return!1;var t=this.keywordText.trim();if(!t)return this.apiPath="",!1;this.apiPath="$filter=contains(Name%2C'".concat(t,"')&"),this.getData(),this.keywordText=null},toHome:function(){this.$router.push("/")}},mounted:function(){this.init()}}),r=o,u=(a("88ab"),a("1a9b"),a("2877")),h=a("6544"),d=a.n(h),v=a("8336"),m=a("b0af"),p=a("99d9"),g=a("62ad"),y=a("169a"),b=a("ce7e"),f=a("132d"),C=a("0fd9"),_=a("b974"),x=a("2fa4"),T=a("8654"),w=Object(u["a"])(r,l,c,!1,null,"1a77bc6c",null),S=w.exports;d()(w,{VBtn:v["a"],VCard:m["a"],VCardActions:p["a"],VCardTitle:p["c"],VCol:g["a"],VDialog:y["a"],VDivider:b["a"],VIcon:f["a"],VRow:C["a"],VSelect:_["a"],VSpacer:x["a"],VTextField:T["a"]});var I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"my-8 section__sty"},[i("h1",{staticClass:"title__sty"},[t._v(" "+t._s(t.gettitle)+" "),i("v-icon",{staticClass:"icon__sty"},[t._v(" mdi-fire ")])],1),i("v-row",{staticClass:"mt-12 mb-10"},t._l(t.visiblePages,(function(e){return i("v-col",{key:e.ID,staticClass:"col__sty",attrs:{xl:"3",lg:"4",md:"4",sm:"6",xs:"6",align:"center",justify:"center"}},[i("v-card",{staticClass:"pb-5 card__sty"},[0!==Object.keys(e.Picture).length?i("v-img",{staticClass:"img__sty",attrs:{"lazy-src":"https://picsum.photos/id/11/10/6",src:e.Picture.PictureUrl1}}):i("v-img",{staticClass:"img__sty",attrs:{src:a("b3fe")}}),i("v-card-title",{staticClass:"cardTitle__sty"},[i("v-icon",{staticClass:"cardIcon__sty",attrs:{left:""}},[t._v("mdi-map-marker")]),t._v(" "+t._s(e.City)+" ")],1),i("v-card-text",{staticClass:"cardSubTitle__sty"},[i("p",[t._v(t._s(e.Name))]),i("p",[t._v("開放時間"),i("br"),t._v(t._s(e.OpenTime))])]),i("v-card-actions",[i("v-spacer"),i("v-btn",{staticClass:"white--text cardBtn__sty",on:{click:function(a){return t.goContextDetail(e.ID)}}},[t._v(" 查看詳情 ")]),i("v-spacer")],1)],1)],1)})),1),i("v-pagination",{attrs:{length:t.perPage,"total-visible":10},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)},k=[],D=(a("fb6a"),{name:"ViewPointSection",props:["gettitle","getData"],data:function(){return{page:1,perPage:Math.ceil(this.getData.length/9)}},computed:{visiblePages:function(){var t=this.getData;return t.slice(9*(this.page-1),9*this.page)}},methods:{goContextDetail:function(t){this.$router.push("/contextdetail?location=".concat(t))}},mounted:function(){},watch:{getData:function(t){this.perPage=Math.ceil(t.length/9)}}}),$=D,V=(a("de65"),a("a523")),N=a("adda"),A=a("2909"),H=a("5530"),j=(a("a9e3"),a("d3b7"),a("25f0"),a("d81d"),a("17b3"),a("9d26")),M=a("dc22"),P=a("a9ad"),L=a("de2c"),O=a("7560"),B=a("58df"),E=Object(B["a"])(P["a"],Object(L["a"])({onVisible:["init"]}),O["a"]).extend({name:"v-pagination",directives:{Resize:M["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(H["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t)return[];var e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var a=e%2===0?1:0,i=Math.floor(e/2),s=this.length-i+1+a;if(this.value>i&&this.value<s){var n=1,l=this.length,c=this.value-i+2,o=this.value+i-2-a,r=c-1===n+1?2:"...",u=o+1===l-1?o+1:"...";return[1,r].concat(Object(A["a"])(this.range(c,o)),[u,this.length])}if(this.value===i){var h=this.value+i-1-a;return[].concat(Object(A["a"])(this.range(1,h)),["...",this.length])}if(this.value===s){var d=this.value-i+1;return[1,"..."].concat(Object(A["a"])(this.range(d,this.length)))}return[].concat(Object(A["a"])(this.range(1,i)),["..."],Object(A["a"])(this.range(s,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var a=[];t=t>0?t:1;for(var i=t;i<=e;i++)a.push(i);return a},genIcon:function(t,e,a,i,s){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":a},attrs:{disabled:a,type:"button","aria-label":s},on:a?{}:{click:i}},[t(j["a"],[e])])])},genItem:function(t,e){var a=this,i=e===this.value&&(this.color||"primary"),s=e===this.value,n=s?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(i,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":s,"aria-label":this.$vuetify.lang.t(n,e)},on:{click:function(){return a.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(a,i){return t("li",{key:i},[isNaN(Number(a))?t("span",{class:"v-pagination__more"},[a.toString()]):e.genItem(t,a)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}}),z=Object(u["a"])($,I,k,!1,null,"3d92b1e3",null),R=z.exports;d()(z,{VBtn:v["a"],VCard:m["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:p["c"],VCol:g["a"],VContainer:V["a"],VIcon:f["a"],VImg:N["a"],VPagination:E,VRow:C["a"],VSpacer:x["a"]});var J=a("4043"),K={name:"ViewDetail",components:{ViewDetailsHeader:S,ViewDetails:R,HomeNoSection:J["a"]},data:function(){return{locationTypeName:null,detailDatas:[],homeselect:{locationType:null,location:null}}},methods:{getAuthorizationHeader:function(){var t="c73fee44c4c940f5a8d8bab640a4e5bd",e="Skml7ofY7at5RaJdUQ50e5A7J6g",a=(new Date).toGMTString(),i=new n["a"]("SHA-1","TEXT");i.setHMACKey(e,"TEXT"),i.update("x-date: "+a);var s=i.getHMAC("B64"),l='hmac username="'.concat(t,'",algorithm="hmac-sha1",headers="x-date",signature="').concat(s,'"');return{Authorization:l,"X-Date":a}},getData:function(){var t=this;switch(this.homeselect.locationType=this.$route.query.type,this.homeselect.location=this.$route.query.country,this.homeselect.locationType){case"ScenicSpot":this.locationTypeName="熱門景點";break;case"Restaurant":this.locationTypeName="熱門美食";break;case"Activity":this.locationTypeName="近期活動";break;default:alert("無此類別"),this.$router.push("/")}this.axios.get("https://ptx.transportdata.tw/MOTC/v2/Tourism/".concat(this.homeselect.locationType,"/").concat(this.homeselect.location,"?$format=JSON"),{headers:this.getAuthorizationHeader()}).then((function(e){t.detailDatas=e.data})).catch((function(t){alert(t.response.data.message)}))},getDatafromChild:function(t,e){this.detailDatas=t,this.locationTypeName=e}},mounted:function(){this.getData()}},X=K,F=Object(u["a"])(X,i,s,!1,null,null,null);e["default"]=F.exports},de65:function(t,e,a){"use strict";a("f2c6")},f2c6:function(t,e,a){}}]);
//# sourceMappingURL=about.3f005a51.js.map