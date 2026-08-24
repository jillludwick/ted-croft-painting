import { useState, useEffect } from "react";

function safeSessionStorageGet(key: string): string | null {
  try {
    return sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSessionStorageSet(key: string, value: string): void {
  try {
    sessionStorage.setItem(key, value);
  } catch {
    // Silently fail if sessionStorage is not available
  }
}

export function useLeadCapture() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const popupShown = safeSessionStorageGet('leadPopupShown');
    if (popupShown) {
      setHasShown(true);
      return;
    }

    const timer = setTimeout(() => {
      if (!hasShown) {
        setShowPopup(true);
        setHasShown(true);
        safeSessionStorageSet('leadPopupShown', 'true');
      }
    }, 30000);

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 50 && !hasShown) {
        setShowPopup(true);
        setHasShown(true);
        safeSessionStorageSet('leadPopupShown', 'true');
        clearTimeout(timer);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 50 && !hasShown) {
        setShowPopup(true);
        setHasShown(true);
        safeSessionStorageSet('leadPopupShown', 'true');
        clearTimeout(timer);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hasShown]);

  return {
    showPopup,
    closePopup: () => setShowPopup(false)
  };
}
