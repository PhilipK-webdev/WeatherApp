(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{135:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(11),i=a.n(r),o=a(35),s=a(176),l=a(33),j=a(13),u=a(137),b=a(173),d=a(2),h=Object(b.a)({link:{textDecoration:"none"},title:{fontSize:"20px",color:"white"}});var O=function(){var e=h();return Object(d.jsx)(l.b,{to:"/",className:e.link,children:Object(d.jsx)(s.a,{item:!0,children:Object(d.jsx)(u.a,{className:e.title,children:"Main"})})})},m=Object(b.a)({link:{textDecoration:"none"},title:{fontSize:"20px",color:"white"}});var x=function(){var e=m();return Object(d.jsx)(l.b,{to:"/favorite",className:e.link,children:Object(d.jsx)(s.a,{item:!0,children:Object(d.jsx)(u.a,{className:e.title,children:"Favorite"})})})},p=a(190),g=a(178),f=a(179),v=Object(b.a)({root:{justifyContent:"flex-end",flexWrap:"initial !important"},item:{marginRight:"10px",marginTop:"5px"},title:{fontSize:"25px",marginLeft:"10px",display:"flex",color:"white"},mainRoot:{flexWrap:"initial",marginTop:"10px"},toggle:{marginTop:"0.3%",color:"white"}});var y=function(e){var t=v();return Object(d.jsxs)(s.a,{container:!0,className:t.mainRoot,children:[Object(d.jsx)(s.a,{item:!0,children:Object(d.jsx)(u.a,{className:t.title,children:"WeatherApp"})}),Object(d.jsxs)(s.a,{container:!0,className:t.root,children:[Object(d.jsx)(s.a,{item:!0,className:t.item,children:Object(d.jsx)(O,{})}),Object(d.jsx)(s.a,{item:!0,className:t.item,children:Object(d.jsx)(x,{})}),Object(d.jsx)(s.a,{item:!0,className:t.toggle,children:Object(d.jsx)(g.a,{children:Object(d.jsx)(f.a,{control:Object(d.jsx)(p.a,{checked:e.checked,onChange:e.handleChange}),label:"Toggle"})})})]})]})},C=a(65),S=a.n(C),N=a(89),T=a(27),w=a(18),k=a(36),W=a.n(k),F=a(90),I=a.n(F),D=a(181),E=a(182),R=a(185),A=a(184),L=a(183),_=a(91),M=a.n(_),z=Object(b.a)({root:{maxWidth:320,marginLeft:"13.5%"},media:{height:50,width:100,marginTop:"5%"},link:{textDecoration:"none"},icon:{marginRight:"5%",marginTop:"2%",color:"#ffee58"},divBtn:{display:"flex",justifyContent:"space-between"}});var K=function(e){var t=z(),a=Object(w.c)((function(e){return e.root.isToAddFavourite}));if(void 0!==e.objCurrentWeather)return Object(d.jsx)(s.a,{item:!0,xs:12,sm:6,children:Object(d.jsxs)(D.a,{className:t.root,children:[Object(d.jsxs)(E.a,{children:[e.objCurrentWeather[1]?Object(d.jsx)(L.a,{className:t.media,image:e.objCurrentWeather[1],title:"Icon-Current Weather"}):null,Object(d.jsxs)(A.a,{children:[Object(d.jsxs)(u.a,{gutterBottom:!0,children:[Object(d.jsx)("strong",{children:" Current City:"}),Object(d.jsx)("br",{}),e.objCurrentWeather[3]]}),Object(d.jsxs)(u.a,{children:[Object(d.jsx)("strong",{children:" Current Weather:"}),Object(d.jsx)("br",{}),e.objCurrentWeather[0]]}),Object(d.jsxs)(u.a,{className:t.typography,children:[Object(d.jsx)("strong",{children:" Degree:"}),Object(d.jsx)("br",{}),e.objCurrentWeather[2]]})]})]}),Object(d.jsxs)(s.a,{item:!0,className:t.divBtn,children:[a?Object(d.jsx)(M.a,{className:t.icon}):null,Object(d.jsx)(R.a,{onClick:e.addToFavorite,children:"Add To Favorite"})]})]})})},Y=Object(b.a)({root:{height:"90%",marginTop:"5%"},span:{color:"rgb(48, 111, 140)"}});var B=function(e){var t=Y(),a=["Current Weather","Date","Min","Max"];return Object(d.jsx)(D.a,{className:t.root,children:Object(d.jsx)(E.a,{children:Object(d.jsx)(A.a,{children:Object(d.jsx)(u.a,{gutterBottom:!0,component:"h2",children:e.data.map((function(e,c){return Object(d.jsxs)(u.a,{children:[Object(d.jsx)("strong",{children:a[c]+":"}),0==c?Object(d.jsx)("img",{src:e,width:"75",height:"45"},c):Object(d.jsx)("span",{className:t.span,children:e},c)]},c)}))})})})})},P="SET_CURRENT_WEATHER",U="SET_CURRENT_FORECAST",J="DELETE_CITY ",G="CURRENT_SEARCH_CITY",q="IS_TO_ADD_FAVOURITE",H="SET_KEY_SEARCH",V=function(e){return{type:P,payload:e}},X=function(e){return console.log(e),{type:U,payload:e}},Z=function(e){return{type:G,payload:e}},$=function(e){return{type:J,payload:e}},Q=function(e){return{type:q,payload:e}},ee=function(e){return{type:H,payload:e}},te=a(16),ae=a(188),ce=a(186),ne=a(189),re=Object(b.a)({btn:{background:"white"}});var ie=function(e){var t=re();return Object(d.jsx)(s.a,{container:!0,justifyContent:"center",children:Object(d.jsx)(s.a,{item:!0,children:Object(d.jsx)(R.a,{variant:"outlined",color:"primary",size:"large",onClick:e.submit,className:t.btn,disabled:!!e.validString,children:"Submit"})})})},oe=Object(b.a)({textField:{background:"white"},form:{width:"80%"},autocompleteTag:{marginBottom:"2%",marginLeft:"10%"},div:{marginTop:"25px"}});var se=function(e){var t=oe();return Object(d.jsxs)(s.a,{container:!0,children:[Object(d.jsx)(s.a,{item:!0,xs:12,sm:10,children:Object(d.jsx)(ce.a,{variant:"outlined",className:t.form,children:Object(d.jsx)(ne.a,{options:e.arrayCity,id:"controlled-demo",value:e.searchCity,getOptionLabel:function(e){return e},onKeyUp:e.onKeyPress,onChange:e.onSave,renderInput:function(e){return Object(d.jsx)(ae.a,Object(te.a)(Object(te.a)({},e),{},{margin:"normal",variant:"outlined",className:t.textField}))},className:t.autocompleteTag})})}),Object(d.jsx)(s.a,{item:!0,xs:!0,sm:2,className:t.div,children:Object(d.jsx)(ie,{submit:e.submit,validString:e.validString})})]})};var le=function(){var e=Object(w.b)(),t=215854,a="xq5R70tqcmEqsSlGezfLDjWWlr6AzwG2",n=Object(c.useState)([]),r=Object(o.a)(n,2),i=r[0],l=r[1],j=Object(c.useState)(""),u=Object(o.a)(j,2),b=u[0],h=u[1],O=Object(c.useState)(),m=Object(o.a)(O,2),x=m[0],p=m[1],g=Object(c.useState)(!0),f=Object(o.a)(g,2),v=f[0],y=f[1],C=Object(c.useState)([]),k=Object(o.a)(C,2),F=k[0],D=k[1],E=Object(w.c)((function(e){return e.root.currentSearchCity})),R=Object(w.c)((function(e){return e.root.currentWeather})),A=Object(w.c)((function(e){return e.root.currentForecast})),L=Object(w.c)((function(e){return e.root.setKeySearch}));Object(c.useEffect)((function(){if(localStorage.length>=1){var t=JSON.parse(window.localStorage.getItem("city"));D(Object(T.a)(t)),e($(Object(T.a)(t)))}E?P(null,E):_()}),[]);var _=function(){var e="https://dataservice.accuweather.com/currentconditions/v1/".concat(t,"?apikey=").concat(a),c="https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(t,"?apikey=").concat(a),n=W.a.get(e),r=W.a.get(c);U(n,r,"Tel Aviv")},M=function(e){var t=new RegExp(/^[a-zA-Z0-9- ]*$/);return!(""===e||/\d/.test(e)||!t.test(e))},z=function(){var e=Object(N.a)(S.a.mark((function e(t){var c,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=".concat(a,"&q=").concat(t),e.next=3,W()(c);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(e){for(var t=[],a=[],c=0;c<e.data.length;c++)t[c]=Object.values(e.data[c]);for(var n=0;n<t.length;n++)a[n]=t[n][4];return a},P=function(c){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";e(Q(!1)),c&&c.preventDefault();var r=b;n&&(r=n),e(Z(r));var i="https://dataservice.accuweather.com/currentconditions/v1/".concat(""===L?t:parseInt(L),"?apikey=").concat(a),o="https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(""===L?t:parseInt(L),"?apikey=").concat(a),s=W.a.get(i),l=W.a.get(o);U(s,l,r),""!==b&&(h(""),y(!0))},U=function(t,a,c){W.a.all([t,a]).then(W.a.spread((function(){var t=arguments.length<=0?void 0:arguments[0],a=arguments.length<=1?void 0:arguments[1];t.data[0].WeatherIcon<10&&(t.data[0].WeatherIcon="0".concat(t.data[0].WeatherIcon));var n="https://developer.accuweather.com/sites/default/files/".concat(t.data[0].WeatherIcon,"-s.png"),r=[];r.push(t.data[0].WeatherText),r.push(n),r.push(t.data[0].Temperature.Metric.Value+t.data[0].Temperature.Metric.Unit),r.push(c),e(V([].concat(r)));for(var i=a.data.DailyForecasts.map((function(e){return{IconPhrase:"https://developer.accuweather.com/sites/default/files/".concat(e.Night.Icon<10?"0"+e.Night.Icon:e.Night.Icon,"-s.png"),date:I.a.utc(e.Date).format("MMMM Do YYYY"),temptureMin:e.Temperature.Minimum.Value+e.Temperature.Minimum.Unit,temptureMax:e.Temperature.Maximum.Value+" "+e.Temperature.Maximum.Unit}})),o=[],s=0;s<5;s++)o[s]=Object.values(i[s]);e(X([].concat(o)))}))).catch((function(e){return console.log(e)}))};return Object(d.jsxs)(s.a,{container:!0,children:[Object(d.jsx)(se,{arrayCity:i,searchCity:b,onKeyPress:function(t){h(t.target.value);var a=t.target.value;(y(!0),a.length>1)&&(M(a)?(y(!1),z(a).then((function(t){var a;p(t.data[0].Key),e(ee(x));var c=Y(t);a=Object(T.a)(c),l(Object(T.a)(a))})).catch((function(e){return console.log(e)}))):y(!0))},onSave:function(e,t){h(t)},submit:P,validString:v}),Object(d.jsx)(s.a,{container:!0,justifyContent:"center",children:Object(d.jsx)(s.a,{item:!0,sx:12,sm:12,children:Object(d.jsx)(K,{objCurrentWeather:R,addToFavorite:function(a){a.preventDefault();var c={ID:void 0===x?t:L,name:E||R[3],weather:R[0],tempture:R[2]};F.push(c),e($(Object(T.a)(F))),e(Q(!0)),window.localStorage.setItem("city",JSON.stringify(Object(T.a)(F)))}})})}),Object(d.jsx)(s.a,{container:!0,justifyContent:"center",children:void 0!=A?A.map((function(e,t){return Object(d.jsx)(s.a,{item:!0,xs:4,sm:2,style:{marginLeft:"1%"},children:Object(d.jsx)(B,{data:e},t)},t)})):null})]})};var je=function(){return Object(d.jsx)(s.a,{container:!0,children:Object(d.jsx)(s.a,{item:!0,xs:!0,children:Object(d.jsx)(le,{})})})};var ue=function(){return Object(d.jsx)(s.a,{container:!0,justifyContent:"center",children:Object(d.jsx)(s.a,{item:!0,children:Object(d.jsx)(je,{})})})},be=a(66),de=a.n(be),he=Object(b.a)({root:{width:"fit-content",marginTop:"10%"},link:{textDecoration:"none"},btnsGrid:{display:"flex",justifyContent:"center"},btn:{marginLeft:"2%"},headline:{fontSize:"20px",fontFamily:"serif"},typography:{fontFamily:"serif",fontSize:"17px"}});var Oe=function(e){var t=he(),a=Object(w.b)();return Object(d.jsx)(s.a,{item:!0,xs:12,sm:6,children:Object(d.jsxs)(D.a,{className:t.root,children:[Object(d.jsx)(E.a,{children:Object(d.jsxs)(A.a,{children:[Object(d.jsxs)(u.a,{gutterBottom:!0,className:t.headline,children:[Object(d.jsx)("strong",{children:" Current City:"}),Object(d.jsx)(u.a,{children:e.objLocal.name})]}),Object(d.jsxs)(u.a,{className:t.typography,children:[Object(d.jsx)("strong",{children:" Current Weather:"}),Object(d.jsx)(u.a,{children:e.objLocal.weather})]}),Object(d.jsxs)(u.a,{className:t.typography,children:[Object(d.jsx)("strong",{children:" Degree:"}),Object(d.jsx)(u.a,{children:e.objLocal.tempture})]})]})}),Object(d.jsxs)(s.a,{item:!0,className:t.btnsGrid,children:[Object(d.jsx)("button",{onClick:function(e){e.preventDefault();var t=parseInt(e.target.attributes.getNamedItem("data-id").value),c=JSON.parse(window.localStorage.getItem("city"));c.splice(t,1),window.localStorage.setItem("city",JSON.stringify(c)),a($(Object(T.a)(c)))},className:de.a.button4,"data-id":e.index,children:"Delete"}),Object(d.jsx)(l.b,{to:"/",className:t.link,children:Object(d.jsx)("button",{onClick:function(){a(Z(e.objLocal.name)),a(ee(e.objLocal.ID)),a(Q(!1))},className:de.a.button5,children:"Main Page"})})]})]})})},me=Object(b.a)({root:{marginTop:"2%"},title:{color:"#306F8C",fontFamily:"Raleway",fontSize:"35px",fontFeight:"800",lineHeight:"72px",margin:"0 0 24px",textTransform:"uppercase"},div:{marginTop:"5%",display:"flex",marginRight:"13%",marginLeft:"2%"},messageContainer:{justifyContent:"center"},message:{marginTop:"10%"}});var xe=function(){var e=me(),t=Object(w.c)((function(e){return e.root.localStorageArrayCity})),a=Object(w.b)();return Object(c.useEffect)((function(){if(localStorage.length>0){var e=JSON.parse(window.localStorage.getItem("city"));a($(Object(T.a)(e)))}}),[]),Object(d.jsxs)(s.a,{container:!0,children:[Object(d.jsx)(s.a,{container:!0,justifyContent:"center",className:e.root,children:Object(d.jsx)(s.a,{item:!0,children:Object(d.jsx)(u.a,{variant:"h6",color:"primary",className:e.title,children:"Welcome to Favourite Page"})})}),t.map((function(t,a){return Object(d.jsxs)(s.a,{item:!0,xs:4,sm:3,className:e.div,children:[Object(d.jsx)(Oe,{objLocal:t,index:a,style:{marginLeft:"14%"}})," "]})}))]})},pe=(a(135),Object(b.a)({rootNav:{backgroundColor:"#306F8C"},grey:{backgroundColor:"#e3e3e3",height:"110vh"},black:{backgroundColor:"black",height:"110vh"}}));var ge=function(){var e=pe(),t=Object(c.useState)(!1),a=Object(o.a)(t,2),n=a[0],r=a[1];return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("div",{className:n?e.black:e.grey,children:Object(d.jsx)(s.a,{item:!0,xs:12,children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(s.a,{container:!0,className:e.rootNav,children:Object(d.jsx)(y,{handleChange:function(){r((function(e){return!e}))},checked:n})}),Object(d.jsxs)(j.d,{children:[Object(d.jsx)(j.a,{from:"/Philip-Kouchner-07-20-2021",to:"/"}),Object(d.jsx)(j.b,{exact:!0,path:"/",children:Object(d.jsx)(ue,{})}),Object(d.jsx)(j.b,{path:"/favorite",children:Object(d.jsx)(xe,{})})]})]})})})})},fe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,192)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),r(e),i(e)}))},ve=a(50),ye=a(93),Ce={currentWeather:[],currentForecast:[],localStorageArrayCity:[],currentSearchCity:"",isToAddFavourite:!1,setKeySearch:""},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(te.a)(Object(te.a)({},e),{},{currentWeather:t.payload});case U:return Object(te.a)(Object(te.a)({},e),{},{currentForecast:t.payload});case J:return Object(te.a)(Object(te.a)({},e),{},{localStorageArrayCity:t.payload});case G:return Object(te.a)(Object(te.a)({},e),{},{currentSearchCity:t.payload});case q:return Object(te.a)(Object(te.a)({},e),{},{isToAddFavourite:t.payload});case H:return Object(te.a)(Object(te.a)({},e),{},{setKeySearch:t.payload});default:return e}},Ne=Object(ve.combineReducers)({root:Se}),Te=Object(ve.createStore)(Ne,Object(ye.composeWithDevTools)());i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(w.a,{store:Te,children:Object(d.jsx)(ge,{})})}),document.getElementById("root")),fe()},66:function(e,t,a){e.exports={button4:"mystyle_button4__2bbY8",button5:"mystyle_button5__3GXFY"}}},[[136,1,2]]]);
//# sourceMappingURL=main.ae13f42b.chunk.js.map