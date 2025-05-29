import { motion } from 'framer-motion';
import certificateImage from '../../assets/100xdevs-certificate.png';

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">Certificates</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-accent/50 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">100xdevs Certificate of Achievement</h3>
            <div className="relative group">
              <img 
                src={certificateImage} 
                alt="100xdevs Certificate" 
                className="w-full rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </div>
            <a
              href="https://drive.google.com/file/d/12kFSEYXj2v-vxW6PKbCr1Oq3ZhKarMg9/view"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center px-6 py-3 text-base font-medium bg-primary/90 text-primary-foreground rounded-lg hover:bg-primary transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              View Certificate
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certificates; 