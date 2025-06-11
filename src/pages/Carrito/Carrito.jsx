import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import saveMeals from '../../hooks/saveMeals';
import CardCesta from '../../components/CardCesta/CardCesta';
import useUserDetails from '../../hooks/useUserDetails';

const Carrito = () => {
    const { saveMeal, loading, error, success } = saveMeals();
    const [cesta, setCesta] = useState([]);
    const [gramosPorAlimento, setGramosPorAlimento] = useState({});
    const { userDetails, buscando } = useUserDetails();
    const [mealData, setMealData] = useState(null);
    const [tipoComida, setTipoComida] = useState("");
    const navigate = useNavigate();

    // Cargar la cesta desde localStorage al iniciar el componente
    useEffect(() => {
        console.log('[useEffect Cesta] Cargando cesta desde localStorage...');
        const storedCesta = localStorage.getItem('cesta');
        if (storedCesta) {
            const parsedCesta = JSON.parse(storedCesta);
            setCesta(parsedCesta);
            console.log('[useEffect Cesta] Cesta cargada:', parsedCesta);
        } else {
            console.log('[useEffect Cesta] No hay cesta en localStorage.');
        }
    }, []);

    // Actualiza mealData cuando cambian cesta, gramosPorAlimento o userDetails
    useEffect(() => {
        console.log('[useEffect mealData] Disparado. Dependencias:', { userDetails, cestaLength: cesta.length, gramosPorAlimento });

        if (!userDetails) {
            console.log('[useEffect mealData] userDetails NO disponible. Seteando mealData a null.');
            setMealData(null);
            return;
        }
        if (cesta.length === 0) {
            console.log('[useEffect mealData] Cesta VACÍA. Seteando mealData a null.');
            setMealData(null);
            return;
        }

        console.log('[useEffect mealData] Condiciones CUMPLIDAS. Calculando y seteando mealData...');
        const totalCalorias = cesta.reduce((total, comida) => {
            const gramos = gramosPorAlimento[comida.id] || 5;
            const calorias = ((comida.calories || 0) * gramos) / 100;
            return total + calorias;
        }, 0);

        // Crea el objeto mealData con los IDs de los alimentos y las calorías totales
        const newMealData = {
            idAliment: cesta.map(comida => comida.id),
            calories: totalCalorias,
            name: tipoComida, 
            user: { id: userDetails.id }
        };
        setMealData(newMealData);
        console.log('[useEffect mealData] mealData seteado a:', newMealData);

    }, [cesta, gramosPorAlimento, userDetails, tipoComida]); 

    // Efecto para manejar la redirección y limpieza de la cesta al guardar exitosamente
    useEffect(() => {
        if (success) {
            localStorage.setItem('cesta', '[]'); 
            navigate('/dashboard'); 
        }
    }, [success, navigate]);

    // Maneja la eliminación de un alimento de la cesta
    const handleRemove = (id) => {
        const nuevaCesta = cesta.filter(item => item.id !== id);
        setCesta(nuevaCesta);
        localStorage.setItem('cesta', JSON.stringify(nuevaCesta));
        console.log('Elemento eliminado, nueva cesta:', nuevaCesta);
    };

    // Maneja el cambio de gramos para un alimento específico
    const handleGramosChange = (id, gramos) => {
        setGramosPorAlimento(prev => {
            const newGramos = { ...prev, [id]: gramos };
            console.log('Gramos cambiados:', newGramos);
            return newGramos;
        });
    };

    if (buscando || !userDetails) { // Considera el estado 'buscando' de useUserDetails
        console.log('Render: Cargando usuario o userDetails no disponible.', { buscando, userDetails });
        return <div>Cargando usuario...</div>;
    }


    if (mealData) {
        console.log('Render: mealData actual:', mealData);
        console.log('Render: mealData.calories:', mealData.calories);
    } else {
        console.log('Render: mealData actual es null.');
    }

    return (
        <div className="container">
            {Array.isArray(cesta) && cesta.length > 0 ? (
                cesta.map((comida) => (
                    <CardCesta
                        key={comida.id}
                        comida={comida}
                        gramos={gramosPorAlimento[comida.id] || 5}
                        onGramosChange={handleGramosChange}
                        onRemove={() => handleRemove(comida.id)}
                    />
                ))
            ) : (
                <p>No hay elementos en la cesta.</p>
            )}

            {/* Esto es para hacer una prueba de lo que envia
                <h1>Pruebas</h1>
                <pre>{JSON.stringify(mealData, null, 2)}</pre> */}

            <div className="row justify-content-center my-4">
                <div className="col-auto mb-3">
                    <select
                        className="form-select"
                        value={tipoComida}
                        onChange={e => setTipoComida(e.target.value)}
                        required
                    >
                        <option value="" disabled>Selecciona un tipo de comida</option>
                        <option value="Desayuno">Desayuno</option>
                        <option value="Comida">Comida</option>
                        <option value="Merienda">Merienda</option>
                        <option value="Cena">Cena</option>
                    </select>
                </div>
                <div className="col-auto">
                    <button
                        className="btn btn-primary btn-lg px-5 shadow"
                        onClick={() => mealData && saveMeal(mealData)}
                        disabled={!mealData || loading || !tipoComida}
                    >
                        {loading ? 'Guardando...' : 'Guardar comidas'}
                    </button>
                </div>
            </div>
            {error && <p>Error al guardar: {error.message || JSON.stringify(error)}</p>}
            {success && <p>¡Guardado exitosamente!</p>}
        </div>
    );
};

export default Carrito;

