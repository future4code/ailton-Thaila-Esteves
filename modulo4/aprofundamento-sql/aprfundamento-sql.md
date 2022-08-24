## Exercício Aprofundamento SQL

## 1
## a

Deleta a coluna salary da tabela Actor

## b

Muda o nome da coluna gender para sex e só aceita strings com até 6 caracteres

## c

Muda o nome da coluna gender para gender e coloca para só aceitar strings com até 255 caracteres

## d


```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```


## 2
## d

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```


```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

```sql
UPDATE Actor SET name = "Fernanda Montenegro Atriz", birth_date = "1929-09-19" WHERE id = "003";
```

```sql
UPDATE Actor SET name = "JULIANA PAES" WHERE id = "005";
```

```sql
UPDATE Actor SET name = "Juliana Paes" WHERE id = "005";
```

```sql
UPDATE Actor SET name = "Juliana Paes Atriz", birth_date = "1979-03-25", salary = "700000", gender = "female" WHERE id = "005";
```

```sql
DELETE FROM Actor WHERE name = "Fernanda Montenegro Atriz";
```

```sql
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
```

```sql
SELECT MAX(salary) FROM Actor;
```

```sql
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

```sql
SELECT count(*) from Actor WHERE gender = "female";
```

```sql
SELECT SUM(salary) from Actor;
```

```sql
SELECT COUNT(*), gender FROM Actor GROUP BY gender;
```

```sql
SELECT id, name FROM Actor ORDER BY name DESC;
```

```sql
SELECT * FROM Actor ORDER BY salary;
```

```sql
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
```

```sql
SELECT AVG(salary) as media_salario_genero FROM Actor GROUP BY gender;
```

-- Movie 

```sql
ALTER TABLE Movie ADD playing_limit_date DATE;
```

```sql
ALTER TABLE Movie CHANGE rating rating FLOAT;
```

```sql
UPDATE Movie SET playing_limit_date = "2020-07-08" WHERE id="001";
```

```sql
DELETE FROM Actor WHERE id="001";
```

```sql
UPDATE Movie SET synopsis = "Trocando as informacoes do filme" WHERE id="001";
```
