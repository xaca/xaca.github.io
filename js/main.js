window.onload = init;
function init()
{
    
}

function copiar(id)
{
    let test = document.querySelector(id).select();
    document.execCommand('copy');
    console.log(test)
}