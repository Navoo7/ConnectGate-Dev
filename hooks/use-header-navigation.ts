"use client";

import { usePathname } from "next/navigation";
import { useCallback, useState, useEffect } from "react";

interface HeaderNavigationOptions {
  offset?: number;
  duration?: number;
}

export const useHeaderNavigation = (options: HeaderNavigationOptions = {}) => {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState<string>("");

  // Default options
  const { 
    offset = 80, // Default offset to account for fixed header
    duration = 500 // Default scroll duration in ms
  } = options;

  // Track scroll position for each route
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      if (pathname !== "/") return;
      
      const sections = document.querySelectorAll("[id]");
      const scrollPosition = window.scrollY + offset + 30; // Add small buffer
      
      for (const section of sections) {
        const element = section as HTMLElement;
        const top = element.offsetTop;
        const height = element.offsetHeight;
        
        if (scrollPosition >= top && scrollPosition < top + height) {
          const hash = `#${element.id}`;
          if (hash !== activeHash) {
            setActiveHash(hash);
            // Update URL without triggering scroll
            window.history.replaceState({}, "", hash);
          }
          break;
        }
      }
      
      // Handle scroll to top case
      if (scrollPosition < offset) {
        setActiveHash("");
        window.history.replaceState({}, "", "/");
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, offset, activeHash]);

  const handleNavigation = useCallback((href: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    
    // Store current scroll position before navigation
    if (pathname !== "/" && typeof window !== 'undefined') {
      sessionStorage.setItem(`scroll_${pathname}`, String(window.scrollY));
    }
    
    // If we're on the main page and it's a hash link
    if (pathname === "/" && href.startsWith("#")) {
      // First update the URL with the hash
      window.history.pushState({}, "", href);
      
      // Then scroll to the target element
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        
        // Update active hash after scroll
        setActiveHash(href);
      }
    } else if (pathname === "/" && href === "/") {
      // If we're on the main page and clicking home/logo
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      
      // Remove hash and update active state
      window.history.pushState({}, "", "/");
      setActiveHash("");
    } else {
      // On other pages, navigate to the target
      const targetHref = href.startsWith("#") ? `/${href}` : href;
      window.location.href = targetHref;
      
      // Restore scroll position after navigation
      if (typeof window !== 'undefined') {
        const savedScroll = sessionStorage.getItem(`scroll_${targetHref}`);
        if (savedScroll) {
          window.scrollTo(0, parseInt(savedScroll));
          sessionStorage.removeItem(`scroll_${targetHref}`);
        }
      }
    }
  }, [pathname, offset]);

  return {
    handleNavigation,
    activeHash
  };
};
