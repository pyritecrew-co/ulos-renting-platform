import { useEffect } from "react";
import { useLocation } from "react-router";

export const useScrollTopHelper = () => {
  let location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);
};
