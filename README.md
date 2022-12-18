# Chordage

To build the docker image for the api run the following command from the chordage directory: 
docker image build -f ./api/Dockerfile -t chordage_api:v1 . 

To run the image use the following command: 
docker run -dit -p 5000:5000 --name chordage_api chordage_api:v1

To build the docker image for the client run the following command from the client directory: 
docker image build -t chordage_client:v1 . 

To run the image use the following command:
docker run -dit -p 3300:80 --name chordage_client client:v1
