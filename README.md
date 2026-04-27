# 🍕 QuickBite

A simple food ordering application built with React and Node.js.

## Architecture
- **Frontend**: React
- **Backend**: Node.js + Express
- **CI**: GitHub Actions
- **CD**: ArgoCD + Kubernetes
- **Security**: Trivy
- **Monitoring**: Prometheus + Grafana

## Project Structure
quickbite/
├── frontend/    # React application
├── backend/     # Node.js API
├── docker/      # Docker files
├── k8s/         # Kubernetes manifests
└── .github/     # CI/CD pipelines


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