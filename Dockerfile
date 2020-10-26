FROM node:13

ENV HOME /home/nest

WORKDIR ${HOME}

COPY . .

RUN npm install
RUN npm install typescript -g
RUN npm install crossenv -g


CMD [ "npm", "run", "start:debug" ]