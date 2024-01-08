# Використовуємо офіційний образ Node.js
FROM node:16

# Визначаємо робочий каталог в контейнері
WORKDIR /usr/src/app

# Копіюємо package.json та package-lock.json та встановлюємо залежності
COPY package*.json ./
RUN npm install

# Копіюємо решту файлів у робочий каталог
COPY . .

# Відкриваємо порт, на якому працює ваш сервер
EXPOSE 8001

# CMD ["npm", "start"] # додаємо цей рядок
CMD ["npm", "start"]
