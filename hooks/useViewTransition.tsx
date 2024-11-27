import { useEffect } from "react";

const useViewTransition = (callback: () => void) => {
  useEffect(() => {
    if (!document.startViewTransition) {
      console.warn("View Transitions API is not supported in this browser.");
      return;
    }

    const handleTransition = () => {
      document.startViewTransition(callback);
    };

    window.addEventListener("transitionstart", handleTransition);

    return () => {
      window.removeEventListener("transitionstart", handleTransition);
    };
  }, [callback]);
};

export default useViewTransition;
