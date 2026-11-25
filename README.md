# cronos-web
## Desenvolvimento local

- Suba antes a API (cronos-api, porta 4001) e o Postgres central `infra-db`.
- `npm install && npm run dev -- --host 0.0.0.0 --port 5173`
- Acesse http://cronos.i4local (Caddy → 5173). A API de dev vem de `.env.development` (`VITE_BASE_URL=http://cronos-api.i4local`); um `.env.local` sobrepõe.
