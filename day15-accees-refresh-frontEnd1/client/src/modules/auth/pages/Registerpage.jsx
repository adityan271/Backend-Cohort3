import { useState } from "react";
import { useNavigate } from "react-router";
import useApi from "../../../shared/api";

const Registerpage = () => {
  const navigate = useNavigate();
  const api = useApi();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const responce = await api.post("/auth/register", form);

      console.log(responce.data);
    } catch (error) {
      setError(error?.message || "Registration failed");
    }

    navigate("/profile");
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-emerald-950 px-4 py-12 sm:px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-lime-400/10 blur-3xl"
      />

      <section className="relative w-full max-w-md rounded-3xl border border-white/60 bg-white p-7 shadow-2xl shadow-emerald-950/30 sm:p-10">
        <div className="mb-8">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-2xl text-emerald-700">
            <span aria-hidden="true">✳</span>
          </div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Get started
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Create your account
          </h1>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Join us today. It only takes a minute.
          </p>
        </div>

        {error && (
          <p
            role="alert"
            className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Full name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Jane Smith"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/15"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/15"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              autoComplete="new-password"
              placeholder="At least 8 characters"
              value={form.password}
              onChange={handleChange}
              minLength={8}
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/15"
            />
          </div>

          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-3.5 font-semibold text-white shadow-lg shadow-emerald-700/20 transition hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
          >
            Create account
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </button>
        </form>

        <p className="mt-7 text-center text-xs leading-5 text-slate-500">
          By creating an account, you agree to our{" "}
          <span className="font-medium text-emerald-700">Terms of Service</span>{" "}
          and{" "}
          <span className="font-medium text-emerald-700">Privacy Policy</span>.
        </p>
      </section>
    </main>
  );
};

export default Registerpage;
