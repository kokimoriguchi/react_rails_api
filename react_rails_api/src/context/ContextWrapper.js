import React, { useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

const ContextWrapper = (props) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  //日付選択とモーダル表示のvalue
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);

  return (
    <GlobalContext.Provider 
        value={{ 
            monthIndex, setMonthIndex,
            daySelected,setDaySelected,
            showEventModal,setShowEventModal, 
        }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;