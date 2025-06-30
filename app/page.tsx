'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Users, Rocket, Zap, Check, Globe, ShoppingCart, Smartphone, X, ExternalLink } from 'lucide-react';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// SEO Keywords: تصميم مواقع دبي, متاجر إلكترونية, صفحات هبوط, تسويق رقمي, شركة تصميم مواقع الإمارات

export default function Home() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const pricingRef = useRef(null);
  const contactRef = useRef(null);
  
  // Modal state
  const [selectedProject, setSelectedProject] = useState<{
    image: string;
    title: string;
    description: string;
    fullDescription: string;
    features: string[];
    website: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageAnimation, setImageAnimation] = useState(false);

  // WhatsApp function with conversion tracking
  const openWhatsApp = (message: string = '') => {
    const phoneNumber = '971503412174'; // Replace with your actual WhatsApp number
    const encodedMessage = encodeURIComponent(message || 'مرحباً، أريد الاستفسار عن خدماتكم');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Track conversion before opening WhatsApp
    if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion(whatsappUrl);
    } else {
      // Fallback if tracking is not available
      window.open(whatsappUrl, '_blank');
    }
  };

  useEffect(() => {
    // Hero animations
    gsap.fromTo('.hero-title', 
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
    );

    gsap.fromTo('.hero-subtitle', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.3, ease: 'power3.out' }
    );

    gsap.fromTo('.hero-cta', 
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, delay: 0.6, ease: 'back.out(1.7)' }
    );

    // Parallax background
    gsap.to('.parallax-bg', {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: '.parallax-bg',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    // Services animation
    gsap.fromTo('.service-card', 
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.services-section',
          start: 'top 80%',
          end: 'bottom 20%',
        }
      }
    );

    // Portfolio items animation
    gsap.fromTo('.portfolio-item', 
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.portfolio-section',
          start: 'top 80%',
        }
      }
    );

    // Stats counter animation
    gsap.fromTo('.stat-number', 
      { textContent: 0 },
      {
        textContent: (i: number, el: Element) => el.getAttribute('data-count'),
        duration: 2,
        ease: 'power2.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: '.stats-section',
          start: 'top 80%',
        }
      }
    );

  }, []);

  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ backgroundColor: '#272727' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="/clicksalesmedialogo.png" 
                alt="Click Sales Media" 
                className="h-12 w-auto"
              />
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
              {[
                { href: "#home", label: "الرئيسية" },
                { href: "#services", label: "خدماتنا" },
                { href: "#portfolio", label: "أعمالنا" },
                { href: "#pricing", label: "الأسعار" },
                { href: "#contact", label: "تواصل معنا" }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="relative text-white hover:text-[#c3a177] transition-all duration-300 font-medium text-lg py-2 px-1"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.href.slice(1))?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                >
                  {item.label}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#c3a177] to-[#d4b896] origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-0.5 bg-white transition-all duration-300"></div>
              <div className="w-6 h-0.5 bg-white transition-all duration-300"></div>
              <div className="w-6 h-0.5 bg-white transition-all duration-300"></div>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero.webp" 
            alt="Hero Background" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 z-10" style={{ backgroundColor: '#272727', opacity: 0.8 }}></div>
        
        {/* Parallax Background Effects */}
        <div className="parallax-bg absolute inset-0 z-20 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-600/20"></div>
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-48 h-48 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-30">
          <motion.h1 
            className="hero-title text-5xl md:text-7xl font-bold mb-6"
            style={{ color: '#c3a177' }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            نحن نبني مستقبلك الرقمي
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            نصمم ونطور مواقع إلكترونية ومتاجر رقمية احترافية تساعد عملك على النمو والازدهار في العالم الرقمي
          </motion.p>

          <motion.div 
            className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.button 
              className="bg-gradient-to-br from-[#c3a177] from-20% via-[#AD8253] via-30% to-[#8C5C28] text-white px-10 py-5 rounded-full font-bold text-lg hover:from-[#d4b896] hover:via-[#c3a177] hover:to-[#AD8253] transition-all duration-300 shadow-2xl flex items-center gap-3 relative overflow-hidden group"
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(195, 161, 119, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openWhatsApp('مرحباً، أريد بدء مشروع جديد معكم')}
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <FaWhatsapp className="w-6 h-6 relative z-10" />
              <span className="relative z-10">ابدأ مشروعك الآن</span>
            </motion.button>
            <motion.button 
              className="border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              شاهد أعمالنا
            </motion.button>
          </motion.div>

          {/* Stats */}
          <div className="stats-section grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="stat-number text-3xl font-bold" style={{ color: '#c3a177' }} data-count="400">0</div>
              <div className="text-sm opacity-80">مشروع مكتمل</div>
            </div>
            <div className="text-center">
              <div className="stat-number text-3xl font-bold" style={{ color: '#c3a177' }} data-count="300">0</div>
              <div className="text-sm opacity-80">عميل سعيد</div>
            </div>
            <div className="text-center">
              <div className="stat-number text-3xl font-bold" style={{ color: '#c3a177' }} data-count="10">0</div>
              <div className="text-sm opacity-80">سنوات خبرة</div>
            </div>
            <div className="text-center">
              <div className="stat-number text-3xl font-bold" style={{ color: '#c3a177' }} data-count="24">0</div>
              <div className="text-sm opacity-80">ساعة دعم</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#c3a177] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#c3a177] rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <motion.div 
                  className="inline-block bg-gradient-to-r from-[#c3a177] to-[#d4b896] text-black px-6 py-2 rounded-full text-sm font-bold mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  من نحن
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  <span style={{ color: '#c3a177' }}>أكثر من عقد</span>
                  <br />
                  <span className="text-white">من الخبرة والإبداع</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#c3a177] to-transparent rounded-full mb-8"></div>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-white/90">
                <p>
                  نحن فريق من المحترفين المتخصصين في <span className="text-[#c3a177] font-semibold">تصميم وتطوير المواقع الإلكترونية</span> منذ أكثر من 10 سنوات. نجمع بين الخبرة العريقة والتقنيات الحديثة لنقدم لك حلول رقمية متطورة تواكب العصر.
                </p>
                <p>
                  نستخدم <span className="text-[#c3a177] font-semibold">أحدث التقنيات والأدوات</span> لضمان سرعة أداء مواقعنا وتحسين تجربة المستخدم وتحسين محركات البحث. فلسفتنا تقوم على جعل كل موقع نصممه <span className="text-[#c3a177] font-semibold">أداة تسويقية قوية</span> تحقق أهدافك التجارية.
                </p>
                <p>
                  نواكب التطور التقني ونستفيد من <span className="text-[#c3a177] font-semibold">تقنيات الذكاء الاصطناعي</span> في تطوير حلولنا، مما يضمن لك موقع ذكي وتفاعلي يتميز بالأداء العالي والوظائف المتقدمة.
                </p>
              </div>

              <motion.div 
                className="flex items-center gap-6 pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.button
                  className="bg-gradient-to-br from-[#c3a177] from-20% via-[#AD8253] via-30% to-[#8C5C28] text-white px-8 py-4 rounded-full font-bold hover:from-[#d4b896] hover:via-[#c3a177] hover:to-[#AD8253] transition-all duration-300 shadow-lg relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openWhatsApp('مرحباً، أريد معرفة المزيد عن خبراتكم وخدماتكم')}
                >
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative z-10">اعرف المزيد عنا</span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Visual Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-lg p-8 rounded-3xl border border-white/10">
                {/* Experience Highlights */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <motion.div 
                    className="text-center p-6 bg-gradient-to-br from-[#c3a177]/10 to-transparent rounded-2xl border border-[#c3a177]/20"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-3xl font-bold mb-2" style={{ color: '#c3a177' }}>+10</div>
                    <div className="text-sm text-white/80">سنوات خبرة</div>
                  </motion.div>
                  <motion.div 
                    className="text-center p-6 bg-gradient-to-br from-[#c3a177]/10 to-transparent rounded-2xl border border-[#c3a177]/20"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-3xl font-bold mb-2" style={{ color: '#c3a177' }}>AI</div>
                    <div className="text-sm text-white/80">تقنيات ذكية</div>
                  </motion.div>
                </div>

                {/* Technology Stack */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#c3a177' }}>تقنياتنا المتقدمة</h3>
                  
                  {[
                    { icon: <Zap className="w-5 h-5" />, title: "أداء فائق السرعة", desc: "تحسين الأداء والسرعة" },
                    { icon: <Users className="w-5 h-5" />, title: "تجربة مستخدم متميزة", desc: "UX/UI حديث ومتجاوب" },
                    { icon: <Rocket className="w-5 h-5" />, title: "تحسين محركات البحث", desc: "SEO متقدم ومحسن" },
                    { icon: <Star className="w-5 h-5" />, title: "ذكاء اصطناعي", desc: "تقنيات AI متطورة" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/10 hover:border-[#c3a177]/30 transition-all duration-300"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-[#c3a177] to-[#d4b896] rounded-full flex items-center justify-center text-black">
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{item.title}</div>
                        <div className="text-sm text-white/70">{item.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 bg-gradient-to-r from-[#c3a177] to-[#d4b896] text-black px-4 py-2 rounded-full text-sm font-bold shadow-xl"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                خبرة موثوقة
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl"
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                تقنيات حديثة
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Stats */}
          <motion.div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              { number: "100%", label: "مواقع محسنة للجوال" },
              { number: "99%", label: "وقت تشغيل مضمون" },
              { number: "24/7", label: "دعم فني متواصل" },
              { number: "A+", label: "تقييم الأداء والسرعة" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#c3a177]/30 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#c3a177' }}>
                  {stat.number}
                </div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="services-section py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#c3a177' }}>خدماتنا المتميزة</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">نقدم حلول شاملة لجميع احتياجاتك الرقمية</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-12 h-12" />,
                title: "تصميم المواقع الإلكترونية",
                description: "مواقع احترافية سريعة ومتجاوبة مع جميع الأجهزة",
                features: ["تصميم عصري", "سرعة فائقة", "متوافق مع الجوال", "SEO محسن"]
              },
              {
                icon: <ShoppingCart className="w-12 h-12" />,
                title: "المتاجر الإلكترونية",
                description: "متاجر رقمية متكاملة لبيع منتجاتك أونلاين",
                features: ["نظام دفع آمن", "إدارة المخزون", "تتبع الطلبات", "تقارير مفصلة"]
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "أدوات التسويق والتتبع",
                description: "أدوات متطورة لتتبع وتحليل أداء حملاتك التسويقية",
                features: ["تتبع التحويلات", "تحليل البيانات", "إعداد التقارير", "مراقبة الأداء"]
              },
              {
                icon: <Rocket className="w-12 h-12" />,
                title: "التسويق الرقمي",
                description: "استراتيجيات تسويقية فعالة لنمو عملك",
                features: ["إدارة السوشيال ميديا", "إعلانات مدفوعة", "تحسين محركات البحث", "استراتيجيات المحتوى"]
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "الاستضافة والدعم",
                description: "خدمات استضافة موثوقة مع دعم فني متواصل",
                features: ["أمان عالي", "نسخ احتياطية", "دعم 24/7", "سرعة استجابة"]
              },
              {
                icon: <Smartphone className="w-12 h-12" />,
                title: "الاستشارات التقنية",
                description: "استشارات متخصصة لتطوير استراتيجيتك الرقمية",
                features: ["تحليل الأعمال", "خطط استراتيجية", "دراسة المنافسين", "توصيات مخصصة"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="service-card bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-yellow-400/50 transition-all duration-300"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="mb-4" style={{ color: '#c3a177' }}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#c3a177' }}>{service.title}</h3>
                <p className="mb-6 opacity-90">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-4 h-4 ml-2 text-green-400" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" ref={portfolioRef} className="portfolio-section py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#c3a177' }}>معرض أعمالنا</h2>
            <p className="text-xl opacity-90">مشاريع ناجحة نفخر بإنجازها</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/portfolio/avadaparfum.png",
                title: "أفادا العطور",
                description: "متجر إلكتروني فاخر للعطور والأزياء",
                fullDescription: "أفادا العطور هو متجر إلكتروني فاخر متخصص في بيع العطور والأزياء العصرية. تم تصميم الموقع بأحدث التقنيات لتوفير تجربة تسوق استثنائية للعملاء مع واجهة أنيقة وسهلة الاستخدام.",
                features: [
                  "تصميم واجهة أنيقة ومتجاوبة",
                  "نظام دفع إلكتروني آمن ومتعدد",
                  "كتالوج منتجات تفاعلي",
                  "نظام إدارة المخزون",
                  "تحسين محركات البحث SEO",
                  "دعم اللغتين العربية والإنجليزية"
                ],
                website: "https://avadaparfum.com"
              },
              {
                image: "/portfolio/harmony.png", 
                title: "هارموني",
                description: "موقع إلكتروني عصري ومتجاوب",
                fullDescription: "موقع هارموني هو منصة رقمية عصرية تهدف إلى تقديم خدمات متنوعة بتصميم أنيق ومتجاوب. تم تطوير الموقع ليكون سريع التحميل ومحسن لجميع الأجهزة.",
                features: [
                  "تصميم عصري ومتجاوب",
                  "أداء عالي وسرعة تحميل فائقة",
                  "تحسين تجربة المستخدم UX/UI",
                  "تطوير بتقنيات حديثة",
                  "دعم جميع المتصفحات",
                  "تحسين محركات البحث"
                ],
                website: "https://harmony-example.com"
              },
              {
                image: "/portfolio/wse.png",
                title: "WSE - وول ستريت إنجلش",
                description: "صفحة هبوط تعليمية لتعلم اللغة الإنجليزية أونلاين",
                fullDescription: "صفحة هبوط احترافية لمعهد وول ستريت إنجلش لتعليم اللغة الإنجليزية أونلاين. تم تصميم الصفحة لتحويل الزوار إلى طلاب مسجلين من خلال عرض مميزات التعلم الأونلاين وشهادات الطلاب والخبرة العريقة للمعهد.",
                features: [
                  "صفحة هبوط محسنة للتحويل",
                  "تصميم متجاوب لجميع الأجهزة",
                  "نماذج تسجيل تفاعلية",
                  "عرض مميزات التعلم الأونلاين",
                  "شهادات وتقييمات الطلاب",
                  "أقسام للخبراء والاستشارة",
                  "أنظمة دفع متعددة ومرنة",
                  "تحسين محركات البحث SEO",
                  "تتبع التحويلات والتحليلات",
                  "محتوى مصمم للسوق السعودي"
                ],
                website: "https://campaign.wallstreetenglish.edu.sa/"
              },
              {
                image: "/portfolio/scs.png",
                title: "SCS",
                description: "موقع تسويقي لجلب العملاء المحتملين",
                fullDescription: "SCS يقدم حلول تقنية متقدمة ومبتكرة للشركات التي تسعى للتطور الرقمي. تم تصميم النظام ليلبي احتياجات الأعمال الحديثة بكفاءة وفعالية عالية.",
                features: [
                  "حلول تقنية مبتكرة ومتطورة",
                  "تطوير أنظمة مخصصة",
                  "تكامل مع الأنظمة الموجودة",
                  "واجهات برمجة تطبيقات API",
                  "أمان وحماية البيانات",
                  "دعم تقني متخصص"
                ],
                website: "https://cafardservices.com"
              },
              {
                image: "/portfolio/tohatsu.png",
                title: "توهاتسو",
                description: "موقع شركة صناعية احترافي",
                fullDescription: "موقع شركة توهاتسو الصناعية هو منصة رقمية احترافية تعرض منتجات وخدمات الشركة الصناعية. تم تصميم الموقع ليعكس قوة ومهنية الشركة في القطاع الصناعي.",
                features: [
                  "تصميم احترافي يعكس هوية الشركة",
                  "عرض المنتجات والخدمات الصناعية",
                  "نظام استعلامات وطلبات",
                  "معرض صور ومقاطع فيديو",
                  "معلومات تفصيلية عن الشركة",
                  "نماذج التواصل المتقدمة"
                ],
                website: "https://tohatsuarabia.com"
              },
              {
                image: "/portfolio/greenroasteries.png",
                title: "المحامص الخضراء",
                description: "متجر إلكتروني للقهوة والمحامص",
                fullDescription: "المحامص الخضراء هو متجر إلكتروني متخصص في بيع القهوة والمحامص عالية الجودة. يوفر الموقع تجربة تسوق مميزة لعشاق القهوة مع أنواع مختارة من أجود أنواع القهوة.",
                features: [
                  "متجر إلكتروني متخصص في القهوة",
                  "كتالوج منتجات تفاعلي ومصور",
                  "نظام طلبات وتوصيل",
                  "معلومات تفصيلية عن أنواع القهوة",
                  "نظام تقييم ومراجعات",
                  "برنامج ولاء العملاء"
                ],
                website: "https://thegreenroasteries.com"
              },
              {
                image: "/portfolio/mydoctorclinic.png",
                title: "عيادة دكتور كلينك",
                description: "موقع عيادة طبية متقدم",
                fullDescription: "عيادة دكتور كلينك هو موقع طبي متطور يقدم خدمات طبية شاملة مع نظام حجز مواعيد إلكتروني. تم تصميم الموقع لتوفير تجربة مريحة للمرضى مع واجهة سهلة الاستخدام.",
                features: [
                  "نظام حجز مواعيد إلكتروني",
                  "ملفات المرضى الرقمية",
                  "استشارات طبية أونلاين",
                  "عرض الخدمات الطبية",
                  "تذكير بالمواعيد",
                  "نظام دفع آمن للخدمات"
                ],
                website: "https://kw.my-doctor-dental.com"
              },
              {
                image: "/portfolio/zeroglissage.png",
                title: "زيرو جليساج",
                description: "حلول مبتكرة لمنع الانزلاق",
                fullDescription: "زيرو جليساج هو موقع متخصص في تقديم حلول مبتكرة لمنع الانزلاق وضمان السلامة. يوفر الموقع معلومات شاملة عن المنتجات والخدمات مع واجهة عصرية وسهلة التصفح.",
                features: [
                  "عرض شامل للمنتجات والحلول",
                  "تصميم عصري ومهني",
                  "معلومات تقنية مفصلة",
                  "نظام طلب عروض أسعار",
                  "دراسات حالة وأمثلة",
                  "دعم فني متخصص"
                ],
                website: "https://zeroglissage.com"
              },
              {
                image: "/portfolio/newrayan.png",
                title: "نيو ريان للأسنان",
                description: "عيادة أسنان متطورة",
                fullDescription: "نيو ريان للأسنان هو موقع عيادة أسنان متطورة يوفر خدمات طب الأسنان الشاملة. تم تصميم الموقع بواجهة جذابة ونظام حجز مواعيد متطور لضمان أفضل خدمة للمرضى.",
                features: [
                  "نظام حجز مواعيد متطور",
                  "عرض خدمات طب الأسنان",
                  "معرض صور للنتائج",
                  "معلومات الأطباء والخبرات",
                  "نصائح طبية وإرشادات",
                  "تواصل مباشر مع العيادة"
                ],
                website: "https://kw.new-rayan-dental.com"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                className="portfolio-item group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#C3A177] from-20% via-[#AD8253] via-30% to-[#8C5C28] p-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Text Content Above Image */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-sm text-white/90">{project.description}</p>
                </div>
                
                {/* Image Container */}
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.button 
                      className="bg-white text-black px-6 py-3 rounded-full font-bold"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        setSelectedProject(project);
                        setIsModalOpen(true);
                        setImageAnimation(false);
                        // Start image animation after modal opens
                        setTimeout(() => {
                          setImageAnimation(true);
                        }, 500);
                      }}
                    >
                      عرض المشروع
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Carousel Section */}
      <section className="py-20 bg-black/10">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#c3a177' }}>عملاؤنا الكرام</h2>
            <p className="text-xl opacity-90">شركاء النجاح الذين نفخر بخدمتهم</p>
          </motion.div>

          {/* Clients Logos Carousel */}
          <div className="relative overflow-hidden py-4">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#272727] to-transparent z-30 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#272727] to-transparent z-30 pointer-events-none"></div>
            
            {/* Scrolling Container */}
            <div className="flex animate-scroll-seamless">
              {/* Create a seamless loop with duplicated content */}
              {[...Array(4)].map((_, setIndex) => (
                <div key={setIndex} className="flex flex-shrink-0">
                  {[
                    "thegreenroasteries-logo.png",
                    "wse.png", 
                    "ses-school-logo-clicksalesmedia.png",
                    "storage.png",
                    "mahadahlan.png",
                    "lavivianex.png",
                    "maeva-2.png",
                    "inspeedglobal-1.png",
                    "joynt-1.png",
                    "eshraq.png",
                    "erosforlady.png",
                    "bajunaid-company.png",
                    "aaa-Logo.png"
                  ].map((logo, index) => (
                    <motion.div
                      key={`${setIndex}-${index}`}
                      className="flex-shrink-0 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:border-[#c3a177]/50 transition-all duration-300 group mx-4 relative z-20"
                      whileHover={{ scale: 1.05, y: -5, zIndex: 40 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      style={{ width: '200px' }}
                    >
                      <img
                        src={`/clients/${logo}`}
                        alt="Client Logo"
                        className="h-16 w-32 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0 mx-auto"
                      />
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Stats Row */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              { number: "100+", label: "عميل راضي" },
              { number: "15+", label: "دولة مختلفة" },
              { number: "500+", label: "مشروع ناجح" },
              { number: "98%", label: "معدل الرضا" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold mb-2" style={{ color: '#c3a177' }}>
                  {stat.number}
                </div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#c3a177' }}>ماذا يقول عملاؤنا</h2>
            <p className="text-xl opacity-90">شهادات حقيقية من عملائنا الكرام</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                name: "هنادي",
                role: "الرئيس التنفيذي - Pure N Bio",
                content: "نحن في غاية السعادة بالمتجر الإلكتروني الذي طوره فريق كليك سيلز ميديا. الأداء ممتاز والمبيعات في تزايد مستمر. التصميم احترافي ويعكس هوية علامتنا التجارية بشكل مثالي. شكراً لكم على الجهود المبذولة.",
                rating: 5
              },
              {
                name: "أنس",
                role: "الرئيس التنفيذي - توهاتسو السعودية",
                content: "الموقع الإلكتروني الذي أنجزوه لنا أنيق وعصري ومحسن بطريقة احترافية. نحن راضون جداً عن النتائج وسرعة الأداء. الفريق متعاون ومتفهم لاحتياجاتنا التجارية. أنصح بالتعامل معهم بقوة.",
                rating: 5
              },
              {
                name: "مروة",
                role: "رئيسة قسم التسويق - عيادة نيو ريان",
                content: "كليك سيلز ميديا ساعدتنا كثيراً في تحسين موقعنا الإلكتروني و SEO وإنشاء صفحات الهبوط التسويقية. النتائج فاقت توقعاتنا والزيارات زادت بشكل ملحوظ. فريق محترف ويفهم متطلبات التسويق الرقمي الحديث.",
                rating: 5
              },
              {
                name: "محمود",
                role: "رئيس القسم التجاري - وول ستريت السعودية",
                content: "كليك سيلز ميديا ساعدتنا في أتمتة موقعنا الإلكتروني باستخدام الذكاء الاصطناعي و APIs المتقدمة. الموقع أصبح أكثر ديناميكية وتفاعلاً. النتائج التي نحققها الآن رائعة والعملاء راضون عن التجربة الجديدة.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-6 text-lg leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
                <div>
                  <h4 className="font-bold" style={{ color: '#c3a177' }}>{testimonial.name}</h4>
                  <p className="text-sm opacity-70">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" ref={pricingRef} className="py-20" style={{ backgroundColor: '#272727' }}>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#c3a177' }}>باقات الأسعار</h2>
            <p className="text-xl opacity-90">اختر الباقة المناسبة لك</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "صفحات الهبوط",
                description: "مثالية للحملات التسويقية والترويج",
                features: [
                  "تجربة مستخدم متميزة (UX)",
                  "أداء فائق السرعة",
                  "هيكل تسويقي محترف",
                  "نماذج تفاعلية متقدمة",
                  "تكامل واتساب",
                  "نظام تتبع العملاء والمبيعات",
                  "تكامل نظام إدارة العملاء (CRM)"
                ],
                popular: false
              },
              {
                name: "المواقع الإلكترونية",
                description: "حلول شاملة للأعمال والشركات",
                features: [
                  "تجربة مستخدم متميزة (UX)",
                  "أداء فائق السرعة",
                  "تصميم عصري ومتجاوب",
                  "نماذج تفاعلية متقدمة",
                  "تكامل واتساب",
                  "نظام تتبع العملاء والمبيعات",
                  "تكامل نظام إدارة العملاء (CRM)",
                  "عدة صفحات متخصصة",
                  "متجر إلكتروني أساسي",
                  "لوحة تحكم إدارية",
                  "تحسين محركات البحث (SEO)",
                  "دعم متعدد اللغات",
                  "استضافة مجانية لمدة سنتين"
                ],
                popular: true
              },
              {
                name: "المتاجر الإلكترونية",
                description: "منصة تجارة إلكترونية متكاملة ومتطورة",
                features: [
                  "تصميم عصري ومرن",
                  "سهولة استخدام للعملاء",
                  "كتالوج منتجات شامل",
                  "تحسين صفحات المنتجات",
                  "تحسين الثقة الاجتماعية",
                  "تحسين نظام المراجعات",
                  "بوابة إدارة شاملة",
                  "نظام العروض والحزم",
                  "أمان وحماية متقدمة",
                  "تكامل بوابات الدفع",
                  "تصميم ونظام فريد",
                  "استضافة مجانية لمدة 5 سنوات"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                className={`relative p-8 rounded-2xl border-2 ${
                  plan.popular 
                    ? 'border-[#c3a177]/50 bg-gradient-to-br from-[#c3a177] from-20% via-[#AD8253] via-30% to-[#8C5C28]' 
                    : 'border-white/20 bg-black/20'
                } backdrop-blur-sm`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      الأكثر شعبية
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-[#272727]' : ''}`} style={!plan.popular ? { color: '#c3a177' } : {}}>{plan.name}</h3>
                    <p className={`text-sm opacity-80 ${plan.popular ? 'text-[#272727]' : 'text-white'}`}>{plan.description}</p>
                  </div>
                  <motion.button
                    className={`py-3 px-6 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                      plan.popular
                        ? 'bg-[#272727] text-white hover:bg-[#606060]'
                        : 'bg-gradient-to-br from-[#c3a177] from-20% via-[#AD8253] via-30% to-[#8C5C28] text-white hover:from-[#d4b896] hover:via-[#c3a177] hover:to-[#AD8253]'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openWhatsApp(`مرحباً، أريد الاستفسار عن ${plan.name}`)}
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    اختر
                  </motion.button>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-4 h-4 text-green-400 ml-2 mt-1 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#c3a177' }}>تواصل معنا عبر واتساب</h2>
            <p className="text-xl opacity-90">ابدأ مشروعك اليوم واحصل على استشارة مجانية فورية</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* WhatsApp CTA Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <motion.div
                className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                                 <div className="w-16 h-16 bg-gradient-to-br from-[#c3a177] from-20% via-[#AD8253] via-30% to-[#8C5C28] rounded-full flex items-center justify-center mx-auto mb-4">
                   <Globe className="w-8 h-8 text-white" />
                 </div>
                 <h3 className="text-xl font-bold mb-3" style={{ color: '#c3a177' }}>موقع إلكتروني</h3>
                 <p className="mb-4 opacity-90 text-sm">احصل على موقع احترافي لعملك</p>
                 <motion.button
                   className="bg-gradient-to-br from-[#c3a177] from-20% via-[#AD8253] via-30% to-[#8C5C28] text-white px-6 py-3 rounded-full font-bold hover:from-[#d4b896] hover:via-[#c3a177] hover:to-[#AD8253] transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg relative overflow-hidden group"
                   whileHover={{ scale: 1.05, y: -2 }}
                   whileTap={{ scale: 0.95 }}
                   onClick={() => openWhatsApp('مرحباً، أريد الاستفسار عن تصميم موقع إلكتروني')}
                 >
                   <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                   <FaWhatsapp className="w-4 h-4 relative z-10" />
                   <span className="relative z-10">استفسر الآن</span>
                 </motion.button>
              </motion.div>

              <motion.div
                className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                                 <div className="w-16 h-16 bg-gradient-to-br from-[#c3a177] from-20% via-[#AD8253] via-30% to-[#8C5C28] rounded-full flex items-center justify-center mx-auto mb-4">
                   <ShoppingCart className="w-8 h-8 text-white" />
                 </div>
                 <h3 className="text-xl font-bold mb-3" style={{ color: '#c3a177' }}>متجر إلكتروني</h3>
                 <p className="mb-4 opacity-90 text-sm">ابدأ بيع منتجاتك أونلاين</p>
                 <motion.button
                   className="bg-gradient-to-br from-[#c3a177] from-20% via-[#AD8253] via-30% to-[#8C5C28] text-white px-6 py-3 rounded-full font-bold hover:from-[#d4b896] hover:via-[#c3a177] hover:to-[#AD8253] transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg relative overflow-hidden group"
                   whileHover={{ scale: 1.05, y: -2 }}
                   whileTap={{ scale: 0.95 }}
                   onClick={() => openWhatsApp('مرحباً، أريد الاستفسار عن إنشاء متجر إلكتروني')}
                 >
                   <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                   <FaWhatsapp className="w-4 h-4 relative z-10" />
                   <span className="relative z-10">استفسر الآن</span>
                 </motion.button>
               </motion.div>

               <motion.div
                 className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center"
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.3 }}
                 whileHover={{ scale: 1.05 }}
               >
                 <div className="w-16 h-16 bg-gradient-to-br from-[#c3a177] from-20% via-[#AD8253] via-30% to-[#8C5C28] rounded-full flex items-center justify-center mx-auto mb-4">
                   <Rocket className="w-8 h-8 text-white" />
                 </div>
                 <h3 className="text-xl font-bold mb-3" style={{ color: '#c3a177' }}>تسويق رقمي</h3>
                 <p className="mb-4 opacity-90 text-sm">نمي عملك بالتسويق الذكي</p>
                 <motion.button
                   className="bg-gradient-to-br from-[#c3a177] from-20% via-[#AD8253] via-30% to-[#8C5C28] text-white px-6 py-3 rounded-full font-bold hover:from-[#d4b896] hover:via-[#c3a177] hover:to-[#AD8253] transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg relative overflow-hidden group"
                   whileHover={{ scale: 1.05, y: -2 }}
                   whileTap={{ scale: 0.95 }}
                   onClick={() => openWhatsApp('مرحباً، أريد الاستفسار عن خدمات التسويق الرقمي')}
                 >
                   <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                   <FaWhatsapp className="w-4 h-4 relative z-10" />
                   <span className="relative z-10">استفسر الآن</span>
                 </motion.button>
              </motion.div>
            </div>

                         {/* Main WhatsApp CTA */}
             <motion.div
               className="relative bg-gradient-to-br from-[#c3a177] from-20% via-[#AD8253] via-30% to-[#8C5C28] p-10 rounded-3xl text-center text-white overflow-hidden"
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
             >
               {/* Background Pattern */}
               <div className="absolute inset-0 opacity-10">
                 <div className="absolute -top-4 -right-4 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                 <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full"></div>
               </div>
               
               <motion.div 
                 className="relative z-10"
                 whileHover={{ y: -5 }}
                 transition={{ type: "spring", stiffness: 300 }}
               >
                 <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-white/30">
                   <FaWhatsapp className="w-12 h-12" />
                 </div>
                 <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
                   تحدث معنا مباشرة
                 </h3>
                 <p className="text-xl mb-8 opacity-95 max-w-md mx-auto leading-relaxed">
                   احصل على استشارة مجانية وعرض سعر مخصص لمشروعك في دقائق
                 </p>
                                    <motion.button
                     className="bg-white text-[#8C5C28] px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-50 transition-all duration-300 shadow-xl relative overflow-hidden group"
                     whileHover={{ scale: 1.05, y: -2 }}
                     whileTap={{ scale: 0.98 }}
                     onClick={() => openWhatsApp('مرحباً، أريد الحصول على استشارة مجانية وعرض سعر لمشروعي')}
                   >
                     <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                     <span className="relative z-10 flex items-center gap-3">
                       <FaWhatsapp className="w-5 h-5" />
                       ابدأ المحادثة الآن
                     </span>
                   </motion.button>
               </motion.div>
             </motion.div>

            {/* Contact Info */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid md:grid-cols-3 gap-6">
                                 <div className="flex items-center justify-center">
                   <FaWhatsapp className="w-6 h-6 ml-3" style={{ color: '#c3a177' }} />
                   <div>
                     <div className="font-semibold">واتساب</div>
                     <div className="opacity-80" dir="ltr">+971 50 341 2174</div>
                   </div>
                 </div>
                                 <div className="flex items-center justify-center">
                   <FaEnvelope className="w-6 h-6 ml-3" style={{ color: '#c3a177' }} />
                   <div>
                     <div className="font-semibold">البريد الإلكتروني</div>
                     <div className="opacity-80">info@clicksalesmedia.com</div>
                   </div>
                 </div>
                 <div className="flex items-center justify-center">
                   <FaMapMarkerAlt className="w-6 h-6 ml-3" style={{ color: '#c3a177' }} />
                   <div>
                     <div className="font-semibold">العنوان</div>
                     <div className="opacity-80">ند الشبا, دبي, الامارات العربية المتحدة</div>
                   </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black/40 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <img 
                src="/clicksalesmedialogo.png" 
                alt="Click Sales Media" 
                className="h-16 w-auto"
              />
            </div>
            <p className="opacity-80 mb-6">
              شريكك المثالي في رحلة التحول الرقمي
            </p>
           
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="opacity-60">
                © 2025 كليك سيلز مميديا. جميع الحقوق محفوظة.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setIsModalOpen(false);
              setImageAnimation(false);
            }}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm"></div>
            
            {/* Modal Content */}
            <motion.div
              className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-3xl max-w-7xl w-full max-h-[95vh] overflow-hidden border border-[#c3a177]/30 shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, rotateY: -10 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 10 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-6 left-6 z-20 bg-black/70 hover:bg-black/90 text-white rounded-full p-3 transition-all duration-300 hover:scale-110"
                onClick={() => {
                  setIsModalOpen(false);
                  setImageAnimation(false);
                }}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Split Screen Layout */}
              <div className="grid lg:grid-cols-3 h-full min-h-[600px]">
                
                {/* Left Side - Large Image */}
                <div className="lg:col-span-2 relative bg-black overflow-hidden">
                  {/* Decorative Background Elements */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-[#c3a177] rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#c3a177] rounded-full blur-3xl animate-pulse delay-1000"></div>
                  </div>
                  
                  <div className="relative h-full flex items-center justify-center p-8">
                    <div className="relative max-w-full max-h-full">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className={`max-w-full max-h-full object-contain transition-all duration-[10000ms] ease-in-out shadow-2xl ${
                          imageAnimation ? 'transform scale-105 -translate-y-[15%]' : 'transform scale-100 translate-y-0'
                        }`}
                        style={{ 
                          filter: 'drop-shadow(0 25px 50px rgba(195, 161, 119, 0.3))',
                          borderRadius: '12px'
                        }}
                      />
                      
                      {/* Floating UI Elements */}
                      <motion.div
                        className="absolute -top-4 -right-4 bg-gradient-to-r from-[#c3a177] to-[#d4b896] text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        تصميم احترافي
                      </motion.div>
                      
                      <motion.div
                        className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                      >
                        ✓ مُسلم
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Image Reflection */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>

                {/* Right Side - Content */}
                <div className="relative bg-gradient-to-b from-[#272727] to-[#1a1a1a] p-8 lg:p-10 overflow-y-auto">
                  {/* Decorative Line */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#c3a177] to-transparent"></div>
                  
                  <div className="space-y-6">
                    {/* Title */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h2 className="text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-[#c3a177] to-[#d4b896] bg-clip-text text-transparent">
                        {selectedProject.title}
                      </h2>
                      <div className="w-16 h-1 bg-gradient-to-r from-[#c3a177] to-transparent rounded-full"></div>
                    </motion.div>

                    {/* Description */}
                    <motion.p 
                      className="text-white/90 text-lg leading-relaxed"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {selectedProject.fullDescription}
                    </motion.p>

                    {/* Features */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h3 className="text-xl font-bold mb-4 text-[#c3a177]">
                        ما قمنا بتنفيذه:
                      </h3>
                      <ul className="space-y-3">
                        {selectedProject.features.map((feature: string, index: number) => (
                          <motion.li 
                            key={index} 
                            className="flex items-center text-white/90"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                          >
                            <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center ml-3 flex-shrink-0">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Website Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="pt-4"
                    >
                      <motion.a
                        href={selectedProject.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-gradient-to-r from-[#c3a177] via-[#d4b896] to-[#c3a177] text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-[#c3a177]/25 transition-all duration-300 group"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                        زيارة الموقع
                        <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

            {/* Floating WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 left-6 z-40"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 2, type: "spring", stiffness: 300, damping: 15 }}
      >
        <motion.button
          className="bg-gradient-to-br from-[#c3a177] from-20% via-[#AD8253] via-30% to-[#8C5C28] hover:from-[#d4b896] hover:via-[#c3a177] hover:to-[#AD8253] text-white p-4 rounded-full shadow-2xl transition-all duration-300 relative overflow-hidden group"
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            boxShadow: [
              "0 0 0 0 rgba(195, 161, 119, 0.7)",
              "0 0 0 20px rgba(195, 161, 119, 0)",
            ]
          }}
          transition={{ 
            boxShadow: {
              duration: 2,
              repeat: Infinity,
            }
          }}
          onClick={() => openWhatsApp()}
        >
          <div className="absolute inset-0 bg-white/20 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
          <FaWhatsapp className="w-7 h-7 relative z-10" />
        </motion.button>
        
        {/* Tooltip */}
        <motion.div
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black/80 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
        >
          تحدث معنا عبر واتساب
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/80"></div>
        </motion.div>
      </motion.div>
    </div>
  );
}
