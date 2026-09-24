export const randomStr = (len = 20) => {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNPQRSTUVWXYZ123456789'
  const charLen = characters.length

  for ( var i = 0; i < len; i++ )
    result += characters.charAt(Math.floor(Math.random() * charLen))

  return result
}
