FROM node:slim

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
COPY package*.json ./

RUN npm install
# If you are building your code for production.
RUN npm ci --omit=dev

# Bundle application source.
COPY . .

EXPOSE 8081
# This allows the usage of CTRL-C as it wraps the command with a shell.
ENTRYPOINT ["npm", "start"]
