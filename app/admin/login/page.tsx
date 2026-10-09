
"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

    if (!url || !key) {
      setErrorMessage("Supabase configuration is missing.");
      setLoading(false);
      return;
    }

    try {
      const supabase = createClient(url, key);

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      router.push("/admin");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to sign in. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-16 text-white">
      <div className="w-full max-w-md">
        <a href="/" className="text-sm font-semibold text-cyan-400">
          ← Back to DhirajCloud
        </a>

        <div className="mt-8 rounded-3xl border border-white/10 bg-slate-900 p-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            DhirajCloud
          </p>

          <h1 className="mt-4 text-3xl font-bold">Admin Login</h1>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            Sign in to manage project enquiries.
          </p>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-slate-300">
                Admin email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                autoComplete="username"
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm text-slate-300">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                autoComplete="current-password"
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-400"
                placeholder="Enter your password"
              />
            </div>

            {errorMessage && (
              <p role="alert" className="rounded-xl bg-red-400/10 p-3 text-sm text-red-300">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="mt-6 text-xs leading-5 text-slate-500">
            Authorized administrators only.
          </p>
        </div>
      </div>
    </main>
  );
}