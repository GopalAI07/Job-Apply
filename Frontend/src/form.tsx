import React, { useMemo, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";



interface FormData {
  fullName: string;
  email: string;
  phone: string;
  coverLetter: string;
  resumeGoogleDriveLink: string;
}


export type JobType = "frontend" | "backend" | "database";

type FormApplicationProps = {
  jobType?: JobType;
};

const FormApplication: React.FC<FormApplicationProps> = ({ jobType }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    resumeGoogleDriveLink: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const validation = useMemo(() => {
    const errors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.fullName.trim()) errors.fullName = "Full name is required.";
    if (!formData.email.trim()) errors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Enter a valid email address.";
    }

    if (!formData.phone.trim()) errors.phone = "Phone number is required.";

    const resumeLinkError = verifyGoogleDriveResumeLink(formData.resumeGoogleDriveLink);
    if (resumeLinkError) errors.resumeGoogleDriveLink = resumeLinkError;

    if (formData.coverLetter.trim().length < 10) {
      errors.coverLetter = "Cover letter should be at least 10 characters.";
    }

    return errors;
  }, [formData]);


  const isValid = Object.keys(validation).length === 0;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);
    setSubmitError(null);

    if (!isValid || !jobType) return;

    setIsSubmitting(true);

    try {

      const API_BASE_URL = "http://127.0.0.1:8000";
      const SUBMIT_PATH = `/${jobType}`; // backend: @app.post("/backend"|"/database"|"/frontend")

      const payload = new FormData();
      payload.append("jobType", jobType);
      payload.append("full_name", formData.fullName);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("cover_letter", formData.coverLetter);
      payload.append("resume_google_drive_link", formData.resumeGoogleDriveLink);

      const res = await fetch(`${API_BASE_URL}${SUBMIT_PATH}`, {

        method: "POST",
        body: payload,
      });

      // Treat 2xx as success. If backend returns 500/validation error,
      // we surface the response body.
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `Request failed with status ${res.status}`);
      }

      // Force read response (helps surface unexpected HTML/proxy errors)
      // and ensures the fetch promise fully completes.
      try {
        await res.json();
      } catch {
        // ignore if backend doesn't return JSON
      }

      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Failed to submit application");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        className="min-h-fit flex justify-center items-center px-[30px] py-[30px]"
        style={{
          backgroundImage:
            "radial-gradient(700px 260px at 30% 20%, rgba(16, 185, 129, 0.18), transparent 60%)",
          backgroundColor: "#ecfdf5",
        }}
      >
        <div className="w-full max-w-[620px] bg-white/90 rounded-[18px] p-[28px] border border-[rgba(16,185,129,0.22)] shadow-[0_14px_40px_rgba(15,23,42,0.08)] text-center">
          <div className="w-[54px] h-[54px] mx-auto mb-[14px] rounded-[18px] bg-emerald-500/10 text-emerald-700 flex items-center justify-center font-extrabold text-[26px]" aria-hidden>
            ✓
          </div>
          <h2 className="text-[26px] text-emerald-800 mb-[8px]">Application submitted</h2>
          <p className="text-emerald-800/90 leading-[1.6]">
            Thank you for applying. We’ll review your details and get back to you soon.
          </p>
          <div className="mt-[16px] inline-block bg-emerald-500/10 text-emerald-700 px-[12px] py-[8px] rounded-full font-bold text-[13px]">
            Reference: {cryptoRandomId()}
          </div>
        </div>
      </div>
    );
  }

  const showError = (key: keyof FormData) => submitAttempted && validation[key];

  return (
    <>
  
    <div
      className="relative min-h-screen flex justify-center items-center px-[30px] py-[30px] bg-[#f5f7fb] overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(900px 300px at 15% 10%, rgba(37, 99, 235, 0.14), transparent 55%), radial-gradient(700px 250px at 90% 20%, rgba(16, 185, 129, 0.14), transparent 55%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(transparent_60%,rgba(15,23,42,0.03)_100%)]"
      />

      <div
        className="w-full max-w-[820px] page-glow bg-white/92 p-[34px] rounded-[18px] shadow-[0_14px_40px_rgba(15,23,42,0.10),0_1px_0_rgba(2,6,23,0.06)] border border-[rgba(148,163,184,0.22)] backdrop-blur"
        role="region"
        aria-label="Job application form"
      >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(transparent_60%,rgba(15,23,42,0.03)_100%)]"
      />

        <header className="mb-[18px]">
            <div className="inline-flex items-center gap-2 px-[7px] py-[7px] rounded-full bg-blue-600/10 text-blue-700 font-bold text-[13px]">
              Open role
            </div>
            <h1 className="mt-[14px] text-[32px] tracking-[-0.02em] text-slate-900">
              {jobType === "backend"
                ? "Backend Developer"
                : jobType === "database"
                  ? "Database Engineer"
                  : "Frontend Developer"}
            </h1>
            <p className="mt-[8px] text-[15px] text-slate-500">
              A quick application designed for speed and clarity.
            </p>
        </header>

        <div className="bg-white/85 border border-[rgba(148,163,184,0.22)] rounded-[16px] p-[18px]">
          <div className="font-extrabold text-slate-900">Your details</div>
          <div className="h-[1px] bg-[rgba(148,163,184,0.30)] my-[12px] mb-[16px]" />

          <form onSubmit={handleSubmit} className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px]">
              <div className="mb-[16px]">
                <label
                  htmlFor="fullName"
                  className="block mb-[7px] font-[700] text-slate-900 text-[15px]"
                >
                  Full Name <span className="text-red-500 font-extrabold ml-[2px]">*</span>
                </label>
                <input
                  id="fullName"
                  required
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder=""
                  aria-invalid={!!showError("fullName")}
                  className="w-full p-[12px] rounded-[10px] border border-[rgba(148,163,184,0.55)] text-[15px] bg-white outline-none transition-[box-shadow,border-color,transform] focus:border-[rgba(37,99,235,0.75)] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.16)]"
                />
                {showError("fullName") && (
                  <div className="mt-[8px] text-red-600 text-[13px] font-semibold">
                    {validation.fullName}
                  </div>
                )}
              </div>

              <div className="mb-[16px]">
                <label
                  htmlFor="email"
                  className="block mb-[7px] font-[700] text-slate-900 text-[15px]"
                >
                  Email <span className="text-red-500 font-extrabold ml-[2px]">*</span>
                </label>
                <input
                  id="email"
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=""
                  aria-invalid={!!showError("email")}
                  className="w-full p-[12px] rounded-[10px] border border-[rgba(148,163,184,0.55)] text-[15px] bg-white outline-none transition-[box-shadow,border-color,transform] focus:border-[rgba(37,99,235,0.75)] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.16)]"
                />
                {showError("email") && (
                  <div className="mt-[8px] text-red-600 text-[13px] font-semibold">
                    {validation.email}
                  </div>
                )}
              </div>

              <div className="mb-[16px]">
                <label
                  htmlFor="phone"
                  className="block mb-[7px] font-[700] text-slate-900 text-[15px]"
                >
                  Phone <span className="text-red-500 font-extrabold ml-[2px]">*</span>
                </label>
                <input
                  id="phone"
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder=""
                  aria-invalid={!!showError("phone")}
                  className="w-full p-[12px] rounded-[10px] border border-[rgba(148,163,184,0.55)] text-[15px] bg-white outline-none transition-[box-shadow,border-color,transform] focus:border-[rgba(37,99,235,0.75)] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.16)]"
                />
                {showError("phone") && (
                  <div className="mt-[8px] text-red-600 text-[13px] font-semibold">
                    {validation.phone}
                  </div>
                )}
              </div>
            </div>

            <div className="mb-[16px]">
              <label
                htmlFor="resumeGoogleDriveLink"
                className="block mb-[7px] font-[650] text-slate-900 text-[14px]"
              >
                Resume Google Drive Link <span className="text-red-500 font-extrabold ml-[2px]">*</span>
              </label>

              <input
                id="resumeGoogleDriveLink"
                name="resumeGoogleDriveLink"
                required
                value={formData.resumeGoogleDriveLink}
                onChange={handleChange}
                placeholder="Paste a shareable Google Drive link (e.g., https://drive.google.com/file/d/<id>/view)"
                aria-invalid={!!showError("resumeGoogleDriveLink")}
                className="w-full p-[12px] rounded-[10px] border border-[rgba(148,163,184,0.55)] text-[15px] bg-white outline-none transition-[box-shadow,border-color,transform] focus:border-[rgba(37,99,235,0.75)] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.16)]"
              />

              {showError("resumeGoogleDriveLink") && (
                <div className="mt-[8px] text-red-600 text-[13px] font-semibold">
                  {validation.resumeGoogleDriveLink}
                </div>
              )}

              <div className="mt-[8px] text-slate-500 text-[13px]">
                Must be a Google Drive <b>file</b> link (shareable). Example:{" "}
                <span className="font-mono">https://drive.google.com/file/d/[fileId]/view</span>
              </div>
            </div>

            <div className="mb-[16px]">

              <label
                htmlFor="coverLetter"
                className="block mb-[7px] font-[650] text-slate-900 text-[14px]"
              >
                Cover Letter
              </label>
              <textarea
                id="coverLetter"
                rows={6}
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                placeholder="Tell us why you're a great fit..."
                aria-invalid={!!showError("coverLetter")}
                className="w-full p-[12px] rounded-[10px] border border-[rgba(148,163,184,0.55)] text-[15px] bg-white outline-none transition-[box-shadow,border-color,transform] focus:border-[rgba(37,99,235,0.75)] focus:shadow-[0_0_0_4px_rgba(37,99,235,0.16)] resize-y min-h-[120px]"
              />
              {showError("coverLetter") && (
                <div className="mt-[8px] text-red-600 text-[13px] font-semibold">
                  {validation.coverLetter}
                </div>
              )}
              <div className="mt-[8px] text-slate-500 text-[13px]">
                Tip: Keep it concise (about 6–10 lines).
              </div>
            </div>

            {submitError && (
              <div className="mb-[12px] text-red-700 bg-red-500/10 border border-red-500/30 px-[12px] py-[10px] rounded-[12px] text-[13.5px] font-semibold">
                {submitError}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w p-[14px] rounded-[12px] bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white text-[16px] font-extrabold cursor-pointer transition-[transform,filter,opacity] hover:filter brightness(1.03) active:translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-70 border-none"
            >
              {isSubmitting ? "Submitting..." : "Apply Now"}
            </button>

            <div className="mt-[12px] text-slate-500 text-[12.5px]">
              By submitting, you confirm the information provided is accurate.
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

function verifyGoogleDriveResumeLink(link: string): string | null {
  const value = (link || "").trim();
  if (!value) return "Please provide your resume Google Drive link.";
  if (value.length > 1200) return "Resume link looks too long.";

  // Common Drive file patterns:
  // 1) https://drive.google.com/file/d/<id>/view
  // 2) https://drive.google.com/open?id=<id>
  // 3) https://drive.google.com/uc?id=<id>&export=download
  const patterns: RegExp[] = [
    /drive\.google\.com\/file\/d\/([^/\s?#]+)/i,
    /drive\.google\.com\/open\?id=([^&\s]+)/i,
    /drive\.google\.com\/uc\?id=([^&\s]+)/i,
  ];

  const matchedId = (() => {
    for (const p of patterns) {
      const m = value.match(p);
      if (m?.[1]) return m[1];
    }
    return null;
  })();

  if (!value.includes("drive.google.com")) return "Link must be a Google Drive URL.";
  if (!matchedId) {
    return "Invalid Google Drive file link. Use a link like /file/d/<id>/view.";
  }

  // Drive file IDs are typically base64url-like (can include _- and letters/numbers).
  // Length is usually ~20-30 chars, but accept a reasonable range.
  if (!/^[A-Za-z0-9_-]{10,80}$/.test(matchedId)) {
    return "Resume link file id does not look valid.";
  }

  return null;
}

function cryptoRandomId() {
  try {
    const v = (globalThis.crypto?.randomUUID?.() as string | undefined) || undefined;
    if (v) return v.slice(0, 8).toUpperCase();
  } catch {
  }
  return Math.random().toString(16).slice(2, 10).toUpperCase();
}

export default FormApplication;






