FROM node:alpine


ARG useruid
ARG appPort=5173

ENV USERNAME=node

ENV TERM=xterm \
    TZ=Europe/Moscow


RUN apk add --no-cache sudo

RUN getent group $useruid || addgroup -g $useruid $USERNAME
RUN getent passwd $useruid || adduser -D -u $useruid -G $USERNAME $USERNAME




RUN mkdir -p /app && chown -R $USERNAME:$USERNAME /app

RUN adduser $USERNAME wheel
RUN echo '%wheel ALL=(ALL) NOPASSWD: ALL' >> /etc/sudoers

RUN npm install -g npm

USER $USERNAME


WORKDIR /app
ENV APP_PORT=$appPort

EXPOSE $APP_PORT

CMD ["sh", "-c", "npm run dev -- --host 0.0.0.0 --port $APP_PORT"]
