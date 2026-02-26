import './Experience.css';

interface Experience {
  id: number;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "Paycom Payroll LLC",
    role: "Software Developer",
    location: "Irving, TX",
    period: "Jan 2025 - Feb 2026",
    description: [
      "Enhanced a scalable reporting module by adding new fields and advanced filters, enabling clients to schedule comprehensive reports, reduced manual report generation by 70%.",
      "Designed and implemented state management architecture using React Context and migrated the Advanced Report Writer from jQuery to React TS, reducing UI load time by 90%.",
      "Implemented application-level security controls on 20+ vulnerable areas to mitigate OWASP Top 10 vulnerabilities.",
      "Built and automated end-to-end test suites using C# and Selenium WebDriver, reducing manual testing time by 99%."
    ],
    technologies: ["PHP", "React", "TypeScript", "SQL", "jQuery", "C#", "Selenium"]
  },
  {
    id: 2,
    company: "Paycom Payroll LLC",
    role: "Software Developer Intern",
    location: "Irving, TX",
    period: "May 2024 - Aug 2024",
    description: [
      "Developed an overview dashboard utilizing React JS, SQL, and PHP for the company's learning management system.",
      "Built statistics and reporting tools to track course progress, completion, and pass rates, enabling managers to identify bottlenecks faster."
    ],
    technologies: ["React", "SQL", "PHP"]
  },
  {
    id: 3,
    company: "Paycom Payroll LLC",
    role: "Software Developer Intern",
    location: "Grapevine, TX",
    period: "May 2022 - Aug 2022",
    description: [
      "Developed an Android application using Kotlin and Jetpack Compose within a cross-platform system to centralize, transform, and visualize health data.",
      "Reduced the workload of gym staffs down from 2-4 weeks to seconds by replacing manual intake with automated data streaming."
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Android"]
  },
  {
    id: 4,
    company: "Nemalife Inc.",
    role: "Data Analyst Intern",
    location: "Lubbock, TX",
    period: "Jan 2022 - May 2022",
    description: [
      "Utilized NemaStudio software to identify, track, and categorize C. elegans nematodes, achieving 99% accuracy in live animal counts.",
      "Developed an annotation process, conducted quality control analysis, and contributed to software optimization."
    ],
    technologies: ["Python", "Data Analysis", "NemaStudio"]
  },
  {
    id: 5,
    company: "UTSW Medical Center",
    role: "Student Researcher",
    location: "Dallas, TX",
    period: "Feb 2020 - May 2020",
    description: [
      "Completed research about Glioblastoma Cancer in 12 weeks and presented in a virtual conference for 200+ entrepreneurs, professors, and students from 10+ countries."
    ],
    technologies: ["Research", "Data Analysis"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional journey and work experience
          </p>
        </div>
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div className="experience-title">
                    <h3 className="company-name">{exp.company}</h3>
                    <span className="role">{exp.role}</span>
                  </div>
                  <div className="experience-meta">
                    <span className="location">{exp.location}</span>
                    <span className="period">{exp.period}</span>
                  </div>
                </div>
                <ul className="experience-description">
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="experience-technologies">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
