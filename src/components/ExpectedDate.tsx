// Thanks to https://perinatology.com/calculators/Due-Date.htm
// The due date may be estimated by adding 280 days ( 9 months and 7 days) to the first day of the last menstrual period (LMP). This is the method used by "pregnancy wheels".
import { useStore } from "@nanostores/react";
import moment from "moment";

import { lmp, lmpCurrentWeek } from "../pregnancyStore";

export default function ExpectedDate() {
  const $lmp = useStore(lmp);
  const $lmpCurrentWeek = useStore(lmpCurrentWeek);
  const expectedDate = moment($lmp, "DD-MM-YYYY").add(280, "days");
  const expectedDateMessage = () => {
    let msg = ``;
    if ($lmpCurrentWeek > 0) {
      if (expectedDate >= moment(moment().toDate(), "DD-MM-YYYY")) {
        msg = `Your expected date is: <span class="text-pink-600">${expectedDate.format(
          "Do MMMM, YYYY"
        )}</span>`;
      } else {
        msg = `Congratulations! You are a proud parent since <span class="text-pink-600">${expectedDate.format(
          "Do MMMM, YYYY"
        )}</span>`;
      }
    }
    return msg;
  };

  return (
    <>
      <h3 dangerouslySetInnerHTML={{ __html: expectedDateMessage() }} />
    </>
  );
}
