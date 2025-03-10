import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUsers, FaLightbulb, FaRocket, FaHeart } from 'react-icons/fa';

const AboutPage: React.FC = () => {
  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [valuesRef, valuesInView] = useInView({
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

  const teamMembers = [
    {
      name: "Jan",
      role: "CEO & Co-founder",
      bio: "Jan jest współzałożycielem OFchat oraz ekspertem w obszarze automatyzacji biznesowej i rozwoju chatbotów opartych o sztuczną inteligencję. Od kilku lat dostarcza autorskie rozwiązania technologiczne, które wspierają małe i średnie firmy w optymalizacji procesów oraz zwiększaniu sprzedaży. Jego misją jest nieustanne podnoszenie jakości usług poprzez innowacyjne wykorzystanie technologii AI."
    },
    {
      name: "Patryk",
      role: "CEO & Co-founder",
      bio: "Patryk to doświadczony współtwórca OFchat, specjalizujący się w projektowaniu oraz wdrażaniu chatbotów i zaawansowanych automatyzacji biznesowych dla sektora MŚP. Swoją karierę zawodową poświęcił rozwijaniu autorskich rozwiązań opartych na sztucznej inteligencji, które pomagają firmom zwiększać efektywność i wzmacniać relacje z klientami. Z pasją dba o każdy szczegół oferowanego oprogramowania, gwarantując najwyższy standard realizacji projektów."
    }
  ];

  const values = [
    {
      title: "Innowacja",
      description: "Nieustannie poszukujemy nowych sposobów, aby ulepszyć nasze produkty i dostarczyć najlepsze rozwiązania dla twórców OnlyFans.",
      icon: <FaLightbulb className="text-3xl text-primary" />
    },
    {
      title: "Wsparcie twórców",
      description: "Naszą misją jest wspieranie twórców w osiąganiu sukcesu poprzez dostarczanie narzędzi, które oszczędzają czas i zwiększają przychody.",
      icon: <FaUsers className="text-3xl text-primary" />
    },
    {
      title: "Wzrost",
      description: "Wierzymy w ciągły rozwój i pomagamy naszym klientom rozwijać ich biznesy poprzez innowacyjne rozwiązania technologiczne.",
      icon: <FaRocket className="text-3xl text-primary" />
    },
    {
      title: "Pasja",
      description: "Pasja napędza wszystko, co robimy. Kochamy pomagać twórcom i jesteśmy zaangażowani w ich sukces.",
      icon: <FaHeart className="text-3xl text-primary" />
    }
  ];

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
            <span className="gradient-text">OFchat</span>
          </motion.h1>
          <motion.p 
            className="text-lg max-w-3xl mx-auto mb-8 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Jesteśmy zespołem pasjonatów technologii i marketingu, którzy wierzą, że twórcy OnlyFans zasługują na najlepsze narzędzia do rozwoju swojego biznesu.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div 
          className="container mx-auto"
          ref={missionRef}
        >
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
              initial={{ opacity: 0, x: -50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Nasza misja</h2>
              <p className="text-lg text-gray-700 mb-6">
                W OFchat wierzymy, że twórcy treści powinni skupiać się na tym, co robią najlepiej - tworzeniu wartościowych treści dla swoich fanów. Naszą misją jest dostarczanie innowacyjnych narzędzi, które automatyzują rutynowe zadania, oszczędzają czas i zwiększają przychody.
              </p>
              <p className="text-lg text-gray-700">
                Stworzyliśmy OFchat, aby pomóc twórcom OnlyFans budować silniejsze relacje z fanami, zwiększać zaangażowanie i maksymalizować potencjał zarobkowy - wszystko to dzięki mocy sztucznej inteligencji.
              </p>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Nasza misja" 
                className="rounded-xl shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 md:px-12 bg-light">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nasze <span className="gradient-text">wartości</span></h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Wartości, które kierują naszymi działaniami i decyzjami każdego dnia.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            ref={valuesRef}
            variants={container}
            initial="hidden"
            animate={valuesInView ? "show" : "hidden"}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-xl card-shadow hover:translate-y-[-5px] transition-transform"
                variants={item}
                whileHover={{ scale: 1.03 }}
              >
                <motion.div 
                  className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nasz <span className="gradient-text">zespół</span></h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Poznaj ludzi, którzy stoją za OFchat i pracują każdego dnia, aby dostarczać najlepsze rozwiązania dla twórców OnlyFans.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex justify-center gap-8 max-w-4xl mx-auto"
            ref={teamRef}
            variants={container}
            initial="hidden"
            animate={teamInView ? "show" : "hidden"}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                className="bg-light p-8 rounded-xl card-shadow text-center w-full max-w-md"
                variants={item}
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-gray-700">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 gradient-bg text-white text-center">
        <motion.div 
          className="container mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Dołącz do nas już dziś</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Rozpocznij swoją przygodę z OFchat i odkryj, jak możemy pomóc ci rozwijać twój biznes na OnlyFans.
          </p>
          <motion.button 
            className="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-opacity shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Rozpocznij 7-dniowy okres próbny
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;