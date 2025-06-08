import axios from 'axios';

const API_URL = 'https://vivapulse-backend.onrender.com/api/meals';

export const postMeals = async () => {
    const mealData = {
        idAliment: [17, 18],
        calories: 2,
        name: "Cena",
        user: { id: 3 }
    };

    try {
        const response = await axios.post(API_URL, mealData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
                "Content-Type": 'application/json'
            }
        });
        console.log("Comida guardada correctamente");
        return response.data;
    } catch (error) {
        throw error;
    }
};