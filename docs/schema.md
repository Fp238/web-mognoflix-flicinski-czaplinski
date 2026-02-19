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

### 2. Kolekcja: `uzytkownicy`
| Pole               | Typ        | Opis                                       | Przykład              |
|:-------------------|:-----------|:-------------------------------------------|:----------------------|
| `login`            | **String** | Unikalna nazwa użytkownika.                | `"Cfel123"`           |
| `email`            | **String** | Adres e-mail użytkownika.                  | `"cfel123@film.com"`  |
| `haslo`            | **String** | Zahashowane hasło.                         | `"zaszyfrowany_hash"` |
| `data_rejestracji` | **Date**   | Data utworzenia konta.                     | `"2025-01-19"`        |

### 3. Kolekcja: `recenzje`
| Pole              | Typ          | Opis                                     | Przykład                     |
|:------------------|:-------------|:-----------------------------------------|:-----------------------------|
| `film_id`         | **ObjectId** | Referencja do `filmy._id`.               | `"507f1f77bcf86cd799439011"` |
| `uzytkownik_id`   | **ObjectId** | Referencja do `uzytkownicy._id`.         | `"507f1f77bcf86cd799439022"` |
| `ocena`           | **Int**      | Ocena filmu (zakres 1–10).               | `9`                          |
| `komentarz`       | **String**   | Treść recenzji użytkownika.              | `"Świetny film!"`            |
| `data_dodania`    | **Date**     | Data dodania recenzji.                   | `"2026-02-18"`               |



