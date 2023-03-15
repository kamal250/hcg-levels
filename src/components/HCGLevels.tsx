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
        hcgLevelsMessage = `Expected HCG Level should be between <span class="text-primary-focus">${hcgLevels[lcw].min} mIU/mL</span> and <span class="text-primary-focus">${hcgLevels[lcw].max} mIU/mL</span>.`;
      }
      // Second trimester calculations
      else if ($lmpCurrentWeek > 16 && $lmpCurrentWeek <= 29) {
        hcgLevelsMessage = `Expected HCG Level should be between <span class="text-primary-focus">${hcgLevels["secondTrimester"].min} mIU/mL</span> and <span class="text-primary-focus">${hcgLevels["secondTrimester"].max} mIU/mL</span>.`;
      }
      // Third trimester calculations
      else if ($lmpCurrentWeek > 29 && $lmpCurrentWeek <= 41) {
        hcgLevelsMessage = `Expected HCG Level should be between <span class="text-primary-focus">${hcgLevels["thirdTrimester"].min} mIU/mL</span> and <span class="text-primary-focus">${hcgLevels["thirdTrimester"].max} mIU/mL</span>.`;
      }
    }
    return hcgLevelsMessage;
  };

  return (
    <>
      <h2 dangerouslySetInnerHTML={{ __html: getCalculatedCount() }} />
    </>
  );
}
