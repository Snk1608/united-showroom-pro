export type Language = "en" | "te" | "hi";

export const languageNames: Record<Language, string> = {
  en: "English",
  te: "తెలుగు",
  hi: "हिन्दी",
};

const translations = {
  // Nav
  "nav.home": { en: "Home", te: "హోమ్", hi: "होम" },
  "nav.about": { en: "About Us", te: "మా గురించి", hi: "हमारे बारे में" },
  "nav.products": { en: "Products", te: "ఉత్పత్తులు", hi: "उत्पाद" },
  "nav.brands": { en: "Brands", te: "బ్రాండ్‌లు", hi: "ब्रांड्स" },
  "nav.offers": { en: "Offers", te: "ఆఫర్లు", hi: "ऑफ़र" },
  "nav.enquiry": { en: "Enquiry", te: "విచారణ", hi: "पूछताछ" },
  "nav.contact": { en: "Contact", te: "సంప్రదించండి", hi: "संपर्क" },
  "nav.clients": { en: "Clients", te: "క్లయింట్లు", hi: "ग्राहक" },

  // Header
  "header.topbar": { en: "UNITED GROUPS — Authorized Dealer of BOSCH & STIHL", te: "యునైటెడ్ గ్రూప్స్ — BOSCH & STIHL అధీకృత డీలర్", hi: "यूनाइटेड ग्रुप्स — BOSCH और STIHL के अधिकृत डीलर" },
  "header.callUs": { en: "Call Us", te: "కాల్ చేయండి", hi: "कॉल करें" },
  "header.subtitle": { en: "Hardware & Tools", te: "హార్డ్‌వేర్ & టూల్స్", hi: "हार्डवेयर और उपकरण" },

  // Hero
  "hero.authorizedDealer": { en: "Authorized Dealer", te: "అధీకృత డీలర్", hi: "अधिकृत डीलर" },
  "hero.subtitle": { en: "Your trusted partner for industrial tools & equipment. Authorized dealer of", te: "పారిశ్రామిక పరికరాలు & ఉపకరణాల కోసం మీ విశ్వసనీయ భాగస్వామి. అధీకృత డీలర్", hi: "औद्योगिक उपकरण और साधनों के लिए आपका विश्वसनीय भागीदार। अधिकृत डीलर" },
  "hero.browseProducts": { en: "Browse Products", te: "ఉత్పత్తులు చూడండి", hi: "उत्पाद देखें" },
  "hero.sendEnquiry": { en: "Send Enquiry", te: "విచారణ పంపండి", hi: "पूछताछ भेजें" },

  // Brand Strip
  "brandStrip.title": { en: "Authorized Dealer Of", te: "అధీకృత డీలర్", hi: "अधिकृत डीलर" },

  // Featured Products
  "featured.title": { en: "Our Product Range", te: "మా ఉత్పత్తుల శ్రేణి", hi: "हमारी उत्पाद श्रेणी" },
  "featured.subtitle": { en: "Explore our comprehensive collection of industrial tools and equipment from world-renowned brands", te: "ప్రపంచ ప్రఖ్యాత బ్రాండ్ల నుండి పారిశ్రామిక పరికరాల సమగ్ర సేకరణను అన్వేషించండి", hi: "विश्व प्रसिद्ध ब्रांडों से औद्योगिक उपकरणों का हमारा व्यापक संग्रह देखें" },
  "featured.powerTools": { en: "Power Tools", te: "పవర్ టూల్స్", hi: "पावर टूल्स" },
  "featured.powerToolsDesc": { en: "Drills, grinders, saws and more from BOSCH & Makita", te: "BOSCH & Makita నుండి డ్రిల్స్, గ్రైండర్లు, సాలు మరియు మరిన్ని", hi: "BOSCH और Makita से ड्रिल, ग्राइंडर, आरी और बहुत कुछ" },
  "featured.handTools": { en: "Hand Tools", te: "హ్యాండ్ టూల్స్", hi: "हैंड टूल्स" },
  "featured.handToolsDesc": { en: "Premium hand tools from Stanley & Black & Decker", te: "Stanley & Black & Decker నుండి ప్రీమియం హ్యాండ్ టూల్స్", hi: "Stanley और Black & Decker से प्रीमियम हैंड टूल्स" },
  "featured.outdoorEquipment": { en: "Outdoor Equipment", te: "ఆవుట్‌డోర్ పరికరాలు", hi: "आउटडोर उपकरण" },
  "featured.outdoorEquipmentDesc": { en: "Chainsaws, brush cutters & blowers from STIHL", te: "STIHL నుండి చైన్‌సాలు, బ్రష్ కట్టర్లు & బ్లోవర్లు", hi: "STIHL से चेनसॉ, ब्रश कटर और ब्लोअर" },
  "featured.accessories": { en: "Accessories", te: "యాక్సెసరీలు", hi: "सहायक उपकरण" },
  "featured.accessoriesDesc": { en: "Drill bits, blades, safety gear & more", te: "డ్రిల్ బిట్స్, బ్లేడ్లు, సేఫ్టీ గేర్ & మరిన్ని", hi: "ड्रिल बिट्स, ब्लेड, सेफ्टी गियर और बहुत कुछ" },
  "featured.viewProducts": { en: "View Products", te: "ఉత్పత్తులు చూడండి", hi: "उत्पाद देखें" },

  // Divisions
  "divisions.title": { en: "Our Divisions", te: "మా విభాగాలు", hi: "हमारे विभाग" },
  "divisions.subtitle": { en: "Two specialized divisions under one trusted name", te: "ఒక విశ్వసనీయ పేరు కింద రెండు ప్రత్యేక విభాగాలు", hi: "एक विश्वसनीय नाम के तहत दो विशेष विभाग" },
  "divisions.division1": { en: "Division 1", te: "విభాగం 1", hi: "विभाग 1" },
  "divisions.division2": { en: "Division 2", te: "విభాగం 2", hi: "विभाग 2" },
  "divisions.uhcDesc": { en: "Authorized dealer of BOSCH, Stanley, Black & Decker, Makita, MAX and other industrial tool brands. Your one-stop shop for professional-grade power and hand tools.", te: "BOSCH, Stanley, Black & Decker, Makita, MAX మరియు ఇతర పారిశ్రామిక టూల్ బ్రాండ్ల అధీకృత డీలర్. ప్రొఫెషనల్-గ్రేడ్ పవర్ మరియు హ్యాండ్ టూల్స్ కోసం మీ ఒకే దుకాణం.", hi: "BOSCH, Stanley, Black & Decker, Makita, MAX और अन्य औद्योगिक टूल ब्रांडों के अधिकृत डीलर। प्रोफेशनल-ग्रेड पावर और हैंड टूल्स के लिए आपकी एकमात्र दुकान।" },
  "divisions.uaDesc": { en: "Authorized dealer of STIHL — the world's leading brand for chainsaws, brush cutters, blowers, and outdoor power equipment.", te: "STIHL యొక్క అధీకృత డీలర్ — చైన్‌సాలు, బ్రష్ కట్టర్లు, బ్లోవర్లు మరియు ఆవుట్‌డోర్ పవర్ పరికరాల కోసం ప్రపంచంలో అగ్రగామి బ్రాండ్.", hi: "STIHL के अधिकृत डीलर — चेनसॉ, ब्रश कटर, ब्लोअर और आउटडोर पावर उपकरण के लिए दुनिया का अग्रणी ब्रांड।" },
  "divisions.exploreTools": { en: "Explore Tools", te: "టూల్స్ అన్వేషించండి", hi: "उपकरण देखें" },
  "divisions.viewStihl": { en: "View STIHL Range", te: "STIHL శ్రేణి చూడండి", hi: "STIHL रेंज देखें" },

  // CTA
  "cta.title": { en: "Need the Right Tool?", te: "సరైన టూల్ కావాలా?", hi: "सही उपकरण चाहिए?" },
  "cta.subtitle": { en: "Get in touch with us for product enquiries, bulk orders, or expert advice on the best tools for your needs.", te: "ఉత్పత్తి విచారణలు, బల్క్ ఆర్డర్‌లు లేదా మీ అవసరాలకు అనుగుణంగా ఉత్తమ సాధనాల గురించి నిపుణుల సలహా కోసం మమ్మల్ని సంప్రదించండి.", hi: "उत्पाद पूछताछ, बल्क ऑर्डर, या आपकी ज़रूरतों के लिए सर्वोत्तम उपकरणों पर विशेषज्ञ सलाह के लिए हमसे संपर्क करें।" },
  "cta.sendEnquiry": { en: "Send an Enquiry", te: "విచారణ పంపండి", hi: "पूछताछ भेजें" },
  "cta.chatWhatsApp": { en: "Chat on WhatsApp", te: "WhatsApp లో చాట్", hi: "WhatsApp पर चैट करें" },

  // About
  "about.title": { en: "About United Groups", te: "యునైటెడ్ గ్రూప్స్ గురించి", hi: "यूनाइटेड ग्रुप्स के बारे में" },
  "about.subtitle": { en: "A legacy of trust, quality, and service in the industrial tools and hardware industry.", te: "పారిశ్రామిక సాధనాలు మరియు హార్డ్‌వేర్ పరిశ్రమలో విశ్వాసం, నాణ్యత మరియు సేవ యొక్క వారసత్వం.", hi: "औद्योगिक उपकरण और हार्डवेयर उद्योग में विश्वास, गुणवत्ता और सेवा की विरासत।" },
  "about.yearsExp": { en: "Years of Experience", te: "సంవత్సరాల అనుభవం", hi: "वर्षों का अनुभव" },
  "about.happyCustomers": { en: "Happy Customers", te: "సంతోషకరమైన కస్టమర్లు", hi: "खुश ग्राहक" },
  "about.brandsPartnered": { en: "Brands Partnered", te: "భాగస్వామ్య బ్రాండ్‌లు", hi: "साझेदार ब्रांड" },
  "about.authorizedDealer": { en: "Authorized Dealer", te: "అధీకృత డీలర్", hi: "अधिकृत डीलर" },
  "about.certified": { en: "Certified", te: "సర్టిఫైడ్", hi: "प्रमाणित" },
  "about.ourStory": { en: "Our Story", te: "మా కథ", hi: "हमारी कहानी" },
  "about.story1": { en: "United Groups has been a cornerstone in the hardware and industrial tools industry for over 60 years. What started as a small tools shop has grown into one of the region's most trusted authorized dealerships for world-class brands.", te: "యునైటెడ్ గ్రూప్స్ 60 సంవత్సరాలకు పైగా హార్డ్‌వేర్ మరియు పారిశ్రామిక పరికరాల పరిశ్రమలో ఒక మూలరాయి. ఒక చిన్న సాధనాల దుకాణంగా ప్రారంభమైనది ప్రపంచ స్థాయి బ్రాండ్ల కోసం ఈ ప్రాంతంలో అత్యంత విశ్వసనీయ అధీకృత డీలర్‌షిప్‌లలో ఒకటిగా ఎదిగింది.", hi: "यूनाइटेड ग्रुप्स 60 से अधिक वर्षों से हार्डवेयर और औद्योगिक उपकरण उद्योग में एक आधारशिला रही है। जो एक छोटी सी दुकान के रूप में शुरू हुई, वह विश्व स्तरीय ब्रांडों की क्षेत्र की सबसे विश्वसनीय अधिकृत डीलरशिप में से एक बन गई है।" },
  "about.story2": { en: "We operate through two specialized divisions to serve our customers better:", te: "మా కస్టమర్లకు మెరుగైన సేవ అందించడానికి మేము రెండు ప్రత్యేక విభాగాల ద్వారా నిర్వహిస్తాము:", hi: "हम अपने ग्राहकों को बेहतर सेवा देने के लिए दो विशेष विभागों के माध्यम से काम करते हैं:" },
  "about.uhcDesc": { en: "Our flagship division specializing in industrial-grade power tools, hand tools, and accessories. As authorized dealers of BOSCH, Stanley, Black & Decker, Makita, and MAX, we provide only genuine products with full warranty support.", te: "పారిశ్రామిక-గ్రేడ్ పవర్ టూల్స్, హ్యాండ్ టూల్స్ మరియు యాక్సెసరీలలో ప్రత్యేకత కలిగిన మా ప్రధాన విభాగం. BOSCH, Stanley, Black & Decker, Makita మరియు MAX యొక్క అధీకృత డీలర్లుగా, మేము పూర్తి వారంటీ మద్దతుతో నిజమైన ఉత్పత్తులను మాత్రమే అందిస్తాము.", hi: "औद्योगिक-ग्रेड पावर टूल्स, हैंड टूल्स और एक्सेसरीज में विशेषज्ञता रखने वाला हमारा प्रमुख विभाग। BOSCH, Stanley, Black & Decker, Makita और MAX के अधिकृत डीलर के रूप में, हम पूर्ण वारंटी समर्थन के साथ केवल असली उत्पाद प्रदान करते हैं।" },
  "about.uaDesc": { en: "Our dedicated STIHL division for outdoor power equipment. From chainsaws to brush cutters, hedge trimmers to blowers — we are your authorized STIHL partner for sales, service, and support.", te: "ఆవుట్‌డోర్ పవర్ పరికరాల కోసం మా ప్రత్యేక STIHL విభాగం. చైన్‌సాల నుండి బ్రష్ కట్టర్ల వరకు, హెడ్జ్ ట్రిమ్మర్ల నుండి బ్లోవర్ల వరకు — అమ్మకాలు, సేవ మరియు మద్దతు కోసం మేము మీ అధీకృత STIHL భాగస్వామి.", hi: "आउटडोर पावर उपकरण के लिए हमारा समर्पित STIHL विभाग। चेनसॉ से लेकर ब्रश कटर, हेज ट्रिमर से लेकर ब्लोअर तक — हम बिक्री, सेवा और सहायता के लिए आपके अधिकृत STIHL साझेदार हैं।" },
  "about.ourMission": { en: "Our Mission", te: "మా లక్ష్యం", hi: "हमारा मिशन" },
  "about.missionText": { en: "To provide professionals and businesses with the highest quality tools and equipment, backed by expert advice, genuine products, and exceptional after-sales service.", te: "నిపుణుల సలహా, నిజమైన ఉత్పత్తులు మరియు అసాధారణ అమ్మకాల అనంతర సేవతో వృత్తి నిపుణులకు మరియు వ్యాపారాలకు అత్యుత్తమ నాణ్యమైన సాధనాలు మరియు పరికరాలను అందించడం.", hi: "विशेषज्ञ सलाह, असली उत्पादों और असाधारण बिक्री-पश्चात सेवा के साथ पेशेवरों और व्यवसायों को उच्चतम गुणवत्ता वाले उपकरण प्रदान करना।" },

  // Products page
  "products.title": { en: "Our Products", te: "మా ఉత్పత్తులు", hi: "हमारे उत्पाद" },
  "products.subtitle": { en: "Professional tools for every need", te: "ప్రతి అవసరానికి ప్రొఫెషనల్ టూల్స్", hi: "हर ज़रूरत के लिए पेशेवर उपकरण" },
  "products.search": { en: "Search products...", te: "ఉత్పత్తులు శోధించండి...", hi: "उत्पाद खोजें..." },
  "products.all": { en: "All", te: "అన్నీ", hi: "सभी" },
  "products.enquireNow": { en: "Enquire Now", te: "ఇప్పుడు విచారించండి", hi: "अभी पूछताछ करें" },
  "products.noProducts": { en: "No products found. Try adjusting your filters.", te: "ఉత్పత్తులు కనుగొనబడలేదు. మీ ఫిల్టర్లను సర్దుబాటు చేయడానికి ప్రయత్నించండి.", hi: "कोई उत्पाद नहीं मिला। अपने फ़िल्टर समायोजित करने का प्रयास करें।" },

  // Brands page
  "brands.title": { en: "Our Brands", te: "మా బ్రాండ్‌లు", hi: "हमारे ब्रांड" },
  "brands.subtitle": { en: "Authorized dealer for the world's best tool brands", te: "ప్రపంచంలోని ఉత్తమ టూల్ బ్రాండ్ల అధీకృత డీలర్", hi: "दुनिया के सर्वश्रेष्ठ टूल ब्रांडों के अधिकृत डीलर" },

  // Offers page
  "offers.title": { en: "Current Offers", te: "ప్రస్తుత ఆఫర్లు", hi: "वर्तमान ऑफ़र" },
  "offers.subtitle": { en: "Don't miss out on our latest deals and promotions", te: "మా తాజా డీల్స్ మరియు ప్రమోషన్లను మిస్ అవ్వకండి", hi: "हमारे नवीनतम सौदों और प्रचारों को न चूकें" },
  "offers.noOffers": { en: "No active offers right now. Check back soon!", te: "ప్రస్తుతం ఆక్టివ్ ఆఫర్లు లేవు. త్వరలో మళ్ళీ చెక్ చేయండి!", hi: "अभी कोई सक्रिय ऑफ़र नहीं है। जल्द ही वापस आएं!" },
  "offers.validUntil": { en: "Valid until", te: "వరకు చెల్లుతుంది", hi: "तक मान्य" },

  // Enquiry page
  "enquiry.title": { en: "Send an Enquiry", te: "విచారణ పంపండి", hi: "पूछताछ भेजें" },
  "enquiry.subtitle": { en: "We'd love to hear from you. Fill out the form below.", te: "మీ నుండి వినడానికి ఇష్టపడతాము. క్రింది ఫారమ్‌ను నింపండి.", hi: "हम आपसे सुनना चाहेंगे। नीचे दिया गया फॉर्म भरें।" },
  "enquiry.fullName": { en: "Full Name", te: "పూర్తి పేరు", hi: "पूरा नाम" },
  "enquiry.phone": { en: "Phone Number", te: "ఫోన్ నంబర్", hi: "फ़ोन नंबर" },
  "enquiry.email": { en: "Email Address", te: "ఇమెయిల్ చిరునామా", hi: "ईमेल पता" },
  "enquiry.product": { en: "Product of Interest", te: "ఆసక్తి ఉన్న ఉత్పత్తి", hi: "रुचि का उत्पाद" },
  "enquiry.message": { en: "Message", te: "సందేశం", hi: "संदेश" },
  "enquiry.submit": { en: "Submit Enquiry", te: "విచారణ సమర్పించండి", hi: "पूछताछ जमा करें" },
  "enquiry.submitting": { en: "Submitting...", te: "సమర్పిస్తోంది...", hi: "जमा हो रहा है..." },
  "enquiry.success": { en: "Enquiry submitted successfully! We'll get back to you soon.", te: "విచారణ విజయవంతంగా సమర్పించబడింది! మేము త్వరలో మీకు తిరిగి వస్తాము.", hi: "पूछताछ सफलतापूर्वक जमा हो गई! हम जल्द ही आपसे संपर्क करेंगे।" },

  // Contact page
  "contact.title": { en: "Contact Us", te: "మమ్మల్ని సంప్రదించండి", hi: "हमसे संपर्क करें" },
  "contact.subtitle": { en: "Visit our showroom or get in touch", te: "మా షోరూమ్‌ను సందర్శించండి లేదా సంప్రదించండి", hi: "हमारे शोरूम पर आएं या संपर्क करें" },
  "contact.getInTouch": { en: "Get in Touch", te: "సంప్రదించండి", hi: "संपर्क करें" },
  "contact.visitUs": { en: "Visit Us", te: "మమ్మల్ని సందర్శించండి", hi: "हमसे मिलें" },
  "contact.callUs": { en: "Call Us", te: "కాల్ చేయండి", hi: "कॉल करें" },
  "contact.emailUs": { en: "Email Us", te: "ఇమెయిల్ చేయండి", hi: "ईमेल करें" },
  "contact.businessHours": { en: "Business Hours", te: "వ్యాపార సమయాలు", hi: "व्यापार के घंटे" },
  "contact.address": { en: "Prospect House, Opp. Old Fire Service Station\nSuryabagh, Visakhapatnam-530020\nAndhra Pradesh", te: "ప్రాస్పెక్ట్ హౌస్, పాత ఫైర్ సర్వీస్ స్టేషన్ ఎదురుగా\nసూర్యబాగ్, విశాఖపట్నం-530020\nఆంధ్ర ప్రదేశ్", hi: "प्रॉस्पेक्ट हाउस, पुराने फायर सर्विस स्टेशन के सामने\nसूर्याबाग, विशाखापत्तनम-530020\nआंध्र प्रदेश" },
  "contact.hours": { en: "Mon - Sat: 9:00 AM - 7:00 PM\nSunday: Closed", te: "సోమ - శని: ఉదయం 9:00 - సాయంత్రం 7:00\nఆదివారం: మూసివేయబడింది", hi: "सोम - शनि: सुबह 9:00 - शाम 7:00\nरविवार: बंद" },
  "contact.callNow": { en: "Call Now", te: "ఇప్పుడు కాల్ చేయండి", hi: "अभी कॉल करें" },

  // Clients page
  "clients.title": { en: "What Our Clients Say", te: "మా క్లయింట్లు ఏమి చెబుతారు", hi: "हमारे ग्राहक क्या कहते हैं" },
  "clients.subtitle": { en: "Trusted by thousands of professionals across the region", te: "ఈ ప్రాంతంలో వేలాది నిపుణులచే విశ్వసించబడింది", hi: "क्षेत्र भर में हजारों पेशेवरों द्वारा विश्वसनीय" },

  // Footer
  "footer.description": { en: "Authorized dealer of BOSCH, STIHL, Stanley, Black & Decker, Makita, and MAX.", te: "BOSCH, STIHL, Stanley, Black & Decker, Makita మరియు MAX యొక్క అధీకృత డీలర్.", hi: "BOSCH, STIHL, Stanley, Black & Decker, Makita और MAX के अधिकृत डीलर।" },
  "footer.quickLinks": { en: "Quick Links", te: "త్వరిత లింకులు", hi: "त्वरित लिंक" },
  "footer.ourBrands": { en: "Our Brands", te: "మా బ్రాండ్‌లు", hi: "हमारे ब्रांड" },
  "footer.contactUs": { en: "Contact Us", te: "మమ్మల్ని సంప్రదించండి", hi: "हमसे संपर्क करें" },
  "footer.rights": { en: "United Groups. All rights reserved.", te: "యునైటెడ్ గ్రూప్స్. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.", hi: "यूनाइटेड ग्रुप्स। सर्वाधिकार सुरक्षित।" },
} as const;

export type TranslationKey = keyof typeof translations;

export const getTranslation = (key: TranslationKey, lang: Language): string => {
  return translations[key]?.[lang] || translations[key]?.en || key;
};

export default translations;
