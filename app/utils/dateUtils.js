export const getTwoMonths = (offset = 0) => {
    const base = new Date();
    base.setMonth(base.getMonth() + offset);
  
    const getMonth = (date) => {
        const today = new Date();
        const maxBookingDate = new Date();
        maxBookingDate.setDate(today.getDate() + 120); // 120 days from today
      
        const month = date.getMonth();
        const year = date.getFullYear();
        const name = date.toLocaleString("default", { month: "long" });
        const start = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
      
        const dates = [];
      
        // Add padding for first week alignment
        const padding = start.getDay();
        for (let i = 0; i < padding; i++) {
          dates.push({ day: "", dateStr: "", disabled: true });
        }
      
        // Add actual dates
        for (let i = 1; i <= daysInMonth; i++) {
          const d = new Date(year, month, i);
          const dateStr = d.toLocaleDateString();
          const isPast = d < new Date().setHours(0, 0, 0, 0);
          const isBeyondLimit = d > maxBookingDate;
          const disabled = isPast || isBeyondLimit;
      
          dates.push({
            day: d.getDate(),
            dateStr,
            price: !isPast ? "AED 4567" : null, // Show price only if not past
            disabled,
          });
        }
      
        return { name, year, dates };
      };
      
      
  
    const currentMonth = getMonth(base);
    base.setMonth(base.getMonth() + 1);
    const nextMonth = getMonth(base);
  
    return { currentMonth, nextMonth };
  };
  