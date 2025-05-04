Create `.env` and `redis.conf` files in `apps/server`

```bash
# .env
NODE_ENV=development
PORT=8023
CLIENT_ORIGIN=http://localhost:3023

REDIS_HOST=redis
REDIS_PORT=6379
REDIS_PASSWORD=password
CACHE_SERVICE_SLEEP_TIME_IN_MINUTES=10
```

```bash
# redis.conf
requirepass password
port 6379
bind 0.0.0.0
```
