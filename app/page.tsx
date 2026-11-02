import { CapsuleAnimation } from "@/components/CapsuleAnimation";
import { YearTicker } from "@/components/YearTicker";

function GoogleIcon() {
  return (
    <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M21.35 12.27c0-.72-.06-1.42-.18-2.09H12v3.96h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.26Z" />
      <path fill="#34A853" d="M12 21.7c2.63 0 4.84-.87 6.45-2.37l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.3v2.52A9.74 9.74 0 0 0 12 21.7Z" />
      <path fill="#FBBC05" d="M6.54 13.77a5.85 5.85 0 0 1 0-3.54V7.71H3.3a9.75 9.75 0 0 0 0 8.58l3.24-2.52Z" />
      <path fill="#EA4335" d="M12 6.2c1.43 0 2.71.49 3.72 1.46l2.79-2.79C16.84 3.3 14.63 2.3 12 2.3a9.74 9.74 0 0 0-8.7 5.41l3.24 2.52C7.31 7.92 9.46 6.2 12 6.2Z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.09.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09ZM12.03 7.25C11.88 5.02 13.69 3.18 15.77 3c.29 2.58-2.34 4.5-3.74 4.25Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="grid h-[100svh] max-h-[100svh] min-w-0 max-w-full grid-rows-[42%_58%] grid-cols-1 overflow-hidden bg-white text-black lg:min-h-screen lg:h-auto lg:max-h-none lg:grid-rows-none lg:grid-cols-2 lg:overflow-visible">
      <section className="relative flex min-h-0 min-w-0 flex-col justify-between overflow-hidden bg-black px-6 py-5 text-[#a6a6a6] sm:px-12 sm:py-7 lg:min-h-screen lg:px-24 lg:py-20">
        <p className="font-mono text-xs font-medium tracking-[0.32em] sm:text-sm">CAPSULE</p>
        <div className="flex min-h-0 flex-1 items-center justify-center py-8 sm:py-10 lg:py-0"><CapsuleAnimation /></div>
        <p className="font-mono text-[0.68rem] tracking-[0.02em] sm:text-sm">Sealed today. Opened in <YearTicker />.</p>
      </section>

      <section className="flex min-h-0 min-w-0 items-center justify-center overflow-hidden px-6 py-7 sm:px-12 sm:py-9 lg:min-h-screen lg:px-24 lg:py-20">
        <div className="w-full min-w-0 max-w-[42rem]">
          <h1 className="max-w-[27rem] font-display text-[clamp(2.6rem,7vw,4.8rem)] leading-[0.88] tracking-[-0.07em]">Write to<br /><em>future you.</em></h1>
          <p className="mt-6 max-w-[36rem] font-mono text-xs leading-[1.75] tracking-[0.01em] text-[#6e6e6e] sm:mt-7 sm:text-sm sm:tracking-[0.02em]">Drop a note or a voice note, choose when it opens, and we&apos;ll nudge you when it&apos;s time.</p>

          <div className="mt-10 space-y-4 sm:mt-12 sm:space-y-5">
            <button type="button" className="mx-auto flex h-12 w-full max-w-[34rem] items-center justify-center gap-3 rounded-full bg-black px-4 font-mono text-xs tracking-[0.01em] text-white transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:h-14 sm:gap-4 sm:px-6 sm:text-sm"><GoogleIcon /><span>Continue with Google</span></button>
            <button type="button" className="mx-auto flex h-12 w-full max-w-[34rem] items-center justify-center gap-3 rounded-full border border-black bg-white px-4 font-mono text-xs tracking-[0.01em] text-black transition-colors hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:h-14 sm:gap-4 sm:px-6 sm:text-sm"><AppleIcon /><span>Continue with Apple</span></button>
          </div>

          <p className="mt-12 font-mono text-[0.55rem] uppercase tracking-[0.11em] text-[#707070] sm:mt-16 sm:text-sm sm:tracking-[0.15em]">Drop a note <span aria-hidden="true">→</span> set a date <span aria-hidden="true">→</span> get nudged</p>
        </div>
      </section>
    </main>
  );
}
