docker rm -f angular
docker run -d --name angular   -v $PWD:/var/www   -it $1
