import { customFetch } from '../../utils/helpers';

export const getFilieres = async () => await customFetch('/filiers', 'Filiers');

export const getFiliere = async (id) => await customFetch(`/filiers/${id}`, 'Filiers');

export const getSectors = async () => await customFetch('/secteurs', 'Sectors');
