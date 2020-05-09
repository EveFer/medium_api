const app = require('./src/server')
const db = require('./src/lib/bd')

const PORT = process.env.PORT || 8080

async function start () {
  await db.connect()
  console.log('BD connected successfull')
  app.listen(PORT, () => {
    console.log(`Server listening in ${PORT} port`)
  })
}

start()
  .then(() => console.log('Server ready!!'))
  .catch(error => console.log('Error: ', error))
