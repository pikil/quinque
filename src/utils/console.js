/**
 * @param {...*} args
 * @returns {void}
 */
export const consoleWarn = (...args) => {
  // @ts-ignore
  console.warn(args) // eslint-disable-line no-console
}
