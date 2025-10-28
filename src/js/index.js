document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
        const hash = link.getAttribute('href');
        const target = document.querySelector(hash);
        if (target) {
            e.preventDefault();

            const header = document.querySelector('.header');
            const headerOffset = header.offsetHeight;

            const elementPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
            window.scrollTo({ top: elementPosition, behavior: 'smooth' });
            
            history.replaceState(null, null, hash);
        }
    });
});

let products = [
    {
        id : 1,
        nome: "Lâmina de 1 Grama",
        imagem: "src/img/ouro-999-24k-1g.png",
        descricao: "Uma lâmina de ouro 24 quilates pesando 1 grama"
    },
    {
        id : 2,
        nome: "Lâmina de 2 Gramas",
        imagem: "src/img/ouro-999-24k-2g.png",
        descricao: "Uma lâmina de ouro 24 quilates pesando 2 gramas"
    },
    {
        id : 3,
        nome: "Lâmina de 5 Gramas",
        imagem: "src/img/ouro-999-24k-5g.png",
        descricao: "Uma lâmina de ouro 24 quilates pesando 5 gramas"
    },
    {
        id : 4,
        nome: "Lingote de 10 Gramas",
        imagem: "src/img/ouro-999-24k-10g.png",
        descricao: "Um lingote de ouro 24 quilates pesando 10 gramas"
    },
    {
        id : 5,
        nome: "Lingote de 25 Gramas",
        imagem: "src/img/ouro-999-24k-25g.png",
        descricao: "Um lingote de ouro 24 quilates pesando 25 gramas"
    },
    {
        id : 6,
        nome: "Lingote Onça Troy",
        imagem: "src/img/ouro-999-24k-troy-1oz.png",
        descricao: "O famoso lingote de ouro 24 quilates onça troy"
    },
    {
        id : 7,
        nome: "Lingote de 50 Gramas",
        imagem: "src/img/ouro-999-24k-50g.png",
        descricao: "Um lingote de ouro 24 quilates pesando 50 gramas"
    },
    {
        id : 8,
        nome: "Barra de 100 Gramas",
        imagem: "src/img/ouro-999-24k-100g.png",
        descricao: "Uma barra de ouro 24 quilates pesando 100 gramas"
    },
    {
        id : 9,
        nome: "Barra de 250 Gramas",
        imagem: "src/img/ouro-999-24k-250g.png",
        descricao: "Uma barra de ouro 24 quilates pesando 250 gramas"
    },
    {
        id : 10,
        nome: "Barra de 500 Gramas",
        imagem: "src/img/ouro-999-24k-500g.png",
        descricao: "Uma barra de ouro 24 quilates pesando 500 gramas"
    },
    {
        id : 11,
        nome: "Barra de 1 Quilograma",
        imagem: "src/img/ouro-999-24k-1kg.png",
        descricao: "Uma barra de ouro 24 quilates pesando 1 quilograma"
    },
];

let containerProducts = document.querySelector(".ouro-lista");

function showProducts(){
    let htmlProducts = ""

    products.forEach(prd => {
        let imageSizeClass = 'size-large';
        const nomeLower = prd.nome.toLowerCase();

        if (nomeLower.includes('lâmina')) {
            imageSizeClass = 'size-small';
        } else if (nomeLower.includes('lingote')) {
            imageSizeClass = 'size-medium';
        }

        htmlProducts = htmlProducts + `
            <li class="ouro-produto">
                <div class="produto-cartao">
                    <div class="produto-img-container">
                        <!-- CORREÇÃO: Adiciona a classe de tamanho dinamicamente -->
                        <img src="${prd.imagem}" class="produto-img ${imageSizeClass}">
                    </div>
                    <div class="produto-info">
                        <h3 class="produto-nome">${prd.nome}</h3>
                        <p class="produto-descricao">${prd.descricao}</p>
                    </div>
                </div>
            </li>
        `
    })
    containerProducts.innerHTML = htmlProducts;
}

showProducts();