FROM python:3.7-alpine

WORKDIR /app

COPY ./api ./api
RUN pip install -r ./api/requirements.txt

COPY ./data ./data

WORKDIR /app/api
ENTRYPOINT [ "python" ]
CMD ["./server.py"]