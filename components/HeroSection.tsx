"use client"
import { BsShieldLock, BsBug, BsShieldCheck } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { SiKalilinux, SiPython, SiLinux, SiDocker, SiOwasp } from "react-icons/si";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const techStack = [
    {
      icon: <SiKalilinux className="h-5 w-5 sm:h-6 sm:w-6 text-[#557C94]" />,
      label: "Kali Linux",
    },
    {
      icon: <SiPython className="h-5 w-5 sm:h-6 sm:w-6 text-[#3776AB]" />,
      label: "Python",
    },
    {
      icon: <SiOwasp className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />,
      label: "OWASP",
    },
    {
      icon: <SiLinux className="h-5 w-5 sm:h-6 sm:w-6 text-[#FCC624]" />,
      label: "Linux",
    },
    {
      icon: <SiDocker className="h-5 w-5 sm:h-6 sm:w-6 text-[#2496ED]" />,
      label: "Docker",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-background pt-20 md:pt-0">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-foreground/5"></div>
      </div>
      
      {/* Floating gradient circles */}
      <div className="absolute top-20 left-4 sm:left-10 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-r from-primary/20 to-primary-foreground/20 rounded-full blur-3xl opacity-70 animate-float"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-48 h-48 sm:w-80 sm:h-80 bg-gradient-to-l from-primary/30 to-primary-foreground/20 rounded-full blur-3xl opacity-70 animate-float-delay"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-t from-primary/10 to-primary-foreground/10 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Content */}
        <div data-aos="zoom-in-down" className="space-y-4 sm:space-y-6 text-center md:text-left order-2 md:order-1">
          <div>
            <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium rounded-full mb-3 sm:mb-4 bg-muted text-foreground border border-primary/20 hover:bg-primary/10 transition-colors">
              Available for Security Engagements
            </span>
            <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium rounded-full mb-3 sm:mb-4 bg-muted text-foreground border border-primary/20 hover:bg-primary/10 transition-colors">
              Available for Freelance Work
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-text-primary">
              Hi, I&apos;m  
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
                Kareem Abdelmuttalib
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2 text-text-secondary">
              Penetration Tester & Security Researcher
            </h2>
          </div>

          <p className="text-base sm:text-lg max-w-xl text-text-secondary">
            I identify vulnerabilities before attackers do, transforming weaknesses into fortified defenses.
          </p>
          <p className="text-base sm:text-lg max-w-xl text-text-secondary">
           Specializing in ethical hacking, web app security, and threat intelligence.
          </p>
          
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start pt-2">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium rounded-md border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-primary text-text-primary border-primary hover:bg-primary/90 hover:scale-[1.03] transform transition-transform"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium rounded-md border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-background text-foreground border-border hover:bg-muted hover:scale-[1.03] transform transition-transform"
            >
              Contact Me
            </Link>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 pt-3 sm:pt-4">
            {/* Tech Stack */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-xs sm:text-sm text-text-secondary">Tools I work with:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {techStack.map((tech, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-1 sm:gap-2 bg-muted px-2 py-1 sm:px-3 sm:py-1 rounded-full border border-border hover:bg-background transition-colors group"
                    title={tech.label}
                  >
                    {tech.icon}
                    <span className="text-xs sm:text-sm text-text-secondary group-hover:text-foreground transition-colors">
                      {tech.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="order-1 md:order-2 flex justify-center relative">
          <div data-aos="zoom-in" className="relative group">
            <div className="absolute -z-10 inset-0 rounded-full bg-gradient-to-tr from-primary/30 via-primary-foreground/20 to-primary/30 blur-2xl group-hover:opacity-80 transition-opacity"></div>
            
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px] rounded-full overflow-hidden shadow-xl border-4 border-muted hover:border-primary/50 transition-all duration-300">
              <Image
                src="/profile-3.png"
                alt="Kareem Abdelmuttalib"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {/* Decorative Elements - Changed to security icons */}
            <div className="absolute top-12 sm:top-16 right-0 rounded-full p-2 sm:p-3 shadow-lg bg-muted border border-primary/20 hover:scale-110 transform transition-transform">
              <BsShieldLock className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            </div>
            <div className="absolute top-1/2 -left-4 sm:-left-6 rounded-full p-2 sm:p-3 shadow-lg bg-muted border border-primary/20 hover:scale-110 transform transition-transform">
              <BsBug className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            </div>
            <div className="absolute -bottom-3 sm:-bottom-4 right-1/4 rounded-full p-2 sm:p-3 shadow-lg bg-muted border border-primary/20 hover:scale-110 transform transition-transform">
              <BsShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
