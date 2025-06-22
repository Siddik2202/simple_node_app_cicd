## This is simple node js app, 

There Have a form and backend connection with mysql. 

when You submit the form then the data will store in mysql db.

### Here are the step to run on docker with EC2 instance server

i) Host a instance then clone you repository from your github

ii) Create Dockerfile for your project

iii) update your nodeServer/index.js to Docker, MySQL runs in another container, accessible via a container name like db. especially important when running in Docker

iv) It's better to use docker-compose other you need to run seperately db and app after create docker images.

v) Then create docker-compose.yml file,here we pass environment two times because db environment work for itself. and app environment works for pass the value with app.

vi) Here we use healthcheck for avoing error Econnrefused Error, means app run befor db or mysql ready.

vii) Then run docker-compose file docker compose up / -d for remove use docker compose down.

Thank You So much !
