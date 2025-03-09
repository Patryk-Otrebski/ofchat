import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  return (
    <motion.div 
      className="bg-white p-4 md:p-6 rounded-xl card-shadow h-full flex flex-col"
      variants={{
        hidden: { opacity: 0, y: 50 },
        show: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.5,
            delay: index * 0.1
          }
        }
      }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
        />
        <div className="ml-3">
          <h3 className="font-bold text-sm md:text-base">{testimonial.name}</h3>
          <p className="text-xs text-gray-500">{testimonial.role}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <FaStar 
            key={i} 
            className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} mr-1 text-sm md:text-base`}
          />
        ))}
      </div>
      <p className="text-gray-700 italic text-sm md:text-base flex-grow">"{testimonial.content}"</p>
    </motion.div>
  );
};

export default TestimonialCard;