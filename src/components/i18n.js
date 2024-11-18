import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome to ElGharabwy Clinic",
        book:"Book Appointment",
        bookSmall:"Book",
        slideTextOne: "Discover our exceptional therapy services",
        slideTextTwo: "Best Therpay Clinc in Egypt",
        slideTextThree: "Your care is our priority",
        slideTextFour: "Our professional team guarantees you the best care",
        slideTextFive: "Together towards a speedy recovery",

        serviceOne: "Physiotherapy for Orthopedic and Neurological Patients",
        serviceTwo: "Pediatric Physiotherapy",
        serviceThree: "Hijama (Cupping Therapy)",
        serviceFour: "Plasma Injection for Skin, Hair, and Joints",
        serviceFive: "Nutrition and Weight Loss Solutions",
        serviceSix: "Fat-Burning Treatments: Cavitation, Radio Frequency, Vacuum, and Electric Pulses",
        serviceSeven: "Unique Manual Therapies",
        serviceHeader:"We Offer Different Services To Improve Your Health",
        serviceSecond:"We are committed to providing comprehensive and personalized care to meet your health needs.",
        serviceOneSecond:"Our clinic offers specialized physiotherapy treatments designed for patients with orthopedic and neurological conditions. We address issues such as post-fracture recovery, joint pain, spinal injuries, and more. Through customized exercise regimens, manual therapies, and advanced equipment, we work to reduce pain, restore mobility, and enhance muscle strength. Each treatment plan is tailored to individual needs, ensuring a supportive and effective path to recovery. Our experienced therapists utilize the latest techniques to promote healing, improve function, and enhance overall quality of life.",
        serviceTwoSecond:"El Gharabawy Clinic provides gentle, effective physiotherapy for children, focusing on developmental and musculoskeletal conditions. We understand the unique needs of young patients and create a friendly, engaging environment to ensure their comfort. Our team is skilled in treating a variety of pediatric conditions, from developmental delays to post-injury care, helping children improve their motor skills, flexibility, and strength. Each therapy session is carefully planned to be fun and therapeutic, encouraging children to participate actively in their recovery process.",
        serviceThreeSecond:"As one of the most trusted providers of hijama, or cupping therapy, we bring this ancient healing practice to clients seeking natural pain relief and detoxification. Hijama improves circulation, reduces muscle tension, and can alleviate symptoms of various ailments, from migraines to chronic pain. Our trained practitioners follow meticulous hygiene standards and use modern cupping techniques to ensure a safe, effective, and rejuvenating experience. This therapy not only aids physical recovery but also enhances overall wellness and relaxation",
        serviceFourSecond:"Our plasma injection treatments utilize advanced techniques to promote natural healing and rejuvenation for skin, hair, and joints. By using the body's own plasma, rich in growth factors, we target areas that require healing and regeneration. Plasma injections for skin help reduce wrinkles and scars, for hair boost hair growth, and for joints relieve pain and promote tissue repair. This minimally invasive treatment is safe, effective, and ideal for those seeking natural enhancements with long-lasting results.",
        serviceFiveSecond:"At El Gharabawy Clinic, we believe in personalized nutrition and weight loss programs that promote sustainable health and fitness. Our experts assess each individual’s health goals and body type to craft custom nutrition plans. We combine effective weight-loss strategies, including dietary counseling, mesotherapy, and monitored progress, to support your fitness journey. Our holistic approach not only aids in weight loss but also enhances metabolism, energy, and overall wellness, creating long-term, healthy lifestyle habits.",
        serviceSixSecond:"For those seeking advanced fat-burning solutions, we offer state-of-the-art treatments such as cavitation, radio frequency, vacuum therapy, and electric pulses. These non-invasive technologies target stubborn fat deposits, improve skin elasticity, and contour the body without the need for surgery. Each treatment is designed to reduce fat safely and effectively, helping clients achieve a leaner, more toned physique. Our trained specialists ensure each session is comfortable and tailored to deliver visible results, boosting confidence and overall body wellness.",
        serviceSevenSecond:"Our clinic takes pride in offering exceptional manual therapy services that are unmatched in quality and precision. These hands-on treatments are personalized to address specific patient needs, focusing on pain relief, muscle recovery, and mobility improvement. Our therapists use skilled techniques to manipulate and mobilize muscles and joints, providing relief that promotes faster recovery. This highly specialized, one-on-one approach has no competition, ensuring each patient receives care that is uniquely suited to their body and goals.",


        blogHeader:"Explore a World of Medical Insights",
        blogSecond:"Discover engaging blogs and articles that bring medical knowledge and wellness tips to your fingertips.",
        cardOne: "Causes of Back and Neck Pain",
        cardOneDate: "Thursday Nov 28, 2024",
        cardOneDetail: "Back and neck pain are common health issues that can affect daily life. They may be caused by various factors, such as muscle strain, poor posture, or vertebral issues. A range of treatments can help alleviate this pain, including physical therapy and specific exercises.",        
        cardTwo: "Parkinson's Disease",
        cardTwoDate: "Friday Nov 29, 2024",
        cardTwoDetail: "Parkinson's disease is a neurological disorder that affects movement and often develops gradually over time. Symptoms include hand tremors, slow movement, and muscle stiffness, with a range of treatments available to help manage symptoms and improve quality of life.",        
        cardThree: "Spinal Cord Injury",
        cardThreeDate: "Saturday Nov 30, 2024",
        cardThreeDetail: "Spinal cord injury can lead to loss of motor function or sensation in the body, with severity depending on the injury location and extent of damage. Various treatment options are available to support recovery and improve quality of life, such as physical therapy and rehabilitation.",        
        cardButton:"Explore Blogs",


        doctor:"Doctor",
        docName:"Ahmed Saber ElGharabwy",
        docDetail:"Welcome to El Gharabawy Clinic, a trusted name in physiotherapy and nutrition since 1999. We are committed to providing exceptional care across a wide range of services, from orthopedic and neurological physiotherapy to specialized pediatric treatment. Our expertise extends to advanced skin, hair, and joint rejuvenation through plasma injections, along with effective weight-loss solutions like mesotherapy and innovative fat-burning technologies such as cavitation, radio frequency, and electric pulses. Our unmatched manual therapies set us apart, as each session is personalized to ensure maximum recovery and wellness. At El Gharabawy, we deliver compassionate, professional care designed to elevate your health journey.",
        
        
        openHours:"Open Hours",
        openHoursDetail:"You can visit us according to the specified working hours",
        firstHour:"Monday - Friday",
        secondHour:"Saturday",
        thirdHour:"Monday - Thursday",


        bookingHead:"BOOKING",
        booking:"Book",
        name:"Name",
        age:"Age",
        phoneNumber:"Phone Number",
        selectService:"Select a Service",
        date: "Date",

        errorName:"Name is required",
        errorAge:"Age is required",
        errorDate:"Date is required",
        errorPhone:"Phone Number is required",
        errorService:"Service selection is required",    

        home: "Home",
        services: "Services",
        blogs: "Blogs",
        aboutUs: "About Us",
        clinicName: "Clinic Name",
        links: "Quick Links",
        footerText:"We are developing high-quality resources and tools to support healthcare professionals in delivering exceptional patient care and advancing their medical practice"

      },
    },
    ar: {
      translation: {
        welcome: "مرحبًا بكم في عيادة الغرباوي",
        book:"احجز موعد",
        bookSmall:"احجز موعد",

        slideTextOne:"تعرف على خدماتنا المتميزة في العلاج الطبيعي",
        slideTextTwo: "رعايتك الصحية تبدأ هنا",
        slideTextThree: "رعايتك تأتي أولاً",
        slideTextFour: "فريقنا المحترف يضمن لك أفضل رعاية",
        slideTextFive: "معاً نحو التعافي السريع",

        serviceOne:"العلاج الطبيعي للمرضى المصابين بمشاكل العظام والأعصاب",
        serviceTwo:"العلاج الطبيعي للأطفال",
        serviceThree:"الحجامة",
        serviceFour:"حقن البلازما للبشرة والشعر والمفاصل",
        serviceFive: "التغذية وحلول خسارة الوزن",
        serviceSix: "علاجات حرق الدهون: الكافيتيشن، الترددات الراديوية، الشفط، والنبضات الكهربائية",
        serviceSeven: "العلاجات اليدوية الفريدة",
        serviceHeader:"نحن نقدم خدمات متنوعة لتحسين صحتك",
        serviceSecond:"نحن ملتزمون بتقديم رعاية شاملة ومخصصة لتلبية احتياجاتك الصحية",
        serviceOneSecond:"تقدم عيادة الغرباوي علاجات متخصصة في العلاج الطبيعي للمصابين بمشاكل العظام والأعصاب، مثل حالات ما بعد الكسور وآلام المفاصل وإصابات العمود الفقري والمزيد. من خلال برامج تمارين مخصصة وعلاجات يدوية وأجهزة متطورة، نعمل على تقليل الألم، استعادة الحركة، وتعزيز قوة العضلات. كل خطة علاجية مصممة وفقاً لاحتياجات كل مريض، لضمان دعم فعال لرحلة التعافي. معالجونا ذوو الخبرة يستخدمون أحدث التقنيات لتعزيز الشفاء وتحسين الوظائف وتعزيز جودة الحياة.",
        serviceTwoSecond:"تقدم عيادة الغرباوي علاجًا طبيعيًا لطيفًا وفعالًا للأطفال، مع التركيز على الحالات التنموية والعضلية الهيكلية. نحن نفهم احتياجات الأطفال ونسعى لخلق بيئة مريحة وودية تضمن راحتهم. فريقنا مؤهل لعلاج مجموعة متنوعة من الحالات مثل تأخر النمو والرعاية بعد الإصابات، مما يساعد الأطفال على تحسين المهارات الحركية والمرونة والقوة. تُخطط كل جلسة لتكون ممتعة وعلاجية، مما يشجع الأطفال على المشاركة بفعالية في عملية شفائهم.",
        serviceThreeSecond:"تعد عيادة الغرباوي من بين أفضل مقدمي خدمة الحجامة العلاجية لمن يبحثون عن علاج طبيعي لتخفيف الألم وإزالة السموم. تعمل الحجامة على تحسين الدورة الدموية وتقليل التوتر العضلي وتخفيف العديد من الآلام مثل الصداع المزمن. يلتزم مختصونا بأعلى معايير النظافة ويستخدمون تقنيات حديثة لضمان تجربة آمنة وفعالة ومنعشة. هذا العلاج لا يعزز الشفاء البدني فقط بل يحسن أيضًا من مستوى الرفاهية العامة والاسترخاء.",
        serviceFourSecond:"تستند علاجات حقن البلازما لدينا إلى أحدث التقنيات لتعزيز الشفاء الطبيعي وتجديد البشرة والشعر والمفاصل. باستخدام بلازما الجسم الغنية بعوامل النمو، نستهدف المناطق التي تحتاج إلى شفاء وتجديد. تساعد حقن البلازما على تقليل التجاعيد والندوب للبشرة، وتحفيز نمو الشعر، وتخفيف آلام المفاصل وتعزيز إصلاح الأنسجة. هذا العلاج غير الجراحي آمن وفعال ومثالي لمن يسعون إلى تجميل طبيعي بنتائج تدوم طويلاً.",
        serviceFiveSecond:"في عيادة الغرباوي، نؤمن ببرامج تغذية وخسارة وزن مخصصة تعزز الصحة واللياقة بشكل مستدام. يقوم خبراؤنا بتقييم أهداف كل مريض ونوع جسمه لوضع خطط تغذية مخصصة. نجمع بين استراتيجيات فعالة لخسارة الوزن، مثل الاستشارات الغذائية، الميزوثيرابي، والمتابعة الدقيقة لدعم رحلتكم نحو اللياقة. يهدف نهجنا الشامل إلى تعزيز التمثيل الغذائي والطاقة والرفاهية العامة، مما يساعد على بناء عادات صحية مستدامة وطويلة الأمد.",
        serviceSixSecond:"لمن يبحثون عن حلول متطورة لحرق الدهون، نقدم أحدث العلاجات مثل الكافيتيشن، الترددات الراديوية، الشفط، والنبضات الكهربائية. تستهدف هذه التقنيات غير الجراحية ترسبات الدهون الصعبة، وتحسن مرونة الجلد، وتعيد تشكيل الجسم بدون الحاجة للجراحة. صُممت كل جلسة لتقليل الدهون بشكل آمن وفعال، مما يساعد المرضى على الحصول على قوام مشدود وأكثر تناسقاً. يضمن متخصصونا أن تكون كل جلسة مريحة ومخصصة لتحقيق نتائج مرئية، مما يعزز الثقة والصحة العامة للجسم.",
        serviceSevenSecond:"تفخر عيادتنا بتقديم خدمات علاج يدوي استثنائية تتميز بجودة ودقة عالية. تستهدف هذه العلاجات اليدوية احتياجات كل مريض بشكل مخصص، مع التركيز على تخفيف الألم، استعادة العضلات، وتحسين الحركة. يستخدم معالجونا تقنيات متقدمة لتحريك وتحريك العضلات والمفاصل، مما يوفر راحة تسهم في تسريع عملية الشفاء. هذا النهج المخصص والفريد من نوعه يضمن حصول كل مريض على الرعاية التي تناسب احتياجات جسمه وأهدافه.",

        blogHeader:"تابع آخر وأحدث الأخبار الطبية لدينا",
        blogSecond:"ابقَ على اطلاع دائم بأحدث التطورات والمعلومات الطبية لتكون على دراية بكل ما هو جديد في مجال الصحة والعلاج",
        cardOne: "أسباب آلام الظهر والرقبة",
        cardOneDate: "الخميس 28 نوفمبر 2024",
        cardOneDetail: "تعد آلام الظهر والرقبة من المشاكل الصحية الشائعة التي يمكن أن تؤثر على الحياة اليومية. يمكن أن تكون ناتجة عن عدة عوامل، مثل الإجهاد العضلي أو الوضعية الخاطئة أو مشاكل الفقرات، وهناك مجموعة من العلاجات التي قد تساعد في التخفيف من هذه الآلام، مثل العلاج الطبيعي والتمارين الخاصة.",        
        cardTwo: "الشلل الرعاش",
        cardTwoDate: "الجمعة 29 نوفمبر 2024",
        cardTwoDetail: "الشلل الرعاش هو اضطراب عصبي يؤثر على الحركة، وغالباً ما يتطور بشكل تدريجي مع مرور الوقت. تشمل الأعراض اهتزاز اليدين، بطء الحركة، وتصلب العضلات، وهناك مجموعة من العلاجات التي قد تساعد في إدارة الأعراض وتحسين جودة الحياة.",        
        cardThree: "إصابة الحبل الشوكي",
        cardThreeDate: "السبت 30 نوفمبر 2024",
        cardThreeDetail: "إصابة الحبل الشوكي يمكن أن تؤدي إلى فقدان وظائف الحركة أو الإحساس في الجسم، وتعتمد شدتها على مكان الإصابة ومدى الضرر. تتوفر عدة خيارات علاجية تهدف إلى دعم التعافي وتحسين جودة الحياة، مثل العلاج الطبيعي وإعادة التأهيل.",        
        cardButton:"المدونات",

        doctor:"الدكتور",
        docName:"احمد صابر الغرباوي",
        docDetail:"مرحبًا بكم في عيادة الغرباوي، الاسم الموثوق في العلاج الطبيعي والتغذية منذ عام 1999. نحن ملتزمون بتقديم رعاية استثنائية عبر مجموعة واسعة من الخدمات، من العلاج الطبيعي لحالات العظام والأعصاب إلى علاج الأطفال المتخصص. تشمل خدماتنا أيضًا تجديد البشرة والشعر والمفاصل عن طريق حقن البلازما، بالإضافة إلى حلول فعّالة لخسارة الوزن مثل الميزوثيرابي وأحدث تقنيات حرق الدهون مثل الكافيتيشن والترددات الراديوية والنبضات الكهربائية. ما يميزنا هو العلاجات اليدوية الفريدة، حيث نخصص كل جلسة لضمان أعلى درجات الشفاء والرفاهية. في عيادة الغرباوي، نقدم رعاية احترافية وداعمة لتعزيز صحتكم.",

        
        openHours:"أيام العمل",
        openHoursDetail:"يمكنكم زيارتنا وفقاً لأوقات العمل المحددة",
        firstHour: "الاثنين - الجمعة",
        secondHour: "السبت",
        thirdHour: "الاثنين - الخميس",

        bookingHead:"الموعد",
        booking: "احجز",
        name: "الاسم",
        age: "العمر",
        phoneNumber: "رقم الهاتف",
        selectService: "اختر خدمة",
        date: "الموعد",

 
        errorName: "الاسم مطلوب",
        errorAge: "العمر مطلوب",
        errorDate: "التاريخ مطلوب",
        errorPhone: "رقم الهاتف مطلوب",
        errorService: "يجب اختيار الخدمة",

        home: "الصفحة الرئيسية",
        services: "الخدمات",
        blogs: "المدونات",
        aboutUs: "معلومات عنا",
        clinicName: "اسم العيادة",
        links: "روابط مفيدة",
        footerText:"نحن نقوم بتطوير موارد وأدوات عالية الجودة لدعم المتخصصين في الرعاية الصحية في تقديم رعاية متميزة للمرضى وتعزيز ممارساتهم الطبية"
      },
    },
  },
  lng: 'ar', // default language
  fallbackLng: 'en', // if the selected language translation is missing
  interpolation: {
    escapeValue: false, // React already escapes content
  },
});
document.documentElement.setAttribute('dir', "rtl");
i18n.on('languageChanged', (lng) => {
    const dir = lng === 'en' ? 'ltr' : 'rtl';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.style.setProperty(
      '--font-family',
      lng === 'ar' ? 'var(--font-ar)' : 'var(--font-en)'
    );
  });

export default i18n;
