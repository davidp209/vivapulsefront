export function getTraining(id) {

    return fetch(`http://localhost:8080/api/trainings`)
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