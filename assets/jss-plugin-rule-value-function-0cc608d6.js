import{a as v}from"./jss-681004a6.js";var s=Date.now(),u="fnValues"+s,a="fnStyle"+ ++s,R=function(){return{onCreateRule:function(n,e,f){if(typeof e!="function")return null;var r=v(n,{},f);return r[a]=e,r},onProcessStyle:function(n,e){if(u in e||a in e)return n;var f={};for(var r in n){var t=n[r];typeof t=="function"&&(delete n[r],f[r]=t)}return e[u]=f,n},onUpdate:function(n,e,f,r){var t=e,c=t[a];c&&(t.style=c(n)||{});var o=t[u];if(o)for(var l in o)t.prop(l,o[l](n),r)}}};const y=R;export{y as f};
