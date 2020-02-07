/**! (c) Yukimasa Funaoka | @license MIT License */

import { useEffect, useState } from "react";

const matchMedia = window.matchMedia;

export function useMediaQuery(query) {
  const [state, setState] = useState(() =>
    matchMedia ? matchMedia(query) : false
  );
  useEffect(() => {
    if (matchMedia) {
      let active = true;
      const queryList = matchMedia(query);
      const updateMatch = () => {
        if (active) setState(queryList.matches);
      };
      queryList.addListener(updateMatch);
      return () => {
        active = false;
        queryList.removeListener(updateMatch);
      };
    }
  }, []);
  return state;
}
