export async function getMealsID() {
  // Primer fetch para obtener el usuario y su ID
const userResponse = await fetch('https://vivapulse-backend.onrender.com/api/me', {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
    }
});

  if (!userResponse.ok) throw new Error('Error al obtener el usuario');

  const userData = await userResponse.json();
  console.log(userData); // Para verificar la estructura de los datos del usuario
  const userId = userData.id; // Ajusta si el campo es diferente

  // Segundo fetch para obtener las comidas del usuario
const mealsResponse = await fetch(`https://vivapulse-backend.onrender.com/api/meals/user/${userId}`, {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
    }
});

if (!mealsResponse.ok) throw new Error('Error al obtener las comidas');

const mealsData = await mealsResponse.json();

  return mealsData;
}