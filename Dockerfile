# FROM node:alpine
# WORKDIR /app
# COPY . .
# EXPOSE 3000
# RUN npm i
# RUN npm run build
# CMD ["npm", "start"]

FROM node:alpine

WORKDIR /app

# Copy package files first to leverage Docker cache
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# The build output should be in /app/.next now
EXPOSE 3000

RUN ls -la /app/.next

CMD ["npm", "start"]