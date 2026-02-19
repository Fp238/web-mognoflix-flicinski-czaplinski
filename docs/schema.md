### 1. Kolekcja: `filmy`
| Pole               | Typ        | Opis                                  | Przykład                                   |
|:-------------------|:-----------|:--------------------------------------|:-------------------------------------------|
| `tytul`            | **String** | Unikalny tytul filmu.                 | `"Oppenheimer"`                            |
| `data_premiery`    | **Date**   | Data premiery filmu.                  | `"2023-07-21"`                             |
| `gatunki`          | **Array**  | Lista gatunków(film może mieć wiele). | `["Biograficzny", "Dramat"]`               |
| `rezyser`          | **String** | Dane reżysera filmu(imię i nazwisko). | `"Christopher Nolan"`                      |
| `aktorzy`          | **Array**  | lista aktorów.                        | `[{"imie":"Cillian","nazwisko":"Murphy"}]` |
| `typ_dostepu`      | **String** | Rodzaj dostępu: Public lub Premium.   | `"Premium"`                                |
| `liczba_odtworzen` | **Int**    | Licznik obejrzeń filmu.               | `152340`                                   |
| `srednia_ocen`     | **Float**  | Średnia ocen użytkowników (1–10).     | `8.7`                                      |
| `liczba_ocen`      | **Int**    | Liczba wszystkich ocen.               | `1245`                                     |


