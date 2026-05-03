/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

let config: any = {};
try {
  config = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);
} catch (e) {
  console.warn(
    'Must provide FIREBASE_CONFIG as a JSON object (with keys "projectId", "apiKey", etc) in .env. Using dummy config for build/mock mode.',
  );
  // Provide a dummy config that satisfies Firebase initialization requirements
  config = {
    apiKey: "dummy-api-key",
    authDomain: "dummy-project.firebaseapp.com",
    databaseURL: "https://dummy-project.firebaseio.com",
    projectId: "dummy-project",
    storageBucket: "dummy-project.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcdef"
  };
}
export const FIREBASE_CONFIG = config;
