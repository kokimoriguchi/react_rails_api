import { useState, useEffect, useContext } from "react";
import { getMonth } from "./util";
import { CalendarHeader } from "./components/CalendarHeader";
import { Sidebar } from "./components/Sidebar";
import { Month } from "./components/Month";
import GlobalContext from "./context/GlobalContext.js";
import { EventModal } from "./components/EventModal";

export const App = () => {
  const [currentMonth, ] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    (getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <>
      {showEventModal && <EventModal />}
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
};

