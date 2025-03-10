import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRobot, FaMoneyBillWave, FaClock, FaUsers, FaArrowRight, FaCheck } from 'react-icons/fa';
import CountUp from 'react-countup';
import HeroSection from '../components/HeroSection';

const HomePage: React.FC = () => {
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [benefitsRef, benefitsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [pricingRef, pricingInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [faqRef, faqInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const features = [
    {
      title: "Personalizacja chatbota",
      description: "Dostosuj osobowość, ton i styl komunikacji chatbota do swojego brandu.",
      icon: <FaRobot className="text-3xl text-primary" />
    },
    {
      title: "Automatyczne odpowiedzi",
      description: "Odpowiadaj na najczęstsze pytania fanów bez twojego udziału, 24/7.",
      icon: <FaClock className="text-3xl text-primary" />
    },
    {
      title: "Zwiększenie sprzedaży",
      description: "Chatbot może promować twoje treści premium i zwiększać konwersję.",
      icon: <FaMoneyBillWave className="text-3xl text-primary" />
    },
    {
      title: "Analiza rozmów",
      description: "Otrzymuj raporty i analizy rozmów, aby lepiej zrozumieć potrzeby fanów.",
      icon: <FaUsers className="text-3xl text-primary" />
    },
    {
      title: "Integracja z OnlyFans",
      description: "Łatwa integracja z twoim kontem OnlyFans bez skomplikowanych ustawień.",
      icon: <FaRobot className="text-3xl text-primary" />
    },
    {
      title: "Wsparcie wielojęzyczne",
      description: "Komunikuj się z fanami w wielu językach i docieraj do globalnej publiczności.",
      icon: <FaUsers className="text-3xl text-primary" />
    }
  ];

  const benefits = [
    {
      title: "Oszczędność czasu",
      description: "Automatyzacja rutynowych rozmów pozwala skupić się na tworzeniu wartościowych treści."
    },
    {
      title: "Zwiększenie przychodów",
      description: "Chatbot aktywnie promuje twoje treści premium, zwiększając sprzedaż i konwersję."
    },
    {
      title: "Lepsza retencja fanów",
      description: "Natychmiastowe odpowiedzi i personalizacja zwiększają zadowolenie i lojalność fanów."
    }
  ];

  const pricingPlans = [
    {
      name: "Podstawowy",
      price: "99 zł",
      period: "miesięcznie",
      features: [
        "Do 500 wiadomości miesięcznie",
        "Podstawowa personalizacja",
        "Wsparcie e-mail"
      ],
      isPopular: false,
      buttonText: "Skontaktuj się z nami"
    },
    {
      name: "Premium",
      price: "199 zł",
      period: "miesięcznie",
      features: [
        "Do 2000 wiadomości miesięcznie",
        "Zaawansowana personalizacja",
        "Priorytetowe wsparcie",
        "Analityka rozmów"
      ],
      isPopular: true,
      buttonText: "Skontaktuj się z nami"
    },
    {
      name: "Pro",
      price: "399 zł",
      period: "miesięcznie",
      features: [
        "Nieograniczona liczba wiadomości",
        "Pełna personalizacja",
        "Wsparcie 24/7",
        "Zaawansowana analityka",
        "Dedykowany opiekun"
      ],
      isPopular: false,
      buttonText: "Skontaktuj się z nami"
    }
  ];
  

  const faqs = [
    {
      question: "Jak działa integracja z OnlyFans?",
      answer: "Integracja z OnlyFans jest prosta i bezpieczna. Po utworzeniu konta w OFchat, otrzymasz instrukcje krok po kroku, jak połączyć swojego chatbota z kontem OnlyFans. Proces zajmuje mniej niż 5 minut."
    },
    {
      question: "Czy chatbot może odpowiadać na wszystkie pytania?",
      answer: "Chatbot jest zaprojektowany, aby odpowiadać na najczęstsze pytania i prowadzić podstawowe rozmowy. Dla bardziej złożonych zapytań, możesz ustawić powiadomienia, aby odpowiedzieć osobiście lub zaprogramować chatbota z dodatkowymi odpowiedziami."
    },
    {
      question: "Czy mogę dostosować osobowość chatbota?",
      answer: "Tak, możesz w pełni dostosować osobowość, ton i styl komunikacji chatbota, aby pasował do twojego brandu i preferencji. Możesz również tworzyć różne chatboty dla różnych grup fanów."
    },
    {
      question: "Jak chatbot pomaga zwiększyć przychody?",
      answer: "Chatbot może aktywnie promować twoje treści premium, pakiety i oferty specjalne podczas rozmów z fanami. Może również odpowiadać na pytania dotyczące twoich treści, co zwiększa konwersję i sprzedaż."
    },
    {
      question: "Czy mogę wypróbować OFchat przed zakupem?",
      answer: "Tak, oferujemy indywidualne demonstracje naszego rozwiązania. Skontaktuj się z nami, aby umówić się na prezentację i zobaczyć, jak OFchat może pomóc w rozwoju Twojego biznesu."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section
      <section className="py-12 md:py-16 px-6 md:px-12 bg-light">
        <div 
          className="container mx-auto"
          ref={statsRef}
        >
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-6 rounded-xl bg-white shadow-lg">
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {statsInView && <CountUp end={5000} duration={2.5} separator="," />}+
              </h3>
              <p className="text-gray-600">Zadowolonych twórców</p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-lg">
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {statsInView && <CountUp end={40} duration={2.5} />}%
              </h3>
              <p className="text-gray-600">Średni wzrost przychodów</p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-lg">
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {statsInView && <CountUp end={10} duration={2.5} />}M+
              </h3>
              <p className="text-gray-600">Wiadomości miesięcznie</p>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Features Section */}
      <section id="features" className="py-16 md:py-20 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Funkcje <span className="gradient-text">OFchat</span></h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              Nasze chatboty wykorzystują zaawansowaną sztuczną inteligencję, aby zapewnić naturalne i angażujące rozmowy z twoimi fanami.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            ref={featuresRef}
            variants={container}
            initial="hidden"
            animate={featuresInView ? "show" : "hidden"}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-light p-6 rounded-xl card-shadow hover:translate-y-[-5px] transition-transform"
                variants={item}
                whileHover={{ scale: 1.03 }}
              >
                <motion.div 
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full gradient-bg flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-700 text-sm md:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-20 px-6 md:px-12 gradient-bg text-white">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Korzyści dla twórców</h2>
            <p className="text-base md:text-lg max-w-3xl mx-auto">
              Odkryj, jak OFchat może pomóc ci rozwijać swoją działalność na OnlyFans i zwiększać przychody.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            ref={benefitsRef}
            variants={container}
            initial="hidden"
            animate={benefitsInView ? "show" : "hidden"}
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm"
                variants={item}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-lg md:text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm md:text-base">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-20 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Prosty i przejrzysty <span className="gradient-text">cennik</span></h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              Wybierz plan, który najlepiej odpowiada twoim potrzebom i skontaktuj się z nami, aby rozpocząć współpracę.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            ref={pricingRef}
            variants={container}
            initial="hidden"
            animate={pricingInView ? "show" : "hidden"}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div 
                key={index} 
                className={`rounded-xl p-6 card-shadow relative ${plan.isPopular ? 'border-2 border-primary' : 'border border-gray-200'}`}
                variants={item}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Najpopularniejszy
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-2xl md:text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">/{plan.period}</span>
                </div>
                <ul className="mb-6 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm md:text-base">
                      <FaCheck className="text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <motion.button 
                    className={`w-full py-2 rounded-full font-medium ${plan.isPopular ? 'gradient-bg text-white' : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'} transition-colors`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {plan.buttonText}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-20 px-6 md:px-12 bg-light">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Często zadawane <span className="gradient-text">pytania</span></h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              Masz pytania? Sprawdź nasze odpowiedzi na najczęściej zadawane pytania.
            </p>
          </motion.div>
          
          <motion.div 
            className="max-w-3xl mx-auto space-y-6"
            ref={faqRef}
            variants={container}
            initial="hidden"
            animate={faqInView ? "show" : "hidden"}
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-xl card-shadow"
                variants={item}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-lg md:text-xl font-bold mb-2">{faq.question}</h3>
                <p className="text-sm md:text-base text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-6 md:px-12 gradient-bg text-white text-center">
        <motion.div 
          className="container mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Gotowy, aby zwiększyć swoje przychody?</h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto mb-8">
            Skontaktuj się z nami już dziś i dowiedz się, jak OFchat może pomóc w rozwoju Twojego biznesu na OnlyFans.
          </p>
          <motion.button 
            className="bg-white text-primary px-6 md:px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-opacity shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Skontaktuj się z nami
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;