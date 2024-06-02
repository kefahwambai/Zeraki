FROM alpine:3.19

RUN apk --no-cache add nodejs npm

COPY . /zeraki
WORKDIR /zeraki
RUN npm install

CMD ["npm", "start"]