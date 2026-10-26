import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import { Activity, Boxes, Cloud, Container, GitBranch, ShieldCheck } from "lucide-react";
import "./TechSpheres.css";

type Sphere = { title: string; label: string; icon: LucideIcon; tools: string[] };

const spheres: Sphere[] = [
  { title: "Cloud", label: "FOUNDATION", icon: Cloud, tools: ["AWS", "Azure", "EC2", "VPC", "IAM", "Azure Front Door"] },
  { title: "Delivery", label: "AUTOMATION", icon: GitBranch, tools: ["GitHub Actions", "Jenkins", "Azure DevOps", "Bitbucket Pipelines", "YAML"] },
  { title: "Platform", label: "CONTAINERS", icon: Container, tools: ["Docker", "Docker Compose", "Kubernetes", "EKS", "Argo CD", "GitOps"] },
  { title: "Infrastructure", label: "AS CODE", icon: Boxes, tools: ["Terraform", "Linux", "Bash", "Python", "Networking"] },
  { title: "Observe", label: "RELIABILITY", icon: Activity, tools: ["Prometheus", "Grafana", "Alerting", "Health checks"] },
  { title: "Secure", label: "DEVSECOPS", icon: ShieldCheck, tools: ["SonarQube", "Trivy", "Nexus", "OWASP Dependency-Check"] },
];

export function TechSpheres() {
  return <div className="tech-spheres" aria-label="Cloud and DevOps technology stack">
    {spheres.map(({ title, label, icon: Icon, tools }, index) => (
      <article className="tech-sphere" key={title} style={{ "--sphere-index": index } as CSSProperties}>
        <div className="tech-sphere-glow" aria-hidden="true" />
        <header><span>{label}</span><Icon size={19} aria-hidden="true" /></header>
        <div className="tech-sphere-core" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
        <h3>{title}</h3>
        <ul>{tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
      </article>
    ))}
  </div>;
}
