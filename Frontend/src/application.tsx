
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
          {/* Frontend */}
          <div className="rounded-[18px] border border-[rgba(148,163,184,0.26)] bg-white/70 backdrop-blur p-[16px] shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
            <div className="flex items-start justify-between gap-[12px]">
              <div>
                <div className="text-[#0ea5e9] font-extrabold text-[13px]">Frontend</div>
                <div className="mt-[6px] text-[#0f172a] font-extrabold text-[18px]">
                  Frontend Developer
                </div>
              </div>
              <span className="inline-flex items-center px-[10px] py-[6px] rounded-full bg-[rgba(14,165,233,0.10)] text-[#0ea5e9] font-extrabold text-[12.5px]">
                Remote/Hybrid
              </span>
            </div>

            <div className="mt-[12px]">
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

            <div className="mt-[14px]">
              <button
                type="button"
                className="w p-[12px] rounded-[12px] bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white text-[15px] font-extrabold cursor-pointer transition-[filter,transform] hover:filter brightness(1.05) active:translate-y-[1px]"
                onClick={() => onApply("frontend")}
              >
                Apply
              </button>
            </div>
          </div>

          {/* Backend */}
          <div className="rounded-[18px] border border-[rgba(148,163,184,0.26)] bg-white/70 backdrop-blur p-[16px] shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
            <div className="flex items-start justify-between gap-[12px]">
              <div>
                <div className="text-[#10b981] font-extrabold text-[13px]">Backend</div>
                <div className="mt-[6px] text-[#0f172a] font-extrabold text-[18px]">
                  Backend Developer
                </div>
              </div>
              <span className="inline-flex items-center px-[10px] py-[6px] rounded-full bg-[rgba(16,185,129,0.10)] text-[#10b981] font-extrabold text-[12.5px]">
                Full-time
              </span>
            </div>

            <div className="mt-[12px]">
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

            <div className="mt-[14px]">
              <button
                type="button"
                className="w p-[12px] rounded-[12px] bg-gradient-to-r from-[#16a34a] to-[#15803d] text-white text-[15px] font-extrabold cursor-pointer transition-[filter,transform] hover:filter brightness(1.05) active:translate-y-[1px]"
                onClick={() => onApply("backend")}
              >
                Apply
              </button>
            </div>
          </div>

          {/* Database */}
          <div className="rounded-[18px] border border-[rgba(148,163,184,0.26)] bg-white/70 backdrop-blur p-[16px] shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
            <div className="flex items-start justify-between gap-[12px]">
              <div>
                <div className="text-[#7c3aed] font-extrabold text-[13px]">Database</div>
                <div className="mt-[6px] text-[#0f172a] font-extrabold text-[18px]">
                  Database Engineer
                </div>
              </div>
              <span className="inline-flex items-center px-[10px] py-[6px] rounded-full bg-[rgba(124,58,237,0.10)] text-[#7c3aed] font-extrabold text-[12.5px]">
                Senior
              </span>
            </div>

            <div className="mt-[12px]">
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

            <div className="mt-[14px]">
              <button
                type="button"
                className="w p-[12px] rounded-[12px] bg-gradient-to-r from-[#7c3aed] to-[#6d28d9] text-white text-[15px] font-extrabold cursor-pointer transition-[filter,transform] hover:filter brightness(1.05) active:translate-y-[1px]"
                onClick={() => onApply("database")}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default JobApplication;
export type { JobType };

