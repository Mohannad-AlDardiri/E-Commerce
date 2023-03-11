import{A as D,i as h,p as I,s as w,m as T,j as C,a as V,g as F,r as J}from"./@remix-run-e938a1c9.js";import{R as O,r as o}from"./react-ae76b4dd.js";/**
 * React Router v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y.apply(this,arguments)}function _(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const $=typeof Object.is=="function"?Object.is:_,{useState:z,useEffect:G,useLayoutEffect:W,useDebugValue:q}=O;function K(e,t,r){const n=t(),[{inst:a},l]=z({inst:{value:n,getSnapshot:t}});return W(()=>{a.value=n,a.getSnapshot=t,S(a)&&l({inst:a})},[e,n,t]),G(()=>(S(a)&&l({inst:a}),e(()=>{S(a)&&l({inst:a})})),[e]),q(n),n}function S(e){const t=e.getSnapshot,r=e.value;try{const n=t();return!$(r,n)}catch{return!0}}function Q(e,t,r){return t()}const X=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Y=!X,Z=Y?Q:K,H="useSyncExternalStore"in O?(e=>e.useSyncExternalStore)(O):Z,U=o.createContext(null),L=o.createContext(null),P=o.createContext(null),b=o.createContext(null),m=o.createContext({outlet:null,matches:[]}),k=o.createContext(null);function ge(e,t){let{relative:r}=t===void 0?{}:t;E()||h(!1);let{basename:n,navigator:a}=o.useContext(P),{hash:l,pathname:s,search:i}=te(e,{relative:r}),u=s;return n!=="/"&&(u=s==="/"?n:C([n,s])),a.createHref({pathname:u,search:i,hash:l})}function E(){return o.useContext(b)!=null}function M(){return E()||h(!1),o.useContext(b).location}function Ee(){E()||h(!1);let{basename:e,navigator:t}=o.useContext(P),{matches:r}=o.useContext(m),{pathname:n}=M(),a=JSON.stringify(F(r).map(i=>i.pathnameBase)),l=o.useRef(!1);return o.useEffect(()=>{l.current=!0}),o.useCallback(function(i,u){if(u===void 0&&(u={}),!l.current)return;if(typeof i=="number"){t.go(i);return}let c=J(i,JSON.parse(a),n,u.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:C([e,c.pathname])),(u.replace?t.replace:t.push)(c,u.state,u)},[e,t,a,n])}const A=o.createContext(null);function ee(e){let t=o.useContext(m).outlet;return t&&o.createElement(A.Provider,{value:e},t)}function te(e,t){let{relative:r}=t===void 0?{}:t,{matches:n}=o.useContext(m),{pathname:a}=M(),l=JSON.stringify(F(n).map(s=>s.pathnameBase));return o.useMemo(()=>J(e,JSON.parse(l),a,r==="path"),[e,l,a,r])}function re(e,t){E()||h(!1);let{navigator:r}=o.useContext(P),n=o.useContext(L),{matches:a}=o.useContext(m),l=a[a.length-1],s=l?l.params:{};l&&l.pathname;let i=l?l.pathnameBase:"/";l&&l.route;let u=M(),c;if(t){var p;let d=typeof t=="string"?I(t):t;i==="/"||(p=d.pathname)!=null&&p.startsWith(i)||h(!1),c=d}else c=u;let f=c.pathname||"/",x=i==="/"?f:f.slice(i.length)||"/",g=T(e,{pathname:x}),v=le(g&&g.map(d=>Object.assign({},d,{params:Object.assign({},s,d.params),pathname:C([i,r.encodeLocation?r.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?i:C([i,r.encodeLocation?r.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),a,n||void 0);return t&&v?o.createElement(b.Provider,{value:{location:y({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:D.Pop}},v):v}function ne(){let e=ce(),t=V(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},l=null;return o.createElement(o.Fragment,null,o.createElement("h2",null,"Unexpected Application Error!"),o.createElement("h3",{style:{fontStyle:"italic"}},t),r?o.createElement("pre",{style:a},r):null,l)}class oe extends o.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location?{error:t.error,location:t.location}:{error:t.error||r.error,location:r.location}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error?o.createElement(m.Provider,{value:this.props.routeContext},o.createElement(k.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ae(e){let{routeContext:t,match:r,children:n}=e,a=o.useContext(U);return a&&a.static&&a.staticContext&&r.route.errorElement&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),o.createElement(m.Provider,{value:t},n)}function le(e,t,r){if(t===void 0&&(t=[]),e==null)if(r!=null&&r.errors)e=r.matches;else return null;let n=e,a=r==null?void 0:r.errors;if(a!=null){let l=n.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||h(!1),n=n.slice(0,Math.min(n.length,l+1))}return n.reduceRight((l,s,i)=>{let u=s.route.id?a==null?void 0:a[s.route.id]:null,c=r?s.route.errorElement||o.createElement(ne,null):null,p=t.concat(n.slice(0,i+1)),f=()=>o.createElement(ae,{match:s,routeContext:{outlet:l,matches:p}},u?c:s.route.element!==void 0?s.route.element:l);return r&&(s.route.errorElement||i===0)?o.createElement(oe,{location:r.location,component:c,error:u,children:f(),routeContext:{outlet:null,matches:p}}):f()},null)}var j;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(j||(j={}));var R;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(R||(R={}));function se(e){let t=o.useContext(L);return t||h(!1),t}function ie(e){let t=o.useContext(m);return t||h(!1),t}function ue(e){let t=ie(),r=t.matches[t.matches.length-1];return r.route.id||h(!1),r.route.id}function ce(){var e;let t=o.useContext(k),r=se(R.UseRouteError),n=ue(R.UseRouteError);return t||((e=r.errors)==null?void 0:e[n])}function xe(e){let{fallbackElement:t,router:r}=e,n=H(r.subscribe,()=>r.state,()=>r.state),a=o.useMemo(()=>({createHref:r.createHref,encodeLocation:r.encodeLocation,go:s=>r.navigate(s),push:(s,i,u)=>r.navigate(s,{state:i,preventScrollReset:u==null?void 0:u.preventScrollReset}),replace:(s,i,u)=>r.navigate(s,{replace:!0,state:i,preventScrollReset:u==null?void 0:u.preventScrollReset})}),[r]),l=r.basename||"/";return o.createElement(o.Fragment,null,o.createElement(U.Provider,{value:{router:r,navigator:a,static:!1,basename:l}},o.createElement(L.Provider,{value:n},o.createElement(he,{basename:r.basename,location:r.state.location,navigationType:r.state.historyAction,navigator:a},r.state.initialized?o.createElement(pe,null):t))),null)}function Ce(e){return ee(e.context)}function de(e){h(!1)}function he(e){let{basename:t="/",children:r=null,location:n,navigationType:a=D.Pop,navigator:l,static:s=!1}=e;E()&&h(!1);let i=t.replace(/^\/*/,"/"),u=o.useMemo(()=>({basename:i,navigator:l,static:s}),[i,l,s]);typeof n=="string"&&(n=I(n));let{pathname:c="/",search:p="",hash:f="",state:x=null,key:g="default"}=n,v=o.useMemo(()=>{let d=w(c,i);return d==null?null:{pathname:d,search:p,hash:f,state:x,key:g}},[i,c,p,f,x,g]);return v==null?null:o.createElement(P.Provider,{value:u},o.createElement(b.Provider,{children:r,value:{location:v,navigationType:a}}))}function pe(e){let{children:t,location:r}=e,n=o.useContext(U),a=n&&!t?n.router.routes:B(t);return re(a,r)}var N;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(N||(N={}));new Promise(()=>{});function B(e,t){t===void 0&&(t=[]);let r=[];return o.Children.forEach(e,(n,a)=>{if(!o.isValidElement(n))return;if(n.type===o.Fragment){r.push.apply(r,B(n.props.children,t));return}n.type!==de&&h(!1),!n.props.index||!n.props.children||h(!1);let l=[...t,a],s={id:n.props.id||l.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,hasErrorBoundary:n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle};n.props.children&&(s.children=B(n.props.children,l)),r.push(s)}),r}function fe(e){return e.map(t=>{let r=y({},t);return r.hasErrorBoundary==null&&(r.hasErrorBoundary=r.errorElement!=null),r.children&&(r.children=fe(r.children)),r})}export{Ce as O,xe as R,Ee as a,M as b,te as c,ce as d,fe as e,ge as u};
