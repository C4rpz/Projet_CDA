import { getHeader, getCookie, createError, defineEventHandler } from 'h3'
import jwt from 'jsonwebtoken'

const SECRET = process.env.JWT_SECRET || 'votre_secret_ultra_long'

export default defineEventHandler((event) => {
  const authHeader = getHeader(event, 'authorization')
  const tokenFromHeader = authHeader?.split(' ')[1]
  const tokenFromCookie = getCookie(event, 'token')

  const token = tokenFromHeader || tokenFromCookie

  console.log('Token reçu:', token)

  if (!token) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }

  try {
    const user = jwt.verify(token, SECRET)
    console.log('Utilisateur décodé:', user) 
    event.context.user = user
  } catch (err) {
    throw createError({ statusCode: 403, statusMessage: 'Forbidden' })
  }
})
