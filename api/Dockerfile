FROM python:3-alpine

#############################
# Install Python Dependencies
#############################
RUN mkdir /flask_api

WORKDIR /flask_api

COPY requirements.txt .

RUN pip install -r requirements.txt

##################
# Copy Source Code
##################
COPY api.py /flask_api


###############################
# Expose the default flask port
###############################
EXPOSE 5000

###############################
# Entrypoint to start flask api
###############################
CMD ["python", "api.py"]
