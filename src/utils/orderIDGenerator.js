export default function orderIDGenerator (desiredLength) {
  const allowedAlphanumerics = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let result = ''

  for (let x = 0; x < desiredLength; x++) {
    const randomIdx = Math.floor(Math.random() * allowedAlphanumerics.length)
    result += allowedAlphanumerics.charAt(randomIdx)
  }

  return result
}
