function showGreetingmMessage() {
    let name = window.prompt("What is your name?")
    window.alert("Hello " + name);

}

// showGreetingmMessage();
document.querySelector("#btn").addEventListener("click", showGreetingmMessage)