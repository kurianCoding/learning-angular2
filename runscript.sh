docker rm -f angular
docker run -d --name angular -h angular -p 3001:3001 -v $PWD:/var/www   -it $1
