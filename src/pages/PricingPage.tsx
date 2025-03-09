import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PricingPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingPlans = [
    {
      name: "Podstawowy",
      monthlyPrice: "99 zł",
      annualPrice: "79 zł",
      period: "miesięcznie",
      features: [
        { name: "Podstawowa personalizacja", included: true },
        { name: "Wsparcie e-mail", included: true },
        { name: "Analityka podstawowa", included: true },
        { name: "Integracja z OnlyFans", included: true },
        { name: "Zaawansowana personalizacja", included: false },
        { name: "Priorytetowe wsparcie", included: false },
        { name: "Dedykowany opiekun", included: false }
      ],
      isPopular: false,
      buttonText: "Skontaktuj się z nami",
      description: "Idealny dla początkujących twórców, którzy chcą zautomatyzować podstawową komunikację z fanami.",
      order: 1
    },
    {
      name: "Premium",
      monthlyPrice: "199 zł",
      annualPrice: "159 zł",
      period: "miesięcznie",
      features: [
        { name: "Podstawowa personalizacja", included: true },
        { name: "Wsparcie e-mail", included: true },
        { name: "Analityka podstawowa", included: true },
        { name: "Integracja z OnlyFans", included: true },
        { name: "Zaawansowana personalizacja", included: true },
        { name: "Priorytetowe wsparcie", included: true },
        { name: "Dedykowany opiekun", included: false }
      ],
      isPopular: true,
      buttonText: "Skontaktuj się z nami",
      description: "Najlepszy wybór dla aktywnych twórców, którzy chcą zwiększyć zaangażowanie fanów i przychody.",
      order: 2
    },
    {
      name: "Pro",
      monthlyPrice: "399 zł",
      annualPrice: "319 zł",
      period: "miesięcznie",
      features: [
        { name: "Podstawowa personalizacja", included: true },
        { name: "Wsparcie e-mail", included: true },
        { name: "Analityka podstawowa", included: true },
        { name: "Integracja z OnlyFans", included: true },
        { name: "Zaawansowana personalizacja", included: true },
        { name: "Priorytetowe wsparcie", included: true },
        { name: "Dedykowany opiekun", included: true }
      ],
      isPopular: false,
      buttonText: "Skontaktuj się z nami",
      description: "Dla profesjonalnych twórców z dużą bazą fanów, którzy potrzebują pełnej automatyzacji i wsparcia.",
      order: 3
    }
  ];

  // Sort plans by order
  const sortedPlans = [...pricingPlans].sort((a, b) => a.order - b.order);

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

  const faqs = [
    {
      question: "Jak mogę rozpocząć współpracę z OFchat?",
      answer: "Aby rozpocząć współpracę, wybierz interesujący Cię plan i skontaktuj się z nami poprzez formularz kontaktowy lub bezpośrednio pod adresem kontakt@ofchat.pl. Nasz zespół skontaktuje się z Tobą w ciągu 24 godzin, aby omówić szczegóły i dostosować rozwiązanie do Twoich potrzeb."
    },
    {
      question: "Czy jest jakaś umowa długoterminowa?",
      answer: "Nie, wszystkie nasze plany są oparte na subskrypcji miesięcznej lub rocznej, którą możesz anulować w dowolnym momencie. Nie ma żadnych długoterminowych zobowiązań ani kar za anulowanie."
    },
    {
      question: "Co się stanie, jeśli przekroczę limit wiadomości?",
      answer: "Jeśli zbliżasz się do limitu wiadomości, otrzymasz powiadomienie. Jeśli przekroczysz limit, możesz dokupić dodatkowe pakiety wiadomości lub przejść na wyższy plan, aby kontynuować korzystanie z chatbota bez przerwy."
    },
    {
      question: "Czy oferujecie zniżki dla twórców z dużą liczbą fanów?",
      answer: "Tak, oferujemy specjalne plany dla twórców z dużą liczbą fanów. Skontaktuj się z naszym zespołem sprzedaży, aby omówić indywidualną ofertę dostosowaną do twoich potrzeb."
    }
  ];

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-20 px-6 md:px-12 bg-gradient-to-b from-light to-white">
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Prosty i przejrzysty <span className="gradient-text">cennik</span>
          </motion.h1>
          <motion.p 
            className="text-base md:text-lg max-w-3xl mx-auto mb-8 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Wybierz plan, który najlepiej odpowiada twoim potrzebom i skontaktuj się z nami, aby rozpocząć współpracę.
          </motion.p>
          
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white p-1 rounded-full shadow-md flex items-center">
              <button 
                className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all ${!isAnnual ? 'bg-primary text-white' : 'text-gray-700'}`}
                onClick={() => setIsAnnual(false)}
              >
                Miesięcznie
              </button>
              <button 
                className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all ${isAnnual ? 'bg-primary text-white' : 'text-gray-700'}`}
                onClick={() => setIsAnnual(true)}
              >
                Rocznie <span className="text-xs font-bold text-green-500 ml-1">-20%</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-10 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {sortedPlans.map((plan, index) => (
              <motion.div 
                key={index} 
                className={`rounded-xl p-4 md:p-6 card-shadow relative ${plan.isPopular ? 'border-2 border-primary' : 'border border-gray-200'}`}
                variants={item}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                    Najpopularniejszy
                  </div>
                )}
                <h3 className="text-lg md:text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-xs md:text-sm mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-2xl md:text-4xl font-bold">{isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                  <span className="text-gray-500 text-sm md:text-base">/{plan.period}</span>
                  {isAnnual && <span className="text-xs font-bold text-green-500 ml-2 block md:inline-block">Oszczędzasz 20%</span>}
                </div>
                <ul className="mb-6 space-y-2 md:space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-xs md:text-sm">
                      {feature.included ? (
                        <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                      ) : (
                        <FaTimes className="text-gray-400 mr-2 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-gray-800' : 'text-gray-400'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
                <div>
                  <Link 
                    to="/contact"
                    className={`w-full py-2 md:py-3 rounded-full font-medium text-sm md:text-base ${plan.isPopular ? 'gradient-bg text-white' : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'} transition-colors block text-center`}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-20 px-6 md:px-12 bg-light">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Porównanie <span className="gradient-text">planów</span></h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              Szczegółowe porównanie wszystkich funkcji dostępnych w każdym planie.
            </p>
          </motion.div>
          
          <motion.div 
            className="overflow-x-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <table className="w-full bg-white rounded-xl card-shadow text-sm md:text-base">
              <thead>
                <tr className="border-b">
                  <th className="p-3 md:p-4 text-left">Funkcja</th>
                  <th className="p-3 md:p-4 text-center">Podstawowy</th>
                  <th className="p-3 md:p-4 text-center">Premium</th>
                  <th className="p-3 md:p-4 text-center">Pro</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 md:p-4 font-medium">Wiadomości miesięcznie</td>
                  <td className="p-3 md:p-4 text-center">500</td>
                  <td className="p-3 md:p-4 text-center">2000</td>
                  <td className="p-3 md:p-4 text-center">Bez limitu</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 md:p-4 font-medium">Personalizacja chatbota</td>
                  <td className="p-3 md:p-4 text-center">Podstawowa</td>
                  <td className="p-3 md:p-4 text-center">Zaawansowana</td>
                  <td className="p-3 md:p-4 text-center">Pełna</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 md:p-4 font-medium">Integracja z OnlyFans</td>
                  <td className="p-3 md:p-4 text-center"><FaCheck className="text-green-500 mx-auto" /></td>
                  <td className="p-3 md:p-4 text-center"><FaCheck className="text-green-500 mx-auto" /></td>
                  <td className="p-3 md:p-4 text-center"><FaCheck className="text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 md:p-4 font-medium">Analityka</td>
                  <td className="p-3 md:p-4 text-center">Podstawowa</td>
                  <td className="p-3 md:p-4 text-center">Zaawansowana</td>
                  <td className="p-3 md:p-4 text-center">Zaawansowana</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 md:p-4 font-medium">Wsparcie</td>
                  <td className="p-3 md:p-4 text-center">Email</td>
                  <td className="p-3 md:p-4 text-center">Priorytetowe</td>
                  <td className="p-3 md:p-4 text-center">24/7</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 md:p-4 font-medium">Dedykowany opiekun</td>
                  <td className="p-3 md:p-4 text-center"><FaTimes className="text-gray-400 mx-auto" /></td>
                  <td className="p-3 md:p-4 text-center"><FaTimes className="text-gray-400 mx-auto" /></td>
                  <td className="p-3 md:p-4 text-center"><FaCheck className="text-green-500 mx-auto" /></td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 md:p-4 font-medium">Automatyczne odpowiedzi</td>
                  <td className="p-3 md:p-4 text-center"><FaCheck className="text-green-500 mx-auto" /></td>
                  <td className="p-3 md:p-4 text-center"><FaCheck className="text-green-500 mx-auto" /></td>
                  <td className="p-3 md:p-4 text-center"><FaCheck className="text-green-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-3 md:p-4 font-medium">Wsparcie wielojęzyczne</td>
                  <td className="p-3 md:p-4 text-center">2 języki</td>
                  <td className="p-3 md:p-4 text-center">5 języków</td>
                  <td className="p-3 md:p-4 text-center">Wszystkie języki</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Jak <span className="gradient-text">rozpocząć</span></h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              Proces wdrożenia OFchat jest prosty i szybki. Oto jak to działa:
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 max-w-5xl mx-auto"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative"
              variants={item}
            >
              <div className="bg-light p-6 rounded-xl card-shadow h-full">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold mb-4">1</div>
                <h3 className="text-lg font-bold mb-2">Kontakt</h3>
                <p className="text-gray-700 text-sm">Skontaktuj się z nami, wybierając odpowiedni dla Ciebie plan.</p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <FaArrowRight className="text-primary text-xl" />
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              variants={item}
            >
              <div className="bg-light p-6 rounded-xl card-shadow h-full">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold mb-4">2</div>
                <h3 className="text-lg font-bold mb-2">Konsultacja</h3>
                <p className="text-gray-700 text-sm">Przeprowadzimy szczegółową analizę Twoich potrzeb i oczekiwań.</p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <FaArrowRight className="text-primary text-xl" />
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              variants={item}
            >
              <div className="bg-light p-6 rounded-xl card-shadow h-full">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold mb-4">3</div>
                <h3 className="text-lg font-bold mb-2">Wdrożenie</h3>
                <p className="text-gray-700 text-sm">Konfigurujemy i personalizujemy chatbota zgodnie z Twoimi wymaganiami.</p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <FaArrowRight className="text-primary text-xl" />
              </div>
            </motion.div>
            
            <motion.div 
              variants={item}
            >
              <div className="bg-light p-6 rounded-xl card-shadow h-full">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold mb-4">4</div>
                <h3 className="text-lg font-bold mb-2">Sukces</h3>
                <p className="text-gray-700 text-sm">Ciesz się zwiększonymi przychodami i zaoszczędzonym czasem dzięki OFchat.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 px-6 md:px-12 bg-light">
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
              Masz pytania dotyczące naszych planów? Sprawdź odpowiedzi poniżej.
            </p>
          </motion.div>
          
          <motion.div 
            className="max-w-3xl mx-auto space-y-4 md:space-y-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-4 md:p-6 rounded-xl card-shadow"
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Gotowy, aby rozpocząć?</h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto mb-6 md:mb-8">
            Skontaktuj się z nami już dziś i dowiedz się, jak OFchat może pomóc w rozwoju Twojego biznesu na OnlyFans.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-primary px-6 md:px-8 py-2 md:py-3 rounded-full font-medium hover:bg-opacity-90 transition-opacity shadow-lg inline-block"
          >
            Skontaktuj się z nami
          </Link>
          <p className="text-xs md:text-sm mt-4 opacity-80">Indywidualne podejście do każdego klienta. Pełne wsparcie na każdym etapie.</p>
        </motion.div>
      </section>
    </div>
  );
};

export default PricingPage;
