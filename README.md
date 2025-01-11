Docker Commands
Build the Docker Image
bash
Copy code
docker build -t <image-name>:<tag> .
Replace <image-name> and <tag> with your preferred name and version (e.g., myapp:1.0).

Run the Docker Container
bash
Copy code
docker run -d -p <host-port>:<container-port> --name <container-name> <image-name>:<tag>
-d: Run in detached mode (background).
-p: Map host and container ports.
<container-name>: Name for the container.
Stop, Remove, and Restart Containers
Stop a container:
bash
Copy code
docker stop <container-name>
Start a stopped container:
bash
Copy code
docker start <container-name>
Remove a container:
bash
Copy code
docker rm <container-name>
Restart a container:
bash
Copy code
docker restart <container-name>
Volume Management
Create a volume:
bash
Copy code
docker volume create <volume-name>
List all volumes:
bash
Copy code
docker volume ls
Remove a volume:
bash
Copy code
docker volume rm <volume-name>
Use a volume in a container:
bash
Copy code
docker run -d -p <host-port>:<container-port> -v <volume-name>:<container-path> --name <container-name> <image-name>:<tag>
Network Management
Create a custom network:
bash
Copy code
docker network create <network-name>
List all networks:
bash
Copy code
docker network ls
Connect a container to a network:
bash
Copy code
docker network connect <network-name> <container-name>
Disconnect a container from a network:
bash
Copy code
docker network disconnect <network-name> <container-name>
Logs and Debugging
View logs of a container:
bash
Copy code
docker logs <container-name>
Follow logs in real-time:
bash
Copy code
docker logs -f <container-name>
Inspecting Containers and Images
Inspect container details:
bash
Copy code
docker inspect <container-name>
Inspect image details:
bash
Copy code
docker inspect <image-name>:<tag>
Prune Unused Resources
Clean up unused containers, images, and networks:
bash
Copy code
docker system prune
Clean up unused volumes:
bash
Copy code
docker volume prune
Tagging and Pushing Images
Tag an image:
bash
Copy code
docker tag <image-name>:<tag> <repository>/<image-name>:<new-tag>
Push an image to a repository:
bash
Copy code
docker push <repository>/<image-name>:<tag>
Running Interactive Containers
Start an interactive bash shell in a container:
bash
Copy code
docker run -it <image-name>:<tag> /bin/bash
Attach to a running container:
bash
Copy code
docker exec -it <container-name> /bin/bash
Save and Load Images
Save an image to a tar file:
bash
Copy code
docker save -o <file-name>.tar <image-name>:<tag>
Load an image from a tar file:
bash
Copy code
docker load -i <file-name>.tar
Export and Import Containers
Export a running container:
bash
Copy code
docker export -o <file-name>.tar <container-name>
Import a container tar file as an image:
bash
Copy code
docker import <file-name>.tar <new-image-name>:<tag>
Docker Compose
Start services defined in a docker-compose.yml file:
bash
Copy code
docker-compose up
Stop services:
bash
Copy code
docker-compose down
Run services in detached mode:
bash
Copy code
docker-compose up -d
