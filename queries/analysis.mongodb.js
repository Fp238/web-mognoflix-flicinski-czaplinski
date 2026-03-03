db = db.getSiblingDB('filmydb');

//Zapytanie wyszukujące filmy z konkretnego gatunku (find).
print("\n1. Filmy z danego gatunku:");
const moviesGenres = db.filmy.find( { gatunki: { $in: ["Dramat","Akcja"] } }, { tytul: 1, data_premiery: 1, gatunki: 1, _id: 0 } );
printjson(moviesGenres);

//Agregacja: Średnia ocena dla każdego gatunku
print("\n2. Średnia ocena dla każdego gatunku:");
const genresAvg = db.filmy.aggregate([
    { $unwind: "$gatunki" },
    {
        $group: {
            _id: "$gatunki",
            srednia_ocena: { $avg: "$srednia_ocen" },
            liczba_filmow: { $sum: 1 }
        }
    },
    { $sort: { srednia_ocena: -1 } }
])
printjson(genresAvg);