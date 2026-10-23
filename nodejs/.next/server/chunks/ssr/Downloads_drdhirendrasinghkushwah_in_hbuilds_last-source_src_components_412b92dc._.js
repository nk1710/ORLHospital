module.exports=[348574,a=>{"use strict";var b=a.i(363742),c=a.i(94848);function d(){return(0,b.jsxs)("div",{className:"fixed left-1 bottom-[100px] md:bottom-[140px] flex flex-col gap-4 z-[200]",children:[(0,b.jsx)("a",{href:"https://wa.me/919311449825",target:"_blank",rel:"noopener noreferrer",className:"hover:scale-110 transition-transform",children:(0,b.jsx)(c.default,{src:"/images/sticky/whatsapp.png",alt:"WhatsApp Icon",width:50,height:50})}),(0,b.jsx)("a",{href:"tel:+919311449825",className:"hover:scale-110 transition-transform",children:(0,b.jsx)(c.default,{src:"/images/sticky/call.png",alt:"Call Icon",width:50,height:50})}),(0,b.jsx)("a",{href:"mailto:drdhirendrasinghent@gmail.com",className:"hover:scale-110 transition-transform",children:(0,b.jsx)(c.default,{src:"/images/sticky/email.png",alt:"Call Icon",width:50,height:50})})]})}a.s(["default",()=>d])},103845,a=>{"use strict";var b=a.i(363742),c=a.i(973208),d=a.i(645705),e=a.i(94848),f=a.i(523404);let g=(0,f.default)("menu",[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]),h=(0,f.default)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var i=a.i(841564);let j=[{href:"/specialities/otology",label:"Ear (Otology)"},{href:"/specialities/tympanoplasty-surgery",label:"Tympanoplasty Surgery"},{href:"/specialities/ossiculoplasty-surgery",label:"Ossiculoplasty Surgery"},{href:"/specialities/mastoidectomy",label:"Mastoidectomy Surgery"},{href:"/specialities/tonsillectomy-surgery",label:"Tonsillectomy Surgery"},{href:"/specialities/stapedotomy-surgery",label:"Stapedotomy Surgery"},{href:"/specialities/cochlear-hearing-implants",label:"Cochlear & Hearing Implants"},{href:"/specialities/skull-base-surgery",label:"Skull Base Surgery"},{href:"/specialities/nose-sinus-rhinology",label:"Nose & Sinus (Rhinology)"},{href:"/specialities/septoplasty",label:"Septoplasty (Pain free pack less septoplasty)"},{href:"/specialities/laryngology",label:"Voice & Throat (Laryngology)"},{href:"/specialities/neuro-otology",label:"Dizziness Vertigo / Neuro-otology"},{href:"/specialities/pediatric-ent",label:"Pediatric ENT"},{href:"/specialities/head-neck-surgery",label:"Head & Neck"}];var k=a.i(676415),l=a.i(80069),m=a.i(803034),n=a.i(748154),o=a.i(708183),p=a.i(72141);let q="w-full h-11 px-4 rounded-md bg-white/10 text-white border border-white/20 placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-white/40 transition-all duration-200",r="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none",s={name:"",number:"",email:"",city:"",department:""};function t({open:a,onClose:d}){let[e,f]=(0,c.useState)(s),[g,j]=(0,c.useState)(!1),[t,u]=(0,c.useState)(!1),v=(0,c.useRef)(null);(0,c.useEffect)(()=>(a?document.body.style.overflow="hidden":(document.body.style.overflow="",f(s)),()=>{document.body.style.overflow=""}),[a]),(0,c.useEffect)(()=>{let a=a=>{"Escape"===a.key&&d()};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[d]);let w=a=>f(b=>({...b,[a.target.name]:a.target.value})),x=async a=>{a.preventDefault(),j(!0);try{let a=await fetch("/api/form-submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,type:"appointment"})}),b=await a.json();b.success?(u(!0),f(s)):alert(b.message||"Failed to submit form")}catch(a){console.error("Error:",a),alert("An error occurred. Please try again.")}finally{j(!1)}};return a?(0,b.jsxs)("div",{ref:v,onClick:a=>{a.target===v.current&&d()},className:"appt-overlay",role:"dialog","aria-modal":"true","aria-label":"Book Appointment",children:[(0,b.jsx)(o.default,{open:g}),(0,b.jsx)(p.default,{open:t,onClose:()=>{u(!1),d()},message:"Your appointment request has been submitted successfully!"}),(0,b.jsxs)("div",{className:"appt-modal",children:[(0,b.jsxs)("div",{className:"appt-modal-header",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"appt-modal-eyebrow",children:"ENT Specialist · 25+ Years"}),(0,b.jsx)("h2",{className:"appt-modal-title",children:"Book an Appointment"})]}),(0,b.jsx)("button",{onClick:d,className:"appt-close-btn","aria-label":"Close modal",children:(0,b.jsx)(h,{size:18})})]}),(0,b.jsx)("div",{className:"appt-divider"}),(0,b.jsxs)("form",{onSubmit:x,noValidate:!0,className:"appt-form",children:[(0,b.jsxs)("div",{className:"relative",children:[(0,b.jsx)("input",{type:"text",name:"name",value:e.name,onChange:w,placeholder:"Full Name *",className:q+" pr-10",required:!0}),(0,b.jsx)(k.User,{strokeWidth:1,className:r})]}),(0,b.jsxs)("div",{className:"relative",children:[(0,b.jsx)("input",{type:"tel",name:"number",value:e.number,onChange:w,placeholder:"Phone Number *",pattern:"[0-9]{10}",maxLength:10,className:q+" pr-10",required:!0}),(0,b.jsx)(l.Phone,{strokeWidth:1,className:r})]}),(0,b.jsxs)("div",{className:"relative",children:[(0,b.jsx)("input",{type:"email",name:"email",value:e.email,onChange:w,placeholder:"Email Address",className:q+" pr-10"}),(0,b.jsx)(m.Mail,{strokeWidth:1,className:r})]}),(0,b.jsxs)("div",{className:"relative",children:[(0,b.jsx)("input",{type:"text",name:"city",value:e.city,onChange:w,placeholder:"Your City *",className:q+" pr-10",required:!0}),(0,b.jsx)(n.MapPin,{strokeWidth:1,className:r})]}),(0,b.jsxs)("div",{className:"relative md:col-span-2",children:[(0,b.jsxs)("select",{name:"department",value:e.department,onChange:w,className:q+" pr-10 cursor-pointer appearance-none",children:[(0,b.jsx)("option",{value:"",children:"Select Department"}),(0,b.jsx)("option",{value:"Ear (Otology)",children:"Ear (Otology)"}),(0,b.jsx)("option",{value:"Cochlear and Hearing implants",children:"Cochlear Implants"}),(0,b.jsx)("option",{value:"Nose and Sinus (Rhinology)",children:"Nose and Sinus"}),(0,b.jsx)("option",{value:"Voice and Throat (Laryngology)",children:"Voice and Throat"}),(0,b.jsx)("option",{value:"Dizziness and Vertigo (Neuro-otology)",children:"Dizziness / Vertigo"}),(0,b.jsx)("option",{value:"Paediatric ENT Diagnostics",children:"Paediatric ENT"}),(0,b.jsx)("option",{value:"Head and Neck",children:"Head and Neck"}),(0,b.jsx)("option",{value:"Skull Base Surgery",children:"Skull Base Surgery"})]}),(0,b.jsx)(i.ChevronDown,{strokeWidth:1,className:r})]}),(0,b.jsx)("button",{type:"submit",disabled:g,className:"appt-submit-btn md:col-span-2",children:g?(0,b.jsx)("span",{className:"appt-spinner"}):"Book Now"})]}),(0,b.jsx)("p",{className:"appt-note",children:"We'll call you within 24 hours to confirm your slot."})]}),(0,b.jsx)("style",{children:`
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
      `})]}):null}a.s(["default",0,()=>{let[a,f]=(0,c.useState)(!1),[k,l]=(0,c.useState)({specialities:!1,conditions:!1,locations:!1}),[m,n]=(0,c.useState)(!1),o=a=>{l(b=>({...b,[a]:!b[a]}))},p=()=>{f(!1),l({specialities:!1,conditions:!1,locations:!1})},q=()=>{p(),n(!0)};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(t,{open:m,onClose:()=>n(!1)}),(0,b.jsxs)("header",{className:"nav",children:[(0,b.jsxs)("div",{className:"nav-inner",children:[(0,b.jsxs)(d.default,{href:"/",className:"nav-logo",style:{textDecoration:"none",display:"flex",flexDirection:"row",alignItems:"center",gap:"12px"},children:[(0,b.jsx)(e.default,{src:"/images/medical-logo.png",alt:"Dr.(Prof.) Dhirendra Singh Kushwah ENT Specialist",width:140,height:40,className:"object-contain",priority:!0}),(0,b.jsxs)("div",{className:"hidden lg:flex flex-col",children:[(0,b.jsxs)("div",{className:"nav-logo-name",suppressHydrationWarning:!0,children:[(0,b.jsx)("span",{suppressHydrationWarning:!0,children:" Dr.(Prof.) Dhirendra Singh Kushwah "})," "]}),(0,b.jsx)("div",{className:"nav-logo-sub",suppressHydrationWarning:!0,children:" MS Otorhinolaryngology · 25+ Years "})," "]})," "]}),(0,b.jsxs)("div",{className:"nav-links hidden md:flex",children:[(0,b.jsx)(d.default,{href:"/about/drdhirendrasinghkushwah",children:" About "}),(0,b.jsx)(d.default,{href:"/facilities",children:" Facilities "}),(0,b.jsxs)("div",{className:"nav-item-dropdown",children:[(0,b.jsxs)("button",{type:"button",className:"nav-drop-trigger",children:[" Conditions ",(0,b.jsx)("span",{className:"chevron"})," "]}),(0,b.jsxs)("div",{className:"nav-dropdown-menu",children:[(0,b.jsx)(d.default,{href:"/conditions/we-care",children:" We Care "}),(0,b.jsx)(d.default,{href:"/conditions/ear-hearing",children:" Ear & Hearing "}),(0,b.jsx)(d.default,{href:"/conditions/nose-sinus",children:" Nose & Sinus "}),(0,b.jsx)(d.default,{href:"/conditions/voice-throat-disorders-treatment-delhi",children:" Voice & Throat "}),(0,b.jsx)(d.default,{href:"/conditions/vertigo",children:" Vertigo Clinic "}),(0,b.jsx)(d.default,{href:"/conditions/paediatric-ent",children:" Paediatric ENT "})," "]})," "]}),(0,b.jsxs)("div",{className:"nav-item-dropdown",children:[(0,b.jsxs)("button",{type:"button",className:"nav-drop-trigger",children:[" Specialities ",(0,b.jsx)("span",{className:"chevron"})," "]}),(0,b.jsxs)("div",{className:"nav-dropdown-menu",children:[j.slice(0,8).map(a=>(0,b.jsxs)(d.default,{href:a.href,children:[" ",a.label," "]},a.href))," "]})," "]}),(0,b.jsxs)("div",{className:"nav-item-dropdown",children:[(0,b.jsxs)("button",{type:"button",className:"nav-drop-trigger",children:[" Clinic And Hospital ",(0,b.jsx)("span",{className:"chevron"})," "]}),(0,b.jsxs)("div",{className:"nav-dropdown-menu",children:[(0,b.jsx)(d.default,{href:"/location/jasola",children:" Jasola – Hospital "}),(0,b.jsx)(d.default,{href:"/location/cr-park",children:" CR Park – Clinic "}),(0,b.jsx)(d.default,{href:"/location/arjun-nagar",children:" Arjun Nagar – Clinic "}),(0,b.jsx)(d.default,{href:"/location/palwal",children:" Palwal – Hospital "}),(0,b.jsx)(d.default,{href:"/location/dhampur",children:" Dhampur – Hospital "})," "]})," "]}),(0,b.jsx)(d.default,{href:"/gallery",children:" Gallery "})," ",(0,b.jsx)(d.default,{href:"/featuredblog",children:" Blog "}),(0,b.jsx)(d.default,{href:"/contact",children:" Contact "}),(0,b.jsx)("button",{type:"button",onClick:q,className:"nav-cta",children:" Book Appointment "})," "]}),(0,b.jsxs)("button",{type:"button",onClick:()=>f(a=>!a),className:"md:hidden flex items-center justify-center text-slate-700","aria-label":a?"Close navigation menu":"Open navigation menu","aria-expanded":a,children:[" ",a?(0,b.jsx)(h,{size:24}):(0,b.jsx)(g,{size:24})," "]})," "]})," "," ",a&&(0,b.jsxs)("div",{className:"mobile-menu",children:[(0,b.jsxs)("nav",{className:"mobile-menu-nav",children:[(0,b.jsx)(d.default,{href:"/about/drdhirendrasinghkushwah",onClick:p,className:"mobile-menu-link",children:" About "}),(0,b.jsx)(d.default,{href:"/facilities",onClick:p,className:"mobile-menu-link",children:" Facilities "}),(0,b.jsxs)("div",{className:"mobile-menu-dropdown",children:[(0,b.jsxs)("button",{type:"button",onClick:()=>o("conditions"),className:"mobile-dropdown-button","aria-expanded":k.conditions,children:[(0,b.jsx)("span",{children:"Conditions"}),(0,b.jsx)(i.ChevronDown,{size:18,className:k.conditions?"rotate-180":""})]}),k.conditions&&(0,b.jsxs)("div",{className:"mobile-submenu",children:[(0,b.jsx)(d.default,{href:"/conditions/we-care",onClick:p,children:" We Care "}),(0,b.jsx)(d.default,{href:"/conditions/ear-hearing",onClick:p,children:" Ear & Hearing "}),(0,b.jsx)(d.default,{href:"/conditions/nose-sinus",onClick:p,children:" Nose & Sinus "}),(0,b.jsx)(d.default,{href:"/conditions/voice-throat-disorders-treatment-delhi",onClick:p,children:" Voice & Throat "}),(0,b.jsx)(d.default,{href:"/conditions/vertigo",onClick:p,children:" Vertigo Clinic "}),(0,b.jsx)(d.default,{href:"/conditions/paediatric-ent",onClick:p,children:" Paediatric ENT "})," "]})," "]}),(0,b.jsxs)("div",{className:"mobile-menu-dropdown",children:[(0,b.jsxs)("button",{type:"button",onClick:()=>o("specialities"),className:"mobile-dropdown-button","aria-expanded":k.specialities,children:[(0,b.jsx)("span",{children:"Specialities"}),(0,b.jsx)(i.ChevronDown,{size:18,className:k.specialities?"rotate-180":""})]}),k.specialities&&(0,b.jsx)("div",{className:"mobile-submenu",children:j.slice(0,8).map(a=>(0,b.jsxs)(d.default,{href:a.href,onClick:p,children:[a.label," "]},a.href))})]}),(0,b.jsxs)("div",{className:"mobile-menu-dropdown",children:[(0,b.jsxs)("button",{type:"button",onClick:()=>o("locations"),className:"mobile-dropdown-button","aria-expanded":k.locations,children:[(0,b.jsx)("span",{children:"Clinic And Hospital"}),(0,b.jsx)(i.ChevronDown,{size:18,className:k.locations?"rotate-180":""})]})," ",k.locations&&(0,b.jsxs)("div",{className:"mobile-submenu",children:[(0,b.jsx)(d.default,{href:"/location/jasola",onClick:p,children:" Jasola – Hospital "}),(0,b.jsx)(d.default,{href:"/location/cr-park",onClick:p,children:" CR Park – Clinic "}),(0,b.jsx)(d.default,{href:"/location/arjun-nagar",onClick:p,children:" Arjun Nagar – Clinic "}),(0,b.jsx)(d.default,{href:"/location/palwal",onClick:p,children:" Palwal – Hospital "})," ",(0,b.jsx)(d.default,{href:"/location/dhampur",onClick:p,children:" Dhampur – Hospital "})," "]})," "]})," "," ",(0,b.jsx)(d.default,{href:"/gallery",onClick:p,className:"mobile-menu-link",children:" Gallery "})," "," ",(0,b.jsx)(d.default,{href:"/featuredblog",onClick:p,className:"mobile-menu-link",children:" Blog "})," "," ",(0,b.jsx)(d.default,{href:"/contact",onClick:p,className:"mobile-menu-link",children:" Contact "})," "," ",(0,b.jsx)("button",{type:"button",onClick:q,className:"nav-cta mobile-appointment",children:" Book Appointment "})," "]})," "]})," "]})," "]})}],103845)},251721,a=>{"use strict";var b=a.i(363742),c=a.i(973208),d=a.i(996770),e=a.i(581046),f=a.i(711116);let g=c.useEffect;var h=a.i(341491),i=a.i(73317),j=c,k=a.i(38364);function l(a,b){if("function"==typeof a)return a(b);null!=a&&(a.current=b)}class m extends j.Component{getSnapshotBeforeUpdate(a){let b=this.props.childRef.current;if((0,i.isHTMLElement)(b)&&a.isPresent&&!this.props.isPresent&&!1!==this.props.pop){let a=b.offsetParent,c=(0,i.isHTMLElement)(a)&&a.offsetWidth||0,d=(0,i.isHTMLElement)(a)&&a.offsetHeight||0,e=getComputedStyle(b),f=this.props.sizeRef.current;f.height=parseFloat(e.height),f.width=parseFloat(e.width),f.top=b.offsetTop,f.left=b.offsetLeft,f.right=c-f.width-f.left,f.bottom=d-f.height-f.top}return null}componentDidUpdate(){}render(){return this.props.children}}function n({children:a,isPresent:d,anchorX:e,anchorY:f,root:g,pop:h}){let i=(0,j.useId)(),n=(0,j.useRef)(null),o=(0,j.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:p}=(0,j.useContext)(k.MotionConfigContext),q=function(...a){return c.useCallback(function(...a){return b=>{let c=!1,d=a.map(a=>{let d=l(a,b);return c||"function"!=typeof d||(c=!0),d});if(c)return()=>{for(let b=0;b<d.length;b++){let c=d[b];"function"==typeof c?c():l(a[b],null)}}}}(...a),a)}(n,a.props?.ref??a?.ref);return(0,j.useInsertionEffect)(()=>{let{width:a,height:b,top:c,left:j,right:k,bottom:l}=o.current;if(d||!1===h||!n.current||!a||!b)return;let m="left"===e?`left: ${j}`:`right: ${k}`,q="bottom"===f?`bottom: ${l}`:`top: ${c}`;n.current.dataset.motionPopId=i;let r=document.createElement("style");p&&(r.nonce=p);let s=g??document.head;return s.appendChild(r),r.sheet&&r.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${b}px !important;
            ${m}px !important;
            ${q}px !important;
          }
        `),()=>{s.contains(r)&&s.removeChild(r)}},[d]),(0,b.jsx)(m,{isPresent:d,childRef:n,sizeRef:o,pop:h,children:!1===h?a:j.cloneElement(a,{ref:q})})}let o=({children:a,initial:d,isPresent:e,onExitComplete:g,custom:i,presenceAffectsLayout:j,mode:k,anchorX:l,anchorY:m,root:o})=>{let q=(0,f.useConstant)(p),r=(0,c.useId)(),s=!0,t=(0,c.useMemo)(()=>(s=!1,{id:r,initial:d,isPresent:e,custom:i,onExitComplete:a=>{for(let b of(q.set(a,!0),q.values()))if(!b)return;g&&g()},register:a=>(q.set(a,!1),()=>q.delete(a))}),[e,q,g]);return j&&s&&(t={...t}),(0,c.useMemo)(()=>{q.forEach((a,b)=>q.set(b,!1))},[e]),c.useEffect(()=>{e||q.size||!g||g()},[e]),a=(0,b.jsx)(n,{pop:"popLayout"===k,isPresent:e,anchorX:l,anchorY:m,root:o,children:a}),(0,b.jsx)(h.PresenceContext.Provider,{value:t,children:a})};function p(){return new Map}var q=a.i(623142);let r=a=>a.key||"";function s(a){let b=[];return c.Children.forEach(a,a=>{(0,c.isValidElement)(a)&&b.push(a)}),b}let t=({children:a,custom:d,initial:h=!0,onExitComplete:i,presenceAffectsLayout:j=!0,mode:k="sync",propagate:l=!1,anchorX:m="left",anchorY:n="top",root:p})=>{let[t,u]=(0,q.usePresence)(l),v=(0,c.useMemo)(()=>s(a),[a]),w=l&&!t?[]:v.map(r),x=(0,c.useRef)(!0),y=(0,c.useRef)(v),z=(0,f.useConstant)(()=>new Map),A=(0,c.useRef)(new Set),[B,C]=(0,c.useState)(v),[D,E]=(0,c.useState)(v);g(()=>{x.current=!1,y.current=v;for(let a=0;a<D.length;a++){let b=r(D[a]);w.includes(b)?(z.delete(b),A.current.delete(b)):!0!==z.get(b)&&z.set(b,!1)}},[D,w.length,w.join("-")]);let F=[];if(v!==B){let a=[...v];for(let b=0;b<D.length;b++){let c=D[b],d=r(c);w.includes(d)||(a.splice(b,0,c),F.push(c))}return"wait"===k&&F.length&&(a=F),E(s(a)),C(v),null}let{forceRender:G}=(0,c.useContext)(e.LayoutGroupContext);return(0,b.jsx)(b.Fragment,{children:D.map(a=>{let c=r(a),e=(!l||!!t)&&(v===D||w.includes(c));return(0,b.jsx)(o,{isPresent:e,initial:(!x.current||!!h)&&void 0,custom:d,presenceAffectsLayout:j,mode:k,root:p,onExitComplete:e?void 0:()=>{if(A.current.has(c)||(A.current.add(c),!z.has(c)))return;z.set(c,!0);let a=!0;z.forEach(b=>{b||(a=!1)}),a&&(G?.(),E(y.current),l&&u?.(),i&&i())},anchorX:m,anchorY:n,children:a},c)})})};function u(){let[a,e]=(0,c.useState)(!1),[f,g]=(0,c.useState)({name:"",number:"",email:"",city:"",department:""}),[h,i]=(0,c.useState)(!1),j=a=>{let{name:b,value:c}=a.target;g(a=>({...a,[b]:c}))},k=async a=>{a.preventDefault(),i(!0);try{let a=await fetch("/api/form-submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...f,type:"appointment"})}),b=await a.json();b.success?(alert("Appointment submitted successfully!"),g({name:"",number:"",email:"",city:"",department:""})):alert(b.message||"Something went wrong")}catch{alert("Network error")}i(!1)};return(0,c.useEffect)(()=>{if(!localStorage.getItem("AppointmentpopupShown")){let a=setTimeout(()=>e(!0),5e3);return()=>clearTimeout(a)}},[]),(0,b.jsx)(t,{children:a&&(0,b.jsxs)(d.motion.div,{className:"fixed inset-0 z-50 flex items-center justify-center px-4",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[(0,b.jsx)("div",{className:"absolute inset-0 bg-black/50 backdrop-blur-sm",onClick:()=>e(!1)}),(0,b.jsxs)(d.motion.div,{initial:{opacity:0,y:40,scale:.96},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:40},transition:{duration:.3},className:"relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden",children:[(0,b.jsxs)("div",{className:"relative bg-gradient-to-l from-sky-700 to-teal-700 px-6 py-4 text-white",children:[(0,b.jsx)("h3",{className:"text-lg",children:"Book Appointment"}),(0,b.jsx)("button",{onClick:()=>{e(!1),localStorage.setItem("AppointmentpopupShown","true")},className:"absolute right-4 top-3 text-white/80 hover:text-white text-lg",children:"✕"})]}),(0,b.jsxs)("form",{onSubmit:k,className:"p-6 space-y-4",noValidate:!0,children:[(0,b.jsxs)("select",{name:"department",value:f.department,onChange:j,className:"w-full rounded-lg border border-gray-200 px-3 py-2 text-sm  focus:outline-none focus:ring-2 focus:ring-sky-500",children:[(0,b.jsx)("option",{value:"",children:"Select Department"}),(0,b.jsx)("option",{children:"Ear (Otology)"}),(0,b.jsx)("option",{children:"Cochlear and Hearing implants"}),(0,b.jsx)("option",{children:"Nose and Sinus (Rhinology)"}),(0,b.jsx)("option",{children:"Voice and Throat (Laryngology)"}),(0,b.jsx)("option",{children:"Dizziness and Vertigo (Neuro-otology)"}),(0,b.jsx)("option",{children:"Paediatric ENT Diagnostics"}),(0,b.jsx)("option",{children:"Head and Neck"}),(0,b.jsx)("option",{children:"Skull Base Surgery"})]}),(0,b.jsx)("input",{type:"text",name:"name",placeholder:"Your Name",value:f.name,onChange:j,className:"w-full rounded-lg border border-gray-200 px-3 py-2 text-sm  focus:outline-none focus:ring-2 focus:ring-sky-500",required:!0}),(0,b.jsx)("input",{type:"tel",name:"number",placeholder:"Phone number",value:f.number,onChange:j,pattern:"[0-9]{10}",className:"w-full rounded-lg border border-gray-200 px-3 py-2 text-sm  focus:outline-none focus:ring-2 focus:ring-sky-500",required:!0}),(0,b.jsx)("input",{type:"email",name:"email",placeholder:"Your Email (optional)",value:f.email,onChange:j,className:"w-full rounded-lg border border-gray-200 px-3 py-2 text-sm  focus:outline-none focus:ring-2 focus:ring-sky-500"}),(0,b.jsx)("input",{type:"text",name:"city",placeholder:"Your City",value:f.city,onChange:j,className:"w-full rounded-lg border border-gray-200 px-3 py-2 text-sm  focus:outline-none focus:ring-2 focus:ring-sky-500",required:!0}),(0,b.jsx)("button",{type:"submit",disabled:h,className:"w-full bg-gradient-to-r from-sky-700 to-teal-900 text-white  py-2.5 rounded-lg font-medium hover:opacity-90 transition disabled:opacity-60",children:h?"Submitting...":"Connect Now"})]})]})]})})}a.s(["default",()=>u],251721)},780556,a=>{"use strict";var b=a.i(363742),c=a.i(973208);function d(){let[a,d]=(0,c.useState)({name:"",phone:"",city:"",department:"",message:""}),[e,f]=(0,c.useState)(!1),g=b=>{d({...a,[b.target.name]:b.target.value})},h=async b=>{b.preventDefault(),f(!0);try{let b=await fetch("/api/call-request",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});(await b.json()).success&&(alert("Thank you! Our team will contact you soon."),d({name:"",phone:"",city:"",department:"",message:""}))}catch(a){alert("Network error")}f(!1)},i="w-full !border !border-gray-200 !rounded-lg !p-3 !my-2 !text-sm !bg-gray-50/50 focus:!bg-white focus:!ring-2 focus:!ring-teal-600/20 focus:!outline-none !transition-all";return(0,b.jsxs)("form",{onSubmit:h,className:"!p-1 mx-auto w-full",children:[(0,b.jsx)("h4",{className:"!text-lg !font-bold !text-teal-900 !mb-4 !text-center",children:"Request a Call Back"}),(0,b.jsx)("label",{htmlFor:"name",className:"hidden",children:"Your Name"}),(0,b.jsx)("input",{id:"name",name:"name",value:a.name,placeholder:"Your Name",required:!0,onChange:g,className:i}),(0,b.jsx)("label",{htmlFor:"phone",className:"hidden",children:"Phone Number"}),(0,b.jsx)("input",{id:"phone",name:"phone",value:a.phone,placeholder:"Phone Number",required:!0,onChange:g,className:i}),(0,b.jsx)("label",{htmlFor:"city",className:"hidden",children:"City"}),(0,b.jsx)("input",{id:"city",name:"city",value:a.city,placeholder:"Your City",required:!0,onChange:g,className:i}),(0,b.jsx)("label",{htmlFor:"departments",className:"hidden",children:"Department"}),(0,b.jsxs)("select",{id:"departments",name:"department",value:a.department,onChange:g,className:i+" !cursor-pointer",children:[(0,b.jsx)("option",{value:"",children:"Select Department"}),(0,b.jsx)("option",{children:"Ear (Otology)"}),(0,b.jsx)("option",{children:"Nose (Rhinology)"}),(0,b.jsx)("option",{children:"Throat (Laryngology)"}),(0,b.jsx)("option",{children:"Cochlear Implant"})]}),(0,b.jsx)("label",{htmlFor:"message",className:"hidden",children:"Your Message"}),(0,b.jsx)("textarea",{id:"message",name:"message",value:a.message,placeholder:"How can we help?",rows:2,onChange:g,className:i+" !resize-none"}),(0,b.jsx)("button",{type:"submit",disabled:e,className:"!w-full !mt-4 !bg-teal-700 !text-white !font-bold !py-3.5 !px-6 !rounded-xl !shadow-md hover:!bg-teal-800 active:!scale-95 !transition-all !duration-200 disabled:!opacity-50",children:e?"Submitting...":"Send Request →"})]})}function e(){let[a,e]=(0,c.useState)(!1);return(0,b.jsx)(b.Fragment,{children:a&&(0,b.jsxs)("div",{className:"fixed bottom-20 md:bottom-24 right-2 md:right-6 z-50 w-[92%] md:w-[350px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden",children:[(0,b.jsxs)("div",{className:"bg-gradient-to-l from-sky-700 to-teal-700 text-white p-4 flex justify-between items-center",children:[(0,b.jsxs)("div",{className:"flex items-center gap-2 mt-2",children:[(0,b.jsx)("span",{className:"font-semibold tracking-tight",children:"Hospital Support"}),(0,b.jsx)("div",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"})]}),(0,b.jsx)("button",{onClick:()=>e(!1),className:"!p-1 text-white text-xl transition-transform duration-300 hover:rotate-90",children:"✕"})]}),(0,b.jsx)("div",{className:"p-5 max-h-[450px] overflow-y-auto bg-white",children:(0,b.jsx)(d,{})}),(0,b.jsx)("div",{className:"bg-gray-50 p-2 text-[10px] text-center text-gray-400 uppercase tracking-widest",children:"Typically replies in minutes"})]})})}a.s(["default",()=>e],780556)},504475,a=>{"use strict";var b=a.i(973208),c=a.i(680812);function d({children:a}){let d=(0,c.usePathname)(),e=(0,c.useSearchParams)(),f=(0,b.useRef)(null);return(0,b.useEffect)(()=>{let a=e.toString(),b=a?`${d}?${a}`:d;if(b===f.current)return;f.current=b;let c=setTimeout(()=>{document.title},0);return()=>clearTimeout(c)},[d,e]),a}process.env.NEXT_PUBLIC_GTM_ID,a.s(["default",()=>d],504475)}];

//# sourceMappingURL=Downloads_drdhirendrasinghkushwah_in_hbuilds_last-source_src_components_412b92dc._.js.map