FROM golang:alpine

LABEL maintainer="Huadong Zuo <admin@zuohuadong.cn>"

RUN echo http://mirrors.ustc.edu.cn/alpine/v3.6/main > /etc/apk/repositories; \
echo http://mirrors.ustc.edu.cn/alpine/v3.6/community >> /etc/apk/repositories

RUN /sbin/ip route|awk '/default/ { print  $3,"\tdockerhost" }' >> /etc/hosts

ENV http_proxy http://dockerhost:8118
ENV https_proxy https://dockerhost:8118

RUN apk add --no-cache \
    openssh \
    git \
    build-base && \
    go get github.com/abiosoft/caddyplug/caddyplug \
    && caddyplug install-caddy \
    apk del build-base

ARG plugins="cors"

## ARG plugins="cors cgi cloudflare azure linode"

RUN caddyplug install ${plugins}

RUN apk add --no-cache inotify-tools \
    && echo -e "#!/bin/sh\nwhile inotifywait -e modify /etc/caddy; do\n\tpkill caddy\ndone " >> /start.sh \
    && chmod +x /start.sh

EXPOSE 80 443

WORKDIR /var/www/public

CMD ["sh","-c","/start.sh & /usr/bin/caddy -conf /etc/caddy/Caddyfile -agree"]
