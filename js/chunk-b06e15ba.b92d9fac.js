(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b06e15ba"],{"2a7d":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-btn",{staticClass:"btn",class:{"disable-events":t.disabled,active:t.active},style:{background:t.active?"":t.color+" !important"},attrs:{block:t.block,large:t.large},on:{click:function(e){return t.$emit("click")}}},[t._t("leftLogo"),t._v(" "+t._s(t.title)+" "),t._t("rightLogo")],2)},n=[],r={props:{block:{type:Boolean,default:!1},large:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},active:{type:Boolean,default:!1},title:{type:String,default:"No Title"},color:{type:String,default:"#0d1015"}}},s=r,o=(i("9f6e"),i("2877")),l=i("6544"),c=i.n(l),u=i("8336"),h=Object(o["a"])(s,a,n,!1,null,"31fa274d",null);e["a"]=h.exports;c()(h,{VBtn:u["a"]})},5471:function(t,e,i){},"594b":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("MainLayout",{attrs:{pageTitle:"Configurations"}},[i("div",{staticClass:"configurations-main"},[i("div",{staticStyle:{width:"100%"}},[i("v-row",{staticClass:"py-4 px-2",staticStyle:{"border-bottom":"1px solid white"},attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"11"}},[i("v-row",{staticClass:"configurations-text configurations-title",attrs:{"no-gutters":""}},[t._v(" View Performance History ")]),i("v-row",{staticClass:"configurations-text",attrs:{"no-gutters":""}},[t._v(" Allow/Disallow reviewers to be able to see their performance history ")])],1),i("v-col",{staticClass:"configurations-input-alignment",attrs:{cols:"1"}},[i("v-switch",{attrs:{color:"green","hide-details":"",ripple:!1},model:{value:t.reviewSwitch,callback:function(e){t.reviewSwitch=e},expression:"reviewSwitch"}})],1)],1),i("v-row",{staticClass:"py-4 px-2",staticStyle:{"border-bottom":"1px solid white"},attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"11"}},[i("v-row",{staticClass:"configurations-text configurations-title",attrs:{"no-gutters":""}},[t._v(" Faulty Review Score Threshold ")]),i("v-row",{staticClass:"configurations-text",attrs:{"no-gutters":""}},[t._v(" Review accuracies that are lower than the threshold will be accepted as a faulty review. ")])],1),i("v-col",{staticClass:"configurations-input-alignment",attrs:{cols:"1"}},[i("v-text-field",{attrs:{rules:t.thresholdInputRules},model:{value:t.threshold,callback:function(e){t.threshold=e},expression:"threshold"}},[i("v-icon",{attrs:{slot:"append",small:"",color:"white"},slot:"append"},[t._v(" mdi-percent ")])],1)],1)],1)],1),i("div",{staticClass:"d-flex justify-end",staticStyle:{width:"100%",gap:"15px"}},[i("Button",{attrs:{title:"Discard",disabled:t.isUnchanged},on:{click:t.discard}}),i("Button",{attrs:{title:"Save and Apply",disabled:t.isSaveButtonDisabled},on:{click:t.save}})],1)])])},n=[],r=i("1da1"),s=i("5530"),o=(i("96cf"),i("a9e3"),i("8ba4"),i("be7f")),l=i("2a7d"),c=i("2f62"),u={name:"Configurations",components:{MainLayout:o["a"],Button:l["a"]},data:function(){return{originalData:{reviewSwitch:!1,threshold:0},reviewSwitch:!0,threshold:75}},methods:Object(s["a"])(Object(s["a"])({},Object(c["b"])(["updateRepoConfig"])),{},{setOriginalData:function(){var t=this.repoConfig,e=t.faultyThreshold,i=t.seeSelfPerformance;this.originalData={threshold:e,reviewSwitch:i},this.reviewSwitch=i,this.threshold=e},updateRepositoryConfigurations:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.updateRepoConfig({repoUrl:t.$route.params.repoUrl,config:{faultyThreshold:Number(t.threshold),seeSelfPerformance:t.reviewSwitch}});case 2:case"end":return e.stop()}}),e)})))()},discard:function(){this.threshold=this.originalData.threshold,this.reviewSwitch=this.originalData.reviewSwitch},save:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.isUnchanged){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.updateRepositoryConfigurations();case 4:case"end":return e.stop()}}),e)})))()}}),computed:Object(s["a"])(Object(s["a"])({},Object(c["c"])(["repoConfig"])),{},{thresholdInputRules:function(){return[function(t){return t&&t>=0&&t<=100&&Number.isInteger(Number(t))||"Invalid Threshold Value"}]},isUnchanged:function(){var t=Number(this.threshold);return this.reviewSwitch===this.originalData.reviewSwitch&&t===this.originalData.threshold},isSaveButtonDisabled:function(){return!!this.isUnchanged||(!this.threshold||this.threshold<0||this.threshold>100||!Number.isInteger(Number(this.threshold)))}}),watch:{repoConfig:function(){this.setOriginalData()}}},h=u,d=(i("8685"),i("2877")),f=i("6544"),p=i.n(f),v=i("62ad"),g=i("132d"),b=i("0fd9"),m=i("15fd"),w=(i("0481"),i("4069"),i("ec29"),i("9d01"),i("d3b7"),i("25f0"),i("4de4"),i("c37a")),y=i("5607"),S=i("2b0e"),C=S["a"].extend({name:"rippleable",directives:{ripple:y["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),O=i("8547"),j=i("58df");function k(t){t.preventDefault()}var x=Object(j["a"])(w["a"],C,O["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=w["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:k},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:k},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var a=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===a&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),V=i("c3f0"),D=i("0789"),_=i("490a"),B=i("80d2"),A=["title"],R=x.extend({name:"v-switch",directives:{Touch:V["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},w["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(m["a"])(t,A));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(s["a"])(Object(s["a"])({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(s["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(s["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(D["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(_["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===B["y"].left&&this.isActive||t.keyCode===B["y"].right&&!this.isActive)&&this.onChange()}}}),N=i("8654"),$=Object(d["a"])(h,a,n,!1,null,"40ec6cab",null);e["default"]=$.exports;p()($,{VCol:v["a"],VIcon:g["a"],VRow:b["a"],VSwitch:R,VTextField:N["a"]})},"62ad":function(t,e,i){"use strict";var a=i("ade3"),n=i("5530"),r=(i("d3b7"),i("a9e3"),i("b64b"),i("ac1f"),i("5319"),i("4ec9"),i("3ca3"),i("ddb0"),i("caad"),i("159b"),i("2ca0"),i("4b85"),i("2b0e")),s=i("d9f7"),o=i("80d2"),l=["sm","md","lg","xl"],c=function(){return l.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return l.reduce((function(t,e){return t["offset"+Object(o["H"])(e)]={type:[String,Number],default:null},t}),{})}(),h=function(){return l.reduce((function(t,e){return t["order"+Object(o["H"])(e)]={type:[String,Number],default:null},t}),{})}(),d={col:Object.keys(c),offset:Object.keys(u),order:Object.keys(h)};function f(t,e,i){var a=t;if(null!=i&&!1!==i){if(e){var n=e.replace(t,"");a+="-".concat(n)}return"col"!==t||""!==i&&!0!==i?(a+="-".concat(i),a.toLowerCase()):a.toLowerCase()}}var p=new Map;e["a"]=r["a"].extend({name:"v-col",functional:!0,props:Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])({cols:{type:[Boolean,String,Number],default:!1}},c),{},{offset:{type:[String,Number],default:null}},u),{},{order:{type:[String,Number],default:null}},h),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var i=e.props,n=e.data,r=e.children,o=(e.parent,"");for(var l in i)o+=String(i[l]);var c=p.get(o);return c||function(){var t,e;for(e in c=[],d)d[e].forEach((function(t){var a=i[t],n=f(e,t,a);n&&c.push(n)}));var n=c.some((function(t){return t.startsWith("col-")}));c.push((t={col:!n||!i.cols},Object(a["a"])(t,"col-".concat(i.cols),i.cols),Object(a["a"])(t,"offset-".concat(i.offset),i.offset),Object(a["a"])(t,"order-".concat(i.order),i.order),Object(a["a"])(t,"align-self-".concat(i.alignSelf),i.alignSelf),t)),p.set(o,c)}(),t(i.tag,Object(s["a"])(n,{class:c}),r)}})},6373:function(t,e,i){},8547:function(t,e,i){"use strict";var a=i("2b0e"),n=i("80d2");e["a"]=a["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:n["k"]}}})},8685:function(t,e,i){"use strict";i("6373")},"8ba4":function(t,e,i){var a=i("23e7"),n=i("eac5");a({target:"Number",stat:!0},{isInteger:n})},"9d01":function(t,e,i){},"9f6e":function(t,e,i){"use strict";i("5471")},eac5:function(t,e,i){var a=i("861d"),n=Math.floor;t.exports=Number.isInteger||function(t){return!a(t)&&isFinite(t)&&n(t)===t}},ec29:function(t,e,i){}}]);
//# sourceMappingURL=chunk-b06e15ba.b92d9fac.js.map