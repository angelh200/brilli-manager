import express from 'express'

const router = express.Router({caseSensitive: true, strict: true})

app.post('/login', authController);