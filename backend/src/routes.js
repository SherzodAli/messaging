import { Router } from 'express'
import { getMessages, sendMessage } from './controllers.js'

export const router = Router()

router.get('/messages', getMessages)
router.post('/messages', sendMessage)
