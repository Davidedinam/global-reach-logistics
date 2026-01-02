import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const NewYearBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if banner was already dismissed this session
    const dismissed = sessionStorage.getItem("newYearBannerDismissed");
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("newYearBannerDismissed", "true");
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative mx-4 max-w-lg w-full bg-gradient-to-br from-primary via-primary to-secondary rounded-3xl p-8 md:p-12 shadow-2xl text-center transition-all duration-300 ${
          isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100 animate-scale-in"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10"
          onClick={handleClose}
        >
          <X className="h-5 w-5" />
        </Button>

        {/* Decorative elements */}
        <div className="absolute top-6 left-6 text-secondary">
          <Sparkles className="h-8 w-8 animate-pulse" />
        </div>
        <div className="absolute bottom-6 right-6 text-secondary">
          <Sparkles className="h-8 w-8 animate-pulse" />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div className="text-6xl md:text-7xl mb-4">🎉</div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Happy New Year!
          </h2>
          <p className="text-4xl md:text-5xl font-bold text-secondary">
            2025
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/90 mt-4">
            Wishing you a prosperous year ahead!
          </p>
          <p className="text-primary-foreground/80">
            Thank you for choosing 72hours Cargo as your trusted shipping partner.
          </p>
          
          <Button
            onClick={handleClose}
            variant="secondary"
            size="lg"
            className="mt-6 px-8 font-semibold"
          >
            Continue to Website
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewYearBanner;
