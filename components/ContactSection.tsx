/* eslint-disable react/no-unescaped-entities */
"use client";

import { FaGithub, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhone, FaPaperPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function ContactSection() {
  // Contact info data
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      title: "Location",
      value: "North Sinai, Egypt"
    },
    {
      icon: <MdEmail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      title: "Email",
      value: "kareem.abdelmuttalib.eg@gmail.com"
    },
    {
      icon: <FaPhone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      title: "Phone",
      value: "+20 1080096438"
    }
  ];

  // Social links data
  const socialLinks = [
    {
      href: "https://github.com/kareem-abdelmuttalib",
      icon: <FaGithub className="h-4 w-4 sm:h-5 sm:w-5" />,
      label: "GitHub"
    },
    {
      href: "https://www.instagram.com/kareem.abdel_muttalib/",
      icon: <FaInstagram className="h-4 w-4 sm:h-5 sm:w-5" />,
      label: "Instagram"
    },
    {
      href: "https://www.linkedin.com/in/kareem-abdelmuttalib/",
      icon: <FaLinkedin className="h-4 w-4 sm:h-5 sm:w-5" />,
      label: "LinkedIn"
    },
    {
      href: "mailto:kareem.abdelmuttalib.eg@gmail.com",
      icon: <MdEmail className="h-4 w-4 sm:h-5 sm:w-5" />,
      label: "Email"
    }
  ];

  // Form fields data
  const formFields = [
    {
      type: "text",
      name: "name",
      placeholder: "Your name",
      gridClass: "col-span-2 md:col-span-1"
    },
    {
      type: "email",
      name: "email",
      placeholder: "Your email",
      gridClass: "col-span-2 md:col-span-1"
    },
    {
      type: "text",
      name: "subject",
      placeholder: "Subject of your message",
      gridClass: "col-span-2"
    },
    {
      type: "textarea",
      name: "message",
      placeholder: "Write your message here...",
      gridClass: "col-span-2"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-text-primary">Get In Touch</h2>
          <div className="h-1 w-16 sm:w-20 bg-primary mx-auto"></div>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
            Have a security assessment need, collaboration idea, or a potential opportunity? Reach out via the form below or contact me directly. I’m available for penetration testing engagements, security consultations, and research collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-text-primary">Contact Information</h3>
            <p className="text-sm sm:text-base text-text-secondary">
              For urgent inquiries or vulnerability disclosures, use the encrypted channels listed below.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-primary/10 p-2 sm:p-3 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-medium text-text-primary">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-text-secondary">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 sm:pt-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-text-primary">Follow Me</h3>
              <div className="flex justify-center md:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    aria-label={social.label}
                    className="inline-flex items-center text-text-primary justify-center p-1.5 sm:p-2 text-xs sm:text-sm font-medium transition-colors rounded-full border border-border bg-background hover:bg-muted"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-card p-5 sm:p-6 md:p-8 rounded-lg shadow-sm sm:shadow-md border border-border">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-text-primary">Send Me a Message</h3>

              <form className="space-y-4 sm:space-y-6">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-4 sm:gap-6">
                  {formFields.map((field, index) => (
                    <div key={index} className={field.gridClass}>
                      <label className="block text-xs sm:text-sm text-text-primary mb-1 sm:mb-2 capitalize">{field.name}</label>
                      {field.type === "textarea" ? (
                        <textarea
                          placeholder={field.placeholder}
                          className="w-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-text-primary min-h-[100px] sm:min-h-[150px]"
                        ></textarea>
                      ) : (
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          className="w-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-text-primary"
                        />
                      )}
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="w-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm bg-primary text-text-primary rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center"
                >
                  <FaPaperPlane className="mr-2 h-3 w-3 sm:h-4 sm:w-4" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
