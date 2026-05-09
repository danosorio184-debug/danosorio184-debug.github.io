// --- SLIDER AUTOMÁTICO + MANUAL ---
let index = 0;
const slides = document.getElementById("slides");
const totalImages = slides.children.length;
const imagesPerView = 4.4;

function showSlides() {
  const offset = -(index * (100 / imagesPerView));
  slides.style.transform = `translateX(${offset}%)`;

  index++;
  if (index > totalImages - imagesPerView) {
    index = 0; // 🔄 Reinicia al inicio   
  }
}

// Cambio automático cada 3 segundos
setInterval(showSlides, 3000);

// Botones manuales
function nextSlide() {
  index++;
  if (index > totalImages - imagesPerView) {
    index = 0;
  }
  showSlides();
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = totalImages - imagesPerView;
  }
  showSlides();
}

// --- CARRITO DE COMPRAS ---
let carrito = [];
let total = 0;

// Agregar producto con precio
function agregarCarrito(producto, precio) {
  carrito.push({ nombre: producto, precio: precio });
  total += precio;
  mostrarCarrito();
}

// Mostrar carrito con total
function mostrarCarrito() {
  const lista = document.getElementById("listaCarrito");
  lista.innerHTML = "";
  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - S/ ${item.precio.toFixed(2)}`;
    // Botón para eliminar producto
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "❌";
    btnEliminar.onclick = () => eliminarProducto(index);
    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });

  // Mostrar total
  const totalDiv = document.getElementById("totalCarrito");
  totalDiv.textContent = `Total: S/ ${total.toFixed(2)}`;
}

// Eliminar producto individual
function eliminarProducto(index) {
  total -= carrito[index].precio;
  carrito.splice(index, 1);
  mostrarCarrito();
}

// Vaciar carrito
function vaciarCarrito() {
  carrito = [];
  total = 0;
  mostrarCarrito();
}

// --- FORMULARIO ---
function validarFormulario() {
  alert("Formulario enviado correctamente.");
  return true;
}