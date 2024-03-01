export function getCover(cover) {
  if (!cover) return '';
  if (Array.isArray(cover)) {
    return `${import.meta.env.VITE_IMAGE_URL}/${cover[0]}`;
  }
  return cover;
}

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
        return direction === 'asc' ? a.duration - b.duration : b.duration - a.duration;

      case 'interns':
        return direction === 'asc' ? a.interns - b.interns : b.interns - a.interns;

      default:
        return 0;
    }
  });
};
