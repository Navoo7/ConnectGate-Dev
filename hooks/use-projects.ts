"use client";

import { useState, useEffect } from 'react';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

// Interface for the 'images' document structure in Firestore
interface Images {
  projects: string[];   // Array of project image URLs
  mockups: string[];    // Array of mockup image URLs
}

// Initialize with empty arrays
const defaultImages: Images = {
  projects: [],
  mockups: []
};

export function useProjects() {
  const [images, setImages] = useState<Images>(defaultImages);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchImages() {
      console.log('Starting to fetch images...');
      if (!db) {
        console.error('Firebase db not initialized');
        setLoading(false);
        return;
      }

      try {
        // Fetch from webcollection/images document
        const docRef = doc(collection(db, 'webcollection'), 'images');
        console.log('Fetching from:', docRef.path);
        
        const docSnap = await getDoc(docRef);
        console.log('Document exists:', docSnap.exists());

        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log('Raw Firestore data:', data);
          
          // Get the arrays directly from the document
          const projectImages = data.projects || [];
          const mockupImages = data.mockups || [];
          
          console.log('Setting images:', {
            projectImages,
            mockupImages
          });
          
          setImages({
            projects: projectImages,
            mockups: mockupImages
          });
        } else {
          console.log('No document found at webcollection/images');
          setImages(defaultImages);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
        setError('Failed to fetch images');
        setImages(defaultImages);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, []);

  // Return the data in a format that works with both components
  const result = {
    images: {
      projects: images.projects,
      mockup: images.mockups  // For compatibility with mockup component
    },
    loading,
    error
  };

  console.log('useProjects hook returning:', result);
  return result;
}
