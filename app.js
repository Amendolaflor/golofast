// // ////////// login

function login() {
	let userReg = document.getElementById("userNameRegister").value;
	let passReg = document.getElementById("passwordRegister").value;
	let userLog = document.getElementById("userNameLogin").value;
	let passLog = document.getElementById("passwordLogin").value;

	if (userLog === userReg && passReg === passLog) {
		window.location.replace("./index.html")
	} else {
		alert(`Usuario o Contraseña incorrecto.`)
	}
}

function agregarItem() {
	alert("Agregaste el producto")
}


function elegirProductos() {
	let pedido = prompt(`Elija su golosina ingresando el numero: \n 1 kitkat \n 2 Gomitas \n 3 Marroc \n 4 Confites \n 5 Chocolate \n 6 Kider`)
	switch(pedido) {
		case "1": alert(`COMPRASTE KITKAT! \n Precio: $150`);
		break;
		case "2": alert(`COMPRASTE GOMIAS! \n Precio: $80`);
		break;
		case "3": alert(`COMPRASTE MARROC! \n Precio: $70`);
		break;
		case "4": alert(`COMPRASTE CONFITES! \n Precio: $150`);
		break;
		case "5": alert(`COMPRASTE CHOCOLATE! \n Precio: $200`);
		break;
		case "6": alert(`COMPRASTE KINDER! \n Precio: $250`);
		break;
		default: alert("No ingresaste un numero valido!")
	}

	console.log(pedido)
}







// ////// DATA ///////////
// const listaProductos = [
// 	{
// 		"nombre": "Kitkat",
// 		"precio": 150,
// 		"cantidad": 1,
// 		"vendido": false,
// 	},
// 	{
// 		"nombre": "Gomitas",
// 		"precio": 200,
// 		"cantidad": 1,
// 		"vendido": false,
// 	},
// 	{
// 		"nombre": "Marroc",
// 		"precio": 180,
// 		"cantidad": 1,
// 		"vendido": false,
// 	},
// 	{
// 		"nombre": "Confites",
// 		"precio": 150,
// 		"cantidad": 1,
// 		"vendido": false,
// 	},
// 	{
// 		"nombre": "Chocolate",
// 		"precio": 250,
// 		"cantidad": 1,
// 		"vendido": false,
// 	},
// 	{
// 		"nombre": "Kinder",
// 		"precio": 300,
// 		"cantidad": 1,
// 		"vendido": false,
// 	}
// ]



// const carrito = [];

// 	// for(let i = 0; i < listaProductos.length; i++ ) {
// 	// carrito.push(listaProductos[i])	
// 	// }


// function agregarItem(producto) {  
//   let yaAgregado = carrito.find(elemento => elemento == producto); 
//   if (yaAgregado) {  
//         yaAgregado.cantidad++;      
//   } else {		
//     carrito.push(producto)
//   } 
 
//   console.log(carrito)
// } 





