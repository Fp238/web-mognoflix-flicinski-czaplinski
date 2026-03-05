db = db.getSiblingDB('filmyDB');

print("\n1. Filmy z danego gatunku:");
const moviesGenres = db.filmy.find( { gatunki: { $in: ["Dramat","Akcja"] } }, { tytul: 1, data_premiery: 1, gatunki: 1, _id: 0 } );
printjson(moviesGenres);


print("\n2. Filtrowanie filmów po dacie (od 2010) i ocenie (powyżej 8):");
const moviesFiltered = db.filmy.find(
    {
        $and: [
            { data_premiery: { $gt: "2010-01-01" } },
            { srednia_ocen: { $gt: 8 } }
        ]
    },
    {
        tytul: 1,
        data_premiery: 1,
        srednia_ocen: 1,
        _id: 0
    }
);
printjson(moviesFiltered);


print("\n3. Średnia ocena dla każdego gatunku:");
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


print("\n4. Średnia ocena dla każdego gatunku:");
