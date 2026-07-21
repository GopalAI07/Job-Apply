import React from "react";
import "../styles/admin_candidate_data.css"
export type AdminSection = "frontend" | "backend" | "database";

type CandidateRow = {
  id?: number | string;
  full_name?: string;
  name?: string;
  email?: string;
  phone?: string;
  cover_letter?: string | null;
  resume?: string | null;
};

type ApiResponseItem = CandidateRow | Record<string, any>;

const API_BASE =
  import.meta.env.VITE_API_BASE_URL ||
  import.meta.env.VITE_API_BASE_URL_VERCEL_LOCAL ||
  "";

function AdminCandidateData({ position }: { position: AdminSection }) {
  const [rows, setRows] = React.useState<ApiResponseItem[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${API_BASE}/admin/${position}`);
        if (!res.ok) {
          throw new Error(`Request failed: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        if (!cancelled) setRows(Array.isArray(data) ? data : []);
      } catch (e: any) {
        if (!cancelled) setError(e?.message || "Failed to load admin data");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [position]);

  const get = (row: ApiResponseItem, key: string) => {
    const r: any = row as any;
    return r?.[key];
  };

  const getCoverLetter = (row: ApiResponseItem): string | null => {
    const r: any = row as any;
    const v = r?.cover_letter ?? r?.["file-name"]?.cover_letter;
    return typeof v === "string" ? v : null;
  };



  const getName = (row: ApiResponseItem): string => {
    const r: any = row as any;
    const v = r?.full_name ?? r?.name;
    return typeof v === "string" ? v : "";
  };

  const buildResumeHref = (applicationId: string | number | undefined) => {
    if (!applicationId) return null;
    return `${API_BASE}/admin/view/${position}/${applicationId}/`;
  };

  const onViewResume = async (applicationId: string | number | undefined) => {
    if (!applicationId) return;
    const url = buildResumeHref(applicationId);
    if (!url) return;

    const res = await fetch(url);
    if (!res.ok) {
      alert(`Failed to load resume link: ${res.status}`);
      return;
    }

    const data = await res.json();
    const link = data?.resume_google_drive_link as string | undefined;

    if (!link) {
      alert("Resume link not found");
      return;
    }

    window.open(link, "_blank", "noopener,noreferrer");
  };


  return (
    <div className={`mt-[14px] bg-blue-50/40 p-[5px] rounded-[18px] border border-[rgba(148,163,184,0.22)] .admin-data-wrapper ${position}-table`}>
      {loading && <p className="text-[#64748b] text-[14.5px]">Loading…</p>}
      {error && <p className="text-red-600 text-[14.5px]">{error}</p>}

      {!loading && !error && (
        <div className="w-full overflow-x-auto p-[2px] border border-[rgba(148,163,184,0.22)] bg-white/60 backdrop-blur ">
          <div className="min-w-[760px]">
            <table className="w-full text-left admin-table">
              <thead className="admin-table-header ">
                <tr className="text-[14px] font-extrabold tracking-[0.02em] text-[#334155] ">
                  <th className="py-4 px-4 border-b border-[rgba(148,163,184,0.35)]  text-center">Candidate</th>
                  <th className="py-4 px-4 border-b border-[rgba(148,163,184,0.35)]  text-center">Phone</th>
                  <th className="py-4 px-4 border-b border-[rgba(148,163,184,0.35)]  text-center">Email</th>
                  <th className="py-4 px-4 border-b border-[rgba(148,163,184,0.35)]  text-center">Cover Letter</th>
                  <th className="py-4 px-4 border-b border-[rgba(148,163,184,0.35)]  text-center">Resume</th>
                </tr>
              </thead>

              <tbody>
                {rows.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="py-6 px-3 text-[#64748b] text-[14.5px]"
                    >
                      No applications found.
                    </td>
                  </tr>
                ) : (
                  rows.map((row, idx) => {
                    const anyRow: any = row as any;
                    const name = getName(row);
                    const coverLetter = getCoverLetter(row);
                    const resumeHref = buildResumeHref(anyRow?.id ?? idx);




                    return (
                      <tr
                        key={String(anyRow?.id ?? idx)}
                        className="hover:bg-[rgba(37,99,235,0.03)] transition-colors admin-row"
                      >
                        <td className="py-3 px-4 border-b border-[rgba(148,163,184,0.18)] text-[18px]">
                          <div className="font-extrabold text-slate-800 candidate-name text-center">
                            {name || "—"}
                          </div>
                        </td>

                        <td className="py-3 px-4 border-b border-[rgba(148,163,184,0.18)] text-[18px]">
                          <div className="text-[#64748b] text-[12.5px] candidate-phone text-center">
                            {get(row, "phone") ?? "—"}
                          </div>
                        </td>

                        <td className="py-3 px-4 border-b border-[rgba(148,163,184,0.18)] text-[18px]">
                          <div className="text-[#0f172a] font-medium candidate-email text-center">
                            {get(row, "email") ?? "—"}
                          </div>
                        </td>

                        <td className="py-3 px-4 border-b border-[rgba(148,163,184,0.18)] text-[18px]">
                          {coverLetter ? (
                            <span
                              className="inline-block max-w-[260px] text-center truncate"
                              title={coverLetter}
                            >
                              {coverLetter}
                            </span>
                          ) : (
                            "—"
                          )}
                        </td>

                        <td className="py-3 px-4 border-b border-[rgba(148,163,184,0.18)] text-[14px]">
                          {resumeHref ? (
                            <button
                              type="button"
                              onClick={() => onViewResume(anyRow?.id ?? idx)}
                              className="flex  justify-between text-center items-center  gap-2 p-[6px] rounded-[12px] border border-[rgba(148,163,184,0.35)] bg-white/70 hover:bg-white transition-colors cursor-pointer resume-btn"
                              title="Open resume on Google Drive"
                            >
                              <span className="text-[18px]">📄</span>
                              <span className="font-extrabold ">View</span>
                            </button> 
                          ) : (
                            "—"
                          )}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminCandidateData;