
"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What types of projects do you support?",
    answer:
      "We support project development across BCA, B.Sc IT, B.Sc CS, B.Tech, B.E. CSE, MCA, M.Sc, M.Tech, M.E. CSE, MCM and MBA IT or Business Analytics. We also work on web applications, database applications, cloud computing and DevOps projects.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Projects start from ₹3,000. The final price depends on your requirements, features, technology, complexity and deployment needs. We discuss the scope and estimate before development begins.",
  },
  {
    question: "How long does project development take?",
    answer:
      "The timeline depends on the size and complexity of your project. Once we understand your requirements, we can discuss an estimated delivery timeline before starting.",
  },
  {
    question: "Which technologies can you work with?",
    answer:
      "Depending on the project, we can work with Python, Java, React, Next.js, Node.js, MySQL, MongoDB, Docker, Git, AWS and Google Cloud Platform.",
  },
  {
    question: "Can you help with deployment?",
    answer:
      "Yes. Depending on the project scope, support can include environment configuration, database integration, testing, troubleshooting and deployment to a suitable hosting or cloud platform.",
  },
  {
    question: "How do I start a project?",
    answer:
      "Submit the project enquiry form on our website with your course, project idea, preferred technology, budget and timeline. We'll review your requirements and discuss the next steps.",
  },
  {
    question: "Can you work with my existing project?",
    answer:
      "Yes. We can discuss existing applications that need debugging, feature improvements, database integration, cloud configuration or deployment support.",
  },
  {
    question: "Will the price change if my requirements change?",
    answer:
      "The initial estimate is based on the agreed scope. If you request additional features or significant changes, we'll discuss any timeline or pricing adjustments with you first.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="border-t border-white/10 bg-slate-950"
    >
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Got questions? We've got answers.
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            Learn more about our project development services,
            pricing, technologies and process.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition ${
                  isOpen
                    ? "border-cyan-400/30 bg-white/[0.04]"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                >
                  <span className="font-semibold text-white">
                    {faq.question}
                  </span>

                  <span
                    className={`shrink-0 text-xl text-cyan-400 transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6">
                    <p className="text-sm leading-7 text-slate-400">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-400">
            Still have questions about your project?
          </p>

          <a
            href="#contact"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Ask Us About Your Project →
          </a>
        </div>
      </div>
    </section>
  );
}