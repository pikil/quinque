export const randomStr = (len = 20) => {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  const charLen = characters.length

  for ( var i = 0; i < len; i++ )
    result += characters.charAt(Math.floor(Math.random() * charLen))

  return result
}

/**
 * @param {String} url
 * @returns {String}
 */
export const getPath = (url) => {
  let path = import.meta.env.BASE_URL

  if (path.endsWith('/'))
    path = path.slice(0, -1)

  return path + url
}
