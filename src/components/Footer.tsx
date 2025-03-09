import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo.svg';

const Footer: React.FC = () => {
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

  return (
    <footer className="py-10 md:py-12 px-6 md:px-12 bg-dark text-white">
      <div className="container mx-auto">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10 md:mb-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={item}>
            <div className="flex items-center mb-4">
              <img src={logo} alt="OFchat Logo" className="h-8" />
              <span className="ml-2 text-xl font-bold">OFchat</span>
            </div>
            <p className="text-gray-400 text-sm md:text-base">
              Inteligentne chatboty dla twórców OnlyFans, które pomagają zwiększać przychody i oszczędzać czas.
            </p>
            <div className="flex space-x-3 md:space-x-4 mt-6">
              <motion.a 
                href="#" 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaFacebookF className="text-xs md:text-sm" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaTwitter className="text-xs md:text-sm" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaInstagram className="text-xs md:text-sm" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaLinkedinIn className="text-xs md:text-sm" />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div variants={item}>
            <h3 className="text-lg font-bold mb-4">Firma</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">O nas</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Blog</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Cennik</Link></li>
            </ul>
          </motion.div>
          
          <motion.div variants={item}>
            <h3 className="text-lg font-bold mb-4">Prawne</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Warunki korzystania</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Polityka prywatności</Link></li>
              <li><Link to="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Cookies</Link></li>
              <li><Link to="/gdpr" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">RODO</Link></li>
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-800 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400 mb-4 md:mb-0 text-sm md:text-base">© 2025 OFchat. Wszelkie prawa zastrzeżone.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaYoutube className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaTwitter className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaInstagram className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;