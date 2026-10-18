import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { ArrowDown, ArrowUpRight, Box, Cloud, Github, Linkedin, Mail, Menu, ShieldCheck, Terminal, X, Zap } from "lucide-react";
import "./App.css";

const profile = {
  email: "zeeshanahmed.mohd6@gmail.com",
  github: "https://github.com/Zeeshansgit",
  linkedin: "https://www.linkedin.com/in/zeeshan-ahmed-21b72a345/",
};

const skills = [
  ["Cloud systems", "AWS · Azure · Azure Front Door"],
  ["Delivery engine", "GitHub Actions · Jenkins · Azure DevOps"],
  ["Container fabric", "Docker · Kubernetes · Argo CD"],
  ["Infrastructure code", "Terraform · Linux · Bash · Python"],
  ["Signals & security", "Prometheus · Grafana · SonarQube · Trivy"],
];

const projects = [
  { number: "01", title: "Wanderlust", kind: "MERN / AWS EKS / GITOPS", text: "Three-tier application deployed to AWS EKS with Terraform, CI/CD, Argo CD and a fully observable runtime.", stack: ["EKS", "Terraform", "Argo CD", "Grafana"], href: "https://github.com/Zeeshansgit/Wanderlust-project", icon: Cloud },
  { number: "02", title: "Pet Clinic", kind: "CI/CD / KUBERNETES", text: "Automated build-to-production delivery with Jenkins, Maven, SonarQube, Trivy, Nexus and Kubernetes.", stack: ["Jenkins", "Trivy", "Nexus", "K8s"], href: "https://github.com/Zeeshansgit/SPC-Deployment", icon: Terminal },
  { number: "03", title: "Terraform AWS", kind: "INFRASTRUCTURE AS CODE", text: "Repeatable AWS EC2, VPC and subnet provisioning delivered through an automated Bitbucket workflow.", stack: ["Terraform", "VPC", "EC2", "Pipelines"], href: "https://github.com/Zeeshansgit/Terraform-bitbucket", icon: Box },
];

function CommandScene() {
  const mount = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const target = mount.current;
    if (!target) return;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05081a, 0.08);
    const camera = new THREE.PerspectiveCamera(39, 1, 0.1, 100);
    camera.position.set(0, 0, 10);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    target.appendChild(renderer.domElement);
    const planet = new THREE.Group();
    const cyan = 0x41eaff, violet = 0xa87bff;
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.7, 3), new THREE.MeshBasicMaterial({ color: cyan, wireframe: true, transparent: true, opacity: 0.68 }));
    planet.add(core);
    const glow = new THREE.Mesh(new THREE.IcosahedronGeometry(1.78, 2), new THREE.MeshBasicMaterial({ color: violet, wireframe: true, transparent: true, opacity: 0.08 }));
    planet.add(glow);
    [0, Math.PI / 3, (Math.PI * 2) / 3].forEach((angle, index) => {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(2.65 + index * .2, .016, 8, 120), new THREE.MeshBasicMaterial({ color: index === 1 ? violet : cyan, transparent: true, opacity: .56 }));
      ring.rotation.set(angle, angle * .63, angle * .28);
      planet.add(ring);
    });
    const satellites = new THREE.Group();
    for (let i = 0; i < 7; i += 1) {
      const marker = new THREE.Mesh(new THREE.OctahedronGeometry(.12, 0), new THREE.MeshBasicMaterial({ color: i % 2 ? cyan : violet }));
      const angle = i / 7 * Math.PI * 2;
      marker.position.set(Math.cos(angle) * 3.2, Math.sin(angle) * 1.85, (i % 3 - 1) * .4);
      satellites.add(marker);
    }
    planet.add(satellites); scene.add(planet);
    const starData: number[] = [];
    for (let i = 0; i < 360; i += 1) starData.push((Math.random() - .5) * 24, (Math.random() - .5) * 15, (Math.random() - .5) * 10);
    const starsGeo = new THREE.BufferGeometry(); starsGeo.setAttribute("position", new THREE.Float32BufferAttribute(starData, 3));
    scene.add(new THREE.Points(starsGeo, new THREE.PointsMaterial({ color: 0xc5d9ff, size: .025, transparent: true, opacity: .8 })));
    let mx = 0, my = 0;
    const move = (event: PointerEvent) => { const bounds = target.getBoundingClientRect(); mx = ((event.clientX - bounds.left) / bounds.width - .5); my = ((event.clientY - bounds.top) / bounds.height - .5); };
    target.addEventListener("pointermove", move);
    const resize = () => { const { width, height } = target.getBoundingClientRect(); camera.aspect = width / height; camera.updateProjectionMatrix(); renderer.setSize(width, height); };
    resize(); const observer = new ResizeObserver(resize); observer.observe(target);
    let animation = 0;
    const loop = (time: number) => { planet.rotation.y = time * .00016 + mx * .4; planet.rotation.x = Math.sin(time * .0002) * .13 + my * .18; satellites.rotation.z = -time * .0003; planet.position.y = Math.sin(time * .0006) * .14; renderer.render(scene, camera); animation = requestAnimationFrame(loop); };
    animation = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(animation); observer.disconnect(); target.removeEventListener("pointermove", move); starsGeo.dispose(); renderer.dispose(); target.removeChild(renderer.domElement); };
  }, []);
  return <div ref={mount} className="command-scene" aria-hidden="true" />;
}

export default function App() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("overview");
  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setActive(id); setMenu(false); };
  return <div className="app-shell">
    <div className="aurora aurora-one" /><div className="aurora aurora-two" />
    <header className="navigation">
      <button className="identity" onClick={() => scrollTo("overview")}><span>ZA</span><b>ZEESHAN<span>/OPS</span></b></button>
      <nav className={menu ? "nav-open" : ""}>{["overview", "capabilities", "projects", "experience"].map(item => <button key={item} className={active === item ? "active" : ""} onClick={() => scrollTo(item)}>{item}</button>)}<a href={`mailto:${profile.email}`}>CONTACT <ArrowUpRight size={14}/></a></nav>
      <button className="mobile-menu" aria-label="Toggle menu" onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button>
    </header>
    <main>
      <section className="hero" id="overview">
        <div className="hero-copy"><div className="status"><i/>SYSTEMS ONLINE <span>DEVOPS ENGINEER / INDIA</span></div><p className="overline">MOHAMMED ZEESHAN AHMED</p><h1>ENGINEER<br/><em>THE FLOW.</em></h1><p className="hero-text">I turn cloud complexity into reliable delivery systems—where infrastructure, security, automation, and observability operate as one.</p><div className="hero-actions"><button onClick={() => scrollTo("projects")} className="primary-action">VIEW DEPLOYMENTS <ArrowDown size={16}/></button><a className="ghost-action" href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/> GITHUB</a></div><div className="hero-stats"><div><b>40<span>%</span></b><small>LESS MANUAL<br/>DEPLOYMENT WORK</small></div><div><b>30<span>%</span></b><small>MORE RELIABLE<br/>DELIVERIES</small></div><div><b>25<span>%</span></b><small>FASTER INCIDENT<br/>RESPONSE</small></div></div></div>
        <div className="hero-art"><CommandScene/><div className="art-label top">[ CONTROL PLANE / 01 ]</div><div className="art-label left">CI/CD <i/></div><div className="art-label right"><i/> OBSERVE</div><div className="art-label bottom">AUTOMATED DELIVERY MATRIX</div><div className="scene-caption"><span>●</span> LIVE CLOUD TOPOLOGY</div></div>
      </section>
      <section className="marquee"><div>BUILD <i>✦</i> AUTOMATE <i>✦</i> DEPLOY <i>✦</i> OBSERVE <i>✦</i> SECURE <i>✦</i> BUILD <i>✦</i> AUTOMATE <i>✦</i> DEPLOY <i>✦</i></div></section>
      <section className="section intro" id="capabilities"><p className="eyebrow">01 — SYSTEM CAPABILITIES</p><div className="intro-grid"><h2>TOOLS ARE ONLY<br/>POWERFUL WHEN<br/><em>THEY WORK TOGETHER.</em></h2><p>I design delivery workflows that connect engineering intent with dependable cloud operations. Each layer is built to be repeatable, visible, and ready to evolve.</p></div><div className="skill-stack">{skills.map(([title, content], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{content}</p></div><ArrowUpRight/></article>)}</div></section>
      <section className="section projects" id="projects"><div className="section-head"><div><p className="eyebrow">02 — SELECTED DEPLOYMENTS</p><h2>BUILT FOR THE<br/><em>REAL WORLD.</em></h2></div><p>Projects that demonstrate the whole lifecycle: infrastructure, continuous integration, secure delivery, and signals that help systems stay healthy.</p></div><div className="project-grid">{projects.map((project, index) => { const Icon = project.icon; return <article className={index === 0 ? "project featured" : "project"} key={project.title}><div className="project-top"><span>/{project.number}</span><Icon/><a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} repository`}><ArrowUpRight/></a></div><div className="project-orbit"><span/><i/><b/></div><p className="project-kind">{project.kind}</p><h3>{project.title}</h3><p className="project-text">{project.text}</p><div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div><a className="repo-link" href={project.href} target="_blank" rel="noreferrer">EXPLORE PROJECT <ArrowUpRight size={15}/></a></article>})}</div></section>
      <section className="section experience" id="experience"><p className="eyebrow">03 — OPERATIONS LOG</p><div className="experience-panel"><div className="experience-meta"><span>2025 — 2026</span><i/><span>NAFA BARTER PVT LTD.</span></div><div className="experience-content"><p className="role">DEVOPS ENGINEER</p><h2>MAKE EVERY<br/>RELEASE <em>COUNT.</em></h2><p className="experience-summary">Designed and implemented multi-stage Azure DevOps and GitHub Actions pipelines for application delivery across development, staging, and production.</p><ul><li><ShieldCheck/>Reusable YAML templates reduced manual deployment effort by approximately 40%.</li><li><Zap/>Docker, Nginx Proxy Manager and Azure services supported consistent, scalable hosting.</li><li><Cloud/>Prometheus and Grafana monitoring improved visibility and reduced response time.</li></ul></div><div className="experience-signal"><span>RELEASE HEALTH</span><strong>99.9<small>%</small></strong><i>● SYSTEM OBSERVABLE</i></div></div></section>
      <section className="contact"><p className="eyebrow">04 — OPEN CHANNEL</p><h2>LET'S BUILD<br/>SOMETHING <em>RELIABLE.</em></h2><a className="email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight/></a><div className="contact-foot"><span>AVAILABLE FOR DEVOPS OPPORTUNITIES</span><div><a href={profile.github} target="_blank" rel="noreferrer"><Github/> GITHUB</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin/> LINKEDIN</a><a href={`mailto:${profile.email}`}><Mail/> EMAIL</a></div></div></section>
    </main><footer>© {new Date().getFullYear()} MOHAMMED ZEESHAN AHMED <span>DESIGNED FOR UPTIME ✦</span></footer>
  </div>;
}
