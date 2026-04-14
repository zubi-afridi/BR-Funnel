import { useState, useMemo, useCallback } from "react";
import { DownArrow, LeftArrow, RightArrow, WorldIcon } from "../assets";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const timezones = ["Pacific Time (PST) - 9:00 am", "Mountain Time (MST) - 10:00 am", "Central Time (CST) - 11:00 am", "Eastern Time (EST) - 12:00 pm", "Greenwich Mean Time (GMT) - 5:00 pm", "Central European Time (CET) - 6:00 pm", "Dubai (GST) - 8:00 pm"];

const BookingCalendar = () => {
  const now = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const [mo, setMo] = useState(now.getMonth());
  const [yr, setYr] = useState(now.getFullYear());
  const [sel, setSel] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [tz, setTz] = useState(timezones[0]);

  const daysInMo = useMemo(() => new Date(yr, mo + 1, 0).getDate(), [yr, mo]);
  const firstDay = useMemo(() => new Date(yr, mo, 1).getDay(), [yr, mo]);

  const changeMo = useCallback((dir: number) => {
    setMo((prevMo) => {
      const next = prevMo + dir;
      if (next < 0) {
        setYr((y) => y - 1);
        return 11;
      } else if (next > 11) {
        setYr((y) => y + 1);
        return 0;
      }
      return next;
    });
  }, []);

  const isOff = useCallback((d: number) => {
    const dt = new Date(yr, mo, d);
    return [0, 5, 6].includes(dt.getDay()) || dt < now;
  }, [yr, mo, now]);

  return (
    <div className="w-full calendar_bg p-2 md:p-7 text-white border border-white/5 shadow-2xl relative">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-[17px] font-medium">Select a Date & Time</h3>
        <span className="text-[10px] text-gradient-blue font-bold uppercase tracking-wider">POWERED BY CALENDLY</span>
      </div>
      <div className="flex justify-between items-center mb-4 px-2">
        <button onClick={() => changeMo(-1)} className="size-8 flex items-center rounded-md justify-center bg-white/4 border border-white/10 hover:bg-white/10 transition-all active:scale-95 group cursor-pointer">
          <div className="opacity-70 group-hover:opacity-100"><LeftArrow /></div>
        </button>
        <h4 className="text-[14px] font-medium">{months[mo]} {yr}</h4>
        <button onClick={() => changeMo(1)} className="size-8 flex items-center rounded-md justify-center bg-white/4 border border-white/10 hover:bg-white/10 transition-all active:scale-95 group cursor-pointer">
          <div className="opacity-70 group-hover:opacity-100"><RightArrow /></div>
        </button>
      </div>
      <div className="grid grid-cols-7 text-center text-[12px] font-medium text-[#6A7282] mb-2">
        {daysOfWeek.map(d => <div key={d}>{d}</div>)}
      </div>
      <div className="grid grid-cols-7 text-center gap-y-1">
        {[...Array(firstDay)].map((_, i) => <div key={i} className="h-[60px]" />)}
        {[...Array(daysInMo)].map((_, i) => {
          const d = i + 1, disabled = isOff(d), active = sel === d;
          return (
            <div key={d} className="p-0.5">
              <button disabled={disabled} onClick={() => setSel(d)} className={`w-full max-w-[55px] mx-auto h-[55px] flex items-center justify-center rounded-lg transition-all font-semibold ${disabled ? "text-[#364153] cursor-not-allowed" : "text-white text-sm bg-white/5 border border-white/10 hover:border-[#4D90FE]/40 hover:bg-[#1F2937]/80 cursor-pointer"} ${active ? "bg-[#4D90FE]! border-[#4D90FE] ring-2 ring-[#4D90FE]/20" : ""}`}>
                {d}
              </button>
            </div>
          );
        })}
      </div>
      <div className="mt-4 relative">
        <div onClick={() => setOpen(!open)} className="px-4 py-3 border border-white/10 bg-white/4 rounded-[12px] flex items-center gap-4 cursor-pointer hover:bg-white/6 transition-all group">
          <div className="rounded-full bg-white/5 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity"><WorldIcon /></div>
          <div className="flex-1">
            <p className="text-[11px] text-[#6A7282] font-semibold tracking-wide">Time Zone</p>
            <div className="flex items-center gap-2">
              <p className="text-[12px] text-white">{tz}</p>
              <div className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}><DownArrow /></div>
            </div>
          </div>
        </div>
        {open && (
          <div className="absolute bottom-full left-0 w-full mb-2 bg-[#0e1118] border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden max-h-[250px] overflow-y-auto custom-scrollbar">
            <div className="py-2">
              {timezones.map(t => <div key={t} onClick={() => { setTz(t); setOpen(false); }} className={`px-5 py-2.5 text-[14px] cursor-pointer transition-colors ${tz === t ? "bg-[#4D90FE] text-white" : "text-white/80 hover:bg-white/5"}`}>{t}</div>)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingCalendar;
