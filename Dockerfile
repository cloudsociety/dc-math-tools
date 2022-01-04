FROM node:14-alpine

EXPOSE 3333

# Chromium is so Stencil builds
RUN apk --no-cache add git chromium

WORKDIR /app

COPY package*.json ./
RUN npm install && npm cache clean --force

COPY . .

# Because Stencil builds to JS files and not
# an app, CMD might not be necessary
# CMD [ "node", 'index.js' ]
