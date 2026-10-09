import PortfolioSection from "./components/PortfolioSection";
import FAQSection from "./components/FAQSection";
import AboutSection from "./components/AboutSection";
import MobileMenu from "./components/MobileMenu";
import ProjectEnquiryForm from "./components/ProjectEnquiryForm";

const projectTypes = [
  {
    category: "Undergraduate (Bachelor's)",
    courses: [
      "BCA — Bachelor of Computer Applications",
      "B.Sc IT — Bachelor of Science in Information Technology",
      "B.Sc CS — Bachelor of Science in Computer Science",
      "B.Tech / B.E. CSE — Computer Science and Engineering",
    ],
  },
  {
    category: "Postgraduate (Master's)",
    courses: [
      "MCA — Master of Computer Applications",
      "M.Sc IT / CS — Master of Science in IT or Computer Science",
      "M.Tech / M.E. CSE — Computer Science",
      "MBA IT / Business Analytics",
      "MCM — Master of Computer Management",
    ],
  },
];

const technologies = [
  "Python",
  "Java",
  "React",
  "Next.js",
  "Node.js",
  "MySQL",
  "MongoDB",
  "Git",
  "GitHub",
  "Docker",
  "AWS",
  "GCP",
];

const services = [
  {
    title: "Project Development",
    description:
      "Turn your project idea into a working software application with a practical development approach.",
  },
  {
    title: "Web Applications",
    description:
      "Frontend and backend web application development using modern technologies.",
  },
  {
    title: "Cloud Deployment",
    description:
      "Deploy your application to AWS or GCP and make your project accessible online.",
  },
  {
    title: "Docker & CI/CD",
    description:
      "Containerize applications and set up basic automated deployment pipelines.",
  },
  {
    title: "Database Integration",
    description:
      "Connect your application with MySQL, MongoDB and other suitable databases.",
  },
  {
    title: "Technical Support",
    description:
      "Get practical help with development, debugging, GitHub, Linux, cloud and deployment issues.",
  },
];

const pricing = [
  {
    title: "Mini / Basic Project",
    price: "₹3,000+",
    description:
      "Suitable for smaller academic and practical software projects.",
  },
  {
    title: "BCA / B.Sc Project",
    price: "₹5,000+",
    description:
      "Project development for BCA, B.Sc IT and B.Sc Computer Science students.",
    featured: true,
  },
  {
    title: "MCM Project",
    price: "₹6,000+",
    description:
      "Software and management-oriented projects for MCM students.",
  },
  {
    title: "B.Tech / B.E. CSE",
    price: "₹7,000+",
    description:
      "Computer Science engineering projects with development and technical requirements.",
  },
  {
    title: "MCA / M.Sc Project",
    price: "₹7,000+",
    description:
      "Advanced software projects for MCA and M.Sc IT / Computer Science students.",
  },
  {
    title: "MBA IT / Business Analytics",
    price: "₹7,500+",
    description:
      "Technology-focused applications and business analytics projects.",
  },
  {
    title: "Cloud Computing",
    price: "₹8,000+",
    description:
      "Projects involving cloud infrastructure, deployment and cloud services.",
  },
  {
    title: "M.Tech / M.E. CSE",
    price: "₹10,000+",
    description:
      "Advanced and technically complex Computer Science projects.",
  },
  {
    title: "Full-Stack Project",
    price: "₹10,000+",
    description:
      "Complete frontend, backend, database and API-based applications.",
  },
  {
    title: "Cloud + DevOps",
    price: "₹12,000+",
    description:
      "Projects involving cloud, Docker, CI/CD and DevOps technologies.",
  },
  {
    title: "Custom / Complex Project",
    price: "₹15,000+",
    description:
      "Larger projects with custom requirements and advanced functionality.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="relative border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="/" className="text-2xl font-bold tracking-tight">
            Dhiraj<span className="text-cyan-400">Cloud</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>

            <a href="#services" className="transition hover:text-white">
              Services
            </a>

            <a href="#pricing" className="transition hover:text-white">
              Pricing
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Start Your Project
            </a>
          </div>

          {/* Mobile Navigation */}
          <MobileMenu />
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.15),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              Student Projects • Software • Cloud
            </div>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Build Your Project.
              <br />
              <span className="text-cyan-400">
                Turn Ideas Into Reality.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Professional project development and technical support for
              BCA, MCA, BSc, MSc, B.Tech, M.Tech and other students.
              From project ideas to working applications and cloud
              deployment.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-cyan-400 px-7 py-3.5 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Start Your Project
              </a>

              <a
                href="#pricing"
                className="rounded-full border border-white/20 px-7 py-3.5 text-center font-semibold text-white transition hover:bg-white/10"
              >
                View Pricing
              </a>
            </div>
          </div>

          <div className="mt-20 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {["BCA", "B.Sc", "B.Tech", "MCA"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center"
              >
                <p className="text-lg font-semibold text-slate-200">
                  {item}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Projects
                </p>
              </div>
            ))}
          </div>
        </div>
      
      </section>

      {/* About DhirajCloud */}
      <AboutSection />
      {/* Portfolio / Project Showcase */}
      <PortfolioSection />
      {/* Academic Projects */}
      <section
        id="projects"
        className="border-t border-white/10 bg-slate-900/50"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Academic Projects
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Projects for your course and requirements
            </h2>

            <p className="mt-5 text-slate-400">
              Get practical project development support across undergraduate
              and postgraduate computer science, IT and management programs.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {projectTypes.map((group) => (
              <div
                key={group.category}
                className="rounded-3xl border border-white/10 bg-slate-950 p-8"
              >
                <h3 className="text-2xl font-bold text-white">
                  {group.category}
                </h3>

                <div className="mt-6 space-y-4">
                  {group.courses.map((course) => (
                    <div
                      key={course}
                      className="flex items-start gap-3 border-b border-white/10 pb-4 last:border-0"
                    >
                      <span className="mt-1 text-cyan-400">
                        ✓
                      </span>

                      <span className="text-sm leading-6 text-slate-300">
                        {course}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technical Project Areas */}
          <div className="mt-10 rounded-3xl border border-white/10 bg-slate-950 p-8">
            <h3 className="text-2xl font-bold">
              Technical Project Areas
            </h3>

            <p className="mt-3 max-w-2xl text-slate-400">
              Projects can be developed around different technologies and
              technical requirements.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Cloud Computing",
                "DevOps",
                "Web Applications",
                "Software Development",
                "Database Applications",
                "Python",
                "Java",
                "Full-Stack Development",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                How it works
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                From idea to working project
              </h2>

              <p className="mt-6 leading-7 text-slate-400">
                We keep the process simple. Share your requirements,
                discuss the project and choose the right technology and
                development approach.
              </p>
            </div>

            <div className="space-y-5">
              {[
                "Discuss your project idea",
                "Understand your requirements",
                "Choose the right technology",
                "Plan the application",
                "Develop the project",
                "Test and troubleshoot",
                "Deploy the project when required",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-sm font-semibold text-cyan-400">
                    {index + 1}
                  </span>

                  <span className="text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Services */}
      <section
        id="services"
        className="border-t border-white/10 bg-slate-900/50"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Technical Services
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              More than just project development
            </h2>

            <p className="mt-5 text-slate-400">
              We also provide technical services for students, developers
              and anyone who needs help building or deploying software.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-slate-950 p-7 transition hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <h3 className="text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <p className="text-sm uppercase tracking-widest text-cyan-400">
              Technologies
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Technologies we work with
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Choose technologies based on your project requirements,
              academic guidelines and application goals.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="border-t border-white/10 bg-slate-900/50"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Simple Pricing
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Projects Starting From ₹3,000
            </h2>

            <p className="mt-5 text-slate-400">
              Transparent starting prices for students. Final pricing
              depends on project scope, features, technology, complexity
              and deployment requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {pricing.map((item) => (
              <div
                key={item.title}
                className={`rounded-3xl border p-6 ${
                  item.featured
                    ? "border-cyan-400/50 bg-cyan-400/5"
                    : "border-white/10 bg-slate-950"
                }`}
              >
                {item.featured && (
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                    Popular
                  </span>
                )}

                <h3 className="mt-4 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-3xl font-bold">
                  {item.price}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>

                <a
                  href="#contact"
                  className="mt-6 block rounded-full border border-white/10 px-4 py-2.5 text-center text-sm font-semibold transition hover:bg-white/10"
                >
                  Enquire
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Project Enquiry */}
      
      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* Contact / Project Enquiry */}
      <section
        id="contact"
        className="border-t border-white/10 bg-slate-900/50"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="lg:sticky lg:top-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                Start Your Project
              </p>

              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                Tell us about your project
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                Have a project idea but not sure where to start?
                Share your requirements and we&apos;ll help you
                understand the right technology, approach and
                estimated scope.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Discuss your project requirements",
                  "Choose the right technology",
                  "Get a project scope and estimate",
                  "Build and deploy your application",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400/10 text-sm text-cyan-400">
                      ✓
                    </span>

                    <span className="text-sm text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
            
              </div>

              {/* Direct Contact Options */}
              <div className="mt-8 space-y-4">
                <a
                  href="https://wa.me/918411998953?text=Hi%20DhirajCloud%2C%20I%20want%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-green-400/20 bg-green-400/5 p-5 transition hover:bg-green-400/10"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-400/10 text-xl text-green-400">
<span aria-hidden="true">💬</span>                  </span>

                  <span>
                    <span className="block font-semibold text-white">
                      Chat on WhatsApp
                    </span>
                    <span className="mt-1 block text-sm text-slate-400">
                      +91 84119 98953
                    </span>
                  </span>
                  <span className="ml-auto text-green-400">↗</span>
                </a>

                <a
                  href="mailto:dheerudwivedi172@gmail.com"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/30 hover:bg-white/[0.05]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                    <span aria-hidden="true">✉</span>
                  </span>

                  <span className="min-w-0">
                    <span className="block font-semibold text-white">
                      Email Us
                    </span>
                    <span className="mt-1 block break-all text-sm text-slate-400">
                      dheerudwivedi172@gmail.com
                    </span>
                  </span>
                  <span className="ml-auto text-cyan-400">↗</span>
                </a>
              </div>
            </div>

            <ProjectEnquiryForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © 2026 DhirajCloud. All rights reserved.
          </p>

          <p>
            Student Projects • Software • Cloud • DevOps
          </p>
        </div>
      </footer>
    </main>
  );
}
