
// Script to check if Cal Sans is properly loaded
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    console.log('Cal Sans font loading check:');
    
    // Check if the font is loaded
    const isFontLoaded = document.fonts.check('600 1em "Cal Sans"');
    console.log('Font loaded status:', isFontLoaded);
    
    // Get the actual font used for a test element
    const testElement = document.createElement('span');
    testElement.style.fontFamily = '"Cal Sans", "Inter", system-ui, sans-serif';
    testElement.style.fontWeight = '600';
    testElement.style.visibility = 'hidden';
    testElement.textContent = 'Test';
    document.body.appendChild(testElement);
    
    const computedFont = window.getComputedStyle(testElement).fontFamily;
    console.log('Computed font-family:', computedFont);
    
    document.body.removeChild(testElement);
    
    if (!isFontLoaded) {
      console.warn('Cal Sans font may not be loaded properly. Please check:');
      console.warn('1. Font files exist in /public/fonts/cal-sans/');
      console.warn('2. Font paths are correct in cal-sans.css');
      console.warn('3. No CSS conflicts are overriding the font');
    }
  }, 500); // Check after a short delay to allow fonts to load
});
