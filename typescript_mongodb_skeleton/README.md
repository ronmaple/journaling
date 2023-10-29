# Production Grade TypeScript project
A highly over-engineered production grade typescript mongodb starter kit for my personal projects

<i>**(work in progress as of Oct 29)**</i>

## Requirements
- Docker
- Node (I'm currently using `20.7.0`)


## Setup
- Start mongodb container `docker-compose up -d`
- Npm install and `npm run dev`

## Features:
- mongodb container
- mongo-express (table viewer) on port `8081`

## Todo's:
- add Jest
- add an ec2 deploy script
- add a caching layer?
- environment vars
- basic express CRUD setup with mongodb/mongoose