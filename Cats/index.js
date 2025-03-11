async function getCatFact() {
    const url = 'https://catfact.ninja/fact';
    const factDiv = document.getElementById('fact');

    factDiv.innerHTML = '<p>Cargando...</p>'; 

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (data && data.fact) {
            factDiv.innerHTML = `<p>${data.fact}</p>`;
        } else {
            factDiv.innerHTML = `<p>No se pudo obtener un hecho en este momento.</p>`;
        }
    } catch (error) {
        console.error('Error al obtener el hecho de gato:', error);
        factDiv.innerHTML = `<p class="error">Error al obtener el hecho de gato. Inténtalo de nuevo más tarde.</p>`;
    }
}