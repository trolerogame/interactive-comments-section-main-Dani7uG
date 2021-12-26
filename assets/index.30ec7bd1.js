var M=Object.defineProperty,O=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var U=(t,n,r)=>n in t?M(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,w=(t,n)=>{for(var r in n||(n={}))$.call(n,r)&&U(t,r,n[r]);if(N)for(var r of N(n))W.call(n,r)&&U(t,r,n[r]);return t},S=(t,n)=>O(t,F(n));import{W as Y,s as p,j,r as H,a as m,R as V}from"./vendor.33242658.js";const q=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}};q();const J=Y`
    html {
        max-width: 100ch;
        padding: 1.5em 1em;
        margin: auto;
        line-height: 1.75;
        background:hsl(228, 33%, 97%);
        font-family: 'Lato', sans-serif;
        font-family: 'Rubik', sans-serif;
        font-family: 'Source Sans Pro', sans-serif;
        overflow: hidden;
        @media (max-width: 762px){
            overflow-y: scroll;
        }
    }
`,K=p.div`
    overflow: auto;
    height: 900px;
    @media (max-width: 762px){
        overflow: hidden;
        height: auto;
    }
`,Q=p.div`
    position: relative;
    margin-bottom:15px;
    padding:20px 40px 20px 20px;
    background: #fff;
    border-radius:5px;
    .containComment{
        display:flex;
    }
    .comment{
        margin:0 30px;
        width: 100%;
        display:flex;
        flex-direction: column;
        align-items:start;
    }
    .person{
        display:flex;
        align-items: center;
        p,img,b{
            margin:0 10px;
        }
    }
    .person img{
        width: 50px;
        height: 50px;
        object-fit: cover;
    }
    @media (max-width: 762px){
        .containComment{
            flex-direction: column-reverse;
        }
        padding:10px;
        .comment{
            margin:0;
        }
        .person img{
            width:40px;
            height: 40px;
        }
    }
`,X=p.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:hsl(228, 33%, 97%);
    height: 120px;
    width: 28px;
    border-radius: 30px;
    padding:0 5px;
    span{
        font-size:18px;
        color:hsl(238, 40%, 52%);
        font-weight: bold;
    }
    span,img{
        padding:5px;
    }
    img{
        transition:filter .1s linear;
        cursor:pointer;
    }
    img:hover{
        filter:brightness(50%)
    }
    @media (max-width: 762px){
        flex-direction: row;
        height:38px;
        width: 90px;
        border-radius:9px;
        span,img{
            padding:5px 10px;
        }
    }
`,Z=p.div`
    display:flex;
    align-items: center;
    position: absolute;
    right: 20px;
    top: 20px;
    img{
        width: 15px;
        height: 15px;
        cursor: pointer;
    }

    button{
        border:none;
        background:none;
        font-size:18px;
        font-weight:bold;
        color:${t=>t.color};
        margin-left:2px;
        cursor: pointer;
        transition: all .1s linear;
    }
    button:hover{
        color:hsl(239, 57%, 85%);
    }
    .delete{
        color:hsl(358, 79%, 66%);
        margin-right:10px;
    }
    .delete:hover{
        color:hsl(357, 100%, 86%);
    }
    @media (max-width: 762px){
        bottom:20px;
        top:0;
        align-items: end;
    }
`,_=p.div`
    border-left: 2px solid hsl(239, 57%, 85%);
    padding-left: 40px;
    margin-left: 30px;
    @media (max-width: 762px){
        padding-left:15px;
        margin-left: 0px;
    }
`,y=p.button`
    font-size:20px;
    height:50px;
    width: 120px;
    padding:0 20px;
    border:none;
    outline:none;
    transition: background .1s linear;
    background:${t=>t.color||"hsl(238, 40%, 52%)"};
    &:hover{
        background:${t=>!t.color&&"hsl(239, 57%, 85%)"}
    }
    color:#fff;
    border-radius:5px;
    cursor: pointer;
`,ee=p.form`
    display:flex;
    background:#fff;
    padding:15px;
    border-radius:10px;
    textarea{
        width:100%;
        height:100px;
        border-radius:10px;
        outline:none;
        border:1px solid hsl(239, 57%, 85%);
        padding:10px 20px;
        resize: none;
        margin:0 20px;
        
    }
    img{
        width:40px;
        height:40px;
        object-fit: cover; 
    }
    @media (max-width: 762px){
        flex-wrap: wrap;
        align-items:center;
        justify-content: space-between;
        padding:20px;
        textarea{
            order: -1;
            margin:0;
            margin-bottom:20px;
        }
    }
`,te=p.div`
    display:flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top:20px;
    textarea{
        width: 300px;
        height:100px;
        border-radius:10px;
        outline:none;
        border:1px solid hsl(239, 57%, 85%);
        padding:10px 20px;
        resize: none;
    }
    button{
        margin-top:10px;
    }
`,ne=p.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100vh;
    background-color:rgba(0,0,0,.6);
    display:grid;
    place-content: center;
`,ie=p.div`
    max-width:350px;
    margin:0 30px;
    display:block;
    padding:30px;
    background:#fff;
    border-radius:10px;
    h3{
        font-size:30px;
        margin:5px 0;
    }
    .buttons{
        display:flex;
        justify-content:center;
        width:100%;
    }
    button{
        font-size:17px;
        font-weight: bold;
        width: 180px;
        padding:0 20px;
        text-align: center;
        border-radius:10px;
    }
    button:first-child{
        margin-right: 15px;
    }
    @media (max-width: 450px){
        button{
            width:100px;
        }
    }
`;var oe="/interactive-comments-section-main-Dani7uG/assets/icon-plus.e731c8fe.svg",re="/interactive-comments-section-main-Dani7uG/assets/icon-minus.cb46e373.svg",se="/interactive-comments-section-main-Dani7uG/assets/icon-reply.b32cf4fa.svg",ae="/interactive-comments-section-main-Dani7uG/assets/icon-edit.be86deeb.svg",le="/interactive-comments-section-main-Dani7uG/assets/icon-delete.a955972c.svg";const e=j.exports.jsx,a=j.exports.jsxs,R=j.exports.Fragment,ce=({setDelete:t,deleteCommentReplice:n})=>e(R,{children:H.exports.createPortal(e(ne,{children:a(ie,{children:[e("h3",{children:"Delete comment"}),e("p",{children:"Are you sure you want to delete this comment? This will remove the comment and can't be undone."}),a("div",{className:"buttons",children:[e(y,{color:"hsl(211, 10%, 45%)",onClick:()=>t(!1),children:"NO, CANCEL"}),e(y,{color:"hsl(358, 79%, 66%)",onClick:()=>{t(!1),n()},children:"YES, DELETE"})]})]})}),document.getElementById("portal"))}),de=({user:t,username:n,stateReply:r,setStateReply:c,stateUpdate:i,setStateUpdate:o,deleteCommentReplice:s})=>{const[d,l]=m.exports.useState(!1);return e(Z,{color:"hsl(238, 40%, 52%)",children:t.username!==n?a("div",{children:[e("img",{src:se}),e("button",{onClick:()=>c(!r),children:"Reply"})]}):a(R,{children:[a("div",{children:[e("img",{src:le}),e("button",{className:"delete",onClick:()=>l(!0),children:"Delete"})]}),a("div",{children:[e("img",{src:ae}),e("button",{onClick:()=>o(!i),children:"Update"})]}),d&&e(ce,{setDelete:l,deleteCommentReplice:s})]})})},T=({input:t,img:n,newComment:r,buttonText:c,userReply:i})=>a(ee,{onSubmit:r,children:[e("img",{src:n,alt:""}),e("textarea",{autoFocus:!0,ref:t,defaultValue:i?`@${i}`:""}),e(y,{children:c||"SEND"})]}),B=({userProps:t,user:n,replice:r,i:c,deleteComment:i})=>{const o=m.exports.useRef(null),s=m.exports.useRef(null),[d,l]=m.exports.useState(w({},t)),[u,g]=m.exports.useState(!1),[f,b]=m.exports.useState(!1),[v,D]=m.exports.useState(!1),{score:C,user:x,createdAt:P,content:A}=d,z=()=>i(c),E=h=>l(S(w({},d),{score:C+h})),I=h=>{h&&(l(S(w({},d),{content:h})),b(!1))},G=h=>{const L=s.current.value;L&&(r(h,L,x.username),g(!1))};return a(Q,{children:[a("div",{className:"containComment",children:[a(X,{children:[e("img",{src:oe,alt:"",onClick:()=>{!v&&E(1),D(!0)}}),e("span",{children:C}),e("img",{src:re,alt:"",onClick:()=>{v&&C>0&&E(-1),D(!1)}})]}),a("div",{className:"comment",children:[a("div",{className:"person",children:[e("img",{src:x.image.png}),e("b",{children:x.username}),e("p",{children:P})]}),f?a(te,{children:[e("textarea",{ref:o,defaultValue:A}),e(y,{onClick:()=>I(o.current.value),children:"UPDATE"})]}):e("p",{children:A}),e(de,{user:x,username:n.username,stateReply:u,setStateReply:g,updateContent:I,stateUpdate:f,setStateUpdate:b,deleteCommentReplice:z,i:c})]})]}),u&&e(T,{input:s,img:n.image.png,newComment:G,userReply:x.username,buttonText:"REPLY"})]})},pe=({userProps:t,user:n,deleteComment:r,i:c})=>{const[i,o]=m.exports.useState(t.replies),s=l=>o(i.filter((u,g)=>g!==l)),d=(l,u,g)=>{l.preventDefault();const{image:f,username:b}=n,v={id:i.length?i[i.length-1].id+1:1,content:u,createdAt:"2 days ago",score:0,replyingTo:g,user:{image:f,username:b}};o([...i,v])};return a("div",{children:[e(B,{deleteComment:r,userProps:t,user:n,replice:d,i:c}),e(_,{children:i.map((l,u)=>e(B,{userProps:l,user:n,deleteComment:s,replice:d,i:u},l.id+4))})]})},me={image:{png:"./public/avatars/image-juliusomo.png",webp:"./public/avatars/image-juliusomo.webp"},username:"juliusomo"},ue=[{id:1,content:"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",createdAt:"1 month ago",score:12,user:{image:{png:"./public/avatars/image-amyrobson.png",webp:"./public/avatars/image-amyrobson.webp"},username:"amyrobson"},replies:[]},{id:2,content:"Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",createdAt:"2 weeks ago",score:5,user:{image:{png:"./public/avatars/image-maxblagun.png",webp:"./public/avatars/image-maxblagun.webp"},username:"maxblagun"},replies:[{id:3,content:"If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",createdAt:"1 week ago",score:4,replyingTo:"maxblagun",user:{image:{png:"./public/avatars/image-ramsesmiron.png",webp:"./public/avatars/image-ramsesmiron.webp"},username:"ramsesmiron"}},{id:4,content:"I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",createdAt:"2 days ago",score:2,replyingTo:"ramsesmiron",user:{image:{png:"./public/avatars/image-juliusomo.png",webp:"./public/avatars/image-juliusomo.webp"},username:"juliusomo"}}]}];var k={currentUser:me,comments:ue};function ge(){const[t,n]=m.exports.useState([...k.comments]),r=m.exports.useRef(null),c=o=>{o.preventDefault();let s=r.current.value;if(s){const{image:d,username:l}=k.currentUser,u={id:t[t.length-1].id+1,content:s,createdAt:"2 days ago",score:0,user:{image:d,username:l},replies:[]};n([...t,u]),r.current.value=" "}},i=o=>n(t.filter((s,d)=>d!==o));return a(R,{children:[e(J,{}),e("div",{children:e(K,{children:t.map((o,s)=>e(pe,{userProps:o,i:s,user:k.currentUser,deleteComment:i},o.id))})}),e(T,{input:r,img:k.currentUser.image.png,newComment:c})]})}V.render(e(ge,{}),document.getElementById("root"));
