(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,617539,e=>{"use strict";var t=e.i(447950),a=e.i(981920);function n(){return(0,t.jsxs)("div",{className:"fixed left-1 bottom-[100px] md:bottom-[140px] flex flex-col gap-4 z-[200]",children:[(0,t.jsx)("a",{href:"https://wa.me/919311449825",target:"_blank",rel:"noopener noreferrer",className:"hover:scale-110 transition-transform",children:(0,t.jsx)(a.default,{src:"/images/sticky/whatsapp.png",alt:"WhatsApp Icon",width:50,height:50})}),(0,t.jsx)("a",{href:"tel:+919311449825",className:"hover:scale-110 transition-transform",children:(0,t.jsx)(a.default,{src:"/images/sticky/call.png",alt:"Call Icon",width:50,height:50})}),(0,t.jsx)("a",{href:"mailto:drdhirendrasinghent@gmail.com",className:"hover:scale-110 transition-transform",children:(0,t.jsx)(a.default,{src:"/images/sticky/email.png",alt:"Call Icon",width:50,height:50})})]})}e.s(["default",()=>n])},585799,e=>{"use strict";var t=e.i(447950),a=e.i(758971),n=e.i(918240),i=e.i(981920),s=e.i(665631);let r=(0,s.default)("menu",[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]),o=(0,s.default)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var l=e.i(869342);let c=[{href:"/specialities/otology",label:"Ear (Otology)"},{href:"/specialities/tympanoplasty-surgery",label:"Tympanoplasty Surgery"},{href:"/specialities/ossiculoplasty-surgery",label:"Ossiculoplasty Surgery"},{href:"/specialities/mastoidectomy",label:"Mastoidectomy Surgery"},{href:"/specialities/tonsillectomy-surgery",label:"Tonsillectomy Surgery"},{href:"/specialities/stapedotomy-surgery",label:"Stapedotomy Surgery"},{href:"/specialities/cochlear-hearing-implants",label:"Cochlear & Hearing Implants"},{href:"/specialities/skull-base-surgery",label:"Skull Base Surgery"},{href:"/specialities/nose-sinus-rhinology",label:"Nose & Sinus (Rhinology)"},{href:"/specialities/septoplasty",label:"Septoplasty (Pain free pack less septoplasty)"},{href:"/specialities/laryngology",label:"Voice & Throat (Laryngology)"},{href:"/specialities/neuro-otology",label:"Dizziness Vertigo / Neuro-otology"},{href:"/specialities/pediatric-ent",label:"Pediatric ENT"},{href:"/specialities/head-neck-surgery",label:"Head & Neck"}];var d=e.i(630701),p=e.i(541743),u=e.i(307051),h=e.i(768707),m=e.i(461132),f=e.i(512699);let x="w-full h-11 px-4 rounded-md bg-white/10 text-white border border-white/20 placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-white/40 transition-all duration-200",g="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none",y={name:"",number:"",email:"",city:"",department:""};function b({open:e,onClose:n}){let[i,s]=(0,a.useState)(y),[r,c]=(0,a.useState)(!1),[b,j]=(0,a.useState)(!1),v=(0,a.useRef)(null);(0,a.useEffect)(()=>(e?document.body.style.overflow="hidden":(document.body.style.overflow="",s(y)),()=>{document.body.style.overflow=""}),[e]),(0,a.useEffect)(()=>{let e=e=>{"Escape"===e.key&&n()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[n]);let N=e=>s(t=>({...t,[e.target.name]:e.target.value})),w=async e=>{e.preventDefault(),c(!0);try{let e=await fetch("/api/form-submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...i,type:"appointment"})}),t=await e.json();t.success?(j(!0),s(y)):alert(t.message||"Failed to submit form")}catch(e){console.error("Error:",e),alert("An error occurred. Please try again.")}finally{c(!1)}};return e?(0,t.jsxs)("div",{ref:v,onClick:e=>{e.target===v.current&&n()},className:"appt-overlay",role:"dialog","aria-modal":"true","aria-label":"Book Appointment",children:[(0,t.jsx)(m.default,{open:r}),(0,t.jsx)(f.default,{open:b,onClose:()=>{j(!1),n()},message:"Your appointment request has been submitted successfully!"}),(0,t.jsxs)("div",{className:"appt-modal",children:[(0,t.jsxs)("div",{className:"appt-modal-header",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"appt-modal-eyebrow",children:"ENT Specialist · 25+ Years"}),(0,t.jsx)("h2",{className:"appt-modal-title",children:"Book an Appointment"})]}),(0,t.jsx)("button",{onClick:n,className:"appt-close-btn","aria-label":"Close modal",children:(0,t.jsx)(o,{size:18})})]}),(0,t.jsx)("div",{className:"appt-divider"}),(0,t.jsxs)("form",{onSubmit:w,noValidate:!0,className:"appt-form",children:[(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("input",{type:"text",name:"name",value:i.name,onChange:N,placeholder:"Full Name *",className:x+" pr-10",required:!0}),(0,t.jsx)(d.User,{strokeWidth:1,className:g})]}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("input",{type:"tel",name:"number",value:i.number,onChange:N,placeholder:"Phone Number *",pattern:"[0-9]{10}",maxLength:10,className:x+" pr-10",required:!0}),(0,t.jsx)(p.Phone,{strokeWidth:1,className:g})]}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("input",{type:"email",name:"email",value:i.email,onChange:N,placeholder:"Email Address",className:x+" pr-10"}),(0,t.jsx)(u.Mail,{strokeWidth:1,className:g})]}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("input",{type:"text",name:"city",value:i.city,onChange:N,placeholder:"Your City *",className:x+" pr-10",required:!0}),(0,t.jsx)(h.MapPin,{strokeWidth:1,className:g})]}),(0,t.jsxs)("div",{className:"relative md:col-span-2",children:[(0,t.jsxs)("select",{name:"department",value:i.department,onChange:N,className:x+" pr-10 cursor-pointer appearance-none",children:[(0,t.jsx)("option",{value:"",children:"Select Department"}),(0,t.jsx)("option",{value:"Ear (Otology)",children:"Ear (Otology)"}),(0,t.jsx)("option",{value:"Cochlear and Hearing implants",children:"Cochlear Implants"}),(0,t.jsx)("option",{value:"Nose and Sinus (Rhinology)",children:"Nose and Sinus"}),(0,t.jsx)("option",{value:"Voice and Throat (Laryngology)",children:"Voice and Throat"}),(0,t.jsx)("option",{value:"Dizziness and Vertigo (Neuro-otology)",children:"Dizziness / Vertigo"}),(0,t.jsx)("option",{value:"Paediatric ENT Diagnostics",children:"Paediatric ENT"}),(0,t.jsx)("option",{value:"Head and Neck",children:"Head and Neck"}),(0,t.jsx)("option",{value:"Skull Base Surgery",children:"Skull Base Surgery"})]}),(0,t.jsx)(l.ChevronDown,{strokeWidth:1,className:g})]}),(0,t.jsx)("button",{type:"submit",disabled:r,className:"appt-submit-btn md:col-span-2",children:r?(0,t.jsx)("span",{className:"appt-spinner"}):"Book Now"})]}),(0,t.jsx)("p",{className:"appt-note",children:"We'll call you within 24 hours to confirm your slot."})]}),(0,t.jsx)("style",{children:`
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
      `})]}):null}e.s(["default",0,()=>{let[e,s]=(0,a.useState)(!1),[d,p]=(0,a.useState)({specialities:!1,conditions:!1,locations:!1}),[u,h]=(0,a.useState)(!1),m=e=>{p(t=>({...t,[e]:!t[e]}))},f=()=>{s(!1),p({specialities:!1,conditions:!1,locations:!1})},x=()=>{f(),h(!0)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(b,{open:u,onClose:()=>h(!1)}),(0,t.jsxs)("header",{className:"nav",children:[(0,t.jsxs)("div",{className:"nav-inner",children:[(0,t.jsxs)(n.default,{href:"/",className:"nav-logo",style:{textDecoration:"none",display:"flex",flexDirection:"row",alignItems:"center",gap:"12px"},children:[(0,t.jsx)(i.default,{src:"/images/medical-logo.png",alt:"Dr.(Prof.) Dhirendra Singh Kushwah ENT Specialist",width:140,height:40,className:"object-contain",priority:!0}),(0,t.jsxs)("div",{className:"hidden lg:flex flex-col",children:[(0,t.jsxs)("div",{className:"nav-logo-name",suppressHydrationWarning:!0,children:[(0,t.jsx)("span",{suppressHydrationWarning:!0,children:" Dr.(Prof.) Dhirendra Singh Kushwah "})," "]}),(0,t.jsx)("div",{className:"nav-logo-sub",suppressHydrationWarning:!0,children:" MS Otorhinolaryngology · 25+ Years "})," "]})," "]}),(0,t.jsxs)("div",{className:"nav-links hidden md:flex",children:[(0,t.jsx)(n.default,{href:"/about/drdhirendrasinghkushwah",children:" About "}),(0,t.jsx)(n.default,{href:"/facilities",children:" Facilities "}),(0,t.jsxs)("div",{className:"nav-item-dropdown",children:[(0,t.jsxs)("button",{type:"button",className:"nav-drop-trigger",children:[" Conditions ",(0,t.jsx)("span",{className:"chevron"})," "]}),(0,t.jsxs)("div",{className:"nav-dropdown-menu",children:[(0,t.jsx)(n.default,{href:"/conditions/we-care",children:" We Care "}),(0,t.jsx)(n.default,{href:"/conditions/ear-hearing",children:" Ear & Hearing "}),(0,t.jsx)(n.default,{href:"/conditions/nose-sinus",children:" Nose & Sinus "}),(0,t.jsx)(n.default,{href:"/conditions/voice-throat-disorders-treatment-delhi",children:" Voice & Throat "}),(0,t.jsx)(n.default,{href:"/conditions/vertigo",children:" Vertigo Clinic "}),(0,t.jsx)(n.default,{href:"/conditions/paediatric-ent",children:" Paediatric ENT "})," "]})," "]}),(0,t.jsxs)("div",{className:"nav-item-dropdown",children:[(0,t.jsxs)("button",{type:"button",className:"nav-drop-trigger",children:[" Specialities ",(0,t.jsx)("span",{className:"chevron"})," "]}),(0,t.jsxs)("div",{className:"nav-dropdown-menu",children:[c.slice(0,8).map(e=>(0,t.jsxs)(n.default,{href:e.href,children:[" ",e.label," "]},e.href))," "]})," "]}),(0,t.jsxs)("div",{className:"nav-item-dropdown",children:[(0,t.jsxs)("button",{type:"button",className:"nav-drop-trigger",children:[" Clinic And Hospital ",(0,t.jsx)("span",{className:"chevron"})," "]}),(0,t.jsxs)("div",{className:"nav-dropdown-menu",children:[(0,t.jsx)(n.default,{href:"/location/jasola",children:" Jasola – Hospital "}),(0,t.jsx)(n.default,{href:"/location/cr-park",children:" CR Park – Clinic "}),(0,t.jsx)(n.default,{href:"/location/arjun-nagar",children:" Arjun Nagar – Clinic "}),(0,t.jsx)(n.default,{href:"/location/palwal",children:" Palwal – Hospital "}),(0,t.jsx)(n.default,{href:"/location/dhampur",children:" Dhampur – Hospital "})," "]})," "]}),(0,t.jsx)(n.default,{href:"/gallery",children:" Gallery "})," ",(0,t.jsx)(n.default,{href:"/featuredblog",children:" Blog "}),(0,t.jsx)(n.default,{href:"/contact",children:" Contact "}),(0,t.jsx)("button",{type:"button",onClick:x,className:"nav-cta",children:" Book Appointment "})," "]}),(0,t.jsxs)("button",{type:"button",onClick:()=>s(e=>!e),className:"md:hidden flex items-center justify-center text-slate-700","aria-label":e?"Close navigation menu":"Open navigation menu","aria-expanded":e,children:[" ",e?(0,t.jsx)(o,{size:24}):(0,t.jsx)(r,{size:24})," "]})," "]})," "," ",e&&(0,t.jsxs)("div",{className:"mobile-menu",children:[(0,t.jsxs)("nav",{className:"mobile-menu-nav",children:[(0,t.jsx)(n.default,{href:"/about/drdhirendrasinghkushwah",onClick:f,className:"mobile-menu-link",children:" About "}),(0,t.jsx)(n.default,{href:"/facilities",onClick:f,className:"mobile-menu-link",children:" Facilities "}),(0,t.jsxs)("div",{className:"mobile-menu-dropdown",children:[(0,t.jsxs)("button",{type:"button",onClick:()=>m("conditions"),className:"mobile-dropdown-button","aria-expanded":d.conditions,children:[(0,t.jsx)("span",{children:"Conditions"}),(0,t.jsx)(l.ChevronDown,{size:18,className:d.conditions?"rotate-180":""})]}),d.conditions&&(0,t.jsxs)("div",{className:"mobile-submenu",children:[(0,t.jsx)(n.default,{href:"/conditions/we-care",onClick:f,children:" We Care "}),(0,t.jsx)(n.default,{href:"/conditions/ear-hearing",onClick:f,children:" Ear & Hearing "}),(0,t.jsx)(n.default,{href:"/conditions/nose-sinus",onClick:f,children:" Nose & Sinus "}),(0,t.jsx)(n.default,{href:"/conditions/voice-throat-disorders-treatment-delhi",onClick:f,children:" Voice & Throat "}),(0,t.jsx)(n.default,{href:"/conditions/vertigo",onClick:f,children:" Vertigo Clinic "}),(0,t.jsx)(n.default,{href:"/conditions/paediatric-ent",onClick:f,children:" Paediatric ENT "})," "]})," "]}),(0,t.jsxs)("div",{className:"mobile-menu-dropdown",children:[(0,t.jsxs)("button",{type:"button",onClick:()=>m("specialities"),className:"mobile-dropdown-button","aria-expanded":d.specialities,children:[(0,t.jsx)("span",{children:"Specialities"}),(0,t.jsx)(l.ChevronDown,{size:18,className:d.specialities?"rotate-180":""})]}),d.specialities&&(0,t.jsx)("div",{className:"mobile-submenu",children:c.slice(0,8).map(e=>(0,t.jsxs)(n.default,{href:e.href,onClick:f,children:[e.label," "]},e.href))})]}),(0,t.jsxs)("div",{className:"mobile-menu-dropdown",children:[(0,t.jsxs)("button",{type:"button",onClick:()=>m("locations"),className:"mobile-dropdown-button","aria-expanded":d.locations,children:[(0,t.jsx)("span",{children:"Clinic And Hospital"}),(0,t.jsx)(l.ChevronDown,{size:18,className:d.locations?"rotate-180":""})]})," ",d.locations&&(0,t.jsxs)("div",{className:"mobile-submenu",children:[(0,t.jsx)(n.default,{href:"/location/jasola",onClick:f,children:" Jasola – Hospital "}),(0,t.jsx)(n.default,{href:"/location/cr-park",onClick:f,children:" CR Park – Clinic "}),(0,t.jsx)(n.default,{href:"/location/arjun-nagar",onClick:f,children:" Arjun Nagar – Clinic "}),(0,t.jsx)(n.default,{href:"/location/palwal",onClick:f,children:" Palwal – Hospital "})," ",(0,t.jsx)(n.default,{href:"/location/dhampur",onClick:f,children:" Dhampur – Hospital "})," "]})," "]})," "," ",(0,t.jsx)(n.default,{href:"/gallery",onClick:f,className:"mobile-menu-link",children:" Gallery "})," "," ",(0,t.jsx)(n.default,{href:"/featuredblog",onClick:f,className:"mobile-menu-link",children:" Blog "})," "," ",(0,t.jsx)(n.default,{href:"/contact",onClick:f,className:"mobile-menu-link",children:" Contact "})," "," ",(0,t.jsx)("button",{type:"button",onClick:x,className:"nav-cta mobile-appointment",children:" Book Appointment "})," "]})," "]})," "]})," "]})}],585799)},38021,e=>{"use strict";var t=e.i(447950),a=e.i(758971),n=e.i(927937);e.i(654343);var i=e.i(800085),s=e.i(504241),r=e.i(561306),o=e.i(613937),l=e.i(4883),c=a,d=e.i(694757);function p(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}class u extends c.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if((0,l.isHTMLElement)(t)&&e.isPresent&&!this.props.isPresent&&!1!==this.props.pop){let e=t.offsetParent,a=(0,l.isHTMLElement)(e)&&e.offsetWidth||0,n=(0,l.isHTMLElement)(e)&&e.offsetHeight||0,i=getComputedStyle(t),s=this.props.sizeRef.current;s.height=parseFloat(i.height),s.width=parseFloat(i.width),s.top=t.offsetTop,s.left=t.offsetLeft,s.right=a-s.width-s.left,s.bottom=n-s.height-s.top}return null}componentDidUpdate(){}render(){return this.props.children}}function h({children:e,isPresent:n,anchorX:i,anchorY:s,root:r,pop:o}){let l=(0,c.useId)(),h=(0,c.useRef)(null),m=(0,c.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:f}=(0,c.useContext)(d.MotionConfigContext),x=function(...e){return a.useCallback(function(...e){return t=>{let a=!1,n=e.map(e=>{let n=p(e,t);return a||"function"!=typeof n||(a=!0),n});if(a)return()=>{for(let t=0;t<n.length;t++){let a=n[t];"function"==typeof a?a():p(e[t],null)}}}}(...e),e)}(h,e.props?.ref??e?.ref);return(0,c.useInsertionEffect)(()=>{let{width:e,height:t,top:a,left:c,right:d,bottom:p}=m.current;if(n||!1===o||!h.current||!e||!t)return;let u="left"===i?`left: ${c}`:`right: ${d}`,x="bottom"===s?`bottom: ${p}`:`top: ${a}`;h.current.dataset.motionPopId=l;let g=document.createElement("style");f&&(g.nonce=f);let y=r??document.head;return y.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${u}px !important;
            ${x}px !important;
          }
        `),()=>{y.contains(g)&&y.removeChild(g)}},[n]),(0,t.jsx)(u,{isPresent:n,childRef:h,sizeRef:m,pop:o,children:!1===o?e:c.cloneElement(e,{ref:x})})}let m=({children:e,initial:n,isPresent:i,onExitComplete:r,custom:l,presenceAffectsLayout:c,mode:d,anchorX:p,anchorY:u,root:m})=>{let x=(0,s.useConstant)(f),g=(0,a.useId)(),y=!0,b=(0,a.useMemo)(()=>(y=!1,{id:g,initial:n,isPresent:i,custom:l,onExitComplete:e=>{for(let t of(x.set(e,!0),x.values()))if(!t)return;r&&r()},register:e=>(x.set(e,!1),()=>x.delete(e))}),[i,x,r]);return c&&y&&(b={...b}),(0,a.useMemo)(()=>{x.forEach((e,t)=>x.set(t,!1))},[i]),a.useEffect(()=>{i||x.size||!r||r()},[i]),e=(0,t.jsx)(h,{pop:"popLayout"===d,isPresent:i,anchorX:p,anchorY:u,root:m,children:e}),(0,t.jsx)(o.PresenceContext.Provider,{value:b,children:e})};function f(){return new Map}var x=e.i(389953);let g=e=>e.key||"";function y(e){let t=[];return a.Children.forEach(e,e=>{(0,a.isValidElement)(e)&&t.push(e)}),t}let b=({children:e,custom:n,initial:o=!0,onExitComplete:l,presenceAffectsLayout:c=!0,mode:d="sync",propagate:p=!1,anchorX:u="left",anchorY:h="top",root:f})=>{let[b,j]=(0,x.usePresence)(p),v=(0,a.useMemo)(()=>y(e),[e]),N=p&&!b?[]:v.map(g),w=(0,a.useRef)(!0),k=(0,a.useRef)(v),C=(0,s.useConstant)(()=>new Map),S=(0,a.useRef)(new Set),[E,T]=(0,a.useState)(v),[P,z]=(0,a.useState)(v);(0,r.useIsomorphicLayoutEffect)(()=>{w.current=!1,k.current=v;for(let e=0;e<P.length;e++){let t=g(P[e]);N.includes(t)?(C.delete(t),S.current.delete(t)):!0!==C.get(t)&&C.set(t,!1)}},[P,N.length,N.join("-")]);let D=[];if(v!==E){let e=[...v];for(let t=0;t<P.length;t++){let a=P[t],n=g(a);N.includes(n)||(e.splice(t,0,a),D.push(a))}return"wait"===d&&D.length&&(e=D),z(y(e)),T(v),null}let{forceRender:H}=(0,a.useContext)(i.LayoutGroupContext);return(0,t.jsx)(t.Fragment,{children:P.map(e=>{let a=g(e),i=(!p||!!b)&&(v===P||N.includes(a));return(0,t.jsx)(m,{isPresent:i,initial:(!w.current||!!o)&&void 0,custom:n,presenceAffectsLayout:c,mode:d,root:f,onExitComplete:i?void 0:()=>{if(S.current.has(a)||(S.current.add(a),!C.has(a)))return;C.set(a,!0);let e=!0;C.forEach(t=>{t||(e=!1)}),e&&(H?.(),z(k.current),p&&j?.(),l&&l())},anchorX:u,anchorY:h,children:e},a)})})};function j(){let[e,i]=(0,a.useState)(!1),[s,r]=(0,a.useState)({name:"",number:"",email:"",city:"",department:""}),[o,l]=(0,a.useState)(!1),c=e=>{let{name:t,value:a}=e.target;r(e=>({...e,[t]:a}))},d=async e=>{e.preventDefault(),l(!0);try{let e=await fetch("/api/form-submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...s,type:"appointment"})}),t=await e.json();t.success?(alert("Appointment submitted successfully!"),r({name:"",number:"",email:"",city:"",department:""})):alert(t.message||"Something went wrong")}catch{alert("Network error")}l(!1)};return(0,a.useEffect)(()=>{if(!localStorage.getItem("AppointmentpopupShown")){let e=setTimeout(()=>i(!0),5e3);return()=>clearTimeout(e)}},[]),(0,t.jsx)(b,{children:e&&(0,t.jsxs)(n.motion.div,{className:"fixed inset-0 z-50 flex items-center justify-center px-4",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[(0,t.jsx)("div",{className:"absolute inset-0 bg-black/50 backdrop-blur-sm",onClick:()=>i(!1)}),(0,t.jsxs)(n.motion.div,{initial:{opacity:0,y:40,scale:.96},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:40},transition:{duration:.3},className:"relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden",children:[(0,t.jsxs)("div",{className:"relative bg-gradient-to-l from-sky-700 to-teal-700 px-6 py-4 text-white",children:[(0,t.jsx)("h3",{className:"text-lg",children:"Book Appointment"}),(0,t.jsx)("button",{onClick:()=>{i(!1),localStorage.setItem("AppointmentpopupShown","true")},className:"absolute right-4 top-3 text-white/80 hover:text-white text-lg",children:"✕"})]}),(0,t.jsxs)("form",{onSubmit:d,className:"p-6 space-y-4",noValidate:!0,children:[(0,t.jsxs)("select",{name:"department",value:s.department,onChange:c,className:"w-full rounded-lg border border-gray-200 px-3 py-2 text-sm  focus:outline-none focus:ring-2 focus:ring-sky-500",children:[(0,t.jsx)("option",{value:"",children:"Select Department"}),(0,t.jsx)("option",{children:"Ear (Otology)"}),(0,t.jsx)("option",{children:"Cochlear and Hearing implants"}),(0,t.jsx)("option",{children:"Nose and Sinus (Rhinology)"}),(0,t.jsx)("option",{children:"Voice and Throat (Laryngology)"}),(0,t.jsx)("option",{children:"Dizziness and Vertigo (Neuro-otology)"}),(0,t.jsx)("option",{children:"Paediatric ENT Diagnostics"}),(0,t.jsx)("option",{children:"Head and Neck"}),(0,t.jsx)("option",{children:"Skull Base Surgery"})]}),(0,t.jsx)("input",{type:"text",name:"name",placeholder:"Your Name",value:s.name,onChange:c,className:"w-full rounded-lg border border-gray-200 px-3 py-2 text-sm  focus:outline-none focus:ring-2 focus:ring-sky-500",required:!0}),(0,t.jsx)("input",{type:"tel",name:"number",placeholder:"Phone number",value:s.number,onChange:c,pattern:"[0-9]{10}",className:"w-full rounded-lg border border-gray-200 px-3 py-2 text-sm  focus:outline-none focus:ring-2 focus:ring-sky-500",required:!0}),(0,t.jsx)("input",{type:"email",name:"email",placeholder:"Your Email (optional)",value:s.email,onChange:c,className:"w-full rounded-lg border border-gray-200 px-3 py-2 text-sm  focus:outline-none focus:ring-2 focus:ring-sky-500"}),(0,t.jsx)("input",{type:"text",name:"city",placeholder:"Your City",value:s.city,onChange:c,className:"w-full rounded-lg border border-gray-200 px-3 py-2 text-sm  focus:outline-none focus:ring-2 focus:ring-sky-500",required:!0}),(0,t.jsx)("button",{type:"submit",disabled:o,className:"w-full bg-gradient-to-r from-sky-700 to-teal-900 text-white  py-2.5 rounded-lg font-medium hover:opacity-90 transition disabled:opacity-60",children:o?"Submitting...":"Connect Now"})]})]})]})})}e.s(["default",()=>j],38021)},263586,e=>{"use strict";var t=e.i(447950),a=e.i(758971);function n(){let[e,n]=(0,a.useState)({name:"",phone:"",city:"",department:"",message:""}),[i,s]=(0,a.useState)(!1),r=t=>{n({...e,[t.target.name]:t.target.value})},o=async t=>{t.preventDefault(),s(!0);try{let t=await fetch("/api/call-request",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});(await t.json()).success&&(alert("Thank you! Our team will contact you soon."),n({name:"",phone:"",city:"",department:"",message:""}))}catch(e){alert("Network error")}s(!1)},l="w-full !border !border-gray-200 !rounded-lg !p-3 !my-2 !text-sm !bg-gray-50/50 focus:!bg-white focus:!ring-2 focus:!ring-teal-600/20 focus:!outline-none !transition-all";return(0,t.jsxs)("form",{onSubmit:o,className:"!p-1 mx-auto w-full",children:[(0,t.jsx)("h4",{className:"!text-lg !font-bold !text-teal-900 !mb-4 !text-center",children:"Request a Call Back"}),(0,t.jsx)("label",{htmlFor:"name",className:"hidden",children:"Your Name"}),(0,t.jsx)("input",{id:"name",name:"name",value:e.name,placeholder:"Your Name",required:!0,onChange:r,className:l}),(0,t.jsx)("label",{htmlFor:"phone",className:"hidden",children:"Phone Number"}),(0,t.jsx)("input",{id:"phone",name:"phone",value:e.phone,placeholder:"Phone Number",required:!0,onChange:r,className:l}),(0,t.jsx)("label",{htmlFor:"city",className:"hidden",children:"City"}),(0,t.jsx)("input",{id:"city",name:"city",value:e.city,placeholder:"Your City",required:!0,onChange:r,className:l}),(0,t.jsx)("label",{htmlFor:"departments",className:"hidden",children:"Department"}),(0,t.jsxs)("select",{id:"departments",name:"department",value:e.department,onChange:r,className:l+" !cursor-pointer",children:[(0,t.jsx)("option",{value:"",children:"Select Department"}),(0,t.jsx)("option",{children:"Ear (Otology)"}),(0,t.jsx)("option",{children:"Nose (Rhinology)"}),(0,t.jsx)("option",{children:"Throat (Laryngology)"}),(0,t.jsx)("option",{children:"Cochlear Implant"})]}),(0,t.jsx)("label",{htmlFor:"message",className:"hidden",children:"Your Message"}),(0,t.jsx)("textarea",{id:"message",name:"message",value:e.message,placeholder:"How can we help?",rows:2,onChange:r,className:l+" !resize-none"}),(0,t.jsx)("button",{type:"submit",disabled:i,className:"!w-full !mt-4 !bg-teal-700 !text-white !font-bold !py-3.5 !px-6 !rounded-xl !shadow-md hover:!bg-teal-800 active:!scale-95 !transition-all !duration-200 disabled:!opacity-50",children:i?"Submitting...":"Send Request →"})]})}function i(){let[e,i]=(0,a.useState)(!1);return(0,t.jsx)(t.Fragment,{children:e&&(0,t.jsxs)("div",{className:"fixed bottom-20 md:bottom-24 right-2 md:right-6 z-50 w-[92%] md:w-[350px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden",children:[(0,t.jsxs)("div",{className:"bg-gradient-to-l from-sky-700 to-teal-700 text-white p-4 flex justify-between items-center",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 mt-2",children:[(0,t.jsx)("span",{className:"font-semibold tracking-tight",children:"Hospital Support"}),(0,t.jsx)("div",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"})]}),(0,t.jsx)("button",{onClick:()=>i(!1),className:"!p-1 text-white text-xl transition-transform duration-300 hover:rotate-90",children:"✕"})]}),(0,t.jsx)("div",{className:"p-5 max-h-[450px] overflow-y-auto bg-white",children:(0,t.jsx)(n,{})}),(0,t.jsx)("div",{className:"bg-gray-50 p-2 text-[10px] text-center text-gray-400 uppercase tracking-widest",children:"Typically replies in minutes"})]})})}e.s(["default",()=>i],263586)},191801,e=>{"use strict";var t=e.i(758971),a=e.i(829244);let n=e.i(654343).default.env.NEXT_PUBLIC_GTM_ID;function i({children:e}){let i=(0,a.usePathname)(),s=(0,a.useSearchParams)(),r=(0,t.useRef)(null);return(0,t.useEffect)(()=>{let e=s.toString(),t=e?`${i}?${e}`:i;if(t===r.current)return;r.current=t;let a=setTimeout(()=>{!function(){window.dataLayer=window.dataLayer||[],window.dataLayer.push(arguments)}("config",n,{page_path:t,page_title:document.title})},0);return()=>clearTimeout(a)},[i,s]),e}e.s(["default",()=>i],191801)}]);