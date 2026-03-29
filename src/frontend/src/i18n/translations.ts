export type LangCode = "en" | "te" | "hi" | "ta" | "ml";

export const translations: Record<LangCode, Record<string, string>> = {
  en: {
    // Nav
    home: "Home",
    about: "About",
    services: "Services",
    doctors: "Doctors",
    departments: "Departments",
    contact: "Contact",
    bookAppointment: "Book Appointment",
    emergency: "Emergency",
    // Hero badges
    badge1: "Nandyal's Premier Super Speciality Hospital",
    badge2: "NABH Accredited",
    badge3: "24/7 Emergency",
    // Hero heading/subtext
    heroHeading: "24/7 Emergency & Intensive Care",
    heroSubtext:
      "Advanced life support and critical care when every second counts. Located in Nandyal with 24-hour specialist availability.",
    // Form
    formTitle: "Book an Appointment",
    fullName: "Full Name",
    phoneNumber: "Phone Number",
    department: "Department",
    preferredDate: "Preferred Date",
    preferredTime: "Preferred Time",
    bookNow: "Book Now — Free Consultation",
    booking: "Booking...",
    appointmentRequested: "Appointment Requested!",
    // Stats
    statBeds: "Beds",
    statSpecialists: "Specialists",
    statPatients: "Patients Served",
    statEmergency: "Emergency Care",
    // Quick Actions
    qaBookAppointment: "Book Appointment",
    qaBookDesc:
      "Schedule a consultation with our specialists at your convenience.",
    qaEmergency: "Emergency Care",
    qaEmergencyDesc:
      "Round-the-clock emergency services. Call us immediately at +91 9121022077.",
    qaFindDoctor: "Find a Doctor",
    qaFindDoctorDesc:
      "Browse our team of 100+ experienced specialists across 22 departments.",
    qaHealthCheckups: "Health Checkups",
    qaHealthCheckupsDesc:
      "Comprehensive health packages for individuals, couples, and corporates.",
    learnMore: "Learn more",
  },
  te: {
    // Nav
    home: "హోమ్",
    about: "మా గురించి",
    services: "సేవలు",
    doctors: "వైద్యులు",
    departments: "విభాగాలు",
    contact: "సంప్రదించండి",
    bookAppointment: "అపాయింట్‌మెంట్ బుక్ చేయండి",
    emergency: "అత్యవసర సేవ",
    // Hero badges
    badge1: "నంద్యాల యొక్క ప్రీమియర్ సూపర్ స్పెషాలిటీ హాస్పిటల్",
    badge2: "NABH గుర్తింపు పొందినది",
    badge3: "24/7 అత్యవసర సేవ",
    // Hero heading/subtext
    heroHeading: "24/7 అత్యవసర మరియు ఇంటెన్సివ్ కేర్",
    heroSubtext:
      "ప్రతి సెకను విలువైనది — అత్యాధునిక జీవన మద్దతు మరియు క్రిటికల్ కేర్. నంద్యాలలో 24 గంటల నిపుణుల సేవ అందుబాటులో ఉంది.",
    // Form
    formTitle: "అపాయింట్‌మెంట్ బుక్ చేయండి",
    fullName: "పూర్తి పేరు",
    phoneNumber: "ఫోన్ నంబర్",
    department: "విభాగం",
    preferredDate: "ఇష్టమైన తేదీ",
    preferredTime: "ఇష్టమైన సమయం",
    bookNow: "ఇప్పుడే బుక్ చేయండి — ఉచిత సంప్రదింపు",
    booking: "బుక్ చేస్తున్నాం...",
    appointmentRequested: "అపాయింట్‌మెంట్ నమోదైంది!",
    // Stats
    statBeds: "పడకలు",
    statSpecialists: "నిపుణులు",
    statPatients: "చికిత్స పొందిన రోగులు",
    statEmergency: "అత్యవసర సేవ",
    // Quick Actions
    qaBookAppointment: "అపాయింట్‌మెంట్ బుక్ చేయండి",
    qaBookDesc: "మీ సౌకర్యానికి తగినట్లు మా నిపుణులతో సంప్రదింపు నిర్ణయించుకోండి.",
    qaEmergency: "అత్యవసర సేవ",
    qaEmergencyDesc: "24 గంటల అత్యవసర సేవలు. వెంటనే +91 9121022077 కి కాల్ చేయండి.",
    qaFindDoctor: "వైద్యుడిని వెతకండి",
    qaFindDoctorDesc: "22 విభాగాలలో 100+ అనుభవజ్ఞులైన నిపుణులను చూడండి.",
    qaHealthCheckups: "ఆరోగ్య తనిఖీలు",
    qaHealthCheckupsDesc: "వ్యక్తులు, జంటలు మరియు కార్పొరేట్ కోసం సమగ్ర ఆరోగ్య ప్యాకేజీలు.",
    learnMore: "మరింత తెలుసుకోండి",
  },
  hi: {
    // Nav
    home: "होम",
    about: "हमारे बारे में",
    services: "सेवाएँ",
    doctors: "डॉक्टर",
    departments: "विभाग",
    contact: "संपर्क",
    bookAppointment: "अपॉइंटमेंट बुक करें",
    emergency: "आपातकालीन सेवा",
    // Hero badges
    badge1: "नंद्याल का प्रमुख सुपर स्पेशियलिटी अस्पताल",
    badge2: "NABH मान्यता प्राप्त",
    badge3: "24/7 आपातकालीन सेवा",
    // Hero heading/subtext
    heroHeading: "24/7 आपातकालीन और गहन चिकित्सा",
    heroSubtext:
      "हर पल कीमती है — उन्नत जीवन रक्षक और गंभीर देखभाल सेवाएँ। नंद्याल में 24 घंटे विशेषज्ञ उपलब्ध हैं।",
    // Form
    formTitle: "अपॉइंटमेंट बुक करें",
    fullName: "पूरा नाम",
    phoneNumber: "फ़ोन नंबर",
    department: "विभाग",
    preferredDate: "पसंदीदा तारीख",
    preferredTime: "पसंदीदा समय",
    bookNow: "अभी बुक करें — निःशुल्क परामर्श",
    booking: "बुकिंग हो रही है...",
    appointmentRequested: "अपॉइंटमेंट दर्ज हो गई!",
    // Stats
    statBeds: "बिस्तर",
    statSpecialists: "विशेषज्ञ",
    statPatients: "उपचारित मरीज़",
    statEmergency: "आपातकालीन सेवा",
    // Quick Actions
    qaBookAppointment: "अपॉइंटमेंट बुक करें",
    qaBookDesc: "अपनी सुविधा के अनुसार हमारे विशेषज्ञों से परामर्श लें।",
    qaEmergency: "आपातकालीन सेवा",
    qaEmergencyDesc: "चौबीस घंटे आपातकालीन सेवाएँ। तुरंत +91 9121022077 पर कॉल करें।",
    qaFindDoctor: "डॉक्टर खोजें",
    qaFindDoctorDesc: "22 विभागों में 100+ अनुभवी विशेषज्ञों की हमारी टीम देखें।",
    qaHealthCheckups: "स्वास्थ्य जाँच",
    qaHealthCheckupsDesc: "व्यक्तियों, जोड़ों और कॉर्पोरेट के लिए व्यापक स्वास्थ्य पैकेज।",
    learnMore: "अधिक जानें",
  },
  ta: {
    // Nav
    home: "முகப்பு",
    about: "எங்களை பற்றி",
    services: "சேவைகள்",
    doctors: "மருத்துவர்கள்",
    departments: "துறைகள்",
    contact: "தொடர்பு",
    bookAppointment: "சந்திப்பு பதிவு செய்யுங்கள்",
    emergency: "அவசர சேவை",
    // Hero badges
    badge1: "நந்தியாலின் முன்னணி சூப்பர் ஸ்பெஷாலிட்டி மருத்துவமனை",
    badge2: "NABH அங்கீகாரம் பெற்றது",
    badge3: "24/7 அவசர சேவை",
    // Hero heading/subtext
    heroHeading: "24/7 அவசர மற்றும் தீவிர சிகிச்சை",
    heroSubtext:
      "ஒவ்வொரு நொடியும் முக்கியம் — மேம்பட்ட உயிர் காக்கும் சேவை. நந்தியாலில் 24 மணி நேர நிபுணர் சேவை கிடைக்கிறது.",
    // Form
    formTitle: "சந்திப்பு பதிவு செய்யுங்கள்",
    fullName: "முழு பெயர்",
    phoneNumber: "தொலைபேசி எண்",
    department: "துறை",
    preferredDate: "விரும்பிய தேதி",
    preferredTime: "விரும்பிய நேரம்",
    bookNow: "இப்போதே பதிவு செய்யுங்கள் — இலவச ஆலோசனை",
    booking: "பதிவு செய்கிறோம்...",
    appointmentRequested: "சந்திப்பு பதிவாகிவிட்டது!",
    // Stats
    statBeds: "படுக்கைகள்",
    statSpecialists: "நிபுணர்கள்",
    statPatients: "சிகிச்சை பெற்ற நோயாளிகள்",
    statEmergency: "அவசர சேவை",
    // Quick Actions
    qaBookAppointment: "சந்திப்பு பதிவு செய்யுங்கள்",
    qaBookDesc: "உங்கள் வசதிக்கேற்ப எங்கள் நிபுணர்களிடம் ஆலோசனை பெறுங்கள்.",
    qaEmergency: "அவசர சேவை",
    qaEmergencyDesc:
      "24 மணி நேர அவசர சேவைகள். உடனடியாக +91 9121022077 என்ற எண்ணில் அழையுங்கள்.",
    qaFindDoctor: "மருத்துவரை தேடுங்கள்",
    qaFindDoctorDesc:
      "22 துறைகளில் 100+ அனுபவமிக்க நிபுணர்களை உள்ளடக்கிய குழுவை பாருங்கள்.",
    qaHealthCheckups: "உடல்நல பரிசோதனை",
    qaHealthCheckupsDesc:
      "தனிநபர்கள், தம்பதிகள் மற்றும் நிறுவனங்களுக்கான விரிவான சுகாதார தொகுப்புகள்.",
    learnMore: "மேலும் அறிக",
  },
  ml: {
    // Nav
    home: "ഹോം",
    about: "ഞങ്ങളെക്കുറിച്ച്",
    services: "സേവനങ്ങൾ",
    doctors: "ഡോക്ടർമാർ",
    departments: "വിഭാഗങ്ങൾ",
    contact: "ബന്ധപ്പെടുക",
    bookAppointment: "അപ്പോയ്‌ന്റ്‌മെന്റ് ബുക്ക് ചെയ്യൂ",
    emergency: "അടിയന്തര സേവനം",
    // Hero badges
    badge1: "നന്ദ്യാലിലെ പ്രമുഖ സൂപ്പർ സ്പെഷ്യാലിറ്റി ഹോസ്പിറ്റൽ",
    badge2: "NABH അംഗീകൃതം",
    badge3: "24/7 അടിയന്തര സേവനം",
    // Hero heading/subtext
    heroHeading: "24/7 അടിയന്തര & ഇൻറ്റൻസീവ് കെയർ",
    heroSubtext:
      "ഓരോ നിമിഷവും വിലപ്പെട്ടതാണ് — അത്യാധുനിക ജീവൻ രക്ഷാ ചികിൽസ. നന്ദ്യാലിൽ 24 മണിക്കൂർ വിദഗ്ധ സേവനം ലഭ്യം.",
    // Form
    formTitle: "അപ്പോയ്‌ന്റ്‌മെന്റ് ബുക്ക് ചെയ്യൂ",
    fullName: "പൂർണ്ണ നാമം",
    phoneNumber: "ഫോൺ നമ്പർ",
    department: "വിഭാഗം",
    preferredDate: "ഇഷ്ടമുള്ള തീയതി",
    preferredTime: "ഇഷ്ടമുള്ള സമയം",
    bookNow: "ഇപ്പോൾ ബുക്ക് ചെയ്യൂ — സൗജന്യ കൂടിയാലോചന",
    booking: "ബുക്കിംഗ് ചെയ്യുന്നു...",
    appointmentRequested: "അപ്പോയ്‌ന്റ്‌മെന്റ് ഷെഡ്യൂൾ ചെയ്തു!",
    // Stats
    statBeds: "കിടക്കകൾ",
    statSpecialists: "വിദഗ്ധർ",
    statPatients: "ചികിൽസിച്ച രോഗികൾ",
    statEmergency: "അടിയന്തര സേവനം",
    // Quick Actions
    qaBookAppointment: "അപ്പോയ്‌ന്റ്‌മെന്റ് ബുക്ക് ചെയ്യൂ",
    qaBookDesc: "നിങ്ങളുടെ സൗകര്യത്തിന് അനുസരിച്ച് ഞങ്ങളുടെ വിദഗ്ധരുമായി കൂടിയാലോചന നിർണ്ണയിക്കൂ.",
    qaEmergency: "അടിയന്തര സേവനം",
    qaEmergencyDesc:
      "24 മണിക്കൂർ അടിയന്തര സേവനങ്ങൾ. ഉടനടി +91 9121022077 ൽ വിളിക്കൂ.",
    qaFindDoctor: "ഡോക്ടറെ കണ്ടെത്തൂ",
    qaFindDoctorDesc: "22 വിഭാഗങ്ങളിലുള്ള 100+ അനുഭവജ്ഞരായ വിദഗ്ധരെ കണ്ടെത്തൂ.",
    qaHealthCheckups: "ആരോഗ്യ പരിശോധന",
    qaHealthCheckupsDesc:
      "വ്യക്തികൾ, ദമ്പതികൾ, കോർപ്പറേറ്റ് എന്നിവർക്കായുള്ള സമഗ്ര ആരോഗ്യ പാക്കേജുകൾ.",
    learnMore: "കൂടുതൽ അറിയൂ",
  },
};
