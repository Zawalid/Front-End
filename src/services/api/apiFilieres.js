import { customFetch } from '../../utils/helpers';

export const getFilieres = async () => await customFetch('/filieres', 'Filieres');

export const getFiliere = async (id) => await customFetch(`/filieres/${id}`, 'Filieres');

export const getSectors = async () => await customFetch('/sectors', 'Sectors');
