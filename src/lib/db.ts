import { PUBLIC_SURREALDB_DB, PUBLIC_SURREALDB_NS, PUBLIC_SURREALDB_PASS, PUBLIC_SURREALDB_URL, PUBLIC_SURREALDB_USER } from '$env/static/public';
import { Cirql } from 'cirql';

export const db = new Cirql({
    connection: {
        endpoint: PUBLIC_SURREALDB_URL,
        namespace: PUBLIC_SURREALDB_NS,
        database: PUBLIC_SURREALDB_DB,
    },
    credentials: {
        user: PUBLIC_SURREALDB_USER,
        pass: PUBLIC_SURREALDB_PASS,
    }
});