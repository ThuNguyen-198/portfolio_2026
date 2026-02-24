import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Thu Nguyen</h1>
          <h2 className="hero-title">Full Stack Developer</h2>
          <p className="hero-description">
            I build exceptional digital experiences that combine creative design
            with robust functionality. Passionate about creating solutions that
            make a difference.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-container">
            <div className="hero-blob"></div>
            <div className="hero-avatar">
              <span>TN</span>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
