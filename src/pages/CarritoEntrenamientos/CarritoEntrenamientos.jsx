import React, { useEffect, useState } from 'react';
import saveWorkouts from '../../hooks/saveWorkouts';
import useUserDetails from '../../hooks/useUserDetails';
import CardCarritoEntrenamiento from '../../components/CardCarritoEntrenamiento/CardCarritoEntrenamiento';
import { useNavigate } from 'react-router-dom';
import { create } from 'lodash';

const CarritoEntrenamientos = () => {
    const { saveWorkout, loading, error, success } = saveWorkouts();
    const [carrito, setCarrito] = useState([]);
    const [tiemposPorEntrenamiento, setTiemposPorEntrenamiento] = useState({});
    const [workoutsData, setWorkoutsData] = useState({});
    const { userDetails, buscando } = useUserDetails();
    const [workouts, setWorkouts] = useState([]);
    const navigate = useNavigate();


    const storedCarrito = localStorage.getItem('workouts');


    console.log('[CarritoEntrenamientos] storedCarrito:', storedCarrito[0]);



    // Cargar entrenamientos del localStorage
    useEffect(() => {
        console.log('[useEffect Carrito] Cargando workouts desde localStorage...');
        if (storedCarrito) {
            const parsedCarrito = JSON.parse(storedCarrito);
            setCarrito(parsedCarrito);
            // Inicializa tiempos si no existen
            console.log('[useEffect Carrito] Workouts cargados:', parsedCarrito);
        } else {
            console.log('[useEffect Carrito] No hay workouts en localStorage.');
        }
    }, []);

    // Actualiza workoutsData cuando cambian los entrenamientos, tiempos o usuario
    useEffect(() => {
        console.log('[useEffect workoutsData] Disparado. Dependencias:', { userDetails, carritoLength: carrito.length, tiemposPorEntrenamiento });

        if (!userDetails) {
            console.log('[useEffect workoutsData] userDetails NO disponible. Seteando workoutsData a null.');
            setWorkoutsData(null);
            return;
        }
        if (carrito.length === 0) {
            console.log('[useEffect workoutsData] Carrito VACÍO. Seteando workoutsData a null.');
            setWorkoutsData(null);
            return;
        }

        console.log('[useEffect workoutsData] Condiciones CUMPLIDAS. Calculando y seteando workoutsData...');
        const entrenamientosAEnviar = carrito.map(entrenamiento => {

            const tiempo = tiemposPorEntrenamiento[entrenamiento.id] || entrenamiento.time || 1;
            const caloriasTotales = entrenamiento.caloriesBurned || entrenamiento.total_calories || 0;
            const caloriasPorMinuto = caloriasTotales / (entrenamiento.time || 1);

            return {
                totalCalories: caloriasPorMinuto * tiempo,
                time: tiempo,
                user: { id: userDetails.id },
                training: { id: entrenamiento.id },
                createdAt: new Date().toISOString(),
            };
        });
        setWorkoutsData(entrenamientosAEnviar);
        console.log('[useEffect workoutsData] workoutsData seteado a:', entrenamientosAEnviar);

    }, [carrito, tiemposPorEntrenamiento, userDetails]);

    const handleRemove = (id) => {
        const nuevoCarrito = carrito.filter(item => item.id !== id);
        setCarrito(nuevoCarrito);
        localStorage.setItem('workouts', JSON.stringify(nuevoCarrito));
    };

    const handleTimeChange = (id, nuevoTiempo) => {
        setTiemposPorEntrenamiento(prev => ({
            ...prev,
            [id]: nuevoTiempo
        }));
    };


    // Me redirige al usuario a la página anterior si se guarda correctamente
    useEffect(() => {
        if (success) {
            localStorage.setItem('workouts', '[]');
            navigate('/dashboard');
        }
    }, [success, navigate]);


    if (buscando || !userDetails) {
        return <div>Cargando usuario...</div>;
    }

    return (
        <div className="container">
            {
                carrito.map(entrenamiento => (
                    <CardCarritoEntrenamiento
                        key={entrenamiento.id}
                        entrenamiento={entrenamiento}
                        tiempo={tiemposPorEntrenamiento[entrenamiento.id]}
                        onTimeChange={handleTimeChange}
                        onRemove={() => handleRemove(entrenamiento.id)}
                    />
                ))
            }
            { /*<h1>Resumen</h1>
            <pre>{JSON.stringify(workoutsData && workoutsData[0], null, 2)}</pre>*/}

            <div className="row justify-content-center my-4">
                <div className="col-auto">
                    <button
                        className='btn btn-primary btn-lg px-5 shadow'
                        onClick={() => workoutsData && workoutsData.length > 0 && saveWorkout(workoutsData[0])}
                        disabled={!workoutsData || workoutsData.length === 0 || loading}
                    >
                        {loading ? 'Guardando...' : 'Guardar entrenamientos'}
                    </button>
                </div>
            </div>
            {error && <p>Error al guardar: {error.message || JSON.stringify(error)}</p>}
            {success && <p>¡Guardado exitosamente!</p>}

        </div>
    );
};

export default CarritoEntrenamientos;

