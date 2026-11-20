// 100% In-House Medical Multi-Language Translation Engine
// Zero external scripts, zero Google dependencies, instantaneous client-side switching.

export const LANGUAGES = [
  // Domestic India Languages
  { code: "hi", name: "हिन्दी", enName: "Hindi", flag: "🇮🇳", group: "india" },
  { code: "bn", name: "বাংলা", enName: "Bengali", flag: "🇧🇩", group: "india" },
  { code: "pa", name: "ਪੰਜਾਬੀ", enName: "Punjabi", flag: "👳", group: "india" },
  { code: "ur", name: "اردو", enName: "Urdu", flag: "🕌", group: "india", rtl: true },
  { code: "gu", name: "ગુજરાતી", enName: "Gujarati", flag: "🦁", group: "india" },
  { code: "mr", name: "मराठी", enName: "Marathi", flag: "🚩", group: "india" },

  // International Medical Tourism Languages
  { code: "en", name: "English", enName: "English", flag: "🇬🇧", group: "global" },
  { code: "ar", name: "العربية", enName: "Arabic", flag: "🇸🇦", group: "global", rtl: true },
  { code: "ru", name: "Русский", enName: "Russian", flag: "🇷🇺", group: "global" },
  { code: "sw", name: "Kiswahili", enName: "Swahili", flag: "🇰🇪", group: "global" },
  { code: "fr", name: "Français", enName: "French", flag: "🇫🇷", group: "global" },
  { code: "fa", name: "فارسی", enName: "Persian", flag: "🇦🇫", group: "global", rtl: true },
  { code: "ne", name: "नेपाली", enName: "Nepali", flag: "🇳🇵", group: "global" }
];

export const TRANSLATIONS = {
  hi: {
    // Navigation & Header
    "Book Appointment": "अपॉइंटमेंट बुक करें",
    "Book OPD": "ओपीडी बुक करें",
    "About": "परिचय",
    "About & Hospital": "डॉक्टर व अस्पताल",
    "Conditions": "बीमारियां",
    "Conditions We Treat": "इलाज की जाने वाली बीमारियां",
    "Specialities": "विशेषताएं",
    "Specialities & Surgeries": "विशेषताएं व सर्जरी",
    "Surgery Costs": "सर्जरी खर्च",
    "Centers & Clinics": "सेंटर व क्लिनिक",
    "Centers": "सेंटर",
    "Health Articles": "स्वास्थ्य लेख",
    "Articles": "लेख",
    "Contact": "संपर्क करें",
    "Call Doctor": "डॉक्टर को कॉल करें",
    "Call Hospital": "अस्पताल को कॉल करें",
    "Senior Consultant": "सीनियर कंसल्टेंट ईएनटी सर्जन",
    "25+ Years Experience": "25+ वर्षों का अनुभव",
    "Same-Day OPD Available": "आज ही ओपीडी परामर्श उपलब्ध",
    "OPD Open": "ओपीडी खुली है",
    "Select Language": "भाषा चुनें",
    "100% Cashless Mediclaim": "100% कैशलेस मेडिक्लेम",
    "All TPAs": "सभी टीपीए मान्य",

    // Department Cards & Hero
    "Our ENT Departments": "हमारे ईएनटी विभाग",
    "Advanced ENT treatment and specialized care in Delhi NCR.": "दिल्ली-एनसीआर में आधुनिक ईएनटी उपचार व विशेषज्ञ परामर्श।",
    "Otology Clinic": "ओटोलॉजी क्लिनिक (कान की देखभाल)",
    "Complete ear care for hearing loss, ear infections, tinnitus, eardrum problems, and other ear-related conditions.": "कम सुनाई देना, कान में दर्द व इन्फेक्शन, घंटी बजना और कान के पर्दे के छेद का संपूर्ण इलाज।",
    "Cochlear Implant": "कोक्लियर इम्प्लांट",
    "Advanced cochlear implant evaluation and surgical care for suitable patients with severe to profound hearing loss.": "गंभीर बहरेपन से पीड़ित बच्चों व वयस्कों के लिए आधुनिक कोक्लियर इम्प्लांट सर्जरी व पुनर्वास।",
    "Skull Base Unit": "स्कल बेस यूनिट",
    "Specialized surgical management of complex skull base conditions using advanced and minimally invasive techniques.": "आधुनिक 4K एंडोस्कोपी द्वारा जटिल स्कल बेस व मस्तिष्क के आधार की मिनिमली इनवेसिव सर्जरी।",
    "Allergy Clinic": "एलर्जी क्लिनिक",
    "Expert diagnosis and treatment for allergies affecting the nose, throat, ears, and respiratory system, helping you breathe and feel better.": "नाक, गले और सांस की पुरानी एलर्जी व छींकों का सटीक डायग्नोसिस व इलाज।",
    "Rhinology Clinic": "राइनोलॉजी क्लिनिक (नाक व साइनस)",
    "Comprehensive care for sinus problems, nasal blockage, allergies, nasal polyps, and other nose and sinus conditions.": "साइनस, नाक बंद, एलर्जी और नाक के पॉलिप्स का आधुनिक एंडोस्कोपिक समाधान।",
    "Vertigo Clinic": "वर्टिगो व चक्कर क्लिनिक",
    "Specialized evaluation and treatment for vertigo, dizziness, balance disorders, and related inner-ear conditions.": "चक्कर आना, असंतुलन और अंदरूनी कान की समस्याओं का आधुनिक इलाज।",
    "Explore Department": "विभाग देखें",
    "View All ENT Specialities": "सभी ईएनटी विशेषताएं देखें",

    // Doctor & Bio Section
    "SENIOR ENT CONSULTANT & HEAD-NECK SURGEON": "सीनियर ईएनटी कंसल्टेंट एवं हेड-नेक सर्जन",
    "Meet Dr. (Prof.) Dhirendra Singh Kushwah": "मिलिए डॉ. (प्रो.) धीरेंद्र सिंह कुशवाह से",
    "Chief Consultant ENT Surgeon in Delhi NCR": "दिल्ली एनसीआर में प्रमुख ईएनटी सर्जन",
    "Over 15,000+ Completed Micro-Surgical & Endoscopic Procedures": "15,000+ सफल माइक्रो-सर्जिकल एवं एंडोस्कोपिक सर्जरी संपन्न",
    "MBBS · MS (Otorhinolaryngology) · Cochlear Implants · Endoscopic Sinus Surgery · Packless Septoplasty · Vertigo Clinic": "एमबीबीएस · एमएस (ईएनटी) · कोक्लियर इम्प्लांट्स · एंडोस्कोपिक साइनस सर्जरी · बिना पट्टी सेप्टोप्लास्टी",

    // Conditions Page (Nose & Sinus)
    "Best Nose and Sinus Surgeon in Delhi – Dr. Dhirendra Singh Kushwah": "दिल्ली में नाक व साइनस के सर्वश्रेष्ठ सर्जन – डॉ. धीरेंद्र सिंह कुशवाह",
    "Living with constant nasal blockage, recurrent sinusitis, headache, or breathing obstruction severely compromises your sleep and daily well-being. Dr. Dhirendra Singh Kushwah provides modern medical and minimally invasive endoscopic treatments.": "लगातार नाक बंद रहना, बार-बार साइनस का सिरदर्द और सांस लेने में रुकावट आपकी नींद और स्वास्थ्य को प्रभावित करती है। डॉ. कुशवाह आधुनिक एवं दर्द-रहित एंडोस्कोपिक उपचार प्रदान करते हैं।",
    "From advanced Functional Endoscopic Sinus Surgery (FESS) to packless septoplasty and turbinoplasty, our procedures clear nasal passages and restore healthy sinus drainage without painful packing or facial scars.": "एडवांस्ड FESS से लेकर बिना पट्टी वाली सेप्टोप्लास्टी (पैकलेस) तक, हमारी प्रक्रियाएं बिना दर्द और बिना किसी चेहरे के निशान के नाक को पूरी तरह खोलती हैं।",
    "Daycare Micro-FESS • Fast Recovery • Cashless TPA Accepted": "डेकेयर माइक्रो-FESS • त्वरित रिकवरी • कैशलेस टीपीए स्वीकृत",
    "HD Endoscopy & FESS": "एचडी एंडोस्कोपी एवं FESS",
    "MS (ENT) Specialist": "एमएस (ईएनटी) विशेषज्ञ",
    "Years Experience +25": "25+ वर्षों का अनुभव",
    "Call: +91-9311449825": "कॉल करें: +91-9311449825",

    // Appointment Form
    "Quick & easy booking": "त्वरित एवं आसान अपॉइंटमेंट बुकिंग",
    "Patient Name": "मरीज का नाम",
    "Phone Number": "मोबाइल नंबर",
    "Email (optional)": "ईमेल (वैकल्पिक)",
    "City": "शहर / राज्य",
    "Select Department": "विभाग चुनें",
    "Schedule Consultation": "परामर्श बुक करें",
    "Book on WhatsApp": "व्हाट्सएप पर संपर्क करें"
  },
  gu: {
    // Navigation & Header
    "Book Appointment": "એપોઇન્ટમેન્ટ બુક કરો",
    "Book OPD": "ઓપીડી બુક કરો",
    "About": "અમારા વિશે",
    "About & Hospital": "ડોક્ટર અને હોસ્પિટલ",
    "Conditions": "રોગો",
    "Conditions We Treat": "સારવાર યોગ્ય રોગો",
    "Specialities": "વિશેષતાઓ",
    "Specialities & Surgeries": "વિશેષતાઓ અને સર્જરી",
    "Surgery Costs": "સર્જરી ખર્ચ",
    "Centers & Clinics": "સેન્ટર અને ક્લિનિક",
    "Centers": "સેન્ટર્સ",
    "Health Articles": "આરોગ્ય લેખો",
    "Articles": "લેખો",
    "Contact": "સંપર્ક કરો",
    "Call Doctor": "ડોક્ટરને કૉલ કરો",
    "Call Hospital": "હોસ્પિટલ કૉલ કરો",
    "Senior Consultant": "સિનિયર ઇએનટી સર્જન",
    "25+ Years Experience": "૨૫+ વર્ષનો અનુભવ",
    "Same-Day OPD Available": "આજે જ ઓપીડી પરામર્શ",
    "OPD Open": "ઓપીડી ખુલ્લી છે",
    "Select Language": "ભાષા પસંદ કરો",
    "100% Cashless Mediclaim": "૧૦૦% કેશલેસ મેડિકલેમ",
    "All TPAs": "તમામ ટીપીએ માન્ય",

    // Department Cards & Hero
    "Our ENT Departments": "અમારા ઇએનટી વિભાગો",
    "Advanced ENT treatment and specialized care in Delhi NCR.": "દિલ્હી એનસીઆરમાં અદ્યતન ઇએનટી સારવાર અને વિશિષ્ટ સંભાળ.",
    "Otology Clinic": "ઓટોલોજી ક્લિનિક (કાનની સંભાળ)",
    "Complete ear care for hearing loss, ear infections, tinnitus, eardrum problems, and other ear-related conditions.": "ઓછું સંભળાવું, કાનનો ચેપ, રિંગિંગ અવાજ અને કાનના પડદાની સમસ્યાઓ માટે સંપૂર્ણ કાનની સારવાર.",
    "Cochlear Implant": "કોક્લિયર ઇમ્પ્લાન્ટ",
    "Advanced cochlear implant evaluation and surgical care for suitable patients with severe to profound hearing loss.": "તીવ્ર બહેરાશ ધરાવતા દર્દીઓ માટે અદ્યતન કોક્લિયર ઇમ્પ્લાન્ટ મૂલ્યાંકન અને સર્જરી.",
    "Skull Base Unit": "સ્કુલ બેઝ યુનિટ",
    "Specialized surgical management of complex skull base conditions using advanced and minimally invasive techniques.": "અદ્યતન તકનીકો દ્વારા જટિલ સ્કુલ બેઝ પરિસ્થિતિઓનું વિશિષ્ટ સર્જિકલ સંચાલન.",
    "Allergy Clinic": "એલર્જી ક્લિનિક",
    "Expert diagnosis and treatment for allergies affecting the nose, throat, ears, and respiratory system, helping you breathe and feel better.": "નાક, ગળું અને કાનની એલર્જી માટે નિષ્ણાત નિદાન અને સારવાર.",
    "Rhinology Clinic": "રાયનોલોજી ક્લિનિક (નાક અને સાઇનસ)",
    "Comprehensive care for sinus problems, nasal blockage, allergies, nasal polyps, and other nose and sinus conditions.": "સાઇનસ, નાક બંધ અને એલર્જી માટે વ્યાપક એન્ડોસ્કોપિક સંભાળ.",
    "Vertigo Clinic": "વર્ટિગો ક્લિનિક (ચક્કરની સારવાર)",
    "Specialized evaluation and treatment for vertigo, dizziness, balance disorders, and related inner-ear conditions.": "ચક્કર અને સંતુલન વિકૃતિઓ માટે વિશેષ મૂલ્યાંકન અને સારવાર.",
    "Explore Department": "વિભાગ જુઓ",
    "View All ENT Specialities": "બધી ઇએનટી વિશેષતાઓ જુઓ",

    // Doctor & Bio Section
    "SENIOR ENT CONSULTANT & HEAD-NECK SURGEON": "સિનિયર ઇએનટી કન્સલ્ટન્ટ અને હેડ-નેક સર્જન",
    "Meet Dr. (Prof.) Dhirendra Singh Kushwah": "મળો ડૉ. (પ્રો.) ધીરેન્દ્ર સિંહ કુશવાહને",
    "Chief Consultant ENT Surgeon in Delhi NCR": "દિલ્હી એનસીઆરમાં મુખ્ય ઇએનટી સર્જન",
    "Over 15,000+ Completed Micro-Surgical & Endoscopic Procedures": "૧૫,૦૦૦+ થી વધુ સફળ સર્જરી પૂર્ણ",

    // Conditions Page (Nose & Sinus)
    "Best Nose and Sinus Surgeon in Delhi – Dr. Dhirendra Singh Kushwah": "દિલ્હીમાં શ્રેષ્ઠ નાક અને સાઇનસ સર્જન – ડૉ. ધીરેન્દ્ર સિંહ કુશવાહ",
    "Living with constant nasal blockage, recurrent sinusitis, headache, or breathing obstruction severely compromises your sleep and daily well-being. Dr. Dhirendra Singh Kushwah provides modern medical and minimally invasive endoscopic treatments.": "સતત નાક બંધ રહેવું અને સાઇનસનો દુખાવો તમારી ઊંઘ પર અસર કરે છે. ડૉ. કુશવાહ પીડારહિત આધુનિક સારવાર પૂરી પાડે છે.",
    "From advanced Functional Endoscopic Sinus Surgery (FESS) to packless septoplasty and turbinoplasty, our procedures clear nasal passages and restore healthy sinus drainage without painful packing or facial scars.": "એડવાન્સ્ડ FESS થી પેકલેસ સેપ્ટોપ્લાસ્ટી સુધી, અમારી સર્જરી પીડા વગર નાકને સંપૂર્ણ ખુલ્લું કરે છે.",
    "Daycare Micro-FESS • Fast Recovery • Cashless TPA Accepted": "ડેકેર માઇક્રો-FESS • ઝડપી પુનઃપ્રાપ્તિ • કેશલેસ TPA માન્ય",
    "HD Endoscopy & FESS": "એચડી એન્ડોસ્કોપી અને FESS",
    "MS (ENT) Specialist": "એમએસ (ઈએનટી) નિષ્ણાત",
    "Years Experience +25": "૨૫+ વર્ષનો અનુભવ",
    "Call: +91-9311449825": "કૉલ કરો: +91-9311449825",

    // Appointment Form
    "Quick & easy booking": "ઝડપી અને સરળ બુકિંગ",
    "Patient Name": "દર્દીનું નામ",
    "Phone Number": "ફોન નંબર",
    "Email (optional)": "ઇમેઇલ (વૈકલ્પિક)",
    "City": "શહેર",
    "Select Department": "વિભાગ પસંદ કરો",
    "Schedule Consultation": "પરામર્શ શેડ્યૂલ કરો",
    "Book on WhatsApp": "વોટ્સએપ પર બુક કરો"
  },
  ur: {
    // Navigation & Header
    "Book Appointment": "ملاقات بک کریں",
    "Book OPD": "او پی ڈی بک کریں",
    "About": "تعارف",
    "About & Hospital": "ڈاکٹر اور ہسپتال",
    "Conditions": "بیماریاں",
    "Conditions We Treat": "قابل علاج امراض",
    "Specialities": "خصوصیات",
    "Specialities & Surgeries": "خصوصیات اور سرجری",
    "Surgery Costs": "سرجری کے اخراجات",
    "Centers & Clinics": "مراکز اور کلینک",
    "Centers": "مراکز",
    "Health Articles": "صحت کے مضامین",
    "Articles": "مضامین",
    "Contact": "رابطہ کریں",
    "Call Doctor": "ڈاکٹر کو کال کریں",
    "Call Hospital": "ہسپتال کال کریں",
    "Senior Consultant": "سینیئر ای این ٹی سرجن",
    "25+ Years Experience": "25+ سال کا تجربہ",
    "Same-Day OPD Available": "آج ہی او پی ڈی دستیاب",
    "OPD Open": "او پی ڈی کھلی ہے",
    "Select Language": "زبان منتخب کریں",
    "100% Cashless Mediclaim": "100٪ کیش لیس میڈیکلیم",
    "All TPAs": "تمام ٹی پی اے منظور شدہ",

    // Department Cards & Hero
    "Our ENT Departments": "ہمارے ای این ٹی شعبہ جات",
    "Advanced ENT treatment and specialized care in Delhi NCR.": "دہلی این سی آر میں جدید ای این ٹی علاج اور خصوصی نگہداشت۔",
    "Otology Clinic": "اوٹولوجی کلینک (کان کی نگہداشت)",
    "Complete ear care for hearing loss, ear infections, tinnitus, eardrum problems, and other ear-related conditions.": "سماعت کی کمی، کان کے انفیکشن، سنسناہٹ اور کان کے پردے کے امراض کا مکمل علاج۔",
    "Cochlear Implant": "کوکلیئر امپلانٹ",
    "Advanced cochlear implant evaluation and surgical care for suitable patients with severe to profound hearing loss.": "شدید بہرے پن کے شکار مریضوں کے لیے جدید کوکلیئر امپلانٹ سرجری۔",
    "Skull Base Unit": "اسکل بیس یونٹ",
    "Specialized surgical management of complex skull base conditions using advanced and minimally invasive techniques.": "جدید تکنیکوں کے ذریعے سر کی ہڈی اور اسکل بیس امراض کی خصوصی سرجری۔",
    "Allergy Clinic": "الرجی کلینک",
    "Expert diagnosis and treatment for allergies affecting the nose, throat, ears, and respiratory system, helping you breathe and feel better.": "ناک، گلے اور سانس کی نالی کی الرجی کی ماہرانہ تشخیص اور علاج۔",
    "Rhinology Clinic": "رائنولوجی کلینک (ناک اور سائنس)",
    "Comprehensive care for sinus problems, nasal blockage, allergies, nasal polyps, and other nose and sinus conditions.": "سائنس، بند ناک اور ناک کے غدود کا جدید اینڈوسکوپک علاج۔",
    "Vertigo Clinic": "ورٹائگو کلینک (چکر کا علاج)",
    "Specialized evaluation and treatment for vertigo, dizziness, balance disorders, and related inner-ear conditions.": "چکر آنے اور توازن کے مسائل کا خصوصی علاج۔",
    "Explore Department": "شعبہ دیکھیں",
    "View All ENT Specialities": "تمام ای این ٹی خصوصیات دیکھیں",

    // Doctor & Bio Section
    "SENIOR ENT CONSULTANT & HEAD-NECK SURGEON": "سینیئر ای این ٹی کنسلٹنٹ اور ہیڈ اینڈ نیک سرجن",
    "Meet Dr. (Prof.) Dhirendra Singh Kushwah": "ڈاکٹر (پروفیسر) دھیریندر سنگھ کشواہا سے ملیں",
    "Chief Consultant ENT Surgeon in Delhi NCR": "دہلی این سی آر کے چیف کنسلٹنٹ ای این ٹی سرجن",
    "Over 15,000+ Completed Micro-Surgical & Endoscopic Procedures": "15,000+ سے زائد کامیاب سرجریز مکمل",

    // Conditions Page (Nose & Sinus)
    "Best Nose and Sinus Surgeon in Delhi – Dr. Dhirendra Singh Kushwah": "دہلی کے بہترین ناک اور سائنس سرجن – ڈاکٹر دھیریندر سنگھ کشواہا",
    "Living with constant nasal blockage, recurrent sinusitis, headache, or breathing obstruction severely compromises your sleep and daily well-being. Dr. Dhirendra Singh Kushwah provides modern medical and minimally invasive endoscopic treatments.": "مسلسل ناک بند رہنا اور سائنس کا درد آپ کی نیند اور صحت کو متاثر کرتا ہے۔ ڈاکٹر کشواہا درد کے بغیر جدید علاج فراہم کرتے ہیں۔",
    "From advanced Functional Endoscopic Sinus Surgery (FESS) to packless septoplasty and turbinoplasty, our procedures clear nasal passages and restore healthy sinus drainage without painful packing or facial scars.": "ایڈوانسڈ FESS سے لے کر بغیر پٹی کی سیپٹوپلاسٹی تک، ہمارے طریقہ کار بغیر درد کے ناک کو مکمل طور پر کھولتے ہیں۔",
    "Daycare Micro-FESS • Fast Recovery • Cashless TPA Accepted": "ڈے کیئر مائیکرو-FESS • تیز رفتار بحالی • کیش لیس ٹی پی اے قبول",
    "HD Endoscopy & FESS": "ایچ ڈی اینڈوسکوپی اور FESS",
    "MS (ENT) Specialist": "ایم ایس (ای این ٹی) اسپیشلسٹ",
    "Years Experience +25": "25+ سال کا تجربہ",
    "Call: +91-9311449825": "کال کریں: +91-9311449825",

    // Appointment Form
    "Quick & easy booking": "فوری اور آسان بکنگ",
    "Patient Name": "مریض کا نام",
    "Phone Number": "فون نمبر",
    "Email (optional)": "ای میل (اختیاری)",
    "City": "شہر",
    "Select Department": "شعبہ منتخب کریں",
    "Schedule Consultation": "مشورہ بک کریں",
    "Book on WhatsApp": "واٹس ایپ پر بک کریں"
  },
  ar: {
    // Navigation & Header
    "Book Appointment": "احجز موعداً",
    "Book OPD": "احجز العيادة",
    "About": "عن المركز",
    "About & Hospital": "عن الطبيب والمستشفى",
    "Conditions": "الحالات المرضية",
    "Conditions We Treat": "الحالات التي نعالجها",
    "Specialities": "التخصصات",
    "Specialities & Surgeries": "التخصصات والعمليات",
    "Surgery Costs": "تكاليف العمليات",
    "Centers & Clinics": "المراكز والعيادات",
    "Centers": "المراكز",
    "Health Articles": "مقالات صحية",
    "Articles": "المقالات",
    "Contact": "اتصل بنا",
    "Call Doctor": "اتصل بالطبيب",
    "Call Hospital": "اتصل بالمستشفى",
    "Senior Consultant": "استشاري أول جراحة الأنف والأذن والحنجرة",
    "25+ Years Experience": "أكثر من 25 عاماً من الخبرة",
    "Same-Day OPD Available": "مواعيد متاحة في نفس اليوم",
    "OPD Open": "العيادات مفتوحة",
    "Select Language": "اختر اللغة",
    "100% Cashless Mediclaim": "تأمين طبي غير نقدي 100%",
    "All TPAs": "جميع شركات التأمين مقبولة",

    // Department Cards & Hero
    "Our ENT Departments": "أقسام الأنف والأذن والحنجرة لدينا",
    "Advanced ENT treatment and specialized care in Delhi NCR.": "علاج متقدم ورعاية متخصصة في دلهي وضواحيها.",
    "Otology Clinic": "عيادة طب الأذن (رعاية السمع)",
    "Complete ear care for hearing loss, ear infections, tinnitus, eardrum problems, and other ear-related conditions.": "رعاية شاملة لفقدان السمع، التهابات الأذن، الطنين، ومشاكل طبلة الأذن.",
    "Cochlear Implant": "زراعة القوقعة",
    "Advanced cochlear implant evaluation and surgical care for suitable patients with severe to profound hearing loss.": "تقييم متقدم وجراحة زراعة القوقعة لمرضى ضعف السمع الشديد.",
    "Skull Base Unit": "وحدة قاع الجمجمة",
    "Specialized surgical management of complex skull base conditions using advanced and minimally invasive techniques.": "إدارة جراحية متخصصة لحالات قاع الجمجمة المعقدة بتقنيات المنظار الدقيقة.",
    "Allergy Clinic": "عيادة الحساسية",
    "Expert diagnosis and treatment for allergies affecting the nose, throat, ears, and respiratory system, helping you breathe and feel better.": "تشخيص وعلاج متخصص لحساسية الأنف والحلق ومجرى التنفس.",
    "Rhinology Clinic": "عيادة الأنف والجيوب الأنفية",
    "Comprehensive care for sinus problems, nasal blockage, allergies, nasal polyps, and other nose and sinus conditions.": "رعاية شاملة لمشاكل الجيوب الأنفية، انسداد الأنف واللحميات بالمنظار.",
    "Vertigo Clinic": "عيادة الدوار والتوازن",
    "Specialized evaluation and treatment for vertigo, dizziness, balance disorders, and related inner-ear conditions.": "تشخيص وعلاج متخصص للدوار والدوخة واضطرابات التوازن في الأذن الداخلية.",
    "Explore Department": "استكشف القسم",
    "View All ENT Specialities": "عرض جميع التخصصات",

    // Doctor & Bio Section
    "SENIOR ENT CONSULTANT & HEAD-NECK SURGEON": "استشاري أول أنف وأذن وحنجرة وجراحة الرأس والرقبة",
    "Meet Dr. (Prof.) Dhirendra Singh Kushwah": "تعرف على الدكتور (البروفيسور) ديريندارا سينغ كوشواه",
    "Chief Consultant ENT Surgeon in Delhi NCR": "كبير جراحي الأنف والأذن والحنجرة في دلهي",
    "Over 15,000+ Completed Micro-Surgical & Endoscopic Procedures": "أكثر من 15,000 عملية مجهرية وبالمنظار ناجحة",

    // Conditions Page (Nose & Sinus)
    "Best Nose and Sinus Surgeon in Delhi – Dr. Dhirendra Singh Kushwah": "أفضل جراح أنف وجيوب أنفية في دلهي – د. ديريندارا سينغ كوشواه",
    "Living with constant nasal blockage, recurrent sinusitis, headache, or breathing obstruction severely compromises your sleep and daily well-being. Dr. Dhirendra Singh Kushwah provides modern medical and minimally invasive endoscopic treatments.": "انسداد الأنف المستمر وصداع الجيوب الأنفية يؤثران بشدة على نومك وصحتك. يقدم الدكتور كوشواه علاجات حديثة بالمنظار بدون ألم.",
    "From advanced Functional Endoscopic Sinus Surgery (FESS) to packless septoplasty and turbinoplasty, our procedures clear nasal passages and restore healthy sinus drainage without painful packing or facial scars.": "من جراحة الجيوب الأنفية بالمنظار (FESS) إلى تعديل الحاجز الأنفي بدون حشوات مؤلمة، إجراءاتنا تفتح التنفس تماماً وبدون ندبات.",
    "Daycare Micro-FESS • Fast Recovery • Cashless TPA Accepted": "جراحة اليوم الواحد FESS • تعافي سريع • قبول التأمين الطبي",
    "HD Endoscopy & FESS": "مناظير عالية الدقة و FESS",
    "MS (ENT) Specialist": "أخصائي جراحة الأنف والأذن والحنجرة",
    "Years Experience +25": "أكثر من 25 عاماً من الخبرة",
    "Call: +91-9311449825": "اتصل: +91-9311449825",

    // Appointment Form
    "Quick & easy booking": "حجز سريع وسهل",
    "Patient Name": "اسم المريض",
    "Phone Number": "رقم الهاتف",
    "Email (optional)": "البريد الإلكتروني (اختياري)",
    "City": "المدينة / الدولة",
    "Select Department": "اختر القسم",
    "Schedule Consultation": "احجز الاستشارة",
    "Book on WhatsApp": "تواصل عبر واتساب"
  },
  bn: {
    "Book Appointment": "অ্যাপয়েন্টমেন্ট বুক করুন",
    "Book OPD": "ওপিডি বুক করুন",
    "About": "আমাদের সম্পর্কে",
    "About & Hospital": "ডাক্তার ও হাসপাতাল",
    "Conditions": "রোগের বিবরণ",
    "Conditions We Treat": "যেসব রোগের চিকিৎসা করি",
    "Specialities": "বিশেষত্ব",
    "Specialities & Surgeries": "বিশেষত্ব ও সার্জারি",
    "Surgery Costs": "সার্জারির খরচ",
    "Centers & Clinics": "কেন্দ্র ও ক্লিনিক",
    "Centers": "কেন্দ্রসমূহ",
    "Health Articles": "স্বাস্থ্য নিবন্ধ",
    "Articles": "নিবন্ধ",
    "Contact": "যোগাযোগ",
    "Call Doctor": "ডাক্তারকে কল করুন",
    "Call Hospital": "হাসপাতালে কল করুন",
    "Senior Consultant": "সিনিয়র ইএনটি বিশেষজ্ঞ",
    "25+ Years Experience": "২৫+ বছরের অভিজ্ঞতা",
    "Same-Day OPD Available": "একই দিনে ওপিডি পরামর্শ",
    "OPD Open": "ওপিডি খোলা আছে",
    "Select Language": "ভাষা নির্বাচন করুন",
    "100% Cashless Mediclaim": "১০০% ক্যাশলেস মেডিক্লেম",
    "All TPAs": "সকল টিপিএ অনুমোদিত",
    "Our ENT Departments": "আমাদের ইএনটি বিভাগসমূহ",
    "Advanced ENT treatment and specialized care in Delhi NCR.": "দিল্লি এনসিআরে উন্নত ইএনটি চিকিৎসা ও বিশেষ সেবা।",
    "Otology Clinic": "অটোলজি ক্লিনিক (কানের যত্ন)",
    "Complete ear care for hearing loss, ear infections, tinnitus, eardrum problems, and other ear-related conditions.": "শ্রবণ হ্রাস, কানের সংক্রমণ, টিনিটাস ও কানের পর্দার সমস্যার সম্পূর্ণ চিকিৎসা।",
    "Cochlear Implant": "ককলিয়ার ইমপ্লান্ট",
    "Advanced cochlear implant evaluation and surgical care for suitable patients with severe to profound hearing loss.": "তীব্র বধিরতায় আক্রান্ত রোগীদের জন্য উন্নত ককলিয়ার ইমপ্লান্ট সার্জারি।",
    "Skull Base Unit": "স্কাল বেস ইউনিট",
    "Specialized surgical management of complex skull base conditions using advanced and minimally invasive techniques.": "উন্নত ও ন্যূনতম আক্রমণাত্মক প্রযুক্তির মাধ্যমে স্কাল বেসের সার্জারি।",
    "Explore Department": "বিভাগ দেখুন",
    "View All ENT Specialities": "সকল ইএনটি বিশেষত্ব দেখুন",
    "SENIOR ENT CONSULTANT & HEAD-NECK SURGEON": "সিনিয়র ইএনটি কনসালট্যান্ট ও হেড-নেক সার্জন",
    "Meet Dr. (Prof.) Dhirendra Singh Kushwah": "ড. (অধ্যাপক) ধীরেন্দ্র সিং কুশওয়াহার সাথে পরিচিত হন",
    "Chief Consultant ENT Surgeon in Delhi NCR": "দিল্লি এনসিআরের প্রধান ইএনটি সার্জন",
    "Over 15,000+ Completed Micro-Surgical & Endoscopic Procedures": "১৫,০০০+ সফল মাইক্রো-সার্জারি সম্পন্ন",
    "Best Nose and Sinus Surgeon in Delhi – Dr. Dhirendra Singh Kushwah": "দিল্লির সেরা নাক ও সাইনাস সার্জন – ড. ধীরেন্দ্র সিং কুশওয়াহা",
    "HD Endoscopy & FESS": "এইচডি এন্ডোস্কোপি ও FESS",
    "MS (ENT) Specialist": "এমএস (ইএনটি) বিশেষজ্ঞ",
    "Years Experience +25": "২৫+ বছরের অভিজ্ঞতা",
    "Call: +91-9311449825": "কল করুন: +91-9311449825",
    "Quick & easy booking": "সহজ ও দ্রুত বুকিং",
    "Patient Name": "রোগীর নাম",
    "Phone Number": "ফোন নম্বর",
    "Email (optional)": "ইমেল (ঐচ্ছিক)",
    "City": "শহর",
    "Select Department": "বিভাগ নির্বাচন করুন",
    "Schedule Consultation": "পরামর্শ বুক করুন",
    "Book on WhatsApp": "হোয়াটসঅ্যাপে যোগাযোগ করুন"
  },
  pa: {
    "Book Appointment": "ਅਪੌਇੰਟਮੈਂਟ ਬੁੱਕ ਕਰੋ",
    "Book OPD": "ਓਪੀਡੀ ਬੁੱਕ ਕਰੋ",
    "About": "ਸਾਡੇ ਬਾਰੇ",
    "About & Hospital": "ਡਾਕਟਰ ਅਤੇ ਹਸਪਤਾਲ",
    "Conditions": "ਬਿਮਾਰੀਆਂ",
    "Conditions We Treat": "ਇਲਾਜ ਯੋਗ ਬਿਮਾਰੀਆਂ",
    "Specialities": "ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ",
    "Specialities & Surgeries": "ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਤੇ ਸਰਜਰੀ",
    "Surgery Costs": "ਸਰਜਰੀ ਦਾ ਖਰਚਾ",
    "Centers & Clinics": "ਸੈਂਟਰ ਤੇ ਕਲੀਨਿਕ",
    "Centers": "ਸੈਂਟਰ",
    "Health Articles": "ਸਿਹਤ ਲੇਖ",
    "Articles": "ਲੇਖ",
    "Contact": "ਸੰਪਰਕ ਕਰੋ",
    "Call Doctor": "ਡਾਕਟਰ ਨੂੰ ਕਾਲ ਕਰੋ",
    "Call Hospital": "ਹਸਪਤਾਲ ਕਾਲ ਕਰੋ",
    "Senior Consultant": "ਸੀਨੀਅਰ ਈਐਨਟੀ ਮਾਹਿਰ",
    "25+ Years Experience": "25+ ਸਾਲਾਂ ਦਾ ਤਜਰਬਾ",
    "Same-Day OPD Available": "ਅੱਜ ਹੀ ਓਪੀਡੀ ਉਪਲਬਧ",
    "OPD Open": "ਓਪੀਡੀ ਖੁੱਲ੍ਹੀ ਹੈ",
    "Select Language": "ਭਾਸ਼ਾ ਚੁਣੋ",
    "100% Cashless Mediclaim": "100% ਕੈਸ਼ਲੈੱਸ ਮੈਡੀਕਲੇਮ",
    "All TPAs": "ਸਾਰੇ ਟੀਪੀਏ ਮਾਨਤਾ ਪ੍ਰਾਪਤ",
    "Our ENT Departments": "ਸਾਡੇ ਈਐਨਟੀ ਵਿਭਾਗ",
    "Otology Clinic": "ਓਟੋਲੋਜੀ ਕਲੀਨਿਕ (ਕੰਨਾਂ ਦੀ ਦੇਖਭਾਲ)",
    "Complete ear care for hearing loss, ear infections, tinnitus, eardrum problems, and other ear-related conditions.": "ਸੁਣਨ ਦੀ ਕਮੀ, ਕੰਨ ਦੇ ਇਨਫੈਕਸ਼ਨ ਅਤੇ ਕੰਨ ਦੇ ਪਰਦੇ ਦੇ ਨੁਕਸ ਦਾ ਪੂਰਾ ਇਲਾਜ।",
    "Cochlear Implant": "ਕੋਕਲੀਅਰ ਇਮਪਲਾਂਟ",
    "Skull Base Unit": "ਸਕੱਲ ਬੇਸ ਯੂਨਿਟ",
    "Explore Department": "ਵਿਭਾਗ ਵੇਖੋ",
    "View All ENT Specialities": "ਸਾਰੀਆਂ ਈਐਨਟੀ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਵੇਖੋ",
    "SENIOR ENT CONSULTANT & HEAD-NECK SURGEON": "ਸੀਨੀਅਰ ਈਐਨਟੀ ਸਰਜਨ",
    "Meet Dr. (Prof.) Dhirendra Singh Kushwah": "ਡਾ. (ਪ੍ਰੋ.) ਧੀਰੇਂਦਰ ਸਿੰਘ ਕੁਸ਼ਵਾਹਾ ਨੂੰ ਮਿਲੋ",
    "Chief Consultant ENT Surgeon in Delhi NCR": "ਦਿੱਲੀ ਐਨਸੀਆਰ ਵਿੱਚ ਮੁੱਖ ਈਐਨਟੀ ਸਰਜਨ",
    "Over 15,000+ Completed Micro-Surgical & Endoscopic Procedures": "15,000+ ਸਫਲ ਸਰਜਰੀਆਂ ਸੰਪੰਨ",
    "Best Nose and Sinus Surgeon in Delhi – Dr. Dhirendra Singh Kushwah": "ਦਿੱਲੀ ਦੇ ਸਰਵੋਤਮ ਨੱਕ ਅਤੇ ਸਾਈਨਸ ਸਰਜਨ – ਡਾ. ਧੀਰੇਂਦਰ ਸਿੰਘ ਕੁਸ਼ਵਾਹਾ",
    "HD Endoscopy & FESS": "ਐਚਡੀ ਐਂਡੋਸਕੋਪੀ ਅਤੇ FESS",
    "MS (ENT) Specialist": "ਐਮਐਸ (ਈਐਨਟੀ) ਮਾਹਿਰ",
    "Years Experience +25": "25+ ਸਾਲਾਂ ਦਾ ਤਜਰਬਾ",
    "Call: +91-9311449825": "ਕਾਲ ਕਰੋ: +91-9311449825",
    "Quick & easy booking": "ਤੇਜ਼ ਅਤੇ ਆਸਾਨ ਬੁਕਿੰਗ",
    "Patient Name": "ਮਰੀਜ਼ ਦਾ ਨਾਮ",
    "Phone Number": "ਫ਼ੋਨ ਨੰਬਰ",
    "Email (optional)": "ਈਮੇਲ (ਵਿਕਲਪਿਕ)",
    "City": "ਸ਼ਹਿਰ",
    "Select Department": "ਵਿਭਾਗ ਚੁਣੋ",
    "Schedule Consultation": "ਸਲਾਹ ਬੁੱਕ ਕਰੋ",
    "Book on WhatsApp": "ਵਟਸਐਪ 'ਤੇ ਬੁੱਕ ਕਰੋ"
  },
  mr: {
    "Book Appointment": "अपॉइंटमेंट बुक करा",
    "Book OPD": "ओपीडी बुक करा",
    "About": "आमच्याबद्दल",
    "About & Hospital": "डॉक्टर व रुग्णालय",
    "Conditions": "आजार व लक्षणे",
    "Conditions We Treat": "उपचार केले जाणारे आजार",
    "Specialities": "वैशिष्ट्ये",
    "Specialities & Surgeries": "वैशिष्ट्ये व शस्त्रक्रिया",
    "Surgery Costs": "शस्त्रक्रिया खर्च",
    "Centers & Clinics": "केंद्रे व क्लिनिक",
    "Centers": "केंद्रे",
    "Health Articles": "आरोग्य लेख",
    "Articles": "लेख",
    "Contact": "संपर्क साधा",
    "Call Doctor": "डॉक्टरांना कॉल करा",
    "Call Hospital": "रुग्णालयाला कॉल करा",
    "Senior Consultant": "वरिष्ठ ईएनटी तज्ज्ञ",
    "25+ Years Experience": "२५+ वर्षांचा अनुभव",
    "Same-Day OPD Available": "आजच ओपीडी उपलब्ध",
    "OPD Open": "ओपीडी सुरू आहे",
    "Select Language": "भाषा निवडा",
    "100% Cashless Mediclaim": "१००% कॅशलेस मेडिक्लेम",
    "Our ENT Departments": "आमचे ईएनटी विभाग",
    "Otology Clinic": "ओटोलॉजी क्लिनिक (कानांची काळजी)",
    "Complete ear care for hearing loss, ear infections, tinnitus, eardrum problems, and other ear-related conditions.": "कमी ऐकू येणे, कानाचा संसर्ग आणि कानाच्या पडद्याच्या त्रासावर संपूर्ण उपचार.",
    "Cochlear Implant": "कॉक्लियर इम्प्लांट",
    "Skull Base Unit": "स्कल बेस युनिट",
    "Explore Department": "विभाग पहा",
    "View All ENT Specialities": "सर्व ईएनटी वैशिष्ट्ये पहा",
    "SENIOR ENT CONSULTANT & HEAD-NECK SURGEON": "वरिष्ठ ईएनटी सल्लागार व हेड-नेक सर्जन",
    "Meet Dr. (Prof.) Dhirendra Singh Kushwah": "भेटा डॉ. (प्रा.) धीरेंद्र सिंह कुशवाह यांना",
    "Chief Consultant ENT Surgeon in Delhi NCR": "दिल्ली एनसीआरमधील प्रमुख ईएनटी सर्जन",
    "Over 15,000+ Completed Micro-Surgical & Endoscopic Procedures": "१५,०००+ हून अधिक यशस्वी शस्त्रक्रिया संपन्न",
    "Best Nose and Sinus Surgeon in Delhi – Dr. Dhirendra Singh Kushwah": "दिल्लीतील सर्वोत्तम नाक व सायनस सर्जन – डॉ. धीरेंद्र सिंह कुशवाह",
    "HD Endoscopy & FESS": "एचडी एंडोस्कोपी व FESS",
    "MS (ENT) Specialist": "एमएस (ईएनटी) तज्ज्ञ",
    "Years Experience +25": "२५+ वर्षांचा अनुभव",
    "Call: +91-9311449825": "कॉल करा: +91-9311449825",
    "Quick & easy booking": "जलद व सुलभ बुकिंग",
    "Patient Name": "रुग्णाचे नाव",
    "Phone Number": "फोन नंबर",
    "Email (optional)": "ईमेल (पर्यायी)",
    "City": "शहर",
    "Select Department": "विभाग निवडा",
    "Schedule Consultation": "परामर्श बुक करा",
    "Book on WhatsApp": "व्हॉट्सॲपवर संपर्क साधा"
  },
  ru: {
    "Book Appointment": "Записаться на прием",
    "Book OPD": "Запись на прием",
    "About": "О клинике",
    "About & Hospital": "О докторе и госпитале",
    "Conditions": "Заболевания",
    "Conditions We Treat": "Заболевания, которые мы лечим",
    "Specialities": "Специализации",
    "Specialities & Surgeries": "Специализации и операции",
    "Surgery Costs": "Стоимость операций",
    "Centers & Clinics": "Центры и клиники",
    "Centers": "Центры",
    "Health Articles": "Статьи о здоровье",
    "Articles": "Статьи",
    "Contact": "Контакты",
    "Call Doctor": "Позвонить врачу",
    "Call Hospital": "Позвонить в госпиталь",
    "Senior Consultant": "Ведущий ЛОР-хирург",
    "25+ Years Experience": "Более 25 лет опыта",
    "Same-Day OPD Available": "Прием в день обращения",
    "OPD Open": "Клиника открыта",
    "Select Language": "Выберите язык",
    "Our ENT Departments": "Наши ЛОР-отделения",
    "Otology Clinic": "Клиника отологии (Лечение уха)",
    "Complete ear care for hearing loss, ear infections, tinnitus, eardrum problems, and other ear-related conditions.": "Полное лечение тугоухости, инфекций уха, шума в ушах и перфорации барабанной перепонки.",
    "Cochlear Implant": "Кохлеарная имплантация",
    "Skull Base Unit": "Отделение хирургии основания черепа",
    "Explore Department": "Подробнее об отделении",
    "View All ENT Specialities": "Все специализации ЛОР",
    "SENIOR ENT CONSULTANT & HEAD-NECK SURGEON": "Ведущий ЛОР-хирург и специалист по хирургии головы и шеи",
    "Meet Dr. (Prof.) Dhirendra Singh Kushwah": "Познакомьтесь с доктором (проф.) Дхирендрой Сингхом Кушвахом",
    "Chief Consultant ENT Surgeon in Delhi NCR": "Главный ЛОР-хирург в Дели",
    "Over 15,000+ Completed Micro-Surgical & Endoscopic Procedures": "Более 15 000 успешных микрохирургических и эндоскопических операций",
    "Best Nose and Sinus Surgeon in Delhi – Dr. Dhirendra Singh Kushwah": "Лучший хирург носа и пазух в Дели – доктор Дхирендра Сингх Кушвах",
    "HD Endoscopy & FESS": "HD-эндоскопия и FESS",
    "MS (ENT) Specialist": "Специалист высшей категории",
    "Years Experience +25": "Более 25 лет опыта",
    "Call: +91-9311449825": "Звонок: +91-9311449825",
    "Quick & easy booking": "Быстрая запись на консультацию",
    "Patient Name": "Имя пациента",
    "Phone Number": "Номер телефона",
    "Email (optional)": "Электронная почта",
    "City": "Город / Страна",
    "Select Department": "Выберите отделение",
    "Schedule Consultation": "Записаться на прием",
    "Book on WhatsApp": "Консультация в WhatsApp"
  },
  sw: {
    "Book Appointment": "Weka Miadi",
    "Book OPD": "Weka Miadi ya Kliniki",
    "About": "Kuhusu Sisi",
    "About & Hospital": "Kuhusu Daktari na Hospitali",
    "Conditions": "Magonjwa",
    "Conditions We Treat": "Magonjwa Tunayotibu",
    "Specialities": "Utaalamu",
    "Specialities & Surgeries": "Utaalamu na Upasuaji",
    "Surgery Costs": "Gharama za Upasuaji",
    "Centers & Clinics": "Vituo na Kliniki",
    "Centers": "Vituo",
    "Health Articles": "Makala ya Afya",
    "Articles": "Makala",
    "Contact": "Wasiliana Nasi",
    "Call Doctor": "Piga Simu kwa Daktari",
    "Call Hospital": "Piga Simu Hospitalini",
    "Senior Consultant": "Daktari Bingwa wa Upasuaji wa ENT",
    "25+ Years Experience": "Uzoefu wa Zaidi ya Miaka 25",
    "Same-Day OPD Available": "Huduma ya Siku Hiyo Hiyo",
    "OPD Open": "Kliniki Imefunguliwa",
    "Select Language": "Chagua Lugha",
    "Our ENT Departments": "Idara Zetu za ENT",
    "Otology Clinic": "Kliniki ya Masikio (Otology)",
    "Cochlear Implant": "Upandikizaji wa Cochlea",
    "Skull Base Unit": "Kitengo cha Upasuaji wa Fuvu",
    "Explore Department": "Tazama Idara",
    "View All ENT Specialities": "Tazama Utaalamu Wote wa ENT",
    "Meet Dr. (Prof.) Dhirendra Singh Kushwah": "Kutana na Dkt. (Prof.) Dhirendra Singh Kushwah",
    "Chief Consultant ENT Surgeon in Delhi NCR": "Daktari Mkuu wa Upasuaji wa ENT huko Delhi NCR",
    "Over 15,000+ Completed Micro-Surgical & Endoscopic Procedures": "Zaidi ya Taratibu 15,000+ za Upasuaji Zilizofanikiwa",
    "Best Nose and Sinus Surgeon in Delhi – Dr. Dhirendra Singh Kushwah": "Daktari Bora wa Upasuaji wa Pua na Sinus huko Delhi – Dkt. Kushwah",
    "HD Endoscopy & FESS": "HD Endoscopy & FESS",
    "MS (ENT) Specialist": "Mtaalamu wa MS (ENT)",
    "Years Experience +25": "Miaka 25+ ya Uzoefu",
    "Call: +91-9311449825": "Piga: +91-9311449825",
    "Quick & easy booking": "Uhifadhi wa Haraka na Rahisi",
    "Patient Name": "Jina la Mgonjwa",
    "Phone Number": "Nambari ya Simu",
    "Email (optional)": "Barua Pepe",
    "City": "Jiji",
    "Select Department": "Chagua Idara",
    "Schedule Consultation": "Panga Mashauriano",
    "Book on WhatsApp": "Weka Miadi kupitia WhatsApp"
  },
  fr: {
    "Book Appointment": "Prendre Rendez-vous",
    "Book OPD": "Prendre RDV",
    "About": "À Propos",
    "About & Hospital": "À Propos du Médecin",
    "Conditions": "Affections",
    "Conditions We Treat": "Pathologies Traitées",
    "Specialities": "Spécialités",
    "Specialities & Surgeries": "Spécialités et Chirurgie",
    "Surgery Costs": "Coûts de Chirurgie",
    "Centers & Clinics": "Centres et Cliniques",
    "Centers": "Centres",
    "Health Articles": "Articles Santé",
    "Articles": "Articles",
    "Contact": "Contactez-nous",
    "Call Doctor": "Appeler le Médecin",
    "Call Hospital": "Appeler l'Hôpital",
    "Senior Consultant": "Chirurgien ORL Consultant Principal",
    "25+ Years Experience": "Plus de 25 ans d'expérience",
    "Same-Day OPD Available": "Consultation le jour même",
    "OPD Open": "Cabinet ouvert",
    "Select Language": "Choisir la langue",
    "Our ENT Departments": "Nos Départements ORL",
    "Otology Clinic": "Clinique d'Otologie (Soins de l'Oreille)",
    "Cochlear Implant": "Implant Cochléaire",
    "Skull Base Unit": "Unité de la Base du Crâne",
    "Explore Department": "Explorer le Département",
    "View All ENT Specialities": "Voir Toutes les Spécialités ORL",
    "Meet Dr. (Prof.) Dhirendra Singh Kushwah": "Rencontrez le Dr (Prof.) Dhirendra Singh Kushwah",
    "Chief Consultant ENT Surgeon in Delhi NCR": "Chirurgien ORL en Chef à Delhi NCR",
    "Over 15,000+ Completed Micro-Surgical & Endoscopic Procedures": "Plus de 15 000 interventions réussies",
    "Best Nose and Sinus Surgeon in Delhi – Dr. Dhirendra Singh Kushwah": "Meilleur Chirurgien du Nez et des Sinus à Delhi – Dr. Kushwah",
    "HD Endoscopy & FESS": "Endoscopie HD et FESS",
    "MS (ENT) Specialist": "Spécialiste ORL (MS)",
    "Years Experience +25": "Plus de 25 ans d'expérience",
    "Call: +91-9311449825": "Appel: +91-9311449825",
    "Quick & easy booking": "Réservation Simple et Rapide",
    "Patient Name": "Nom du Patient",
    "Phone Number": "Numéro de Téléphone",
    "Email (optional)": "E-mail (optionnel)",
    "City": "Ville",
    "Select Department": "Sélectionner le Département",
    "Schedule Consultation": "Prendre Rendez-vous",
    "Book on WhatsApp": "Réserver sur WhatsApp"
  },
  fa: {
    "Book Appointment": "رزرو نوبت",
    "Book OPD": "رزرو ویزیت",
    "About": "درباره ما",
    "About & Hospital": "درباره داکتر و بیمارستان",
    "Conditions": "بیماری‌ها",
    "Conditions We Treat": "بیماری‌های قابل درمان",
    "Specialities": "تخصص‌ها",
    "Specialities & Surgeries": "تخصص‌ها و جراحی‌ها",
    "Surgery Costs": "هزینه‌های جراحی",
    "Centers & Clinics": "مراکز و کلینیک‌ها",
    "Centers": "مراکز",
    "Health Articles": "مقالات صحی",
    "Articles": "مقالات",
    "Contact": "تماس با ما",
    "Call Doctor": "تماس با داکتر",
    "Call Hospital": "تماس با بیمارستان",
    "Senior Consultant": "متخصص ارشد جراحی گوش، گلو و بینی",
    "25+ Years Experience": "بیش از ۲۵ سال تجربه کاری",
    "Same-Day OPD Available": "ویزیت در همان روز",
    "OPD Open": "کلینیک باز است",
    "Select Language": "انتخاب زبان",
    "Our ENT Departments": "بخش‌های تخصصی گوش، گلو و بینی",
    "Otology Clinic": "کلینیک اتولوژی (مراقبت گوش و شنوایی)",
    "Cochlear Implant": "کاشت حلزون شنوایی",
    "Skull Base Unit": "بخش جراحی قاعده جمجمه",
    "Explore Department": "مشاهده بخش",
    "View All ENT Specialities": "مشاهده تمام تخصص‌ها",
    "Meet Dr. (Prof.) Dhirendra Singh Kushwah": "با داکتر (پروفسور) دیریندرا سینگ کوشواه آشنا شوید",
    "Chief Consultant ENT Surgeon in Delhi NCR": "متخصص ارشد جراحی گوش، گلو و بینی در دهلی",
    "Over 15,000+ Completed Micro-Surgical & Endoscopic Procedures": "بیش از ۱۵,۰۰۰ عمل جراحی موفقیت‌آمیز",
    "Best Nose and Sinus Surgeon in Delhi – Dr. Dhirendra Singh Kushwah": "بهترین جراح بینی و سینوس در دهلی – داکتر دیریندرا سینگ کوشواه",
    "HD Endoscopy & FESS": "آندوسکوپی پیشرفته HD و FESS",
    "MS (ENT) Specialist": "متخصص جراحی گوش، گلو و بینی",
    "Years Experience +25": "بیش از ۲۵ سال تجربه",
    "Call: +91-9311449825": "تماس: +91-9311449825",
    "Quick & easy booking": "رزرو سریع و آسان",
    "Patient Name": "نام مریض",
    "Phone Number": "شماره تماس",
    "Email (optional)": "ایمیل",
    "City": "شهر",
    "Select Department": "انتخاب بخش",
    "Schedule Consultation": "رزرو وقت مشاوره",
    "Book on WhatsApp": "ارتباط از طریق واتساپ"
  },
  ne: {
    "Book Appointment": "अपोइन्टमेन्ट लिनुहोस्",
    "Book OPD": "ओपीडी बुक गर्नुहोस्",
    "About": "हाम्रो बारेमा",
    "About & Hospital": "डाक्टर तथा अस्पताल",
    "Conditions": "रोग तथा समस्याहरू",
    "Conditions We Treat": "उपचार गरिने रोगहरू",
    "Specialities": "विशेषज्ञता",
    "Specialities & Surgeries": "विशेषज्ञता तथा शल्यक्रिया",
    "Surgery Costs": "शल्यक्रिया खर्च",
    "Centers & Clinics": "केन्द्र तथा क्लिनिकहरू",
    "Centers": "केन्द्रहरू",
    "Health Articles": "स्वास्थ्य लेखहरू",
    "Articles": "लेखहरू",
    "Contact": "सम्पर्क गर्नुहोस्",
    "Call Doctor": "डाक्टरलाई कल गर्नुहोस्",
    "Call Hospital": "अस्पतालमा कल गर्नुहोस्",
    "Senior Consultant": "वरिष्ठ ईएनटी सर्जन",
    "25+ Years Experience": "२५+ वर्षको अनुभव",
    "Same-Day OPD Available": "आजै ओपीडी परामर्श",
    "OPD Open": "ओपीडी खुला छ",
    "Select Language": "भाषा छान्नुहोस्",
    "Our ENT Departments": "हाम्रा ईएनटी विभागहरू",
    "Otology Clinic": "ओटोलोजी क्लिनिक (कानको उपचार)",
    "Complete ear care for hearing loss, ear infections, tinnitus, eardrum problems, and other ear-related conditions.": "सुनाइ कम हुने, कान पाक्ने र कानको जालीको समस्याको पूर्ण उपचार।",
    "Cochlear Implant": "कक्लियर इम्प्लान्ट",
    "Skull Base Unit": "स्कल बेस युनिट",
    "Explore Department": "विभाग हेर्नुहोस्",
    "View All ENT Specialities": "सबै ईएनटी विशेषज्ञता हेर्नुहोस्",
    "Meet Dr. (Prof.) Dhirendra Singh Kushwah": "डा. (प्रा.) धीरेन्द्र सिंह कुशवाहलाई भेट्नुहोस्",
    "Chief Consultant ENT Surgeon in Delhi NCR": "दिल्ली एनसीआरका मुख्य ईएनटी सर्जन",
    "Over 15,000+ Completed Micro-Surgical & Endoscopic Procedures": "१५,०००+ भन्दा बढी सफल शल्यक्रिया सम्पन्न",
    "Best Nose and Sinus Surgeon in Delhi – Dr. Dhirendra Singh Kushwah": "दिल्लीका उत्कृष्ट नाक तथा साइनस सर्जन – डा. धीरेन्द्र सिंह कुशवाह",
    "HD Endoscopy & FESS": "एचडी इन्डोस्कोपी र FESS",
    "MS (ENT) Specialist": "एमएस (ईएनटी) विशेषज्ञ",
    "Years Experience +25": "२५+ वर्षको अनुभव",
    "Call: +91-9311449825": "कल: +91-9311449825",
    "Quick & easy booking": "छिटो र सजिलो बुकिङ",
    "Patient Name": "बिरामीको नाम",
    "Phone Number": "फोन नम्बर",
    "Email (optional)": "इमेल",
    "City": "शहर",
    "Select Department": "विभाग छान्नुहोस्",
    "Schedule Consultation": "परामर्श लिनुहोस्",
    "Book on WhatsApp": "ह्वाट्सएपमा सम्पर्क गर्नुहोस्"
  }
};

const RTL_LANGUAGES = ["ar", "ur", "fa"];
let activeLang = "en";
let observer = null;

// Node translate helper
function translateTextNode(node, dict) {
  if (!node || node.nodeType !== Node.TEXT_NODE) return;
  const raw = node.nodeValue;
  if (!raw || !raw.trim()) return;

  const parent = node.parentElement;
  if (!parent) return;

  const tag = parent.tagName.toLowerCase();
  if (tag === "script" || tag === "style" || tag === "noscript" || tag === "svg") return;
  if (parent.closest("[data-no-translate]")) return;

  // Cache original text
  if (!parent.hasAttribute("data-orig-text")) {
    parent.setAttribute("data-orig-text", raw);
  }

  const orig = parent.getAttribute("data-orig-text");
  let replaced = orig;

  // Match trimmed text or phrase substrings
  const trimmed = orig.trim();
  if (dict[trimmed]) {
    replaced = orig.replace(trimmed, dict[trimmed]);
  } else {
    // Check phrase matches
    for (const [enPhrase, targetPhrase] of Object.entries(dict)) {
      if (replaced.includes(enPhrase)) {
        replaced = replaced.replaceAll(enPhrase, targetPhrase);
      }
    }
  }

  if (replaced !== node.nodeValue) {
    node.nodeValue = replaced;
  }
}

// Tree traverse
function walkAndTranslate(root, dict) {
  if (!root || !dict) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
  const nodes = [];
  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }
  for (const n of nodes) {
    translateTextNode(n, dict);
  }
}

function restoreOriginalText(root) {
  if (!root) return;
  const elements = root.querySelectorAll("[data-orig-text]");
  elements.forEach((el) => {
    const orig = el.getAttribute("data-orig-text");
    if (orig) {
      el.textContent = orig;
      el.removeAttribute("data-orig-text");
    }
  });
}

function ensureMutationObserver() {
  if (typeof window === "undefined" || typeof MutationObserver === "undefined") return;
  if (observer) return;

  observer = new MutationObserver((mutations) => {
    if (activeLang === "en") return;
    const dict = TRANSLATIONS[activeLang];
    if (!dict) return;

    for (const m of mutations) {
      if (m.type === "childList") {
        m.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            translateTextNode(node, dict);
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            walkAndTranslate(node, dict);
          }
        });
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

/**
 * Applies the selected language across the entire document
 */
export function applyLanguage(langCode) {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  activeLang = langCode;
  try {
    localStorage.setItem("orl_preferred_lang", langCode);
  } catch (e) {}

  const isRtl = RTL_LANGUAGES.includes(langCode);
  document.documentElement.lang = langCode;
  document.documentElement.dir = isRtl ? "rtl" : "ltr";

  if (langCode === "en") {
    restoreOriginalText(document.body);
    return;
  }

  const dict = TRANSLATIONS[langCode];
  if (!dict) return;

  restoreOriginalText(document.body);
  walkAndTranslate(document.body, dict);
  ensureMutationObserver();
}

/**
 * Retrieves initial preferred language from localStorage
 */
export function getStoredLanguage() {
  if (typeof window === "undefined") return "en";
  try {
    const saved = localStorage.getItem("orl_preferred_lang");
    if (saved && LANGUAGES.some((l) => l.code === saved)) {
      return saved;
    }
  } catch (e) {}
  return "en";
}
