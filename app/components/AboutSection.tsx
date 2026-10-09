
export default function AboutSection() {
  const highlights = [
    {
      number: "01",
      title: "Student-Focused Solutions",
      description:
        "Practical project development and technical guidance tailored to undergraduate and postgraduate requirements.",
    },
    {
      number: "02",
      title: "Modern Technologies",
      description:
        "Build applications using Python, Java, full-stack technologies, databases, cloud platforms and DevOps tools.",
    },
    {
      number: "03",
      title: "Clear Project Scope",
      description:
        "Understand the requirements, technologies, estimated timeline and pricing before development begins.",
    },
    {
      number: "04",
      title: "Development to Deployment",
      description:
        "Get support across application development, configuration, testing and deployment based on your project scope.",
    },
  ];

  return (
    <section
      id="about"
      className="border-t border-white/10 bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              About DhirajCloud
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Turning project ideas into practical solutions.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              DhirajCloud provides project development and
              technical support for students, aspiring
              developers and businesses looking to build
              practical software solutions.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              From academic projects in BCA, MCA, B.Tech and
              other IT-related courses to web applications,
              cloud computing and DevOps, our approach starts
              with understanding your requirements and choosing
              the right technical solution.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              We focus on transparent starting prices, clearly
              defined project scope and practical development
              support, helping you move from an initial idea
              towards a working application.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Discuss Your Project
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                <span className="text-sm font-semibold text-cyan-400">
                  {item.number}
                </span>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}