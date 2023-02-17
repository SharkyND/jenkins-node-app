FROM jenkins/agent:alpine-jdk11
USER root
RUN apk update
RUN apk add --update docker openrc
RUN rc-update add docker boot
