"use client";

import { useEffect } from 'react';
import { analytics } from '@/lib/firebase';
import { logEvent } from 'firebase/analytics';

export function usePageTracking() {
  useEffect(() => {
    if (analytics) {
      logEvent(analytics, 'page_view');
    }
  }, []);
}

export function useLogEvent() {
  return (eventName: string, eventParams?: Record<string, any>) => {
    if (analytics) {
      logEvent(analytics, eventName, eventParams);
    }
  };
}