import{c as ce,m as k,j as n,C as H,a as t,T as d,B as y,b as K,d as Y,e as $,f as X,I as ee,A as le,G as b,F as C,g as de,h as me,i as ue,S as pe,k as he,l as F,n as W,M as U,L as ge,o as z,p as Q,D as ye,q as fe,r as be}from"./@mui-0100d179.js";import{r as p,a as Ce}from"./react-ae76b4dd.js";import{c as ve}from"./react-dom-25eec056.js";import{u as j,a as P,P as Se}from"./react-redux-4aaa8762.js";import{L as v,c as xe}from"./react-router-dom-b4184ded.js";import{c as N,a as Ae,b as we}from"./@reduxjs-72a064e3.js";import{l as ke}from"./@chec-a063e44a.js";import{d as Ne,b as Ee,O as Le,a as Be,R as De}from"./react-router-fec769fa.js";import"./hoist-non-react-statics-dd442a32.js";import{u as Pe,C as Oe,a as Re,F as _e}from"./react-hook-form-b5b478f9.js";import{l as je,E as Ie,a as Me,C as Z}from"./@stripe-cb98a468.js";import{T as x,C as Te,P as Fe,S as We,a as Ue,b as Ge,B as G,c as Ve}from"./@material-ui-ae844f92.js";import"./@emotion-4f244a08.js";import"./@babel-db78ef1d.js";import"./stylis-581c9ed0.js";import"./clsx-1229b3e0.js";import"./react-transition-group-5ac1fa82.js";import"./jss-681004a6.js";import"./is-in-browser-9e40da8a.js";import"./jss-plugin-rule-value-function-0cc608d6.js";import"./jss-plugin-global-8de4c9c4.js";import"./jss-plugin-nested-81c767c4.js";import"./jss-plugin-camel-case-92f9f32c.js";import"./hyphenate-style-name-80972348.js";import"./jss-plugin-default-unit-2eda2a60.js";import"./jss-plugin-vendor-prefixer-6d2bdb82.js";import"./css-vendor-31541eb4.js";import"./jss-plugin-props-sort-0c9fca2f.js";import"./scheduler-04ce0582.js";import"./use-sync-external-store-d3d87f58.js";import"./@remix-run-e938a1c9.js";import"./immer-b106be54.js";import"./redux-cff4cb61.js";import"./redux-thunk-ef899f4c.js";import"./axios-419cf3fb.js";import"./prop-types-4d501b15.js";import"./react-is-804680ca.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerpolicy&&(c.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?c.credentials="include":i.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(i){if(i.ep)return;i.ep=!0;const c=a(i);fetch(i.href,c)}})();const ze="pk_test_5032151bec3c46defe8917688f5bb6bc7947aac9c4213",m=new ke(ze),_=N("MainSlice/fetchProducts",(e,r)=>{const{rejectWithValue:a}=r;try{return m.products.list()}catch(o){return a(o.message)}}),V=N("MainSlice/fetchCart",(e,r)=>{const{rejectWithValue:a}=r;try{return m.cart.retrieve()}catch(o){return a(o.message)}}),te=N("MainSlice/refreshCart",(e,r)=>{const{rejectWithValue:a}=r;try{return m.cart.refresh()}catch(o){return a(o.message)}}),re=N("MainSlice/addToCart",(e,r)=>{const{rejectWithValue:a}=r;try{return m.cart.add(e,1),m.cart.retrieve()}catch(o){return a(o.message)}}),ae=N("MainSlice/emptyCart",(e,r)=>{const{rejectWithValue:a}=r;try{return m.cart.empty(),m.cart.retrieve()}catch(o){return a(o.message)}}),ne=N("MainSlice/removeFromCart",(e,r)=>{const{rejectWithValue:a}=r;try{return m.cart.remove(e),m.cart.retrieve()}catch(o){return a(o.message)}}),ie=N("MainSlice/updateCartQty",(e,r)=>{const{rejectWithValue:a}=r;try{return m.cart.update(e.id,e.quantity),m.cart.retrieve()}catch(o){return a(o.message)}}),oe=Ae({name:"MainSlice",initialState:{productsData:[],cartData:{},Order:{},error:null,isLoading:!0},reducers:{setOrder:(e,r)=>{e.Order=r.payload},setError:(e,r)=>{e.error=r.payload.data.error.message}},extraReducers:e=>{e.addCase(_.fulfilled,(r,a)=>{r.productsData=a.payload.data,r.isLoading=!1}).addCase(_.pending,r=>{r.isLoading=!0}).addCase(_.rejected,(r,a)=>{r.error=a.payload,r.isLoading=!1}).addCase(V.fulfilled,(r,a)=>{r.cartData=a.payload,r.isLoading=!1}).addCase(V.pending,(r,a)=>{r.isLoading=!0}).addCase(te.fulfilled,(r,a)=>{r.cartData=a.payload,r.isLoading=!1}).addCase(re.fulfilled,(r,a)=>{r.cartData=a.payload}).addCase(ae.fulfilled,(r,a)=>{r.cartData=a.payload}).addCase(ne.fulfilled,(r,a)=>{r.cartData=a.payload}).addCase(ie.fulfilled,(r,a)=>{r.cartData=a.payload})}}),{setOrder:Qe,setError:se}=oe.actions,Ze=oe.reducer,qe=ce({palette:{primary:{main:"#ff214c"},secondary:{main:"#2f4ca8"}}}),Je=k(e=>({container:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",mt:10,[e.breakpoints.up("md")]:{mt:0,height:"100vh"}}}));function He(){const e=Je(),r=Ne();return n(H,{id:"error-page",className:e.container,children:[t(d,{variant:"h2",component:"h1",sx:{mb:2},children:"Oops!"}),t(d,{variant:"body1",sx:{mb:2},children:"Sorry, an unexpected error has occurred."}),t(d,{variant:"body1",sx:{mb:2},children:t("i",{children:r.statusText||r.message})}),t(v,{to:"/E-Commerce/",style:{textDecoration:"none"},children:t(y,{variant:"outlined",type:"button",style:{color:"#2f4ca8",borderColor:"#2f4ca8"},children:"Back to Home"})})]})}const Ke=k(()=>({root:{maxWidth:"100%"},media:{height:0,paddingTop:"56.25%"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"}}));function Ye({product:e}){const r=Ke(),a=j(),o=()=>{a(re(e.id))};return n(K,{className:r.root,children:[t(Y,{className:r.media,image:e.image.url,title:e.name,sx:{backgroundSize:"contain",backgroundRepeat:"no-repeat"}}),n($,{children:[n("div",{className:r.cardContent,children:[t(d,{variant:"h5",gutterBottom:!0,children:e.name}),t(d,{variant:"h5",gutterBottom:!0,children:e.price.formatted_with_symbol})]}),t(d,{dangerouslySetInnerHTML:{__html:e.description},variant:"body2",color:"textSecondary",component:"p"}),t(X,{disableSpacing:!0,className:r.cardActions,children:t(ee,{"aria-label":"Add to card",onClick:o,children:t(le,{})})})]})]})}const $e=k(e=>({toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)},root:{flexGrow:1}}));function Xe(){const e=P(a=>a.MainSlice),r=$e();return n("main",{className:r.content,children:[t("div",{className:r.toolbar}),t(b,{container:!0,justifyContent:"center",spacing:4,children:e.productsData.map(a=>t(b,{item:!0,xs:12,sm:6,md:4,lg:3,children:t(Ye,{product:a})},a.id))})]})}const et="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAbwAAAG8B8aLcQwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKTSURBVDiNlZLLS5RhGMV/7/vNzKfzOYOjkzo2Zma4UDPSorCIhIJskxAMFC3KbiDEEEVB/QGtXQou2nVZFNZCsxsVZHQjGotQTCvJu3NznIvfN28LSbJ7Z/mc5xwOz3OEUgohhBdwAmFgJf+GaaXUtA1gX5PvwfGW1RVry4zsq/dR7W9KbWYit6d/PgIU2IQQ7t1VnrKHXZ+N7vJqnK5VpN48w6YU1DSAAt69xJQaOes2Mh+J4BwZ5cukqQsh3Fp9fu7Fq3W+HRP2Iqu1/Yo0k8La3d8nvThUw9l2UbNhO6U911WT3Sa0lpPZ/UdOifFrl9WZYsPxYHo+R/MIrWNO99h7k1KfnU9x4+o1GUsr7oRNMZxIEQqFeBwaFBPSoOt1v5iJRLn5vF9MpqUZGp/1y0bLSLYNCaPcv4ZgMEiFt5jWt2kaUrkEAgECgQD1cZ3Wt2nWlFcQDAYpc3lpG1S2RstIiq3SOOOtKD/fdOKwJ7GQId+dz0z3XVxVlSyUFgFg/zJJfGCIwj07CUcjxKbCDHT3ZKYGhy9on7KZJ/dCrw/UbN5SHLUsoiiaDx0kW1hAJJ0BXadyWyN562uZTSRIOnS8JaXENeJdL/v22r695tytW4zv2kPunElv5yUm4hGG97YskqYFNjuycAVGOEPeo9s064vSJQPN5UKU+JCxBZACzekEn295AfLcSHsa7A4gC4D8sSTmi75/LCLLEywNGjbD/ZuY8RgMDiwnLbCiGVQqCU791waIxVAdR4/xeWxsGaXskHRIcpqbefrw/uJ6bXXd+fwCz+mw21VgrfQTMxUlY6PU+/2/jR2LJRgZ+WAJZKeorl73cdPGxhIpxE/3+AO02XCUoaH3KQH4gbz/EH+Pua8ZYPnoKszf2QAAAABJRU5ErkJggg==",q=0,tt=k(e=>({appBar:{boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)",[e.breakpoints.up("sm")]:{width:`calc(100% - ${q}px)`,marginLeft:q}},title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px"},menuButton:{marginRight:e.spacing(2),[e.breakpoints.up("sm")]:{display:"none"}},grow:{flexGrow:1},search:{position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:e.palette.common.white,"&:hover":{backgroundColor:e.palette.common.white},marginRight:e.spacing(2),marginLeft:0,width:"100%",[e.breakpoints.up("sm")]:{width:"auto"}},searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:{padding:e.spacing(1,1,1,0),paddingLeft:`calc(1em + ${e.spacing(4)}px)`,transition:e.transitions.create("width"),width:"100%",[e.breakpoints.up("md")]:{width:"20ch"}}}));function rt(){const e=tt();Ee();const{cartData:r}=P(a=>a.MainSlice);return n(C,{children:[t(de,{position:"fixed",className:e.appBar,color:"inherit",elevation:0,children:n(me,{children:[t(d,{variant:"h6",className:e.title,color:"inherit",children:n(v,{to:"/E-Commerce/",style:{textDecoration:"none",color:"inherit"},children:[t("img",{src:et,alt:"Commerce.js",height:"25px",className:e.image}),"Commerce.js"]})}),t("div",{className:e.grow}),location.pathname==="/E-Commerce/"&&t("div",{className:e.button,children:t(ee,{LinkComponent:v,to:"/E-Commerce/cart","aria-label":"Show cart items",color:"inherit",children:t(ue,{badgeContent:r.total_items,color:"error",children:t(pe,{})})})})]})}),t(Le,{})]})}const at=k(e=>({toolbar:e.mixins.toolbar,title:{marginTop:"5%"},emptyButton:{minWidth:"150px",marginBottom:"5px !important",marginRight:"20px  !important"},checkoutButton:{minWidth:"150px",marginBottom:"5px !important",backgroundColor:"#2e4ca5 !important"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"10%",width:"100%",justifyContent:"space-between",[e.breakpoints.down("sm")]:{flexDirection:"column"}}})),nt=k(e=>({media:{height:260,backgroundSize:"contain",backgroundRepeat:"no-repeat"},cardContent:{display:"flex",justifyContent:"space-between"},cartActions:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}})),it=({item:e})=>{const r=nt(),a=j(),o=()=>{a(ne(e.id))},i=c=>{let l={id:e.id,quantity:{quantity:c}};a(ie(l))};return n(K,{children:[t(Y,{image:e.image.url,alt:e.name,className:r.media,sx:{backgroundSize:"contain ",backgroundRepeat:"no-repeat"}}),n($,{className:r.cardContent,children:[t(d,{variant:"h4",children:e.name}),t(d,{variant:"h6",children:e.line_total.formatted_with_symbol})]}),n(X,{className:r.cartActions,children:[n("div",{className:r.buttons,children:[t(y,{type:"button",size:"small",onClick:()=>i(e.quantity-1),children:"-"}),t(d,{children:e.quantity}),t(y,{size:"small",type:"button",color:"secondary",onClick:()=>i(e.quantity+1),children:"+"})]}),t(y,{variant:"contained",type:"button",onClick:o,children:"Remove"})]})]})},ot=()=>{const e=at(),{cartData:r}=P(l=>l.MainSlice),a=j(),o=()=>{a(ae())},i=()=>n(d,{variant:"subtitle1",children:["You Have no items in your shopping cart,",t(v,{to:"/E-Commerce/",className:e.link,children:"start adding some"}),"!"]});if(!r.line_items)return"Loading";const c=()=>n(C,{children:[t(b,{container:!0,spacing:3,children:r.line_items.map(l=>t(b,{item:!0,xs:12,sm:6,md:4,children:t(it,{item:l})},l.id))}),n("div",{className:e.cardDetails,children:[n(d,{variant:"h4",children:["Subtotal: ",r.subtotal.formatted_with_symbol]}),n("div",{children:[t(y,{className:e.emptyButton,size:"large",type:"button",variant:"contained",onClick:o,children:"EMPTY CART"}),t(v,{to:"/E-Commerce/checkout",style:{textDecoration:"none",color:"inherit"},children:t(y,{className:e.checkoutButton,size:"large",type:"button",variant:"contained",children:"CHECKOUT"})})]})]})]});return n(H,{children:[t("div",{className:e.toolbar}),t(d,{className:e.title,variant:"h3",gutterBottom:!0,children:"Your ShoppingCart"}),r.line_items.length?t(c,{}):t(i,{})]})},st=k(e=>({appBar:{position:"relative"},toolbar:e.mixins.toolbar,layout:{marginTop:"5%",width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2),[e.breakpoints.up(600)]:{width:600,marginLeft:"auto",marginRight:"auto"}},paper:{marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2),[e.breakpoints.down("xs")]:{width:"100%",marginTop:60},[e.breakpoints.up(600+e.spacing(3)*2)]:{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}},stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},divider:{margin:"20px 0"},spinner:{display:"flex",justifyContent:"center",alignItems:"center"}})),B=({name:e,label:r})=>{const{control:a}=Pe();return t(b,{item:!0,xs:12,sm:6,children:t(Oe,{control:a,name:e,render:({field:o})=>t(he,{...o,fullWidth:!0,label:r,required:!0})})})},ct=({checkoutToken:e,next:r})=>{const[a,o]=p.useState([]),[i,c]=p.useState(""),[l,A]=p.useState([]),[h,f]=p.useState(""),[E,w]=p.useState([]),[L,D]=p.useState(""),S=Re({defaultValues:{firstName:"",lastName:"",address1:"",email:"",city:"",zip:""}}),O=async s=>{const{countries:g}=await m.services.localeListShippingCountries(s);o(g),c(Object.keys(g)[0])},I=async s=>{const{subdivisions:g}=await m.services.localeListSubdivisions(s);A(g),f(Object.keys(g)[0])},M=async(s,g,R=null)=>{const u=await m.checkout.getShippingOptions(s,{country:g,region:R});w(u),D(u[0].id)};return e&&(p.useEffect(()=>{O(e.id)},[]),p.useEffect(()=>{i&&I(i)},[i]),p.useEffect(()=>{h&&M(e.id,i,h)},[h])),n(C,{children:[t(d,{variant:"h6",gutterBottom:!0,children:"Shipping Address"}),t(_e,{...S,children:n("form",{onSubmit:S.handleSubmit(s=>r({...s,shippingCountry:i,shippingSubdivision:h,shippingOption:L})),children:[n(b,{container:!0,spacing:3,children:[t(B,{name:"firstName",label:"First name"}),t(B,{name:"lastName",label:"Last name"}),t(B,{name:"address1",label:"Address"}),t(B,{name:"email",label:"Email"}),t(B,{name:"city",label:"City"}),t(B,{name:"zip",label:"ZIP / Postal code"}),n(b,{item:!0,xs:12,sm:6,children:[t(F,{children:" Shipping Coutnry"}),t(W,{value:i,fullWidth:!0,onChange:s=>c(s.target.value),children:Object.entries(a).map(([s,g])=>({id:s,label:g})).map(s=>t(U,{value:s.id,children:s.label},s.id))})]}),n(b,{item:!0,xs:12,sm:6,children:[t(F,{children:"Shipping Subdivision"}),t(W,{value:h,fullWidth:!0,onChange:s=>f(s.target.value),children:Object.entries(l).map(([s,g])=>({id:s,label:g})).map(s=>t(U,{value:s.id,children:s.label},s.id))})]}),n(b,{item:!0,xs:12,sm:6,children:[t(F,{children:"Shipping Options"}),t(W,{value:L,fullWidth:!0,onChange:s=>D(s.target.value),children:E.map(s=>({id:s.id,label:`${s.description} - (${s.price.formatted_with_symbol})`})).map(s=>t(U,{value:s.id,children:s.label},s.id))})]})]}),t("br",{}),n("div",{style:{display:"flex",justifyContent:"space-between"},children:[t(v,{to:"/E-Commerce/cart",style:{textDecoration:"none"},children:t(y,{variant:"outlined",color:"secondary",children:"Back to Cart"})}),t(y,{type:"submit",variant:"contained",color:"secondary",children:"Next"})]})]})})]})},lt=({checkoutToken:e})=>n(C,{children:[t(d,{variant:"h6",gutterBottom:!0,children:"Order summery"}),n(ge,{disablePadding:!0,children:[e.line_items.map(r=>n(z,{style:{padding:"10px 0"},children:[t(Q,{primary:r.name,secondary:`Quantity ${r.quantity}`}),t(d,{variant:"body2",children:r.line_total.formatted_with_symbol})]},r.name)),n(z,{style:{padding:"10px 0"},children:[t(Q,{primary:"total"}),t(d,{variant:"subtitle1",style:{fontWeight:700},children:e.subtotal.formatted_with_symbol})]})]})]}),dt=je("pk_test_51MdcQyBgzWhAf0TpSv8sDaBEiynjdbbVLR306VpfmD2q6ubthhPnNBDpBmQGHQVgFRWitbyKfV4BP1gqjee07c2l00nwaZvCHM"),mt=({shippingData:e,checkoutToken:r,nextStep:a,backStep:o,handleCaptureCheckout:i,timeout:c})=>{const l=async(A,h,f)=>{if(A.preventDefault(),!f||!h)return;const{error:E,paymentMethod:w}=await f.createPaymentMethod({type:"card",card:h.getElement(Z)});if(E)Dispatch(se(E));else{const L={line_items:r.line_items,customer:{firstname:e.firstName,lastname:e.lastName,email:e.email},shipping:{name:"International",street:e.address1,town_city:e.city,county_state:e.shippingSubdivision,postal_zip_code:e.zip,country:e.shippingCountry},fulfillment:{shipping_method:e.shippingOption},payment:{gateway:"stripe",stripe:{payment_method_id:w.id}}};i(r.id,L),c(),a()}};return n(C,{children:[t(lt,{checkoutToken:r}),t(ye,{}),t(d,{variant:"h6",gutterBottom:!0,style:{margin:"20px 0"},children:"Payment method"}),t(Ie,{stripe:dt,children:t(Me,{children:({elements:A,stripe:h})=>n("form",{onSubmit:f=>l(f,A,h),children:[t(Z,{}),t("br",{})," ",t("br",{}),n("div",{style:{display:"flex",justifyContent:"space-between"},children:[t(y,{variant:"outlined",color:"secondary",onClick:o,children:"Back"}),n(y,{type:"submit",variant:"contained",disabled:!h,color:"secondary",children:["Pay ",r.subtotal.formatted_with_symbol]})]})]})})})]})},J=["Shipping address","Payment details"],ut=({handleCaptureCheckout:e})=>{const r=st(),[a,o]=p.useState(0),[i,c]=p.useState(null),[l,A]=p.useState({}),[h,f]=p.useState(!1),E=Be(),{cartData:w,isLoading:L,error:D,Order:S}=P(u=>u.MainSlice);if(L)return t(x,{style:{flexGrow:1,textAlign:"center"},children:"Loading.."});p.useEffect(()=>{const u=async()=>{try{const T=await m.checkout.generateToken(w.id,{type:"cart"});c(T)}catch(T){console.log(T),E("/E-Commerce/")}};w.id&&u()},[w]);const O=()=>o(u=>u+1),I=()=>o(u=>u-1),M=u=>{A(u),O()},s=()=>setTimeout(()=>{f(!0)},1e4),g=()=>a==0?t(ct,{checkoutToken:i,next:M}):t(mt,{shippingData:l,checkoutToken:i,nextStep:O,backStep:I,handleCaptureCheckout:e,timeout:s});let R=()=>S.customer?n(C,{children:[n("div",{style:{textDecoration:"none"},children:[n(x,{variant:"h5",children:["Thank you for your purchase, ",S.customer.firstname,S.customer.lastname]}),n(x,{variant:"subtitle2",children:["Order ref: ",S.customer_reference]})]}),t("br",{}),t(v,{to:"/E-Commerce/",color:"secondary",style:{textDecoration:"none"},children:t(G,{variant:"outlined",type:"button",children:"Back to Home"})})]}):h?n(C,{children:[n("div",{children:[t(x,{variant:"h5",children:"Thank you for your purchase"}),n(x,{variant:"subtitle2",children:["Order ref: ",S.customer_reference]})]}),t("br",{}),t(v,{to:"/E-Commerce/",style:{textDecoration:"none"},color:"secondary",children:t(G,{variant:"outlined",type:"button",children:"Back to Home"})})]}):t("div",{className:r.spinner,children:t(Ve,{})});return D&&(R=()=>n(C,{children:[n(x,{variant:"h5",children:["Error: ",D]}),t("br",{}),t(v,{to:"/E-Commerce/",style:{textDecoration:"none"},children:t(G,{variant:"outlined",type:"button",style:{textDecoration:"none"},children:"Back to home"})})]})),n(C,{children:[t(Te,{}),t("div",{className:r.toolbar}),t("main",{className:r.layout,children:n(Fe,{className:r.paper,children:[t(x,{variant:"h4",align:"center",children:"Checkout"}),t(We,{activeStep:a,className:r.stepper,children:J.map(u=>t(Ue,{children:t(Ge,{children:u})},u))}),a===J.length?t(R,{}):i&&t(g,{})]})})]})};function pt(){const e=j(),{isLoading:r}=P(i=>i.MainSlice),a=async(i,c)=>{try{const l=await m.checkout.capture(i,{...c});e(Qe(l)),e(te())}catch(l){e(se(l))}};if(p.useEffect(()=>{e(_()),e(V())},[]),r)return t(x,{style:{flexGrow:1,textAlign:"center"},children:"Loading.."});const o=xe([{element:t(rt,{}),errorElement:t(He,{}),children:[{path:"/E-Commerce",element:t(Xe,{})},{path:"/E-Commerce/cart",element:t(ot,{})},{path:"/E-Commerce/checkout",element:t(ut,{handleCaptureCheckout:a})}]}]);return t("div",{children:t(fe,{injectFirst:!0,children:t(be,{theme:qe,children:t(De,{router:o})})})})}const ht=we({reducer:{MainSlice:Ze},middleware:e=>e({immutableCheck:!1,serializableCheck:!1})}),gt=ve(document.getElementById("root"));gt.render(t(Ce.StrictMode,{children:t(Se,{store:ht,children:t(pt,{})})}));
