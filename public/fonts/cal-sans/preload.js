
// This file helps with font preloading
document.addEventListener('DOMContentLoaded', () => {
  const fontPreloadLink = document.createElement('link');
  fontPreloadLink.href = '/fonts/cal-sans/CalSans-SemiBold.woff2';
  fontPreloadLink.rel = 'preload';
  fontPreloadLink.as = 'font';
  fontPreloadLink.type = 'font/woff2';
  fontPreloadLink.crossOrigin = 'anonymous';
  document.head.appendChild(fontPreloadLink);
});
