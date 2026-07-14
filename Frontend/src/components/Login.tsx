import React, { useEffect, useMemo, useRef, useState } from "react";

type LoginProps = {
  onLoginSuccess?: (username: string) => void;
};

function Login({ onLoginSuccess }: LoginProps) {
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validation = useMemo(() => {
    const errors: { username?: string; password?: string } = {};
    if (!username.trim()) errors.username = "Username is required.";
    if (!password.trim()) errors.password = "Password is required.";
    return errors;
  }, [username, password]);

  const isValid = Object.keys(validation).length === 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isMountedRef.current) return;
    setError(null);

    if (!isValid) return;

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("username", username.trim());
      formData.append("password", password.trim());

      const API_BASE = import.meta.env.VITE_API_BASE_URL || "";
      const res = await fetch(`${API_BASE}/login`, {
        method: "POST",
        body: formData,
      });


      console.log("login status", res.status);

      let data: any = null;
      try {
        // Prefer JSON responses (FastAPI default)
        data = await res.json();
      } catch {
        // Fallback to text if backend returns non-JSON
        const raw = await res.text();
        data = raw ? { message: raw } : null;
      }

      console.log(data?.message ?? data ?? null);

      if (!res.ok) {
        setError(data?.detail ?? data?.message ?? "Login failed");
        return;
      }

      onLoginSuccess?.(username.trim());
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-fit flex justify-center items-start px-[22px] py-[28px] overflow-hidden" >
     
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(56,189,248,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,189,248,0.10) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse at 30% 10%, black 25%, transparent 70%)",
          opacity: 0.9,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.35) 0%, transparent 60%)",
          filter: "blur(8px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.28) 0%, transparent 60%)",
          filter: "blur(10px)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-2xl"
      />

      <div className="w-full max-w-[560px] z-10 bg-white/92 rounded-[18px] shadow-[0_14px_40px_rgba(15,23,42,0.10)] border border-[rgba(148,163,184,0.22)] backdrop-blur p-[24px]">
        <div className="text-center">
          <div className="mx-auto w-[58px] h-[58px] rounded-[18px] bg-gradient-to-br from-[#2563eb]/15 to-[#10b981]/15 flex items-center justify-center mb-[14px]">
            <span className="text-[22px] font-extrabold text-slate-900">🔒</span>
          </div>

          <h2 className="text-[28px] font-extrabold text-slate-900">Welcome back</h2>
          <p className="mt-[8px] text-[14.5px] text-slate-500">
            Sign in to continue. Your session will be started after successful login.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-[20px]">
          <div className="mb-[14px]">
            <label htmlFor="username" className="block mb-[7px] font-[700] text-slate-900 text-[14px]">
              Username
            </label>
            <input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className="w-full p-[12px] rounded-[12px] border border-[rgba(148,163,184,0.55)] bg-white outline-none focus:border-[rgba(37,99,235,0.75)] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.16)]"
            />
            {validation.username && (
              <div className="mt-[8px] text-red-600 text-[12.5px] font-semibold">{validation.username}</div>
            )}
          </div>

          <div className="mb-[14px]">
            <label htmlFor="password" className="block mb-[7px] font-[700] text-slate-900 text-[14px]">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full p-[12px] rounded-[12px] border border-[rgba(148,163,184,0.55)] bg-white outline-none focus:border-[rgba(37,99,235,0.75)] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.16)]"
            />
            {validation.password && (
              <div className="mt-[8px] text-red-600 text-[12.5px] font-semibold">{validation.password}</div>
            )}
          </div>

          {error && (
            <div className="mb-[14px] text-red-700 bg-red-500/10 border border-red-500/30 px-[12px] py-[10px] rounded-[12px] text-[13px] font-semibold">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full p-[13px] rounded-[12px] bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white text-[15.5px] font-extrabold cursor-pointer transition-[filter,transform] hover:filter brightness(1.05) active:translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-70 border-none"
          >
            {isSubmitting ? "Signing in..." : "Login"}
          </button>

          <div className="mt-[12px] text-slate-500 text-[12.5px]">
            By continuing, you agree to our Terms and Privacy Policy.
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

