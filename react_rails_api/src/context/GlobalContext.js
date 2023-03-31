import React from "react";

const GlobalContext = React.createContext({ //contextで定義すればuseContextでConponentTreeのどの階層からでも呼び出せる。
  monthIndex: 0,
  setMonthIndex: (index) => {},
  //Day.jsでのstateの記載
  daySelected: null,
  setDaySelected: (day) => {},
  showEventModal: false,
  setShowEventModal: () => {},
  dispatchCalEvent: ({ type, payload }) => {},
  savedEvents: [],
  selectedEvent: null,
  setSelectedEvent: () => {},
});

export default GlobalContext;