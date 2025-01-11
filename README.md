
# DOCKER COMMANDS 

 MOST USED DOCKER COMMANDS EVERY DEVELOPERS NEED.

# Build the Docker Image
docker build -t <image-name>:<tag> .

# Run the Docker Container
docker run -d -p <host-port>:<container-port> --name <container-name> <image-name>:<tag>

# Stop, Remove, and Restart Containers
docker stop <container-name>
docker start <container-name>
docker rm <container-name>
docker restart <container-name>

# Volume Management
docker volume create <volume-name>
docker volume ls
docker volume rm <volume-name>
docker run -d -p <host-port>:<container-port> -v <volume-name>:<container-path> --name <container-name> <image-name>:<tag>

# Network Management
docker network create <network-name>
docker network ls
docker network connect <network-name> <container-name>
docker network disconnect <network-name> <container-name>

# Logs and Debugging
docker logs <container-name>
docker logs -f <container-name>

# Inspecting Containers and Images
docker inspect <container-name>
docker inspect <image-name>:<tag>

# Prune Unused Resources
docker system prune
docker volume prune

# Tagging and Pushing Images
docker tag <image-name>:<tag> <repository>/<image-name>:<new-tag>
docker push <repository>/<image-name>:<tag>

# Running Interactive Containers
docker run -it <image-name>:<tag> /bin/bash
docker exec -it <container-name> /bin/bash

# Save and Load Images
docker save -o <file-name>.tar <image-name>:<tag>
docker load -i <file-name>.tar

# Export and Import Containers
docker export -o <file-name>.tar <container-name>
docker import <file-name>.tar <new-image-name>:<tag>

# Docker Compose
docker-compose up
docker-compose down
docker-compose up -d
