"use client";

import { useState, useEffect } from 'react';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface Screenshots {
  mockup: string[];
  screenshots: string[];
}

const defaultScreenshots: Screenshots = {
  mockup: [
    "https://firebasestorage.googleapis.com/v0/b/connectgate-app.appspot.com/o/card-header.png?alt=media&token=4c939d03-6d58-4252-96a9-001d11769dea",
    "https://firebasestorage.googleapis.com/v0/b/connectgate-app.appspot.com/o/card-header1.png?alt=media&token=0aefbcbb-6e59-480d-9b97-8443e7292484",
    "https://firebasestorage.googleapis.com/v0/b/connectgate-app.appspot.com/o/card-header3.png?alt=media&token=43c75e4b-9f47-4707-8fe3-532af64173b2"
  ],
  screenshots: [
    "https://firebasestorage.googleapis.com/v0/b/connectgate-app.appspot.com/o/card-header2.png?alt=media&token=35efa12b-26c7-4fff-915f-05eae587f2bf",
    "https://firebasestorage.googleapis.com/v0/b/connectgate-app.appspot.com/o/card-header3.png?alt=media&token=43c75e4b-9f47-4707-8fe3-532af64173b2",
    "https://firebasestorage.googleapis.com/v0/b/connectgate-app.appspot.com/o/navoo1.jpg?alt=media&token=500bf0a2-c5cf-4352-a8c5-87388365be71"
  ]
};

export function useScreenshots() {
  const [screenshots, setScreenshots] = useState<Screenshots>(defaultScreenshots);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchScreenshots() {
      if (!db) {
        setLoading(false);
        return;
      }

      try {
        const docRef = doc(collection(db, 'webcollection'), 'screenshots');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data() as Screenshots;
          setScreenshots({
            mockup: data.mockup?.length ? data.mockup : defaultScreenshots.mockup,
            screenshots: data.screenshots?.length ? data.screenshots : defaultScreenshots.screenshots
          });
        }
      } catch (error) {
        console.error('Error fetching screenshots:', error);
        setError('Failed to fetch screenshots');
      } finally {
        setLoading(false);
      }
    }

    fetchScreenshots();
  }, []);

  return { screenshots, loading, error };
}