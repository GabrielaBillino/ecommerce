var menu = [{
        link: "https://www.montevideo.com.uy/",
        nombre: "Inicio"
    },
    {
        link: "",
        nombre: "Carrito"
    },
    {
        link: "",
        nombre: "Finalizar Compra"
    },
    {
        link: "",
        nombre: "Contacto"
    },
    {
        link: "",
        nombre: "Preguntas Frecuentes"
    }
]

function llenarMenu(productos) {
    var menu = document.getElementById("menu");
    menu.innerHTML = "";
    for (let index = 0; index < productos.length; index++) {
        const element = productos[index];
        menu.innerHTML += `<li class="nav-item">
        <a class="nav-link" aria-current="page" href="${element.link}">${element.nombre} <i class="bi bi-house"></i></a>
    </li>`
    }
    menu.innerHTML += `<li class="nav-item dropdown" style="display: none">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
Dropdown
</a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
</li>`

}

llenarMenu(menu);