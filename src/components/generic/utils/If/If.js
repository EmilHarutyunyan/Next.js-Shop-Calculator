// Third-party imports

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @function If
 * @category Generic
 * @description Conditionally renders its children. Used as an utility to prettify code.
 * @param {boolean} condition - The boolean which decides if rendering happens or not.
 */
const If = ({ condition, children }) => !!condition && children

export default If
