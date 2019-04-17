// Calling an API - https://official-joke-api.appspot.com/random_joke
// 1. Use a get request and get a random joke.
// 2. Console log the setup and punchline
// 3. Display the joke on the DOM and punchline on the DOM

// Bonus 1
// 4. Display only the setup and then...
// 5. Incorporate a button with a `click` listener that 
// when triggered will display the punchline.

// Bonus 2
// 6. Incorporate a button that will get a new joke


 
function tellJoke(setup) {
    document.getElementById("punchline").style.display = "block";
    return `<h1>${setup}</h1>`
    
    }


function addToDom(toBeAdded) {
    const el = document.querySelector(".joke");
    el.innerHTML += toBeAdded;
    }

function tellPunchline(punchline){
    return `<h2>${punchline}</h2>`
}

let punchlineHTML;

function jokerBtn() {
fetch("https://official-joke-api.appspot.com/random_joke")
    .then(jokes => jokes.json())
    .then(joke => {
       let setup = joke.setup;
       let punchline = joke.punchline;
       let jokeHTML = tellJoke(setup);
       addToDom(jokeHTML);
        punchlineHTML = tellPunchline(punchline);
        })
    }

const setupBtn = document.getElementById("tellAJoke");
setupBtn.addEventListener('click', jokerBtn);

// const punchlineBtn = document.getElementById("punchline");
// punchlineBtn.addEventListener('click', addToDom(punchlineHTML));