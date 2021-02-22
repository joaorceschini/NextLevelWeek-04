import express from 'express'
import chalk from 'chalk'

const app = express()

/**
 * GET = Buscar 
 * POST = Salvar
 * PUT = Alterar
 * DELETE = Deletar
 * PATCH = Alteração especifica
*/

app.get("/", (request, response) => {
  return response.json({ message: "Hello world" })
})

// 1 param = Rota(Recurso API)
// 2 param = request, response

app.post("/", (request, response) => {
  return response.json({ message: "Os dados foram salvos com sucesso." })
})

app.listen(3333, () => console.log(`Server is running. [${chalk.cyanBright("PORT")}] 3333 [${chalk.cyanBright("URL")}] ${chalk.yellow("http://localhost:3333")}`))