export async function getArticles() {
  const response = await fetch(import.meta.env.VITE_API_URL + '/articles');
  const data = await response.json();
  if (!response.ok) {
    throw new Error('No articles found');
  }
  return data;
}

export async function getArticle(id) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/articles/${id}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error('No article found');
  }
  return data;
}

export async function getTags() {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/tags`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error('No tags found');
  }
  return data;
}
