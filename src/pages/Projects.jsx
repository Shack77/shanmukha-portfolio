import React from 'react';
import { motion } from 'framer-motion';


const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="container"
    >
      <h2>Projects</h2>
<div ckassName = "project-card"> 


  <div className="project-card">
          <h3>Antibiofilm Peptide Classification</h3>
          <p>Developed a peptide classifier using a deep neural network from scratch in NumPy to predict antibiofilm activity. Used 2-mer encoding of amino acid sequences, handled class imbalance with weighted loss, and achieved over 84% MCC.</p>
          <p><strong>Technologies:</strong> Python, NumPy, scikit-learn, Machine Learning, Bioinformatics</p>
          <a href="https://github.com/Shack77/Peptide-Classification" target="_blank" rel="noreferrer">🔗 View on GitHub</a>
        </div>
  
      <div className="project-card">
        <h3>DogMate</h3>
        <p>A matchmaking platform for dogs using breed and location filters.</p>
        <p><strong>Tech:</strong> HTML, CSS, Bootstrap, Node.js, MongoDB</p>
        <a href="#">GitHub</a>
      </div>

          <div className="project-card">
          <h3>Lane Detection and Steering Angle Estimation</h3>
          <p>Created a computer vision model to detect lane lines and estimate steering direction from dashcam videos. Employed Canny edge detection, Hough Transform, and geometric calculations to simulate real-time autonomous driving.</p>
          <p><strong>Technologies:</strong> Python, OpenCV, NumPy</p>
          <a href="https://github.com/Shack77/lane-detection" target="_blank" rel="noreferrer">🔗 View on GitHub</a>
        </div>

      

        <div className="project-card">
          <h3>CV-Based Attendance System Using Face Recognition</h3>
          <p>Built a real-time attendance system that automatically logs student presence using face recognition. Collected and preprocessed diverse student images. Leveraged OpenCV and dlib for accurate detection and recognition, logging attendance data with timestamps in SQLite. Enabled multi-face detection to track multiple students in live streams.</p>
          <p><strong>Technologies:</strong> OpenCV, dlib, Python, SQLite, Machine Learning</p>
          <a href="https://github.com/Shack77/face-attendance-system" target="_blank" rel="noreferrer">🔗 View on GitHub</a>
        </div>

           
        <div className="project-card">
          <h3>Interactive Dice Game</h3>
          <p>Developed a simple yet engaging browser-based dice game where two players roll virtual dice, and the winner is determined based on random outcomes. Utilized HTML, CSS, and JavaScript for layout, styling, and dynamic DOM manipulation to reflect each roll in real-time.</p>
          <p><strong>Technologies:</strong> HTML, CSS, JavaScript</p>
          <a href="https://github.com/Shack77/Dice-Game" target="_blank" rel="noreferrer">🔗 View on GitHub</a>
        </div>

       <div className="project-card">
          <h3>Dynamic Pricing Using Serverless Architecture</h3>
          <p>Designed and deployed a dynamic pricing engine using AWS Lambda to update prices based on real-time demand and market competition. Integrated DynamoDB for data storage and used serverless architecture to ensure scalability and minimal overhead.</p>
          <p><strong>Technologies:</strong> AWS Lambda, Amazon DynamoDB, Serverless Framework</p>
          <a href="https://github.com/Shack77/dynamic-pricing-aws-lambda" target="_blank" rel="noreferrer">🔗 View on GitHub</a>
        </div>

        <div className="project-card">
          <h3>Serverless Real-Time Chat Application</h3>
          <p>Built and deployed a serverless real-time chat system enabling multi-user communication using AWS Lambda, API Gateway (WebSocket), and DynamoDB for connection management and message broadcasting. Developed a responsive React frontend integrated with Amazon Cognito for secure user authentication, and implemented automatic message delivery to all active users through persistent WebSocket connections.</p>
          <p><strong>Technologies:</strong> React, JavaScript, AWS Lambda, API Gateway, DynamoDB, Cognito, Node.js</p>
          <a href="https://github.com/Shack77/aws-chat-app" target="_blank" rel="noreferrer">🔗 View on GitHub</a>
        </div>

        <div className="project-card">
          <h3>Full-Stack Social Media Feed Web App</h3>
          <p>Built a dynamic web app with secure user authentication (JWT), allowing registration, login via email/username, and protected access to content. Designed and implemented responsive frontend using React and Bootstrap, with state management via Context API. Developed backend APIs using Express and PostgreSQL, enabling text and image post uploads using Multer. Integrated real-time feed rendering, displaying user posts with images and metadata, setting the foundation for future ML-driven recommendations.</p>
          <p><strong>Technologies:</strong> React, Node.js, Express, PostgreSQL, JWT, Bootstrap, Multer</p>
          <a href="https://github.com/Shack77/social-media-feed-ML" target="_blank" rel="noreferrer">🔗 View on GitHub</a>
        </div>

      </div>
    </motion.section>
  );
};

export default Projects;
