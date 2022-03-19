const jokes = document.querySelector('#joke');
const jokebtn = document.querySelector('#JokeBtn');

// const genratejokes = () => {

// const setHeader = {
//     headers: {
//         Accept: "application/json"
//     }
// }

// fetch('https://icanhazdadjoke.com', setHeader)
//     .then((res) => res.json())
//     .then((data) => {
//         joke.innerHTML = data.joke;
//     }).catch((error) => {
//         console.log(error);
//     })

// }

const genrateJokes = async () => {

    try {

        const setHeader = {
            headers: {

                Accept: "application/json"
            }
        }
        const res = await fetch('https://icanhazdadjoke.com/', setHeader);
        const data = await res.json();
        jokes.innerHTML = data.joke;
    } catch (err) {
        console.log(`This error is ${err}`);
    }
}

jokebtn.addEventListener('click', genrateJokes);
genrateJokes();