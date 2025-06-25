// Import React and motion from Framer Motion for animation
import React from 'react';
import { motion } from 'framer-motion';

// Start of Home component
const Home = () => {
  return (
    // Animated section using Framer Motion
    <motion.section
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container home" // Custom class for styling
    >

      {/* ✅ 1. PROFILE PICTURE AND NAME */}
      <div className="profile-section">
        {/* Replace 'profile.jpg' with your image filename */}
        <img src="/profile.jpg" alt="Profile" className="profile-img" />

        {/* Your name */}
        <h1>Shanmukha Ganesna</h1>

        {/* A short title or tagline */}
        <p className="tagline">Full Stack Developer | AI Enthusiast</p>
      </div>

      {/* ✅ 2. SHORT BIO / ABOUT ME */}
      <div className="about-section">
        <h2>About Me</h2>
        <p>
  Hello! I'm Shanmukha Ganesna, a passionate software developer currently pursuing my M.S. in Computer Science at Santa Clara University. I have a strong academic background and hands-on experience in full-stack web development, cloud computing, and artificial intelligence. I enjoy building scalable applications that solve real-world problems and improve user experience.
</p>

<p>
  My technical journey began with a B.E. in Computer Science from Visvesvaraya Technological University Education, where I developed a solid foundation in programming and system design. Since then, I’ve worked on several projects involving serverless architecture, machine learning models, and responsive web design. I'm particularly interested in combining AI with modern web technologies to build intelligent, user-centered applications.
</p>

<p>
  Beyond coding, I value continuous learning and enjoy collaborating with others to bring creative ideas to life. Whether it's exploring a new tech stack, optimizing backend performance, or crafting clean UI/UX experiences, I'm driven by the challenge of building things that matter. I'm always open to new opportunities where I can grow, contribute, and make an impact.
</p>

      </div>

      {/* ✅ 3. EDUCATION SECTION */}
      <div className="education-section">
        <h2>Education</h2>
        <ul>
          {/* Replace with your real info */}
          <li>🎓 M.S. in Computer Science – Santa Clara University (2024–2025)</li>
          <li>🎓 B.E. in Computer Science – Visvesvaraya Technological University(2019–2023)</li>
        </ul>
      </div>

      {/* ✅ 4. SKILLS SECTION */}
<div className="skills-section">
  <h2>Skills</h2>
  <ul className="skills-list">
    <li>React</li>
    <li>Node.js</li>
    <li>Python</li>
    <li>PostgreSQL</li>
    <li>AWS</li>
    <li>Machine Learning</li>
    <li>Express.js</li>
    <li>HTML/CSS</li>
    <li>Java</li>
    <li>Bootstrap</li>
  </ul>
</div>

{/* ✅ 5. HOBBIES SECTION */}
<div className="hobbies-section">
  <h2>Outside of Code</h2>
  <p>
    When I'm not writing code or experimenting with new technologies, I enjoy reading about artificial intelligence, hiking scenic trails, and playing chess, cricket, soccer, badminton and table tennis.
  </p>
</div>


          </motion.section>
          
  );
};

export default Home;
