import React from "react";
import Sleep from "../utils/Sleep";

const _matches = [
  {
    name: "Intimate",
    icon: "account-multiple-plus-outline",
    start: 0,
    end: 91,
  },
  { name: "Mindset", icon: "thought-bubble", start: 0, end: 75 },
  { name: "Feelings", icon: "heart", start: 0, end: 56 },
  { name: "Priorities", icon: "priority-high", start: 0, end: 34 },
  { name: "Interests", icon: "sticker-emoji", start: 0, end: 60 },
  { name: "Sport", icon: "run", start: 0, end: 50 },
];

const useMatch = () => {
  const [matches, setMatches] = React.useState(_matches);

  React.useEffect(() => {
    const increase = async (values) => {
      await Sleep(0.0001);
      let end = 0;
      return {
        matches: values.map((val) => {
          end = val.start === val.end ? end + 1 : end;
          return {
            ...val,
            start: val.start < val.end ? val.start + 1 : val.end,
          };
        }),
        end: end,
      };
    };

    increase(matches).then(({ matches, end }) =>
      end !== matches.length ? setMatches(matches) : null
    );
  }, [matches]);

  return matches;
};

export default useMatch;
