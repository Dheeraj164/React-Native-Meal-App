import { createContext, useState } from "react";

interface FavoritesContextType {
  id: string[];
  addFavorite: (id: string) => void;
  removeFavorites: (id: string) => void;
}

export const FavoritesContext = createContext<FavoritesContextType>({
  id: [],
  addFavorite: () => {},
  removeFavorites: () => {},
});

export const FavoritesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favIds, setFavIds] = useState<string[]>([]);

  function addFavorite(id: string) {
    console.log("working");
    setFavIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorites(id: string) {
    setFavIds((currentFavIds) =>
      currentFavIds.filter((mealid) => mealid !== id)
    );
  }

  let contextValue: FavoritesContextType = {
    id: favIds,
    addFavorite: addFavorite,
    removeFavorites: removeFavorites,
  };

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};
