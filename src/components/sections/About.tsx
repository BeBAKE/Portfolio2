import { motion } from 'framer-motion';
import profileImage from '../../assets/profile.png';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center my-auto"
          >
            <div className="relative mb-8">
              <div className="relative h-64 w-64 rounded-full overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover object-[0%_0%]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[rgb(87,104,114)]/30 to-transparent" />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Full Stack Developer
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-foreground/80">vivekcharak004@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-foreground/80">Udhampur, J&K, India</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-accent/50 p-8 rounded-2xl"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">About</h3>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  I'm a Full Stack Developer with a passion for building scalable applications
                  and solving complex problems. Currently pursuing my B.Tech
                  at National Institute of Technology, Srinagar, I combine my technical expertise
                  with a strong foundation in engineering principles.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Background</h3>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  My journey in software development has equipped me with hands-on experience
                  in frontend, backend and DevOps technologies, allowing me to create end-to-end
                  solutions that are both efficient and user-friendly.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 