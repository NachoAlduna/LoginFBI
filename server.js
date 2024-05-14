const express = require("express");
const agentes = require("./data/agentes.js");
const app = express();
const jwt = require("jsonwebtoken");

const secretKey = 'Clave Agente'


// Iniciar servidor
app.listen(3000, () => {
  console.log("Servidor encendido en el puerto 3000");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


app.get('/token', (req, res) => {
res.send(token)
})

app.get("/SignIn", (req, res) => {
// Paso 2
const { email, password } = req.query;
// Paso 3
const user = agentes.find((u) => u.email == email && u.password == password);
console.log(user)
// Paso 4
if (user) {
// Paso 5
const token = jwt.sign(
{
exp: Math.floor(Date.now() / 1000) + 120,
data: user,
},
secretKey
);
// Paso 6
res.send(`
<a href="/Paginamuyrestringida?token=${token}"> <p> Pagina muy restringida </p> </a>
Bienvenido agente , ${email}.
<script>
localStorage.setItem('token', JSON.stringify("${token}"))
</script>
`);
} else {
// Paso 7
res.send("Usuario o contraseña incorrecta");
}
});