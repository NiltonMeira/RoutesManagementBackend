import fastify from "fastify";
import cors from '@fastify/cors'
import { validatorCompiler } from "fastify-type-provider-zod";
import { serializerCompiler } from "fastify-type-provider-zod";

const app = fastify();

app.register(cors, {
    origin:'*',
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.listen({port: 3333}).then(()=>{
    console.log("server running")
})