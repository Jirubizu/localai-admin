# LocalAi Admin Web UI

## Change localai instance url in `src/main.ts`
This is a temporary solution, will be fixed in the future.

## Adding new jobs to the jobs gallery
While waiting on a wait to call the localai api to get the list of jobs, you can add new jobs to the gallery by adding a new entry to the `jobs` array in `src/components/JobGallery.vue`. The `jobs` array is a list of objects with the following properties:

## Usage
### Preferred method (Docker Compose)
```bash
just docker-up

# or
docker compose up -d --build
```

### Alternative method (Docker)
```bash
just docker-build
just docker-run

# or
docker build -t localai-admin-web-ui .
docker run -d -p 8080:80 --name localai-admin-web-ui localai-admin-web-ui
```

### Alternative method
```bash
just run

# or
npm run dev
```