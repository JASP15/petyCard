(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{296:function(t,e,n){var content=n(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(81).default)("0d541ff4",content,!0,{sourceMap:!1})},297:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},298:function(t,e,n){t.exports=n.p+"img/descarga2.5548fdf.png"},306:function(t,e,n){"use strict";n(296)},307:function(t,e,n){var o=n(80),r=n(297),l=n(298),c=o((function(i){return i[1]})),d=r(l);c.push([t.i,".background-cust[data-v-085a936e]{background-image:url("+d+");background-position:0 86%}",""]),c.locals={},t.exports=c},309:function(t,e,n){"use strict";n.r(e);n(29);var o=n(10),r=(n(63),{data:function(){return{name:"",mail:"",phone:"",company:"",rol:""}},methods:{onSubmit:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$post("http://backserver.petycard.com/api/company",{company_name:t.company,company_rol:t.rol,register_name:t.name,register_phone:t.phone,register_email:t.name});case 3:n=e.sent,t.$refs.formContact.reset(),alert(n.detail?n.detail:"Se ha registrado correctamente tu información"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),t.$refs.formContact.reset(),alert("Ha ocurrido un error, por favor inténtalo más tarde");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}}),l=(n(306),n(21)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"background-cust",attrs:{id:"contacto"}},[e("div",{staticClass:"pt-40 pb-10"},[e("div",{staticClass:"container mx-auto"},[e("div",{staticClass:"w-2/3 lg:w-1/2 block mx-auto"},[t._m(0),t._v(" "),e("div",{staticClass:"w-full pt-10"},[e("div",{staticClass:"relative"},[e("div",{staticClass:"w-full"},[e("form",{ref:"formContact",staticClass:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-opacity-20"},[e("div",{staticClass:"mb-4"},[e("label",{staticClass:"block text-white text-sm font-bold mb-2",attrs:{for:"username"}},[t._v("\n                                    Nombre \n                                    ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"username",type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"mb-4"},[e("label",{staticClass:"block text-white text-sm font-bold mb-2",attrs:{for:"username2"}},[t._v("\n                                    Correo\n                                    ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.mail,expression:"mail"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"username2",type:"text"},domProps:{value:t.mail},on:{input:function(e){e.target.composing||(t.mail=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"mb-4"},[e("label",{staticClass:"block text-white text-sm font-bold mb-2",attrs:{for:"username3"}},[t._v("\n                                    Teléfono\n                                    ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"username3",type:"text"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"mb-4"},[e("label",{staticClass:"block text-white text-sm font-bold mb-2",attrs:{for:"username4"}},[t._v("\n                                    Nombre de la compañía\n                                    ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.company,expression:"company"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"username4",type:"text"},domProps:{value:t.company},on:{input:function(e){e.target.composing||(t.company=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"mb-4"},[e("label",{staticClass:"block text-white text-sm font-bold mb-2",attrs:{for:"username5"}},[t._v("\n                                    Giro de la empresa\n                                    ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.rol,expression:"rol"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"username5",type:"text"},domProps:{value:t.rol},on:{input:function(e){e.target.composing||(t.rol=e.target.value)}}})]),t._v(" "),e("button",{staticClass:"bg-primary-900 rounded-2xl px-8 py-3 text-white font-semibold text-lg hover:bg-primary-700 transition-all duration-300",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[t._v("Enviar")])])])])])])])])])}),[function(){var t=this,e=t._self._c;return e("p",{staticClass:"text-white text-4xl font-bold text-center"},[t._v("Comienza  desde "),e("span",{staticClass:"text-primary"},[t._v("hoy")]),t._v(".")])}],!1,null,"085a936e",null);e.default=component.exports}}]);