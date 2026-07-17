import type { MouseEventHandler } from "react";


type HeaderProps = {
  onLoginClick: MouseEventHandler<HTMLButtonElement>;
  LoginActive: boolean;

};

export default function Header({ onLoginClick , LoginActive}: HeaderProps) {

  
  return (
    <header
      className="w-full px-[22px] py-[20px] sm:py-[56px]"
      style={{
        background:
          "linear-gradient(180deg, rgba(15,23,42,0.96) 0%, rgba(2,6,23,0.96) 45%, rgba(2,6,23,0.98) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="flex flex-col gap-[18px] sm:gap-[22px]">
          {/* One-line header for mobile/tablet/laptop: E&F + EsterInFotech + Login */}
          <div className="flex items-center justify-between gap-[12px]">
            <div className="flex items-center gap-[12px] min-w-0">
              <div className="w-[44px] h-[44px] rounded-[16px] bg-gradient-to-br from-[#2563eb]/20 to-[#10b981]/20 shadow-[0_10px_28px_rgba(15,23,42,0.10)] flex items-center justify-center shrink-0" aria-hidden>
                <span className="text-[20px] font-bold text-white">E&F</span>
              </div>

              <h1 className="text-[28px] sm:text-[40px] leading-[1.05] tracking-[-0.03em] font-extrabold truncate">
                <span className="bg-gradient-to-r from-[#2563eb] via-[#10b981] to-[#7c3aed] bg-clip-text text-transparent">
                  EsterInFotech
                </span>
              </h1>
            </div>
          {LoginActive == true ?
            <button
              type="button"
              onClick={onLoginClick}
              className="bg-[#2563eb] text-white px-[16px] py-[10px] border-none rounded-[10px] cursor-pointer transition-[transform,filter,background-color] hover:bg-[#1d4ed8] active:translate-y-[1px] font-extrabold text-[14px] whitespace-nowrap"
              aria-label="Login"
              id="login-button"
            >
              Login
            </button>
            : 
            <div
             className="bg-none text-[#1790d4] px-[16px] py-[10px] border-none  font-extrabold text-[16px] sm:text-[28px] sm:px-6 whitespace-nowrap"
            >@Admin</div>
          }
          </div>

          {/* Badge row on next line (below title) */}
          <div className="flex items-center">
            <div className="inline-flex items-center gap-[8px] px-[10px] py-[6px] rounded-full bg-white/70 backdrop-blur border border-[rgba(148,163,184,0.10)] w-fit">
              <span className="text-[white] font-extrabold text-[12.5px] tracking-[0.02em]">
                IT Company
              </span>
              <span className="h-[6px] w-[6px] rounded-full bg-[#10b981]" aria-hidden />
              <span className="text-[#93c5fd] font-bold text-[12.5px]">
                Tech • Design • Delivery
              </span>
            </div>
          </div>

          {/* creative engineering line on next line */}
          <p className="text-[15px] sm:text-[16px] leading-[1.6] text-[#cbd5e1] max-w-[720px]">
            Creative engineering that turns ideas into working products—faster than the
            average build, cleaner than the average code.
          </p>
        </div>

      </div>
    </header>

  );
}



