## Grafbase Products Subgraph

Needs the `DATABASE_URL` env var set and a Postgres deployed with the following schema:

```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  price INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```
