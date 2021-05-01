# obs-views

A simple app to host pages to be added as browser sources to OBS layouts

## Building

Add a `.env` file with variables for the docker-compose as well for the variables whitelisted in the `package.json`

`docker-compose --env-file .env up -d --force-recreate --build`