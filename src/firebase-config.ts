/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

let config: any = {};
try {
  config = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);
} catch (e) {
  // If no config is provided, fall back to a mock config so the app can still
  // be run in mock mode.
  config = {
    apiKey: "mock-api-key",
    authDomain: "mock-project.firebaseapp.com",
    databaseURL: "https://mock-project.firebaseio.com",
    projectId: "mock-project",
    storageBucket: "mock-project.firebasestorage.app",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcdef1234567890",
  };
}
export const FIREBASE_CONFIG = config;
