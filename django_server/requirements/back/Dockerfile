FROM python:3.12-alpine3.21

WORKDIR /app


COPY ./requirements.txt .

RUN apk add --no-cache postgresql-dev gcc g++ python3-dev musl-dev
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

RUN django-admin startproject mysite .
RUN mkdir -p /app/.static /app/tools /app/.media

COPY ./server_app/ /app/
COPY ./tools/script.sh /app/tools/

RUN chmod +x /app/tools/script.sh

EXPOSE 8000

ENTRYPOINT ["sh", "/app/tools/script.sh"]
CMD [ "daphne", "-b", "0.0.0.0", "-p", "8000", "mysite.asgi:application" ]