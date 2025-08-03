"use client";

import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const workExperience = [
  {
    title: "Penetration Tester",
    company: "Freelance",
    location: "Remote",
    period: "2023 - 2024",
    description: [
      "Conducted web application penetration tests for clients, identifying critical vulnerabilities (SQLi, XSS, CSRF)",
      "Performed network security assessments using Nmap, Metasploit, and Wireshark",
      "Delivered detailed reports with CVSS scoring and remediation strategies",
      "Contributed to bug bounty programs on platforms like HackerOne",
    ],
  },
  {
    title: "Security Researcher",
    company: "Personal Projects",
    location: "Remote",
    period: "2022 - 2022",
    description: [
      "Developed custom scripts for automated vulnerability scanning (Python, Bash)",
      "Reverse-engineered malware samples in isolated environments",
      "Published write-ups on Active Directory attack vectors and cloud security misconfigurations",
    ],
  },
  {
    title: "IT Security Intern",
    company: "ITI",
    location: "Shebin El-Kom, Menoufia",
    period: "2024 - 2024",
    description: [
      "Conducted 50+ vulnerability assessments for web apps using Burp Suite and OWASP ZAP, identifying critical flaws (SQLi, XSS, IDOR).",
      "Executed network penetration tests on client infrastructures, uncovering misconfigured firewalls and exposed services (Nmap, Metasploit).",
      "Assisted in red team exercises, simulating advanced phishing and lateral movement attacks.",
    ],
  },
  {
    title: "2. Security Researcher",
    company: "Bug Bounty Hunter",
    location: "Remote",
    period: "2025",
    description: [
      "Ranked top 5% on platforms like HackerOne and Bugcrowd for discovering high-impact vulnerabilities (e.g., RCE in SaaS platforms).",
      "Developed Python automation scripts to scan for OWASP Top 10 vulnerabilities, cutting manual testing time by 40%.",
      "Reverse-engineered malware samples in sandboxed environments, documenting IoCs for threat intelligence.",
    ],
  },
];

const education = [
  {
    degree: "Bachelor's Degree in Computer Science & AI (In Progress)",
    institution: "University of Sadat City, Egypt",
    location: "Sadat City, Egypt",
    period: "2022 - 2026",
    description:
    "Specialized coursework: Network Security, Ethical Hacking, Cryptography. Thesis: Exploiting IoT Device Vulnerabilities in Smart Home Systems."
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-text-primary">Experience & Education</h2>
          <div className="h-1 w-16 sm:w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
            My journey in cybersecurity and academic foundation that shaped my technical expertise.
          </p>
        </div>

        <div data-aos="zoom-in" className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 md:mb-8 flex items-center text-text-primary">
              <FaBriefcase className="mr-2 h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              Work Experience
            </h3>

            <div className="relative border-l-2 border-primary/30 pl-6 sm:pl-8 space-y-8 md:space-y-12">
              {workExperience.map((job, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[18px] sm:-left-10 mt-1 h-4 w-4 sm:h-5 sm:w-5 rounded-full border-4 border-background bg-primary"></div>
                  <div className="mb-2">
                    <h4 className="text-lg sm:text-xl font-semibold text-text-primary">{job.title}</h4>
                    <div className="text-primary font-medium text-sm sm:text-base">
                      {job.company}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-text-secondary mb-3">
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                      {job.period}
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-text-secondary">
                    {job.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl text-text-primary sm:text-2xl font-semibold mb-6 md:mb-8 flex items-center">
              <FaGraduationCap className="mr-2 h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              Education
            </h3>

            <div className="relative border-l-2 border-primary/30 pl-6 sm:pl-8 space-y-8 md:space-y-12">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[18px] sm:-left-10 mt-1 h-4 w-4 sm:h-5 sm:w-5 rounded-full border-4 border-background bg-primary"></div>
                  <div className="mb-2">
                    <h4 className="text-lg sm:text-xl font-semibold text-text-primary">{edu.degree}</h4>
                    <div className="text-primary font-medium text-sm sm:text-base">
                      {edu.institution}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-text-secondary mb-3">
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                      {edu.location}
                    </div>
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                      {edu.period}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
