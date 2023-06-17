require("dotenv").config();

const db = require("./db");

const port = process.env.PORT;

const express = require('express'); 
const app = express(); 

app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

app.get('/clientes/:id', async (req, res) => { 
    const customer = await db.selectCustomer(req.params.id);
    res.json(customer);
})

app.get('/clientes', async (req, res) => { 
    const customers = await db.selectCustomers();
    res.json(customers);
})

app.delete('/clientes/:id', async (req, res) =>{
    await db.deleteCustomer(req.params.id);
    res.sendStatus(204);
})

app.post('/clientes', async (req, res) => {
    await db.insertCustomer(req.body);
    res.sendStatus(201);
});

app.patch('/clientes/:id', async (req, res) => {
    await db.updateCustomer(req.params.id, req.body);
    res.sendStatus(200);
})

//inicia o servidor 
app.listen(port); 
console.log('API funcionando!');