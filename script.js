

const botao = document.querySelector(".botao")
  
 

function converterValues (){
     
     const meuValor = document.querySelector(".input").value
     const valor1 = document.querySelector(".valorReal")
     const valor2 = document.querySelector(".valorDolar")

     const dolarToday = 5.20
     const  converted = meuValor / dolarToday

    valor1.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(meuValor)

    valor2.innerHTML =  new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(converted)
}

botao.addEventListener("click", converterValues) 
