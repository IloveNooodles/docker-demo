# Dockerfile

generally dockerfile should be named with the capital `D`, `Dockerfile`, but you can always specify the name of docker file when you want to bulid. We will build from scratch based on this guide [postgres dockerhub](https://hub.docker.com/_/postgres)

## From

From is specify what a base image will be used for our dockerfile

```sh
FROM postgres:latest
FROM redis:alpine
```

## ENV

ENV will add the environment when building the image, the env then will be created in the container

```sh
ENV a=b
```

## Build

We ALWAYS want to specify tag_version when it comes to building container. Usually we use the layout `username/our_program_name:version` for creating an image

```sh
docker build -t gawrgare/arc-database:1.0 .
```

## Port forwarding

```sh
docker run --name first-arc-database -p 8000:5432 arc-postgresql:latest
```

## Running in detach mode

```sh
docker run --name first-arc-database -d arc-postgresql:latest
```
