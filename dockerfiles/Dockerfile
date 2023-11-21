FROM node:alpine

ENV CI=true

ENV WDS_SOCKET_PORT=0

ARG SERVICE=none

ARG PORT=0

RUN mkdir -p /blogapp/${SERVICE}

COPY ${SERVICE}/. /blogapp/${SERVICE}

WORKDIR /blogapp/${SERVICE}

RUN npm install

EXPOSE ${PORT}

CMD ["npm", "start"]