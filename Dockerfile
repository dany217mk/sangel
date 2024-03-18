FROM python:3.11-slim

WORKDIR /app

COPY poetry.lock pyproject.toml /app/
RUN pip3 install poetry
RUN poetry config virtualenvs.create false
RUN poetry install --no-dev

COPY ./ .

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]