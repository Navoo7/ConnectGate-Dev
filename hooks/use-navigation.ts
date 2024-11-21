"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

export const useNavigation = () => {
  const router = useRouter();

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  const refreshPage = useCallback(() => {
    router.refresh();
    scrollToTop();
  }, [router]);

  const goBack = useCallback(() => {
    if (window.history.length > 2) {
      router.back();
    } else {
      router.push("/");
    }
    scrollToTop();
  }, [router]);

  return {
    scrollToTop,
    refreshPage,
    goBack
  };
};
