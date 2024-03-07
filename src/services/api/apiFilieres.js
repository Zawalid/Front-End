import { customFetch } from '../../utils/helpers';

export const getFilieres = async () => await customFetch('/filieres', 'Filieres');

export const getFiliere = async (id) => await customFetch(`/filieres/${id}`, 'Filiere');

export const getSectors = async () => await customFetch('/secteurs', 'Sectors');
