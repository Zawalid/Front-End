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

// Array Methods For Sorting, Searching And Filtering : Articles/Filieres
Array.prototype.search = function (searchQuery) {
  if (!searchQuery) return this;

  return this.filter((el) =>
    el.title?.trim().toLowerCase().includes(searchQuery?.trim().toLowerCase()),
  );
};

Array.prototype.customSort = function (sortBy, direction) {
  return this.toSorted((a, b) => {
    switch (sortBy) {
      case 'date':
        return direction === 'asc'
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);

      case 'title':
        return direction === 'asc'
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);

      case 'duration':
        return direction === 'asc'
          ? parseInt(a.duration) - parseInt(b.duration)
          : parseInt(b.duration) - parseInt(a.duration);

      case 'interns':
        return direction === 'asc'
          ? parseInt(a.interns) - parseInt(b.interns)
          : parseInt(b.interns) - parseInt(a.interns);

      default:
        return 0;
    }
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
