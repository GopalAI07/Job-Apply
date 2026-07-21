import "./styles/application.css";
import { type JobType } from "./form";

type JobApplicationProps = {
  onApply: (jobType: JobType) => void;
  onShowLogin?: () => void;
};

function JobApplication({ onApply }: JobApplicationProps) {
  return (
    <>
      <section className="mx-auto w-full max-w-[980px] mb-[28px]">
        <div className="flex flex-col gap-[12px] sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-[10px] py-[7px] rounded-full bg-white/70 backdrop-blur border border-[rgba(148,163,184,0.26)]">
              <span className="h-[8px] w-[8px] rounded-full bg-[#2563eb]" aria-hidden />
              <span className="text-[#2563eb] font-extrabold text-[13px]">Careers</span>
            </div>
            <h2 className="mt-[10px] text-[30px] sm:text-[36px] tracking-[-0.03em] font-extrabold text-[#0f172a]">
              Multiple roles open now
            </h2>
            <p className="mt-[8px] text-[#475569] text-[15px] leading-[1.6] max-w-[720px]">
              Choose the role that matches your skills. Click <b>Apply</b> to submit your
              details with the position-specific requirements.
            </p>
          </div>
        </div>
        <div className="mt-[18px] grid grid-cols-1 md:grid-cols-3 gap-[14px]">
          <div className="rounded-[18px] border border-[rgba(14,165,233,0.30)] bg-gradient-to-br from-blue-50/90 to-white p-[16px] shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-center gap-[10px]">
                  <button
                    type="button"
                    className="flex items-center justify-center w-[34px] h-[34px] rounded-full bg-[rgba(14,165,233,0.10)] text-[#0ea5e9] hover:bg-[rgba(14,165,233,0.20)] transition-colors cursor-pointer border-none"
                    aria-label="Frontend settings"
                    title="Frontend Settings"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                  </button>
                  <div>
                    <div className="text-[#0ea5e9] font-extrabold text-[13px]">Frontend</div>
                    <div className="mt-[6px] text-[#0f172a] font-extrabold text-[18px]">
                      Frontend Developer
                    </div>
                  </div>
                 
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="inline-flex items-center px-[10px] py-[6px] rounded-full bg-[rgba(14,165,233,0.10)] text-[#0ea5e9] font-extrabold text-[12.5px]">
                    Remote/Hybrid
                  </span>
                </div>
              </div>
              <div>
                <div className="text-[#334155] font-extrabold text-[13px]">Requirements</div>
                <ul className="mt-[8px] space-y-[8px]">
                  <li className="flex gap-[8px] text-[#475569] text-[13.5px]">
                    <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-[#0ea5e9]" aria-hidden />
                    React + TypeScript (2+ years)
                  </li>
                  <li className="flex gap-[8px] text-[#475569] text-[13.5px]">
                    <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-[#0ea5e9]" aria-hidden />
                    Tailwind/CSS and responsive UI
                  </li>
                  <li className="flex gap-[8px] text-[#475569] text-[13.5px]">
                    <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-[#0ea5e9]" aria-hidden />
                    Performance & accessibility basics
                  </li>
                </ul>
              </div>
              <div>
                <button
                  type="button"
                  className="apply-btn apply-btn--frontend "
                  onClick={() => onApply("frontend")}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
<div className="rounded-[18px] border border-[rgba(16,185,129,0.35)] bg-gradient-to-br from-emerald-50/90 to-white p-[16px] shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-center gap-[10px]">
                 <button
                    type="button"
                    className="flex items-center justify-center w-[34px] h-[34px] rounded-full bg-[rgba(16,185,129,0.10)] text-[#10b981] hover:bg-[rgba(16,185,129,0.20)] transition-colors cursor-pointer border-none"
                    aria-label="Settings"
                    title="Settings"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </button>
                  <div>
                    <div className="text-[#10b981] font-extrabold text-[13px]">Backend</div>
                    <div className="mt-[6px] text-[#0f172a] font-extrabold text-[18px]">
                      Backend Developer
                    </div>
                  </div>
                  
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="inline-flex items-center px-[10px] py-[6px] rounded-full bg-[rgba(16,185,129,0.10)] text-[#10b981] font-extrabold text-[12.5px]">
                    Full-time
                  </span>
                </div>
              </div>
              <div>
                <div className="text-[#334155] font-extrabold text-[13px]">Requirements</div>
                <ul className="mt-[8px] space-y-[8px]">
                  <li className="flex gap-[8px] text-[#475569] text-[13.5px]">
                    <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-[#10b981]" aria-hidden />
                    Node.js/Express or Python API development
                  </li>
                  <li className="flex gap-[8px] text-[#475569] text-[13.5px]">
                    <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-[#10b981]" aria-hidden />
                    SQL + building reliable REST endpoints
                  </li>
                  <li className="flex gap-[8px] text-[#475569] text-[13.5px]">
                    <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-[#10b981]" aria-hidden />
                    Authentication basics (JWT/OAuth)
                  </li>
                </ul>
              </div>
              <div>
                <button
                  type="button"
                  className="apply-btn apply-btn--backend"
                  onClick={() => onApply("backend")}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
<div className="rounded-[18px] border border-[rgba(124,58,237,0.35)] bg-gradient-to-br from-purple-50/90 to-white p-[16px] shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-center gap-[10px]">
                  <button
                    type="button"
                    className="flex items-center justify-center w-[34px] h-[34px] rounded-full bg-[rgba(124,58,237,0.10)] text-[#7c3aed] hover:bg-[rgba(124,58,237,0.20)] transition-colors cursor-pointer border-none"
                    aria-label="Settings"
                    title="Settings"
                  >
                   <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                    <line x1="12" y1="12" x2="12" y2="19" />
                    <line x1="10" y1="14.5" x2="14" y2="14.5" />
                  </svg>
                  </button>
                  <div>
                    <div className="text-[#7c3aed] font-extrabold text-[13px]">Database</div>
                    <div className="mt-[6px] text-[#0f172a] font-extrabold text-[18px]">
                      Database Engineer
                    </div>
                  </div>
                  
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="inline-flex items-center px-[10px] py-[6px] rounded-full bg-[rgba(124,58,237,0.10)] text-[#7c3aed] font-extrabold text-[12.5px]">
                    Senior
                  </span>
                </div>
              </div>
              <div>
                <div className="text-[#334155] font-extrabold text-[13px]">Requirements</div>
                <ul className="mt-[8px] space-y-[8px]">
                  <li className="flex gap-[8px] text-[#475569] text-[13.5px]">
                    <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-[#7c3aed]" aria-hidden />
                    PostgreSQL/MySQL design & query optimization
                  </li>
                  <li className="flex gap-[8px] text-[#475569] text-[13.5px]">
                    <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-[#7c3aed]" aria-hidden />
                    Indexing, migrations, and backup strategies
                  </li>
                  <li className="flex gap-[8px] text-[#475569] text-[13.5px]">
                    <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-[#7c3aed]" aria-hidden />
                    Data modeling and performance troubleshooting
                  </li>
                </ul>
              </div>
              <div>
                <button
                  type="button"
                  className="apply-btn apply-btn--database"
                  onClick={() => onApply("database")}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  );
}

export default JobApplication;
export type { JobType };
