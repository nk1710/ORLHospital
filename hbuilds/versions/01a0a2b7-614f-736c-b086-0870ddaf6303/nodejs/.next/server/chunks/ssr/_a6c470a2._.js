module.exports=[533095,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return k},getImageProps:function(){return j}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(833354),g=a.r(494915),h=a.r(767161),i=f._(a.r(402305));function j(a){let{props:b}=(0,g.getImgProps)(a,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[a,c]of Object.entries(b))void 0===c&&delete b[a];return{props:b}}let k=h.Image},571987,(a,b,c)=>{b.exports=a.r(533095)},206287,a=>{"use strict";var b=a.i(187924),c=a.i(234157),c=c,d=a.i(572131);function e({open:a,onClose:e,message:f="Data saved successfully!"}){return((0,d.useEffect)(()=>{if(a){let a=setTimeout(e,3e3);return()=>clearTimeout(a)}},[a,e]),a)?(0,b.jsx)("div",{className:"fixed inset-0 m-3 z-50 flex items-center justify-center bg-black/60 pointer-events-none",children:(0,b.jsxs)("div",{className:"bg-white mt-3 rounded-xl shadow-2xl p-8 text-center max-w-sm pointer-events-auto animate-in fade-in zoom-in duration-300",children:[(0,b.jsx)("div",{className:"w-16 h-16 m-3 bg-green-100 rounded-full flex items-center justify-center mx-auto",children:(0,b.jsx)(c.default,{className:"w-8 h-8 text-green-600",strokeWidth:3})}),(0,b.jsx)("h3",{className:"font-bold text-xl text-gray-900 mb-2",children:"Success!"}),(0,b.jsx)("p",{className:"text-sm m-3 text-gray-600",children:f}),(0,b.jsx)("p",{className:"text-xs text-gray-500 m-3",children:"We'll contact you shortly."})]})}):null}a.s(["default",()=>e],206287)},170106,a=>{"use strict";var b=a.i(572131);let c=(...a)=>a.filter((a,b,c)=>!!a&&""!==a.trim()&&c.indexOf(a)===b).join(" ").trim(),d=a=>{let b=a.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,b,c)=>c?c.toUpperCase():b.toLowerCase());return b.charAt(0).toUpperCase()+b.slice(1)};var e={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let f=(0,b.forwardRef)(({color:a="currentColor",size:d=24,strokeWidth:f=2,absoluteStrokeWidth:g,className:h="",children:i,iconNode:j,...k},l)=>(0,b.createElement)("svg",{ref:l,...e,width:d,height:d,stroke:a,strokeWidth:g?24*Number(f)/Number(d):f,className:c("lucide",h),...!i&&!(a=>{for(let b in a)if(b.startsWith("aria-")||"role"===b||"title"===b)return!0;return!1})(k)&&{"aria-hidden":"true"},...k},[...j.map(([a,c])=>(0,b.createElement)(a,c)),...Array.isArray(i)?i:[i]])),g=(a,e)=>{let g=(0,b.forwardRef)(({className:g,...h},i)=>(0,b.createElement)(f,{ref:i,iconNode:e,className:c(`lucide-${d(a).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${a}`,g),...h}));return g.displayName=d(a),g};a.s(["default",()=>g],170106)},504699,a=>{"use strict";let b=(0,a.i(170106).default)("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);a.s(["default",()=>b])},234157,a=>{"use strict";let b=(0,a.i(170106).default)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);a.s(["default",()=>b])},546842,a=>{"use strict";let b=(0,a.i(170106).default)("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);a.s(["User",()=>b],546842)},992258,a=>{"use strict";let b=(0,a.i(170106).default)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);a.s(["Mail",()=>b],992258)},963519,a=>{"use strict";let b=(0,a.i(170106).default)("phone",[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]);a.s(["Phone",()=>b],963519)},119680,a=>{"use strict";var b=a.i(187924);function c({open:a}){return a?(0,b.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60",children:(0,b.jsxs)("div",{className:"bg-white rounded-xl shadow-lg p-8 text-center max-w-sm",children:[(0,b.jsx)("div",{className:"w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"}),(0,b.jsx)("p",{className:"font-semibold text-lg",children:"Submitting Your Appointment Request..."}),(0,b.jsx)("p",{className:"text-sm text-gray-600 mt-2",children:"Please wait, do not close or refresh this page."})]})}):null}a.s(["default",()=>c])},124987,a=>{"use strict";let b=(0,a.i(170106).default)("map-pin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);a.s(["MapPin",()=>b],124987)},405784,a=>{"use strict";var b=a.i(504699);a.s(["ChevronDown",()=>b.default])},657809,633508,a=>{"use strict";var b=a.i(187924),c=a.i(572131);let d=(0,a.i(170106).default)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);a.s(["X",()=>d],633508);var e=a.i(546842),f=a.i(963519),g=a.i(992258),h=a.i(124987),i=a.i(405784),j=a.i(119680),k=a.i(206287);let l="w-full h-11 px-4 rounded-md bg-white/10 text-white border border-white/20 placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-white/40 transition-all duration-200",m="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none",n={name:"",number:"",email:"",city:"",department:""};function o({open:a,onClose:o}){let[p,q]=(0,c.useState)(n),[r,s]=(0,c.useState)(!1),[t,u]=(0,c.useState)(!1),v=(0,c.useRef)(null);(0,c.useEffect)(()=>(a?document.body.style.overflow="hidden":(document.body.style.overflow="",q(n)),()=>{document.body.style.overflow=""}),[a]),(0,c.useEffect)(()=>{let a=a=>{"Escape"===a.key&&o()};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[o]);let w=a=>q(b=>({...b,[a.target.name]:a.target.value})),x=async a=>{a.preventDefault(),s(!0);try{let a=await fetch("/api/form-submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...p,type:"appointment"})}),b=await a.json();b.success?(u(!0),q(n)):alert(b.message||"Failed to submit form")}catch(a){console.error("Error:",a),alert("An error occurred. Please try again.")}finally{s(!1)}};return a?(0,b.jsxs)("div",{ref:v,onClick:a=>{a.target===v.current&&o()},className:"appt-overlay",role:"dialog","aria-modal":"true","aria-label":"Book Appointment",children:[(0,b.jsx)(j.default,{open:r}),(0,b.jsx)(k.default,{open:t,onClose:()=>{u(!1),o()},message:"Your appointment request has been submitted successfully!"}),(0,b.jsxs)("div",{className:"appt-modal",children:[(0,b.jsxs)("div",{className:"appt-modal-header",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"appt-modal-eyebrow",children:"ENT Specialist · 25+ Years"}),(0,b.jsx)("h2",{className:"appt-modal-title",children:"Book an Appointment"})]}),(0,b.jsx)("button",{onClick:o,className:"appt-close-btn","aria-label":"Close modal",children:(0,b.jsx)(d,{size:18})})]}),(0,b.jsx)("div",{className:"appt-divider"}),(0,b.jsxs)("form",{onSubmit:x,noValidate:!0,className:"appt-form",children:[(0,b.jsxs)("div",{className:"relative",children:[(0,b.jsx)("input",{type:"text",name:"name",value:p.name,onChange:w,placeholder:"Full Name *",className:l+" pr-10",required:!0}),(0,b.jsx)(e.User,{strokeWidth:1,className:m})]}),(0,b.jsxs)("div",{className:"relative",children:[(0,b.jsx)("input",{type:"tel",name:"number",value:p.number,onChange:w,placeholder:"Phone Number *",pattern:"[0-9]{10}",maxLength:10,className:l+" pr-10",required:!0}),(0,b.jsx)(f.Phone,{strokeWidth:1,className:m})]}),(0,b.jsxs)("div",{className:"relative",children:[(0,b.jsx)("input",{type:"email",name:"email",value:p.email,onChange:w,placeholder:"Email Address",className:l+" pr-10"}),(0,b.jsx)(g.Mail,{strokeWidth:1,className:m})]}),(0,b.jsxs)("div",{className:"relative",children:[(0,b.jsx)("input",{type:"text",name:"city",value:p.city,onChange:w,placeholder:"Your City *",className:l+" pr-10",required:!0}),(0,b.jsx)(h.MapPin,{strokeWidth:1,className:m})]}),(0,b.jsxs)("div",{className:"relative md:col-span-2",children:[(0,b.jsxs)("select",{name:"department",value:p.department,onChange:w,className:l+" pr-10 cursor-pointer appearance-none",children:[(0,b.jsx)("option",{value:"",children:"Select Department"}),(0,b.jsx)("option",{value:"Ear (Otology)",children:"Ear (Otology)"}),(0,b.jsx)("option",{value:"Cochlear and Hearing implants",children:"Cochlear Implants"}),(0,b.jsx)("option",{value:"Nose and Sinus (Rhinology)",children:"Nose and Sinus"}),(0,b.jsx)("option",{value:"Voice and Throat (Laryngology)",children:"Voice and Throat"}),(0,b.jsx)("option",{value:"Dizziness and Vertigo (Neuro-otology)",children:"Dizziness / Vertigo"}),(0,b.jsx)("option",{value:"Paediatric ENT Diagnostics",children:"Paediatric ENT"}),(0,b.jsx)("option",{value:"Head and Neck",children:"Head and Neck"}),(0,b.jsx)("option",{value:"Skull Base Surgery",children:"Skull Base Surgery"})]}),(0,b.jsx)(i.ChevronDown,{strokeWidth:1,className:m})]}),(0,b.jsx)("button",{type:"submit",disabled:r,className:"appt-submit-btn md:col-span-2",children:r?(0,b.jsx)("span",{className:"appt-spinner"}):"Book Now"})]}),(0,b.jsx)("p",{className:"appt-note",children:"We'll call you within 24 hours to confirm your slot."})]}),(0,b.jsx)("style",{children:`
        .appt-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(15, 23, 42, 0.55);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          animation: appt-fade-in 0.2s ease;
        }

        @keyframes appt-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .appt-modal {
          background: #1e2d45;
          border-radius: 20px;
          width: 100%;
          max-width: 560px;
          max-height: 90vh;
          overflow-y: auto;
          padding: 2rem;
          box-shadow:
            0 4px 6px -1px rgba(0,0,0,0.07),
            0 20px 60px -10px rgba(15, 23, 42, 0.25);
          animation: appt-slide-up 0.28s cubic-bezier(0.34, 1.3, 0.64, 1);
        }

        @keyframes appt-slide-up {
          from { transform: translateY(28px) scale(0.97); opacity: 0; }
          to   { transform: translateY(0)    scale(1);    opacity: 1; }
        }

        .appt-modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }

        .appt-modal-eyebrow {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #0ea5e9;
          margin-bottom: 4px;
        }

        .appt-modal-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #f1f5f9;
          line-height: 1.2;
        }

        .appt-close-btn {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid #e2e8f0;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          cursor: pointer;
          transition: background 0.15s, color 0.15s, border-color 0.15s;
        }
        .appt-close-btn:hover {
          background: #fee2e2;
          border-color: #fca5a5;
          color: #dc2626;
        }

        .appt-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, #e2e8f0, transparent);
          margin: 1.25rem 0;
        }

        /* ── Form grid ── */
        .appt-form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.875rem;
        }

        @media (max-width: 480px) {
          .appt-form {
            grid-template-columns: 1fr;
          }
          .appt-form .md\\:col-span-2 {
            grid-column: span 1;
          }
          .appt-modal {
            padding: 1.5rem 1.25rem;
          }
        }

        /* ── Submit button ── */
        .appt-submit-btn {
          grid-column: span 2;
          width: 100%;
          padding: 0.875rem 1.5rem;
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg, #0369a1 0%, #0ea5e9 100%);
          color: white;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 14px rgba(14, 165, 233, 0.35);
        }
        .appt-submit-btn:hover:not(:disabled) {
          opacity: 0.93;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(14, 165, 233, 0.45);
        }
        .appt-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* ── Spinner ── */
        .appt-spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255,255,255,0.35);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          display: inline-block;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* ── Footer note ── */
        .appt-note {
          margin-top: 1rem;
          text-align: center;
          font-size: 0.75rem;
          color: #94a3b8;
        }
      `})]}):null}a.s(["default",()=>o],657809)}];

//# sourceMappingURL=_a6c470a2._.js.map