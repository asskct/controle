FROM mhart/alpine-node:12
WORKDIR /app
COPY package*.json /app/
RUN npm install --silent --progress=false
COPY . /app/
EXPOSE 3000
CMD ["npm", "start"]