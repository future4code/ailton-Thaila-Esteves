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

