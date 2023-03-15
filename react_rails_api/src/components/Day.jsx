import React, { useContext } from "react"; //Component treeのどの階層であっても、Globalにデータの共有を行うことができるようになる。
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext.js";

export const Day = (props) => {
  const { day, rowIdx } = props;

  // 今日の日付を色付けする
  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  };

  //日付クリックイベント定義（モーダル）
  const { setDaySelected, setShowEventModal } = useContext(GlobalContext);

  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {/* 1行目に曜日を表示 */}
        {rowIdx === 0 && <p className="text-sm mt-1">{day.format("ddd")}</p>}
        <p className={`text-sm p-1 my-1 text-center" ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      ></div>
    </div>
  );
};
