/**
 * Combines multiple class names into a single string
 * @param {...string} inputs - Class names to combine
 * @returns {string} - Combined class names
 */
function cn(...inputs) {
    return inputs.filter(Boolean).join(' ');
  }
  
  export { cn };