FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm install -g prisma

RUN npx prisma generate --schema=./prisma/schema.prisma

WORKDIR /app/server

RUN apt-get update && apt-get install -y netcat-openbsd

EXPOSE 3001

CMD ["sh", "-c", "while ! nc -z db 5432; do echo 'Waiting for database connection...'; sleep 1; done && npx prisma migrate deploy --schema=../prisma/schema.prisma && node app.js"]
