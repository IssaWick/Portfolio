import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaSun,
  FaMoon,
  FaJava,
  FaDocker,
  FaChartBar,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiMysql,
  SiR,
  SiJenkins,
  SiPhp,
  SiMongodb,
  SiExpress,
  SiPostman,
} from "react-icons/si";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import profileImg from "./assets/profile.jpg";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // 🔹 Automatically open email client when Contact section appears
  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          window.location.href = "mailto:ipiyasara@gmail.com";
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Categorized skills
  const skills = {
    Languages: [
      { icon: <SiC size={50} color="#A8B9CC" />, name: "C" },
      { icon: <SiCplusplus size={50} color="#00599C" />, name: "C++" },
      { icon: <FaDatabase size={50} color="#4DB33D" />, name: "SQL" },
      { icon: <FaHtml5 size={50} color="#E34F26" />, name: "HTML" },
      { icon: <FaCss3Alt size={50} color="#1572B6" />, name: "CSS" },
      { icon: <FaJs size={50} color="#F7DF1E" />, name: "JavaScript" },
      { icon: <SiPhp size={50} color="#8993be" />, name: "PHP" },
      { icon: <SiMysql size={50} color="#00758F" />, name: "MySQL" },
      { icon: <FaJava size={50} color="#f89820" />, name: "Java" },
      { icon: <SiR size={50} color="#276DC3" />, name: "R" },
      { icon: <FaPython size={50} color="#3776AB" />, name: "Python" },
    ],
    Tools: [
      { icon: <SiPostman size={50} color="#FF6C37" />, name: "Postman" },
      { icon: <FaChartBar size={50} color="#F7931E" />, name: "Minitab" },
      { icon: <SiJenkins size={50} color="#D24939" />, name: "Jenkins" },
    ],
    Frameworks: [
      { icon: <SiMongodb size={50} color="#47A248" />, name: "MongoDB" },
      { icon: <SiExpress size={50} color="#000000" />, name: "Express.js" },
      { icon: <FaReact size={50} color="#61DBFB" />, name: "React" },
      { icon: <FaNodeJs size={50} color="#68A063" />, name: "Node.js" },
      { icon: <FaDocker size={50} color="#0db7ed" />, name: "Docker" },
    ],
  };

  const projects = [
    { title: "Project 1", description: "Awesome project description.", link: "#" },
    { title: "Project 2", description: "Awesome project description.", link: "#" },
    { title: "Project 3", description: "Awesome project description.", link: "#" },
  ];

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {/* ===== NAVBAR ===== */}
      <Navbar
        expand="lg"
        fixed="top"
        className={`shadow-sm ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <div
              className="theme-toggle me-3"
              onClick={toggleDarkMode}
              style={{ cursor: "pointer" }}
            >
              {darkMode ? <FaSun size={22} /> : <FaMoon size={22} />}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ===== HERO SECTION ===== */}
      <section id="home" className="hero-section section-colored">
        <Container className="text-center hero-container">
          <motion.img
            src={profileImg}
            alt="Profile"
            className="profile-img"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm <span className="highlight">Isira Wickramaarachchi</span>
          </motion.h1>
          <p className="lead">Full Stack Developer | Data Science Enthusiast</p>
          <div className="social-icons">
            <a href="https://github.com/IssaWick" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/isira-wickramaarachchi-642918312"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={30} color="#ffffffff" />
            </a>
          </div>
        </Container>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="section section-alt">
        <Container>
          <h2 className="text-center mb-4">About Me</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <p className="text-center">
                I’m a passionate developer who enjoys creating user-friendly web applications,
                building scalable backend systems, and exploring data science and machine learning.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="section section-colored text-center">
        <Container>
          <h2 className="mb-4">Skills</h2>
          {Object.keys(skills).map((category, idx) => (
            <div key={idx} className="mb-5">
              <h4 className="mb-3">{category}</h4>
              <Row className="justify-content-center">
                {skills[category].map((skill, i) => (
                  <Col xs={6} sm={4} md={2} key={i} className="mb-3">
                    <Card
                      className="skill-card text-center p-3 shadow-sm"
                      style={{
                        backgroundColor: darkMode ? "#2a2a2a" : "#fff",
                        color: darkMode ? "#eee" : "#222",
                        borderRadius: "12px",
                      }}
                    >
                      <motion.div whileHover={{ scale: 1.3 }} transition={{ type: "spring", stiffness: 300 }}>
                        {skill.icon}
                        <p className="mt-2 mb-0">{skill.name}</p>
                      </motion.div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Container>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="section section-alt">
        <Container>
          <h2 className="text-center mb-4">Projects</h2>
          <Row>
            {projects.map((proj, idx) => (
              <Col md={4} key={idx} className="mb-4">
                <Card className="project-card shadow-sm">
                  <Card.Body>
                    <Card.Title>{proj.title}</Card.Title>
                    <Card.Text>{proj.description}</Card.Text>
                    <Button variant={darkMode ? "success" : "dark"} href={proj.link}>
                      View Project
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="section section-colored text-center">
        <Container>
          <h2>Contact Me</h2>
          <p className="lead">Let’s work together or just say hello 👋</p>

          <div className="contact-info mt-4 mb-4">
            <p className="d-flex align-items-center justify-content-center gap-2">
              <FaEnvelope size={22} color={darkMode ? "#00b09b" : "#000"} />{" "}
              <a href="mailto:ipiyasara@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>
                ipiyasara@gmail.com
              </a>
            </p>
            <p className="d-flex align-items-center justify-content-center gap-2">
              <FaPhone size={22} color={darkMode ? "#00b09b" : "#000"} />{" "}
              <span>+94 77 415 7296</span>
            </p>
          </div>
        </Container>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer text-center py-3 section-alt">
        <p>© {new Date().getFullYear()} Isira Wickramaarachchi. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
