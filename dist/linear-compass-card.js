function t(t,e,s,i){var o,n=arguments.length,r=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,s,r):o(e,s))||r);return n>3&&r&&Object.defineProperty(e,s,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;let n=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&o.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new n(s,t,i)},a=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:c,defineProperty:l,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,_=globalThis,f=_.trustedTypes,g=f?f.emptyScript:"",m=_.reactiveElementPolyfillSupport,$=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},v=(t,e)=>!c(t,e),y={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:v};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&l(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const n=i?.call(this);o?.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),o=e.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const o=(void 0!==s.converter?.toAttribute?s.converter:b).toAttribute(e,s.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=i;const n=o.fromAttribute(e,t.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(t,e,s,i=!1,o){if(void 0!==t){const n=this.constructor;if(!1===i&&(o=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??v)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==o||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[$("elementProperties")]=new Map,A[$("finalized")]=new Map,m?.({ReactiveElement:A}),(_.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,E=t=>t,S=w.trustedTypes,x=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,U="?"+P,N=`<${U}>`,k=document,O=()=>k.createComment(""),R=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,M="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,j=/>/g,D=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,W=/"/g,I=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),q=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),V=new WeakMap,J=k.createTreeWalker(k,129);function K(t,e){if(!H(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(e):e}const Z=(t,e)=>{const s=t.length-1,i=[];let o,n=2===e?"<svg>":3===e?"<math>":"",r=T;for(let e=0;e<s;e++){const s=t[e];let a,c,l=-1,h=0;for(;h<s.length&&(r.lastIndex=h,c=r.exec(s),null!==c);)h=r.lastIndex,r===T?"!--"===c[1]?r=z:void 0!==c[1]?r=j:void 0!==c[2]?(I.test(c[2])&&(o=RegExp("</"+c[2],"g")),r=D):void 0!==c[3]&&(r=D):r===D?">"===c[0]?(r=o??T,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?D:'"'===c[3]?W:L):r===W||r===L?r=D:r===z||r===j?r=T:(r=D,o=void 0);const d=r===D&&t[e+1].startsWith("/>")?" ":"";n+=r===T?s+N:l>=0?(i.push(a),s.slice(0,l)+C+s.slice(l)+P+d):s+P+(-2===l?e:d)}return[K(t,n+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class G{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[c,l]=Z(t,e);if(this.el=G.createElement(c,s),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=J.nextNode())&&a.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(C)){const e=l[n++],s=i.getAttribute(t).split(P),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:r[2],strings:s,ctor:"."===r[1]?et:"?"===r[1]?st:"@"===r[1]?it:tt}),i.removeAttribute(t)}else t.startsWith(P)&&(a.push({type:6,index:o}),i.removeAttribute(t));if(I.test(i.tagName)){const t=i.textContent.split(P),e=t.length-1;if(e>0){i.textContent=S?S.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],O()),J.nextNode(),a.push({type:2,index:++o});i.append(t[e],O())}}}else if(8===i.nodeType)if(i.data===U)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(P,t+1));)a.push({type:7,index:o}),t+=P.length-1}o++}}static createElement(t,e){const s=k.createElement("template");return s.innerHTML=t,s}}function X(t,e,s=t,i){if(e===q)return e;let o=void 0!==i?s._$Co?.[i]:s._$Cl;const n=R(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=o:s._$Cl=o),void 0!==o&&(e=X(t,o._$AS(t,e.values),o,i)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??k).importNode(e,!0);J.currentNode=i;let o=J.nextNode(),n=0,r=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Y(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new ot(o,this,t)),this._$AV.push(e),a=s[++r]}n!==a?.index&&(o=J.nextNode(),n++)}return J.currentNode=k,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),R(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>H(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==F&&R(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=G.createElement(K(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Q(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new G(t)),e}k(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new Y(this.O(O()),this.O(O()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=E(t).nextSibling;E(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=F}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(void 0===o)t=X(this,t,e,0),n=!R(t)||t!==this._$AH&&t!==q,n&&(this._$AH=t);else{const i=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=X(this,i[s+r],e,r),a===q&&(a=this._$AH[r]),n||=!R(a)||a!==this._$AH[r],a===F?t=F:t!==F&&(t+=(a??"")+o[r+1]),this._$AH[r]=a}n&&!i&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class st extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class it extends tt{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??F)===q)return;const s=this._$AH,i=t===F&&s!==F||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==F&&(s===F||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const nt=w.litHtmlPolyfillSupport;nt?.(G,Y),(w.litHtmlVersions??=[]).push("3.3.2");const rt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class at extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let o=i._$litPart$;if(void 0===o){const t=s?.renderBefore??null;i._$litPart$=o=new Y(e.insertBefore(O(),t),t,void 0,s??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}at._$litElement$=!0,at.finalized=!0,rt.litElementHydrateSupport?.({LitElement:at});const ct=rt.litElementPolyfillSupport;ct?.({LitElement:at}),(rt.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lt=t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ht={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:v},dt=(t=ht,e,s)=>{const{kind:i,metadata:o}=s;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),n.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const o=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,o,t,!0,s)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const o=this[i];e.call(this,s),this.requestUpdate(i,o,t,!0,s)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(t){return(e,s)=>"object"==typeof s?dt(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(t){return pt({...t,state:!0,attribute:!1})}const _t=r`
  :host {
    display: block;
    --compass-needle: #ffffff;
    --compass-tick: #cccccc;
    --compass-text: #ffffff;
    --compass-bg: rgba(40, 40, 40, 0.9);
    --compass-cardinal: #aaaaaa;
    --compass-degree: #999999;
  }

  ha-card {
    overflow: hidden;
    background: transparent;
    color: var(--compass-text);
  }

  .compass-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .compass-name {
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    padding: 8px 0 4px;
    color: var(--primary-text-color, var(--compass-text));
  }

  .compass-container {
    position: relative;
    width: 100%;
    height: 80px;
    overflow: hidden;
    background: var(--compass-bg);
    border-radius: 12px;
  }

  :host([condensed]) .compass-container {
    height: 56px;
    border-radius: 8px;
  }

  /* The scrolling strip – rendered via canvas */
  .compass-strip {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  canvas.compass-canvas {
    display: block;
    width: 100%;
    height: 100%;
  }

  /* Gradient fade on edges */
  .compass-fade-left,
  .compass-fade-right {
    position: absolute;
    top: 0;
    width: 25%;
    height: 100%;
    pointer-events: none;
    z-index: 2;
  }

  .compass-fade-left {
    left: 0;
    background: linear-gradient(to right, var(--compass-bg), transparent);
  }

  .compass-fade-right {
    right: 0;
    background: linear-gradient(to left, var(--compass-bg), transparent);
  }

  /* Centre needle indicators */
  .needle-top,
  .needle-bottom {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    width: 0;
    height: 0;
  }

  .needle-top {
    top: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 10px solid var(--compass-needle);
  }

  :host([condensed]) .needle-top {
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 8px solid var(--compass-needle);
  }

  .needle-bottom {
    bottom: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 10px solid var(--compass-needle);
  }

  :host([condensed]) .needle-bottom {
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 8px solid var(--compass-needle);
  }

  .needle-line {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    margin-left: -1px;
    background: var(--compass-needle);
    opacity: 0.5;
    z-index: 3;
    pointer-events: none;
  }

  /* Bottom glass reflection bar */
  .compass-glass {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30%;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(255, 255, 255, 0.04) 40%,
      rgba(255, 255, 255, 0.07)
    );
    pointer-events: none;
    z-index: 2;
  }

  /* Degree readout below gauge (optional) */
  .compass-readout {
    text-align: center;
    font-size: 12px;
    padding: 4px 0 6px;
    color: var(--secondary-text-color, var(--compass-degree));
    font-variant-numeric: tabular-nums;
  }

  :host([condensed]) .compass-readout {
    display: none;
  }

  :host([condensed]) .compass-name {
    display: none;
  }
`,ft={show_name:!1,show_degrees:!0,show_cardinal:!0,condensed:!1,needle_color:"#ffffff",tick_color:"#cccccc",text_color:"#ffffff",background_color:"rgba(40, 40, 40, 0.9)",cardinal_color:"#aaaaaa",degree_color:"#999999"},gt=[{deg:0,label:"N"},{deg:45,label:"NE"},{deg:90,label:"E"},{deg:135,label:"SE"},{deg:180,label:"S"},{deg:225,label:"SW"},{deg:270,label:"W"},{deg:315,label:"NW"}];function mt(t){return(t%360+360)%360}const $t=[{name:"entity",selector:{entity:{domain:["sensor","input_number"]}}},{name:"name",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"show_name",selector:{boolean:{}}},{name:"show_degrees",selector:{boolean:{}}},{name:"show_cardinal",selector:{boolean:{}}},{name:"condensed",selector:{boolean:{}}}]},{type:"expandable",name:"",title:"Appearance",icon:"mdi:palette",schema:[{type:"grid",name:"",schema:[{name:"needle_color",selector:{color_rgb:{}}},{name:"tick_color",selector:{color_rgb:{}}},{name:"text_color",selector:{color_rgb:{}}},{name:"background_color",selector:{color_rgb:{}}},{name:"cardinal_color",selector:{color_rgb:{}}},{name:"degree_color",selector:{color_rgb:{}}}]}]}];let bt=class extends at{constructor(){super(...arguments),this._computeLabel=t=>({entity:"Entity",name:"Name",show_name:"Show Name",show_degrees:"Show Degrees",show_cardinal:"Show Cardinal",condensed:"Condensed (single row)",needle_color:"Needle Color",tick_color:"Tick Color",text_color:"Text Color",background_color:"Background Color",cardinal_color:"Cardinal Color",degree_color:"Degree Color"}[t.name]||t.name)}setConfig(t){this._config={...ft,...t}}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.detail.value,s={...this._config};for(const[t,i]of Object.entries(e))Array.isArray(i)&&3===i.length?s[t]=`rgb(${i[0]}, ${i[1]}, ${i[2]})`:s[t]=i;const i=new CustomEvent("config-changed",{detail:{config:s},bubbles:!0,composed:!0});this.dispatchEvent(i)}render(){if(!this.hass||!this._config)return F;const t={...this._config};return B`
      <div class="root">
        <ha-form
          .hass=${this.hass}
          .data=${t}
          .schema=${$t}
          .computeLabel=${this._computeLabel}
          @value-changed=${this._valueChanged}
        ></ha-form>
      </div>
    `}};bt.styles=r`
    :host {
      display: block;
    }
    .root {
      padding: 16px;
    }
    ha-form {
      display: block;
    }
  `,t([pt({attribute:!1})],bt.prototype,"hass",void 0),t([ut()],bt.prototype,"_config",void 0),bt=t([lt("linear-compass-card-editor")],bt),window.customCards=window.customCards||[],window.customCards.push({type:"linear-compass-card",name:"Linear Compass Card",description:"A horizontal linear compass gauge for Home Assistant",preview:!0,documentationURL:"https://github.com/maeneak/linear-compass-ha"});let vt=class extends at{constructor(){super(...arguments),this._heading=0,this._animatedHeading=0,this._animFrame=0,this._initialized=!1}static getConfigElement(){return document.createElement("linear-compass-card-editor")}static getStubConfig(){return{entity:"",show_name:!1,show_degrees:!0,show_cardinal:!0,condensed:!1}}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config={...ft,...t}}getCardSize(){return this._config?.condensed?1:2}getLayoutOptions(){return this._config?.condensed?{grid_min_rows:1,grid_rows:1,grid_min_columns:2,grid_columns:4}:{grid_min_rows:2,grid_rows:2,grid_min_columns:2,grid_columns:4}}connectedCallback(){super.connectedCallback(),this._resizeObserver=new ResizeObserver(()=>this._draw())}disconnectedCallback(){super.disconnectedCallback(),cancelAnimationFrame(this._animFrame),this._resizeObserver?.disconnect(),this._initialized=!1}firstUpdated(t){super.firstUpdated(t);const e=this.renderRoot.querySelector(".compass-container");e&&this._resizeObserver.observe(e),this._initialized=!0,this._startAnimation()}updated(t){if(super.updated(t),!this._config||!this.hass||!this._initialized)return;const e=this.hass.states[this._config.entity];if(e){const t=parseFloat(e.state);if(!isNaN(t)){const e=mt(t);e!==this._heading&&(this._heading=e,this._startAnimation())}}}render(){if(!this._config)return F;this._config.condensed?this.setAttribute("condensed",""):this.removeAttribute("condensed");const t=`\n      --compass-needle: ${this._config.needle_color};\n      --compass-tick: ${this._config.tick_color};\n      --compass-text: ${this._config.text_color};\n      --compass-bg: ${this._config.background_color};\n      --compass-cardinal: ${this._config.cardinal_color};\n      --compass-degree: ${this._config.degree_color};\n    `,e=this.hass?.states[this._config.entity],s=e?parseFloat(e.state):0,i=(o=isNaN(s)?0:s,["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"][Math.round((o%360+360)%360/22.5)%16]);var o;const n=isNaN(s)?"---":`${Math.round(mt(s))}`;return B`
      <ha-card style="${t}">
        <div class="compass-wrapper">
          ${this._config.show_name&&this._config.name?B`<div class="compass-name">${this._config.name}</div>`:F}
          <div class="compass-container">
            <canvas class="compass-canvas"></canvas>
            <div class="compass-fade-left"></div>
            <div class="compass-fade-right"></div>
            <div class="needle-top"></div>
            <div class="needle-line"></div>
            <div class="needle-bottom"></div>
            <div class="compass-glass"></div>
          </div>
          ${!1!==this._config.show_degrees?B`<div class="compass-readout">${n}° ${i}</div>`:F}
        </div>
      </ha-card>
    `}_startAnimation(){cancelAnimationFrame(this._animFrame);const t=()=>{let e=this._heading-this._animatedHeading;e>180&&(e-=360),e<-180&&(e+=360),Math.abs(e)>.05?(this._animatedHeading=mt(this._animatedHeading+.12*e),this._draw(),this._animFrame=requestAnimationFrame(t)):(this._animatedHeading=this._heading,this._draw())};this._animFrame=requestAnimationFrame(t)}_draw(){const t=this.renderRoot.querySelector("canvas.compass-canvas");if(!t)return;const e=t.parentElement;if(!e)return;const s=e.getBoundingClientRect();if(0===s.width||0===s.height)return;const i=window.devicePixelRatio||1,o=s.width,n=s.height;t.width=o*i,t.height=n*i;const r=t.getContext("2d");if(!r)return;r.scale(i,i),r.clearRect(0,0,o,n);const a=this._animatedHeading,c=this._config?.condensed??!1,l=o/90,h=o/2,d=a-100,p=a+100,u=this._config?.tick_color??"#cccccc",_=this._config?.degree_color??"#999999",f=this._config?.cardinal_color??"#aaaaaa";for(let t=Math.floor(d);t<=Math.ceil(p);t++){const e=mt(t);const s=h+(t-a)*l;if(s<-20||s>o+20)continue;const i=e%10==0,n=e%5==0;if(c&&e%5!=0)continue;let d;d=i?c?10:16:n?c?6:10:c?3:5,r.beginPath(),r.strokeStyle=u,r.lineWidth=i?2:1;const p=c?8:12;if(r.moveTo(s,p),r.lineTo(s,p+d),r.stroke(),e%20==0){r.fillStyle=_,r.font=c?"bold 11px 'Segoe UI', Roboto, sans-serif":"bold 13px 'Segoe UI', Roboto, sans-serif",r.textAlign="center",r.textBaseline="top";const t=p-(c?9:12);r.fillText(String(e),s,t<0?1:t)}}const g=c?28:44;for(const t of gt)for(const e of[-360,0,360]){const s=t.deg+e-a;if(Math.abs(s)>100)continue;const i=h+s*l;if(i<-40||i>o+40)continue;r.fillStyle=f;const n=1===t.label.length;r.font=n?c?"bold 14px 'Segoe UI', Roboto, sans-serif":"bold 18px 'Segoe UI', Roboto, sans-serif":c?"bold 11px 'Segoe UI', Roboto, sans-serif":"bold 14px 'Segoe UI', Roboto, sans-serif",r.textAlign="center",r.textBaseline="top",r.fillText(t.label,i,g)}}};vt.styles=_t,t([pt({attribute:!1})],vt.prototype,"hass",void 0),t([ut()],vt.prototype,"_config",void 0),vt=t([lt("linear-compass-card")],vt);export{vt as LinearCompassCard};
