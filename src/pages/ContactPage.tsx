import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaCheck } from 'react-icons/fa';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    plan: '',
    acceptTerms: false
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Proszę wypełnić wszystkie wymagane pola.');
      return;
    }
    
    if (!formData.acceptTerms) {
      setFormError('Proszę zaakceptować warunki korzystania z usługi.');
      return;
    }
    
    // Form submission would go here in a real application
    console.log('Form submitted:', formData);
    
    // Show success message
    setFormError('');
    setFormSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      plan: '',
      acceptTerms: false
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-light to-white">
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Skontaktuj się z <span className="gradient-text">nami</span>
          </motion.h1>
          <motion.p 
            className="text-lg max-w-3xl mx-auto mb-8 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Masz pytania? Jesteśmy tutaj, aby pomóc. Skontaktuj się z nami, a nasz zespół odpowie na wszystkie twoje pytania.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info */}
            <motion.div 
              className="lg:w-1/3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6">Informacje kontaktowe</h2>
              <motion.div 
                className="space-y-6"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.div className="flex items-start" variants={item}>
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white mr-4">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="font-bold">Adres</h3>
                    <p className="text-gray-700">ul. Przykładowa 123<br />00-001 Warszawa<br />Polska</p>
                  </div>
                </motion.div>
                
                <motion.div className="flex items-start" variants={item}>
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white mr-4">
                    <FaPhone />
                  </div>
                  <div>
                    <h3 className="font-bold">Telefon</h3>
                    <p className="text-gray-700">+48 123 456 789</p>
                  </div>
                </motion.div>
                
                <motion.div className="flex items-start" variants={item}>
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white mr-4">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-700">kontakt@ofchat.pl</p>
                  </div>
                </motion.div>
                
                <motion.div className="flex items-start" variants={item}>
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white mr-4">
                    <FaClock />
                  </div>
                  <div>
                    <h3 className="font-bold">Godziny pracy</h3>
                    <p className="text-gray-700">Poniedziałek - Piątek: 9:00 - 17:00<br />Sobota - Niedziela: Zamknięte</p>
                  </div>
                </motion.div>
              </motion.div>
              
              <div className="mt-8">
                <h3 className="font-bold mb-4">Śledź nas</h3>
                <div className="flex space-x-4">
                  <motion.a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-light flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <FaFacebookF />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-light flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <FaTwitter />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-light flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <FaInstagram />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-light flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <FaLinkedinIn />
                  </motion.a>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              className="lg:w-2/3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-light p-8 rounded-xl card-shadow">
                <h2 className="text-2xl font-bold mb-6">Wyślij wiadomość</h2>
                
                {formSubmitted ? (
                  <motion.div 
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex items-center">
                      <FaCheck className="mr-2" />
                      <p>Dziękujemy za wiadomość! Nasz zespół skontaktuje się z Tobą w ciągu 24 godzin.</p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {formError && (
                      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        <p>{formError}</p>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Imię i nazwisko *</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Twoje imię i nazwisko"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Twój adres email"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Temat</label>
                      <input 
                        type="text" 
                        id="subject" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Temat wiadomości"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="plan" className="block text-sm font-medium text-gray-700 mb-1">Interesujący Cię plan</label>
                      <select 
                        id="plan" 
                        name="plan"
                        value={formData.plan}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Wybierz plan (opcjonalnie)</option>
                        <option value="Podstawowy">Podstawowy</option>
                        <option value="Pro">Pro</option>
                        <option value="Premium">Premium</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Wiadomość *</label>
                      <textarea 
                        id="message" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Twoja wiadomość"
                        required
                      ></textarea>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="acceptTerms" 
                          name="acceptTerms"
                          checked={formData.acceptTerms}
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                        />
                        <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-700">
                          Akceptuję <a href="/terms" className="text-primary hover:underline">warunki korzystania</a> z usługi i wyrażam zgodę na przetwarzanie moich danych osobowych *
                        </label>
                      </div>
                    </div>
                    
                    <motion.button 
                      type="submit"
                      className="gradient-bg text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Wyślij wiadomość
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6 md:px-12 bg-light">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Znajdź <span className="gradient-text">nas</span></h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Odwiedź nas w naszej siedzibie w centrum Warszawy.
            </p>
          </motion.div>
          
          <motion.div 
            className="rounded-xl overflow-hidden card-shadow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.3889753703584!2d21.00717431579626!3d52.23235197976201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8c92692e49%3A0xc2e97552d0cff142!2sPa%C5%82ac%20Kultury%20i%20Nauki!5e0!3m2!1spl!2spl!4v1651233033009!5m2!1spl!2spl" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa lokalizacji"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Często zadawane <span className="gradient-text">pytania</span></h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Odpowiedzi na najczęściej zadawane pytania dotyczące kontaktu z nami.
            </p>
          </motion.div>
          
          <motion.div 
            className="max-w-3xl mx-auto space-y-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div className="bg-light p-6 rounded-xl card-shadow" variants={item}>
              <h3 className="text-xl font-bold mb-2">Jak szybko otrzymam odpowiedź na moje pytanie?</h3>
              <p className="text-gray-700">Staramy się odpowiadać na wszystkie zapytania w ciągu 24 godzin w dni robocze. W weekendy i święta odpowiedź może zająć więcej czasu.</p>
            </motion.div>
            
            <motion.div className="bg-light p-6 rounded-xl card-shadow" variants={item}>
              <h3 className="text-xl font-bold mb-2">Czy mogę umówić się na spotkanie w waszym biurze?</h3>
              <p className="text-gray-700">Tak, możesz umówić się na spotkanie w naszym biurze. Prosimy o wcześniejszy kontakt telefoniczny lub mailowy, aby ustalić dogodny termin.</p>
            </motion.div>
            
            <motion.div className="bg-light p-6 rounded-xl card-shadow" variants={item}>
              <h3 className="text-xl font-bold mb-2">Czy oferujecie wsparcie techniczne przez telefon?</h3>
              <p className="text-gray-700">Tak, oferujemy wsparcie techniczne przez telefon dla naszych klientów. Wsparcie jest dostępne w godzinach pracy naszego biura.</p>
            </motion.div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gotowy, aby rozpocząć?</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Skontaktuj się z nami już dziś i dowiedz się, jak OFchat może pomóc ci zwiększyć przychody na OnlyFans.
          </p>
          <motion.button 
            className="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-opacity shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Wypełnij formularz kontaktowy
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactPage;