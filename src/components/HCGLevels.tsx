// Thanks to https://www.in.pampers.com/pregnancy/healthy-pregnancy/article/what-are-human-chorionic-gonadotropin-hcg-levels
// and https://www.pregnancybirthbaby.org.au/hcg-levels
import { useStore } from "@nanostores/react";

import { lmpCurrentWeek } from "../pregnancyStore";

export default function HCGLevels() {
  const hcgLevels = {
    3: {
      min: 5,
      max: 70,
    },
    4: {
      min: 10,
      max: 750,
    },
    5: {
      min: 200,
      max: 7100,
    },
    6: {
      min: 150,
      max: 32000,
    },
    7: {
      min: 4000,
      max: 160000,
    },
    8: {
      min: 32000,
      max: 150000,
    },
    9: {
      min: 60000,
      max: 150000,
    },
    10: {
      min: 45000,
      max: 170000,
    },
    12: {
      min: 28000,
      max: 210000,
    },
    14: {
      min: 14000,
      max: 63000,
    },
    15: {
      min: 12000,
      max: 71000,
    },
    16: {
      min: 9000,
      max: 56000,
    },
    // 16 - 29 weeks
    "second-trimester": {
      min: 1400,
      max: 53000,
    },
    // 29 - 41 weeks
    "third-trimester": {
      min: 940,
      max: 60000,
    },
  };

  const $lmpCurrentWeek = useStore(lmpCurrentWeek);

  const getCalculatedCount = () => {
    let hcgLevelsMessage = `Please wait for a few more weeks.`;
    if ($lmpCurrentWeek && $lmpCurrentWeek > 2) {
      // First trimester calculations
      if (($lmpCurrentWeek) => 3 && $lmpCurrentWeek < 11) {
        hcgLevelsMessage = `Expected HCG Level should be between ${hcgLevels[$lmpCurrentWeek].min} mIU/mL and ${hcgLevels[$lmpCurrentWeek].max} mIU/mL.`;
      }
      // Second trimester calculations
      if ($lmpCurrentWeek > 16 && $lmpCurrentWeek <= 29) {
        hcgLevelsMessage = `Expected HCG Level should be between ${hcgLevels["second-trimester"].min} mIU/mL and ${hcgLevels["second-trimester"].max} mIU/mL.`;
      }
      // Third trimester calculations
      if ($lmpCurrentWeek > 29 && $lmpCurrentWeek <= 41) {
        hcgLevelsMessage = `Expected HCG Level should be between ${hcgLevels["third-trimester"].min} mIU/mL and ${hcgLevels["third-trimester"].max} mIU/mL.`;
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
