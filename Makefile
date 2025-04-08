# Команда для установки пакетов npm
node-install:
	docker-compose exec --rm node npm install

up:
	docker-compose up -d

to:
	docker-compose exec app /bin/sh

init: vue-init install
	docker-compose run --service-ports app


vue-init:
	docker-compose run app npm init vue@latest . -- --name app
install:
	docker-compose run app npm install
