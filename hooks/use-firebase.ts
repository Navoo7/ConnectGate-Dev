"use client";

import { useState } from 'react';
import { db, storage } from '@/lib/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export function useFirestore() {
  const [loading, setLoading] = useState(false);

  const addDocument = async (collectionPath: string, data: any) => {
    if (!db) return null;
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, collectionPath), {
        ...data,
        timestamp: new Date().toISOString(),
      });
      return docRef;
    } catch (error) {
      console.error('Error adding document:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const getDocuments = async (collectionPath: string) => {
    if (!db) return [];
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, collectionPath));
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.error('Error getting documents:', error);
      return [];
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    addDocument,
    getDocuments,
  };
}

export function useStorage() {
  const [loading, setLoading] = useState(false);

  const uploadFile = async (path: string, file: File) => {
    if (!storage) return null;
    setLoading(true);
    try {
      const storageRef = ref(storage, path);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      return url;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    uploadFile,
  };
}