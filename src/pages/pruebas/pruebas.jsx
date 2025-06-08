import React from 'react';
import { postMeals } from '../../services/postMeals'; // Asegúrate de que la ruta sea correcta

const Pruebas = () => {
    const handlePostMeals = async () => {
        try {
            // Suponiendo que tienes un servicio llamado postMeals importado
            const response = await postMeals();
            console.log('Respuesta del servicio:', response);
        } catch (error) {
            console.error('Error al llamar postMeals:', error);
        }
    };

    return (
        <main>
            <h1>Pruebas</h1>
            <p>Este es el contenido principal de la página de pruebas.</p>
            <button onClick={handlePostMeals}>Llamar a postMeals</button>
        </main>
    );
};

export default Pruebas;