{
    let currencyElement = document.querySelector(".js-form__inputPLN");

    const formElement = document.querySelector(".js-form");
    const selectElement = document.querySelector(".js-form__currencySelect");
    const resultElement = document.querySelector(".js-form__result");

    const changeLabels = () => {
        formElement.addEventListener("input", () => {
            switch (selectElement.value) {
                case "PLN":
                    currencyElement = document.querySelector(".js-form__inputPLN");
                    document.getElementById("KRW").style.display = "none";
                    document.getElementById("PLN").style.display = "block";
                    currencyText = "KRW";
                    break;
                case "KRW":
                    currencyElement = document.querySelector(".js-form__inputKRW");
                    document.getElementById("PLN").style.display = "none";
                    document.getElementById("KRW").style.display = "block";
                    currencyText = "PLN";
                    break;
            }
        });
    }

    changeLabels();

    const onFormSubmit = () => {
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();

            const amountElement = document.querySelector(".js-form__amount");

            const amount = +amountElement.value;
            const currency = currencyElement.value;


            const result = amount * currency;

            resultElement.innerText = result.toFixed(4) + " " + currencyText;
        });
    }

    onFormSubmit();

    const resetResult = () => {
        formElement.addEventListener("reset", () => {
            resultElement.innerText = "N/A";
        });
    }

    resetResult();
}