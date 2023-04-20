import expres, {json} from 'express';
import dotenv from "dotenv";
import cors from "cors";
import httpStatus from 'http-status';

dotenv.config()

const port = process.env.PORT || 4000
const app = expres();

app
  .use(cors())
  .use(json())

app.get('/health', (_req, res) => {
  res.status(httpStatus.OK).send("OK")
})

app.listen(port, () => console.log(`listening to port ${port}`))