# Commands

To get started, we can type docker in the terminal and it will show all of the commands available, you can also add `--help` to get more detail information

## Process

```sh
docker ps
```

## See system usage

```sh
docker system df
```

## Inspect Container

```sh
docker inspect <CONTAINER_ID>
```

## Get Image from dockerhub

```sh
docker pull <IMAGE_NAME>
```

If you want to get specific version, you can add `:TAG_VERSION`

```sh
docker pull <IMAGE_NAME:TAG_VERSION>
```

## See list of images

```sh
docker images
```

## Run an image

```sh
docker run hello-world
```

we always want to use container_name to avoid confusion we can add the `--name` to specify it

```sh
docker run --name -it first-container hello-world 
```

## Execute command in the container

```sh
docker exec -it <CONTAINER_NAME/ID> <COMMAND_YOU_WANT_TO_EXECUTE>
```

For example, let's say we want to run shell in ubuntu

```sh
docker pull ubuntu
docker run -it ubuntu bash
```

## Remove Container

```sh
docker rm <CONTAINER_NAME/ID>
```
