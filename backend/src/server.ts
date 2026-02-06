import { app } from './app'
import dotenv from 'dotenv'

dotenv.config({ path: '../.env' })

const port = process.env.BACKEND_PORT ? Number(process.env.BACKEND_PORT) : 3000

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`)
})
