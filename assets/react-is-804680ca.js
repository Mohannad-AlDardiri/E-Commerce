var v={},S={get exports(){return v},set exports(e){v=e}},t={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=60103,d=60106,o=60107,c=60108,s=60114,u=60109,i=60110,f=60112,p=60113,$=60120,l=60115,y=60116,b=60121,g=60122,C=60117,_=60129,w=60131;if(typeof Symbol=="function"&&Symbol.for){var r=Symbol.for;a=r("react.element"),d=r("react.portal"),o=r("react.fragment"),c=r("react.strict_mode"),s=r("react.profiler"),u=r("react.provider"),i=r("react.context"),f=r("react.forward_ref"),p=r("react.suspense"),$=r("react.suspense_list"),l=r("react.memo"),y=r("react.lazy"),b=r("react.block"),g=r("react.server.block"),C=r("react.fundamental"),_=r("react.debug_trace_mode"),w=r("react.legacy_hidden")}function n(e){if(typeof e=="object"&&e!==null){var m=e.$$typeof;switch(m){case a:switch(e=e.type,e){case o:case s:case c:case p:case $:return e;default:switch(e=e&&e.$$typeof,e){case i:case f:case y:case l:case u:return e;default:return m}}case d:return m}}}var M=u,P=a,h=f,E=o,F=y,z=l,I=d,j=s,k=c,A=p;t.ContextConsumer=i;t.ContextProvider=M;t.Element=P;t.ForwardRef=h;t.Fragment=E;t.Lazy=F;t.Memo=z;t.Portal=I;t.Profiler=j;t.StrictMode=k;t.Suspense=A;t.isAsyncMode=function(){return!1};t.isConcurrentMode=function(){return!1};t.isContextConsumer=function(e){return n(e)===i};t.isContextProvider=function(e){return n(e)===u};t.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===a};t.isForwardRef=function(e){return n(e)===f};t.isFragment=function(e){return n(e)===o};t.isLazy=function(e){return n(e)===y};t.isMemo=function(e){return n(e)===l};t.isPortal=function(e){return n(e)===d};t.isProfiler=function(e){return n(e)===s};t.isStrictMode=function(e){return n(e)===c};t.isSuspense=function(e){return n(e)===p};t.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===o||e===s||e===_||e===c||e===p||e===$||e===w||typeof e=="object"&&e!==null&&(e.$$typeof===y||e.$$typeof===l||e.$$typeof===u||e.$$typeof===i||e.$$typeof===f||e.$$typeof===C||e.$$typeof===b||e[0]===g)};t.typeOf=n;(function(e){e.exports=t})(S);
