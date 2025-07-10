# Gunakan image resmi Node.js sebagai base
FROM node:20-alpine

# Atur direktori kerja di dalam container
WORKDIR /app

# Salin package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin semua source code
COPY . .

# Build Next.js (output akan ke .next)
RUN npm run build

# Port default Next.js
EXPOSE 3000

# Perintah menjalankan aplikasi
CMD ["npm", "start"]
