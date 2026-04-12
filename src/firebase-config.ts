/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
}

let config: FirebaseConfig;
try {
  config = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);
} catch (e) {
  // Provide a dummy fallback configuration for local development/builds
  config = {
    apiKey: "dummy-api-key",
    authDomain: "dummy-project.firebaseapp.com",
    databaseURL: "https://dummy-project-default-rtdb.firebaseio.com",
    projectId: "dummy-project",
    storageBucket: "dummy-project.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcdef123456"
  };
  console.warn(
    'VITE_FIREBASE_CONFIG not found or invalid. Using dummy fallback configuration.',
  );
}
export const FIREBASE_CONFIG = config;
