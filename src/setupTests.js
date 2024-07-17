// src/setupTests.js

import '@testing-library/jest-dom';

// Suppress specific warning messages during testing
const MESSAGES_TO_IGNORE = [
  "Warning: `ReactDOMTestUtils.act` is deprecated in favor of `React.act`.",
  "The above error occurred in the <CitySearch> component:",
  "MutationObserver is not a constructor"
];

const originalError = console.error.bind(console.error);

console.error = (...args) => {
  const ignoreMessage = MESSAGES_TO_IGNORE.some(message => {
    return typeof message === 'string' ? args.toString().includes(message) : message.test(args.join(' '));
  });

  if (!ignoreMessage) {
    originalError(...args);
  }
};
