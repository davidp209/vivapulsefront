import React, { useEffect, useState } from 'react';
import saveMeals from '../../hooks/saveMeals';
import CardCesta from '../../components/CardCesta/CardCesta';
import useUserDetails from '../../hooks/useUserDetails';

const Carrito = () => {
    const { saveMeal, loading, error, success } = saveMeals();
    const [cesta, setCesta] = useState([]);
    const [gramosPorAlimento, setGramosPorAlimento] = useState({});
    const { userDetails, buscando } = useUserDetails();
    const [mealData, setMealData] = useState(null);

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
            const gramos = gramosPorAlimento[comida.id] || 50;
            const calorias = ((comida.calories || 0) * gramos) / 100;
            return total + calorias;
        }, 0);

        const newMealData = {
            idAliment: cesta.map(comida => comida.id),
            calories: totalCalorias,
            name: "Merienda",
            user: { id: userDetails.id }
        };
        setMealData(newMealData);
        console.log('[useEffect mealData] mealData seteado a:', newMealData);

    }, [cesta, gramosPorAlimento, userDetails]);

    const handleRemove = (id) => {
        const nuevaCesta = cesta.filter(item => item.id !== id);
        setCesta(nuevaCesta);
        localStorage.setItem('cesta', JSON.stringify(nuevaCesta));
        console.log('Elemento eliminado, nueva cesta:', nuevaCesta);
    };

    const handleGramosChange = (id, gramos) => {
        setGramosPorAlimento(prev => {
            const newGramos = { ...prev, [id]: gramos };
            console.log('Gramos cambiados:', newGramos);
            return newGramos;
        });
    };

    if (buscando || !userDetails) { // Considera el estado 'buscando' de useUserDetails
        console.log('Render: Cargando usuario o userDetails no disponible.', {buscando, userDetails});
        return <div>Cargando usuario...</div>;
    }

    // Log más seguro para mealData antes del return
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
                        gramos={gramosPorAlimento[comida.id] || 50}
                        onGramosChange={handleGramosChange}
                        onRemove={() => handleRemove(comida.id)}
                    />
                ))
            ) : (
                <p>No hay elementos en la cesta.</p>
            )}
            <h1>Pruebas</h1>
            <pre>{JSON.stringify(mealData, null, 2)}</pre>
            <button onClick={() => mealData && saveMeal(mealData)} disabled={!mealData || loading}>
              {loading ? 'Guardando...' : 'Llamar a saveMeal'}
            </button>
            {error && <p>Error al guardar: {error.message || JSON.stringify(error)}</p>}
            {success && <p>¡Guardado exitosamente!</p>}
        </div>
    );
};

export default Carrito;

