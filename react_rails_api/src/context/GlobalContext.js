import React from "react";

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  //Day.jsでのstateの記載
  daySelected: null,
  setDaySelected: (day) => {},
  showEventModal: false,
  setShowEventModal: () => {},
});

export default GlobalContext;