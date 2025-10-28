import React, { useEffect } from "react";
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
  FaJava,
  FaDocker,
  FaChartBar,
  FaEnvelope,
  FaPhone,
  FaGraduationCap,
  FaSchool,
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

// Project images
import project1Img from "./assets/project1.png";
import project2Img from "./assets/project2.png";
import project3Img from "./assets/project3.png";
import anandaLogo from "./assets/ananda_logo.png";
import universityLogo from "./assets/university_logo.png";

const App = () => {
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
    {
      title: "Restaurant Table Reservation System",
      description:
        "A Java and SQLite app for booking restaurant tables by time slot or date range, featuring real-time availability and admin management.",
      technologies: [
        { name: "Java", icon: <FaJava /> },
        { name: "SQLite", icon: <FaDatabase /> },
      ],
      link: "https://github.com/IssaWick/RestaurantTableReservationSystem.git",
      image: project1Img,
    },
    {
      title: "Fitness Centre Management System",
      description: "A web app to manage memberships, payments, and workout schedules.",
      technologies: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "PHP", icon: <SiPhp /> },
      ],
      link: "https://github.com/ASDENUWAN/CS-project-frontend.git",
      image: project2Img,
    },
    {
      title: "SkillHive Web Application",
      description:
        "A microservice-based web application that connects users with daily service providers on a single platform.",
      technologies: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "React", icon: <FaReact /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Jenkins", icon: <SiJenkins /> },
      ],
      link: "https://github.com/IssaWick/SkillHiveWebApplication.git",
      image: project3Img,
    },
  ];

  const education = [
    {
      school: "Ananda College Colombo 10",
      degree: "Science Stream",
      year: "2013 - 2021",
      icon: <FaSchool size={30} color="#00b09b" />,
      logo: anandaLogo,
    },
    {
      school: "University of Sri Jayewardenepura",
      degree: "BSc.(Hons) Computer Science",
      year: "2022 - 2026",
      icon: <FaGraduationCap size={30} color="#00b09b" />,
      logo: universityLogo,
    },
  ];

  return (
    <div className="dark-mode">
      {/* ===== NAVBAR ===== */}
      <Navbar expand="lg" fixed="top" className="shadow-sm navbar-dark bg-dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="mx-auto nav-center">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ===== HERO ===== */}
      <section id="home" className="hero-section hero-dark">
        <Container className="text-center hero-container">
          <motion.img
            src={profileImg}
            alt="Profile"
            className="profile-img"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
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
              <FaLinkedin size={30} />
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
                I’m a Full Stack Developer and Data Science enthusiast from Sri Lanka, pursuing a BSc in Computer Science. 
                I enjoy building web applications and scalable backend systems, with experience in React, Node.js, and Python. 
                I’m also passionate about exploring technology applications in the banking industry.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== EDUCATION ===== */}
      <section id="education" className="section section-colored text-center">
        <Container>
          <h2 className="mb-4">Education</h2>
          <Row className="justify-content-center">
            {education.map((edu, idx) => (
              <Col md={6} key={idx} className="mb-4">
                <Card
                  className="education-card shadow-sm p-3"
                  style={{
                    backgroundColor: "#2a2a2a",
                    color: "#eee",
                    borderRadius: "12px",
                  }}
                >
                  <div className="d-flex align-items-center gap-3">
                    {edu.logo ? (
                      <img
                        src={edu.logo}
                        alt={edu.school}
                        style={{ width: "50px", height: "50px", objectFit: "contain" }}
                      />
                    ) : (
                      edu.icon
                    )}
                    <div className="text-start">
                      <h5>{edu.school}</h5>
                      <p className="mb-0">{edu.degree}</p>
                      <small>{edu.year}</small>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="section section-alt text-center">
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
                        backgroundColor: "#2a2a2a",
                        color: "#eee",
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
      <section id="projects" className="section section-colored">
        <Container>
          <h2 className="text-center mb-4">Projects</h2>
          <Row>
            {projects.map((proj, idx) => (
              <Col md={4} key={idx} className="mb-4">
                <Card className="project-card shadow-sm h-100">
                  <Card.Img
                    variant="top"
                    src={proj.image}
                    alt={proj.title}
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>{proj.title}</Card.Title>
                    <Card.Text>{proj.description}</Card.Text>
                    <div className="project-techs mb-3 d-flex flex-wrap gap-2">
                      {proj.technologies.map((tech, i) => (
                        <span key={i} className="tech-badge d-flex align-items-center gap-1">
                          {React.cloneElement(tech.icon, { size: 20, color: "#00b09b" })}
                          {tech.name}
                        </span>
                      ))}
                    </div>
                    <Button variant="success" href={proj.link}>
                      View Project
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <div style={{ height: "60px", background: "#1e1e1e" }}></div>

      <section id="contact" className="section section-alt text-center">
        <Container>
          <h2>Contact Me</h2>
          <p className="lead">Let’s work together or just say hello 👋</p>
          <div className="contact-info mt-4 mb-4">
            <p className="d-flex align-items-center justify-content-center gap-2">
              <FaEnvelope size={22} color="#00b09b" />{" "}
              <a href="mailto:ipiyasara@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>
                ipiyasara@gmail.com
              </a>
            </p>
            <p className="d-flex align-items-center justify-content-center gap-2">
              <FaPhone size={22} color="#00b09b" /> <span>+94 77 415 7296</span>
            </p>
          </div>
        </Container>
      </section>

      <footer
        className="footer text-center py-4"
        style={{
          backgroundColor: "#222",
          color: "#f8f9fa",
        }}
      >
        <p>© {new Date().getFullYear()} Isira Wickramaarachchi. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
