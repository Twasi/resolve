FROM alpine

RUN apk add mongodb nodejs nodejs-npm bash

COPY . .

RUN npm install

ENTRYPOINT ["/bin/bash", "./entry.sh"]
