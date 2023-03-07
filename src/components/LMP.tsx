import { useStore } from "@nanostores/react";
import moment from "moment";
import { DayPicker } from "react-day-picker";

import "react-day-picker/dist/style.css";
import { lmp, lmpCurrentWeek } from "../pregnancyStore";

export default function LMP() {
  const $lmp = useStore(lmp);
  const a = moment($lmp, "DD-MM-YYYY");
  const b = moment(moment().toDate(), "DD-MM-YYYY");
  const weeks = b.diff(a, "week");
  lmpCurrentWeek.set(weeks);

  return (
    <>
      <label className="grid grid-cols-2">
        <span>Choose your LMP (Last Menstrual Period) date:</span>
        <DayPicker
          mode="single"
          selected={$lmp}
          onSelect={(date) => lmp.set(date)}
        />
      </label>
      <h1>
        It has been {weeks} {weeks > 1 ? `weeks` : `week`}.
      </h1>
    </>
  );
}
