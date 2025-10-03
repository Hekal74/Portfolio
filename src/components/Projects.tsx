import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Website",
    description: "A modern e-commerce platform with React, Tailwind CSS, and Stripe integration.",
    image: "/images/project1.jpg",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "A sleek personal portfolio showcasing projects, skills, and blog posts.",
    image: "/images/project2.jpg",
    link: "#",
  },
  {
    title: "Blog Dashboard",
    description: "A full-stack blog dashboard with authentication and API integration.",
    image: "/images/project3.jpg",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-indigo-600">Projects</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />
                <CardContent className="p-6 flex flex-col justify-between">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <Button
                    asChild
                    className="w-fit flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white"
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project <ExternalLink size={18} />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;