const convertButton = document.querySelector(".convert-Button") // MAPEAMENTO DO BOTÃO DE CONVERTER
const currencySelect = document.querySelector(".currency-select") // MAPEAMENTO DO BOTÃO DE CONVERTER

function convertValues() { // FUNÇÃO PARA CONVERTER VALORES
    const inputCurrencyValue = document.querySelector(".input-currency").value // INPUT DE VALOR PARA CONVERSAO
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // MOEDA A CONVERTER
    const currencyValueConverted = document.querySelector(".currency-value") // MOEDA CONVERTIA

    const dolarToday = 5.2 // VALRO DO DOLAR
    const euroToday = 6.2 // VALRO DO EURO

    if (currencySelect.value == "Dolar") { // SE A SELEÇÃO FOR DOLAR
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue / dolarToday) // REESCRITA E FORMATAÇÃO DO VALOR CONVERTIDO
    }

    if (currencySelect.value == "Euro") { // SE A SELEÇÃO FOR EURO
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue / euroToday) // REESCRITA E FORMATAÇÃO DO VALOR CONVERTIDO
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue) // REESCRITA E FORMATAÇÃO DO VALOR INSERIDO

    console.log(currencySelect.value)
}

function changeCurrency() { // FUNÇÃO PARA TROCA DE MOEDAS
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-converted-img")

    if (currencySelect.value == "Dolar") { // SE A SELEÇÃO FOR DOLAR
        currencyName.innerHTML = "Dólar Americano" // REESCRITA E FORMATAÇÃO DO VALOR CONVERTIDO
        currencyImage.src = "./assets/EUA.png"
    }

    if (currencySelect.value == "Euro") { // SE A SELEÇÃO FOR EURO
        currencyName.innerHTML = "Euro" // REESCRITA E FORMATAÇÃO DO VALOR CONVERTIDO
        currencyImage.src = "./assets/euro.png"
    }

    console.log("trocou de moeda")
    
    convertValues()
}

currencySelect.addEventListener("change", changeCurrency) // EVENTO DE TROCA NO SELECT

convertButton.addEventListener("click", convertValues) // EVENTO DE CLICK NO BOTAO

