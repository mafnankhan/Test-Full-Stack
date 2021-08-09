FROM node:14.16.1

ARG SKIP_BUILD

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . ./

RUN if [ "$SKIP_BUILD" != 1 ]; then npm run build ; fi

EXPOSE 3000

CMD [ "npm", "start" ]
