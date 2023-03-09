import { useStore } from "@nanostores/react";
import moment from "moment";
import { DayPicker } from "react-day-picker";

import "react-day-picker/dist/style.css";
import { lmp, lmpCurrentWeek } from "../pregnancyStore";
import fetusSize from "../utility/fetusSize";

export default function LMP() {
  const $lmp = useStore(lmp);
  const a = moment($lmp, "DD-MM-YYYY");
  const b = moment(moment().toDate(), "DD-MM-YYYY");
  const weeks = b.diff(a, "week");
  lmpCurrentWeek.set(weeks);

  // TODO :: Add more specific content
  let lmpMessage = `The actual embryo or fetal age (also known as conceptual age) is the time elapsed from fertilization of the egg  near the time of ovulation`;
  if (weeks > 7 && weeks <= 41) {
    lmpMessage = `Your baby is about ${fetusSize[weeks].size} cm long and weights around ${fetusSize[weeks].mass} g.`;
  }

  return (
    <>
      <label className="grid grid-cols-3">
        <span className="col-span-2">
          Choose your LMP (Last Menstrual Period) date:{" "}
          {a.format("Do MMMM, YYYY")}
          <div className="grid grid-cols-2 bg-sky-300 rounded-md min-h-[50%] mt-3">
            <div className="bg-pink-500 rounded-md flex items-center justify-center uppercase">
              <div className="grid-rows-3 grid-flow-col gap-4 text-white">
                <div className="col-span-2 text-center">
                  <h1 className="text-2xl">{weeks}</h1>
                </div>
                <div className="col-span-2 text-sm">
                  {weeks > 1 ? `weeks` : `week`}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center text-sm m-3">
              {lmpMessage}
            </div>
          </div>
        </span>
        <DayPicker
          mode="single"
          selected={$lmp}
          onSelect={(date) => lmp.set(date)}
        />
        {/* TODO :: Display bar graph showing how many weeks passed among 41 weeks. */}
      </label>
    </>
  );
}
