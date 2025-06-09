import { useState } from 'react';
import { postMeals } from '../services/postMeals';

const saveMeals = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const saveMeal = async (datosDeLaComida) => {
        console.log('Datos recibidos en saveMeal (hook):', datosDeLaComida);

        if (!datosDeLaComida) {
            console.error('saveMeal fue llamado sin datosDeLaComida');
            return;
        }

        setLoading(true);
        setError(null);
        setSuccess(false);
        try {
            await postMeals(datosDeLaComida);
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