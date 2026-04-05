(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();var ie,k,Je,R,Ce,Fe,Ye,qe,be,fe,_e,Z={},ee=[],ot=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,oe=Array.isArray;function j(t,e){for(var s in e)t[s]=e[s];return t}function ye(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function Ke(t,e,s){var a,r,n,o={};for(n in e)n=="key"?a=e[n]:n=="ref"?r=e[n]:o[n]=e[n];if(arguments.length>2&&(o.children=arguments.length>3?ie.call(arguments,2):s),typeof t=="function"&&t.defaultProps!=null)for(n in t.defaultProps)o[n]===void 0&&(o[n]=t.defaultProps[n]);return V(t,o,a,r,null)}function V(t,e,s,a,r){var n={type:t,props:e,key:s,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++Je,__i:-1,__u:0};return r==null&&k.vnode!=null&&k.vnode(n),n}function le(t){return t.children}function Q(t,e){this.props=t,this.context=e}function J(t,e){if(e==null)return t.__?J(t.__,t.__i+1):null;for(var s;e<t.__k.length;e++)if((s=t.__k[e])!=null&&s.__e!=null)return s.__e;return typeof t.type=="function"?J(t):null}function lt(t){if(t.__P&&t.__d){var e=t.__v,s=e.__e,a=[],r=[],n=j({},e);n.__v=e.__v+1,k.vnode&&k.vnode(n),we(t.__P,n,e,t.__n,t.__P.namespaceURI,32&e.__u?[s]:null,a,s??J(e),!!(32&e.__u),r),n.__v=e.__v,n.__.__k[n.__i]=n,Ve(a,n,r),e.__e=e.__=null,n.__e!=s&&Ge(n)}}function Ge(t){if((t=t.__)!=null&&t.__c!=null)return t.__e=t.__c.base=null,t.__k.some(function(e){if(e!=null&&e.__e!=null)return t.__e=t.__c.base=e.__e}),Ge(t)}function Ae(t){(!t.__d&&(t.__d=!0)&&R.push(t)&&!te.__r++||Ce!=k.debounceRendering)&&((Ce=k.debounceRendering)||Fe)(te)}function te(){try{for(var t,e=1;R.length;)R.length>e&&R.sort(Ye),t=R.shift(),e=R.length,lt(t)}finally{R.length=te.__r=0}}function We(t,e,s,a,r,n,o,u,p,l,f){var i,c,h,b,S,w,g,y=a&&a.__k||ee,P=e.length;for(p=ct(s,e,y,p,P),i=0;i<P;i++)(h=s.__k[i])!=null&&(c=h.__i!=-1&&y[h.__i]||Z,h.__i=i,w=we(t,h,c,r,n,o,u,p,l,f),b=h.__e,h.ref&&c.ref!=h.ref&&(c.ref&&$e(c.ref,null,h),f.push(h.ref,h.__c||b,h)),S==null&&b!=null&&(S=b),(g=!!(4&h.__u))||c.__k===h.__k?p=ze(h,p,t,g):typeof h.type=="function"&&w!==void 0?p=w:b&&(p=b.nextSibling),h.__u&=-7);return s.__e=S,p}function ct(t,e,s,a,r){var n,o,u,p,l,f=s.length,i=f,c=0;for(t.__k=new Array(r),n=0;n<r;n++)(o=e[n])!=null&&typeof o!="boolean"&&typeof o!="function"?(typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?o=t.__k[n]=V(null,o,null,null,null):oe(o)?o=t.__k[n]=V(le,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=t.__k[n]=V(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):t.__k[n]=o,p=n+c,o.__=t,o.__b=t.__b+1,u=null,(l=o.__i=dt(o,s,p,i))!=-1&&(i--,(u=s[l])&&(u.__u|=2)),u==null||u.__v==null?(l==-1&&(r>f?c--:r<f&&c++),typeof o.type!="function"&&(o.__u|=4)):l!=p&&(l==p-1?c--:l==p+1?c++:(l>p?c--:c++,o.__u|=4))):t.__k[n]=null;if(i)for(n=0;n<f;n++)(u=s[n])!=null&&(2&u.__u)==0&&(u.__e==a&&(a=J(u)),Xe(u,u));return a}function ze(t,e,s,a){var r,n;if(typeof t.type=="function"){for(r=t.__k,n=0;r&&n<r.length;n++)r[n]&&(r[n].__=t,e=ze(r[n],e,s,a));return e}t.__e!=e&&(a&&(e&&t.type&&!e.parentNode&&(e=J(t)),s.insertBefore(t.__e,e||null)),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function dt(t,e,s,a){var r,n,o,u=t.key,p=t.type,l=e[s],f=l!=null&&(2&l.__u)==0;if(l===null&&u==null||f&&u==l.key&&p==l.type)return s;if(a>(f?1:0)){for(r=s-1,n=s+1;r>=0||n<e.length;)if((l=e[o=r>=0?r--:n++])!=null&&(2&l.__u)==0&&u==l.key&&p==l.type)return o}return-1}function Ie(t,e,s){e[0]=="-"?t.setProperty(e,s??""):t[e]=s==null?"":typeof s!="number"||ot.test(e)?s:s+"px"}function W(t,e,s,a,r){var n,o;e:if(e=="style")if(typeof s=="string")t.style.cssText=s;else{if(typeof a=="string"&&(t.style.cssText=a=""),a)for(e in a)s&&e in s||Ie(t.style,e,"");if(s)for(e in s)a&&s[e]==a[e]||Ie(t.style,e,s[e])}else if(e[0]=="o"&&e[1]=="n")n=e!=(e=e.replace(qe,"$1")),o=e.toLowerCase(),e=o in t||e=="onFocusOut"||e=="onFocusIn"?o.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+n]=s,s?a?s.u=a.u:(s.u=be,t.addEventListener(e,n?_e:fe,n)):t.removeEventListener(e,n?_e:fe,n);else{if(r=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=s??"";break e}catch{}typeof s=="function"||(s==null||s===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&s==1?"":s))}}function De(t){return function(e){if(this.l){var s=this.l[e.type+t];if(e.t==null)e.t=be++;else if(e.t<s.u)return;return s(k.event?k.event(e):e)}}}function we(t,e,s,a,r,n,o,u,p,l){var f,i,c,h,b,S,w,g,y,P,E,B,H,O,x,$=e.type;if(e.constructor!==void 0)return null;128&s.__u&&(p=!!(32&s.__u),n=[u=e.__e=s.__e]),(f=k.__b)&&f(e);e:if(typeof $=="function")try{if(g=e.props,y=$.prototype&&$.prototype.render,P=(f=$.contextType)&&a[f.__c],E=f?P?P.props.value:f.__:a,s.__c?w=(i=e.__c=s.__c).__=i.__E:(y?e.__c=i=new $(g,E):(e.__c=i=new Q(g,E),i.constructor=$,i.render=pt),P&&P.sub(i),i.state||(i.state={}),i.__n=a,c=i.__d=!0,i.__h=[],i._sb=[]),y&&i.__s==null&&(i.__s=i.state),y&&$.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=j({},i.__s)),j(i.__s,$.getDerivedStateFromProps(g,i.__s))),h=i.props,b=i.state,i.__v=e,c)y&&$.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),y&&i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(y&&$.getDerivedStateFromProps==null&&g!==h&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(g,E),e.__v==s.__v||!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(g,i.__s,E)===!1){e.__v!=s.__v&&(i.props=g,i.state=i.__s,i.__d=!1),e.__e=s.__e,e.__k=s.__k,e.__k.some(function(L){L&&(L.__=e)}),ee.push.apply(i.__h,i._sb),i._sb=[],i.__h.length&&o.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(g,i.__s,E),y&&i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(h,b,S)})}if(i.context=E,i.props=g,i.__P=t,i.__e=!1,B=k.__r,H=0,y)i.state=i.__s,i.__d=!1,B&&B(e),f=i.render(i.props,i.state,i.context),ee.push.apply(i.__h,i._sb),i._sb=[];else do i.__d=!1,B&&B(e),f=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++H<25);i.state=i.__s,i.getChildContext!=null&&(a=j(j({},a),i.getChildContext())),y&&!c&&i.getSnapshotBeforeUpdate!=null&&(S=i.getSnapshotBeforeUpdate(h,b)),O=f!=null&&f.type===le&&f.key==null?Qe(f.props.children):f,u=We(t,oe(O)?O:[O],e,s,a,r,n,o,u,p,l),i.base=e.__e,e.__u&=-161,i.__h.length&&o.push(i),w&&(i.__E=i.__=null)}catch(L){if(e.__v=null,p||n!=null)if(L.then){for(e.__u|=p?160:128;u&&u.nodeType==8&&u.nextSibling;)u=u.nextSibling;n[n.indexOf(u)]=null,e.__e=u}else{for(x=n.length;x--;)ye(n[x]);ve(e)}else e.__e=s.__e,e.__k=s.__k,L.then||ve(e);k.__e(L,e,s)}else n==null&&e.__v==s.__v?(e.__k=s.__k,e.__e=s.__e):u=e.__e=ut(s.__e,e,s,a,r,n,o,p,l);return(f=k.diffed)&&f(e),128&e.__u?void 0:u}function ve(t){t&&(t.__c&&(t.__c.__e=!0),t.__k&&t.__k.some(ve))}function Ve(t,e,s){for(var a=0;a<s.length;a++)$e(s[a],s[++a],s[++a]);k.__c&&k.__c(e,t),t.some(function(r){try{t=r.__h,r.__h=[],t.some(function(n){n.call(r)})}catch(n){k.__e(n,r.__v)}})}function Qe(t){return typeof t!="object"||t==null||t.__b>0?t:oe(t)?t.map(Qe):j({},t)}function ut(t,e,s,a,r,n,o,u,p){var l,f,i,c,h,b,S,w=s.props||Z,g=e.props,y=e.type;if(y=="svg"?r="http://www.w3.org/2000/svg":y=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),n!=null){for(l=0;l<n.length;l++)if((h=n[l])&&"setAttribute"in h==!!y&&(y?h.localName==y:h.nodeType==3)){t=h,n[l]=null;break}}if(t==null){if(y==null)return document.createTextNode(g);t=document.createElementNS(r,y,g.is&&g),u&&(k.__m&&k.__m(e,n),u=!1),n=null}if(y==null)w===g||u&&t.data==g||(t.data=g);else{if(n=n&&ie.call(t.childNodes),!u&&n!=null)for(w={},l=0;l<t.attributes.length;l++)w[(h=t.attributes[l]).name]=h.value;for(l in w)h=w[l],l=="dangerouslySetInnerHTML"?i=h:l=="children"||l in g||l=="value"&&"defaultValue"in g||l=="checked"&&"defaultChecked"in g||W(t,l,null,h,r);for(l in g)h=g[l],l=="children"?c=h:l=="dangerouslySetInnerHTML"?f=h:l=="value"?b=h:l=="checked"?S=h:u&&typeof h!="function"||w[l]===h||W(t,l,h,w[l],r);if(f)u||i&&(f.__html==i.__html||f.__html==t.innerHTML)||(t.innerHTML=f.__html),e.__k=[];else if(i&&(t.innerHTML=""),We(e.type=="template"?t.content:t,oe(c)?c:[c],e,s,a,y=="foreignObject"?"http://www.w3.org/1999/xhtml":r,n,o,n?n[0]:s.__k&&J(s,0),u,p),n!=null)for(l=n.length;l--;)ye(n[l]);u||(l="value",y=="progress"&&b==null?t.removeAttribute("value"):b!=null&&(b!==t[l]||y=="progress"&&!b||y=="option"&&b!=w[l])&&W(t,l,b,w[l],r),l="checked",S!=null&&S!=t[l]&&W(t,l,S,w[l],r))}return t}function $e(t,e,s){try{if(typeof t=="function"){var a=typeof t.__u=="function";a&&t.__u(),a&&e==null||(t.__u=t(e))}else t.current=e}catch(r){k.__e(r,s)}}function Xe(t,e,s){var a,r;if(k.unmount&&k.unmount(t),(a=t.ref)&&(a.current&&a.current!=t.__e||$e(a,null,e)),(a=t.__c)!=null){if(a.componentWillUnmount)try{a.componentWillUnmount()}catch(n){k.__e(n,e)}a.base=a.__P=null}if(a=t.__k)for(r=0;r<a.length;r++)a[r]&&Xe(a[r],e,s||typeof t.type!="function");s||ye(t.__e),t.__c=t.__=t.__e=void 0}function pt(t,e,s){return this.constructor(t,s)}function ht(t,e,s){var a,r,n,o;e==document&&(e=document.documentElement),k.__&&k.__(t,e),r=(a=!1)?null:e.__k,n=[],o=[],we(e,t=e.__k=Ke(le,null,[t]),r||Z,Z,e.namespaceURI,r?null:e.firstChild?ie.call(e.childNodes):null,n,r?r.__e:e.firstChild,a,o),Ve(n,t,o)}ie=ee.slice,k={__e:function(t,e,s,a){for(var r,n,o;e=e.__;)if((r=e.__c)&&!r.__)try{if((n=r.constructor)&&n.getDerivedStateFromError!=null&&(r.setState(n.getDerivedStateFromError(t)),o=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(t,a||{}),o=r.__d),o)return r.__E=r}catch(u){t=u}throw t}},Je=0,Q.prototype.setState=function(t,e){var s;s=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=j({},this.state),typeof t=="function"&&(t=t(j({},s),this.props)),t&&j(s,t),t!=null&&this.__v&&(e&&this._sb.push(e),Ae(this))},Q.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Ae(this))},Q.prototype.render=le,R=[],Fe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ye=function(t,e){return t.__v.__b-e.__v.__b},te.__r=0,qe=/(PointerCapture)$|Capture$/i,be=0,fe=De(!1),_e=De(!0);var Ze=function(t,e,s,a){var r;e[0]=0;for(var n=1;n<e.length;n++){var o=e[n++],u=e[n]?(e[0]|=o?1:2,s[e[n++]]):e[++n];o===3?a[0]=u:o===4?a[1]=Object.assign(a[1]||{},u):o===5?(a[1]=a[1]||{})[e[++n]]=u:o===6?a[1][e[++n]]+=u+"":o?(r=t.apply(u,Ze(t,u,s,["",null])),a.push(r),u[0]?e[0]|=2:(e[n-2]=0,e[n]=r)):a.push(u)}return a},Ee=new Map;function ft(t){var e=Ee.get(this);return e||(e=new Map,Ee.set(this,e)),(e=Ze(this,e.get(t)||(e.set(t,e=(function(s){for(var a,r,n=1,o="",u="",p=[0],l=function(c){n===1&&(c||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?p.push(0,c,o):n===3&&(c||o)?(p.push(3,c,o),n=2):n===2&&o==="..."&&c?p.push(4,c,0):n===2&&o&&!c?p.push(5,0,!0,o):n>=5&&((o||!c&&n===5)&&(p.push(n,0,o,r),n=6),c&&(p.push(n,c,0,r),n=6)),o=""},f=0;f<s.length;f++){f&&(n===1&&l(),l(f));for(var i=0;i<s[f].length;i++)a=s[f][i],n===1?a==="<"?(l(),p=[p],n=3):o+=a:n===4?o==="--"&&a===">"?(n=1,o=""):o=a+o[0]:u?a===u?u="":o+=a:a==='"'||a==="'"?u=a:a===">"?(l(),n=1):n&&(a==="="?(n=5,r=o,o=""):a==="/"&&(n<5||s[f][i+1]===">")?(l(),n===3&&(p=p[0]),n=p,(p=p[0]).push(2,0,n),n=0):a===" "||a==="	"||a===`
`||a==="\r"?(l(),n=2):o+=a),n===3&&o==="!--"&&(n=4,p=p[0])}return l(),p})(t)),e),arguments,[])).length>1?e:e[0]}var d=ft.bind(Ke),ne,C,de,Ue,me=0,et=[],I=k,Pe=I.__b,Te=I.__r,He=I.diffed,Le=I.__c,Be=I.unmount,Oe=I.__;function tt(t,e){I.__h&&I.__h(C,t,me||e),me=0;var s=C.__H||(C.__H={__:[],__h:[]});return t>=s.__.length&&s.__.push({}),s.__[t]}function m(t){return me=1,_t(nt,t)}function _t(t,e,s){var a=tt(ne++,2);if(a.t=t,!a.__c&&(a.__=[nt(void 0,e),function(u){var p=a.__N?a.__N[0]:a.__[0],l=a.t(p,u);p!==l&&(a.__N=[l,a.__[1]],a.__c.setState({}))}],a.__c=C,!C.__f)){var r=function(u,p,l){if(!a.__c.__H)return!0;var f=a.__c.__H.__.filter(function(c){return c.__c});if(f.every(function(c){return!c.__N}))return!n||n.call(this,u,p,l);var i=a.__c.props!==u;return f.some(function(c){if(c.__N){var h=c.__[0];c.__=c.__N,c.__N=void 0,h!==c.__[0]&&(i=!0)}}),n&&n.call(this,u,p,l)||i};C.__f=!0;var n=C.shouldComponentUpdate,o=C.componentWillUpdate;C.componentWillUpdate=function(u,p,l){if(this.__e){var f=n;n=void 0,r(u,p,l),n=f}o&&o.call(this,u,p,l)},C.shouldComponentUpdate=r}return a.__N||a.__}function N(t,e){var s=tt(ne++,3);!I.__s&&gt(s.__H,e)&&(s.__=t,s.u=e,C.__H.__h.push(s))}function vt(){for(var t;t=et.shift();){var e=t.__H;if(t.__P&&e)try{e.__h.some(X),e.__h.some(ge),e.__h=[]}catch(s){e.__h=[],I.__e(s,t.__v)}}}I.__b=function(t){C=null,Pe&&Pe(t)},I.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Oe&&Oe(t,e)},I.__r=function(t){Te&&Te(t),ne=0;var e=(C=t.__c).__H;e&&(de===C?(e.__h=[],C.__h=[],e.__.some(function(s){s.__N&&(s.__=s.__N),s.u=s.__N=void 0})):(e.__h.some(X),e.__h.some(ge),e.__h=[],ne=0)),de=C},I.diffed=function(t){He&&He(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(et.push(e)!==1&&Ue===I.requestAnimationFrame||((Ue=I.requestAnimationFrame)||mt)(vt)),e.__H.__.some(function(s){s.u&&(s.__H=s.u),s.u=void 0})),de=C=null},I.__c=function(t,e){e.some(function(s){try{s.__h.some(X),s.__h=s.__h.filter(function(a){return!a.__||ge(a)})}catch(a){e.some(function(r){r.__h&&(r.__h=[])}),e=[],I.__e(a,s.__v)}}),Le&&Le(t,e)},I.unmount=function(t){Be&&Be(t);var e,s=t.__c;s&&s.__H&&(s.__H.__.some(function(a){try{X(a)}catch(r){e=r}}),s.__H=void 0,e&&I.__e(e,s.__v))};var je=typeof requestAnimationFrame=="function";function mt(t){var e,s=function(){clearTimeout(a),je&&cancelAnimationFrame(e),setTimeout(t)},a=setTimeout(s,35);je&&(e=requestAnimationFrame(s))}function X(t){var e=C,s=t.__c;typeof s=="function"&&(t.__c=void 0,s()),C=e}function ge(t){var e=C;t.__c=t.__(),C=e}function gt(t,e){return!t||t.length!==e.length||e.some(function(s,a){return s!==t[a]})}function nt(t,e){return typeof e=="function"?e(t):e}const se=new Set,ae="propolis_dashboard_session",xe=typeof sessionStorage<"u";function bt(){if(!xe)return;if(!_.jwt||!_.username){sessionStorage.removeItem(ae);return}const t={jwt:_.jwt,username:_.username,role:_.role,issuerStatus:_.issuerStatus,externalJwt:_.externalJwt,externalServiceUrl:_.externalServiceUrl,externalConnected:_.externalConnected};sessionStorage.setItem(ae,JSON.stringify(t))}function yt(){if(!xe)return{};try{const t=sessionStorage.getItem(ae);if(!t)return{};const e=JSON.parse(t);return!e.jwt||!e.username?{}:{jwt:e.jwt,username:e.username,role:e.role??null,issuerStatus:e.issuerStatus??null,externalJwt:e.externalJwt??null,externalServiceUrl:e.externalServiceUrl??null,externalConnected:e.externalConnected??!1}}catch{return{}}}function wt(){xe&&sessionStorage.removeItem(ae)}const $t=yt(),_={jwt:null,username:null,role:null,issuerStatus:null,batches:[],loading:!1,externalJwt:null,externalServiceUrl:null,externalConnected:!1,externalError:null,pendingCount:0,preApproved:!1,serviceAccount:null,...$t};function A(t){Object.assign(_,t),bt();for(const e of se)e()}function xt(t){return se.add(t),()=>se.delete(t)}function St(){wt(),Object.assign(_,{jwt:null,username:null,role:null,issuerStatus:null,batches:[],loading:!1,externalJwt:null,externalServiceUrl:null,externalConnected:!1,externalError:null,pendingCount:0,preApproved:!1});for(const t of se)t()}const kt="https://haa-giftcard-prod.fly.dev";class ue extends Error{constructor(e,s){super(s),this.status=e}}function Ct(t){return t==="external"&&_.externalServiceUrl?{baseUrl:_.externalServiceUrl.replace(/\/$/,""),jwt:_.externalJwt}:{baseUrl:kt,jwt:_.jwt}}function K(){return _.externalServiceUrl&&_.externalConnected?"external":"operator"}async function T(t,e={},s="operator"){const{baseUrl:a,jwt:r}=Ct(s),n=new Headers(e.headers);r&&n.set("Authorization",`Bearer ${r}`),e.body&&typeof e.body=="string"&&n.set("Content-Type","application/json");const o=await fetch(`${a}${t}`,{...e,headers:n});if(o.status===401)throw s==="external"?(A({externalJwt:null,externalConnected:!1,externalError:"External service session expired"}),new ue(401,"External service session expired")):(A({jwt:null,username:null,batches:[]}),window.location.hash="#login",new ue(401,"Session expired"));if(!o.ok){const u=await o.json().catch(()=>({error:o.statusText}));throw new ue(o.status,u.error||o.statusText)}return o}async function At(t){return(await(await T("/auth/challenge",{method:"POST",body:JSON.stringify({username:t})})).json()).challenge}async function It(t,e,s){return(await(await T("/auth/verify",{method:"POST",body:JSON.stringify({username:t,challenge:e,signature:s})})).json()).token}async function Dt(t,e){const s=await fetch(`${e.replace(/\/$/,"")}/auth/challenge`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t})});if(!s.ok)throw new Error("External service challenge request failed");return(await s.json()).challenge}async function Et(t,e,s,a){const r=await fetch(`${a.replace(/\/$/,"")}/auth/verify`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,challenge:e,signature:s})});if(!r.ok)throw new Error("External service verification failed");return(await r.json()).token}async function Ut(t){try{return(await fetch(`${t.replace(/\/$/,"")}/health`,{method:"GET",signal:AbortSignal.timeout(1e4)})).ok}catch{return!1}}async function Pt(t){return(await T("/api/batches/prepare",{method:"POST",body:JSON.stringify(t)},K())).json()}async function Tt(t,e){return(await T(`/api/batches/${encodeURIComponent(t)}/finalize`,{method:"POST",body:JSON.stringify({signature:e})},K())).json()}async function Ht(){return(await(await T("/api/batches",{},K())).json()).batches}async function Lt(t){return(await T(`/api/batches/${encodeURIComponent(t)}`,{},K())).json()}async function F(t,e){const a=await(await T(t,{},K())).blob(),r=URL.createObjectURL(a),n=document.createElement("a");n.href=r,n.download=e,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(r)}async function Bt(t,e,s){return(await(await T("/api/issuers/apply",{method:"POST",body:JSON.stringify({description:t,contact:e,txId:s})})).json()).issuer}async function q(){return(await T("/api/issuers/me")).json()}async function Ot(t){return(await(await T("/api/issuers/me/service-url",{method:"POST",body:JSON.stringify({serviceUrl:t})})).json()).issuer}async function Se(t){const e=t?`?status=${encodeURIComponent(t)}`:"";return(await(await T(`/api/admin/issuers${e}`)).json()).issuers}async function jt(t,e){return(await(await T(`/api/admin/issuers/${encodeURIComponent(t)}/approve`,{method:"POST",body:JSON.stringify({txId:e})})).json()).issuer}async function Rt(t){return(await(await T(`/api/admin/issuers/${encodeURIComponent(t)}/revoke`,{method:"POST"})).json()).issuer}async function Nt(t){return(await(await T(`/api/admin/issuers/${encodeURIComponent(t)}/ban`,{method:"POST"})).json()).issuer}const Mt=6e4;function G(){return!!window.hive_keychain}function ce(t,e,s){return new Promise((a,r)=>{let n=!1;const o=setTimeout(()=>{n||(n=!0,r(new Error("Keychain did not respond — request may have been cancelled")))},Mt);t(u=>{n||(n=!0,clearTimeout(o),u.success?a(e(u)):r(new Error(u.message||u.error||s)))})})}function st(t,e){return ce(s=>window.hive_keychain.requestSignBuffer(t,e,"Posting",s),s=>s.result,"Keychain signing failed")}async function Jt(t){const e=await At(t),s=await st(t,e);return It(t,e,s)}async function ke(t,e){try{const s=await Dt(t,e),a=await st(t,s);return await Et(t,s,a,e)}catch{return null}}function Ft(t,e){return ce(s=>window.hive_keychain.requestSignBuffer(t,e,"Memo",s),s=>s.result,"Batch signing failed")}function at(t,e,s,a,r){return ce(n=>window.hive_keychain.requestCustomJson(t,e,s,JSON.stringify(a),r,n),n=>n.result,"Custom JSON broadcast failed")}function Yt(t,e,s,a=1){return ce(r=>window.hive_keychain.requestAddAccountAuthority(t,e,s,a,r),r=>r.result,"Add account authority failed")}function Y(t,e){e.preventDefault(),window.location.hash=t}function qt(t){t.preventDefault(),St(),window.location.hash="#login"}async function Kt(){if(!_.username||!_.externalServiceUrl)return;A({externalError:null});const t=await ke(_.username,_.externalServiceUrl);A(t?{externalJwt:t,externalConnected:!0,externalError:null}:{externalConnected:!1,externalError:"Could not connect to your gift card service"})}function z({route:t}){const e=_.role==="issuer"||_.role==="admin",s=_.role==="admin",a=_.issuerStatus?.status==="approved",r=_.externalServiceUrl&&!_.externalConnected;return d`
    <div>
      <nav>
        ${e&&d`
          <a href="#batches"
            class=${t==="batch-list"?"active":""}
            onClick=${n=>Y("#batches",n)}>Batches</a>
          <a href="#batches/generate"
            class=${t==="batch-form"?"active":""}
            onClick=${n=>Y("#batches/generate",n)}>Generate</a>
        `}
        ${a&&d`
          <a href="#setup"
            class=${t==="setup"?"active":""}
            onClick=${n=>Y("#setup",n)}>Setup</a>
        `}
        ${e&&d`
          <a href="#setup"
            class=${t==="setup"?"active":""}
            onClick=${n=>Y("#setup",n)}>Setup</a>
        `}
        ${s&&d`
          <a href="#admin"
            class=${t==="admin"?"active":""}
            onClick=${n=>Y("#admin",n)}>Admin${_.pendingCount>0?d` <span class="badge">${_.pendingCount}</span>`:""}</a>
        `}
        <span class="spacer" />
        <span class="user">@${_.username}</span>
        <button class="logout" onClick=${qt}>Logout</button>
      </nav>
      ${r&&d`
        <div class="banner-warn">
          Your gift card service is unreachable — batch operations unavailable.
          <button class="btn-link" onClick=${Kt}>Retry</button>
        </div>
      `}
    </div>
  `}function Re(){const[t,e]=m(""),[s,a]=m(""),[r,n]=m(!1),[o,u]=m("");async function p(l){l.preventDefault(),a("");const f=t.toLowerCase().replace(/^@/,"").trim();if(!f){a("Enter your Hive username");return}if(!G()){a("Hive Keychain extension not detected. Install it from hivekeychain.com");return}n(!0);try{u("Signing in...");const i=await Jt(f);A({jwt:i,username:f});const c=await q();if(A({role:c.role,issuerStatus:c.issuer,preApproved:!!c.preApproved,serviceAccount:c.serviceAccount||null}),c.issuer?.service_url){const b=c.issuer.service_url;A({externalServiceUrl:b}),u("Connecting to your service...");const S=await ke(f,b);A(S?{externalJwt:S,externalConnected:!0,externalError:null}:{externalConnected:!1,externalError:"Could not connect to your gift card service"})}c.role==="admin"&&Se("pending").then(b=>{A({pendingCount:b.length})}).catch(()=>{});const h=sessionStorage.getItem("propolis_redirect");sessionStorage.removeItem("propolis_redirect"),h?window.location.hash=h:c.role==="admin"?window.location.hash="#admin":c.role==="issuer"?window.location.hash="#batches":c.issuer?.status==="approved"?window.location.hash="#setup":(c.issuer?.status,window.location.hash="#apply")}catch(i){const c=i instanceof Error?i.message:String(i);/not respond|cancel|denied|rejected/i.test(c)?a(""):a(c)}finally{n(!1),u("")}}return d`
    <div class="ct" style="max-width:420px;margin-top:80px">
      <div class="center mb">
        <h1>HiveInvite</h1>
        <p class="sm mt">Sign in with Hive Keychain to manage gift cards or apply to become an onboarder.</p>
      </div>

      <form onSubmit=${p}>
        <div class="form-row">
          <label for="username">Hive Username</label>
          <input
            id="username"
            type="text"
            placeholder="yourusername"
            value=${t}
            onInput=${l=>e(l.target.value)}
            disabled=${r}
            autocomplete="username"
            autofocus
          />
        </div>

        <button type="submit" disabled=${r}>
          ${r?d`<span class="spinner" style="width:14px;height:14px;border-width:2px;vertical-align:middle;margin-right:8px" /> ${o||"Signing in..."}`:"Sign in with Keychain"}
        </button>
      </form>

      ${s&&d`<p class="err mt1">${s}</p>`}
    </div>
  `}function Gt(t){return new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}function re(t,e){e.preventDefault(),window.location.hash=t}function Wt({batch:t}){const{status:e}=t,s=new Date(t.expiresAt)<new Date;function a(n){n.stopPropagation(),F(`/api/batches/${t.batchId}/pdf`,`${t.batchId}.pdf`)}function r(n){n.stopPropagation(),F(`/api/batches/${t.batchId}/manifest`,`${t.batchId}-manifest.json`)}return d`
    <tr onClick=${n=>re(`#batches/${t.batchId}`,n)} style="cursor:pointer">
      <td class="mono">
        <a href="#batches/${t.batchId}" onClick=${n=>re(`#batches/${t.batchId}`,n)}>
          ${t.batchId.length>24?t.batchId.slice(0,24)+"...":t.batchId}
        </a>
      </td>
      <td>${Gt(t.createdAt)}</td>
      <td>${t.count}</td>
      <td>
        <div class="status-row">
          ${e.active>0&&d`<span><span class="dot dot-active" />${e.active}</span>`}
          ${e.spent>0&&d`<span><span class="dot dot-spent" />${e.spent}</span>`}
          ${e.revoked>0&&d`<span><span class="dot dot-revoked" />${e.revoked}</span>`}
          ${s&&e.active>0&&d`<span class="badge badge-revoked">expired</span>`}
        </div>
      </td>
      <td>
        <div class="fx">
          <button class="dl-btn" onClick=${a} title="Download PDF">PDF</button>
          <button class="dl-btn" onClick=${r} title="Download Manifest">JSON</button>
        </div>
      </td>
    </tr>
  `}function zt(){const[t,e]=m(!0),[s,a]=m(""),r=_.batches,n=!!(_.externalServiceUrl&&!_.externalConnected);return N(()=>{if(n){e(!1);return}e(!0),a(""),Ht().then(o=>{A({batches:o}),e(!1)}).catch(o=>{a(o instanceof Error?o.message:String(o)),e(!1)})},[n]),t?d`<div class="ct"><div class="loading"><span class="spinner" /> Loading batches...</div></div>`:n?d`
      <div class="ct">
        <h2>Batches</h2>
        <div class="banner-warn">Your gift card service is unreachable. Batch operations are unavailable until the connection is restored.</div>
      </div>
    `:s?d`<div class="ct"><p class="err">${s}</p></div>`:d`
    <div class="ct">
      <div class="fx mb" style="justify-content:space-between">
        <h2 style="margin-bottom:0">Batches</h2>
        <button class="btn-sm btn-ok" onClick=${o=>re("#batches/generate",o)}>
          + Generate New Batch
        </button>
      </div>

      ${r.length===0?d`
        <div class="empty-state">
          <p>No batches yet.</p>
          <button onClick=${o=>re("#batches/generate",o)} style="width:auto;display:inline-block">
            Generate Your First Batch
          </button>
        </div>
      `:d`
        <div style="overflow-x:auto">
          <table class="table">
            <thead>
              <tr>
                <th>Batch ID</th>
                <th>Created</th>
                <th>Cards</th>
                <th>Status</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              ${r.map(o=>d`<${Wt} batch=${o} key=${o.batchId} />`)}
            </tbody>
          </table>
        </div>
      `}
    </div>
  `}const Vt=[{value:"en",label:"English"},{value:"zh",label:"Chinese"}];function Qt(t,e){e.preventDefault(),window.location.hash=t}function Xt(){const t=!!(_.externalServiceUrl&&!_.externalConnected),[e,s]=m(10),[a,r]=m("en"),[n,o]=m(365),u="standard",[p,l]=m(""),[f,i]=m(""),[c,h]=m(""),[b,S]=m(""),[w,g]=m("form"),[y,P]=m(""),[E,B]=m(null),H=w!=="form"&&w!=="done";if(t)return d`
      <div class="ct">
        <h2>Generate Batch</h2>
        <div class="banner-warn">Your gift card service is unreachable. Batch generation is unavailable until the connection is restored.</div>
      </div>
    `;async function O(x){if(x.preventDefault(),P(""),!G()){P("Hive Keychain is required to sign batches. Please install the Keychain browser extension.");return}const $=p.trim()?p.split(",").map(D=>D.trim().toLowerCase().replace(/^@/,"")).filter(Boolean):void 0,L=f.trim()?f.split(",").map(D=>D.trim().toLowerCase()).filter(Boolean):void 0,v=c.trim().toLowerCase().replace(/^@/,"")||void 0,U={count:e,locale:a,expiryDays:n,variant:u,design:"hive",...b.trim()&&{note:b.trim()},...$?.length&&{autoFollow:$},...L?.length&&{communities:L},...v&&{referrer:v}};try{g("preparing");const D=await Pt(U);g("signing");const M=await Ft(_.username,D.canonicalString);g("finalizing");const it=await Tt(D.batchId,M);B(it),g("done")}catch(D){P(D instanceof Error?D.message:String(D)),g("form")}}return E?d`
      <div class="ct" style="max-width:520px">
        <div class="card center">
          <h2 style="color:var(--ok)">Batch Generated</h2>
          <p>${E.count} gift cards created.</p>
          <p class="sm mt">Batch ID: <span class="mono">${E.batchId}</span></p>
        </div>

        <div class="btn-row mt2">
          <button class="btn-ok"
            onClick=${()=>F(E.downloads.pdf,`${E.batchId}.pdf`)}>
            Download PDF
          </button>
          <button class="btn-s"
            onClick=${()=>F(E.downloads.manifest,`${E.batchId}-manifest.json`)}>
            Download Manifest
          </button>
        </div>

        <p class="wrn sm mt1">The manifest contains all card secrets (tokens and PINs). Store it securely.</p>

        <div class="btn-row mt2">
          <button class="btn-s" onClick=${x=>Qt(`#batches/${E.batchId}`,x)}>
            View Batch
          </button>
          <button class="btn-s" onClick=${()=>{B(null),S(""),g("form")}}>
            Generate Another
          </button>
        </div>
      </div>
    `:d`
    <div class="ct" style="max-width:520px">
      <h2>Generate New Batch</h2>
      <p class="sm mt mb">Issuer: <strong>@${_.username}</strong></p>

      <form onSubmit=${O}>
        <div class="form-row">
          <label for="count">Number of Cards</label>
          <input id="count" type="number" min="1" max="100" step="1"
            value=${e}
            onInput=${x=>{const $=parseInt(x.target.value);isNaN($)||s($)}}
            disabled=${H} />
          <p class="form-hint">1 to 100 cards per batch</p>
        </div>

        <div class="form-row">
          <label for="locale">Locale</label>
          <select id="locale" value=${a}
            onChange=${x=>r(x.target.value)}
            disabled=${H}>
            ${Vt.map(x=>d`<option value=${x.value}>${x.label} (${x.value})</option>`)}
          </select>
        </div>

        <div class="form-row">
          <label for="expiry">Expiry (days)</label>
          <input id="expiry" type="number" min="1" max="3650" step="1"
            value=${n}
            onInput=${x=>{const $=parseInt(x.target.value);isNaN($)||o($)}}
            disabled=${H} />
        </div>

        <div class="form-row">
          <label for="autoFollow">Auto-Follow (optional)</label>
          <input id="autoFollow" type="text"
            placeholder="user1, user2, user3"
            value=${p}
            onInput=${x=>l(x.target.value)}
            disabled=${H} />
          <p class="form-hint">Comma-separated Hive usernames to follow on account creation (max 20). Adding many increases QR code density — keep it reasonable for reliable scanning.</p>
        </div>

        <div class="form-row">
          <label for="communities">Communities (optional)</label>
          <input id="communities" type="text"
            placeholder="hive-123456, hive-789012"
            value=${f}
            onInput=${x=>i(x.target.value)}
            disabled=${H} />
          <p class="form-hint">Comma-separated Hive community names to subscribe on account creation (max 10). Adding many increases QR code density.</p>
        </div>

        <div class="form-row">
          <label for="referrer">Referrer (optional)</label>
          <input id="referrer" type="text"
            placeholder="username"
            value=${c}
            onInput=${x=>h(x.target.value)}
            disabled=${H} />
          <p class="form-hint">Hive username recorded as account referrer</p>
        </div>

        <div class="form-row">
          <label for="note">Note (optional)</label>
          <textarea id="note" rows="2" placeholder="Batch description..."
            value=${b}
            onInput=${x=>S(x.target.value)}
            disabled=${H} />
        </div>

        <p class="sm mt mb" style="color:var(--tm)">Design: Hive Community (default)</p>

        <button type="submit" disabled=${H}>
          ${w==="preparing"?d`<span class="spinner" style="width:14px;height:14px;border-width:2px;vertical-align:middle;margin-right:8px" /> Preparing batch...`:w==="signing"?d`<span class="spinner" style="width:14px;height:14px;border-width:2px;vertical-align:middle;margin-right:8px" /> Waiting for Keychain...`:w==="finalizing"?d`<span class="spinner" style="width:14px;height:14px;border-width:2px;vertical-align:middle;margin-right:8px" /> Finalizing batch...`:`Generate ${e} Cards`}
        </button>
      </form>

      ${y&&d`<p class="err mt1">${y}</p>`}
    </div>
  `}function pe(t){return t?new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"-"}function Zt(t){return d`<span class="badge ${t==="active"?"badge-active":t==="spent"?"badge-spent":"badge-revoked"}">${t}</span>`}function Ne(t,e){e.preventDefault(),window.location.hash=t}function en({batchId:t}){const[e,s]=m(null),[a,r]=m(!0),[n,o]=m("");if(N(()=>{r(!0),o(""),Lt(t).then(i=>{s(i),r(!1)}).catch(i=>{o(i instanceof Error?i.message:String(i)),r(!1)})},[t]),a)return d`<div class="ct"><div class="loading"><span class="spinner" /> Loading batch...</div></div>`;if(n)return d`
      <div class="ct">
        <p class="err">${n}</p>
        <a href="#batches" onClick=${i=>Ne("#batches",i)} class="sm">Back to batches</a>
      </div>
    `;if(!e)return null;const u=e.cards.filter(i=>i.status==="active").length,p=e.cards.filter(i=>i.status==="spent").length,l=e.cards.filter(i=>i.status==="revoked").length,f=new Date(e.expiresAt)<new Date;return d`
    <div class="ct">
      <a href="#batches" onClick=${i=>Ne("#batches",i)} class="sm">← Back to batches</a>

      <div class="card mt1">
        <dl class="meta">
          <dt>Batch ID</dt>
          <dd class="mono">${e.batchId}</dd>
          <dt>Created</dt>
          <dd>${pe(e.createdAt)}</dd>
          <dt>Expires</dt>
          <dd>${pe(e.expiresAt)}${f?d` <span class="badge badge-revoked">expired</span>`:""}</dd>
          <dt>Cards</dt>
          <dd>${e.count}</dd>
          <dt>Type</dt>
          <dd>${e.promiseType}</dd>
          ${e.declarationTx&&d`
            <dt>Declaration TX</dt>
            <dd class="mono xs">${e.declarationTx}</dd>
          `}
          ${e.merkleRoot&&d`
            <dt>Merkle Root</dt>
            <dd class="mono xs">${e.merkleRoot.slice(0,16)}...</dd>
          `}
          ${e.note&&d`
            <dt>Note</dt>
            <dd>${e.note}</dd>
          `}
        </dl>

        <div class="status-row mb">
          <span><span class="dot dot-active" />${u} active</span>
          <span><span class="dot dot-spent" />${p} spent</span>
          <span><span class="dot dot-revoked" />${l} revoked</span>
        </div>

        <div class="fx">
          <button class="dl-btn"
            onClick=${()=>F(`/api/batches/${e.batchId}/pdf`,`${e.batchId}.pdf`)}>
            Download PDF
          </button>
          <button class="dl-btn"
            onClick=${()=>F(`/api/batches/${e.batchId}/manifest`,`${e.batchId}-manifest.json`)}>
            Download Manifest
          </button>
        </div>
      </div>

      <h2>Cards (${e.cards.length})</h2>
      <div style="overflow-x:auto">
        <table class="table">
          <thead>
            <tr>
              <th>Token Prefix</th>
              <th>Status</th>
              <th>Claimed By</th>
              <th>Claimed At</th>
            </tr>
          </thead>
          <tbody>
            ${e.cards.map(i=>d`
              <tr key=${i.tokenPrefix}>
                <td class="mono">${i.tokenPrefix}...</td>
                <td>${Zt(i.status)}</td>
                <td>${i.claimedBy?`@${i.claimedBy}`:"-"}</td>
                <td class="sm">${pe(i.claimedAt)}</td>
              </tr>
            `)}
          </tbody>
        </table>
      </div>
    </div>
  `}function tn(){const[t,e]=m(""),[s,a]=m(""),[r,n]=m(!1),[o,u]=m(""),[p,l]=m(null);if(_.issuerStatus){const i=_.issuerStatus;return d`
      <div class="ct">
        <div class="card center">
          <h2>Application Status</h2>
          <p>You applied on ${new Date(i.applied_at).toLocaleDateString()}.</p>
          <p>Status: <span class="badge badge-${i.status}">${i.status}</span></p>
          ${i.status==="pending"&&d`
            <p class="tm mt1">Your application is being reviewed. You'll receive a notification on Hive when it's approved.</p>
          `}
          ${i.status==="approved"&&d`
            <p class="mt1"><a href="#setup">Complete your setup →</a></p>
          `}
          ${i.status==="active"&&d`
            <p class="mt1"><a href="#batches">Go to your dashboard →</a></p>
          `}
        </div>
      </div>
    `}async function f(i){if(i.preventDefault(),!!t.trim()){u(""),n(!0);try{if(!G())throw new Error("Hive Keychain extension is required. Please install it and refresh.");const c=_.serviceAccount;if(!c)throw new Error("Service account not available. Please log out and log in again.");const h=await at(_.username,"propolis_issuer_apply","Posting",{service:c,description:t.trim(),contact:s.trim()||void 0},"Apply to become an onboarder on HiveInvite"),b=typeof h=="object"&&h!==null?h.tx_id??h.id:String(h),S=await Bt(t.trim(),s.trim()||void 0,b);l(S)}catch(c){u(c instanceof Error?c.message:String(c))}finally{n(!1)}}}return p?d`
      <div class="ct">
        <div class="card center">
          <h2 style="color:var(--ok)">Application Submitted</h2>
          <p>Your application has been recorded on-chain and is pending review.</p>
          <p class="tm mt1">You'll receive a notification on Hive when your application is approved.</p>
        </div>
      </div>
    `:d`
    <div class="ct">
      <h1>Become an Onboarder</h1>
      <p class="tm">Apply to issue Hive gift cards and onboard new users to the Hive blockchain.</p>

      <form class="card" onSubmit=${f}>
        <div class="form-row">
          <label for="description">Description *</label>
          <textarea
            id="description"
            rows="3"
            placeholder="Tell us about your community and how you plan to use gift cards..."
            value=${t}
            onInput=${i=>e(i.target.value)}
            disabled=${r}
            required
          />
        </div>

        <div class="form-row">
          <label for="contact">Contact (optional)</label>
          <input
            id="contact"
            type="text"
            placeholder="Telegram, Discord, or other contact method"
            value=${s}
            onInput=${i=>a(i.target.value)}
            disabled=${r}
          />
        </div>

        <button type="submit" disabled=${r||!t.trim()}>
          ${r?d`<span class="spinner" /> Broadcasting...`:"Submit Application"}
        </button>

        ${o&&d`<p class="err mt1">${o}</p>`}
      </form>

      <div class="notice mt1">
        <strong>What happens next?</strong>
        <p>Your application will be broadcast on the Hive blockchain (signed with your posting key) and reviewed by the service operator. Once approved, you'll receive a Hive transfer notification with a link to complete your setup.</p>
      </div>
    </div>
  `}function nn(){const[t,e]=m(null),[s,a]=m(!0),[r,n]=m(""),[o,u]=m(!1),[p,l]=m(null),[f,i]=m(!1),[c,h]=m(""),[b,S]=m(!1),[w,g]=m(null),[y,P]=m(!1);async function E(){try{const v=await q();v.issuer&&(A({issuerStatus:v.issuer,role:v.role}),v.issuer.service_url?(l("self-hosted"),h(v.issuer.service_url)):v.issuer.delegation_verified_at&&l("delegate")),e(v.setupStatus)}catch(v){n(v instanceof Error?v.message:String(v))}finally{a(!1)}}N(()=>{E()},[]);async function B(){u(!0),n("");try{const v=await q();v.issuer&&A({issuerStatus:v.issuer,role:v.role}),e(v.setupStatus),v.setupStatus?.delegated||v.issuer?.status==="active"?window.location.hash="#batches":v.setupStatus&&!v.setupStatus.delegated&&n("Delegation not detected yet. Please complete the delegation step and try again.")}catch(v){n(v instanceof Error?v.message:String(v))}finally{u(!1)}}async function H(){i(!0),n("");try{if(!G())throw new Error("Hive Keychain extension is required.");const v=t?.serviceAccount;if(!v)throw new Error("Service account name not available. Please refresh and try again.");await Yt(_.username,v,"Active");for(let U=0;U<5;U++){await new Promise(M=>setTimeout(M,3e3));const D=await q();if(D.issuer&&A({issuerStatus:D.issuer,role:D.role}),e(D.setupStatus),D.setupStatus?.delegated){window.location.hash="#batches";return}}n('Delegation broadcast succeeded but verification is taking longer than expected. Try clicking "Check Delegation" in a moment.')}catch(v){const U=v instanceof Error?v.message:String(v);/not respond|cancel|denied|rejected/i.test(U)?n(""):n(U)}finally{i(!1)}}async function O(){S(!0),g(null),n("");try{const v=c.trim();if(!v){n("Enter your gift card service URL");return}try{new URL(v)}catch{n("Enter a valid URL (e.g. https://your-service.fly.dev)");return}const U=await Ut(v);g(U),U||n("Could not reach your service. Check the URL and ensure CORS is configured.")}finally{S(!1)}}async function x(){P(!0),n("");try{const v=c.trim(),U=await Ot(v);if(A({issuerStatus:U}),U.status==="active"&&U.service_url){const D=await q();if(A({role:D.role,issuerStatus:D.issuer,externalServiceUrl:U.service_url}),_.username){const M=await ke(_.username,U.service_url);A(M?{externalJwt:M,externalConnected:!0,externalError:null}:{externalConnected:!1,externalError:"Connected but could not authenticate"})}window.location.hash="#batches"}}catch(v){n(v instanceof Error?v.message:String(v))}finally{P(!1)}}if(s)return d`<div class="ct"><div class="loading"><span class="spinner" /> Loading setup status...</div></div>`;const $=_.issuerStatus;if(!$&&(_.role==="issuer"||_.role==="admin"))return d`
      <div class="ct">
        <h1>Issuer Setup</h1>
        ${he(4)}
        <div class="card center">
          <h2 style="color:var(--ok)">Setup Complete</h2>
          <p>You're ready to generate gift cards.</p>
          <p class="mt1"><a href="#batches" class="btn">Go to Dashboard →</a></p>
        </div>
      </div>
    `;if(!$||$.status==="pending")return d`
      <div class="ct">
        <div class="card center">
          <h2>Application Pending</h2>
          <p class="tm">Your application is being reviewed. You'll be notified when approved.</p>
        </div>
      </div>
    `;const L=$.status==="active"||p&&(t?.delegated||w)?4:p?3:$.status==="approved"?2:1;return $.status==="active"?d`
      <div class="ct">
        <h1>Issuer Setup</h1>
        ${he(4)}

        <div class="card center">
          <h2 style="color:var(--ok)">Setup Complete</h2>
          <p>You're ready to generate gift cards!</p>
          ${$.service_url&&d`
            <dl class="meta mt1">
              <dt>External Service</dt>
              <dd>${$.service_url}</dd>
            </dl>
          `}
          ${t&&d`<p class="tm">Account creation tokens: <strong>${t.pendingTokens}</strong></p>`}
          <p class="mt1"><a href="#batches" class="btn">Go to Dashboard →</a></p>
        </div>

        ${$.service_url&&d`
          <div class="card mt1">
            <h3>Update Service URL</h3>
            <div class="form-row">
              <input
                type="url"
                placeholder="https://your-service.fly.dev"
                value=${c}
                onInput=${v=>{h(v.target.value),g(null)}}
              />
            </div>
            <div class="fx gap">
              <button onClick=${O} disabled=${b}>
                ${b?d`<span class="spinner" style="width:14px;height:14px;border-width:2px;vertical-align:middle;margin-right:8px" /> Checking...`:"Check Connection"}
              </button>
              <button onClick=${x} disabled=${y||!w}>
                ${y?d`<span class="spinner" style="width:14px;height:14px;border-width:2px;vertical-align:middle;margin-right:8px" /> Saving...`:"Update URL"}
              </button>
            </div>
            ${w===!0&&d`<p class="mt1" style="color:var(--ok)">Service is reachable</p>`}
            ${r&&d`<p class="err mt1">${r}</p>`}
          </div>
        `}
      </div>
    `:d`
    <div class="ct">
      <h1>Issuer Setup</h1>
      ${_.preApproved&&d`
        <div class="notice mb">
          You've been pre-approved as a trusted Hive community member — no application needed. Complete the setup below to start issuing gift cards.
        </div>
      `}
      ${he(L)}

      ${!p&&d`
        <div class="card">
          <h2>Choose Setup Mode</h2>
          <p class="tm mb">How would you like to operate your gift card service?</p>

          <div style="display:flex;gap:16px;flex-wrap:wrap">
            <div class="card" style="flex:1;min-width:220px;cursor:pointer;border:2px solid transparent" onClick=${()=>l("delegate")}>
              <h3>Delegate to Operator</h3>
              <p class="sm">The operator's service creates accounts on your behalf. You delegate your active key authority.</p>
            </div>
            <div class="card" style="flex:1;min-width:220px;cursor:pointer;border:2px solid transparent" onClick=${()=>l("self-hosted")}>
              <h3>Use Your Own Service</h3>
              <p class="sm">You run your own gift card service. Register its URL here. You retain full control of all keys.</p>
            </div>
          </div>
        </div>
      `}

      ${p==="delegate"&&sn(t,f,o,r,H,B,()=>l(null))}
      ${p==="self-hosted"&&an(c,h,b,w,g,y,r,n,O,x,()=>l(null))}
    </div>
  `}function he(t){return d`
    <div class="steps">
      <div class="step ${t>=1?"done":""}">
        <span class="step-num">1</span>
        <span>Apply</span>
      </div>
      <div class="step-line ${t>=2?"done":""}" />
      <div class="step ${t>=2?"done":""}">
        <span class="step-num">2</span>
        <span>Approved</span>
      </div>
      <div class="step-line ${t>=3?"done":""}" />
      <div class="step ${t>=3?"done":""}">
        <span class="step-num">3</span>
        <span>Configure</span>
      </div>
      <div class="step-line ${t>=4?"done":""}" />
      <div class="step ${t>=4?"done":""}">
        <span class="step-num">4</span>
        <span>Ready</span>
      </div>
    </div>
  `}function sn(t,e,s,a,r,n,o){const u=t?.serviceAccount||"the service account",p=t?.operatorAccount,l=e||s;return d`
    <div class="card">
      <h2>Delegate Active Authority</h2>
      <div class="notice">
        <strong>What this means:</strong>
        <p>You will grant <strong>@${u}</strong> active authority over your account. This allows the service to create Hive accounts and delegate HP on your behalf when gift cards are claimed.</p>
        <p><strong style="color:var(--warn,#e8a435)">Trust warning:</strong> Active authority grants <strong>@${u}</strong> broad control over your account, including the ability to transfer HIVE, HBD, and other assets. <strong>Only proceed if you trust the operator${p?d` (<a href=${"https://peakd.com/@"+p} target="_blank" rel="noopener">@${p}</a>)`:""} of this service.</strong></p>
        <p>You can revoke this delegation at any time through Peakd or any Hive wallet.</p>
      </div>

      <div class="fx mt1 gap">
        <button onClick=${r} disabled=${l}>
          ${e?d`<span class="spinner" style="width:14px;height:14px;border-width:2px;vertical-align:middle;margin-right:8px" /> Delegating...`:s?d`<span class="spinner" style="width:14px;height:14px;border-width:2px;vertical-align:middle;margin-right:8px" /> Verifying...`:d`Delegate to @${u}`}
        </button>
        <button onClick=${o} class="btn-secondary" disabled=${l}>Back</button>
      </div>

      <p class="sm tm mt1">Clicking the button will prompt Hive Keychain to approve adding @${u} to your active authority.</p>

      ${t?.delegated&&d`
        <p class="mt1" style="color:var(--ok)">Delegation verified — you already have @${u} in your active authority.</p>
      `}

      ${t&&d`
        <dl class="meta mt1">
          <dt>Account Creation Tokens</dt>
          <dd>${t.pendingTokens}</dd>
        </dl>
      `}

      ${a&&d`<p class="err mt1">${a}</p>`}

      ${!t?.delegated&&d`
        <details class="mt1">
          <summary class="manual-toggle">Don't have Keychain? Manual instructions</summary>
          <div class="notice mt1">
            <p>Add <strong>@${u}</strong> to your account's <strong>Active</strong> authority using any of these methods:</p>
            <ol class="manual-steps">
              <li>Go to <a href="https://peakd.com/@${_.username}/permissions" target="_blank" rel="noopener">your permissions on Peakd</a></li>
              <li>Under <strong>Active</strong>, click <strong>Add Account</strong></li>
              <li>Enter <code>@${u}</code> with a weight of <strong>1</strong></li>
              <li>Save and confirm with your active or master key</li>
            </ol>
            <p class="sm tm">After completing this, click <strong>Check Delegation</strong> below to verify.</p>
          </div>
          <button onClick=${n} disabled=${l} class="mt1">
            ${s?d`<span class="spinner" style="width:14px;height:14px;border-width:2px;vertical-align:middle;margin-right:8px" /> Checking...`:"Check Delegation"}
          </button>
        </details>
      `}
    </div>
  `}function an(t,e,s,a,r,n,o,u,p,l,f){return d`
    <div class="card">
      <h2>Register Your Service</h2>
      <div class="notice">
        <p>Enter the URL of your gift card service. The dashboard will route batch operations to your service directly.</p>
        <p><strong>Requirements:</strong> Your service must implement the <a href="https://github.com/demotruk/HiveAccessibleAnywhere" target="_blank" rel="noopener">standard batch API</a> and allow CORS from this dashboard.</p>
      </div>

      <div class="form-row mt1">
        <label>Gift Card Service URL</label>
        <input
          type="url"
          placeholder="https://your-service.fly.dev"
          value=${t}
          onInput=${i=>{e(i.target.value),r(null),u("")}}
        />
      </div>

      <div class="fx mt1 gap">
        <button onClick=${p} disabled=${s||!t.trim()}>
          ${s?d`<span class="spinner" style="width:14px;height:14px;border-width:2px;vertical-align:middle;margin-right:8px" /> Checking...`:"Check Connection"}
        </button>
        <button onClick=${l} disabled=${n||!a}>
          ${n?d`<span class="spinner" style="width:14px;height:14px;border-width:2px;vertical-align:middle;margin-right:8px" /> Saving...`:"Register Service"}
        </button>
        <button onClick=${f} class="btn-secondary">Back</button>
      </div>

      ${a===!0&&d`<p class="mt1" style="color:var(--ok)">Service is reachable</p>`}
      ${a===!1&&d`<p class="mt1" style="color:var(--er)">Service is not reachable</p>`}
      ${o&&d`<p class="err mt1">${o}</p>`}
    </div>
  `}function rt(t){return new Date(t).toLocaleDateString()}function rn(){const[t,e]=m([]),[s,a]=m(!0),[r,n]=m(""),[o,u]=m(null);N(()=>{Se("pending").then(l=>{e(l),A({pendingCount:l.length}),a(!1)}).catch(l=>{n(l.message),a(!1)})},[]);async function p(l){n(""),u(l);try{if(!G())throw new Error("Hive Keychain required to broadcast approval.");const f=await at(_.username,"propolis_issuer_approve","Posting",{issuer:l,approved_at:new Date().toISOString()},`Approve @${l} as an issuer`),i=typeof f=="object"&&f!==null?f.tx_id??f.id:String(f);await jt(l,i),e(c=>c.filter(h=>h.username!==l)),A({pendingCount:Math.max(0,_.pendingCount-1)})}catch(f){n(f instanceof Error?f.message:String(f))}finally{u(null)}}return s?d`<div class="loading"><span class="spinner" /> Loading...</div>`:r?d`<p class="err">${r}</p>`:t.length===0?d`<p class="tm">No pending applications.</p>`:d`
    <table class="table">
      <thead>
        <tr>
          <th>Username</th>
          <th>Description</th>
          <th>Contact</th>
          <th>Applied</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${t.map(l=>d`
          <tr key=${l.username}>
            <td class="mono">@${l.username}</td>
            <td>${l.description||"-"}</td>
            <td>${l.contact||"-"}</td>
            <td>${rt(l.applied_at)}</td>
            <td>
              <button
                class="btn-sm"
                onClick=${()=>p(l.username)}
                disabled=${o===l.username}
              >
                ${o===l.username?d`<span class="spinner" />`:"Approve"}
              </button>
            </td>
          </tr>
        `)}
      </tbody>
    </table>
  `}function on(){const[t,e]=m([]),[s,a]=m(!0),[r,n]=m(""),[o,u]=m(null),[p,l]=m({});N(()=>{Se().then(c=>{e(c.filter(h=>h.status!=="pending")),a(!1)}).catch(c=>{n(c.message),a(!1)})},[]);function f(c,h){l(b=>({...b,[c]:h}))}async function i(c){const h=p[c];if(!h)return;const b=t.find(w=>w.username===c);if(!b||b.status===h)return;const S={active:`Re-activate @${c}?`,revoked:`Revoke @${c}? They will lose dashboard access. Existing cards remain redeemable.`,banned:`Ban @${c}? This will also block redemption of their existing cards.`};if(confirm(S[h]||`Change @${c} to ${h}?`)){n(""),u(c);try{let w;if(h==="revoked")w=await Rt(c);else if(h==="banned")w=await Nt(c);else{n(`Cannot transition to '${h}' from admin panel`);return}e(g=>g.map(y=>y.username===c?{...y,status:w.status}:y)),l(g=>{const y={...g};return delete y[c],y})}catch(w){n(w instanceof Error?w.message:String(w))}finally{u(null)}}}return s?d`<div class="loading"><span class="spinner" /> Loading...</div>`:r?d`<p class="err">${r}</p>`:t.length===0?d`<p class="tm">No active issuers yet.</p>`:d`
    <table class="table">
      <thead>
        <tr>
          <th>Username</th>
          <th>Status</th>
          <th>Batches</th>
          <th>Cards</th>
          <th>Claimed</th>
          <th>Since</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${t.map(c=>{const h=p[c.username]||c.status,b=h!==c.status;return d`
            <tr key=${c.username}>
              <td class="mono">@${c.username}</td>
              <td>
                <select
                  value=${h}
                  onInput=${S=>f(c.username,S.target.value)}
                  disabled=${o===c.username}
                  style="width:auto;margin:0;padding:4px 8px;font-size:.85rem"
                >
                  ${c.status==="approved"&&d`<option value="approved">Approved</option>`}
                  <option value="active">Active</option>
                  <option value="revoked">Revoked</option>
                  <option value="banned">Banned</option>
                </select>
              </td>
              <td>${c.batch_count}</td>
              <td>${c.total_cards}</td>
              <td>${c.claimed_cards}</td>
              <td>${rt(c.approved_at||c.applied_at)}</td>
              <td>
                ${b&&d`
                  <button
                    class="btn-sm"
                    onClick=${()=>i(c.username)}
                    disabled=${o===c.username}
                  >
                    ${o===c.username?d`<span class="spinner" />`:"Apply"}
                  </button>
                `}
              </td>
            </tr>
          `})}
      </tbody>
    </table>
  `}function ln(){const[t,e]=m("pending");return d`
    <div class="ct">
      <h1>Admin Panel</h1>

      <div class="tabs">
        <button
          class="tab ${t==="pending"?"active":""}"
          onClick=${()=>e("pending")}
        >Pending Applications</button>
        <button
          class="tab ${t==="active"?"active":""}"
          onClick=${()=>e("active")}
        >Active Issuers</button>
      </div>

      <div class="mt1">
        ${t==="pending"?d`<${rn} />`:d`<${on} />`}
      </div>
    </div>
  `}function Me(t){const e=t.replace(/^#\/?/,"")||"login";return e==="login"?{view:"login",path:e}:e==="apply"?{view:"apply",path:e}:e==="setup"?{view:"setup",path:e}:e==="admin"?{view:"admin",path:e}:e==="batches"?{view:"batch-list",path:e}:e==="batches/generate"?{view:"batch-form",path:e}:e.startsWith("batches/")?{view:"batch-detail",param:e.slice(8),path:e}:{view:"batch-list",path:e}}function cn(){const[t,e]=m(Me(window.location.hash)),[,s]=m(0);N(()=>{function r(){e(Me(window.location.hash))}return window.addEventListener("hashchange",r),()=>window.removeEventListener("hashchange",r)},[]),N(()=>xt(()=>s(r=>r+1)),[]);const a=!!_.jwt;return!a&&t.view!=="login"?(sessionStorage.setItem("propolis_redirect",`#${t.path}`),d`<${Re} />`):a&&t.view==="login"?(_.role==="admin"?window.location.hash="#admin":_.role==="issuer"?window.location.hash="#batches":_.issuerStatus?.status==="approved"?window.location.hash="#setup":window.location.hash="#apply",null):t.view==="login"?d`<${Re} />`:t.view==="apply"?d`
      <div class="ct">
        <${z} route=${t.view} />
      </div>
      <${tn} />
    `:t.view==="setup"?d`
      <div class="ct">
        <${z} route=${t.view} />
      </div>
      <${nn} />
    `:t.view==="admin"?_.role!=="admin"?(window.location.hash="#batches",null):d`
      <div class="ct">
        <${z} route=${t.view} />
      </div>
      <${ln} />
    `:_.role!=="issuer"&&_.role!=="admin"?(_.issuerStatus?.status==="approved"?window.location.hash="#setup":window.location.hash="#apply",null):d`
    <div class="ct">
      <${z} route=${t.view} />
    </div>
    ${t.view==="batch-list"&&d`<${zt} />`}
    ${t.view==="batch-form"&&d`<${Xt} />`}
    ${t.view==="batch-detail"&&t.param&&d`<${en} batchId=${t.param} key=${t.param} />`}
  `}ht(d`<${cn} />`,document.getElementById("app"));
