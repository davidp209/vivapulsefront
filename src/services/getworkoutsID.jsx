export async function getworkoutsID() {
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
const workoutsResponse = await fetch(`https://vivapulse-backend.onrender.com/api/workouts/user/${userId}`, {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
    }
});

if (!workoutsResponse.ok) throw new Error('Error al obtener los entrenamientos');

const workoutsData = await workoutsResponse.json();

  return workoutsData;
}