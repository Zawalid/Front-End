export async function customFetch(endpoint, resourceName) {
  const response = await fetch(import.meta.env.VITE_API_URL + endpoint);
  if (!response.ok) {
    throw new Error(`${resourceName} not found !`);
  }
  const data = await response.json();
  return data.data ? data.data : data;
}

export function getCover(cover) {
  if (!cover) return '';
  if (Array.isArray(cover)) {
    return `${import.meta.env.VITE_IMAGE_URL}/${cover[0]}`;
  }
  return cover;
}

export const getParams = (searchParams, defaults) => {
  const sortBy = searchParams.get('s') || defaults.sortBy;
  const direction = searchParams.get('d') || defaults.direction;
  const filter = searchParams.get('f') || 'all';
  const query = searchParams.get('q') || '';
  return { sortBy, direction, filter, query };
};

export function getMonthName(event_date) {
  return new Date(event_date).toLocaleDateString('fr-MA', {
    month: 'short',
  });
}

// Array Methods For Sorting, Searching And Filtering : Articles/Filieres
Array.prototype.search = function (searchQuery) {
  if (!searchQuery) return this;

  return this.filter((el) =>
    el.title?.trim().toLowerCase().includes(searchQuery?.trim().toLowerCase()),
  );
};

Array.prototype.customSort = function (sortBy, direction, sortOptions) {
  if (!sortOptions) return this;

  const stringFields = sortOptions.filter((c) => c.type === 'string').map((c) => c.key);
  const numberFields = sortOptions.filter((c) => c.type === 'number').map((c) => c.key);
  const dateFields = sortOptions.filter((c) => c.type === 'date').map((c) => c.key);
  const customFields = sortOptions.filter((c) => c.type === 'custom').map((c) => c.key);

  return this.toSorted((a, b) => {
    if (numberFields.includes(sortBy))
      return direction === 'asc' ? a?.[sortBy] - b?.[sortBy] : b?.[sortBy] - a?.[sortBy];

    if (stringFields.includes(sortBy)) {
      return direction === 'asc'
        ? a?.[sortBy]?.localeCompare(b?.[sortBy])
        : b?.[sortBy]?.localeCompare(a?.[sortBy]);
    }

    if (dateFields.includes(sortBy)) {
      return direction === 'asc'
        ? getIsoDate(a?.[sortBy]) - getIsoDate(b?.[sortBy])
        : getIsoDate(b?.[sortBy]) - getIsoDate(a?.[sortBy]);
    }

    if (customFields.includes(sortBy))
      return sortOptions.find((c) => c.key === sortBy)?.fn(a, b, direction);
  });
};

Array.prototype.customFilter = function (filter, filters, filtersName) {
  if (filter === 'all') return this;
  if (filter === 'other') {
    return this.filter((item) => {
      if (Array.isArray(item[filtersName])) {
        return item[filtersName]
          .map((el) => el.toLowerCase())
          .some((el) => !filters?.map((f) => f.name.toLowerCase()).includes(el));
      } else {
        return !filters?.map((f) => f.name.toLowerCase()).includes(item[filtersName].toLowerCase());
      }
    });
  }
  return this.filter((item) => {
    if (Array.isArray(item[filtersName])) {
      return item[filtersName].map((el) => el.toLowerCase()).includes(filter.toLowerCase());
    } else {
      return item[filtersName].toLowerCase() === filter.toLowerCase();
    }
  });
};
