# Портфолио — Алексей Белоусов

Сайт-визитка: backend-разработка + репетиторство. React + Vite + TypeScript + Tailwind CSS v4 + Framer Motion. Переключение RU/EN и светлой/тёмной темы, без бэкенда — чистый статический сайт.

## Перед публикацией — обязательно

Откройте [src/siteConfig.ts](src/siteConfig.ts) и замените:

- `telegram` — ссылку на ваш Telegram (например `https://t.me/username`)
- `whatsapp` — ссылку вида `https://wa.me/79991234567` (код страны + номер, без `+` и пробелов)
- при необходимости `email`

Весь остальной текст — в [src/content.ts](src/content.ts) (отдельно `ru` и `en`).

## Запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

Результат — статические файлы в `dist/`, их можно разместить на любом хостинге.

## Продакшен

Сайт живёт на `https://belousov-alex.ru` (сервер `159.194.206.141`, тот же хост, что и проект ARTAI).

- **Контейнер:** `deploy/docker-compose.yml` + `deploy/nginx-site.conf` — раздают статику из `/opt/belousov-portfolio/dist` внутри `nginx:alpine`, контейнер `belousov-portfolio-web`, подключён к сети `artai_default`.
- **TLS/маршрутизация:** отдельный сертификат Let's Encrypt на `belousov-alex.ru`/`www.belousov-alex.ru`, порт 80/443 общий с ARTAI — маршрутизация по `server_name` в `/opt/artai/nginx.conf` (общий nginx). Справочная копия добавленных блоков — `deploy/shared-nginx-snippet.conf`.
- **CI/CD:** `.github/workflows/deploy.yml` — при пуше в `master`/`main` собирает проект и заливает `dist/` на сервер по `rsync` через SSH. Секреты в репозитории: `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_SSH_KEY` (отдельный ключ, только для этого репозитория).

**Важно:** `/opt/artai/nginx.conf` — общий файл с проектом ARTAI. Менять его только через `append` (`>>` / `ssh ... "cat >> file" < local`), никогда через `scp`/перезапись файла целиком — иначе Docker потеряет bind-mount на существующий inode и сайт ARTAI придётся поднимать через `docker restart artai-nginx`.
