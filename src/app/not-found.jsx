import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-5 py-16">

      <div className="max-w-2xl w-full text-center">

        {/* Illustration */}
        <div className="relative mb-8">
          <div className="absolute inset-0 blur-3xl bg-indigo-500/20 rounded-full"></div>

          <h1 className="relative text-[120px] sm:text-[180px] font-black leading-none tracking-tighter bg-gradient-to-b from-white via-indigo-200 to-indigo-500 bg-clip-text text-transparent">
            404
          </h1>

          <div className="absolute top-2 right-10 sm:right-28 text-4xl animate-bounce">
            ✦
          </div>
          <div className="absolute bottom-4 left-10 sm:left-28 text-3xl text-indigo-400">
            ✧
          </div>
        </div>

        {/* Content */}
        <div className="relative space-y-5">
          <span className="inline-block rounded-full border border-indigo-400/30 bg-indigo-400/10 px-5 py-2 text-sm font-medium text-indigo-300">
            Oops! Page Not Found
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Lost in Space?
          </h2>

          <p className="mx-auto max-w-md text-base sm:text-lg leading-7 text-slate-400">
            The page you're looking for might have been removed,
            renamed, or is temporarily unavailable.
          </p>

          {/* Button */}
          <div className="flex justify-center pt-5">
            <Link
              href="/"
              className="group flex items-center gap-3 rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-500 hover:shadow-indigo-500/40"
            >
              <span>Back to Home</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        <p className="mt-16 text-sm text-slate-600">
          © 2026 · All rights reserved.
        </p>

      </div>
    </main>
  );
}