import { motion } from 'framer-motion';
import blogitImage from '../../assets/project/blogit.png';
import luxyFurnitureImage from '../../assets/project/luxyfurniture.png';
import dockerImage from "../../assets/project/docker.jpg"

const projects = [
  {
    title: 'BlogIt',
    description: 'A dynamic blogging platform with real-time autosave functionality and serverless backend.',
    technologies: ['ReactJS', 'Express', 'PostgreSQL', 'Prisma', 'Cloudflare Worker'],
    github: 'https://github.com/BeBAKE/BlogIt',
    live: 'https://blogit.projectlive.me/',
    image: blogitImage,
    features: [
      'Built a scalable serverless backend with Hono framework (TypeScript)',
      'Implemented real-time WebSocket server using Express.js',
      'AWS S3 integration for image storage',
      'Jest unit and integration tests',
      'Docker-based deployment with CI/CD automation',
    ],
  },
  {
    title: 'Luxy Furniture',
    description: 'A full-stack e-commerce web application for furniture shopping with user authentication, shopping cart, and order management.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Recoil', 'JWT'],
    github: 'https://github.com/BeBAKE/shopping-app',
    live: 'https://luxyfurniture.projectlive.me',
    image: luxyFurnitureImage,
    features: [
      'User authentication with JWT',
      'Shopping cart functionality',
      'Checkout process',
      'Order management system',
      'Responsive design for mobile and desktop',
      'State management with Recoil',
    ],
  },
  {
    title: 'Bio-Info',
    description: 'PubMed Research Analysis Tool for identifying authors affiliated with pharma/biotech.',
    technologies: ['Python', 'Biopython', 'Pandas', 'Requests', 'Poetry', 'Pytest'],
    github : "https://github.com/BeBAKE/bio-info",
    live : "https://pypi.org/project/bio-info-pubmed/",
    image: "https://plus.unsplash.com/premium_photo-1671985131449-f2ac92a5882d?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      'CLI tool for fetching PubMed papers',
      'Dependency management with Poetry',
      'Code quality enforcement with Black and MyPy',
      'Comprehensive unit testing with Pytest',
    ],
  },
  {
    title: 'DockerDeploy',
    description: 'Automated Docker workflow tool for cloud deployment.',
    technologies: ['Docker', 'Bash Scripting', 'GitHub Actions'],
    github: 'https://github.com/BeBAKE/DockerDeploy',
    image: dockerImage,
    features: [
      'Cross-cloud compatibility (AWS, GCP, Azure)',
      'Multi-service orchestration with Docker Compose',
      'Automated CI/CD pipelines',
      'Efficient deployment workflows',
    ],
  },
  {
    title: 'TypeScript Runner',
    description: 'NPM package for automating TypeScript project builds and execution.',
    technologies: ['TypeScript', 'Bash Scripting'],
    github: 'https://github.com/BeBAKE/typescript-runner',
    live : "https://www.npmjs.com/package/typescript-runner",
    image: "https://images.prismic.io//intuzwebsite/623f1441-cb31-4d22-a8e3-78f214641306_Main.png?w=1200&q=75&auto=format,compress&fm=png8",
    features: [
      'Automated TypeScript project builds',
      'Isolated and controlled execution environments',
      'Unix-based system compatibility',
      '10+ weekly downloads',
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background/90">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.03]"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop')",
          filter: "blur(8px)",
        }}
      />
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.05]" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-accent/20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/70">
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/40 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative bg-accent/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-accent/30 hover:border-primary/30 flex flex-col h-full"
            >
              {/* Enhanced card gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative flex-shrink-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent" />
              </div>
              
              <div className="p-8 flex-grow relative">
                <h3 className="text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/80 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 bg-primary/15 text-primary/90 rounded-full text-sm font-medium hover:bg-primary/25 transition-all duration-300 hover:scale-105 border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3 mb-6">
                  {project.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-start"
                    >
                      <svg
                        className="w-5 h-5 text-primary/80 mt-1 mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-foreground/70 text-base">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="p-8 pt-0 flex gap-4 mt-auto flex-shrink-0 relative z-10">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="max-w-fit inline-flex items-center px-4 py-2 text-sm font-medium bg-primary/15 text-primary/90 rounded-lg hover:bg-primary/25 transition-all duration-300 hover:scale-105 flex-1 justify-center group/link border border-primary/30 cursor-pointer"
                  >
                    <svg
                      className="w-4 h-4 mr-2 group-hover/link:scale-110 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="max-w-fit inline-flex items-center px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 flex-1 justify-center group/link shadow-lg shadow-primary/30 cursor-pointer"
                  >
                    <svg
                      className="w-4 h-4 mr-2 group-hover/link:scale-110 transition-transform"
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
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 