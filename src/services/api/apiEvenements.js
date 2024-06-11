import { customFetch } from '../../utils/helpers';

export const getEvents = async () => await customFetch('/events', 'Events');

export const getEvent = async (id) => await customFetch(`/events/${id}`, 'Events');
