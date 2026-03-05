# Base Node
FROM node:20-alpine

WORKDIR /app

# Copie package.json et package-lock.json
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste du frontend
COPY . .

# Expose le port Vite
EXPOSE 5173

# Lancer Vite
CMD ["npm", "run", "dev", "--", "--host"]