"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiBurpsuite, SiKalilinux, SiOwasp, SiPython } from "react-icons/si";
import { BsShieldLock, BsBugFill } from "react-icons/bs";
import Link from "next/link";

const projects = [
  {
    title: "Web App Pentesting Lab",
    description:
      "A vulnerable web application designed for security testing, featuring OWASP Top 10 vulnerabilities with guided exploits",
    image: "/pentest-lab.png",
    technologies: ["OWASP ZAP", "Burp Suite", "Kali Linux"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    icon: <SiBurpsuite className="text-[#FF6633]" />
  },
  {
    title: "Network Vulnerability Scanner",
    description:
      "Python-based tool for identifying network vulnerabilities and misconfigurations with automated reporting",
    image: "/network-scanner.png",
    technologies: ["Python", "Nmap", "Wireshark"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    icon: <SiPython className="text-[#3776AB]" />
  },
  {
    title: "Active Directory Attack Lab",
    description:
      "Homelab environment simulating enterprise AD attacks including Kerberoasting and Golden Ticket attacks",
    image: "/ad-lab.png",
    technologies: ["Impacket", "Mimikatz", "BloodHound"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    icon: <BsShieldLock className="text-primary" />
  },
  {
    title: "Malware Analysis Reports",
    description:
      "Collection of technical write-ups analyzing recent malware samples with IOC extraction and mitigation strategies",
    image: "/malware-analysis.png",
    technologies: ["IDA Pro", "Cuckoo Sandbox", "YARA"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    icon: <BsBugFill className="text-[#FF0000]" />
  },
  {
    title: "eJPT Certification Notes",
    description:
      "Comprehensive study notes and lab solutions for eLearnSecurity Junior Penetration Tester certification",
    image: "/ejpt-notes.png",
    technologies: ["Penetration Testing", "Metasploit", "Report Writing"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    icon: <SiKalilinux className="text-[#557C94]" />,
  },
  {
    title: "OWASP WebGoat Solutions",
    description:
      "Documented solutions and bypass techniques for OWASP WebGoat vulnerable application challenges",
    image: "/webgoat.png",
    technologies: ["Web Security", "SQLi", "XSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    icon: <SiOwasp className="text-foreground" />
  },
  {
    title: "Custom Metasploit Modules",
    description:
      "Collection of custom Metasploit modules developed for specific penetration testing scenarios",
    image: "/metasploit.png",
    technologies: ["Ruby", "Exploit Development", "Payloads"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    icon: <SiKalilinux className="text-[#557C94]" />,
  },
  {
    title: "Security Awareness Training",
    description:
      "Interactive training materials for employee security awareness covering phishing and social engineering",
    image: "/security-training.png",
    technologies: ["Social Engineering", "Phishing", "Education"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    icon: <BsShieldLock className="text-primary" />
  },
];

export default function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-text-primary">
            Security Research & Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
            Explore my security research, penetration testing labs, and cybersecurity tools.
            Connect with me on <Link href="https://www.linkedin.com/in/kareem-abdelmuttalib/" target="_blank" className="text-primary hover:underline">LinkedIn</Link> for collaborations.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div data-aos="zoom-in" key={index} className="group relative overflow-hidden rounded-xl border border-border bg-background hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-muted">
                    <div className="text-4xl">
                      {project.icon}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-text-primary">{project.title}</h3>
                    <div className="flex space-x-2">
                      <Link href={project.githubUrl} target="https://github.com/kareem-abdelmuttalib/" className="text-text-primary hover:text-primary transition-colors">
                        <FaGithub className="h-5 w-5" />
                      </Link>
                      <Link href={project.liveUrl} target="_blank" className="text-text-primary hover:text-primary transition-colors">
                        <FaExternalLinkAlt className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-text-primary border-b border-border pb-2">
            Additional Security Work
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div key={index} className="border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow bg-background">
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-medium text-text-primary">{project.title}</h4>
                    <div className="flex space-x-2">
                      <Link href={project.githubUrl} target="https://github.com/kareem-abdelmuttalib/" className="text-text-secondary hover:text-primary transition-colors">
                        <FaGithub className="h-4 w-4" />
                      </Link>
                      <Link href={project.liveUrl} target="_blank" className="text-text-secondary hover:text-primary transition-colors">
                        <FaExternalLinkAlt className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                  <p className="text-xs text-text-secondary mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-[10px] px-2 py-0.5 rounded-full border border-border text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
