## Exercício relacoes-sql

```sql 
CREATE TABLE Ratings (
id VARCHAR(255) PRIMARY KEY,
rate INT DEFAULT 7,
comments TEXT,
movie_id VARCHAR(255),
FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
```

```sql
INSERT INTO Ratings (id, rate, comments, movie_id) 
VALUES(
"abc",
8,
"Excelente filme!",
"001"
);
```

```sql
INSERT INTO Ratings (id, rate, comments, movie_id) 
VALUES(
"cde",
9,
"Excelente mesmo esse filme!",
"002"
);
```

```sql
INSERT INTO Ratings (id, rate, comments, movie_id) 
VALUES(
"efg",
8,
"Excelente esse filme!",
"003"
);
```

```sql
INSERT INTO Ratings (id, rate, comments, movie_id) 
VALUES(
"ghi",
6,
"Excelente!",
"001"
);
```


<!-- INSERT INTO Ratings (id, rate, comments, movie_id) 
-- VALUES(
-- "ajc",
-- 9,
-- "Excelente filme!",
-- "007"
-- ); -->

```sql
SELECT * FROM Ratings;
```

<!-- -- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`ailton-thaila-esteves`.`Ratings`, CONSTRAINT `Ratings_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`)) -->

```sql
ALTER TABLE Movie DROP rating;
```

<!-- DELETE FROM Movie WHERE id="002";
-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`ailton-thaila-esteves`.`Ratings`, CONSTRAINT `Ratings_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`)) -->

```sql 
CREATE TABLE MovieCast (
actor_id VARCHAR(255),
movie_id VARCHAR(255),
FOREIGN KEY (actor_id ) REFERENCES Actor(id), 
FOREIGN KEY (movie_id ) REFERENCES Movie(id)
);
```

```sql
INSERT INTO MovieCast VALUES ("001", "001");
```

```sql
INSERT INTO MovieCast VALUES ("001", "002");
```

```sql
INSERT INTO MovieCast VALUES ("001", "004");
```

```sql
INSERT INTO MovieCast VALUES ("002", "002");
```

```sql
INSERT INTO MovieCast VALUES ("002", "003");
```

```sql
INSERT INTO MovieCast VALUES ("004", "001");
```

<!-- INSERT INTO MovieCast VALUES ("007", "001");
-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`ailton-thaila-esteves`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`)) -->

<!-- DELETE FROM Movie WHERE id="002";
-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`ailton-thaila-esteves`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`)) -->

```sql
SELECT * FROM MovieCast;
```

```sql
SELECT Actor.name, Movie.title FROM MovieCast
JOIN Actor
ON MovieCast.actor_id = Actor.id
JOIN Movie
ON MovieCast.movie_id = Movie.id;
```