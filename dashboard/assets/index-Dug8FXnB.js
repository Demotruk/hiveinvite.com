(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();var ie,C,Ye,j,Ae,qe,Ke,Ge,ye,ve,_e,ee={},te=[],pt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,le=Array.isArray;function O(e,t){for(var n in t)e[n]=t[n];return e}function $e(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function We(e,t,n){var s,r,a,o={};for(a in t)a=="key"?s=t[a]:a=="ref"?r=t[a]:o[a]=t[a];if(arguments.length>2&&(o.children=arguments.length>3?ie.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)o[a]===void 0&&(o[a]=e.defaultProps[a]);return Q(e,o,s,r,null)}function Q(e,t,n,s,r){var a={type:e,props:t,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++Ye,__i:-1,__u:0};return r==null&&C.vnode!=null&&C.vnode(a),a}function ce(e){return e.children}function X(e,t){this.props=e,this.context=t}function Y(e,t){if(t==null)return e.__?Y(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Y(e):null}function ht(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,s=[],r=[],a=O({},t);a.__v=t.__v+1,C.vnode&&C.vnode(a),we(e.__P,a,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,s,n??Y(t),!!(32&t.__u),r),a.__v=t.__v,a.__.__k[a.__i]=a,Xe(s,a,r),t.__e=t.__=null,a.__e!=n&&ze(a)}}function ze(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),ze(e)}function Ie(e){(!e.__d&&(e.__d=!0)&&j.push(e)&&!ne.__r++||Ae!=C.debounceRendering)&&((Ae=C.debounceRendering)||qe)(ne)}function ne(){try{for(var e,t=1;j.length;)j.length>t&&j.sort(Ke),e=j.shift(),t=j.length,ht(e)}finally{j.length=ne.__r=0}}function Ve(e,t,n,s,r,a,o,d,p,l,v){var i,u,h,b,k,$,w,y=s&&s.__k||te,D=t.length;for(p=ft(n,t,y,p,D),i=0;i<D;i++)(h=n.__k[i])!=null&&(u=h.__i!=-1&&y[h.__i]||ee,h.__i=i,$=we(e,h,u,r,a,o,d,p,l,v),b=h.__e,h.ref&&u.ref!=h.ref&&(u.ref&&xe(u.ref,null,h),v.push(h.ref,h.__c||b,h)),k==null&&b!=null&&(k=b),(w=!!(4&h.__u))||u.__k===h.__k?p=Qe(h,p,e,w):typeof h.type=="function"&&$!==void 0?p=$:b&&(p=b.nextSibling),h.__u&=-7);return n.__e=k,p}function ft(e,t,n,s,r){var a,o,d,p,l,v=n.length,i=v,u=0;for(e.__k=new Array(r),a=0;a<r;a++)(o=t[a])!=null&&typeof o!="boolean"&&typeof o!="function"?(typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?o=e.__k[a]=Q(null,o,null,null,null):le(o)?o=e.__k[a]=Q(ce,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=e.__k[a]=Q(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):e.__k[a]=o,p=a+u,o.__=e,o.__b=e.__b+1,d=null,(l=o.__i=vt(o,n,p,i))!=-1&&(i--,(d=n[l])&&(d.__u|=2)),d==null||d.__v==null?(l==-1&&(r>v?u--:r<v&&u++),typeof o.type!="function"&&(o.__u|=4)):l!=p&&(l==p-1?u--:l==p+1?u++:(l>p?u--:u++,o.__u|=4))):e.__k[a]=null;if(i)for(a=0;a<v;a++)(d=n[a])!=null&&(2&d.__u)==0&&(d.__e==s&&(s=Y(d)),et(d,d));return s}function Qe(e,t,n,s){var r,a;if(typeof e.type=="function"){for(r=e.__k,a=0;r&&a<r.length;a++)r[a]&&(r[a].__=e,t=Qe(r[a],t,n,s));return t}e.__e!=t&&(s&&(t&&e.type&&!t.parentNode&&(t=Y(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function vt(e,t,n,s){var r,a,o,d=e.key,p=e.type,l=t[n],v=l!=null&&(2&l.__u)==0;if(l===null&&d==null||v&&d==l.key&&p==l.type)return n;if(s>(v?1:0)){for(r=n-1,a=n+1;r>=0||a<t.length;)if((l=t[o=r>=0?r--:a++])!=null&&(2&l.__u)==0&&d==l.key&&p==l.type)return o}return-1}function Ee(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||pt.test(t)?n:n+"px"}function V(e,t,n,s,r){var a,o;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof s=="string"&&(e.style.cssText=s=""),s)for(t in s)n&&t in n||Ee(e.style,t,"");if(n)for(t in n)s&&n[t]==s[t]||Ee(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")a=t!=(t=t.replace(Ge,"$1")),o=t.toLowerCase(),t=o in e||t=="onFocusOut"||t=="onFocusIn"?o.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?s?n.u=s.u:(n.u=ye,e.addEventListener(t,a?_e:ve,a)):e.removeEventListener(t,a?_e:ve,a);else{if(r=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function De(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=ye++;else if(t.t<n.u)return;return n(C.event?C.event(t):t)}}}function we(e,t,n,s,r,a,o,d,p,l){var v,i,u,h,b,k,$,w,y,D,P,B,R,U,L,S=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(p=!!(32&n.__u),a=[d=t.__e=n.__e]),(v=C.__b)&&v(t);e:if(typeof S=="function")try{if(w=t.props,y=S.prototype&&S.prototype.render,D=(v=S.contextType)&&s[v.__c],P=v?D?D.props.value:v.__:s,n.__c?$=(i=t.__c=n.__c).__=i.__E:(y?t.__c=i=new S(w,P):(t.__c=i=new X(w,P),i.constructor=S,i.render=mt),D&&D.sub(i),i.state||(i.state={}),i.__n=s,u=i.__d=!0,i.__h=[],i._sb=[]),y&&i.__s==null&&(i.__s=i.state),y&&S.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=O({},i.__s)),O(i.__s,S.getDerivedStateFromProps(w,i.__s))),h=i.props,b=i.state,i.__v=t,u)y&&S.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),y&&i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(y&&S.getDerivedStateFromProps==null&&w!==h&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(w,P),t.__v==n.__v||!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(w,i.__s,P)===!1){t.__v!=n.__v&&(i.props=w,i.state=i.__s,i.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(g){g&&(g.__=t)}),te.push.apply(i.__h,i._sb),i._sb=[],i.__h.length&&o.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(w,i.__s,P),y&&i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(h,b,k)})}if(i.context=P,i.props=w,i.__P=e,i.__e=!1,B=C.__r,R=0,y)i.state=i.__s,i.__d=!1,B&&B(t),v=i.render(i.props,i.state,i.context),te.push.apply(i.__h,i._sb),i._sb=[];else do i.__d=!1,B&&B(t),v=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++R<25);i.state=i.__s,i.getChildContext!=null&&(s=O(O({},s),i.getChildContext())),y&&!u&&i.getSnapshotBeforeUpdate!=null&&(k=i.getSnapshotBeforeUpdate(h,b)),U=v!=null&&v.type===ce&&v.key==null?Ze(v.props.children):v,d=Ve(e,le(U)?U:[U],t,n,s,r,a,o,d,p,l),i.base=t.__e,t.__u&=-161,i.__h.length&&o.push(i),$&&(i.__E=i.__=null)}catch(g){if(t.__v=null,p||a!=null)if(g.then){for(t.__u|=p?160:128;d&&d.nodeType==8&&d.nextSibling;)d=d.nextSibling;a[a.indexOf(d)]=null,t.__e=d}else{for(L=a.length;L--;)$e(a[L]);me(t)}else t.__e=n.__e,t.__k=n.__k,g.then||me(t);C.__e(g,t,n)}else a==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):d=t.__e=_t(n.__e,t,n,s,r,a,o,p,l);return(v=C.diffed)&&v(t),128&t.__u?void 0:d}function me(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(me))}function Xe(e,t,n){for(var s=0;s<n.length;s++)xe(n[s],n[++s],n[++s]);C.__c&&C.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(a){a.call(r)})}catch(a){C.__e(a,r.__v)}})}function Ze(e){return typeof e!="object"||e==null||e.__b>0?e:le(e)?e.map(Ze):O({},e)}function _t(e,t,n,s,r,a,o,d,p){var l,v,i,u,h,b,k,$=n.props||ee,w=t.props,y=t.type;if(y=="svg"?r="http://www.w3.org/2000/svg":y=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),a!=null){for(l=0;l<a.length;l++)if((h=a[l])&&"setAttribute"in h==!!y&&(y?h.localName==y:h.nodeType==3)){e=h,a[l]=null;break}}if(e==null){if(y==null)return document.createTextNode(w);e=document.createElementNS(r,y,w.is&&w),d&&(C.__m&&C.__m(t,a),d=!1),a=null}if(y==null)$===w||d&&e.data==w||(e.data=w);else{if(a=a&&ie.call(e.childNodes),!d&&a!=null)for($={},l=0;l<e.attributes.length;l++)$[(h=e.attributes[l]).name]=h.value;for(l in $)h=$[l],l=="dangerouslySetInnerHTML"?i=h:l=="children"||l in w||l=="value"&&"defaultValue"in w||l=="checked"&&"defaultChecked"in w||V(e,l,null,h,r);for(l in w)h=w[l],l=="children"?u=h:l=="dangerouslySetInnerHTML"?v=h:l=="value"?b=h:l=="checked"?k=h:d&&typeof h!="function"||$[l]===h||V(e,l,h,$[l],r);if(v)d||i&&(v.__html==i.__html||v.__html==e.innerHTML)||(e.innerHTML=v.__html),t.__k=[];else if(i&&(e.innerHTML=""),Ve(t.type=="template"?e.content:e,le(u)?u:[u],t,n,s,y=="foreignObject"?"http://www.w3.org/1999/xhtml":r,a,o,a?a[0]:n.__k&&Y(n,0),d,p),a!=null)for(l=a.length;l--;)$e(a[l]);d||(l="value",y=="progress"&&b==null?e.removeAttribute("value"):b!=null&&(b!==e[l]||y=="progress"&&!b||y=="option"&&b!=$[l])&&V(e,l,b,$[l],r),l="checked",k!=null&&k!=e[l]&&V(e,l,k,$[l],r))}return e}function xe(e,t,n){try{if(typeof e=="function"){var s=typeof e.__u=="function";s&&e.__u(),s&&t==null||(e.__u=e(t))}else e.current=t}catch(r){C.__e(r,n)}}function et(e,t,n){var s,r;if(C.unmount&&C.unmount(e),(s=e.ref)&&(s.current&&s.current!=e.__e||xe(s,null,t)),(s=e.__c)!=null){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(a){C.__e(a,t)}s.base=s.__P=null}if(s=e.__k)for(r=0;r<s.length;r++)s[r]&&et(s[r],t,n||typeof e.type!="function");n||$e(e.__e),e.__c=e.__=e.__e=void 0}function mt(e,t,n){return this.constructor(e,n)}function gt(e,t,n){var s,r,a,o;t==document&&(t=document.documentElement),C.__&&C.__(e,t),r=(s=!1)?null:t.__k,a=[],o=[],we(t,e=t.__k=We(ce,null,[e]),r||ee,ee,t.namespaceURI,r?null:t.firstChild?ie.call(t.childNodes):null,a,r?r.__e:t.firstChild,s,o),Xe(a,e,o)}ie=te.slice,C={__e:function(e,t,n,s){for(var r,a,o;t=t.__;)if((r=t.__c)&&!r.__)try{if((a=r.constructor)&&a.getDerivedStateFromError!=null&&(r.setState(a.getDerivedStateFromError(e)),o=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,s||{}),o=r.__d),o)return r.__E=r}catch(d){e=d}throw e}},Ye=0,X.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=O({},this.state),typeof e=="function"&&(e=e(O({},n),this.props)),e&&O(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Ie(this))},X.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ie(this))},X.prototype.render=ce,j=[],qe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ke=function(e,t){return e.__v.__b-t.__v.__b},ne.__r=0,Ge=/(PointerCapture)$|Capture$/i,ye=0,ve=De(!1),_e=De(!0);var tt=function(e,t,n,s){var r;t[0]=0;for(var a=1;a<t.length;a++){var o=t[a++],d=t[a]?(t[0]|=o?1:2,n[t[a++]]):t[++a];o===3?s[0]=d:o===4?s[1]=Object.assign(s[1]||{},d):o===5?(s[1]=s[1]||{})[t[++a]]=d:o===6?s[1][t[++a]]+=d+"":o?(r=e.apply(d,tt(e,d,n,["",null])),s.push(r),d[0]?t[0]|=2:(t[a-2]=0,t[a]=r)):s.push(d)}return s},Pe=new Map;function bt(e){var t=Pe.get(this);return t||(t=new Map,Pe.set(this,t)),(t=tt(this,t.get(e)||(t.set(e,t=(function(n){for(var s,r,a=1,o="",d="",p=[0],l=function(u){a===1&&(u||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?p.push(0,u,o):a===3&&(u||o)?(p.push(3,u,o),a=2):a===2&&o==="..."&&u?p.push(4,u,0):a===2&&o&&!u?p.push(5,0,!0,o):a>=5&&((o||!u&&a===5)&&(p.push(a,0,o,r),a=6),u&&(p.push(a,u,0,r),a=6)),o=""},v=0;v<n.length;v++){v&&(a===1&&l(),l(v));for(var i=0;i<n[v].length;i++)s=n[v][i],a===1?s==="<"?(l(),p=[p],a=3):o+=s:a===4?o==="--"&&s===">"?(a=1,o=""):o=s+o[0]:d?s===d?d="":o+=s:s==='"'||s==="'"?d=s:s===">"?(l(),a=1):a&&(s==="="?(a=5,r=o,o=""):s==="/"&&(a<5||n[v][i+1]===">")?(l(),a===3&&(p=p[0]),a=p,(p=p[0]).push(2,0,a),a=0):s===" "||s==="	"||s===`
`||s==="\r"?(l(),a=2):o+=s),a===3&&o==="!--"&&(a=4,p=p[0])}return l(),p})(e)),t),arguments,[])).length>1?t:t[0]}var c=bt.bind(We),ae,A,ue,Ue,ge=0,nt=[],E=C,Te=E.__b,Be=E.__r,Le=E.diffed,He=E.__c,Re=E.unmount,Ne=E.__;function at(e,t){E.__h&&E.__h(A,e,ge||t),ge=0;var n=A.__H||(A.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function m(e){return ge=1,yt(st,e)}function yt(e,t,n){var s=at(ae++,2);if(s.t=e,!s.__c&&(s.__=[st(void 0,t),function(d){var p=s.__N?s.__N[0]:s.__[0],l=s.t(p,d);p!==l&&(s.__N=[l,s.__[1]],s.__c.setState({}))}],s.__c=A,!A.__f)){var r=function(d,p,l){if(!s.__c.__H)return!0;var v=s.__c.__H.__.filter(function(u){return u.__c});if(v.every(function(u){return!u.__N}))return!a||a.call(this,d,p,l);var i=s.__c.props!==d;return v.some(function(u){if(u.__N){var h=u.__[0];u.__=u.__N,u.__N=void 0,h!==u.__[0]&&(i=!0)}}),a&&a.call(this,d,p,l)||i};A.__f=!0;var a=A.shouldComponentUpdate,o=A.componentWillUpdate;A.componentWillUpdate=function(d,p,l){if(this.__e){var v=a;a=void 0,r(d,p,l),a=v}o&&o.call(this,d,p,l)},A.shouldComponentUpdate=r}return s.__N||s.__}function M(e,t){var n=at(ae++,3);!E.__s&&xt(n.__H,t)&&(n.__=e,n.u=t,A.__H.__h.push(n))}function $t(){for(var e;e=nt.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(Z),t.__h.some(be),t.__h=[]}catch(n){t.__h=[],E.__e(n,e.__v)}}}E.__b=function(e){A=null,Te&&Te(e)},E.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Ne&&Ne(e,t)},E.__r=function(e){Be&&Be(e),ae=0;var t=(A=e.__c).__H;t&&(ue===A?(t.__h=[],A.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.some(Z),t.__h.some(be),t.__h=[],ae=0)),ue=A},E.diffed=function(e){Le&&Le(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(nt.push(t)!==1&&Ue===E.requestAnimationFrame||((Ue=E.requestAnimationFrame)||wt)($t)),t.__H.__.some(function(n){n.u&&(n.__H=n.u),n.u=void 0})),ue=A=null},E.__c=function(e,t){t.some(function(n){try{n.__h.some(Z),n.__h=n.__h.filter(function(s){return!s.__||be(s)})}catch(s){t.some(function(r){r.__h&&(r.__h=[])}),t=[],E.__e(s,n.__v)}}),He&&He(e,t)},E.unmount=function(e){Re&&Re(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(s){try{Z(s)}catch(r){t=r}}),n.__H=void 0,t&&E.__e(t,n.__v))};var Oe=typeof requestAnimationFrame=="function";function wt(e){var t,n=function(){clearTimeout(s),Oe&&cancelAnimationFrame(t),setTimeout(e)},s=setTimeout(n,35);Oe&&(t=requestAnimationFrame(n))}function Z(e){var t=A,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),A=t}function be(e){var t=A;e.__c=e.__(),A=t}function xt(e,t){return!e||e.length!==t.length||t.some(function(n,s){return n!==e[s]})}function st(e,t){return typeof t=="function"?t(e):t}const se=new Set,re="propolis_dashboard_session",Se=typeof sessionStorage<"u";function St(){if(!Se)return;if(!_.jwt||!_.username){sessionStorage.removeItem(re);return}const e={jwt:_.jwt,username:_.username,role:_.role,issuerStatus:_.issuerStatus,externalJwt:_.externalJwt,externalServiceUrl:_.externalServiceUrl,externalConnected:_.externalConnected};sessionStorage.setItem(re,JSON.stringify(e))}function kt(){if(!Se)return{};try{const e=sessionStorage.getItem(re);if(!e)return{};const t=JSON.parse(e);return!t.jwt||!t.username?{}:{jwt:t.jwt,username:t.username,role:t.role??null,issuerStatus:t.issuerStatus??null,externalJwt:t.externalJwt??null,externalServiceUrl:t.externalServiceUrl??null,externalConnected:t.externalConnected??!1}}catch{return{}}}function Ct(){Se&&sessionStorage.removeItem(re)}const At=kt(),_={jwt:null,username:null,role:null,issuerStatus:null,batches:[],loading:!1,externalJwt:null,externalServiceUrl:null,externalConnected:!1,externalError:null,pendingCount:0,preApproved:!1,serviceAccount:null,...At};function I(e){Object.assign(_,e),St();for(const t of se)t()}function It(e){return se.add(e),()=>se.delete(e)}function Et(){Ct(),Object.assign(_,{jwt:null,username:null,role:null,issuerStatus:null,batches:[],loading:!1,externalJwt:null,externalServiceUrl:null,externalConnected:!1,externalError:null,pendingCount:0,preApproved:!1});for(const e of se)e()}const Dt="https://haa-giftcard-prod.fly.dev";class pe extends Error{constructor(t,n){super(n),this.status=t}}function Pt(e){return e==="external"&&_.externalServiceUrl?{baseUrl:_.externalServiceUrl.replace(/\/$/,""),jwt:_.externalJwt}:{baseUrl:Dt,jwt:_.jwt}}function W(){return _.externalServiceUrl&&_.externalConnected?"external":"operator"}async function T(e,t={},n="operator"){const{baseUrl:s,jwt:r}=Pt(n),a=new Headers(t.headers);r&&a.set("Authorization",`Bearer ${r}`),t.body&&typeof t.body=="string"&&a.set("Content-Type","application/json");const o=await fetch(`${s}${e}`,{...t,headers:a});if(o.status===401)throw n==="external"?(I({externalJwt:null,externalConnected:!1,externalError:"External service session expired"}),new pe(401,"External service session expired")):(I({jwt:null,username:null,batches:[]}),window.location.hash="#login",new pe(401,"Session expired"));if(!o.ok){const d=await o.json().catch(()=>({error:o.statusText}));throw new pe(o.status,d.error||o.statusText)}return o}async function Ut(e){return(await(await T("/auth/challenge",{method:"POST",body:JSON.stringify({username:e})})).json()).challenge}async function Tt(e,t,n){return(await(await T("/auth/verify",{method:"POST",body:JSON.stringify({username:e,challenge:t,signature:n})})).json()).token}async function Bt(e,t){const n=await fetch(`${t.replace(/\/$/,"")}/auth/challenge`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e})});if(!n.ok)throw new Error("External service challenge request failed");return(await n.json()).challenge}async function Lt(e,t,n,s){const r=await fetch(`${s.replace(/\/$/,"")}/auth/verify`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,challenge:t,signature:n})});if(!r.ok)throw new Error("External service verification failed");return(await r.json()).token}async function Ht(e){try{return(await fetch(`${e.replace(/\/$/,"")}/health`,{method:"GET",signal:AbortSignal.timeout(1e4)})).ok}catch{return!1}}async function Rt(e){return(await T("/api/batches/prepare",{method:"POST",body:JSON.stringify(e)},W())).json()}async function Nt(e,t){return(await T(`/api/batches/${encodeURIComponent(e)}/finalize`,{method:"POST",body:JSON.stringify({signature:t})},W())).json()}async function Ot(){return(await(await T("/api/batches",{},W())).json()).batches}async function jt(e){return(await T(`/api/batches/${encodeURIComponent(e)}`,{},W())).json()}async function q(e,t){const n=await T(e,{},W());rt(await n.blob(),t)}async function Mt(e,t){const n=await T(e,{},"operator");rt(await n.blob(),t)}function rt(e,t){const n=URL.createObjectURL(e),s=document.createElement("a");s.href=n,s.download=t,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(n)}async function Ft(e,t,n){return(await(await T("/api/issuers/apply",{method:"POST",body:JSON.stringify({description:e,contact:t,txId:n})})).json()).issuer}async function G(){return(await T("/api/issuers/me")).json()}async function Jt(e){return(await(await T("/api/issuers/me/service-url",{method:"POST",body:JSON.stringify({serviceUrl:e})})).json()).issuer}async function ke(e){const t=e?`?status=${encodeURIComponent(e)}`:"";return(await(await T(`/api/admin/issuers${t}`)).json()).issuers}async function Yt(e,t){return(await(await T(`/api/admin/issuers/${encodeURIComponent(e)}/approve`,{method:"POST",body:JSON.stringify({txId:t})})).json()).issuer}async function qt(e){return(await(await T(`/api/admin/issuers/${encodeURIComponent(e)}/revoke`,{method:"POST"})).json()).issuer}async function Kt(e){return(await(await T(`/api/admin/issuers/${encodeURIComponent(e)}/ban`,{method:"POST"})).json()).issuer}async function Gt(e,t,n){return(await T(`/api/admin/batches/${encodeURIComponent(e)}/allocate`,{method:"POST",body:JSON.stringify({to:t,count:n})})).json()}async function Wt(){return(await T("/api/allocations/me")).json()}async function zt(e,t,n={}){const s=n.include??"unclaimed";await Mt(`/api/allocations/me/pdf?batch=${encodeURIComponent(e)}&include=${s}`,t)}const Vt=6e4;function z(){return!!window.hive_keychain}function de(e,t,n){return new Promise((s,r)=>{let a=!1;const o=setTimeout(()=>{a||(a=!0,r(new Error("Keychain did not respond — request may have been cancelled")))},Vt);e(d=>{a||(a=!0,clearTimeout(o),d.success?s(t(d)):r(new Error(d.message||d.error||n)))})})}function ot(e,t){return de(n=>window.hive_keychain.requestSignBuffer(e,t,"Posting",n),n=>n.result,"Keychain signing failed")}async function Qt(e){const t=await Ut(e),n=await ot(e,t);return Tt(e,t,n)}async function Ce(e,t){try{const n=await Bt(e,t),s=await ot(e,n);return await Lt(e,n,s,t)}catch{return null}}function Xt(e,t){return de(n=>window.hive_keychain.requestSignBuffer(e,t,"Memo",n),n=>n.result,"Batch signing failed")}function it(e,t,n,s,r){return de(a=>window.hive_keychain.requestCustomJson(e,t,n,JSON.stringify(s),r,a),a=>a.result,"Custom JSON broadcast failed")}function Zt(e,t,n,s=1){return de(r=>window.hive_keychain.requestAddAccountAuthority(e,t,n,s,r),r=>r.result,"Add account authority failed")}function J(e,t){t.preventDefault(),window.location.hash=e}function en(e){e.preventDefault(),Et(),window.location.hash="#login"}async function tn(){if(!_.username||!_.externalServiceUrl)return;I({externalError:null});const e=await Ce(_.username,_.externalServiceUrl);I(e?{externalJwt:e,externalConnected:!0,externalError:null}:{externalConnected:!1,externalError:"Could not connect to your gift card service"})}function K({route:e}){const t=_.role==="issuer"||_.role==="admin",n=_.role==="admin",s=_.issuerStatus?.status==="approved",r=_.externalServiceUrl&&!_.externalConnected;return c`
    <div>
      <nav>
        ${t&&c`
          <a href="#batches"
            class=${e==="batch-list"?"active":""}
            onClick=${a=>J("#batches",a)}>Batches</a>
          <a href="#batches/generate"
            class=${e==="batch-form"?"active":""}
            onClick=${a=>J("#batches/generate",a)}>Generate</a>
        `}
        ${_.username&&c`
          <a href="#allocations"
            class=${e==="allocations"?"active":""}
            onClick=${a=>J("#allocations",a)}>Allocations</a>
        `}
        ${s&&c`
          <a href="#setup"
            class=${e==="setup"?"active":""}
            onClick=${a=>J("#setup",a)}>Setup</a>
        `}
        ${t&&c`
          <a href="#setup"
            class=${e==="setup"?"active":""}
            onClick=${a=>J("#setup",a)}>Setup</a>
        `}
        ${n&&c`
          <a href="#admin"
            class=${e==="admin"?"active":""}
            onClick=${a=>J("#admin",a)}>Admin${_.pendingCount>0?c` <span class="badge">${_.pendingCount}</span>`:""}</a>
        `}
        <span class="spacer" />
        <span class="user">@${_.username}</span>
        <button class="logout" onClick=${en}>Logout</button>
      </nav>
      ${r&&c`
        <div class="banner-warn">
          Your gift card service is unreachable — batch operations unavailable.
          <button class="btn-link" onClick=${tn}>Retry</button>
        </div>
      `}
    </div>
  `}function je(){const[e,t]=m(""),[n,s]=m(""),[r,a]=m(!1),[o,d]=m("");async function p(l){l.preventDefault(),s("");const v=e.toLowerCase().replace(/^@/,"").trim();if(!v){s("Enter your Hive username");return}if(!z()){s("Hive Keychain extension not detected. Install it from hivekeychain.com");return}a(!0);try{d("Signing in...");const i=await Qt(v);I({jwt:i,username:v});const u=await G();if(I({role:u.role,issuerStatus:u.issuer,preApproved:!!u.preApproved,serviceAccount:u.serviceAccount||null}),u.issuer?.service_url){const b=u.issuer.service_url;I({externalServiceUrl:b}),d("Connecting to your service...");const k=await Ce(v,b);I(k?{externalJwt:k,externalConnected:!0,externalError:null}:{externalConnected:!1,externalError:"Could not connect to your gift card service"})}u.role==="admin"&&ke("pending").then(b=>{I({pendingCount:b.length})}).catch(()=>{});const h=sessionStorage.getItem("propolis_redirect");sessionStorage.removeItem("propolis_redirect"),h?window.location.hash=h:u.role==="admin"?window.location.hash="#admin":u.role==="issuer"?window.location.hash="#batches":u.issuer?.status==="approved"?window.location.hash="#setup":(u.issuer?.status,window.location.hash="#apply")}catch(i){const u=i instanceof Error?i.message:String(i);/not respond|cancel|denied|rejected/i.test(u)?s(""):s(u)}finally{a(!1),d("")}}return c`
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
            value=${e}
            onInput=${l=>t(l.target.value)}
            disabled=${r}
            autocomplete="username"
            autofocus
          />
        </div>

        <button type="submit" disabled=${r}>
          ${r?c`<span class="spinner" style="width:14px;height:14px;border-width:2px;vertical-align:middle;margin-right:8px" /> ${o||"Signing in..."}`:"Sign in with Keychain"}
        </button>
      </form>

      ${n&&c`<p class="err mt1">${n}</p>`}
    </div>
  `}function nn(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}function oe(e,t){t.preventDefault(),window.location.hash=e}function an({batch:e}){const{status:t}=e,n=new Date(e.expiresAt)<new Date;function s(a){a.stopPropagation(),q(`/api/batches/${e.batchId}/pdf`,`${e.batchId}.pdf`)}function r(a){a.stopPropagation(),q(`/api/batches/${e.batchId}/manifest`,`${e.batchId}-manifest.json`)}return c`
    <tr onClick=${a=>oe(`#batches/${e.batchId}`,a)} style="cursor:pointer">
      <td class="mono">
        <a href="#batches/${e.batchId}" onClick=${a=>oe(`#batches/${e.batchId}`,a)}>
          ${e.batchId.length>24?e.batchId.slice(0,24)+"...":e.batchId}
        </a>
      </td>
      <td>${nn(e.createdAt)}</td>
      <td>${e.count}</td>
      <td>
        <div class="status-row">
          ${t.active>0&&c`<span><span class="dot dot-active" />${t.active}</span>`}
          ${t.spent>0&&c`<span><span class="dot dot-spent" />${t.spent}</span>`}
          ${t.revoked>0&&c`<span><span class="dot dot-revoked" />${t.revoked}</span>`}
          ${n&&t.active>0&&c`<span class="badge badge-revoked">expired</span>`}
        </div>
      </td>
      <td>
        <div class="fx">
          <button class="dl-btn" onClick=${s} title="Download PDF">PDF</button>
          <button class="dl-btn" onClick=${r} title="Download Manifest">JSON</button>
        </div>
      </td>
    </tr>
  `}function sn(){const[e,t]=m(!0),[n,s]=m(""),r=_.batches,a=!!(_.externalServiceUrl&&!_.externalConnected);return M(()=>{if(a){t(!1);return}t(!0),s(""),Ot().then(o=>{I({batches:o}),t(!1)}).catch(o=>{s(o instanceof Error?o.message:String(o)),t(!1)})},[a]),e?c`<div class="ct"><div class="loading"><span class="spinner" /> Loading batches...</div></div>`:a?c`
      <div class="ct">
        <h2>Batches</h2>
        <div class="banner-warn">Your gift card service is unreachable. Batch operations are unavailable until the connection is restored.</div>
      </div>
    `:n?c`<div class="ct"><p class="err">${n}</p></div>`:c`
    <div class="ct">
      <div class="fx mb" style="justify-content:space-between">
        <h2 style="margin-bottom:0">Batches</h2>
        <button class="btn-sm btn-ok" onClick=${o=>oe("#batches/generate",o)}>
          + Generate New Batch
        </button>
      </div>

      ${r.length===0?c`
        <div class="empty-state">
          <p>No batches yet.</p>
          <button onClick=${o=>oe("#batches/generate",o)} style="width:auto;display:inline-block">
            Generate Your First Batch
          </button>
        </div>
      `:c`
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
              ${r.map(o=>c`<${an} batch=${o} key=${o.batchId} />`)}
            </tbody>
          </table>
        </div>
      `}
    </div>
  `}const rn=[{value:"en",label:"English"},{value:"zh",label:"Chinese"},{value:"es",label:"Spanish"}];function on(e,t){t.preventDefault(),window.location.hash=e}function ln(){const e=!!(_.externalServiceUrl&&!_.externalConnected),t=_.role==="admin",[n,s]=m(10),[r,a]=m("en"),[o,d]=m(365),p="standard",[l,v]=m(""),[i,u]=m(""),[h,b]=m(""),[k,$]=m(""),[w,y]=m(!1),[D,P]=m("form"),[B,R]=m(""),[U,L]=m(null),S=D!=="form"&&D!=="done";if(e)return c`
      <div class="ct">
        <h2>Generate Batch</h2>
        <div class="banner-warn">Your gift card service is unreachable. Batch generation is unavailable until the connection is restored.</div>
      </div>
    `;async function g(f){if(f.preventDefault(),R(""),!z()){R("Hive Keychain is required to sign batches. Please install the Keychain browser extension.");return}const x=l.trim()?l.split(",").map(N=>N.trim().toLowerCase().replace(/^@/,"")).filter(Boolean):void 0,H=i.trim()?i.split(",").map(N=>N.trim().toLowerCase()).filter(Boolean):void 0,F=h.trim().toLowerCase().replace(/^@/,"")||void 0,ct={count:n,locale:r,expiryDays:o,variant:p,design:"hive",...k.trim()&&{note:k.trim()},...x?.length&&{autoFollow:x},...H?.length&&{communities:H},...F&&{referrer:F},...t&&w&&{allocatable:!0}};try{P("preparing");const N=await Rt(ct);P("signing");const dt=await Xt(_.username,N.canonicalString);P("finalizing");const ut=await Nt(N.batchId,dt);L(ut),P("done")}catch(N){R(N instanceof Error?N.message:String(N)),P("form")}}return U?c`
      <div class="ct" style="max-width:520px">
        <div class="card center">
          <h2 style="color:var(--ok)">Batch Generated</h2>
          <p>${U.count} gift cards created.</p>
          <p class="sm mt">Batch ID: <span class="mono">${U.batchId}</span></p>
        </div>

        <div class="btn-row mt2">
          <button class="btn-ok"
            onClick=${()=>q(U.downloads.pdf,`${U.batchId}.pdf`)}>
            Download PDF
          </button>
          <button class="btn-s"
            onClick=${()=>q(U.downloads.manifest,`${U.batchId}-manifest.json`)}>
            Download Manifest
          </button>
        </div>

        <p class="wrn sm mt1">The manifest contains all card secrets (tokens and PINs). Store it securely.</p>

        <div class="btn-row mt2">
          <button class="btn-s" onClick=${f=>on(`#batches/${U.batchId}`,f)}>
            View Batch
          </button>
          <button class="btn-s" onClick=${()=>{L(null),$(""),P("form")}}>
            Generate Another
          </button>
        </div>
      </div>
    `:c`
    <div class="ct" style="max-width:520px">
      <h2>Generate New Batch</h2>
      <p class="sm mt mb">Issuer: <strong>@${_.username}</strong></p>

      <form onSubmit=${g}>
        <div class="form-row">
          <label for="count">Number of Cards</label>
          <input id="count" type="number" min="1" max="100" step="1"
            value=${n}
            onInput=${f=>{const x=parseInt(f.target.value);isNaN(x)||s(x)}}
            disabled=${S} />
          <p class="form-hint">1 to 100 cards per batch</p>
        </div>

        <div class="form-row">
          <label for="locale">Locale</label>
          <select id="locale" value=${r}
            onChange=${f=>a(f.target.value)}
            disabled=${S}>
            ${rn.map(f=>c`<option value=${f.value}>${f.label} (${f.value})</option>`)}
          </select>
        </div>

        <div class="form-row">
          <label for="expiry">Expiry (days)</label>
          <input id="expiry" type="number" min="1" max="3650" step="1"
            value=${o}
            onInput=${f=>{const x=parseInt(f.target.value);isNaN(x)||d(x)}}
            disabled=${S} />
        </div>

        <div class="form-row">
          <label for="autoFollow">Auto-Follow (optional)</label>
          <input id="autoFollow" type="text"
            placeholder="user1, user2, user3"
            value=${l}
            onInput=${f=>v(f.target.value)}
            disabled=${S} />
          <p class="form-hint">Comma-separated Hive usernames to follow on account creation (max 20). Adding many increases QR code density — keep it reasonable for reliable scanning.</p>
        </div>

        <div class="form-row">
          <label for="communities">Communities (optional)</label>
          <input id="communities" type="text"
            placeholder="hive-123456, hive-789012"
            value=${i}
            onInput=${f=>u(f.target.value)}
            disabled=${S} />
          <p class="form-hint">Comma-separated Hive community names to subscribe on account creation (max 10). Adding many increases QR code density.</p>
        </div>

        <div class="form-row">
          <label for="referrer">Referrer (optional)</label>
          <input id="referrer" type="text"
            placeholder="username"
            value=${h}
            onInput=${f=>b(f.target.value)}
            disabled=${S} />
          <p class="form-hint">Hive username recorded as account referrer</p>
        </div>

        <div class="form-row">
          <label for="note">Note (optional)</label>
          <textarea id="note" rows="2" placeholder="Batch description..."
            value=${k}
            onInput=${f=>$(f.target.value)}
            disabled=${S} />
        </div>

        ${t&&c`
          <div class="form-row">
            <label>
              <input type="checkbox"
                checked=${w}
                onChange=${f=>y(f.target.checked)}
                disabled=${S} />
              Allocation pool
            </label>
            <p class="form-hint">Mark this batch as a starter pool. Newly approved issuers will be auto-allocated cards from it, and you can manually allocate more from the batch detail page.</p>
          </div>
        `}

        <p class="sm mt mb" style="color:var(--tm)">Design: Hive Community (default)</p>

        <button type="submit" disabled=${S}>
          ${D==="preparing"?c`<span class="spinner" style="width:14px;height:14px;border-width:2px;vertical-align:middle;margin-right:8px" /> Preparing batch...`:D==="signing"?c`<span class="spinner" style="width:14px;height:14px;border-width:2px;vertical-align:middle;margin-right:8px" /> Waiting for Keychain...`:D==="finalizing"?c`<span class="spinner" style="width:14px;height:14px;border-width:2px;vertical-align:middle;margin-right:8px" /> Finalizing batch...`:`Generate ${n} Cards`}
        </button>
      </form>

      ${B&&c`<p class="err mt1">${B}</p>`}
    </div>
  `}function he(e){return e?new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"-"}function cn(e){return c`<span class="badge ${e==="active"?"badge-active":e==="spent"?"badge-spent":"badge-revoked"}">${e}</span>`}function Me(e,t){t.preventDefault(),window.location.hash=e}function dn({batchId:e}){const[t,n]=m(null),[s,r]=m(!0),[a,o]=m(""),[d,p]=m(""),[l,v]=m(10),[i,u]=m(!1),[h,b]=m(""),[k,$]=m("");function w(){r(!0),o(""),jt(e).then(g=>{n(g),r(!1)}).catch(g=>{o(g instanceof Error?g.message:String(g)),r(!1)})}M(()=>{w()},[e]);async function y(g){g.preventDefault(),$(""),b("");const f=d.trim().toLowerCase().replace(/^@/,"");if(!f){$("Recipient username required");return}if(!Number.isInteger(l)||l<1||l>100){$("Count must be between 1 and 100");return}u(!0);try{const x=await Gt(e,f,l);b(x.allocated===x.requested?`Allocated ${x.allocated} cards to @${x.recipient}`:`Allocated ${x.allocated}/${x.requested} cards to @${x.recipient} (pool exhausted)`),p(""),w()}catch(x){$(x instanceof Error?x.message:String(x))}finally{u(!1)}}if(s)return c`<div class="ct"><div class="loading"><span class="spinner" /> Loading batch...</div></div>`;if(a)return c`
      <div class="ct">
        <p class="err">${a}</p>
        <a href="#batches" onClick=${g=>Me("#batches",g)} class="sm">Back to batches</a>
      </div>
    `;if(!t)return null;const D=t.cards.filter(g=>g.status==="active").length,P=t.cards.filter(g=>g.status==="spent").length,B=t.cards.filter(g=>g.status==="revoked").length,R=new Date(t.expiresAt)<new Date,U=_.role==="admin",L=t.cards.filter(g=>!!g.allocatedTo).length,S=t.cards.filter(g=>!g.allocatedTo&&g.status==="active").length;return c`
    <div class="ct">
      <a href="#batches" onClick=${g=>Me("#batches",g)} class="sm">← Back to batches</a>

      <div class="card mt1">
        <dl class="meta">
          <dt>Batch ID</dt>
          <dd class="mono">${t.batchId}</dd>
          <dt>Created</dt>
          <dd>${he(t.createdAt)}</dd>
          <dt>Expires</dt>
          <dd>${he(t.expiresAt)}${R?c` <span class="badge badge-revoked">expired</span>`:""}</dd>
          <dt>Cards</dt>
          <dd>${t.count}</dd>
          <dt>Type</dt>
          <dd>${t.promiseType}</dd>
          ${t.declarationTx&&c`
            <dt>Declaration TX</dt>
            <dd class="mono xs">${t.declarationTx}</dd>
          `}
          ${t.merkleRoot&&c`
            <dt>Merkle Root</dt>
            <dd class="mono xs">${t.merkleRoot.slice(0,16)}...</dd>
          `}
          ${t.note&&c`
            <dt>Note</dt>
            <dd>${t.note}</dd>
          `}
          ${t.allocatable&&c`
            <dt>Pool</dt>
            <dd><span class="badge badge-active">allocation pool</span> ${L} allocated · ${S} available</dd>
          `}
        </dl>

        <div class="status-row mb">
          <span><span class="dot dot-active" />${D} active</span>
          <span><span class="dot dot-spent" />${P} spent</span>
          <span><span class="dot dot-revoked" />${B} revoked</span>
        </div>

        <div class="fx">
          <button class="dl-btn"
            onClick=${()=>q(`/api/batches/${t.batchId}/pdf`,`${t.batchId}.pdf`)}>
            Download PDF
          </button>
          <button class="dl-btn"
            onClick=${()=>q(`/api/batches/${t.batchId}/manifest`,`${t.batchId}-manifest.json`)}>
            Download Manifest
          </button>
        </div>
      </div>

      ${U&&t.allocatable&&c`
        <div class="card mt1">
          <h3 style="margin-top:0">Allocate cards</h3>
          <p class="sm mt mb">Assign unclaimed cards from this pool to another approved issuer. They'll see them under "My Allocations" and can print a PDF of just their cards.</p>
          <form onSubmit=${y}>
            <div class="form-row">
              <label for="alloc-to">Recipient</label>
              <input id="alloc-to" type="text" placeholder="username"
                value=${d}
                onInput=${g=>p(g.target.value)}
                disabled=${i} />
            </div>
            <div class="form-row">
              <label for="alloc-count">Count</label>
              <input id="alloc-count" type="number" min="1" max="100" step="1"
                value=${l}
                onInput=${g=>{const f=parseInt(g.target.value);isNaN(f)||v(f)}}
                disabled=${i} />
              <p class="form-hint">${S} cards available in this pool</p>
            </div>
            <button type="submit" disabled=${i||S===0}>
              ${i?"Allocating...":"Allocate"}
            </button>
          </form>
          ${h&&c`<p class="ok mt1">${h}</p>`}
          ${k&&c`<p class="err mt1">${k}</p>`}
        </div>
      `}

      <h2>Cards (${t.cards.length})</h2>
      <div style="overflow-x:auto">
        <table class="table">
          <thead>
            <tr>
              <th>Token Prefix</th>
              <th>Status</th>
              ${t.allocatable&&c`<th>Allocated To</th>`}
              <th>Claimed By</th>
              <th>Claimed At</th>
            </tr>
          </thead>
          <tbody>
            ${t.cards.map(g=>c`
              <tr key=${g.tokenPrefix}>
                <td class="mono">${g.tokenPrefix}...</td>
                <td>${cn(g.status)}</td>
                ${t.allocatable&&c`<td>${g.allocatedTo?`@${g.allocatedTo}`:"-"}</td>`}
                <td>${g.claimedBy?`@${g.claimedBy}`:"-"}</td>
                <td class="sm">${he(g.claimedAt)}</td>
              </tr>
            `)}
          </tbody>
        </table>
      </div>
    </div>
  `}function un(){const[e,t]=m(""),[n,s]=m(""),[r,a]=m(!1),[o,d]=m(""),[p,l]=m(null);if(_.issuerStatus){const i=_.issuerStatus;return c`
      <div class="ct">
        <div class="card center">
          <h2>Application Status</h2>
          <p>You applied on ${new Date(i.applied_at).toLocaleDateString()}.</p>
          <p>Status: <span class="badge badge-${i.status}">${i.status}</span></p>
          ${i.status==="pending"&&c`
            <p class="tm mt1">Your application is being reviewed. You'll receive a notification on Hive when it's approved.</p>
          `}
          ${i.status==="approved"&&c`
            <p class="mt1"><a href="#setup">Complete your setup →</a></p>
          `}
          ${i.status==="active"&&c`
            <p class="mt1"><a href="#batches">Go to your dashboard →</a></p>
          `}
        </div>
      </div>
    `}async function v(i){if(i.preventDefault(),!!e.trim()){d(""),a(!0);try{if(!z())throw new Error("Hive Keychain extension is required. Please install it and refresh.");const u=_.serviceAccount;if(!u)throw new Error("Service account not available. Please log out and log in again.");const h=await it(_.username,"propolis_issuer_apply","Posting",{service:u,description:e.trim(),contact:n.trim()||void 0},"Apply to become an onboarder on HiveInvite"),b=typeof h=="object"&&h!==null?h.tx_id??h.id:String(h),k=await Ft(e.trim(),n.trim()||void 0,b);l(k)}catch(u){d(u instanceof Error?u.message:String(u))}finally{a(!1)}}}return p?c`
      <div class="ct">
        <div class="card center">
          <h2 style="color:var(--ok)">Application Submitted</h2>
          <p>Your application has been recorded on-chain and is pending review.</p>
          <p class="tm mt1">You'll receive a notification on Hive when your application is approved.</p>
        </div>
      </div>
    `:c`
    <div class="ct">
      <h1>Become an Onboarder</h1>
      <p class="tm">Apply to issue Hive gift cards and onboard new users to the Hive blockchain.</p>

      <form class="card" onSubmit=${v}>
        <div class="form-row">
          <label for="description">Description *</label>
          <textarea
            id="description"
            rows="3"
            placeholder="Tell us about your community and how you plan to use gift cards..."
            value=${e}
            onInput=${i=>t(i.target.value)}
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
            value=${n}
            onInput=${i=>s(i.target.value)}
            disabled=${r}
          />
        </div>

        <button type="submit" disabled=${r||!e.trim()}>
          ${r?c`<span class="spinner" /> Broadcasting...`:"Submit Application"}
        </button>

        ${o&&c`<p class="err mt1">${o}</p>`}
      </form>

      <div class="notice mt1">
        <strong>What happens next?</strong>
        <p>Your application will be broadcast on the Hive blockchain (signed with your posting key) and reviewed by the service operator. Once approved, you'll receive a Hive transfer notification with a link to complete your setup.</p>
      </div>
    </div>
  `}function pn(){const[e,t]=m(null),[n,s]=m(!0),[r,a]=m(""),[o,d]=m(!1),[p,l]=m(null),[v,i]=m(!1),[u,h]=m(""),[b,k]=m(!1),[$,w]=m(null),[y,D]=m(!1);async function P(){try{const f=await G();f.issuer&&(I({issuerStatus:f.issuer,role:f.role}),f.issuer.service_url?(l("self-hosted"),h(f.issuer.service_url)):f.issuer.delegation_verified_at&&l("delegate")),t(f.setupStatus)}catch(f){a(f instanceof Error?f.message:String(f))}finally{s(!1)}}M(()=>{P()},[]);async function B(){d(!0),a("");try{const f=await G();f.issuer&&I({issuerStatus:f.issuer,role:f.role}),t(f.setupStatus),f.setupStatus?.delegated||f.issuer?.status==="active"?window.location.hash="#batches":f.setupStatus&&!f.setupStatus.delegated&&a("Delegation not detected yet. Please complete the delegation step and try again.")}catch(f){a(f instanceof Error?f.message:String(f))}finally{d(!1)}}async function R(){i(!0),a("");try{if(!z())throw new Error("Hive Keychain extension is required.");const f=e?.serviceAccount;if(!f)throw new Error("Service account name not available. Please refresh and try again.");await Zt(_.username,f,"Active");for(let x=0;x<5;x++){await new Promise(F=>setTimeout(F,3e3));const H=await G();if(H.issuer&&I({issuerStatus:H.issuer,role:H.role}),t(H.setupStatus),H.setupStatus?.delegated){window.location.hash="#batches";return}}a('Delegation broadcast succeeded but verification is taking longer than expected. Try clicking "Check Delegation" in a moment.')}catch(f){const x=f instanceof Error?f.message:String(f);/not respond|cancel|denied|rejected/i.test(x)?a(""):a(x)}finally{i(!1)}}async function U(){k(!0),w(null),a("");try{const f=u.trim();if(!f){a("Enter your gift card service URL");return}try{new URL(f)}catch{a("Enter a valid URL (e.g. https://your-service.fly.dev)");return}const x=await Ht(f);w(x),x||a("Could not reach your service. Check the URL and ensure CORS is configured.")}finally{k(!1)}}async function L(){D(!0),a("");try{const f=u.trim(),x=await Jt(f);if(I({issuerStatus:x}),x.status==="active"&&x.service_url){const H=await G();if(I({role:H.role,issuerStatus:H.issuer,externalServiceUrl:x.service_url}),_.username){const F=await Ce(_.username,x.service_url);I(F?{externalJwt:F,externalConnected:!0,externalError:null}:{externalConnected:!1,externalError:"Connected but could not authenticate"})}window.location.hash="#batches"}}catch(f){a(f instanceof Error?f.message:String(f))}finally{D(!1)}}if(n)return c`<div class="ct"><div class="loading"><span class="spinner" /> Loading setup status...</div></div>`;const S=_.issuerStatus;if(!S&&(_.role==="issuer"||_.role==="admin"))return c`
      <div class="ct">
        <h1>Issuer Setup</h1>
        ${fe(4)}
        <div class="card center">
          <h2 style="color:var(--ok)">Setup Complete</h2>
          <p>You're ready to generate gift cards.</p>
          <p class="mt1"><a href="#batches" class="btn">Go to Dashboard →</a></p>
        </div>
      </div>
    `;if(!S||S.status==="pending")return c`
      <div class="ct">
        <div class="card center">
          <h2>Application Pending</h2>
          <p class="tm">Your application is being reviewed. You'll be notified when approved.</p>
        </div>
      </div>
    `;const g=S.status==="active"||p&&(e?.delegated||$)?4:p?3:S.status==="approved"?2:1;return S.status==="active"?c`
      <div class="ct">
        <h1>Issuer Setup</h1>
        ${fe(4)}

        <div class="card center">
          <h2 style="color:var(--ok)">Setup Complete</h2>
          <p>You're ready to generate gift cards!</p>
          ${S.service_url&&c`
            <dl class="meta mt1">
              <dt>External Service</dt>
              <dd>${S.service_url}</dd>
            </dl>
          `}
          ${e&&c`<p class="tm">Account creation tokens: <strong>${e.pendingTokens}</strong></p>`}
          <p class="mt1"><a href="#batches" class="btn">Go to Dashboard →</a></p>
        </div>

        ${S.service_url&&c`
          <div class="card mt1">
            <h3>Update Service URL</h3>
            <div class="form-row">
              <input
                type="url"
                placeholder="https://your-service.fly.dev"
                value=${u}
                onInput=${f=>{h(f.target.value),w(null)}}
              />
            </div>
            <div class="fx gap">
              <button onClick=${U} disabled=${b}>
                ${b?c`<span class="spinner" style="width:14px;height:14px;border-width:2px;vertical-align:middle;margin-right:8px" /> Checking...`:"Check Connection"}
              </button>
              <button onClick=${L} disabled=${y||!$}>
                ${y?c`<span class="spinner" style="width:14px;height:14px;border-width:2px;vertical-align:middle;margin-right:8px" /> Saving...`:"Update URL"}
              </button>
            </div>
            ${$===!0&&c`<p class="mt1" style="color:var(--ok)">Service is reachable</p>`}
            ${r&&c`<p class="err mt1">${r}</p>`}
          </div>
        `}
      </div>
    `:c`
    <div class="ct">
      <h1>Issuer Setup</h1>
      ${_.preApproved&&c`
        <div class="notice mb">
          You've been pre-approved as a trusted Hive community member — no application needed. Complete the setup below to start issuing gift cards.
        </div>
      `}
      ${fe(g)}

      ${!p&&c`
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

      ${p==="delegate"&&hn(e,v,o,r,R,B,()=>l(null))}
      ${p==="self-hosted"&&fn(u,h,b,$,w,y,r,a,U,L,()=>l(null))}
    </div>
  `}function fe(e){return c`
    <div class="steps">
      <div class="step ${e>=1?"done":""}">
        <span class="step-num">1</span>
        <span>Apply</span>
      </div>
      <div class="step-line ${e>=2?"done":""}" />
      <div class="step ${e>=2?"done":""}">
        <span class="step-num">2</span>
        <span>Approved</span>
      </div>
      <div class="step-line ${e>=3?"done":""}" />
      <div class="step ${e>=3?"done":""}">
        <span class="step-num">3</span>
        <span>Configure</span>
      </div>
      <div class="step-line ${e>=4?"done":""}" />
      <div class="step ${e>=4?"done":""}">
        <span class="step-num">4</span>
        <span>Ready</span>
      </div>
    </div>
  `}function hn(e,t,n,s,r,a,o){const d=e?.serviceAccount||"the service account",p=e?.operatorAccount,l=t||n;return c`
    <div class="card">
      <h2>Delegate Active Authority</h2>
      <div class="notice">
        <strong>What this means:</strong>
        <p>You will grant <strong>@${d}</strong> active authority over your account. This allows the service to create Hive accounts and delegate HP on your behalf when gift cards are claimed.</p>
        <p><strong style="color:var(--warn,#e8a435)">Trust warning:</strong> Active authority grants <strong>@${d}</strong> broad control over your account, including the ability to transfer HIVE, HBD, and other assets. <strong>Only proceed if you trust the operator${p?c` (<a href=${"https://peakd.com/@"+p} target="_blank" rel="noopener">@${p}</a>)`:""} of this service.</strong></p>
        <p>You can revoke this delegation at any time through Peakd or any Hive wallet.</p>
      </div>

      <div class="fx mt1 gap">
        <button onClick=${r} disabled=${l}>
          ${t?c`<span class="spinner" style="width:14px;height:14px;border-width:2px;vertical-align:middle;margin-right:8px" /> Delegating...`:n?c`<span class="spinner" style="width:14px;height:14px;border-width:2px;vertical-align:middle;margin-right:8px" /> Verifying...`:c`Delegate to @${d}`}
        </button>
        <button onClick=${o} class="btn-secondary" disabled=${l}>Back</button>
      </div>

      <p class="sm tm mt1">Clicking the button will prompt Hive Keychain to approve adding @${d} to your active authority.</p>

      ${e?.delegated&&c`
        <p class="mt1" style="color:var(--ok)">Delegation verified — you already have @${d} in your active authority.</p>
      `}

      ${e&&c`
        <dl class="meta mt1">
          <dt>Account Creation Tokens</dt>
          <dd>${e.pendingTokens}</dd>
        </dl>
      `}

      ${s&&c`<p class="err mt1">${s}</p>`}

      ${!e?.delegated&&c`
        <details class="mt1">
          <summary class="manual-toggle">Don't have Keychain? Manual instructions</summary>
          <div class="notice mt1">
            <p>Add <strong>@${d}</strong> to your account's <strong>Active</strong> authority using any of these methods:</p>
            <ol class="manual-steps">
              <li>Go to <a href="https://peakd.com/@${_.username}/permissions" target="_blank" rel="noopener">your permissions on Peakd</a></li>
              <li>Under <strong>Active</strong>, click <strong>Add Account</strong></li>
              <li>Enter <code>@${d}</code> with a weight of <strong>1</strong></li>
              <li>Save and confirm with your active or master key</li>
            </ol>
            <p class="sm tm">After completing this, click <strong>Check Delegation</strong> below to verify.</p>
          </div>
          <button onClick=${a} disabled=${l} class="mt1">
            ${n?c`<span class="spinner" style="width:14px;height:14px;border-width:2px;vertical-align:middle;margin-right:8px" /> Checking...`:"Check Delegation"}
          </button>
        </details>
      `}
    </div>
  `}function fn(e,t,n,s,r,a,o,d,p,l,v){return c`
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
          value=${e}
          onInput=${i=>{t(i.target.value),r(null),d("")}}
        />
      </div>

      <div class="fx mt1 gap">
        <button onClick=${p} disabled=${n||!e.trim()}>
          ${n?c`<span class="spinner" style="width:14px;height:14px;border-width:2px;vertical-align:middle;margin-right:8px" /> Checking...`:"Check Connection"}
        </button>
        <button onClick=${l} disabled=${a||!s}>
          ${a?c`<span class="spinner" style="width:14px;height:14px;border-width:2px;vertical-align:middle;margin-right:8px" /> Saving...`:"Register Service"}
        </button>
        <button onClick=${v} class="btn-secondary">Back</button>
      </div>

      ${s===!0&&c`<p class="mt1" style="color:var(--ok)">Service is reachable</p>`}
      ${s===!1&&c`<p class="mt1" style="color:var(--er)">Service is not reachable</p>`}
      ${o&&c`<p class="err mt1">${o}</p>`}
    </div>
  `}function lt(e){return new Date(e).toLocaleDateString()}function vn(){const[e,t]=m([]),[n,s]=m(!0),[r,a]=m(""),[o,d]=m(null);M(()=>{ke("pending").then(l=>{t(l),I({pendingCount:l.length}),s(!1)}).catch(l=>{a(l.message),s(!1)})},[]);async function p(l){a(""),d(l);try{if(!z())throw new Error("Hive Keychain required to broadcast approval.");const v=await it(_.username,"propolis_issuer_approve","Posting",{issuer:l,approved_at:new Date().toISOString()},`Approve @${l} as an issuer`),i=typeof v=="object"&&v!==null?v.tx_id??v.id:String(v);await Yt(l,i),t(u=>u.filter(h=>h.username!==l)),I({pendingCount:Math.max(0,_.pendingCount-1)})}catch(v){a(v instanceof Error?v.message:String(v))}finally{d(null)}}return n?c`<div class="loading"><span class="spinner" /> Loading...</div>`:r?c`<p class="err">${r}</p>`:e.length===0?c`<p class="tm">No pending applications.</p>`:c`
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
        ${e.map(l=>c`
          <tr key=${l.username}>
            <td class="mono">@${l.username}</td>
            <td>${l.description||"-"}</td>
            <td>${l.contact||"-"}</td>
            <td>${lt(l.applied_at)}</td>
            <td>
              <button
                class="btn-sm"
                onClick=${()=>p(l.username)}
                disabled=${o===l.username}
              >
                ${o===l.username?c`<span class="spinner" />`:"Approve"}
              </button>
            </td>
          </tr>
        `)}
      </tbody>
    </table>
  `}function _n(){const[e,t]=m([]),[n,s]=m(!0),[r,a]=m(""),[o,d]=m(null),[p,l]=m({});M(()=>{ke().then(u=>{t(u.filter(h=>h.status!=="pending")),s(!1)}).catch(u=>{a(u.message),s(!1)})},[]);function v(u,h){l(b=>({...b,[u]:h}))}async function i(u){const h=p[u];if(!h)return;const b=e.find($=>$.username===u);if(!b||b.status===h)return;const k={active:`Re-activate @${u}?`,revoked:`Revoke @${u}? They will lose dashboard access. Existing cards remain redeemable.`,banned:`Ban @${u}? This will also block redemption of their existing cards.`};if(confirm(k[h]||`Change @${u} to ${h}?`)){a(""),d(u);try{let $;if(h==="revoked")$=await qt(u);else if(h==="banned")$=await Kt(u);else{a(`Cannot transition to '${h}' from admin panel`);return}t(w=>w.map(y=>y.username===u?{...y,status:$.status}:y)),l(w=>{const y={...w};return delete y[u],y})}catch($){a($ instanceof Error?$.message:String($))}finally{d(null)}}}return n?c`<div class="loading"><span class="spinner" /> Loading...</div>`:r?c`<p class="err">${r}</p>`:e.length===0?c`<p class="tm">No active issuers yet.</p>`:c`
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
        ${e.map(u=>{const h=p[u.username]||u.status,b=h!==u.status;return c`
            <tr key=${u.username}>
              <td class="mono">@${u.username}</td>
              <td>
                <select
                  value=${h}
                  onInput=${k=>v(u.username,k.target.value)}
                  disabled=${o===u.username}
                  style="width:auto;margin:0;padding:4px 8px;font-size:.85rem"
                >
                  ${u.status==="approved"&&c`<option value="approved">Approved</option>`}
                  <option value="active">Active</option>
                  <option value="revoked">Revoked</option>
                  <option value="banned">Banned</option>
                </select>
              </td>
              <td>${u.batch_count}</td>
              <td>${u.total_cards}</td>
              <td>${u.claimed_cards}</td>
              <td>${lt(u.approved_at||u.applied_at)}</td>
              <td>
                ${b&&c`
                  <button
                    class="btn-sm"
                    onClick=${()=>i(u.username)}
                    disabled=${o===u.username}
                  >
                    ${o===u.username?c`<span class="spinner" />`:"Apply"}
                  </button>
                `}
              </td>
            </tr>
          `})}
      </tbody>
    </table>
  `}function mn(){const[e,t]=m("pending");return c`
    <div class="ct">
      <h1>Admin Panel</h1>

      <div class="tabs">
        <button
          class="tab ${e==="pending"?"active":""}"
          onClick=${()=>t("pending")}
        >Pending Applications</button>
        <button
          class="tab ${e==="active"?"active":""}"
          onClick=${()=>t("active")}
        >Active Issuers</button>
      </div>

      <div class="mt1">
        ${e==="pending"?c`<${vn} />`:c`<${_n} />`}
      </div>
    </div>
  `}function Fe(e){return e?new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):"-"}function gn(e){return c`<span class="badge ${e==="active"?"badge-active":e==="spent"?"badge-spent":"badge-revoked"}">${e}</span>`}function bn({summary:e,cards:t}){const[n,s]=m(null),[r,a]=m("");async function o(p){s(p),a("");try{const l=`allocated-${e.batchId}-${p}.pdf`;await zt(e.batchId,l,{include:p})}catch(l){a(l instanceof Error?l.message:String(l))}finally{s(null)}}const d=e.active;return c`
    <div class="card mt1">
      <dl class="meta">
        <dt>From</dt>
        <dd>@${e.batchProvider}</dd>
        <dt>Batch</dt>
        <dd class="mono xs">${e.batchId}</dd>
        <dt>Expires</dt>
        <dd>${Fe(e.batchExpiresAt)}</dd>
        <dt>Allocated</dt>
        <dd>${e.total}</dd>
      </dl>

      <div class="status-row mb">
        <span><span class="dot dot-active" />${e.active} unclaimed</span>
        <span><span class="dot dot-spent" />${e.spent} claimed</span>
      </div>

      <div class="fx">
        <button class="dl-btn"
          disabled=${n!==null||d===0}
          onClick=${()=>o("unclaimed")}>
          ${n==="unclaimed"?"Preparing...":`Print unclaimed (${d})`}
        </button>
        <button class="dl-btn"
          disabled=${n!==null||e.total===0}
          onClick=${()=>o("all")}>
          ${n==="all"?"Preparing...":`Print all (${e.total})`}
        </button>
      </div>
      ${r&&c`<p class="err mt1">${r}</p>`}

      <details class="mt1">
        <summary class="sm">Card details (${t.length})</summary>
        <div style="overflow-x:auto" class="mt1">
          <table class="table">
            <thead>
              <tr>
                <th>Token</th>
                <th>Status</th>
                <th>Claimed By</th>
                <th>Claimed At</th>
              </tr>
            </thead>
            <tbody>
              ${t.map(p=>c`
                <tr key=${p.tokenPrefix}>
                  <td class="mono">${p.tokenPrefix}...</td>
                  <td>${gn(p.status)}</td>
                  <td>${p.claimedBy?`@${p.claimedBy}`:"-"}</td>
                  <td class="sm">${Fe(p.claimedAt)}</td>
                </tr>
              `)}
            </tbody>
          </table>
        </div>
      </details>
    </div>
  `}function yn(){const[e,t]=m(null),[n,s]=m(!0),[r,a]=m("");if(M(()=>{s(!0),a(""),Wt().then(d=>{t(d),s(!1)}).catch(d=>{a(d instanceof Error?d.message:String(d)),s(!1)})},[]),n)return c`<div class="ct"><div class="loading"><span class="spinner" /> Loading allocations...</div></div>`;if(r)return c`<div class="ct"><p class="err">${r}</p></div>`;if(!e||e.batches.length===0)return c`
      <div class="ct">
        <h2>My Allocations</h2>
        <div class="empty-state">
          <p>No cards have been allocated to you yet.</p>
          <p class="sm">When the dashboard operator allocates starter cards to your account, they'll appear here for printing.</p>
        </div>
      </div>
    `;const o=new Map;for(const d of e.cards){const p=o.get(d.batchId)??[];p.push(d),o.set(d.batchId,p)}return c`
    <div class="ct">
      <h2>My Allocations</h2>
      <p class="sm mt mb">
        Cards allocated to you by another issuer. The cards remain attributed to the issuer who created them — you're distributing them, not issuing them.
      </p>
      ${e.batches.map(d=>c`
        <${bn} key=${d.batchId} summary=${d} cards=${o.get(d.batchId)??[]} />
      `)}
    </div>
  `}function Je(e){const t=e.replace(/^#\/?/,"")||"login";return t==="login"?{view:"login",path:t}:t==="apply"?{view:"apply",path:t}:t==="setup"?{view:"setup",path:t}:t==="admin"?{view:"admin",path:t}:t==="allocations"?{view:"allocations",path:t}:t==="batches"?{view:"batch-list",path:t}:t==="batches/generate"?{view:"batch-form",path:t}:t.startsWith("batches/")?{view:"batch-detail",param:t.slice(8),path:t}:{view:"batch-list",path:t}}function $n(){const[e,t]=m(Je(window.location.hash)),[,n]=m(0);M(()=>{function r(){t(Je(window.location.hash))}return window.addEventListener("hashchange",r),()=>window.removeEventListener("hashchange",r)},[]),M(()=>It(()=>n(r=>r+1)),[]);const s=!!_.jwt;return!s&&e.view!=="login"?(sessionStorage.setItem("propolis_redirect",`#${e.path}`),c`<${je} />`):s&&e.view==="login"?(_.role==="admin"?window.location.hash="#admin":_.role==="issuer"?window.location.hash="#batches":_.issuerStatus?.status==="approved"?window.location.hash="#setup":window.location.hash="#apply",null):e.view==="login"?c`<${je} />`:e.view==="apply"?c`
      <div class="ct">
        <${K} route=${e.view} />
      </div>
      <${un} />
    `:e.view==="setup"?c`
      <div class="ct">
        <${K} route=${e.view} />
      </div>
      <${pn} />
    `:e.view==="allocations"?c`
      <div class="ct">
        <${K} route=${e.view} />
      </div>
      <${yn} />
    `:e.view==="admin"?_.role!=="admin"?(window.location.hash="#batches",null):c`
      <div class="ct">
        <${K} route=${e.view} />
      </div>
      <${mn} />
    `:_.role!=="issuer"&&_.role!=="admin"?(_.issuerStatus?.status==="approved"?window.location.hash="#setup":window.location.hash="#apply",null):c`
    <div class="ct">
      <${K} route=${e.view} />
    </div>
    ${e.view==="batch-list"&&c`<${sn} />`}
    ${e.view==="batch-form"&&c`<${ln} />`}
    ${e.view==="batch-detail"&&e.param&&c`<${dn} batchId=${e.param} key=${e.param} />`}
  `}gt(c`<${$n} />`,document.getElementById("app"));
