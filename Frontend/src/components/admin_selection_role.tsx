
import { type AdminSection } from "./admin_candiate_data";

type AdminAction = AdminSection;

type Props = {
  active: AdminAction | null;
  onChange: (next: AdminAction) => void;
};

function Admin_selection_role({ active, onChange }: Props) {
  const buttonBase =
    "w-full sm:w-auto flex-1 flex items-center justify-center gap-[10px] rounded-[14px] px-[18px] py-[12px] border transition-[transform,filter,box-shadow,background-color] hover:translate-y-[-1px] hover:filter brightness(1.03)";

  return (
    <>
      <div className="mt-[10px] mb-[18px]">
        <h1 className="text-[34px] sm:text-[44px] font-extrabold leading-[1.05] tracking-[-0.03em] bg-gradient-to-r from-[#2563eb] via-[#10b981] to-[#7c3aed] bg-clip-text text-transparent">
          Admin
        </h1>
        <p className="mt-[10px] text-[#475569] text-[15px] sm:text-[16px] leading-[1.6] max-w-[720px]">
          Choose a section below to manage files.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-[12px] mb-[18px]">
        <button
          type="button"
          onClick={() => onChange("frontend")}
          className={`${buttonBase} bg-white/80 border-[rgba(148,163,184,0.35)] ${
            active === "frontend"
              ? "bg-[rgba(37,99,235,0.08)] border-[#2563eb] shadow-[0_10px_30px_rgba(37,99,235,0.12)]"
              : "hover:shadow-[0_14px_40px_rgba(15,23,42,0.10)]"
          }`}
        >
          <span className="text-[18px]">🖥️</span>
          <span className="font-extrabold text-[#2563eb] tracking-[0.01em]">
            Frontend
          </span>
        </button>

        <button
          type="button"
          onClick={() => onChange("backend")}
          className={`${buttonBase} bg-white/80 border-[rgba(148,163,184,0.35)] ${
            active === "backend"
              ? "bg-[rgba(16,185,129,0.08)] border-[#10b981] shadow-[0_10px_30px_rgba(16,185,129,0.12)]"
              : "hover:shadow-[0_14px_40px_rgba(15,23,42,0.10)]"
          }`}
        >
          <span className="text-[18px]">⚙️</span>
          <span className="font-extrabold text-[#10b981] tracking-[0.01em]">
            Backend
          </span>
        </button>

        <button
          type="button"
          onClick={() => onChange("database")}
          className={`${buttonBase} bg-white/80 border-[rgba(148,163,184,0.35)] ${
            active === "database"
              ? "bg-[rgba(124,58,237,0.08)] border-[#7c3aed] shadow-[0_10px_30px_rgba(124,58,237,0.12)]"
              : "hover:shadow-[0_14px_40px_rgba(15,23,42,0.10)]"
          }`}
        >
          <span className="text-[18px]">🗄️</span>
          <span className="font-extrabold text-[#7c3aed] tracking-[0.01em]">
            Database
          </span>
        </button>
      </div>
    </>
  );
}

export default Admin_selection_role;

