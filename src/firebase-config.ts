/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

let config: object = {};
try {
  if (import.meta.env.VITE_FIREBASE_CONFIG) {
    config = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);
  }
} catch (e) {
  console.warn(
    'Failed to parse VITE_FIREBASE_CONFIG from environment',
  );
}
export const FIREBASE_CONFIG = config;
