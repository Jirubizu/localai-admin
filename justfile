run:
    @echo "Running the app"
    npm run dev

docker-up:
    @echo "Running the app in docker"
    docker compose up -d --build

docker-down:
    @echo "Stopping the app in docker"
    docker compose down

docker-logs:
    @echo "Showing the logs of the app in docker"
    docker compose logs -f

docker-build:
    @echo "Building the app in docker"
    docker build -t localai-admin-web-ui .

docker-run:
    @echo "Running the app in docker"
    docker run -dp 8089:8089 localai-admin-web-ui

