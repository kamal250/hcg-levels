import { useStore } from "@nanostores/react";
import moment from "moment";
import { DayPicker } from "react-day-picker";

import "react-day-picker/dist/style.css";
import { lmp, lmpCurrentWeek } from "../pregnancyStore";
import fetusSize from "../utility/fetusSize";
import './LMP.css';

export default function LMP() {
  const $lmp = useStore(lmp);
  const a = moment($lmp, "DD-MM-YYYY");
  const b = moment(moment().toDate(), "DD-MM-YYYY");
  const weeks = b.diff(a, "week");
  lmpCurrentWeek.set(weeks);

  let remainingWeeks = 41;
  let remainingWeeksMessage = `Select LMP`;
  if (weeks > 0 && weeks < 42) {
    remainingWeeksMessage = `${remainingWeeks - weeks} weeks to go`;
  } else {
    remainingWeeksMessage = `Change LMP`;
  }

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
          <span className="text-primary-focus">{a.format("Do MMMM, YYYY")}</span>
          <div className="grid grid-cols-2 bg-secondary rounded-md min-h-[50%] mt-3">
            <div className="bg-primary rounded-md flex items-center justify-center uppercase">
              <div className="grid-rows-3 grid-flow-col gap-4 text-primary-content">
                <div className="col-span-2 text-center">
                  <h1 className="text-5xl">{weeks}</h1>
                </div>
                <div className="col-span-2 text-lg text-primary-content">
                  {weeks > 1 ? `weeks` : `week`}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center text-sm m-3 text-secondary-content">
              {lmpMessage}
            </div>
          </div>
          {/* TODO :: Replace SVG with vertical bars */}
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="hsl(var(--p))"
                fillOpacity="0.5"
                d="M0,224L30,202.7C60,181,120,139,180,122.7C240,107,300,117,360,154.7C420,192,480,256,540,256C600,256,660,192,720,181.3C780,171,840,213,900,213.3C960,213,1020,171,1080,144C1140,117,1200,107,1260,138.7C1320,171,1380,245,1410,282.7L1440,320L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
              ></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="hsl(var(--p))"
                fillOpacity="0.5"
                d="M0,224L30,202.7C60,181,120,139,180,122.7C240,107,300,117,360,154.7C420,192,480,256,540,256C600,256,660,192,720,181.3C780,171,840,213,900,213.3C960,213,1020,171,1080,144C1140,117,1200,107,1260,138.7C1320,171,1380,245,1410,282.7L1440,320L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
              ></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="hsl(var(--p))"
                fillOpacity="0.5"
                d="M0,224L30,202.7C60,181,120,139,180,122.7C240,107,300,117,360,154.7C420,192,480,256,540,256C600,256,660,192,720,181.3C780,171,840,213,900,213.3C960,213,1020,171,1080,144C1140,117,1200,107,1260,138.7C1320,171,1380,245,1410,282.7L1440,320L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
              ></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="hsl(var(--p))"
                fillOpacity="0.5"
                d="M0,224L30,202.7C60,181,120,139,180,122.7C240,107,300,117,360,154.7C420,192,480,256,540,256C600,256,660,192,720,181.3C780,171,840,213,900,213.3C960,213,1020,171,1080,144C1140,117,1200,107,1260,138.7C1320,171,1380,245,1410,282.7L1440,320L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
              ></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="hsl(var(--p))"
                fillOpacity="0.5"
                d="M0,224L30,202.7C60,181,120,139,180,122.7C240,107,300,117,360,154.7C420,192,480,256,540,256C600,256,660,192,720,181.3C780,171,840,213,900,213.3C960,213,1020,171,1080,144C1140,117,1200,107,1260,138.7C1320,171,1380,245,1410,282.7L1440,320L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="flex justify-center">
            <button className="btn btn-primary bg-primary w-64 rounded-full hover:text-white hover:bg-secondary py-2 px-4 mt-3 rounded items-center uppercase">
              {remainingWeeksMessage}
            </button>
          </div>
        </span>
        <DayPicker
          mode="single"
          selected={$lmp}
          onSelect={(date) => lmp.set(date)}
          modifiersClassNames={{
            selected: 'my-selected',
            today: 'my-today'
          }}
          modifiersStyles={{
            disabled: { fontSize: '75%' }
          }}
        />
        {/* TODO :: Display bar graph showing how many weeks passed among 41 weeks. */}
      </label>
    </>
  );
}
