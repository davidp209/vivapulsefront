import React from 'react';
import { postMeals } from '../../services/postMeals'; // Asegúrate de que la ruta sea correcta
import saveMeals from '../../hooks/saveMeals'; // Asegúrate de que la ruta sea correcta


const Pruebas = () => {
   /* const handlePostMeals = async () => {
        try {
            // Suponiendo que tienes un servicio llamado postMeals importado
            const response = await postMeals();
            console.log('Respuesta del servicio:', response);
        } catch (error) {
            console.error('Error al llamar postMeals:', error);
        }
    };*/
    const { saveMeal, loading, error, success } = saveMeals();


    return (
        <main>
            <h1>Pruebas</h1>
            <p>Este es el contenido principal de la página de pruebas.</p>
            <button onClick={saveMeal}>Llamar a saveMeal</button>
            {loading && <p>Cargando...</p>}
            {error && <p>Error: {error}</p>}
            {success && <p>¡Guardado exitosamente!</p>}
        </main>
    );
};

export default Pruebas;