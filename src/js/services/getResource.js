async function getResource(url) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Ошибка загрузки данных ${url}, ${res.status}`);
  }

  return await res.json();
}

export default getResource;