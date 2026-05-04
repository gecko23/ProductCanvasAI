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
    'Must provide FIREBASE_CONFIG as a JSON object (with keys "projectId", "apiKey", etc) in .env. Falling back to empty object for mock mode.',
  );
}
export const FIREBASE_CONFIG = config;
