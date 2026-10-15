import { useState } from 'react';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Check, Cloud, Code2, Container,
  ExternalLink, Github, GitBranch, Layers3, Linkedin, Mail, Menu, Monitor,
  Network, ShieldCheck, Terminal, Workflow, X, Zap
} from 'lucide-react';

const profile = {
  name: 'Mohammed Zeeshan Ahmed',
  email: 'zeeshanahmed.mohd6@gmail.com',
  github: 'https://github.com/Zeeshansgit',
  linkedin: 'https://www.linkedin.com/in/zeeshan-ahmed-21b72a345/',
};

const nav = [['About', 'about'], ['Capabilities', 'capabilities'], ['Projects', 'projects'], ['Experience', 'experience'], ['Contact', 'contact']];

const capabilities = [
  { icon: Cloud, number: '01', title: 'Cloud platforms', text: 'Azure infrastructure and deployments, with AWS services applied in portfolio projects.', tags: ['Azure', 'AWS', 'Virtual Machines', 'EC2', 'VPC', 'IAM'] },
  { icon: Workflow, number: '02', title: 'CI/CD & delivery', text: 'Build and release workflows that make application delivery more consistent and repeatable.', tags: ['Azure DevOps', 'GitHub Actions', 'Jenkins', 'YAML', 'GitOps'] },
  { icon: Container, number: '03', title: 'Containers & orchestration', text: 'Containerize applications and practise deployment patterns for Kubernetes-based workloads.', tags: ['Docker', 'Docker Compose', 'Kubernetes', 'EKS'] },
  { icon: Layers3, number: '04', title: 'Infrastructure as code', text: 'Define and validate cloud infrastructure using version-controlled configuration.', tags: ['Terraform', 'Linux', 'Networking', 'Bitbucket Pipelines'] },
  { icon: Monitor, number: '05', title: 'Observability', text: 'Build visibility into services with metrics, dashboards, and alerting fundamentals.', tags: ['Prometheus', 'Grafana', 'Alerting'] },
  { icon: ShieldCheck, number: '06', title: 'DevSecOps practices', text: 'Add code-quality and container/dependency checks to development workflows.', tags: ['SonarQube', 'Trivy', 'Nexus', 'OWASP Dependency-Check'] },
];

const projects = [
  { id: '01', name: 'Wanderlust', kind: 'CLOUD-NATIVE APPLICATION', title: 'Three-tier MERN deployment on AWS EKS', text: 'A portfolio project exploring containerized frontend and backend services, Kubernetes deployment, infrastructure provisioning, GitOps, and monitoring.', stack: ['AWS EKS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Argo CD', 'Prometheus', 'Grafana'], url: 'https://github.com/Zeeshansgit/Wanderlust-project', featured: true },
  { id: '02', name: 'Spring Pet Clinic', kind: 'CI/CD & SECURITY', title: 'Automated build-to-deployment pipeline', text: 'A Jenkins pipeline project integrating Maven builds, code-quality analysis, image scanning, artifact storage, and Kubernetes deployment.', stack: ['Jenkins', 'Maven', 'SonarQube', 'Trivy', 'Nexus', 'Kubernetes'], url: 'https://github.com/Zeeshansgit/SPC-Deployment' },
  { id: '03', name: 'Terraform Bitbucket', kind: 'INFRASTRUCTURE AS CODE', title: 'Repeatable AWS infrastructure workflow', text: 'A Terraform and Bitbucket Pipelines project covering infrastructure formatting, validation, and a controlled apply workflow.', stack: ['Terraform', 'AWS EC2', 'VPC', 'Bitbucket Pipelines'], url: 'https://github.com/Zeeshansgit/Terraform-bitbucket' },
  { id: '04', name: 'Branch-based deployment', kind: 'CONTINUOUS DELIVERY', title: 'Branch-aware deployment workflow', text: 'A GitHub Actions project demonstrating branch-based deployment flows for staging and main environments on EC2.', stack: ['GitHub Actions', 'AWS EC2', 'Git', 'Health checks'], url: 'https://github.com/Zeeshansgit/branch-based-deployment' },
];

function SectionLabel({ index, children }) { return <div className="section-label"><span>{index}</span><span>{children}</span><i /></div>; }

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('about');
  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActive(id); setMenuOpen(false);
  };
  return <div className="site-shell">
    <header className="topbar">
      <a className="wordmark" href="#about" onClick={(e) => { e.preventDefault(); goTo('about'); }}><span className="mark">ZA</span><span>ZEESHAN<span className="wordmark-muted">.DEV</span></span></a>
      <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
        {nav.map(([label, id]) => <button key={id} className={active === id ? 'nav-link active' : 'nav-link'} onClick={() => goTo(id)}>{label}</button>)}
        <a className="nav-cta" href={`mailto:${profile.email}`}>Let's talk <ArrowUpRight size={15}/></a>
      </nav>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <main>
      <section className="hero section-wrap" id="about">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"/> CLOUD · DEVOPS · AUTOMATION <span className="eyebrow-line"/></div>
          <h1>Make infrastructure<br/>work <em>better.</em></h1>
          <p className="hero-lead">I’m Zeeshan — an early-career Cloud & DevOps engineer building practical skills in cloud infrastructure, CI/CD automation, containers, and reliable deployments.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects" onClick={(e) => { e.preventDefault(); goTo('projects'); }}>Explore my work <ArrowDownRight size={17}/></a><a className="button button-secondary" href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={14}/></a></div>
          <div className="hero-meta"><span><span className="meta-key">BASED IN</span> Hyderabad, India</span><span><span className="meta-key">FOCUS</span> Cloud & DevOps roles</span></div>
        </div>
        <div className="hero-visual" aria-label="Illustration of an automated delivery pipeline">
          <div className="visual-top"><span>DELIVERY / PIPELINE_01</span><span className="live"><i/> SYSTEMS THINKING</span></div>
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <div className="core"><Network size={36}/><span>INFRA</span></div>
          <div className="node node-a"><Code2/><span>CODE</span></div><div className="node node-b"><GitBranch/><span>COMMIT</span></div><div className="node node-c"><Container/><span>BUILD</span></div><div className="node node-d"><Cloud/><span>DEPLOY</span></div>
          <div className="visual-bottom"><span>01 / PLAN</span><span>02 / AUTOMATE</span><span>03 / OBSERVE</span></div>
        </div>
        <div className="hero-bottomline"><span>ENGINEERING MINDSET</span><span>LEARN · AUTOMATE · IMPROVE</span><ArrowDownRight size={17}/></div>
      </section>

      <section className="intro-band"><div className="section-wrap intro-inner"><p>THE APPROACH</p><h2>Practical engineering. Clear automation.<br/><span>Infrastructure you can understand and improve.</span></h2><div className="intro-aside">I focus on learning the “why” behind the tools — then applying them in projects with documented, repeatable workflows.</div></div></section>

      <section className="section-wrap section-block" id="capabilities">
        <SectionLabel index="01">CORE CAPABILITIES</SectionLabel><div className="section-heading"><h2>Tools are useful.<br/><em>How you use them matters.</em></h2><p>A grounded overview of the technologies I’ve worked with through Azure-focused experience, labs, and hands-on portfolio projects.</p></div>
        <div className="capability-grid">{capabilities.map((item) => { const Icon = item.icon; return <article className="capability-card" key={item.number}><div className="cap-top"><span>{item.number}</span><Icon size={20}/></div><h3>{item.title}</h3><p>{item.text}</p><div className="tag-list">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>; })}</div>
      </section>

      <section className="projects-section" id="projects"><div className="section-wrap section-block"><SectionLabel index="02">SELECTED PROJECTS</SectionLabel><div className="section-heading"><h2>Built to learn.<br/><em>Documented to share.</em></h2><p>Project work demonstrates how I connect source control, automation, cloud resources, containers, and monitoring.</p></div>
        <div className="project-grid">{projects.map((p) => <article className={p.featured ? 'project-card project-featured' : 'project-card'} key={p.id}><div className="project-card-top"><span className="project-index">/{p.id}</span><span className="project-kind">{p.kind}</span><a href={p.url} target="_blank" rel="noreferrer" aria-label={`Open ${p.name} GitHub repository`}><ArrowUpRight size={18}/></a></div><div className="project-art"><div className="art-grid"/><div className="art-window"><div className="window-dots"><i/><i/><i/></div><div className="code-line short"/><div className="code-line long"/><div className="code-line medium"/><div className="code-line long accent"/><div className="code-line short"/></div><div className="art-chip">{p.featured ? 'AWS / EKS' : p.id === '02' ? 'BUILD / SCAN' : p.id === '03' ? 'PLAN / APPLY' : 'BRANCH / DEPLOY'}</div></div><div className="project-info"><h3>{p.name}</h3><h4>{p.title}</h4><p>{p.text}</p><div className="tag-list">{p.stack.map(tag => <span key={tag}>{tag}</span>)}</div><a className="text-link" href={p.url} target="_blank" rel="noreferrer">View repository <ArrowRight size={15}/></a></div></article>)}</div>
      </div></section>

      <section className="section-wrap section-block" id="experience"><SectionLabel index="03">EXPERIENCE & LEARNING</SectionLabel><div className="section-heading"><h2>Learning by doing.<br/><em>Growing with every release.</em></h2><p>Experience and project work, presented with a clear distinction between professional experience and independent projects.</p></div>
        <div className="timeline"><div className="timeline-entry"><div className="timeline-date">DEC 2025 — MAY 2026<span>6 MONTHS</span></div><div className="timeline-marker"><i/></div><div className="timeline-content"><div className="timeline-heading"><div><span className="entry-type">PROFESSIONAL EXPERIENCE</span><h3>DevOps Engineer</h3><h4>Nafa Barter Pvt Ltd · Hyderabad</h4></div><span className="entry-number">01</span></div><p>Worked on Azure-focused delivery workflows and application deployment tasks, using Azure DevOps and GitHub Actions to improve consistency across environments.</p><ul><li><Check size={15}/> Created and maintained multi-stage CI/CD pipelines and reusable YAML templates.</li><li><Check size={15}/> Supported frontend/backend deployments, Azure VM configuration, and domain routing workflows.</li><li><Check size={15}/> Used SonarQube checks, Docker, GitHub repository controls, and Prometheus/Grafana monitoring.</li></ul><div className="tag-list">{['Azure DevOps', 'GitHub Actions', 'Azure', 'Docker', 'SonarQube', 'Prometheus', 'Grafana'].map(t => <span key={t}>{t}</span>)}</div></div></div>
          <div className="timeline-entry"><div className="timeline-date">ONGOING<span>PORTFOLIO WORK</span></div><div className="timeline-marker"><i/></div><div className="timeline-content"><div className="timeline-heading"><div><span className="entry-type">INDEPENDENT PROJECTS</span><h3>AWS & DevOps projects</h3><h4>Personal portfolio · GitHub</h4></div><span className="entry-number">02</span></div><p>Building and documenting AWS-focused projects to deepen understanding of infrastructure as code, container orchestration, CI/CD, and GitOps.</p><div className="tag-list">{['AWS', 'Terraform', 'EKS', 'Kubernetes', 'Jenkins', 'Argo CD'].map(t => <span key={t}>{t}</span>)}</div></div></div>
        </div>
      </section>

      <section className="terminal-section"><div className="section-wrap terminal-inner"><div><SectionLabel index="04">MY WORKING PRINCIPLES</SectionLabel><h2>Reliable delivery is<br/><em>a repeatable process.</em></h2><p>My goal is to make deployments easier to follow, easier to troubleshoot, and safer to improve.</p></div><div className="terminal-card"><div className="terminal-head"><span><i/> zeeshan@cloud:~</span><span>WORKFLOW.LOG</span></div><div className="terminal-content"><p><b>01</b><span className="prompt">$</span> git version-control <em>→ track every change</em></p><p><b>02</b><span className="prompt">$</span> pipeline automate <em>→ repeatable releases</em></p><p><b>03</b><span className="prompt">$</span> security scan <em>→ catch issues early</em></p><p><b>04</b><span className="prompt">$</span> metrics observe <em>→ learn from systems</em></p><div className="terminal-result"><Zap size={15}/> OUTPUT: CONTINUOUS IMPROVEMENT</div></div></div></div></section>

      <section className="section-wrap contact-section" id="contact"><div className="contact-top"><SectionLabel index="05">CONTACT</SectionLabel><span className="contact-note">OPEN TO CLOUD & DEVOPS OPPORTUNITIES</span></div><h2>Have a role or project<br/>in mind? <em>Let’s connect.</em></h2><div className="contact-bottom"><p>I’m looking for an opportunity to contribute, learn from experienced engineers, and grow in cloud and DevOps.</p><div className="contact-links"><a href={`mailto:${profile.email}`}><Mail size={17}/><span>{profile.email}</span><ArrowUpRight size={16}/></a><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/><span>GitHub profile</span><ArrowUpRight size={16}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/><span>LinkedIn profile</span><ArrowUpRight size={16}/></a></div></div></section>
    </main>
    <footer className="footer"><a className="wordmark" href="#about" onClick={(e) => { e.preventDefault(); goTo('about'); }}><span className="mark">ZA</span><span>ZEESHAN<span className="wordmark-muted">.DEV</span></span></a><span>DESIGNED WITH INTENT · BUILT TO EVOLVE</span><span>© {new Date().getFullYear()} MOHAMMED ZEESHAN AHMED</span></footer>
  </div>;
}
