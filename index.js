const app = require('./src/server')
const db = require('./src/lib/bd')

async function start () {
  await db.connect()
  console.log('BD connected successfull')
  app.listen(8080, () => {
    console.log('Server listening')
  })
}

start()
  .then(() => console.log('Server ready!!'))
  .catch(error => console.log('Error: ', error))
