/* eslint-disable react/no-unescaped-entities */
"use client";

import { FaShieldAlt, FaUserSecret, FaLock, FaNetworkWired, FaCode, FaTerminal } from "react-icons/fa";
import { SiBurpsuite, SiOwasp, SiPython, SiMetasploit, SiWireshark, SiDocker, SiGit, SiGithub } from "react-icons/si";
import { BsBugFill, BsShieldLock, BsFileLock2 } from "react-icons/bs";

const skills = [
  {
    icon: <FaShieldAlt className="h-8 w-8 mb-4 text-primary" />,
    title: "Penetration Testing",
    description: "Identifying and exploiting vulnerabilities in web applications and networks.",
    technologies: [
      { name: "Burp Suite", icon: <SiBurpsuite className="inline mr-1 text-[#FF6633]" /> },
      { name: "OWASP ZAP", icon: <SiOwasp className="inline mr-1" /> },
      { name: "Metasploit", icon: <SiMetasploit className="inline mr-1 text-[#E95420]" /> }
    ],
  },
  {
    icon: <FaUserSecret className="h-8 w-8 mb-4 text-primary" />,
    title: "Ethical Hacking",
    description: "Simulating cyber attacks to evaluate system security.",
    technologies: [
      { name: "Kali Linux", icon: <FaUserSecret className="inline mr-1 text-[#557C94]" /> }, // ←  SiKaliLinux
      { name: "Nmap", icon: <FaNetworkWired className="inline mr-1" /> },
      { name: "Wireshark", icon: <SiWireshark className="inline mr-1 text-[#1679A7]" /> }
    ],
  },
  {
    icon: <BsBugFill className="h-8 w-8 mb-4 text-primary" />,
    title: "Vulnerability Assessment",
    description: "Identifying, classifying, and prioritizing vulnerabilities.",
    technologies: [
      { name: "Nessus", icon: <FaNetworkWired className="inline mr-1" /> },
      { name: "OpenVAS", icon: <BsShieldLock className="inline mr-1" /> },
      { name: "Nexpose", icon: <FaLock className="inline mr-1" /> }
    ],
  },
  {
    icon: <FaCode className="h-8 w-8 mb-4 text-primary" />,
    title: "Security Tools Development",
    description: "Creating custom scripts and tools for security testing.",
    technologies: [
      { name: "Python", icon: <SiPython className="inline mr-1 text-[#3776AB]" /> },
      { name: "Bash", icon: <FaTerminal className="inline mr-1" /> },
      { name: "PowerShell", icon: <BsFileLock2 className="inline mr-1" /> }
    ],
  },
  {
    icon: <FaNetworkWired className="h-8 w-8 mb-4 text-primary" />,
    title: "Network Security",
    description: "Securing network infrastructure and monitoring traffic.",
    technologies: [
      { name: "Firewalls", icon: <FaLock className="inline mr-1" /> },
      { name: "IDS/IPS", icon: <FaShieldAlt className="inline mr-1" /> },
      { name: "SIEM", icon: <BsShieldLock className="inline mr-1" /> }
    ],
  },
  {
    icon: <SiGit className="h-8 w-8 mb-4 text-primary" />,
    title: "Security Operations",
    description: "Managing secure development and deployment workflows.",
    technologies: [
      { name: "Git", icon: <SiGit className="inline mr-1" /> },
      { name: "GitHub", icon: <SiGithub className="inline mr-1" /> },
      { name: "Docker", icon: <SiDocker className="inline mr-1 text-[#2496ED]" /> }
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-text-primary">My Cybersecurity Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            I specialize in offensive security and defensive measures. Here are my core technical competencies:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              data-aos="zoom-in" 
              key={index}
              className="bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-border"
            >
              <div className="text-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold mb-2 text-text-primary">{skill.title}</h3>
                <p className="text-sm mb-4 text-text-secondary">{skill.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full flex items-center"
                  >
                    {tech.icon} {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
