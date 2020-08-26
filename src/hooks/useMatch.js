import React from "react";
import Sleep from "../utils/Sleep";

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
