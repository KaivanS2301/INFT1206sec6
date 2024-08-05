function showOutput(){
    let name = document.querySelector("#First-name").value;

    document.querySelector("#output").textContent = "Hello "+name;
    document.querySelector("#output").style.color="red";
}

document.querySelector("#btn").addEventListener("click",showOutput);