export const getFavorites = () => {
  return (
    JSON.parse(
      localStorage.getItem("favorites")
    ) || []
  );
};

export const addFavorite = (id) => {
  const favorites =
    getFavorites();

  if (
    !favorites.includes(id)
  ) {
    localStorage.setItem(
      "favorites",
      JSON.stringify([
        ...favorites,
        id,
      ])
    );
  }
};

export const removeFavorite = (
  id
) => {
  const favorites =
    getFavorites();

  localStorage.setItem(
    "favorites",
    JSON.stringify(
      favorites.filter(
        (item) => item !== id
      )
    )
  );
};

export const isFavorite = (
  id
) => {
  return getFavorites().includes(
    id
  );
};