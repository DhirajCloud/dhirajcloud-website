
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

const ADMIN_UID = "59cde252-0fbe-4345-9d05-5b697c8461ff";

const STATUSES = ["new", "contacted", "in_progress", "completed"];

type Enquiry = {
  id: number;
  name: string;
  email: string;
  phone: string;
  course: string;
  project_type: string;
  technology: string | null;
  budget: string;
  timeline: string;
  requirements: string;
  status: string;
  created_at: string;
};

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    throw new Error("Supabase configuration is missing.");
  }

  return createClient(url, key);
}

export default function AdminDashboard() {
  const router = useRouter();
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<Enquiry | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadDashboard() {
      try {
        const supabase = getSupabase();
        const { data: { user }, error: authError } =
          await supabase.auth.getUser();

        if (authError || !user) {
          router.replace("/admin/login");
          return;
        }

        if (user.id !== ADMIN_UID) {
          await supabase.auth.signOut();
          router.replace("/admin/login");
          return;
        }

        const { data, error } = await supabase
          .from("project_enquiries")
          .select(
            "id, name, email, phone, course, project_type, technology, budget, timeline, requirements, status, created_at"
          )
          .order("created_at", { ascending: false });

        if (error) throw error;

        if (!cancelled) {
          setEnquiries((data ?? []) as Enquiry[]);
        }
      } catch (error) {
        if (!cancelled) {
          setErrorMessage(
            error instanceof Error
              ? error.message
              : "Could not load enquiries."
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void loadDashboard();

    return () => {
      cancelled = true;
    };
  }, [router]);

  async function updateStatus(id: number, status: string) {
    setErrorMessage("");

    try {
      const supabase = getSupabase();
      const { error } = await supabase
        .from("project_enquiries")
        .update({ status })
        .eq("id", id);

      if (error) throw error;

      setEnquiries((current) =>
        current.map((item) =>
          item.id === id ? { ...item, status } : item
        )
      );

      setSelected((current) =>
        current?.id === id ? { ...current, status } : current
      );
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Could not update enquiry status."
      );
    }
  }

  async function handleLogout() {
    try {
      const supabase = getSupabase();
      await supabase.auth.signOut();
      router.replace("/admin/login");
    } catch {
      setErrorMessage("Logout failed. Please try again.");
    }
  }

  const filteredEnquiries = enquiries.filter((item) => {
    const term = search.toLowerCase();

    const matchesSearch = [
      item.name,
      item.email,
      item.course,
      item.project_type,
    ].some((value) => value.toLowerCase().includes(term));

    const matchesStatus =
      filter === "all" || item.status === filter;

    return matchesSearch && matchesStatus;
  });

  const newCount = enquiries.filter(
    (item) => item.status === "new"
  ).length;

  const activeCount = enquiries.filter(
    (item) => item.status === "contacted" ||
      item.status === "in_progress"
  ).length;

  const completedCount = enquiries.filter(
    (item) => item.status === "completed"
  ).length;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-900/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
          <div>
            <a href="/" className="text-xl font-bold">
              Dhiraj<span className="text-cyan-400">Cloud</span>
            </a>
            <p className="mt-1 text-xs text-slate-400">
              Administration Dashboard
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-full border border-white/10 px-4 py-2 text-sm transition hover:bg-white/10"
          >
            Sign Out
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Overview
          </p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Project Enquiries
          </h1>
          <p className="mt-3 text-slate-400">
            Review student enquiries and track their progress.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Total Enquiries", value: enquiries.length },
            { label: "New Enquiries", value: newCount },
            { label: "Active Enquiries", value: activeCount },
            { label: "Completed", value: completedCount },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-slate-900 p-5"
            >
              <p className="text-sm text-slate-400">{stat.label}</p>
              <p className="mt-3 text-3xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {errorMessage && (
          <div
            role="alert"
            className="mt-6 rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-300"
          >
            {errorMessage}
          </div>
        )}

        <section className="mt-8 rounded-2xl border border-white/10 bg-slate-900 p-5 sm:p-6">
          <div className="flex flex-col gap-4 md:flex-row">
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search name, email, course or project..."
              className="min-w-0 flex-1 rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm outline-none focus:border-cyan-400"
            />

            <select
              value={filter}
              onChange={(event) => setFilter(event.target.value)}
              className="rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm outline-none focus:border-cyan-400"
            >
              <option value="all">All statuses</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {loading ? (
            <p className="py-12 text-center text-slate-400">
              Loading enquiries...
            </p>
          ) : filteredEnquiries.length === 0 ? (
            <p className="py-12 text-center text-slate-400">
              No enquiries found.
            </p>
          ) : (
            <div className="mt-6 space-y-3">
              {filteredEnquiries.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 rounded-xl border border-white/10 p-4 lg:flex-row lg:items-center lg:justify-between"
                >
                  <button
                    type="button"
                    onClick={() => setSelected(item)}
                    className="min-w-0 flex-1 text-left"
                  >
                    <p className="font-semibold">{item.name}</p>
                    <p className="mt-1 break-all text-sm text-slate-400">
                      {item.email}
                    </p>
                    <p className="mt-2 text-sm text-slate-300">
                      {item.course} · {item.project_type}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {new Date(item.created_at).toLocaleString()}
                    </p>
                  </button>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm text-slate-300">
                      {item.budget}
                    </span>

                    <select
                      aria-label={`Status for ${item.name}`}
                      value={item.status}
                      onChange={(event) =>
                        void updateStatus(item.id, event.target.value)
                      }
                      className="rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-cyan-400"
                    >
                      {STATUSES.map((status) => (
                        <option key={status} value={status}>
                          {status === "in_progress"
                            ? "In Progress"
                            : status.charAt(0).toUpperCase() +
                              status.slice(1)}
                        </option>
                      ))}
                    </select>

                    <button
                      type="button"
                      onClick={() => setSelected(item)}
                      className="rounded-lg bg-cyan-400/10 px-3 py-2 text-sm font-medium text-cyan-300 hover:bg-cyan-400/20"
                    >
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-title"
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-slate-900 p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id="enquiry-title" className="text-2xl font-bold">
                  Enquiry Details
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Submitted by {selected.name}
                </p>
              </div>

              <button
                onClick={() => setSelected(null)}
                aria-label="Close details"
                className="rounded-lg px-3 py-2 hover:bg-white/10"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {[
                ["Email", selected.email],
                ["Phone", selected.phone],
                ["Course", selected.course],
                ["Project Type", selected.project_type],
                ["Technology", selected.technology || "Not specified"],
                ["Budget", selected.budget],
                ["Timeline", selected.timeline],
                ["Status", selected.status],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    {label}
                  </p>
                  <p className="mt-1 break-words text-sm text-slate-200">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Project Requirements
              </p>
              <p className="mt-2 whitespace-pre-wrap break-words text-sm leading-7 text-slate-300">
                {selected.requirements}
              </p>
            </div>

            <button
              onClick={() => setSelected(null)}
              className="mt-8 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
            >
              Close Details
            </button>
          </section>
        </div>
      )}
    </main>
  );
}