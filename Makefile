run:
	docker run -d -it -p 8080:80 --rm --name vuejs-meal-1 vuejs-meal
stop:
	docker stop vuejs-meal-1