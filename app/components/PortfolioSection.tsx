
const projects = [
  {
    number: "01",
    category: "Full-Stack Development",
    title: "Student Project Management Portal",
    description:
      "A web application concept for organizing project details, tracking progress and managing submissions through a central dashboard.",
    technologies: ["Next.js", "Node.js", "Database"],
    features: [
      "Responsive dashboard",
      "Project status tracking",
      "Structured data management",
    ],
  },
  {
    number: "02",
    category: "Cloud Computing",
    title: "Cloud-Hosted Web Application",
    description:
      "A sample architecture for deploying a web application to cloud infrastructure with appropriate configuration and monitoring.",
    technologies: ["GCP / AWS", "Linux", "Networking"],
    features: [
      "Cloud deployment design",
      "Access and network configuration",
      "Monitoring approach",
    ],
  },
  {
    number: "03",
    category: "DevOps & Automation",
    title: "Automated CI/CD Pipeline",
    description:
      "A project concept that automates application build, testing and deployment using a repeatable delivery pipeline.",
    technologies: ["Docker", "GitHub Actions", "Linux"],
    features: [
      "Automated build and test",
      "Container image creation",
      "Deployment workflow",
    ],
  },
  {
    number: "04",
    category: "Database Applications",
    title: "Inventory Management System",
    description:
      "A database-backed application concept for maintaining product records, tracking stock and organizing inventory information.",
    technologies: ["Python", "MySQL", "Web Application"],
    features: [
      "Inventory record management",
      "Search and filtering",
      "Stock overview",
    ],
  },
  {
    number: "05",
    category: "Python Development",
    title: "Infrastructure Health Monitor",
    description:
      "A Python project concept for collecting basic system health information and presenting useful operational status.",
    technologies: ["Python", "Linux", "Monitoring"],
    features: [
      "System health checks",
      "Threshold-based alerts",
      "Status reporting",
    ],
  },
  {
    number: "06",
    category: "Web Development",
    title: "Business Website & Admin Dashboard",
    description:
      "A responsive website concept with service information, enquiry collection and an administrative dashboard.",
    technologies: ["Next.js", "TypeScript", "Supabase"],
    features: [
      "Responsive website",
      "Enquiry management",
      "Admin dashboard concept",
    ],
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="border-t border-white/10 bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Project Portfolio
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Ideas built around real-world technology
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            Explore sample project concepts across software
            development, cloud computing, databases and DevOps.
            Final features and technologies can be tailored to
            your requirements.
          </p>

          <p className="mt-4 inline-flex rounded-full border border-amber-400/20 bg-amber-400/5 px-3 py-1.5 text-xs text-amber-300">
            Sample concepts · Not presented as completed client work
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-cyan-400">
                  PROJECT {project.number}
                </span>

                <span
                  className="text-xl text-slate-600 transition group-hover:text-cyan-400"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-slate-500">
                {project.category}
              </p>

              <h3 className="mt-3 text-xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Project highlights
                </p>

                <ul className="mt-3 space-y-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2 text-sm text-slate-300"
                    >
                      <span className="text-cyan-400">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-7">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-slate-900 px-3 py-1.5 text-xs text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                >
                  Discuss a similar project
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-slate-900/60 p-8 text-center sm:p-10">
          <h3 className="text-2xl font-bold">
            Have a different project idea?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
            Share your requirements with us. We can discuss the
            scope, suitable technologies, estimated timeline
            and starting cost.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}