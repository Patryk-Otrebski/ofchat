import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaSearch } from 'react-icons/fa';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Jak zwiększyć przychody na OnlyFans o 40% dzięki chatbotom",
      excerpt: "Odkryj sprawdzone strategie wykorzystania chatbotów AI do zwiększenia przychodów na OnlyFans i budowania lojalności fanów.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      date: "15 maja 2025",
      author: "Anna Kowalska",
      category: "Strategie",
      tags: ["OnlyFans", "Przychody", "Chatboty", "AI"]
    },
    {
      id: 2,
      title: "5 sposobów na automatyzację komunikacji z fanami",
      excerpt: "Poznaj 5 skutecznych metod automatyzacji komunikacji z fanami, które pozwolą ci zaoszczędzić czas i skupić się na tworzeniu wartościowych treści.",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      date: "2 maja 2025",
      author: "Piotr Nowak",
      category: "Poradniki",
      tags: ["Automatyzacja", "Komunikacja", "Oszczędność czasu"]
    },
    {
      id: 3,
      title: "Personalizacja chatbota - klucz do wyższej konwersji",
      excerpt: "Dowiedz się, jak personalizacja chatbota może zwiększyć konwersję i przyciągnąć więcej klientów.",
      image:
        "https://images.unsplash.com/photo-1606813902973-2a9e93b9b3a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "10 maja 2025",
      author: "Janusz Kowalski",
      category: "Personalizacja",
      tags: ["Chatbot", "Personalizacja", "Konwersja"]
    }
  ];

  return (
    <div className="pt-28 md:pt-32 pb-16 md:pb-20 px-6 md:px-12 bg-gradient-to-b from-light to-white">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Nasz <span className="gradient-text">Blog</span></h1>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            Najnowsze artykuły, porady i strategie dla twórców OnlyFans, którzy chcą zwiększyć swoje przychody.
          </p>
        </motion.div>

        <div className="mb-10">
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Szukaj artykułów..."
              className="w-full px-4 py-3 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-xl card-shadow overflow-hidden h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 m-2 rounded-full text-xs font-medium">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-gray-500 mb-3">
                  <div className="flex items-center mr-4">
                    <FaCalendarAlt className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <FaUser className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-700 mb-4 text-sm flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-light text-gray-700 px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/blog/${post.id}`}
                  className="gradient-bg text-white px-4 py-2 rounded-full text-sm font-medium inline-block text-center hover:opacity-90 transition-opacity"
                >
                  Czytaj więcej
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity:  0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button className="gradient-bg text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
            Załaduj więcej artykułów
          </button>
        </motion.div>

        <motion.div 
          className="mt-20 py-12 px-6 md:px-10 bg-light rounded-xl card-shadow text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Chcesz być na bieżąco?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Zapisz się do naszego newslettera, aby otrzymywać najnowsze artykuły, porady i strategie dla twórców OnlyFans.
          </p>
          <div className="flex flex-col sm:flex-row max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Twój adres email" 
              className="flex-grow px-4 py-3 rounded-full sm:rounded-r-none mb-3 sm:mb-0 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="gradient-bg text-white px-6 py-3 rounded-full sm:rounded-l-none font-medium hover:opacity-90 transition-opacity">
              Zapisz się
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;