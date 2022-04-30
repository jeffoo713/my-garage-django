FROM python:3.9-alpine3.13
LABEL maintainer="kimmjaemin@gmail.com"

ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /requirements.txt
COPY ./server /server
COPY ./scripts /scripts

WORKDIR /server
EXPOSE 8000

RUN python -m venv /env && \
    /env/bin/pip install --upgrade pip && \  
    apk add --update --no-cache postgresql-client && \
    apk add --update --no-cache --virtual .tmp-deps build-base musl-dev postgresql-dev linux-headers && \
    /env/bin/pip install -r /requirements.txt && \
    apk del .tmp-deps && \
    adduser --disabled-password --no-create-home server && \
    mkdir -p /vol/web/static && \
    chown -R server:server /vol && \
    chmod -R 755 /vol && \
    chmod -R +x /scripts

ENV PATH="/scripts:/env/bin:$PATH"

USER server

CMD ["run.sh"]