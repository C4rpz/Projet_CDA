# docker/backend/Dockerfile
FROM node:20-alpine

WORKDIR /app

# 1. Dépendances seulement (cache layer)
COPY package.json ./
RUN npm install

# 2. Le reste du code (sans node_modules)
COPY . .

# Prisma client généré pour l’arch Linux
RUN npx prisma generate --schema=./prisma/schema.prisma

# Attente DB + migration puis lancement serveur
RUN apk add --no-cache netcat-openbsd
EXPOSE 3001
CMD sh -c ' \
   while ! nc -z db 3306; do echo "Waiting for database…"; sleep 1; done && \
   npx prisma migrate deploy --schema=./prisma/schema.prisma && \
   node server/app.js'
