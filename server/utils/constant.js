module.exports = {
  WORDS_PER_PAGE: 30,
  SEARCH_RESULTS_LIMIT: 10,

  RATE_LIMIT: {
    GENERAL: {
      WINDOW_MS: 15 * 60 * 1000, // 15 minutes
      MAX_REQUESTS: 100,
    },
    SEARCH: {
      WINDOW_MS: 60 * 1000, // 1 minute
      MAX_REQUESTS: 30,
    },
  },
};
