import { useEffect, useState } from "react";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 800px
  const toggleVisibility = () => {
    if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
  };

  // Add event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      {isVisible && (
        <button className="btn btn-lg rounded-full bg-black text-white fixed lg:bottom-8 lg:right-8 bottom-4 right-6" onClick={scrollToTop}>
          ⭡
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;