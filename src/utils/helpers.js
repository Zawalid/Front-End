export function getCover(cover) {
  console.log(cover)
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

// Array Methods For Sorting And Searching : Articles/Filieres
Array.prototype.search = function (searchQuery) {
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
        return direction === 'asc' ? parseInt(a.duration) - parseInt(b.duration) : parseInt(b.duration) - parseInt(a.duration);

      case 'interns':
        return direction === 'asc' ? parseInt(a.interns) - parseInt(b.interns) : parseInt(b.interns) - parseInt(a.interns);

      default:
        return 0;
    }
  });
};
