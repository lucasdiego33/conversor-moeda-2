

const botao = document.querySelector(".botao")
  


 const converterValues = async  () =>{
     
     const meuValor = document.querySelector(".input").value
     const valor1 = document.querySelector(".valorReal")
     const valor2 = document.querySelector(".valorDolar")

     

     

const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(resposta => resposta.json())
const dolarToday = data.USDBRL.high
const converted = meuValor / dolarToday;



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
