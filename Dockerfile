# FROM node:alpine
# WORKDIR /app
# COPY . .
# EXPOSE 3000
# RUN npm i
# RUN npm run build
# CMD ["npm", "start"]

FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Build the application
RUN npm run build

# Verify build output exists and set permissions
RUN ls -la /app/.next && chown -R node:node /app/.next

# Switch to non-root user
USER node

EXPOSE 3000

RUN if [ ! -d "/app/.next" ]; then echo ".next directory is missing" && exit 1; fi

CMD ["npm", "start"]