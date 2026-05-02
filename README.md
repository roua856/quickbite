# 🍕 QuickBite

A simple food ordering application built with React and Node.js.

## Description
QuickBite allows customers to browse a restaurant menu and place orders easily.

## Architecture
- **Frontend**: React (port 80)
- **Backend**: Node.js + Express (port 3001)
- **CI**: GitHub Actions
- **CD**: ArgoCD + Kubernetes
- **Security**: Trivy
- **Monitoring**: Prometheus + Grafana

## Project Structure
quickbite/
├── frontend/         # React application
├── backend/          # Node.js API
├── docker/           # Docker files
├── k8s/              # Kubernetes manifests
└── .github/          # CI/CD pipelines
└── workflows/

## API Endpoints
- `GET /menu` — returns list of dishes
- `POST /orders` — place an order
- `GET /orders` — get all orders

## How to run locally
```bash
# Backend
cd backend
npm install
npm start

# Frontend
cd frontend
npm install
npm start
```

## Docker
```bash
docker-compose up
```