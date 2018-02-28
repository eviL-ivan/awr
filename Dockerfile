FROM mhart/alpine-node:9.6.1
WORKDIR /usr/src/app

RUN npm i lerna -g --loglevel notice

COPY . /usr/src/app

RUN lerna bootstrap
RUN lerna run build

EXPOSE 3000

CMD [ "lerna", "run", "start" ]