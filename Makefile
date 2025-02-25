run-docker-developer:
	docker-compose -f docker-compose.developer.yml up --build
run-docker-deploy:
	docker-compose -f docker-compose.deploy.yml up --build