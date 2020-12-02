/**
 * Bundle of AWEMA @awema-pl/module-modal-window
 * Generated: 2020-11-25 23:26:33
 * Version: 1.1.3
 */

import e from"@awema-pl/utilities/resources/vue/router-utils";function t(e,t,n){if(null==(s=e)||"object"!=typeof s)return console.warn("get supports only objects, ",e," given"),n;var s;t=function(e){return e.split(/(?:\]?\.|\[['"]?|['"]?\])/g).filter(e=>""!==e)}(t);let o,i=e;for(;t.length&&i;){let e=t.shift();t.length?i=i[e]:o=i[e]}return void 0!==o?o:n}var n={props:{lang:Object},computed:{$lang:function(){return{...t(this.$options,"_config.lang",{}),...this.lang}}}};let s=0;var o=function(e,t,n,s,o,i,a,l,r,d){"boolean"!=typeof a&&(r=l,l=a,a=!1);var u,c="function"==typeof n?n.options:n;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,o&&(c.functional=!0)),s&&(c._scopeId=s),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,r(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=u):t&&(u=a?function(){t.call(this,d(this.$root.$options.shadowRoot))}:function(e){t.call(this,l(e))}),u)if(c.functional){var h=c.render;c.render=function(e,t){return u.call(t),h(e,t)}}else{var m=c.beforeCreate;c.beforeCreate=m?[].concat(m,u):[u]}return n}({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"modal-transition-"+e.theme},on:{"before-enter":function(t){e.showContent=!0,e._addBodyClass("has-modal-"+e.theme)},"after-leave":function(t){e._removeBodyClass("has-modal-"+e.theme),e.showContent=!1}}},[n("aside",{directives:[{name:"show",rawName:"v-show",value:e.isOpened,expression:"isOpened"}],staticClass:"modal",class:"is-"+e.theme,attrs:{tabindex:e.isOpened?"0":"-1",role:"dialog","aria-hidden":e.isOpened?"false":"true","aria-label":e.title},on:{mousedown:function(t){return t.target!==t.currentTarget?null:e.selfClose(t)}}},[n("div",{staticClass:"modal__dialog",attrs:{role:"document"}},[n("div",{staticClass:"modal__header"},[n("button",{staticClass:"modal__back",attrs:{type:"button",title:e.$lang.MODAL_BACK,"aria-label":e.$lang.MODAL_BACK,tabindex:"0"},on:{click:function(t){return t.preventDefault(),e.$router.back()}}},[n("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor","aria-hidden":"true"}},[n("polyline",{attrs:{points:"10 14 5 9.5 10 5"}}),e._v(" "),n("line",{attrs:{x1:"16",y1:"9.5",x2:"5",y2:"9.52"}})])]),e._v(" "),n("h5",{staticClass:"modal__title"},[e._v("\n                    "+e._s(e.title)+"\n                ")]),e._v(" "),n("button",{staticClass:"modal__close",attrs:{type:"button",title:e.$lang.MODAL_CLOSE,"aria-label":e.$lang.MODAL_CLOSE,tabindex:"0"},on:{click:function(t){return t.preventDefault(),e.close()}}},[n("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"stroke-width":"1.06",d:"M16,16 L4,4"}}),e._v(" "),n("path",{attrs:{"stroke-width":"1.06",d:"M16,4 L4,16"}})])])]),e._v(" "),n("div",{staticClass:"modal__body"},[e.stay||e.showContent?n("div",{staticClass:"modal__content"},[e._t("default",null,{closeModal:e.close})],2):e._e()])])])])},staticRenderFns:[]},void 0,{name:"modal-window",mixins:[n],props:{title:String,stay:{type:Boolean,default(){return this.$options._config.stay}},bgClickClose:{type:Boolean,default(){return this.$options._config.bgClickClose}},name:{type:String,default:()=>`modal-${s++}`},param:{type:String,default:"modal"},theme:{type:String,default:"default"}},data:()=>({showContent:!1,lastFocused:null}),computed:{eventBus(){return this.$options._config.eventBus},isOpened(){return this.$route.query[this.param]===this.name}},provide(){return{modal:{name:this.name,open:this.open,close:this.close}}},watch:{isOpened(e){if(!e){let e={prevented:!1,preventClose(){this.prevented=!0}};this.eventBus.$emit(`modal::${this.name}:before-close`,e),e.prevented&&this.open()}},showContent(e){if(e){if("undefined"==typeof document)return;this.lastFocused=document.activeElement,this.$nextTick(()=>this.$el.focus()),window.addEventListener("keyup",this._escButtonHandler)}else window.removeEventListener("keyup",this._escButtonHandler),this.lastFocused&&(this.lastFocused.focus(),this.lastFocused=null)}},methods:{_addBodyClass(...e){document.body.classList.add(...e)},_removeBodyClass(...e){document.body.classList.remove(...e)},open(){this.$router.$setParam(this._getModalParam(this.name))},selfClose(e){if(this.fullscreen||!this.bgClickClose)return;let t=this;window.addEventListener("mouseup",function e(n){window.removeEventListener("mouseup",e),n.target===t.$el&&t.close()})},close(){this.$router.$setParam(this._getModalParam(null)),this.eventBus.$emit(`modal::${this.name}:closed`),this.$emit("closed")},_getModalParam(e){let t={};return t[this.param]=e,t},_escButtonHandler(e){27===e.keyCode&&this.close()}},created(){this.showContent=this.isOpened},mounted(){this.eventBus.$on(`modal::${this.name}:open`,this.open),this.eventBus.$on(`modal::${this.name}:close`,this.close)},beforeDestroy(){this.eventBus.$off(`modal::${this.name}:open`,this.open),this.eventBus.$off(`modal::${this.name}:close`,this.close),this.lastFocused=null,window.removeEventListener("keyup",this._escButtonHandler)}},void 0,!1,void 0,void 0,void 0),i={stay:!1,bgClickClose:!0,lang:{MODAL_BACK:"Go back",MODAL_CLOSE:"Close modal (ESC)"}};function a(t,n){if(this.installed)return;this.installed=!0,o.mixins=o.mixins||[],o.mixins.push(e);let s={...i,...n};if(!s.eventBus){let e=new t({methods:{open(e){e&&this.$emit(`modal::${e}:open`)},close(e){e&&this.$emit(`modal::${e}:close`)}}});s.eventBus=e,t.prototype.$modals=e}o._config=s,t.component("modal-window",o)}const l={install:a};let r=null,d=null;"undefined"!=typeof window?(r=window.Vue,d=window.VueRouter):"undefined"!=typeof global&&(r=global.Vue,d=global.VueRouter),r&&d&&r.use(l),o.install=a;export default o;export{a as install};