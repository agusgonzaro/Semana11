const accessKey = 'Rx-RXxjcULMzg2-uYoKuE10Cr6z-64-e9v8-S53TIKg';
    
            // URL de la API de Unsplash para obtener imágenes aleatorias
            const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${accessKey}`;
    

            const imageContainer = document.getElementById('image-container');
    

            const loadImageButton = document.getElementById('load-image-button');
    

            async function getRandomImage() {
                try {
                    const response = await fetch(apiUrl);
                    const data = await response.json();
    

                    const image = document.createElement('img');
                    image.src = data.urls.regular;
    
 
                    imageContainer.innerHTML = '';
                    imageContainer.appendChild(image);
                } catch (error) {
                    console.error('Error al obtener la imagen:', error);
                }
            }

            loadImageButton.addEventListener('click', getRandomImage);
    

            getRandomImage();