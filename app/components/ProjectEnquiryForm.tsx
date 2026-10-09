
"use client";

import { useState, type FormEvent } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export default function ProjectEnquiryForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    if (!supabaseUrl || !supabaseKey) {
      setErrorMessage(
        "Supabase configuration is missing. Please check your .env.local file."
      );
      return;
    }

    setLoading(true);

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);

      const supabase = createClient(supabaseUrl, supabaseKey);

      const enquiry = {
        name: String(formData.get("name") ?? "").trim(),
        email: String(formData.get("email") ?? "").trim(),
        phone: String(formData.get("phone") ?? "").trim(),
        course: String(formData.get("course") ?? ""),
        project_type: String(formData.get("projectType") ?? ""),
        technology:
          String(formData.get("technology") ?? "") || null,
        budget: String(formData.get("budget") ?? ""),
        timeline: String(formData.get("timeline") ?? ""),
        requirements: String(formData.get("requirements") ?? "").trim(),
      };

      const { error } = await supabase
        .from("project_enquiries")
        .insert(enquiry);

      if (error) {
        throw error;
      }

      form.reset();
      setSubmitted(true);
    } catch (error) {
      console.error("Enquiry submission failed:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "We couldn't submit your enquiry. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400/10 text-2xl text-cyan-400">
          ✓
        </div>

        <h3 className="mt-6 text-2xl font-bold">
          Enquiry Received!
        </h3>

        <p className="mx-auto mt-3 max-w-md leading-7 text-slate-400">
          Thank you for sharing your project requirements.
          Your enquiry has been saved successfully.
        </p>

        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-slate-950 p-6 sm:p-8"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Enter your name"
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-400/50"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-400/50"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-300">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+91 XXXXX XXXXX"
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-400/50"
          />
        </div>

        <div>
          <label htmlFor="course" className="mb-2 block text-sm font-medium text-slate-300">
            Course
          </label>
          <select
            id="course"
            name="course"
            required
            defaultValue=""
            className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/50"
          >
            <option value="" disabled>Select your course</option>
            <option value="BCA">BCA</option>
            <option value="B.Sc IT">B.Sc IT</option>
            <option value="B.Sc CS">B.Sc CS</option>
            <option value="B.Tech / B.E. CSE">B.Tech / B.E. CSE</option>
            <option value="MCA">MCA</option>
            <option value="M.Sc IT / CS">M.Sc IT / CS</option>
            <option value="M.Tech / M.E. CSE">M.Tech / M.E. CSE</option>
            <option value="MBA IT / Business Analytics">MBA IT / Business Analytics</option>
            <option value="MCM">MCM</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-slate-300">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            defaultValue=""
            className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/50"
          >
            <option value="" disabled>Select project type</option>
            <option value="Web Application">Web Application</option>
            <option value="Software Development">Software Development</option>
            <option value="Cloud Computing">Cloud Computing</option>
            <option value="DevOps">DevOps</option>
            <option value="Database Application">Database Application</option>
            <option value="Full-Stack">Full-Stack Application</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="technology" className="mb-2 block text-sm font-medium text-slate-300">
            Preferred Technology
          </label>
          <select
            id="technology"
            name="technology"
            defaultValue=""
            className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/50"
          >
            <option value="">Not sure / Need recommendation</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="React">React</option>
            <option value="Next.js">Next.js</option>
            <option value="Node.js">Node.js</option>
            <option value="MySQL">MySQL</option>
            <option value="MongoDB">MongoDB</option>
            <option value="AWS">AWS</option>
            <option value="GCP">GCP</option>
            <option value="Docker / DevOps">Docker / DevOps</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="mb-2 block text-sm font-medium text-slate-300">
            Approximate Budget
          </label>
          <select
            id="budget"
            name="budget"
            required
            defaultValue=""
            className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/50"
          >
            <option value="" disabled>Select budget</option>
            <option value="₹3,000 - ₹5,000">₹3,000 - ₹5,000</option>
            <option value="₹5,000 - ₹8,000">₹5,000 - ₹8,000</option>
            <option value="₹8,000 - ₹12,000">₹8,000 - ₹12,000</option>
            <option value="₹12,000 - ₹15,000">₹12,000 - ₹15,000</option>
            <option value="₹15,000+">₹15,000+</option>
            <option value="Need a quote">Need a quote</option>
          </select>
        </div>

        <div>
          <label htmlFor="timeline" className="mb-2 block text-sm font-medium text-slate-300">
            Required Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            required
            defaultValue=""
            className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/50"
          >
            <option value="" disabled>Select timeline</option>
            <option value="Within 1 week">Within 1 week</option>
            <option value="1 - 2 weeks">1 - 2 weeks</option>
            <option value="2 - 4 weeks">2 - 4 weeks</option>
            <option value="1 - 2 months">1 - 2 months</option>
            <option value="Flexible">Flexible</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="requirements" className="mb-2 block text-sm font-medium text-slate-300">
            Project Requirements
          </label>
          <textarea
            id="requirements"
            name="requirements"
            required
            rows={6}
            placeholder="Describe your project idea, features, preferred technologies and deployment needs..."
            className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-400/50"
          />
        </div>
      </div>

      {errorMessage && (
        <div role="alert" className="mt-6 rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-300">
          Submission failed: {errorMessage}
        </div>
      )}

      <div className="mt-8">
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Submitting Enquiry..." : "Submit Project Enquiry"}
        </button>

        <p className="mt-4 text-center text-xs text-slate-500">
          Your requirements will be reviewed before final pricing is confirmed.
        </p>
      </div>
    </form>
  );
}