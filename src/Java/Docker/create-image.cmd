docker build --no-cache -f SQL\Dockerfile.PostgreSql -t logistika5-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t logistika5-java/app ../../..
