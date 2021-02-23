import 'reflect-metadata'
import express from 'express'
import chalk from 'chalk'
import './database'
import { router } from './routes'

const app = express()

app.use(express.json())
app.use(router)

app.listen(3333, () => console.log(`Server is running. [${chalk.cyanBright("PORT")}] 3333 [${chalk.cyanBright("URL")}] ${chalk.yellow("http://localhost:3333")}`))