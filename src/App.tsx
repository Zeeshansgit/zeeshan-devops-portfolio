import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  Cloud,
  Code2,
  Container,
  Github,
  Linkedin,
  Mail,
  Menu,
  MonitorCog,
  ShieldCheck,
  Terminal,
  X,
  Zap,
} from "lucide-react";
import "./App.css";

const skills = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    text: "Designing and managing scalable cloud infrastructure, networking, compute, storage, and deployment environments.",
    tags: ["AWS", "EC2", "VPC", "IAM", "S3"],
  },
  {
    icon: Zap,
    title: "CI/CD Automation",
    text: "Building reliable delivery pipelines that automate testing, builds, deployments, and release workflows.",
    tags: ["Jenkins", "GitHub Actions", "Git", "CI/CD"],
  },
  {
    icon: Container,
    title: "Containers",
    text: "Containerizing applications and managing repeatable deployment environments using modern container tooling.",
    tags: ["Docker", "Docker Compose", "Images", "Registry"],
  },
  {
    icon: MonitorCog,
    title: "Monitoring",
    text: "Creating visibility into infrastructure and applications through metrics, logs, alerts, and operational dashboards.",
    tags: ["Prometheus", "Grafana", "Logs", "Alerts"],
  },
  {
    icon: Terminal,
    title: "Automation",
    text: "Automating repetitive infrastructure and operational tasks with scripts and infrastructure-as-code practices.",
    tags: ["Bash", "Python", "Terraform", "Ansible"],
  },
  {
    icon: ShieldCheck,
    title: "Security & Reliability",
    text: "Applying secure configuration, access controls, deployment practices, and reliability-focused operational processes.",
    tags: ["IAM", "SSH", "Secrets", "Backups"],
  },
];

const projects = [
  {
    number: "01",
    title: "Wanderlust — Three-Tier MERN DevOps & Kubernetes Deployment",
    description:
      "Deployed a three-tier MERN application on AWS EKS using Kubernetes Deployments, Services, and namespaces. Containerized the frontend and backend with Docker and Docker Compose, provisioned AWS infrastructure with Terraform, and implemented automated CI/CD and GitOps delivery.",
    stack: [
      "AWS EKS",
      "Kubernetes",
      "Docker",
      "Terraform",
      "Jenkins",
      "GitHub Actions",
      "Argo CD",
      "Prometheus",
      "Grafana",
      "SonarQube",
      "Trivy",
      "MongoDB",
      "Redis",
    ],
    github: "https://github.com/Zeeshansgit/Wanderlust-project",
  },
  {
    number: "02",
    title: "Spring Pet Clinic — CI/CD Pipeline & Kubernetes Deployment",
    description:
      "Built an end-to-end Jenkins CI/CD pipeline for automated build, testing, containerization, security scanning, and Kubernetes deployment. Integrated Maven, SonarQube, Trivy, and Nexus Repository while deploying the application on a self-hosted Kubernetes cluster.",
    stack: [
      "Jenkins",
      "Maven",
      "Docker",
      "Kubernetes",
      "SonarQube",
      "Trivy",
      "Nexus",
      "Git",
    ],
    github: "https://github.com/Zeeshansgit/SPC-Deployment",
  },
  {
    number: "03",
    title: "Terraform Bitbucket — Infrastructure Automation",
    description:
      "Provisioned AWS infrastructure including EC2, VPC, and subnets using reusable Terraform configurations. Automated infrastructure provisioning through Bitbucket Pipelines to create consistent and repeatable environment deployments.",
    stack: [
      "Terraform",
      "AWS",
      "EC2",
      "VPC",
      "Subnets",
      "Bitbucket Pipelines",
      "IaC",
    ],
    github: "https://github.com/Zeeshansgit/Terraform-bitbucket",
  },
];

const workflow = [
  {
    icon: Code2,
    title: "Source",
    text: "Code is maintained in version control with a clear and repeatable workflow.",
  },
  {
    icon: Zap,
    title: "Build",
    text: "Automated pipelines validate changes and prepare deployment artifacts.",
  },
  {
    icon: Container,
    title: "Package",
    text: "Applications are packaged into consistent container images.",
  },
  {
    icon: Cloud,
    title: "Deploy",
    text: "Infrastructure and applications are deployed into cloud environments.",
  },
  {
    icon: MonitorCog,
    title: "Monitor",
    text: "Metrics, logs, and alerts provide continuous operational visibility.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const handleMove = (event: MouseEvent) => {
      const rect = hero.getBoundingClientRect();

      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      hero.style.setProperty("--mouse-x", `${x}`);
      hero.style.setProperty("--mouse-y", `${y}`);
    };

    hero.addEventListener("mousemove", handleMove);

    return () => {
      hero.removeEventListener("mousemove", handleMove);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app-wrapper">
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">Z</span>
          <span>ZEESHAN</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <a href="#contact" className="nav-cta">
          Let's Talk <ArrowUpRight size={15} />
        </a>

        <button
          className="menu-button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </header>

      <main>
        <section className="hero" id="home" ref={heroRef}>
          <div className="hero-grid" />

          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="hero-content">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="status-dot" />
                DEVOPS ENGINEER
              </div>

              <h1>
                BUILD.
                <br />
                <span>DEPLOY.</span>
                <br />
                <strong>REPEAT.</strong>
              </h1>

              <p className="hero-description">
                I build reliable cloud infrastructure, automate delivery
                pipelines, containerize applications, and create deployment
                systems designed for speed and consistency.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="primary-button">
                  View Projects
                  <ArrowUpRight size={17} />
                </a>

                <a href="#contact" className="secondary-button">
                  Contact Me
                </a>
              </div>

              <div className="hero-metrics">
                <div>
                  <strong>CI/CD</strong>
                  <span>Automation</span>
                </div>

                <div>
                  <strong>CLOUD</strong>
                  <span>Infrastructure</span>
                </div>

                <div>
                  <strong>OPS</strong>
                  <span>Reliability</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <div className="visual-orbit orbit-three" />

              <div className="profile-platform">
                <div className="profile-image">
                  <div className="profile-placeholder">
                    <Terminal size={72} strokeWidth={1.1} />
                    <span>DEVOPS</span>
                  </div>
                </div>

                <div className="profile-ring" />
              </div>

              <div className="floating-card card-cloud">
                <Cloud size={18} />
                <div>
                  <strong>Cloud</strong>
                  <span>Infrastructure</span>
                </div>
              </div>

              <div className="floating-card card-container">
                <Container size={18} />
                <div>
                  <strong>Docker</strong>
                  <span>Containers</span>
                </div>
              </div>

              <div className="floating-card card-cicd">
                <Zap size={18} />
                <div>
                  <strong>CI/CD</strong>
                  <span>Automated</span>
                </div>
              </div>
            </div>
          </div>

          <a href="#about" className="scroll-indicator">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={16} />
          </a>
        </section>

        <section className="about-section section" id="about">
          <div className="section-label">01 / ABOUT</div>

          <div className="about-layout">
            <div>
              <h2>
                Infrastructure
                <br />
                <span>that works.</span>
              </h2>
            </div>

            <div className="about-copy">
              <p className="large-text">
                DevOps is about creating a reliable path from code to
                production.
              </p>

              <p>
                My focus is on building systems that make deployments
                predictable, infrastructure manageable, and operational
                workflows easier to maintain.
              </p>

              <p>
                From cloud environments and Linux systems to CI/CD pipelines,
                containers, automation, and monitoring, I approach each layer
                as part of one connected delivery system.
              </p>

              <div className="about-checks">
                <div>
                  <CheckCircle2 size={18} />
                  <span>Reliable deployment workflows</span>
                </div>
                <div>
                  <CheckCircle2 size={18} />
                  <span>Automated infrastructure operations</span>
                </div>
                <div>
                  <CheckCircle2 size={18} />
                  <span>Cloud-first deployment architecture</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section section" id="skills">
          <div className="section-heading">
            <div>
              <div className="section-label">02 / CAPABILITIES</div>
              <h2>
                What I <span>build.</span>
              </h2>
            </div>

            <p>
              A practical DevOps toolkit covering infrastructure, automation,
              deployment, containers, and operational visibility.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <article className="skill-card" key={skill.title}>
                  <div className="skill-icon">
                    <Icon size={23} />
                  </div>

                  <div className="skill-number">
                    {String(skills.indexOf(skill) + 1).padStart(2, "0")}
                  </div>

                  <h3>{skill.title}</h3>
                  <p>{skill.text}</p>

                  <div className="tag-list">
                    {skill.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="workflow-section section">
          <div className="section-label">03 / DELIVERY FLOW</div>

          <div className="workflow-heading">
            <h2>
              Code to
              <br />
              <span>production.</span>
            </h2>

            <p>
              A repeatable delivery process connecting source control,
              automation, containers, cloud infrastructure, and monitoring.
            </p>
          </div>

          <div className="workflow">
            {workflow.map((item, index) => {
              const Icon = item.icon;

              return (
                <div className="workflow-item" key={item.title}>
                  <div className="workflow-line">
                    <div className="workflow-icon">
                      <Icon size={20} />
                    </div>
                    {index !== workflow.length - 1 && (
                      <div className="workflow-connector" />
                    )}
                  </div>

                  <div className="workflow-content">
                    <span>0{index + 1}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="projects-section section" id="projects">
          <div className="section-heading">
            <div>
              <div className="section-label">04 / SELECTED WORK</div>
              <h2>
                Selected <span>projects.</span>
              </h2>
            </div>

            <p>
              Projects that demonstrate infrastructure, automation,
              containerization, deployment, and monitoring capabilities.
            </p>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>

                <div className="project-main">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tag-list">
                    {project.stack.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>

                <div className="project-arrow">
                  <ArrowUpRight size={24} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="terminal-section section">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span />
                <span />
                <span />
              </div>

              <span>zeeshan@devops:~</span>

              <Terminal size={15} />
            </div>

            <div className="terminal-body">
              <p>
                <span className="terminal-green">$</span> whoami
              </p>
              <p className="terminal-output">devops-engineer</p>

              <p>
                <span className="terminal-green">$</span> systemctl status
                delivery
              </p>
              <p className="terminal-output terminal-success">
                ● delivery.service — active (running)
              </p>

              <p>
                <span className="terminal-green">$</span> docker ps
              </p>
              <p className="terminal-output">
                api &nbsp; frontend &nbsp; nginx &nbsp; monitoring
              </p>

              <p>
                <span className="terminal-green">$</span>{" "}
                <span className="cursor">_</span>
              </p>
            </div>
          </div>
        </section>

        <section className="contact-section section" id="contact">
          <div className="section-label">05 / CONTACT</div>

          <div className="contact-content">
            <div>
              <h2>
                Let's build
                <br />
                <span>something reliable.</span>
              </h2>

              <p>
                Looking for someone who can take ownership of infrastructure,
                deployment automation, cloud operations, and DevOps
                workflows?
              </p>
            </div>

            <div className="contact-actions">
              <a href="mailto:zeeshanahmed.mohd6@gmail.com" className="contact-link">
                <span>
                  <Mail size={20} />
                  zeeshanahmed.mohd6@gmail.com
                </span>
                <ArrowUpRight size={21} />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <span>
                  <Github size={20} />
                  GitHub
                </span>
                <ArrowUpRight size={21} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <span>
                  <Linkedin size={20} />
                  LinkedIn
                </span>
                <ArrowUpRight size={21} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <span className="brand-mark">Z</span>
          <span>ZEESHAN</span>
        </div>

        <span>DEVOPS / CLOUD / AUTOMATION</span>

        <span>© {new Date().getFullYear()} ZEESHAN</span>
      </footer>
    </div>
  );
}

export default App;