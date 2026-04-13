/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

let config: object = {};
try {
  config = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);
} catch (e) {
  // Use a dummy config as a fallback to allow bootstrapping for local development
  // and build verification when the environment variable is missing or invalid JSON.
  console.warn(
    "VITE_FIREBASE_CONFIG environment variable is missing or invalid. Falling back to dummy configuration for build/local development."
  );
  config = {
    apiKey: "dummy-api-key",
    authDomain: "dummy-project.firebaseapp.com",
    databaseURL: "https://dummy-project-default-rtdb.firebaseio.com",
    projectId: "dummy-project",
    storageBucket: "dummy-project.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcdef1234567890",
  };
}
export const FIREBASE_CONFIG = config;
