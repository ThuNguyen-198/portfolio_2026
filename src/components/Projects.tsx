import { useState } from 'react';
import './Projects.css';

// Animal World images
import animalWorld from '../assets/projects/animalWorld/animal-world-2.gif';

// Movies images
import movie1 from '../assets/projects/Movies/movie-1.png';
import movie2 from '../assets/projects/Movies/movie-2.png';
import movie3 from '../assets/projects/Movies/movie-3.png';
import movie4 from '../assets/projects/Movies/movie-4.png';
import movie5 from '../assets/projects/Movies/movie-5.png';
import movie6 from '../assets/projects/Movies/movie-6.png';
import movie7 from '../assets/projects/Movies/movie-7.png';
import movie8 from '../assets/projects/Movies/movie-8.png';

// Weather Forecast images
import weatherGif from '../assets/projects/weatherForecast/weather.gif';


interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "1235 Movies Website",
    description: "A modern website that helps managing work flows of a movie theater. Admins can add/delete movies, manage database system of revenue, tickets, and see the monthly reports. The website streamlines ticket booking process by allowing regular users to see the list of current/upcoming movies, search by movie names, then book and pay for the tickets.",
    images: [movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8],
    tags: ["Angular", "Bootstrap", "CSS", "Node.js", "MongoDB", "Movies API"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Animal World",
    description: "An interactive frontend web application allowing users to flip animal cards and test their knowledge of animal names. The application features a system that matches the user's input against a pre-determined list of correct answers. It also includes a scoring system that keeps track of the user's longest strike and displays their current score at the end of each round.",
    images: [animalWorld],
    tags: ["React", "TypeScript", "CSS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Weather Forecast",
    description: "An interactive weather forecasting application that allows users to check the weather for locations of their choice. The application retrieves weather data from a weather API and displays current weather conditions, temperature, humidity. Information displayed will be updated after every 15 minutes.",
    images: [weatherGif],
    tags: ["React", "TypeScript", "Weather API"],
    liveUrl: "#",
    githubUrl: "#"
  },
];

const Projects = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});
  const [expandedDesc, setExpandedDesc] = useState<{ [key: number]: boolean }>({});

  const toggleDescription = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedDesc(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleProjectClick = (id: number) => {
    setSelectedId(selectedId === id ? null : id);
    if (!currentImageIndex[id]) {
      setCurrentImageIndex(prev => ({ ...prev, [id]: 0 }));
    }
  };

  const nextImage = (projectId: number, totalImages: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (projectId: number, totalImages: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className={`projects-wrapper ${selectedId ? 'has-selected' : ''}`}>
          {/* Thumbnails on the left */}
          <div className={`projects-thumbnails ${selectedId ? 'visible' : ''}`}>
            {projects.map((project) => (
              <div
                key={project.id}
                className={`project-thumbnail ${selectedId === project.id ? 'active' : ''}`}
                onClick={() => handleProjectClick(project.id)}
              >
                <img src={project.images[0]} alt={project.title} />
                <span className="thumbnail-title">{project.title}</span>
              </div>
            ))}
          </div>

          {/* Main display area */}
          <div className={`projects-main ${selectedId ? 'has-selected' : ''}`}>
            {selectedId && selectedProject ? (
              <article className="project-card expanded">
                <button className="close-btn" onClick={() => setSelectedId(null)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <div className="project-image carousel">
                  <img src={selectedProject.images[currentImageIndex[selectedId] || 0]} alt={selectedProject.title} />
                  {selectedProject.images.length > 1 && (
                    <>
                      <button className="carousel-btn prev" onClick={(e) => prevImage(selectedId, selectedProject.images.length, e)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                      </button>
                      <button className="carousel-btn next" onClick={(e) => nextImage(selectedId, selectedProject.images.length, e)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </button>
                      <div className="carousel-dots">
                        {selectedProject.images.map((_, index) => (
                          <span
                            key={index}
                            className={`carousel-dot ${(currentImageIndex[selectedId] || 0) === index ? 'active' : ''}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(prev => ({ ...prev, [selectedId]: index }));
                            }}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
                <div className="project-content">
                  <h3 className="project-title">{selectedProject.title}</h3>
                  <p className="project-description">{selectedProject.description}</p>
                  <div className="project-tags">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <a href={selectedProject.liveUrl} className="project-btn primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Live Demo
                    </a>
                    <a href={selectedProject.githubUrl} className="project-btn secondary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      Source Code
                    </a>
                  </div>
                </div>
              </article>
            ) : (
              <div className="projects-grid">
                {projects.map((project) => (
                  <article
                    key={project.id}
                    className="project-card"
                    onClick={() => handleProjectClick(project.id)}
                  >
                    <div className="project-image">
                      <img src={project.images[0]} alt={project.title} loading="lazy" />
                      <div className="project-overlay">
                        <span className="click-hint">Click to expand</span>
                      </div>
                    </div>
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <div className={`description-wrapper ${expandedDesc[project.id] ? 'expanded' : ''}`}>
                        <p className={`project-description ${expandedDesc[project.id] ? 'expanded' : ''}`}>
                          {project.description}
                        </p>
                        <button className="expand-btn" onClick={(e) => toggleDescription(project.id, e)}>
                          {expandedDesc[project.id] ? 'Show less' : 'Read more'}
                        </button>
                      </div>
                      <div className="project-tags">
                        {project.tags.map((tag) => (
                          <span key={tag} className="project-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
