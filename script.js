
document.addEventListener("DOMContentLoaded", function () {
    // Remove todo conteúdo do body
    document.body.innerHTML = "";
    document.body.setAttribute("oncontextmenu", "return false");

    // HEADER
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "Picolé & Cia";
    const nav = document.createElement("nav");
    const ulNav = document.createElement("ul");
    const navItens = ["Sobre Nós", "Fale Conosco"];
    for (let i = 0; i < navItens.length; i++) {
        const li = document.createElement("li");
        li.textContent = navItens[i];
        ulNav.appendChild(li);
    }
    nav.appendChild(ulNav);
    header.appendChild(h1);
    header.appendChild(nav);

    // MAIN
    const pagina = document.createElement("div");
    pagina.id = "pagina";
    const main = document.createElement("main");

    // PROMOÇÕES
    const container1 = document.createElement("div");
    container1.className = "container";
    const promocoes = document.createElement("div");
    promocoes.id = "promocoes";
    const tituloPromocoes = document.createElement("div");
    tituloPromocoes.className = "titulo";
    tituloPromocoes.textContent = "Promoções";
    const produtosPromocoes = document.createElement("div");
    produtosPromocoes.className = "produtos";

    const promocoesArray = [
        {
            img: "imagens/caja_150.jpg",
            alt: "Picolé de Cajá",
            label: "Frutos do Cerrado",
            nome: "Cajá",
            preco: "R$ 5,00"
        },
        {
            img: "imagens/murici_150.jpg",
            alt: "Picolé de Murici",
            label: "Frutos do Cerrado",
            nome: "Murici",
            preco: "R$ 5,00"
        },
        {
            img: "imagens/nutella_150.png",
            alt: "Picolé de Nutella",
            label: "Artificiais",
            nome: "Nutella",
            preco: "R$ 12,00"
        },
        {
            img: "imagens/brigadeiro_150.png",
            alt: "Picolé de Brigadeiro",
            label: "Artificiais",
            nome: "Brigadeiro",
            preco: "R$ 12,00"
        }
    ];

    for (let i = 0; i < promocoesArray.length; i++) {
        const prod = promocoesArray[i];
        const div = document.createElement("div");
        div.className = "produto";
        const img = document.createElement("img");
        img.src = prod.img;
        img.alt = prod.alt;
        const pLabel = document.createElement("p");
        pLabel.className = "label";
        pLabel.textContent = prod.label;
        const h3 = document.createElement("h3");
        h3.textContent = prod.nome;
        const pPreco = document.createElement("p");
        if (prod.nome === "Cajá") pPreco.className = "price";
        pPreco.textContent = prod.preco;
        div.append(img, pLabel, h3, pPreco);
        produtosPromocoes.appendChild(div);
    }

    promocoes.append(tituloPromocoes, produtosPromocoes);

    // ANUNCIOS
    const anuncios = document.createElement("div");
    anuncios.id = "anuncios";
    const h3Anuncio = document.createElement("h3");
    h3Anuncio.textContent = "Anuncie Aqui";
    const pAnuncio = document.createElement("p");
    pAnuncio.textContent = "Entre em contato conosco para saber mais sobre como anunciar seus produtos aqui.";
    anuncios.append(h3Anuncio, pAnuncio);

    container1.append(promocoes, anuncios);

    // PRODUTOS
    const container2 = document.createElement("div");
    container2.className = "container";
    const produtosDiv = document.createElement("div");
    produtosDiv.id = "produtos";
    const tituloProdutos = document.createElement("div");
    tituloProdutos.className = "titulo";
    tituloProdutos.textContent = "Produtos";
    const produtosProdutos = document.createElement("div");
    produtosProdutos.className = "produtos";

    const produtosArray = [
        {
            img: "imagens/caja_150.jpg",
            alt: "Picolé de Cajá",
            label: "Frutos do Cerrado",
            nome: "Cajá",
            preco: "R$ 8,00"
        },
        {
            img: "imagens/murici_150.jpg",
            alt: "Picolé de Murici",
            label: "Frutos do Cerrado",
            nome: "Murici",
            preco: "R$ 8,00"
        },
        {
            img: "imagens/caju_150.png",
            alt: "Picolé de Caju",
            label: "Frutos do Cerrado",
            nome: "Caju",
            preco: "R$ 8,00"
        },
        {
            img: "imagens/bacaba_150.jpg",
            alt: "Picolé de Bacaba",
            label: "Frutos do Cerrado",
            nome: "Bacaba",
            preco: "R$ 8,00"
        },
        {
            img: "imagens/buriti_150.jpg",
            alt: "Picolé de Buriti",
            label: "Frutos do Cerrado",
            nome: "Buriti",
            preco: "R$ 8,00"
        },
        {
            img: "imagens/brigadeiro_150.png",
            alt: "Picolé de Brigadeiro",
            label: "Artificiais",
            nome: "Brigadeiro",
            preco: "R$ 15,00"
        },
        {
            img: "imagens/nutella_150.png",
            alt: "Picolé de Nutella",
            label: "Artificiais",
            nome: "Nutella",
            preco: "R$ 15,00"
        },
        {
            img: "imagens/leite-condensado_150.png",
            alt: "Picolé de Leite Condensado",
            label: "Artificiais",
            nome: "Leite Condensado",
            preco: "R$ 15,00"
        },
        {
            img: "imagens/chocomenta_150.png",
            alt: "Picolé de Chocomenta",
            label: "Artificiais",
            nome: "Chocomenta",
            preco: "R$ 15,00"
        },
        {
            img: "imagens/ninho-nutella_150.jpg",
            alt: "Picolé de Ninho com Nutella",
            label: "Artificiais",
            nome: "Ninho com Nutella",
            preco: "R$ 15,00"
        }
    ];

    for (let i = 0; i < produtosArray.length; i++) {
        const prod = produtosArray[i];
        const div = document.createElement("div");
        div.className = "produto";
        const img = document.createElement("img");
        img.src = prod.img;
        img.alt = prod.alt;
        const pLabel = document.createElement("p");
        pLabel.className = "label";
        pLabel.textContent = prod.label;
        const h3 = document.createElement("h3");
        h3.textContent = prod.nome;
        const pPreco = document.createElement("p");
        pPreco.textContent = prod.preco;
        div.append(img, pLabel, h3, pPreco);
        produtosProdutos.appendChild(div);
    }

    produtosDiv.append(tituloProdutos, produtosProdutos);
    container2.appendChild(produtosDiv);

    main.append(container1, container2);

    // ASIDE
    const aside = document.createElement("aside");
    const h2Sabores = document.createElement("h2");
    h2Sabores.textContent = "Sabores";
    aside.appendChild(h2Sabores);

    const h4Cerrado = document.createElement("h4");
    h4Cerrado.textContent = "Frutos do Cerrado";
    aside.appendChild(h4Cerrado);

    const ulCerrado = document.createElement("ul");
    const saboresCerrado = ["Cajá", "Murici", "Caju", "Bacaba", "Buriti"];
    for (let i = 0; i < saboresCerrado.length; i++) {
        const li = document.createElement("li");
        li.textContent = saboresCerrado[i];
        ulCerrado.appendChild(li);
    }
    aside.appendChild(ulCerrado);

    const h4Artificiais = document.createElement("h4");
    h4Artificiais.textContent = "Artificiais";
    aside.appendChild(h4Artificiais);

    const ulArtificiais = document.createElement("ul");
    const saboresArtificiais = ["Leite Condensado", "Brigadeiro", "Nutella", "Ninho com Nutella", "Chocomenta"];
    for (let i = 0; i < saboresArtificiais.length; i++) {
        const li = document.createElement("li");
        li.textContent = saboresArtificiais[i];
        ulArtificiais.appendChild(li);
    }
    aside.appendChild(ulArtificiais);

    pagina.append(main, aside);

    // FOOTER
    const footer = document.createElement("footer");
    const pFooter = document.createElement("p");
    pFooter.innerHTML = "&copy; Picolé & Cia - Todos os direitos reservados.";
    const address = document.createElement("address");
    const endereco = [
        "Avenida Teotônio Segurado, Nº 125, Centro",
        "CEP 77000-000",
        "Palmas, Tocantins"
    ];
    for (let i = 0; i < endereco.length; i++) {
        const p = document.createElement("p");
        p.textContent = endereco[i];
        address.appendChild(p);
    }
    footer.append(pFooter, address);

    // Adiciona tudo ao body
    document.body.append(header, pagina, footer);
});