import { useState } from "react";
import { DownArrow, LeftArrow, RightArrow, WorldIcon } from "../assets";

const BookingCalendar = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time for accurate comparison

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [showTimezoneDropdown, setShowTimezoneDropdown] = useState(false);
  const [selectedTimezone, setSelectedTimezone] = useState("Pacific Time (PST) - 9:00 am");

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const timezones = [
    "Pacific Time (PST) - 9:00 am",
    "Mountain Time (MST) - 10:00 am",
    "Central Time (CST) - 11:00 am",
    "Eastern Time (EST) - 12:00 pm",
    "Greenwich Mean Time (GMT) - 5:00 pm",
    "Central European Time (CET) - 6:00 pm",
    "Dubai (GST) - 8:00 pm"
  ];

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const isDateDisabled = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    const dayOfWeek = date.getDay();

    // Friday is 5, Saturday is 6, Sunday is 0
    const isFriSatSun = dayOfWeek === 5 || dayOfWeek === 6 || dayOfWeek === 0;

    // Past dates
    const isPast = date < today;

    return isFriSatSun || isPast;
  };

  return (
    <div className="w-full calendar_bg p-7  text-white border border-white/5 shadow-2xl relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-[17px] font-medium text-white">Select a Date & Time</h3>
        <span className="text-[10px] text-gradient-blue font-bold uppercase tracking-wider">
          POWERED BY CALENDLY
        </span>
      </div>

      {/* Month Navigation */}
      <div className="flex justify-between items-center mb-4 px-2">
        <button
          onClick={handlePrevMonth}
          className="size-[32px] flex items-center rounded-md justify-center bg-white/4 border border-white/10 hover:bg-white/10 cursor-pointer transition-all active:scale-95 group"
        >
          <div className="opacity-70 group-hover:opacity-100 transition-opacity">
            <LeftArrow />
          </div>
        </button>
        <h4 className="text-[14px] font-medium text-white">
          {months[currentMonth]} {currentYear}
        </h4>
        <button
          onClick={handleNextMonth}
          className="size-[32px] flex items-center rounded-md justify-center bg-white/4 border border-white/10 hover:bg-white/10 cursor-pointer transition-all active:scale-95 group"
        >
          <div className="opacity-70 group-hover:opacity-100 transition-opacity">
            <RightArrow />
          </div>
        </button>
      </div>

      {/* Weekdays Grid */}
      <div className="grid grid-cols-7 ">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="text-center text-[12px] font-medium text-[#6A7282] tracking-wider  "
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 text-center items-center justify-center gap-y-1">
        {/* Padding for first day of month */}
        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
          <div key={`empty-${i}`} className="p-1 h-[60px]"></div>
        ))}

        {/* Month Days */}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const disabled = isDateDisabled(day);
          const isSelected = selectedDate === day;

          return (
            <div key={day} className="p-0.5">
              <button
                onClick={() => !disabled && setSelectedDate(day)}
                disabled={disabled}
                className={`w-full max-w-[55px] mx-auto h-[55px] flex items-center justify-center rounded-lg transition-all relative
                  ${disabled
                    ? "text-[#364153] cursor-not-allowed font-semibold"
                    : "text-white text-sm font-semibold bg-[#FFFFFF0D] border border-white/10 hover:border-[#4D90FE]/40 hover:bg-[#1F2937]/80 cursor-pointer"
                  }
                  ${isSelected
                    ? "bg-[#4D90FE]! text-white! border-[#4D90FE] ring-2 ring-[#4D90FE]/20"
                    : ""
                  }
                `}
              >
                {day}
              </button>
            </div>
          );
        })}
      </div>

      {/* Timezone Switcher */}
      <div className="mt-4 relative">
        <div
          onClick={() => setShowTimezoneDropdown(!showTimezoneDropdown)}
          className="px-4 py-3 border border-white/10 bg-white/4 rounded-[12px] flex items-center gap-4 cursor-pointer hover:bg-white/6 transition-all group"
        >
          <div className="rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors opacity-70">
            <WorldIcon />
          </div>
          <div className="flex-1">
            <p className="text-[11px] text-[#6A7282] font-semibold mb-0.5  tracking-wide">
              Time Zone
            </p>
            <div className="flex items-center gap-2">
              <p className="text-[12px]  text-white">
                {selectedTimezone}
              </p>
              <div className={`transition-transform duration-200 ${showTimezoneDropdown ? "rotate-180" : ""}`}>
                <DownArrow />
              </div>
            </div>
          </div>
        </div>

        {/* Timezone Dropdown */}
        {showTimezoneDropdown && (
          <div className="absolute bottom-full left-0 w-full mb-2 bg-[#0e1118] border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden max-h-[250px] overflow-y-auto custom-scrollbar animate-in fade-in slide-in-from-bottom-2">
            <div className="py-2">
              {timezones.map((tz) => (
                <div
                  key={tz}
                  onClick={() => {
                    setSelectedTimezone(tz);
                    setShowTimezoneDropdown(false);
                  }}
                  className={`px-5 py-2.5 text-[14px] cursor-pointer transition-colors
                    ${selectedTimezone === tz
                      ? "bg-[#4D90FE] text-white"
                      : "text-white/80 hover:bg-white/5"
                    }
                  `}
                >
                  {tz}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingCalendar;

