/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

let config: object = {};
try {
  config = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);
} catch (e) {
  console.warn(
    'VITE_FIREBASE_CONFIG not found or invalid JSON. Using mock config.',
  );
  config = {
    apiKey: "mock-api-key",
    authDomain: "mock-project.firebaseapp.com",
    databaseURL: "https://mock-project-default-rtdb.firebaseio.com",
    projectId: "mock-project",
    storageBucket: "mock-project.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcdef123456"
  };
}
export const FIREBASE_CONFIG = config;
