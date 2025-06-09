import { useState } from 'react';
import { postWorkout } from '../services/postWorkout';

const saveWorkouts = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const saveWorkout = async (datosWorkouts) => {
        console.log('Datos recibidos en saveWorkout (hook):', datosWorkouts);

        if (!datosWorkouts) {
            console.error('saveWorkout fue llamado sin datos');
            return;
        }

        setLoading(true);
        setError(null);
        setSuccess(false);
        try {
            await postWorkout(datosWorkouts);
            setSuccess(true);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { saveWorkout, loading, error, success };
};

export default saveWorkouts;