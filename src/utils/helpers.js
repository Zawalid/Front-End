export function getCover(cover) {
  if (!cover) return '';
  if (Array.isArray(cover)) {
    return `${import.meta.env.VITE_IMAGE_URL}/${cover[0]}`;
  }
  return cover;
}
