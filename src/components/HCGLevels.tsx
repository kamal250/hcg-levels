// Thanks to https://www.in.pampers.com/pregnancy/healthy-pregnancy/article/what-are-human-chorionic-gonadotropin-hcg-levels
// and https://www.pregnancybirthbaby.org.au/hcg-levels
import { useStore } from "@nanostores/react";

import { lmpCurrentWeek } from "../pregnancyStore";
import hcgLevels from "../utility/hcgLevels";

export default function HCGLevels() {
  const $lmpCurrentWeek = useStore(lmpCurrentWeek);

  const getCalculatedCount = () => {
    let hcgLevelsMessage = `Please wait for a few more weeks.`;
    if ($lmpCurrentWeek && $lmpCurrentWeek > 2 && $lmpCurrentWeek < 42) {
      // First trimester calculations
      if ($lmpCurrentWeek > 2 && $lmpCurrentWeek <= 16) {
        let lcw = $lmpCurrentWeek;
        if ($lmpCurrentWeek == 11) {
          lcw = 12;
        } else if ($lmpCurrentWeek == 13) {
          lcw = 14;
        }
        hcgLevelsMessage = `Expected HCG Level should be between ${hcgLevels[lcw].min} mIU/mL and ${hcgLevels[lcw].max} mIU/mL.`;
      }
      // Second trimester calculations
      else if ($lmpCurrentWeek > 16 && $lmpCurrentWeek <= 29) {
        hcgLevelsMessage = `Expected HCG Level should be between ${hcgLevels["secondTrimester"].min} mIU/mL and ${hcgLevels["secondTrimester"].max} mIU/mL.`;
      }
      // Third trimester calculations
      else if ($lmpCurrentWeek > 29 && $lmpCurrentWeek <= 41) {
        hcgLevelsMessage = `Expected HCG Level should be between ${hcgLevels["thirdTrimester"].min} mIU/mL and ${hcgLevels["thirdTrimester"].max} mIU/mL.`;
      }
    }
    return hcgLevelsMessage;
  };

  return (
    <>
      <h2>{getCalculatedCount()}</h2>
    </>
  );
}
