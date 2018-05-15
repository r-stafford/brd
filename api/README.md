# Overview
Python REST API for the BRD Interview Packet.

## Setup

### Python

 - [Install Python3](https://www.python.org/downloads/) 
 - Install Python dependencies:
    `pip install -r requirements.txt`
 - Start the application:
    `python api.py`

### Docker
 - [Install Docker](https://docs.docker.com/engine/installation/)
 - Build the image:
    `docker build -t brd/flask_api .`
 - Run the app:
```bash
# Non-development purposes
docker run \
--rm \
-p 5000:5000 \
brd/flask_api

# Development (mount local files)
docker run \
--rm \
-p 5000:5000 \
-v $(pwd)/api.py:/flask_api/api.py \
brd/flask_api
```
