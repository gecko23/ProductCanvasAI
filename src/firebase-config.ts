/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

let config: any = {};
try {
  config = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG || "{}");
} catch (e) {
  console.error("Invalid VITE_FIREBASE_CONFIG", e);
}

if (!config.projectId) {
  console.warn("VITE_FIREBASE_CONFIG missing or invalid, using mock config");
  config = {
    apiKey: "mock-api-key",
    authDomain: "mock-auth-domain",
    databaseURL: "https://mock-db.firebaseio.com",
    projectId: "mock-project-id",
    storageBucket: "mock-storage-bucket",
    messagingSenderId: "mock-sender-id",
    appId: "mock-app-id",
  };
}

export const FIREBASE_CONFIG = config;
