const showTrace = () => {
  if (import.meta.env.DEV)
    console.trace() // eslint-disable-line no-console
}

/**
 * @param {...*} args
 * @returns {void}
 */
export const consoleWarn = (...args) => {
  console.warn('WARN:', ...args) // eslint-disable-line no-console
  showTrace()
}

/**
 * @param {...*} args
 * @returns {void}
 */
export const consoleInfo = (...args) => {
  console.log('INFO:', ...args) // eslint-disable-line no-console
  showTrace()
}
