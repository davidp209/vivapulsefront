export function getAliments(id) {

    return fetch(`https://vivapulse-backend.onrender.com/api/aliments`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            //console.log(data)
            return data
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            return [];
        });
    }