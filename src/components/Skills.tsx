import './Skills.css';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90, icon: "⚛️" },
      { name: "TypeScript", level: 90, icon: "📘" },
      { name: "JavaScript", level: 90, icon: "🟨" },
      { name: "HTML/CSS", level: 99, icon: "🎨" },
      { name: "Angular", level: 80, icon: "🅰️" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85, icon: "🟢" },
      { name: "Python", level: 80, icon: "🐍" },
      { name: "PHP", level: 80, icon: "🐘" },
      { name: "Express", level: 85, icon: "🚂" },
      { name: "PostgreSQL", level: 75, icon: "🗄️" },
      { name: "MongoDB", level: 80, icon: "🍃" },
      { name: "GraphQL", level: 70, icon: "◈" },
    ]
  },
  {
    title: "Mobile",
    skills: [
      { name: "React Native", level: 90, icon: "📱" },
      { name: "Android Development", level: 80, icon: "🤖" },
      { name: "Kotlin", level: 80, icon: "🟣" },
      { name: "Jetpack Compose", level: 80, icon: "🎨" },
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 90, icon: "📦" },
      { name: "Docker", level: 75, icon: "🐳" },
      { name: "Figma", level: 75, icon: "🎯" },
      { name: "Claude Code", level: 85, icon: "🤖" },
      { name: "Selenium (C#)", level: 80, icon: "🔬" },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
