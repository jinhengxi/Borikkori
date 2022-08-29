FROM node:alpine

ENV PORT 3000

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY ./ ./

ENV NODE_ENV production

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]