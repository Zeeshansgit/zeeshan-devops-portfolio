import { useEffect, useState } from "react";
import {
  Activity,
  ArrowDown,
  ArrowUpRight,
  Box,
  BriefcaseBusiness,
  CheckCircle2,
  Cloud,
  Code2,
  Container,
  Download,
  ExternalLink,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  MonitorCog,
  Network,
  Rocket,
  Server,
  ShieldCheck,
  Terminal,
  UserRound,
  X,
  Zap,
} from "lucide-react";
import "./App.css";

const profile = {
  name: "Mohammed Zeeshan Ahmed",
  shortName: "Zeeshan Ahmed",
  role: "DevOps Engineer",
  location: "Hyderabad, India",
  email: "zeeshanahmed.mohd6@gmail.com",
  linkedin: "https://www.linkedin.com/in/zeeshan-ahmed-21b72a345/",
  github: "https://github.com/Zeeshansgit",
};

const navigation = [
  { id: "about", label: "About", icon: UserRound },
  { id: "skills", label: "Skills", icon: Layers3 },
  { id: "projects", label: "Projects", icon: Box },
  { id: "experience", label: "Experience", icon: BriefcaseBusiness },
  { id: "terminal", label: "Terminal", icon: Terminal },
  { id: "contact", label: "Contact", icon: Mail },
];

const skills = [
  {
    icon: Cloud,
    title: "Cloud",
    description:
      "Cloud infrastructure, compute, networking, storage and deployment environments.",
    tags: ["Microsoft Azure", "AWS", "EC2", "VPC", "IAM"],
  },
  {
    icon: Rocket,
    title: "CI / CD",
    description:
      "Automated delivery workflows for building, testing, scanning and deploying applications.",
    tags: ["Azure DevOps", "GitHub Actions", "CI/CD", "YAML"],
  },
  {
    icon: Container,
    title: "Containers",
    description:
      "Containerized application workloads and repeatable deployment environments.",
    tags: ["Docker", "Kubernetes", "AKS", "EKS"],
  },
  {
    icon: Server,
    title: "Infrastructure",
    description:
      "Infrastructure automation and configuration using infrastructure-as-code practices.",
    tags: ["Terraform", "Linux", "VM", "Networking"],
  },
  {
    icon: MonitorCog,
    title: "Observability",
    description:
      "Infrastructure and application visibility through metrics, dashboards and alerts.",
    tags: ["Prometheus", "Grafana", "Monitoring", "Alerts"],
  },
  {
    icon: ShieldCheck,
    title: "DevSecOps",
    description:
      "Security scanning and secure delivery practices integrated into deployment workflows.",
    tags: ["SonarQube", "Trivy", "IAM", "Secrets"],
  },
];

const projects = [
  {
    number: "01",
    title: "Wanderlust",
    subtitle: "Three-Tier MERN DevOps & Kubernetes Deployment",
    description:
      "Deployed a three-tier MERN application on AWS EKS using Kubernetes Deployments, Services and namespaces. Containerized frontend and backend workloads, provisioned infrastructure with Terraform, and implemented automated CI/CD and GitOps delivery.",
    technologies: [
      "AWS EKS",
      "Kubernetes",
      "Docker",
      "Terraform",
      "GitHub Actions",
      "Argo CD",
      "Prometheus",
      "Grafana",
      "SonarQube",
      "Trivy",
    ],
    github: "https://github.com/Zeeshansgit/Wanderlust-project",
  },
  {
    number: "02",
    title: "Spring Pet Clinic",
    subtitle: "CI/CD Pipeline & Kubernetes Deployment",
    description:
      "Built an end-to-end CI/CD pipeline for automated build, testing, containerization, security scanning and Kubernetes deployment. Integrated Maven, SonarQube, Trivy and Nexus Repository.",
    technologies: [
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
    title: "Terraform Bitbucket",
    subtitle: "Infrastructure Automation",
    description:
      "Provisioned AWS infrastructure including EC2, VPC and subnets using reusable Terraform configurations and automated infrastructure provisioning through Bitbucket Pipelines.",
    technologies: [
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

const experience = [
  {
    period: "DEC 2025 — APR 2026",
    company: "Nafa Barter Pvt Ltd",
    role: "DevOps Engineer",
    description:
      "Worked on cloud infrastructure, CI/CD automation, containerization, deployment workflows and monitoring. Contributed to automated delivery pipelines and operational infrastructure across cloud and hosting environments.",
    technologies: [
      "Azure DevOps",
      "GitHub Actions",
      "Docker",
      "Azure",
      "Terraform",
      "Nginx Proxy Manager",
      "Prometheus",
      "Grafana",
    ],
  },
];

const commands = [
  {
    command: "whoami",
    output: "devops-engineer",
  },
  {
    command: "cloud --status",
    output: "azure / aws / operational",
  },
  {
    command: "containers --runtime",
    output: "docker / kubernetes",
  },
  {
    command: "delivery --pipeline",
    output: "automated / repeatable / monitored",
  },
];

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date())
      );
    };

    updateTime();

    const interval = window.setInterval(updateTime, 1000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.05, 0.2, 0.5],
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      {/* Decorative 3D background */}
      <div className="geometric-background" aria-hidden="true">
        <div className="geo geo-orange geo-one" />
        <div className="geo geo-red geo-two" />
        <div className="geo geo-cyan geo-three" />
        <div className="geo geo-blue geo-four" />
        <div className="geo geo-orange geo-five" />
        <div className="geo geo-cyan geo-six" />
        <div className="geo-triangle" />
      </div>

      {/* Mobile top bar */}
      <header className="mobile-header">
        <button className="mobile-brand" onClick={() => goTo("about")}>
          <span>Z.</span>
          <strong>ZEESHAN</strong>
        </button>

        <button
          className="mobile-menu"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <div className="dashboard">
        {/* =====================================================
            SIDEBAR
        ====================================================== */}
        <aside className={`sidebar ${menuOpen ? "sidebar-open" : ""}`}>
          <div className="sidebar-colors">
            <span className="color-blue" />
            <span className="color-green" />
            <span className="color-yellow" />
            <span className="color-red" />
          </div>

          <div className="sidebar-divider" />

          <nav className="side-navigation">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  className={`side-nav-item ${active ? "active" : ""}`}
                  onClick={() => goTo(item.id)}
                >
                  <Icon size={17} strokeWidth={1.8} />
                  <span>{item.label}</span>
                  <i />
                </button>
              );
            })}
          </nav>

          <div className="sidebar-footer">
            <span>OPERATOR / 01</span>
            <span>BUILD · DEPLOY · REPEAT</span>
          </div>
        </aside>

        {/* =====================================================
            MAIN
        ====================================================== */}
        <main className="main-content">
          {/* =================================================
              PROFILE HEADER
          ================================================== */}
          <section className="profile-card">
            <div className="window-bar">
              <div className="window-dots">
                <span className="dot-red" />
                <span className="dot-yellow" />
                <span className="dot-green" />
              </div>

              <span className="console-title">operator console</span>
            </div>

            <div className="profile-body">
              <div className="identity">
                <div className="profile-avatar">
                  <div className="avatar-inner">
                    <span>Z.</span>
                  </div>
                </div>

                <div className="identity-copy">
                  <h1>
                    Zeeshan <span>Ahmed</span>
                  </h1>

                  <p>{profile.role}</p>

                  <small>operator / 01</small>
                </div>
              </div>

              <div className="system-status">
                <div className="status-title">SYSTEM STATUS</div>

                <div className="status-row">
                  <span>status:</span>
                  <strong>
                    <i className="available-dot" />
                    available
                  </strong>
                </div>

                <div className="status-row">
                  <span>tz:</span>
                  <strong>GMT+5:30</strong>
                </div>

                <div className="status-row">
                  <span>response:</span>
                  <strong>&lt;24h</strong>
                </div>
              </div>

              <div className="profile-actions">
                <a
                  href="/Resume.CV.pdf"
                  className="cv-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Download size={17} />
                  Download CV
                  <ArrowUpRight size={15} />
                </a>

                <a
                  className="email-mini"
                  href={`mailto:${profile.email}`}
                >
                  <Mail size={16} />
                  {profile.email}
                </a>

                <div className="social-row">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>

                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>

                  <a
                    href={`mailto:${profile.email}`}
                    aria-label="Email"
                  >
                    <Mail size={18} />
                  </a>

                  <a href="#projects" aria-label="Projects">
                    <Code2 size={18} />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* =================================================
              ABOUT
          ================================================== */}
          <section className="content-card about-card" id="about">
            <div className="section-heading-console">
              <span>ABOUT ME</span>
              <strong>.</strong>
            </div>

            <div className="heading-line">
              <span />
              <span />
            </div>

            <div className="about-meta">
              <span>◆</span>
              <strong>DevOps Engineer</strong>
              <span>·</span>
              <span>Hyderabad, IN</span>
              <span>·</span>
              <span>Cloud / CI/CD / Kubernetes</span>
            </div>

            <div className="about-divider" />

            <div className="about-text">
              <p className="about-lead">
                DevOps Engineer focused on building reliable cloud
                infrastructure, automated delivery pipelines, containerized
                applications, and repeatable deployment systems.
              </p>

              <p>
                My work centers around connecting development and operations
                through automation. I work with cloud platforms, Linux
                environments, CI/CD pipelines, Docker, Kubernetes,
                infrastructure-as-code and monitoring tools to create
                predictable deployment workflows.
              </p>

              <p>
                I enjoy turning manual infrastructure and deployment
                processes into structured, automated systems with a strong
                focus on reliability, security, observability and
                maintainability.
              </p>
            </div>

            <div className="about-check-grid">
              <div>
                <CheckCircle2 size={17} />
                <span>Cloud infrastructure</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>CI/CD automation</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Container orchestration</span>
              </div>

              <div>
                <CheckCircle2 size={17} />
                <span>Infrastructure automation</span>
              </div>
            </div>
          </section>

          {/* =================================================
              SKILLS
          ================================================== */}
          <section className="content-card" id="skills">
            <div className="section-top">
              <div>
                <span className="console-label">01 / CAPABILITIES</span>

                <h2>
                  Technical <span>stack.</span>
                </h2>
              </div>

              <p>
                A practical toolkit for cloud infrastructure, deployment
                automation, containers and operational visibility.
              </p>
            </div>

            <div className="skills-console-grid">
              {skills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <article className="skill-console-card" key={skill.title}>
                    <div className="skill-top">
                      <div className="skill-symbol">
                        <Icon size={21} />
                      </div>

                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3>{skill.title}</h3>

                    <p>{skill.description}</p>

                    <div className="skill-tags">
                      {skill.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* =================================================
              PROJECTS
          ================================================== */}
          <section className="content-card" id="projects">
            <div className="section-top">
              <div>
                <span className="console-label">02 / SELECTED WORK</span>

                <h2>
                  Project <span>systems.</span>
                </h2>
              </div>

              <p>
                Infrastructure and delivery projects demonstrating
                automation, Kubernetes, cloud and DevSecOps practices.
              </p>
            </div>

            <div className="projects-console">
              {projects.map((project) => (
                <article className="project-console-card" key={project.number}>
                  <div className="project-index">{project.number}</div>

                  <div className="project-info">
                    <div className="project-title-row">
                      <div>
                        <h3>{project.title}</h3>
                        <span>{project.subtitle}</span>
                      </div>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-external"
                        aria-label={`Open ${project.title} on GitHub`}
                      >
                        <Github size={18} />
                        <ArrowUpRight size={17} />
                      </a>
                    </div>

                    <p>{project.description}</p>

                    <div className="project-tags">
                      {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* =================================================
              EXPERIENCE
          ================================================== */}
          <section className="content-card" id="experience">
            <div className="section-top">
              <div>
                <span className="console-label">03 / EXPERIENCE</span>

                <h2>
                  Work <span>history.</span>
                </h2>
              </div>

              <p>
                Professional experience across DevOps engineering,
                infrastructure automation and deployment operations.
              </p>
            </div>

            <div className="experience-list">
              {experience.map((item) => (
                <article className="experience-card" key={item.company}>
                  <div className="experience-period">
                    <span>{item.period}</span>
                  </div>

                  <div className="experience-main">
                    <div className="experience-heading">
                      <div>
                        <h3>{item.role}</h3>
                        <span>{item.company}</span>
                      </div>

                      <div className="experience-status">
                        <i />
                        EXPERIENCE
                      </div>
                    </div>

                    <p>{item.description}</p>

                    <div className="experience-tags">
                      {item.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* =================================================
              DELIVERY FLOW
          ================================================== */}
          <section className="content-card delivery-card">
            <div className="section-top">
              <div>
                <span className="console-label">04 / DELIVERY FLOW</span>

                <h2>
                  Code → <span>production.</span>
                </h2>
              </div>
            </div>

            <div className="delivery-flow">
              <div className="flow-node">
                <Code2 />
                <span>CODE</span>
              </div>

              <div className="flow-line" />

              <div className="flow-node">
                <Zap />
                <span>BUILD</span>
              </div>

              <div className="flow-line" />

              <div className="flow-node">
                <Container />
                <span>PACKAGE</span>
              </div>

              <div className="flow-line" />

              <div className="flow-node">
                <Cloud />
                <span>DEPLOY</span>
              </div>

              <div className="flow-line" />

              <div className="flow-node">
                <Activity />
                <span>MONITOR</span>
              </div>
            </div>
          </section>

          {/* =================================================
              TERMINAL
          ================================================== */}
          <section className="content-card terminal-card" id="terminal">
            <div className="terminal-topbar">
              <div className="terminal-window-title">
                <span />
                <span />
                <span />
                <strong>zeeshan@devops:~</strong>
              </div>

              <span>{time || "00:00:00"}</span>
            </div>

            <div className="terminal-content">
              {commands.map((item) => (
                <div className="terminal-command" key={item.command}>
                  <div>
                    <span className="terminal-prompt">$</span>{" "}
                    {item.command}
                  </div>

                  <p>{item.output}</p>
                </div>
              ))}

              <div className="terminal-cursor">
                <span>$</span> _
              </div>
            </div>
          </section>

          {/* =================================================
              CONTACT
          ================================================== */}
          <section className="content-card contact-card" id="contact">
            <div className="contact-main">
              <span className="console-label">05 / CONTACT</span>

              <h2>
                Let's build
                <br />
                <span>something reliable.</span>
              </h2>

              <p>
                Open to DevOps Engineer opportunities involving cloud
                infrastructure, CI/CD, containers, Kubernetes and
                infrastructure automation.
              </p>
            </div>

            <div className="contact-panel">
              <a href={`mailto:${profile.email}`} className="contact-row">
                <span>
                  <Mail size={19} />
                  {profile.email}
                </span>
                <ArrowUpRight size={18} />
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="contact-row"
              >
                <span>
                  <Github size={19} />
                  GitHub
                </span>
                <ExternalLink size={17} />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-row"
              >
                <span>
                  <Linkedin size={19} />
                  LinkedIn
                </span>
                <ExternalLink size={17} />
              </a>
            </div>
          </section>

          {/* =================================================
              FOOTER
          ================================================== */}
          <footer className="footer">
            <div className="footer-brand">
              <span>Z.</span>
              <strong>ZEESHAN</strong>
            </div>

            <span>DEVOPS / CLOUD / AUTOMATION</span>

            <span>
              © {new Date().getFullYear()} ZEESHAN AHMED
            </span>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;