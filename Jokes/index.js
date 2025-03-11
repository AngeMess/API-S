async function getJoke() {
    const url = 'https://v2.jokeapi.dev/joke/Any?lang=es&type=single'; 

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            document.getElementById('joke').innerHTML = `<p class="error">No se pudo obtener un chiste en este momento.</p>`;
        } else {
            const joke = data.joke;
            document.getElementById('joke').innerHTML = `<p>${joke}</p>`;
        }
    } catch (error) {
        document.getElementById('joke').innerHTML = `<p class="error">Error al obtener el chiste.</p>`;
    }
}