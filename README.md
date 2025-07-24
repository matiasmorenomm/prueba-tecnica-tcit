# Prueba Tecnica TCIT

Entorno de desarrollo:

- **Backend**: Node Js + Express
- **Frontend**: React + Redux
- **Database**: PostgreSQL

## Requisitos

- Docker y Docker Compose

### Levantar Ambiente

1. Clonar repositorio:

```bash
git clone https://github.com/matiasmorenomm/prueba-tecnica-tcit.git
```

2. Acceder al proyecto:

```bash
cd prueba-tecnica-tcit
```

3. Crear archivo .env (Copiar .env.example)

```bash
cp .env.example .env
```

4. Levantar servicios con docker

```bash
docker-compose up -d
```

### Accesos

- Frontend: http://localhost:3000
- Backend: http://localhost:3001
- Base de datos: Puerto 5432
