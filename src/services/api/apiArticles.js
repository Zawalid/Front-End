export async function getArticles() {
  const response = await fetch('http://localhost:3000/articles');
  const data = await response.json();
  return data;
}

export async function getArticle(id) {
  const response = await fetch(`http://localhost:3000/articles/${id}`);
  const data = await response.json();
  return data;
}

export async function getTags() {
  const response = await fetch('http://localhost:3000/tags');
  const data = await response.json();
  return data;
}
