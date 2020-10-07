FROM node:12.18-alpine
ENV NEW_RELIC_NO_CONFIG_FILE=true
COPY . ./app
WORKDIR /app
RUN npm install
CMD ["node", "index.js"]