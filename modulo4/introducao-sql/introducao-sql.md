## Exercício de introducao-sql

## 1
## a

-- VARCHAR(255) mostra string que pode ter até 255 caracteres
-- PRIMARY KEY mostra que é um id único
-- NOT NULL mostra que é preciso que tenha algum valor,
-- não pode ser nulo
-- DATE mostra que é uma data
-- VARCHAR(6) mostra string que pode ter até 6 caracteres

## b

-- SHOW DATA TABLES mostra os nomes das tabelas existentes na schema.

##c

-- Esse comando DESCRIBE retorna a tabela com os nomes das colunas e 
-- seus respectivos tipos

## 2
## a

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
```

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  120000,
  "1963-08-23", 
  "male"
);
```

## b

-- Erro 1062, entrada duplicada, já existe id '002' na chave primária

## c
-- Coluna não tem os valores pedidos

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

```sql
SELECT * FROM Actor;

SELECT * FROM Actor WHERE gender = "female";

SELECT salary from Actor WHERE name = "Tony Ramos";

SELECT id, name from Actor WHERE gender = "invalid";

SELECT id, name, salary from Actor WHERE salary <= 500000;

SELECT id, nome from Actor WHERE id = "002";
```

```sql
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);
```

```sql
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-26",
    7
);
```

```sql
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);
```

```sql
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);
```

```sql
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);
```

```sql
SELECT id, title, rating FROM Movie WHERE id = "001";
SELECT * FROM Movie WHERE title = "Se Eu Fosse Você";
SELECT id, title, synopsis FROM Movie WHERE rating >= 7;

SELECT * FROM Movie WHERE title LIKE "%se%" OR synopsis LIKE "%se%";

SELECT * FROM Movie WHERE release_date < "2020-05-04";

SELECT * FROM Movie WHERE release_date < "2020-05-04" AND (title LIKE "%se%" OR synopsis LIKE "%se%") AND rating > 7;
```