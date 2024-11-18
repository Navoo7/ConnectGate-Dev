import 'isomorphic-fetch';

// Export a dummy fetch function to satisfy module requirements
export const fetchPolyfill = global.fetch;