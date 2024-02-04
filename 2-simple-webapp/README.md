# Commands

## WORKDIR

Used to specify in what directory we used

```dockerfile
WORKDIR /app
```

## COPY

Used to copy from host to container

```dockerfile
COPY package.json .
```

## CMD

Used to starting point when container start, usually in `shell-exec` form

```dockerfile
CMD ["node", "start"]
```

## Docker build

```sh
docker build -t gawrgare/arc-webapp:latest .
```

## Docker run

```sh
docker run -p 3000:9000 --name first-webapp -d gawrgare/arc-webapp
```
