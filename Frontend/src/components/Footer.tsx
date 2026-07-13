

export default function Footer() {
  return (
<footer
      className="w-full px-[22px] py-[34px] sm:py-[44px]"
      style={{
        background:
          "linear-gradient(180deg, rgba(2,6,23,0.98) 0%, rgba(15,23,42,0.96) 100%)",
      }}
    >
      <div className="max-w-[980px] mx-auto">
          <div className="rounded-[18px] bg-white/70 backdrop-blur p-[18px]">
          <div className="flex flex-col md:flex-row md:items-start gap-[18px] md:justify-between">
            <div>
              <div className="text-[12.5px] font-extrabold tracking-[0.08em] text-[#1d4ed8]">
                ESTERINFOTECH
              </div>
              <div className="mt-[10px] text-[white] font-extrabold text-[18px]">
                Built for the next step in IT innovation.
              </div>
              <p className="mt-[8px] text-[#475569] text-[13.5px] leading-[1.6] max-w-[520px]">
                We craft reliable platforms with creative UX, thoughtful automation, and a delivery mindset.
                Join us to build solutions that feel effortless for end users.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px] w-full md:w-[420px]">
              <div className="rounded-[16px] bg-[rgba(37,99,235,0.04)] px-[14px] py-[12px]">
                <div className="text-[#2563eb] font-extrabold text-[13px]">Contact</div>
              <div className="mt-[7px] text-[white] font-bold text-[14px]">hello@esterinfotech.com</div>
                <div className="mt-[4px] text-[#64748b] text-[12.5px]">Mon–Sat • 10:00–18:00</div>
              </div>
              <div className="rounded-[16px] bg-[rgba(16,185,129,0.04)] px-[14px] py-[12px]">
                <div className="text-[#10b981] font-extrabold text-[13px]">Values</div>
                <div className="mt-[7px] text-[white] font-bold text-[14px]">Clarity • Speed • Quality</div>
                <div className="mt-[4px] text-[#64748b] text-[12.5px]">Every sprint, every commit.</div>
              </div>
            </div>
          </div>

          <div className="mt-[18px] h-[1px] bg-[rgba(148,163,184,0.35)]" />

          <div className="mt-[14px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-[10px]">
            <div className="text-[#64748b] text-[12.5px]">
              © {new Date().getFullYear()} EsterInFotech. All rights reserved.
            </div>
            <div className="text-[white] text-[12.5px] font-semibold">
              Made with <span className="text-[#f43f5e]">⚡</span> for innovative teams.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

