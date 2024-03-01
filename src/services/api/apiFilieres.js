export async function getFilieres() {
  const response = await fetch(import.meta.env.VITE_API_URL + '/filieres');
  const data = await response.json();
  if (!response.ok) {
    throw new Error('No filieres found');
  }
  return data;
}

export async function getFiliere(id) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/filieres/${id}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error('No filiere found');
  }
  return data;
}
