

let btnJacket = document.getElementById("btnJacket");
btnJacket.addEventListener("click",function(){
    createProdutocarrinho("https://lh3.googleusercontent.com/pw/AM-JKLXxQMnSCMDDbAvrxS08ud1oJuYxgGf75cmFyPyY-4aIq-HWU8GrCbZGa6i7wc05rdExRCV7WsY9mgXrFg-UoCuYIszPVXKnK9NAByrntgy3aCUtXQ5lIkRnTIeSmNuLlGgnsg4JxWVnt78T_Di_QqMRiA=w192-h140-no?authuser=0","Lightweight Jacket","R$ 100.00");
});

let btnHat = document.getElementById("btnHat");
btnHat.addEventListener("click",function(){
    createProdutocarrinho("https://lh3.googleusercontent.com/pw/AM-JKLWdzfFwac2U8XqhwEMDgdXZeXAfQmYOtOJy8I0viVQb_6Ex-D4VwOuIkT0bIfGdFUtE_lUdZcn6r3vFQgDLdok8kjlmCIvcgvMcZgCfNX_31FhOWq-5axysH3pKeFF4uJ5EmxgajDOKk5r6Rq-8-_kh2A=w222-h140-no?authuser=0","Black Hat","R$ 100.00");
});

let btnMask = document.getElementById("btnMask");
btnMask.addEventListener("click",function(){
    createProdutocarrinho("https://lh3.googleusercontent.com/pw/AM-JKLVl1sWseb3ujcBt0BnnCJVcBcYTFL-ZQ1Y5xQsTI3rInRvG5YqUEF1sfFgkfQ5Imm4PxZpzp6pUDA8k7tw2B3t_8FYRhDHyMdzDYo26TQiywRgLe3bpDXrCGFp-pNMB3OSFI2FD6CZxH5_4fBKn55h52g=w170-h131-no?authuser=0","Mask","R$ 40.00");
});

let btnTshirt = document.getElementById("btnTshirt");
btnTshirt.addEventListener("click",function(){
    createProdutocarrinho("https://lh3.googleusercontent.com/pw/AM-JKLVf2xhQ_M9kNJTl-Gi4FhfLmsUFSWExoLai0eQehqSSZFa1H86T0b4Nk3g8wiIif3eCoP2LlmcnHDsDBnJHlPL8w9brRkRx2eau_7ZsK8IdZlfo28M5T0yB1LugSygaigMsenbTi9SiI3zs5ZmbZ6gHRQ=w191-h157-no?authuser=0","T-Shirt","R$ 100.00");
});

let btnSleeve = document.getElementById("btnSleeve");
btnSleeve.addEventListener("click",function(){
    createProdutocarrinho("https://lh3.googleusercontent.com/pw/AM-JKLVUqFOJ4EgIHwXtOFuNj1UfhZKKdu_UDyIcy8fqipvolO0zkT9RsAxLM4JR0pM7xofk9qSB4h3MB1RxF2x4PNgJ0CNzw9chw1KcPcJYms11UGIdhqZlsTsQfrtV5PKQARqbZ_18QhXwhkPS3KKWJkY0fQ=w266-h150-no?authuser=0","Short-Sleeve T-Shirt","R$ 100.00");
});

let btnChampion = document.getElementById("btnChampion");
btnChampion.addEventListener("click",function(){
    console.log("Clicou");
    createProdutocarrinho("https://lh3.googleusercontent.com/pw/AM-JKLUVGX5GIYQunK2hlgfpkQ6HgPhMjLz-RJX4JKUm0ShknDsgmpE9-sp6GozhyhNmJmLkDI2zpLIA0S8S2KtvH0ZZ9WiDKbeDWc7jfKP1CNvf6uFZjd2dvBxBbcThvyrd_G1pT8Us-pafx29Wtwc8wIQF_A=w200-h150-no?authuser=0","Champion Packable Jacket","R$ 100.00");
});

let produto = document.getElementById("carrinho");

function createProdutocarrinho(srcImg,tituloProduto,precoProduto){
    let divCard = document.createElement("div");
    divCard.className="produtoCarrinho";
    divCard.innerHTML = `                    <div class="headerprodutoCarrinho"><img src=${srcImg} alt=""></div>
    <div class="bodyprodutoCarrinho">
        <h3>${tituloProduto}</h3>
        <p class="precoCarrinho">${precoProduto}</p>
        <p class="botaoRemove"><a>Remover produto</a></p>
 </div>`
produto.appendChild(divCard);
}






