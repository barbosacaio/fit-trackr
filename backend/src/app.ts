import express from 'express'
import cors from 'cors'

const app = express()

// Global middlewares
app.use(cors())
app.use(express.json())

// Health check endpoint
app.get('/health', (req, res) => {
	res.status(200).json({
		status: 'ok',
		message: 'FitTrackr backend is running!',
		uptime: process.uptime(),
		timestamp: new Date().toISOString(),
	})
})

export { app }
