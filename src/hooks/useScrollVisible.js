import { useEffect, useState } from "react";

const useScrollVisible = () => {
  const [scrollVisible, setScrollVisible] = useState(false);
  useEffect(() => {
    const checkScrollTop = () => {
      if (window.pageYOffset > 350){
        setScrollVisible(true)
      } else if (window.pageYOffset <= 350){
        setScrollVisible(false)
      }
    };
    window.addEventListener("scroll", checkScrollTop)
    return () => {
      window.removeEventListener("scroll", checkScrollTop)
    }
  }, [])

  return scrollVisible;
}
export default useScrollVisible
