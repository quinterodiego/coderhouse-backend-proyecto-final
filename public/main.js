const socket = io.connect();

socket.on('nuevoCliente', (socketId) => {
    const carrito = {
        socketId,
        productos: []
    }
    createCarrito(carrito);
    console.log(socketId);
});

const createCarrito = async (carrito) => {
    await fetch('http://localhost:8080/api/carrito', {
        method: 'POST',
        body: JSON.stringify(carrito),
        headers: {
            'Content-Type': 'application/json' 
        }
    });
}

const getProducts = async () => {
    const response = await fetch('/api/productos');
    const products = await response.json();
    const template = product => `
        <div class="card m-2" style="width: 18rem;">
            <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
                <div class="text-center">
                    <button class="btn btn-success m-2" data-toggle="modal" data-target="#exampleModal" onclick="openModal(${product.id})"><i class="fa-solid fa-pencil"></i></button>
                    <button class="btn btn-danger m-2" data-id="${product.id}"><i class="fa-solid fa-trash-can"></i></button>
                </div>
                <div class="text-center mt-3">
                    <button href="#" class="btn btn-primary">Agregar a carrito</button>
                </div>
            </div>
        </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Actualizar Producto</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="modal-body">
                    <form id="form-product" class="">
                        <div class="mb-3">
                            <label for="id" class="form-label">Id</label>
                            <input type="text" class="form-control" id="id" name="id" aria-describedby="emailHelp" disabled="true">
                        </div>
                        <div class="mb-3">
                            <label for="title" class="form-label">Nombre</label>
                            <input type="text" class="form-control" id="title" name="title" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Descripción</label>
                            <input type="text" class="form-control" id="description" name="description" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="thumbnail" class="form-label">URL Imagen</label>
                            <input type="text" class="form-control" id="thumbnail" name="thumbnail" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="code" class="form-label">Código</label>
                            <input type="text" class="form-control" id="code" name="code" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="price" class="form-label">Precio</label>
                            <input type="number" class="form-control" id="price" name="price" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="stock" class="form-label">Stock</label>
                            <input type="number" class="form-control" id="stock" name="stock" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="timestamp" class="form-label">Fecha</label>
                            <input type="text" class="form-control" disabled="true" id="timestamp" name="timestamp" aria-describedby="emailHelp">
                        </div>
                    </form>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-primary" onclick="updateProduct()" data-dismiss="modal">Cargar</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = products.map(p => template(p)).join('');

    products.forEach(product => {
        const productNode = document.querySelector(`[data-id="${product.id}"]`);
        productNode.onclick = async e => {
            await fetch(`/api/productos/${product.id}`, {
                method: 'DELETE',
            })
            getProducts();
        }
    });
}

const addFormListener = () => {
    const formProduct = document.getElementById('form-product');
    formProduct.onsubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(formProduct);
        const data = Object.fromEntries(formData.entries());
        await fetch('http://localhost:8080/api/productos', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json' 
            }
        });
        formProduct.reset();
    }
}

const openModal = async (id) => {
    const response = await fetch(`http://localhost:8080/api/productos`);
    const productos = await response.json();
    const producto = productos.filter(p => p.id === id);
    document.querySelector('#form-product #id').value = producto[0].id;
    document.querySelector('#form-product #title').value = producto[0].title;
    document.querySelector('#form-product #description').value = producto[0].description;
    document.querySelector('#form-product #thumbnail').value = producto[0].thumbnail;
    document.querySelector('#form-product #code').value = producto[0].code;
    document.querySelector('#form-product #price').value = producto[0].price;
    document.querySelector('#form-product #stock').value = producto[0].stock;
    document.querySelector('#form-product #timestamp').value = producto[0].timestamp;
}

const updateProduct = async () => {
    const id = parseInt(document.querySelector('#form-product #id').value);
    const formProduct = document.getElementById('form-product');
    const formData = new FormData(formProduct);
    const data = Object.fromEntries(formData.entries());
    const api = `http://localhost:8080/api/productos/${id}`;
    await fetch(api, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json' 
        }
    });
}

window.onload = () => {
    (window.location.pathname == '/productos') ? getProducts() : null; 
    (window.location.pathname == '/cargar') ? addFormListener() : null;
    // newCart();
}