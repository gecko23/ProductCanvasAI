/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

let config: any = {};
try {
  config = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG || '{}');
} catch (e) {
  console.warn(
    'VITE_FIREBASE_CONFIG is missing or invalid. Falling back to mock config.',
  );
}

if (!config.projectId) {
  config = {
    apiKey: 'mock-api-key',
    authDomain: 'mock-project.firebaseapp.com',
    databaseURL: 'https://mock-project-default-rtdb.firebaseio.com',
    projectId: 'mock-project',
    storageBucket: 'mock-project.appspot.com',
    messagingSenderId: '123456789',
    appId: '1:123456789:web:abcdef',
  };
}

export const FIREBASE_CONFIG = config;
