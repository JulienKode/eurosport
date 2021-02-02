/* eslint-disable func-names */
window.matchMedia = window.matchMedia
  || function() {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    }
  }
