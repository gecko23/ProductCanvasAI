/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

let config: any = {};
try {
  config = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);
} catch (e) {
  const isMock =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("mock");

  if (isMock) {
    config = { projectId: "mock-project-id", apiKey: "mock-api-key" };
  } else {
    console.warn(
      'Firebase config not found. If this is not intentional, provide VITE_FIREBASE_CONFIG in .env.',
    );
    // Provide a minimal mock config to prevent total crash during build/SSR
    config = { projectId: "mock-project-id" };
  }
}
export const FIREBASE_CONFIG = config;
