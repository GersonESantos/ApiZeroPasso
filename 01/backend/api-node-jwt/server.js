import express from 'express'
import publicRoutes from './routes/public.js'
//
const app = express()
const port = 3000
app.use(express.json());
app.use('/api/public', publicRoutes);

app.

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
