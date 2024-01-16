export async function getArticles() {
  const response = await fetch('http://localhost:3000/articles');
  const data = await response.json();
  if (!response.ok) {
    throw new Error('No articles found');
  }
  return data;
}

export async function getArticle(id) {
  const response = await fetch(`http://localhost:3000/articles/${id}`);
  const data = await response.json();
  console.log(response)
  if (!response.ok) {
    throw new Error('No article found');
  }
  return data;
}

export async function getTags() {
  const response = await fetch('http://localhost:3000/tags');
  const data = await response.json();
  if(!response.ok) {
    throw new Error('No tags found');
  }
  return data;
}
