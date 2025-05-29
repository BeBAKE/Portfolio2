import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'TypeScript', 'JavaScript'],
    icon: '💻',
  },
  {
    category: 'Backend Technologies',
    items: ['Node.js/Express.js', 'Hono'],
    icon: '⚙️',
  },
  {
    category: 'Frontend Technologies',
    items: ['Next.js', 'React.js', 'HTML', 'CSS', 'TailwindCSS','Shadcn', 'Recoil', 'Webpack', 'Vite'],
    icon: '🎨',
  },
  {
    category: 'DevOps Technology',
    items: ['Docker', 'Nginx', 'CICD (GitHub Actions)', 'Bash Scripting', "Docker Compose"],
    icon: '🚀',
  },
  {
    category: 'Database and ORM',
    items: ['MongoDB', 'PostgreSQL', 'Prisma ORM', 'Mongoose ODM'],
    icon: '🗄️',
  },
  {
    category: 'Cloud',
    items: ['AWS', 'Cloudflare Workers (Serverless)'],
    icon: '☁️',
  },
  {
    category: 'Tools and Relevant Software',
    items: ['Git/Github', 'VsCode', 'Linux', 'Cursor'],
    icon: '🛠️',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-accent/10" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.05]" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/70">
            Skills & Expertise
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/40 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-background/80 backdrop-blur-sm p-6 rounded-xl border border-accent/30 hover:border-primary/30 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              {/* Card gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-50 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{skillGroup.icon}</span>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {skillGroup.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-1.5 bg-primary/15 text-primary/90 rounded-full text-sm font-medium hover:bg-primary/25 transition-all duration-300 border border-primary/30"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 