import {fastify} from'fastify';
import { prisma } from './lib/prisma';
import { getAllPrompts } from './routes/get-all-prompts';

const app = fastify()

app.register(getAllPrompts)

app.listen ({
    port:3333,
}).then (() =>{
  console.log('HTTP Server is Running!')
})