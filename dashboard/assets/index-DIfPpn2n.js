(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();var z,b,Dt,D,_t,It,Pt,Nt,rt,Z,tt,M={},O=[],Rt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,K=Array.isArray;function C(e,t){for(var a in t)e[a]=t[a];return e}function st(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Lt(e,t,a){var o,r,n,i={};for(n in t)n=="key"?o=t[n]:n=="ref"?r=t[n]:i[n]=t[n];if(arguments.length>2&&(i.children=arguments.length>3?z.call(arguments,2):a),typeof e=="function"&&e.defaultProps!=null)for(n in e.defaultProps)i[n]===void 0&&(i[n]=e.defaultProps[n]);return U(e,i,o,r,null)}function U(e,t,a,o,r){var n={type:e,props:t,key:a,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++Dt,__i:-1,__u:0};return r==null&&b.vnode!=null&&b.vnode(n),n}function V(e){return e.children}function j(e,t){this.props=e,this.context=t}function L(e,t){if(t==null)return e.__?L(e.__,e.__i+1):null;for(var a;t<e.__k.length;t++)if((a=e.__k[t])!=null&&a.__e!=null)return a.__e;return typeof e.type=="function"?L(e):null}function Gt(e){if(e.__P&&e.__d){var t=e.__v,a=t.__e,o=[],r=[],n=C({},t);n.__v=t.__v+1,b.vnode&&b.vnode(n),it(e.__P,n,t,e.__n,e.__P.namespaceURI,32&t.__u?[a]:null,o,a??L(t),!!(32&t.__u),r),n.__v=t.__v,n.__.__k[n.__i]=n,At(o,n,r),t.__e=t.__=null,n.__e!=a&&Bt(n)}}function Bt(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),Bt(e)}function dt(e){(!e.__d&&(e.__d=!0)&&D.push(e)&&!R.__r++||_t!=b.debounceRendering)&&((_t=b.debounceRendering)||It)(R)}function R(){try{for(var e,t=1;D.length;)D.length>t&&D.sort(Pt),e=D.shift(),t=D.length,Gt(e)}finally{D.length=R.__r=0}}function Et(e,t,a,o,r,n,i,c,_,l,d){var s,u,f,m,k,$,h,v=o&&o.__k||O,S=t.length;for(_=Wt(a,t,v,_,S),s=0;s<S;s++)(f=a.__k[s])!=null&&(u=f.__i!=-1&&v[f.__i]||M,f.__i=s,$=it(e,f,u,r,n,i,c,_,l,d),m=f.__e,f.ref&&u.ref!=f.ref&&(u.ref&&lt(u.ref,null,f),d.push(f.ref,f.__c||m,f)),k==null&&m!=null&&(k=m),(h=!!(4&f.__u))||u.__k===f.__k?_=Tt(f,_,e,h):typeof f.type=="function"&&$!==void 0?_=$:m&&(_=m.nextSibling),f.__u&=-7);return a.__e=k,_}function Wt(e,t,a,o,r){var n,i,c,_,l,d=a.length,s=d,u=0;for(e.__k=new Array(r),n=0;n<r;n++)(i=t[n])!=null&&typeof i!="boolean"&&typeof i!="function"?(typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?i=e.__k[n]=U(null,i,null,null,null):K(i)?i=e.__k[n]=U(V,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?i=e.__k[n]=U(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):e.__k[n]=i,_=n+u,i.__=e,i.__b=e.__b+1,c=null,(l=i.__i=qt(i,a,_,s))!=-1&&(s--,(c=a[l])&&(c.__u|=2)),c==null||c.__v==null?(l==-1&&(r>d?u--:r<d&&u++),typeof i.type!="function"&&(i.__u|=4)):l!=_&&(l==_-1?u--:l==_+1?u++:(l>_?u--:u++,i.__u|=4))):e.__k[n]=null;if(s)for(n=0;n<d;n++)(c=a[n])!=null&&(2&c.__u)==0&&(c.__e==o&&(o=L(c)),Ut(c,c));return o}function Tt(e,t,a,o){var r,n;if(typeof e.type=="function"){for(r=e.__k,n=0;r&&n<r.length;n++)r[n]&&(r[n].__=e,t=Tt(r[n],t,a,o));return t}e.__e!=t&&(o&&(t&&e.type&&!t.parentNode&&(t=L(e)),a.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function qt(e,t,a,o){var r,n,i,c=e.key,_=e.type,l=t[a],d=l!=null&&(2&l.__u)==0;if(l===null&&c==null||d&&c==l.key&&_==l.type)return a;if(o>(d?1:0)){for(r=a-1,n=a+1;r>=0||n<t.length;)if((l=t[i=r>=0?r--:n++])!=null&&(2&l.__u)==0&&c==l.key&&_==l.type)return i}return-1}function ut(e,t,a){t[0]=="-"?e.setProperty(t,a??""):e[t]=a==null?"":typeof a!="number"||Rt.test(t)?a:a+"px"}function H(e,t,a,o,r){var n,i;t:if(t=="style")if(typeof a=="string")e.style.cssText=a;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)a&&t in a||ut(e.style,t,"");if(a)for(t in a)o&&a[t]==o[t]||ut(e.style,t,a[t])}else if(t[0]=="o"&&t[1]=="n")n=t!=(t=t.replace(Nt,"$1")),i=t.toLowerCase(),t=i in e||t=="onFocusOut"||t=="onFocusIn"?i.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+n]=a,a?o?a.u=o.u:(a.u=rt,e.addEventListener(t,n?tt:Z,n)):e.removeEventListener(t,n?tt:Z,n);else{if(r=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=a??"";break t}catch{}typeof a=="function"||(a==null||a===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&a==1?"":a))}}function ft(e){return function(t){if(this.l){var a=this.l[t.type+e];if(t.t==null)t.t=rt++;else if(t.t<a.u)return;return a(b.event?b.event(t):t)}}}function it(e,t,a,o,r,n,i,c,_,l){var d,s,u,f,m,k,$,h,v,S,I,T,ct,A,X,x=t.type;if(t.constructor!==void 0)return null;128&a.__u&&(_=!!(32&a.__u),n=[c=t.__e=a.__e]),(d=b.__b)&&d(t);t:if(typeof x=="function")try{if(h=t.props,v=x.prototype&&x.prototype.render,S=(d=x.contextType)&&o[d.__c],I=d?S?S.props.value:d.__:o,a.__c?$=(s=t.__c=a.__c).__=s.__E:(v?t.__c=s=new x(h,I):(t.__c=s=new j(h,I),s.constructor=x,s.render=Kt),S&&S.sub(s),s.state||(s.state={}),s.__n=o,u=s.__d=!0,s.__h=[],s._sb=[]),v&&s.__s==null&&(s.__s=s.state),v&&x.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=C({},s.__s)),C(s.__s,x.getDerivedStateFromProps(h,s.__s))),f=s.props,m=s.state,s.__v=t,u)v&&x.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),v&&s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(v&&x.getDerivedStateFromProps==null&&h!==f&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(h,I),t.__v==a.__v||!s.__e&&s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(h,s.__s,I)===!1){t.__v!=a.__v&&(s.props=h,s.state=s.__s,s.__d=!1),t.__e=a.__e,t.__k=a.__k,t.__k.some(function(N){N&&(N.__=t)}),O.push.apply(s.__h,s._sb),s._sb=[],s.__h.length&&i.push(s);break t}s.componentWillUpdate!=null&&s.componentWillUpdate(h,s.__s,I),v&&s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(f,m,k)})}if(s.context=I,s.props=h,s.__P=e,s.__e=!1,T=b.__r,ct=0,v)s.state=s.__s,s.__d=!1,T&&T(t),d=s.render(s.props,s.state,s.context),O.push.apply(s.__h,s._sb),s._sb=[];else do s.__d=!1,T&&T(t),d=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++ct<25);s.state=s.__s,s.getChildContext!=null&&(o=C(C({},o),s.getChildContext())),v&&!u&&s.getSnapshotBeforeUpdate!=null&&(k=s.getSnapshotBeforeUpdate(f,m)),A=d!=null&&d.type===V&&d.key==null?Ht(d.props.children):d,c=Et(e,K(A)?A:[A],t,a,o,r,n,i,c,_,l),s.base=t.__e,t.__u&=-161,s.__h.length&&i.push(s),$&&(s.__E=s.__=null)}catch(N){if(t.__v=null,_||n!=null)if(N.then){for(t.__u|=_?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;n[n.indexOf(c)]=null,t.__e=c}else{for(X=n.length;X--;)st(n[X]);et(t)}else t.__e=a.__e,t.__k=a.__k,N.then||et(t);b.__e(N,t,a)}else n==null&&t.__v==a.__v?(t.__k=a.__k,t.__e=a.__e):c=t.__e=zt(a.__e,t,a,o,r,n,i,_,l);return(d=b.diffed)&&d(t),128&t.__u?void 0:c}function et(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(et))}function At(e,t,a){for(var o=0;o<a.length;o++)lt(a[o],a[++o],a[++o]);b.__c&&b.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(n){n.call(r)})}catch(n){b.__e(n,r.__v)}})}function Ht(e){return typeof e!="object"||e==null||e.__b>0?e:K(e)?e.map(Ht):C({},e)}function zt(e,t,a,o,r,n,i,c,_){var l,d,s,u,f,m,k,$=a.props||M,h=t.props,v=t.type;if(v=="svg"?r="http://www.w3.org/2000/svg":v=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),n!=null){for(l=0;l<n.length;l++)if((f=n[l])&&"setAttribute"in f==!!v&&(v?f.localName==v:f.nodeType==3)){e=f,n[l]=null;break}}if(e==null){if(v==null)return document.createTextNode(h);e=document.createElementNS(r,v,h.is&&h),c&&(b.__m&&b.__m(t,n),c=!1),n=null}if(v==null)$===h||c&&e.data==h||(e.data=h);else{if(n=n&&z.call(e.childNodes),!c&&n!=null)for($={},l=0;l<e.attributes.length;l++)$[(f=e.attributes[l]).name]=f.value;for(l in $)f=$[l],l=="dangerouslySetInnerHTML"?s=f:l=="children"||l in h||l=="value"&&"defaultValue"in h||l=="checked"&&"defaultChecked"in h||H(e,l,null,f,r);for(l in h)f=h[l],l=="children"?u=f:l=="dangerouslySetInnerHTML"?d=f:l=="value"?m=f:l=="checked"?k=f:c&&typeof f!="function"||$[l]===f||H(e,l,f,$[l],r);if(d)c||s&&(d.__html==s.__html||d.__html==e.innerHTML)||(e.innerHTML=d.__html),t.__k=[];else if(s&&(e.innerHTML=""),Et(t.type=="template"?e.content:e,K(u)?u:[u],t,a,o,v=="foreignObject"?"http://www.w3.org/1999/xhtml":r,n,i,n?n[0]:a.__k&&L(a,0),c,_),n!=null)for(l=n.length;l--;)st(n[l]);c||(l="value",v=="progress"&&m==null?e.removeAttribute("value"):m!=null&&(m!==e[l]||v=="progress"&&!m||v=="option"&&m!=$[l])&&H(e,l,m,$[l],r),l="checked",k!=null&&k!=e[l]&&H(e,l,k,$[l],r))}return e}function lt(e,t,a){try{if(typeof e=="function"){var o=typeof e.__u=="function";o&&e.__u(),o&&t==null||(e.__u=e(t))}else e.current=t}catch(r){b.__e(r,a)}}function Ut(e,t,a){var o,r;if(b.unmount&&b.unmount(e),(o=e.ref)&&(o.current&&o.current!=e.__e||lt(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(n){b.__e(n,t)}o.base=o.__P=null}if(o=e.__k)for(r=0;r<o.length;r++)o[r]&&Ut(o[r],t,a||typeof e.type!="function");a||st(e.__e),e.__c=e.__=e.__e=void 0}function Kt(e,t,a){return this.constructor(e,a)}function Vt(e,t,a){var o,r,n,i;t==document&&(t=document.documentElement),b.__&&b.__(e,t),r=(o=!1)?null:t.__k,n=[],i=[],it(t,e=t.__k=Lt(V,null,[e]),r||M,M,t.namespaceURI,r?null:t.firstChild?z.call(t.childNodes):null,n,r?r.__e:t.firstChild,o,i),At(n,e,i)}z=O.slice,b={__e:function(e,t,a,o){for(var r,n,i;t=t.__;)if((r=t.__c)&&!r.__)try{if((n=r.constructor)&&n.getDerivedStateFromError!=null&&(r.setState(n.getDerivedStateFromError(e)),i=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,o||{}),i=r.__d),i)return r.__E=r}catch(c){e=c}throw e}},Dt=0,j.prototype.setState=function(e,t){var a;a=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=C({},this.state),typeof e=="function"&&(e=e(C({},a),this.props)),e&&C(a,e),e!=null&&this.__v&&(t&&this._sb.push(t),dt(this))},j.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),dt(this))},j.prototype.render=V,D=[],It=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Pt=function(e,t){return e.__v.__b-t.__v.__b},R.__r=0,Nt=/(PointerCapture)$|Capture$/i,rt=0,Z=ft(!1),tt=ft(!0);var jt=function(e,t,a,o){var r;t[0]=0;for(var n=1;n<t.length;n++){var i=t[n++],c=t[n]?(t[0]|=i?1:2,a[t[n++]]):t[++n];i===3?o[0]=c:i===4?o[1]=Object.assign(o[1]||{},c):i===5?(o[1]=o[1]||{})[t[++n]]=c:i===6?o[1][t[++n]]+=c+"":i?(r=e.apply(c,jt(e,c,a,["",null])),o.push(r),c[0]?t[0]|=2:(t[n-2]=0,t[n]=r)):o.push(c)}return o},ht=new Map;function Jt(e){var t=ht.get(this);return t||(t=new Map,ht.set(this,t)),(t=jt(this,t.get(e)||(t.set(e,t=(function(a){for(var o,r,n=1,i="",c="",_=[0],l=function(u){n===1&&(u||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?_.push(0,u,i):n===3&&(u||i)?(_.push(3,u,i),n=2):n===2&&i==="..."&&u?_.push(4,u,0):n===2&&i&&!u?_.push(5,0,!0,i):n>=5&&((i||!u&&n===5)&&(_.push(n,0,i,r),n=6),u&&(_.push(n,u,0,r),n=6)),i=""},d=0;d<a.length;d++){d&&(n===1&&l(),l(d));for(var s=0;s<a[d].length;s++)o=a[d][s],n===1?o==="<"?(l(),_=[_],n=3):i+=o:n===4?i==="--"&&o===">"?(n=1,i=""):i=o+i[0]:c?o===c?c="":i+=o:o==='"'||o==="'"?c=o:o===">"?(l(),n=1):n&&(o==="="?(n=5,r=i,i=""):o==="/"&&(n<5||a[d][s+1]===">")?(l(),n===3&&(_=_[0]),n=_,(_=_[0]).push(2,0,n),n=0):o===" "||o==="	"||o===`
`||o==="\r"?(l(),n=2):i+=o),n===3&&i==="!--"&&(n=4,_=_[0])}return l(),_})(e)),t),arguments,[])).length>1?t:t[0]}var p=Jt.bind(Lt),G,g,Y,pt,nt=0,Ft=[],y=b,vt=y.__b,mt=y.__r,bt=y.diffed,gt=y.__c,yt=y.unmount,$t=y.__;function Mt(e,t){y.__h&&y.__h(g,e,nt||t),nt=0;var a=g.__H||(g.__H={__:[],__h:[]});return e>=a.__.length&&a.__.push({}),a.__[e]}function w(e){return nt=1,Xt(Ot,e)}function Xt(e,t,a){var o=Mt(G++,2);if(o.t=e,!o.__c&&(o.__=[Ot(void 0,t),function(c){var _=o.__N?o.__N[0]:o.__[0],l=o.t(_,c);_!==l&&(o.__N=[l,o.__[1]],o.__c.setState({}))}],o.__c=g,!g.__f)){var r=function(c,_,l){if(!o.__c.__H)return!0;var d=o.__c.__H.__.filter(function(u){return u.__c});if(d.every(function(u){return!u.__N}))return!n||n.call(this,c,_,l);var s=o.__c.props!==c;return d.some(function(u){if(u.__N){var f=u.__[0];u.__=u.__N,u.__N=void 0,f!==u.__[0]&&(s=!0)}}),n&&n.call(this,c,_,l)||s};g.__f=!0;var n=g.shouldComponentUpdate,i=g.componentWillUpdate;g.componentWillUpdate=function(c,_,l){if(this.__e){var d=n;n=void 0,r(c,_,l),n=d}i&&i.call(this,c,_,l)},g.shouldComponentUpdate=r}return o.__N||o.__}function W(e,t){var a=Mt(G++,3);!y.__s&&Zt(a.__H,t)&&(a.__=e,a.u=t,g.__H.__h.push(a))}function Yt(){for(var e;e=Ft.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(F),t.__h.some(at),t.__h=[]}catch(a){t.__h=[],y.__e(a,e.__v)}}}y.__b=function(e){g=null,vt&&vt(e)},y.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),$t&&$t(e,t)},y.__r=function(e){mt&&mt(e),G=0;var t=(g=e.__c).__H;t&&(Y===g?(t.__h=[],g.__h=[],t.__.some(function(a){a.__N&&(a.__=a.__N),a.u=a.__N=void 0})):(t.__h.some(F),t.__h.some(at),t.__h=[],G=0)),Y=g},y.diffed=function(e){bt&&bt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Ft.push(t)!==1&&pt===y.requestAnimationFrame||((pt=y.requestAnimationFrame)||Qt)(Yt)),t.__H.__.some(function(a){a.u&&(a.__H=a.u),a.u=void 0})),Y=g=null},y.__c=function(e,t){t.some(function(a){try{a.__h.some(F),a.__h=a.__h.filter(function(o){return!o.__||at(o)})}catch(o){t.some(function(r){r.__h&&(r.__h=[])}),t=[],y.__e(o,a.__v)}}),gt&&gt(e,t)},y.unmount=function(e){yt&&yt(e);var t,a=e.__c;a&&a.__H&&(a.__H.__.some(function(o){try{F(o)}catch(r){t=r}}),a.__H=void 0,t&&y.__e(t,a.__v))};var wt=typeof requestAnimationFrame=="function";function Qt(e){var t,a=function(){clearTimeout(o),wt&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(a,35);wt&&(t=requestAnimationFrame(a))}function F(e){var t=g,a=e.__c;typeof a=="function"&&(e.__c=void 0,a()),g=t}function at(e){var t=g;e.__c=e.__(),g=t}function Zt(e,t){return!e||e.length!==t.length||t.some(function(a,o){return a!==e[o]})}function Ot(e,t){return typeof t=="function"?t(e):t}const ot=new Set,P={jwt:null,username:null,batches:[],loading:!1};function J(e){Object.assign(P,e);for(const t of ot)t()}function te(e){return ot.add(e),()=>ot.delete(e)}function ee(){J({jwt:null,username:null,batches:[],loading:!1})}function kt(e,t){t.preventDefault(),window.location.hash=e}function ne(e){e.preventDefault(),ee(),window.location.hash="#login"}function ae({route:e}){return p`
    <nav>
      <a href="#batches"
        class=${e==="batch-list"?"active":""}
        onClick=${t=>kt("#batches",t)}>Batches</a>
      <a href="#batches/generate"
        class=${e==="batch-form"?"active":""}
        onClick=${t=>kt("#batches/generate",t)}>Generate</a>
      <span class="spacer" />
      <span class="user">@${P.username}</span>
      <button class="logout" onClick=${ne}>Logout</button>
    </nav>
  `}const oe="https://haa-giftcard-prod.fly.dev";class xt extends Error{constructor(t,a){super(a),this.status=t}}async function E(e,t={}){const a=new Headers(t.headers);P.jwt&&a.set("Authorization",`Bearer ${P.jwt}`),t.body&&typeof t.body=="string"&&a.set("Content-Type","application/json");const o=await fetch(`${oe}${e}`,{...t,headers:a});if(o.status===401)throw J({jwt:null,username:null,batches:[]}),window.location.hash="#login",new xt(401,"Session expired");if(!o.ok){const r=await o.json().catch(()=>({error:o.statusText}));throw new xt(o.status,r.error||o.statusText)}return o}async function re(e){return(await(await E("/auth/challenge",{method:"POST",body:JSON.stringify({username:e})})).json()).challenge}async function se(e,t,a){return(await(await E("/auth/verify",{method:"POST",body:JSON.stringify({username:e,challenge:t,signature:a})})).json()).token}async function ie(e){return(await E("/api/batches",{method:"POST",body:JSON.stringify(e)})).json()}async function le(){return(await(await E("/api/batches")).json()).batches}async function ce(e){return(await E(`/api/batches/${encodeURIComponent(e)}`)).json()}async function B(e,t){const o=await(await E(e)).blob(),r=URL.createObjectURL(o),n=document.createElement("a");n.href=r,n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(r)}function _e(){return!!window.hive_keychain}function de(e,t){return new Promise((a,o)=>{window.hive_keychain.requestSignBuffer(e,t,"Posting",r=>{r.success?a(r.result):o(new Error(r.message||r.error||"Keychain signing failed"))})})}async function ue(e){const t=await re(e),a=await de(e,t);return se(e,t,a)}function fe(){const[e,t]=w(""),[a,o]=w(""),[r,n]=w(!1);async function i(c){c.preventDefault(),o("");const _=e.toLowerCase().replace(/^@/,"").trim();if(!_){o("Enter your Hive username");return}if(!_e()){o("Hive Keychain extension not detected. Install it from hivekeychain.com");return}n(!0);try{const l=await ue(_);J({jwt:l,username:_}),window.location.hash="#batches"}catch(l){const d=l instanceof Error?l.message:String(l);d.includes("Not an authorized issuer")?o(`@${_} is not an authorized issuer`):o(d)}finally{n(!1)}}return p`
    <div class="ct" style="max-width:420px;margin-top:80px">
      <div class="center mb">
        <h1>Gift Card Dashboard</h1>
        <p class="sm mt">Sign in with Hive Keychain to manage your gift card batches.</p>
      </div>

      <form onSubmit=${i}>
        <div class="form-row">
          <label for="username">Hive Username</label>
          <input
            id="username"
            type="text"
            placeholder="yourusername"
            value=${e}
            onInput=${c=>t(c.target.value)}
            disabled=${r}
            autocomplete="username"
            autofocus
          />
        </div>

        <button type="submit" disabled=${r}>
          ${r?p`<span class="spinner" style="width:14px;height:14px;border-width:2px;vertical-align:middle;margin-right:8px" /> Signing with Keychain...`:"Sign in with Keychain"}
        </button>
      </form>

      ${a&&p`<p class="err mt1">${a}</p>`}
    </div>
  `}function he(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}function q(e,t){t.preventDefault(),window.location.hash=e}function pe({batch:e}){const{status:t}=e,a=new Date(e.expiresAt)<new Date;function o(n){n.stopPropagation(),B(`/api/batches/${e.batchId}/pdf`,`${e.batchId}.pdf`)}function r(n){n.stopPropagation(),B(`/api/batches/${e.batchId}/manifest`,`${e.batchId}-manifest.json`)}return p`
    <tr onClick=${n=>q(`#batches/${e.batchId}`,n)} style="cursor:pointer">
      <td class="mono">
        <a href="#batches/${e.batchId}" onClick=${n=>q(`#batches/${e.batchId}`,n)}>
          ${e.batchId.length>24?e.batchId.slice(0,24)+"...":e.batchId}
        </a>
      </td>
      <td>${he(e.createdAt)}</td>
      <td>${e.count}</td>
      <td>
        <div class="status-row">
          ${t.active>0&&p`<span><span class="dot dot-active" />${t.active}</span>`}
          ${t.spent>0&&p`<span><span class="dot dot-spent" />${t.spent}</span>`}
          ${t.revoked>0&&p`<span><span class="dot dot-revoked" />${t.revoked}</span>`}
          ${a&&t.active>0&&p`<span class="badge badge-revoked">expired</span>`}
        </div>
      </td>
      <td>
        <div class="fx">
          <button class="dl-btn" onClick=${o} title="Download PDF">PDF</button>
          <button class="dl-btn" onClick=${r} title="Download Manifest">JSON</button>
        </div>
      </td>
    </tr>
  `}function ve(){const[e,t]=w(!0),[a,o]=w(""),r=P.batches;return W(()=>{t(!0),o(""),le().then(n=>{J({batches:n}),t(!1)}).catch(n=>{o(n instanceof Error?n.message:String(n)),t(!1)})},[]),e?p`<div class="ct"><div class="loading"><span class="spinner" /> Loading batches...</div></div>`:a?p`<div class="ct"><p class="err">${a}</p></div>`:p`
    <div class="ct">
      <div class="fx mb" style="justify-content:space-between">
        <h2 style="margin-bottom:0">Batches</h2>
        <button class="btn-sm btn-ok" onClick=${n=>q("#batches/generate",n)}>
          + Generate New Batch
        </button>
      </div>

      ${r.length===0?p`
        <div class="empty-state">
          <p>No batches yet.</p>
          <button onClick=${n=>q("#batches/generate",n)} style="width:auto;display:inline-block">
            Generate Your First Batch
          </button>
        </div>
      `:p`
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
              ${r.map(n=>p`<${pe} batch=${n} key=${n.batchId} />`)}
            </tbody>
          </table>
        </div>
      `}
    </div>
  `}const me=[{value:"en",label:"English"},{value:"zh",label:"Chinese"},{value:"ar",label:"Arabic"},{value:"fa",label:"Persian"},{value:"ru",label:"Russian"},{value:"tr",label:"Turkish"},{value:"vi",label:"Vietnamese"}];function be(e,t){t.preventDefault(),window.location.hash=e}function ge(){const[e,t]=w(10),[a,o]=w("en"),[r,n]=w(365),[i,c]=w("standard"),[_,l]=w(""),[d,s]=w(!1),[u,f]=w(""),[m,k]=w(null);async function $(h){h.preventDefault(),f(""),s(!0);try{const v=await ie({count:e,locale:a,expiryDays:r,variant:i,design:"hive",..._.trim()&&{note:_.trim()}});k(v)}catch(v){f(v instanceof Error?v.message:String(v))}finally{s(!1)}}return m?p`
      <div class="ct" style="max-width:520px">
        <div class="card center">
          <h2 style="color:var(--ok)">Batch Generated</h2>
          <p>${m.count} gift cards created.</p>
          <p class="sm mt">Batch ID: <span class="mono">${m.batchId}</span></p>
        </div>

        <div class="btn-row mt2">
          <button class="btn-ok"
            onClick=${()=>B(m.downloads.pdf,`${m.batchId}.pdf`)}>
            Download PDF
          </button>
          <button class="btn-s"
            onClick=${()=>B(m.downloads.manifest,`${m.batchId}-manifest.json`)}>
            Download Manifest
          </button>
        </div>

        <p class="wrn sm mt1">The manifest contains all card secrets (tokens and PINs). Store it securely.</p>

        <div class="btn-row mt2">
          <button class="btn-s" onClick=${h=>be(`#batches/${m.batchId}`,h)}>
            View Batch
          </button>
          <button class="btn-s" onClick=${()=>{k(null),l("")}}>
            Generate Another
          </button>
        </div>
      </div>
    `:p`
    <div class="ct" style="max-width:520px">
      <h2>Generate New Batch</h2>
      <p class="sm mt mb">Issuer: <strong>@${P.username}</strong></p>

      <form onSubmit=${$}>
        <div class="form-row">
          <label for="count">Number of Cards</label>
          <input id="count" type="number" min="1" max="100" step="1"
            value=${e}
            onInput=${h=>t(parseInt(h.target.value)||1)}
            disabled=${d} />
          <p class="form-hint">1 to 100 cards per batch</p>
        </div>

        <div class="form-row">
          <label for="locale">Locale</label>
          <select id="locale" value=${a}
            onChange=${h=>o(h.target.value)}
            disabled=${d}>
            ${me.map(h=>p`<option value=${h.value}>${h.label} (${h.value})</option>`)}
          </select>
        </div>

        <div class="form-row">
          <label for="variant">Variant</label>
          <select id="variant" value=${i}
            onChange=${h=>c(h.target.value)}
            disabled=${d}>
            <option value="standard">Standard (unrestricted internet)</option>
            <option value="robust">Robust (restricted regions)</option>
          </select>
        </div>

        <div class="form-row">
          <label for="expiry">Expiry (days)</label>
          <input id="expiry" type="number" min="1" max="3650" step="1"
            value=${r}
            onInput=${h=>n(parseInt(h.target.value)||365)}
            disabled=${d} />
        </div>

        <div class="form-row">
          <label for="note">Note (optional)</label>
          <textarea id="note" rows="2" placeholder="Batch description..."
            value=${_}
            onInput=${h=>l(h.target.value)}
            disabled=${d} />
        </div>

        <p class="sm mt mb" style="color:var(--tm)">Design: Hive Community (default)</p>

        <button type="submit" disabled=${d}>
          ${d?p`<span class="spinner" style="width:14px;height:14px;border-width:2px;vertical-align:middle;margin-right:8px" /> Generating ${e} cards...`:`Generate ${e} Cards`}
        </button>
      </form>

      ${u&&p`<p class="err mt1">${u}</p>`}
    </div>
  `}function Q(e){return e?new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"-"}function ye(e){return p`<span class="badge ${e==="active"?"badge-active":e==="spent"?"badge-spent":"badge-revoked"}">${e}</span>`}function Ct(e,t){t.preventDefault(),window.location.hash=e}function $e({batchId:e}){const[t,a]=w(null),[o,r]=w(!0),[n,i]=w("");if(W(()=>{r(!0),i(""),ce(e).then(s=>{a(s),r(!1)}).catch(s=>{i(s instanceof Error?s.message:String(s)),r(!1)})},[e]),o)return p`<div class="ct"><div class="loading"><span class="spinner" /> Loading batch...</div></div>`;if(n)return p`
      <div class="ct">
        <p class="err">${n}</p>
        <a href="#batches" onClick=${s=>Ct("#batches",s)} class="sm">Back to batches</a>
      </div>
    `;if(!t)return null;const c=t.cards.filter(s=>s.status==="active").length,_=t.cards.filter(s=>s.status==="spent").length,l=t.cards.filter(s=>s.status==="revoked").length,d=new Date(t.expiresAt)<new Date;return p`
    <div class="ct">
      <a href="#batches" onClick=${s=>Ct("#batches",s)} class="sm">← Back to batches</a>

      <div class="card mt1">
        <dl class="meta">
          <dt>Batch ID</dt>
          <dd class="mono">${t.batchId}</dd>
          <dt>Created</dt>
          <dd>${Q(t.createdAt)}</dd>
          <dt>Expires</dt>
          <dd>${Q(t.expiresAt)}${d?p` <span class="badge badge-revoked">expired</span>`:""}</dd>
          <dt>Cards</dt>
          <dd>${t.count}</dd>
          <dt>Type</dt>
          <dd>${t.promiseType}</dd>
          ${t.declarationTx&&p`
            <dt>Declaration TX</dt>
            <dd class="mono xs">${t.declarationTx}</dd>
          `}
          ${t.merkleRoot&&p`
            <dt>Merkle Root</dt>
            <dd class="mono xs">${t.merkleRoot.slice(0,16)}...</dd>
          `}
          ${t.note&&p`
            <dt>Note</dt>
            <dd>${t.note}</dd>
          `}
        </dl>

        <div class="status-row mb">
          <span><span class="dot dot-active" />${c} active</span>
          <span><span class="dot dot-spent" />${_} spent</span>
          <span><span class="dot dot-revoked" />${l} revoked</span>
        </div>

        <div class="fx">
          <button class="dl-btn"
            onClick=${()=>B(`/api/batches/${t.batchId}/pdf`,`${t.batchId}.pdf`)}>
            Download PDF
          </button>
          <button class="dl-btn"
            onClick=${()=>B(`/api/batches/${t.batchId}/manifest`,`${t.batchId}-manifest.json`)}>
            Download Manifest
          </button>
        </div>
      </div>

      <h2>Cards (${t.cards.length})</h2>
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
            ${t.cards.map(s=>p`
              <tr key=${s.tokenPrefix}>
                <td class="mono">${s.tokenPrefix}...</td>
                <td>${ye(s.status)}</td>
                <td>${s.claimedBy?`@${s.claimedBy}`:"-"}</td>
                <td class="sm">${Q(s.claimedAt)}</td>
              </tr>
            `)}
          </tbody>
        </table>
      </div>
    </div>
  `}function St(e){const t=e.replace(/^#\/?/,"")||"login";return t==="login"?{view:"login"}:t==="batches"?{view:"batch-list"}:t==="batches/generate"?{view:"batch-form"}:t.startsWith("batches/")?{view:"batch-detail",param:t.slice(8)}:{view:"batch-list"}}function we(){const[e,t]=w(St(window.location.hash)),[,a]=w(0);W(()=>{function r(){t(St(window.location.hash))}return window.addEventListener("hashchange",r),()=>window.removeEventListener("hashchange",r)},[]),W(()=>te(()=>a(r=>r+1)),[]);const o=!!P.jwt;return!o&&e.view!=="login"?(window.location.hash="#login",null):o&&e.view==="login"?(window.location.hash="#batches",null):e.view==="login"?p`<${fe} />`:p`
    <div class="ct">
      <${ae} route=${e.view} />
    </div>
    ${e.view==="batch-list"&&p`<${ve} />`}
    ${e.view==="batch-form"&&p`<${ge} />`}
    ${e.view==="batch-detail"&&e.param&&p`<${$e} batchId=${e.param} key=${e.param} />`}
  `}Vt(p`<${we} />`,document.getElementById("app"));
