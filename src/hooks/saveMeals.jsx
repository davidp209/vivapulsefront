import { useState } from 'react';
import { postMeals } from '../services/postMeals';

const saveMeals = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const mealData = {
        idAliment: [17, 18],
        calories: 2,
        name: "Merienda",
        user: { id: 3 }
    };

    const saveMeal = async () => {
        setLoading(true);
        setError(null);
        setSuccess(false);
        try {
            await postMeals(mealData);
            setSuccess(true);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { saveMeal, loading, error, success };
};

export default saveMeals;