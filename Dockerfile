FROM node:14.8.1-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
EXPOSE 3000
CMD ["npm", "start"]
