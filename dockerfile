FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

WORKDIR /app/server

RUN npm install -g prisma

RUN npx prisma generate --schema=./prisma/schema.prisma

EXPOSE 3001

CMD ["sh", "-c", "while ! nc -z postgres 5432; do echo 'Waiting for database connection...'; sleep 1; done && npx prisma migrate deploy --schema=../prisma/schema.prisma && node server.js"]
