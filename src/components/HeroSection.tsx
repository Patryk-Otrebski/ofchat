import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  // Conversation messages: even index: fan's message, odd index: twórczyni's message.
  const messages = [
    "Hej, Twoje zdjęcia w stringach to czysty ogień, wyglądasz rewelacyjnie. Coś jeszcze w takim stylu?",
    "Hejka! Właśnie skończyłam sesję, gdzie stringi są tylko małą częścią opowieści. Mam też kilka fotek, w których pokażę się nieco bardziej, tylko dla tych, co lubią niespodzianki. 😈",
    "Wow, to brzmi naprawdę kusząco, nie mogę się doczekać, żeby to zobaczyć!",
    "Mam dla Ciebie coś wyjątkowego, prywatną galerię pełną pikantnych ujęć, które rozpalą Twoją wyobraźnię. Daj mi znać, a prześlę Ci link, żebyś mógł sprawdzić, co dla Ciebie przygotowałam. 😘"
  ];

  // Miganie kursora
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Symulacja wysyłania kolejnych wiadomości
  useEffect(() => {
    if (currentMessageIndex < messages.length - 1) {
      const timeout = setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setCurrentMessageIndex(prev => prev + 1);
          setIsTyping(false);
        }, 1500);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentMessageIndex, messages.length]);

  // Wyświetlamy wszystkie wiadomości do aktualnego indeksu
  const displayedMessages = messages.slice(0, currentMessageIndex + 1);

  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-20 px-6 md:px-12 bg-gradient-to-b from-light to-white overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Lewy panel – statyczna część */}
        <motion.div 
          className="md:w-1/2 mb-12 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Zwiększ swoje zarobki na <span className="gradient-text">OnlyFans</span> dzięki chatbotom AI
          </motion.h1>
          <motion.p 
            className="text-base md:text-lg mb-8 text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Automatyzuj komunikację z fanami, oszczędzaj czas i zwiększaj swoje przychody dzięki inteligentnym chatbotom zaprojektowanym specjalnie dla twórców OnlyFans.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link 
              to="/contact"
              className="gradient-bg text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg inline-block text-center"
            >
              Skontaktuj się z nami
            </Link>
            <Link 
              to="/about"
              className="border-2 border-primary text-primary px-6 py-3 rounded-full font-medium hover:bg-primary hover:text-white transition-colors inline-block text-center"
            >
              Dowiedz się więcej
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Prawy panel – symulacja czatu */}
        <motion.div 
          className="md:w-1/2 flex justify-center w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative w-full max-w-sm h-96 bg-white rounded-3xl card-shadow overflow-hidden flex items-center justify-center">
            <div className="w-full max-w-xs h-80 overflow-auto px-4 py-2 space-y-4">
              {displayedMessages.map((msg, index) => {
                // Even index: fan's message, odd index: twórczyni's message.
                const isFan = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`flex items-start space-x-3 ${isFan ? "flex-row-reverse space-x-reverse" : ""}`}
                  >
                    <div className="flex-shrink-0">
                      {isFan ? (
                        <FaUser className="w-8 h-8 p-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white" />
                      ) : (
                        <FaRobot className="w-8 h-8 p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white" />
                      )}
                    </div>
                    <div className={`p-3 rounded-lg max-w-[200px] text-sm ${isFan ? "bg-blue-100" : "bg-gray-200"}`}>
                      <p className="text-gray-800">{msg}</p>
                    </div>
                  </div>
                );
              })}
              {isTyping && (() => {
                const nextIsFan = (currentMessageIndex + 1) % 2 === 0;
                return (
                  <div className={`flex items-start space-x-3 ${nextIsFan ? "flex-row-reverse space-x-reverse" : ""}`}>
                    <div className="flex-shrink-0">
                      {nextIsFan ? (
                        <FaUser className="w-8 h-8 p-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white" />
                      ) : (
                        <FaRobot className="w-8 h-8 p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white" />
                      )}
                    </div>
                    <div className={`p-3 rounded-lg max-w-[200px] text-sm ${nextIsFan ? "bg-blue-100" : "bg-gray-200"}`}>
                      <p className="text-gray-800">
                        Pisze{showCursor && <span className="animate-pulse">|</span>}
                      </p>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;