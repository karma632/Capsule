"use client";

import { useEffect, useMemo, useState } from "react";

const durations = [
  { label: "1 week", days: 7 },
  { label: "1 month", days: 30 },
  { label: "6 months", days: 182 },
  { label: "1 year", days: 365 },
  { label: "5 years", days: 1826 },
  { label: "10 years", days: 3652 },
];

function formatDate(date: string) {
  if (!date) return "Pick a date";
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" }).format(new Date(`${date}T00:00:00`));
}

function getDateAfterDays(days: number) {
  const date = new Date();
  date.setHours(12, 0, 0, 0);
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function daysUntil(date: string) {
  if (!date) return 0;
  const target = new Date(`${date}T12:00:00`).getTime();
  const today = new Date();
  today.setHours(12, 0, 0, 0);
  return Math.max(0, Math.ceil((target - today.getTime()) / 86400000));
}

export default function DashboardPage() {
  const [mode, setMode] = useState<"text" | "voice">("text");
  const [message, setMessage] = useState("");
  const [selectedDays, setSelectedDays] = useState(365);
  const [openDate, setOpenDate] = useState("");
  const [notificationsOn, setNotificationsOn] = useState(true);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setOpenDate(getDateAfterDays(365)));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const selectedDuration = useMemo(() => durations.find((duration) => duration.days === selectedDays), [selectedDays]);

  return (
    <main className="min-h-screen bg-white text-black">
      <header className="fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-between border-b border-black/70 bg-white px-6 sm:px-12 lg:px-16">
        <p className="font-mono text-[0.75rem] font-medium tracking-[0.4em]">CAPSULE</p>
        <div className="flex items-center gap-2 font-mono text-xs sm:gap-3">
          <button type="button" onClick={() => setNotificationsOn((current) => !current)} className={`rounded-full px-5 py-3 transition-colors ${notificationsOn ? "bg-black text-white" : "border border-black bg-white text-black"}`}>Notifications: {notificationsOn ? "on" : "off"}</button>
          <button type="button" className="rounded-full border border-black px-5 py-3 transition-colors hover:bg-black hover:text-white">Sign out</button>
        </div>
      </header>

      <div className="mx-auto grid max-w-[90rem] grid-cols-1 gap-12 px-6 pb-12 pt-32 sm:px-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:px-16 lg:py-32">
        <section className="max-w-[35rem]">
          <h1 className="font-display text-[clamp(3rem,5vw,5rem)] leading-[0.88] tracking-[-0.07em]">Bury something<br /><em>for later.</em></h1>
          <p className="mt-5 font-mono text-sm text-[#707070]">Signed in with Google.</p>

          <form className="mt-6 rounded-[1.4rem] border border-black p-5 sm:p-6" onSubmit={(event) => event.preventDefault()}>
            <div className="flex gap-2 font-mono text-xs">
              <button type="button" onClick={() => setMode("text")} className={`rounded-full border border-black px-5 py-3 ${mode === "text" ? "bg-black text-white" : "bg-white"}`}>Text</button>
              <button type="button" onClick={() => setMode("voice")} className={`rounded-full border border-black px-5 py-3 ${mode === "voice" ? "bg-black text-white" : "bg-white"}`}>Voice note</button>
            </div>

            {mode === "text" ? (
              <textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Dear me, in a while…" className="mt-5 h-48 w-full resize-none rounded-2xl border-0 bg-[#f1f1f1] p-4 font-mono text-sm outline-none placeholder:text-[#777] focus:ring-2 focus:ring-black/20" />
            ) : (
              <button type="button" className="mt-5 flex h-48 w-full items-center justify-center rounded-2xl bg-[#f1f1f1] font-mono text-sm text-[#555]">Voice note recording will be connected here.</button>
            )}

            <p className="mt-5 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[#707070]">Open in</p>
            <div className="mt-2 flex flex-wrap gap-2 font-mono text-xs">
              {durations.map((duration) => (
                <button key={duration.days} type="button" onClick={() => { setSelectedDays(duration.days); setOpenDate(getDateAfterDays(duration.days)); }} className={`rounded-full border border-black px-4 py-3 ${selectedDays === duration.days ? "bg-black text-white" : "bg-white"}`}>{duration.label}</button>
              ))}
              <label className="cursor-pointer rounded-full border border-black px-4 py-3">
                <span>{selectedDuration ? "Pick a date" : formatDate(openDate)}</span>
                <input type="date" value={openDate} onChange={(event) => { setOpenDate(event.target.value); setSelectedDays(0); }} className="sr-only" />
              </label>
            </div>

            <div className="mt-4 border-t border-black/60 pt-3">
              <div className="flex items-end gap-3"><span className="font-display text-5xl leading-none">{daysUntil(openDate)}</span><span className="pb-1 font-mono text-sm">days until it opens</span></div>
              <p className="ml-[4.5rem] mt-1 font-mono text-sm text-[#707070]">{formatDate(openDate)}</p>
            </div>

            <button type="submit" className="mt-5 h-14 w-full rounded-full bg-black font-mono text-sm text-white transition-opacity hover:opacity-80">Seal capsule</button>
          </form>
        </section>

        <section className="lg:pt-1">
          <h2 className="font-display text-4xl leading-none tracking-[-0.05em]">Your <em>capsules.</em></h2>
          <p className="mt-3 font-mono text-sm text-[#707070]">0 sealed&nbsp;&nbsp;·&nbsp;&nbsp;0 ready</p>
          <div className="mt-5 flex min-h-[25rem] flex-col items-center justify-center rounded-[1.4rem] border border-dashed border-black p-8 text-center">
            <h3 className="mt-8 font-display text-4xl leading-none tracking-[-0.05em]">Nothing buried <em>yet.</em></h3>
            <p className="mt-5 max-w-[19rem] font-mono text-sm leading-6 text-[#707070]">Your future self is waiting to hear from you. Write your first note, or record a voice note.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
