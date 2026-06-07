export const getFavorites = () => {
  return (
    JSON.parse(
      localStorage.getItem(
        "favorites"
      )
    ) || []
  );
};

export const addFavorite = (
  job
) => {
  const favorites =
    getFavorites();

  const exists =
    favorites.find(
      (item) =>
        item.id === job.id
    );

  if (!exists) {
    favorites.push(job);

    localStorage.setItem(
      "favorites",
      JSON.stringify(
        favorites
      )
    );
  }
};

export const removeFavorite = (
  id
) => {
  const favorites =
    getFavorites().filter(
      (job) => job.id !== id
    );

  localStorage.setItem(
    "favorites",
    JSON.stringify(
      favorites
    )
  );
};