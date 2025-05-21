// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Simple empty module to use as a polyfill for Node.js core modules
const emptyModule = require.resolve('./polyfill-empty.js');

// Add specific workarounds for React Native incompatibilities
module.exports = {
  ...config,
  resolver: {
    ...config.resolver,
    // Prevent bundling specific Node.js modules that cause issues
    blacklistRE: /nodejs|ws\/lib\/websocket-server\.js/,
    extraNodeModules: {
      // Provide empty polyfills for Node.js core modules
      'events': emptyModule,
      'stream': require.resolve('readable-stream'),
      'zlib': require.resolve('browserify-zlib'),
      'net': require.resolve('react-native-tcp'),
      'http': emptyModule,
      'https': emptyModule,
      'url': emptyModule,
    },
  },
};
