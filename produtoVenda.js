
let titulo = document.createElement("h1");

titulo.id = "titulo";
titulo.innerText = "Confeitaria da Naty";

let body = document.querySelector("body");
body.appendChild(titulo);
let produto = document.createElement("div");

produto.innerHTML = `
  <div>
    <h2>Torta de Chocolate</h2>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxCfY7-hyKzv-vVdqrrR17zkgewjk7gojDXQ&s.jpg" alt="Torta de Chocolate">
    <p>Com um delicioso recheio de creme de maracujá</p>
    <p id="Preco da Torta">R$ 60.00</p>
  </div>
`;

body.appendChild(produto)