const getNumber = () => {
    $.ajax({
        url: '/number/api_generate',
        context: document.body,
        success: (res) => {
            $('#number').text(res.number)
        }
    })
}

/**
 * Quando il documento di carica lancia la chiamata API
 */
$(document).ready(() => {
    let urls = document.URL.split("/")
    console.log(urls)

    // se la request è quella di ajax mostro il
    // button per fare richieste ajax
    if(urls[urls.length-1] === "api_call") {
        $('#btn').toggle('display');
        getNumber()
    }
})