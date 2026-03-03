db = db.getSiblingDB('filmydb');

//Zapytanie wyszukujące filmy z konkretnego gatunku (find).
print("\n1. Filmy z danego gatunku:");
const moviesGenres = db.filmy.find( { gatunki: { $in: ["Dramat","Akcja"] } }, { tytul: 1, data_premiery: 1, gatunki: 1, _id: 0 } );
printjson(moviesGenres);