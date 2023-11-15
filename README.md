# SquadDeck
Squad Deck is the DoD Product Manager and Software Development Immersive Capstone

# Initial Setup (CAO 14 Nov)
1. Clone this repo
2. cd into the `SquadDeck` directory on your local machine
3. In the `squad-deck` folder, create a new file and name it `.env`
4. Open the `.env` file and paste in the following:
   ```
    REACT_APP_AUTH0_DOMAIN=dev-1onlr4nvradhp354.us.auth0.com
    REACT_APP_AUTH0_CLIENT_ID=HPL4kduB7G6DjvRbeXQ2Qf4xKVdQv9vS
    REACT_APP_AUTH0_CALLBACK_URL=http://localhost:3000/callback
    REACT_APP_AUTH0_CONNECTION=squadDeck-db
   ```
5. Save and close the `.env` file.
6. In the `SquadDeck` directory, create a new folder named `db`
7. cd into the `db` folder and create another folder named `postgres`
8. cd back into the `SquadDeck` directory
9. (Optional) Ensure the `docker` service is running by running the command `docker --version` or `docker -v`
10. (Optional) Ensure the `docker compose` command is installed by running the command `docker-compose --version` or `docker-compose -v`
11. Start all SquadDeck services by entering the command `docker compose up` or `docker-compose up`
12. (Optional/Troubleshooting) If there are issues with the containers coming up, there may be some conflicts with other containers running in your environment. Run the following commands to kill/remove all containers and images that may be causing conflicts:
    * Stop all containers by running the command `docker kill $(docker ps -a -q)`
    * Remove all containers by running the command `docker rm $(docker ps -a -q)`
    * List all images by running the command `docker image ls`
    * Remove images by running the command `docker rmi [REPOSITORY or IMAGE ID]`
13. Once all containers have started, open a browser tab and go to `http://localhost:3000` to validate the React app is running. Open another browser tab and go to `http://localhost:8080` to validate the Express server is running.
14. Enter a shell on the postgres contanier by entering the command `docker exec -it squad-deck-db bash`
15. From the postgress shell prompt, log in by entering `psql -U postgres`
16. Use the psql command `\l` to view the list of databases and validate that the `squad_deck` database is present.
17. When finished, enter `exit` then `exit` again to logout of the postgress shell.
18. (Note) If work on a SquadDeck feature requires installing new node packages, you will need to stop all containers, remove all images, and rebuild everything before the new package(s) will be recognized. Stop all running containers by running `docker compose down` or `docker-compose down`. Once all containers are stopped, remove the containers and images (see Step 12). Rebuild all images and start the service containers by running `docker compose up` or `docker-compose up`.

# Git workflow
WIP
