FROM node:13

ENV PORT 1338
ENV HOME /home/nest

WORKDIR ${HOME}

COPY package*.json ./

RUN npm install
RUN npm install typescript -g
RUN npm install crossenv -g

COPY . .

EXPOSE ${PORT}

CMD [ "npm", "run", "start:dev" ]