FROM node:12.18-alpine
COPY . ./app
WORKDIR /app
RUN npm install
CMD ["node", "index.js"]