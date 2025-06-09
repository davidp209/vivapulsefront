import axios from 'axios';

const API_URL = 'https://vivapulse-backend.onrender.com/api/workouts';

export const postWorkout = async (workoutData) => {
    console.log('Datos recibidos en postWorkout:', workoutData);
    console.log('TOKEN:', localStorage.getItem('token'));

    try {
        const response = await axios.post(API_URL, workoutData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
                "Content-Type": 'application/json'
            }
        });
        console.log("Entrenamiento guardada correctamente");
        return response.data;
    } catch (error) {
        throw error;
    }
};