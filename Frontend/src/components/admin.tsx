import React from "react";
import AdminCandidateData, { type AdminSection } from "./admin_candiate_data";
import Admin_selection_role from "./admin_selection_role";
import "../styles/admin.css";

type AdminAction = AdminSection;

function AdminPage() {
  const [active, setActive] = React.useState<AdminAction | null>(null);

  const panelBase =
    "rounded-[18px] border border-[rgba(148,163,184,0.22)] bg-white/70 backdrop-blur p-[18px] admin-panel";

  return (
    <div className="min-h-fit w-full admin-page">
      <div className="max-w-[980px] mx-auto admin-container">
        {active === null ? (
          <div className="admin-home">
            <div className="admin-header">
              <div>
                <h1 className="admin-title">Admin Dashboard</h1>
                <p className="admin-subtitle">
                  Manage your application from one place.
                </p>
              </div>
            </div>

            <div className="admin-selection">
              <Admin_selection_role
                active={active}
                onChange={setActive}
              />
            </div>

            <p className="text-[#64748b] text-[14.5px] admin-note">
              Click any button to manage the corresponding section.
            </p>
          </div>
        ) : (
          <div className={panelBase}>
            <div className="flex items-center justify-between gap-4 flex-wrap admin-topbar">
              <div>
                <div className="text-[12.5px] font-extrabold tracking-[0.08em] text-[#1d4ed8]">
                  ACTIVE SECTION
                </div>

                <div className="mt-[10px] text-[22px] font-extrabold capitalize text-slate-900 admin-section-name">
                  {active}
                </div>
              </div>

              <button
                type="button"
                className="auth-admin-back-btn px-[14px] py-[10px] rounded-[12px] border border-[rgba(148,163,184,0.35)] bg-white/70 hover:bg-white transition-colors cursor-pointer font-extrabold text-[#0f172a]"
                onClick={() => setActive(null)}
              >
                ← Back
              </button>
            </div>

            <div className="mt-[14px] admin-content">
              <AdminCandidateData position={active} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPage;
