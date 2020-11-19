//index.js
(async () => {
    const db = require("./db");
    console.log('Começou!');

    console.log('INSERT INTO CLIENTES');
    const result = await db.insertCustomer({ nome: "Fernando", idade: 32, uf: "RS" });
    console.log(result.rowCount);

    console.log('UPDATE CLIENTES');
    const result2 = await db.updateCustomer(1, { nome: "Zé José", idade: 19, uf: "SP" });
    console.log(result2.rowCount);

    console.log('DELETE FROM CLIENTES');
    const result3 = await db.deleteCustomer(1);
    console.log(result3.rowCount);

    console.log('SELECT * FROM CLIENTES');
    const clientes = await db.selectCustomers();
    console.log(clientes);
})();
