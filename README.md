# 🏆 Champions League API with Jenkins CI/CD & Docker

A simple Node.js REST API that provides UEFA Champions League data, fully containerized with Docker and integrated with a Jenkins Continuous Integration (CI) pipeline.

This project demonstrates how to automate building, testing, and deploying a Dockerized Node.js application using Jenkins.

---

## 📌 Features

* ⚽ REST API for Champions League teams
* ❤️ Health check endpoint
* 🐳 Dockerized Node.js application
* 🔄 Jenkins CI Pipeline
* ✅ Automated endpoint testing
* 🚀 Easy deployment using Docker

---

## 🛠 Tech Stack

* Node.js
* Express.js
* Docker
* Jenkins
* Git & GitHub
* Linux (Ubuntu VM)

---

## 📁 Project Structure

```
.
├── app.js
├── package.json
├── Dockerfile
├── Jenkinsfile
├── test.js
├── routes/
├── data/
└── README.md
```

---

## 🚀 API Endpoints

### Health Check

```
GET /health
```

Response

```json
{
  "status": "OK"
}
```

---

### Get Teams

```
GET /api/teams
```

Example Response

```json
[
  {
    "name": "Real Madrid",
    "country": "Spain"
  },
  {
    "name": "Manchester City",
    "country": "England"
  }
]
```

---

# 🐳 Running the Project with Docker

## Build the Docker Image

```bash
docker build -t championsleague-app .
```

## Run the Container

```bash
docker run -d \
-p 3000:3000 \
--name app \
championsleague-app
```

The application will be available at

```
http://<VM_IP>:3000
```

Example

```
http://192.168.56.101:3000
```

---

# 🧪 Running Tests

Execute

```bash
npm test
```

The automated test verifies:

* `/health`
* `/api/teams`

The pipeline fails automatically if any endpoint is unavailable.

---

# ⚙ Jenkins Pipeline

The Jenkins pipeline performs the following stages:

## 1. Checkout

Clones the latest code from GitHub.

## 2. Build Docker Image

Builds a fresh Docker image.

```bash
docker build
```

---

## 3. Run Container

Stops the previous container (if it exists) and starts a new one.

```bash
docker rm -f app
docker run -d -p 3000:3000 --name app championsleague-app
```

---

## 4. Run Automated Tests

Runs endpoint tests to ensure the application is working correctly.

If any test fails, the Jenkins build is marked as **FAILED**.

---

# 📊 CI/CD Workflow

```
Developer
     │
     ▼
Push Code to GitHub
     │
     ▼
 Jenkins Pipeline
     │
     ├───────────────┐
     ▼               │
Checkout             │
     ▼               │
Docker Build         │
     ▼               │
Run Container        │
     ▼               │
Run Tests            │
     ▼               │
Success / Failure ◄──┘
```

---

# 📷 Expected Jenkins Pipeline

```
✔ Checkout

✔ Build Docker Image

✔ Run Container

✔ Run Tests

SUCCESS
```

---

# 💻 Local Development

Install dependencies

```bash
npm install
```

Run the application

```bash
node app.js
```

---

# 📋 Prerequisites

* Docker
* Jenkins
* Node.js 18+
* Git
* Ubuntu/Linux VM

---

# 📈 Future Improvements

* Docker Compose
* Jenkins Agents
* GitHub Webhooks
* SonarQube Integration
* Docker Hub Image Publishing
* Kubernetes Deployment
* GitHub Actions Workflow
* Production Deployment

---

# 👨‍💻 Author

**Ayman Osama**

GitHub:
https://github.com/Ayman5252

LinkedIn:
https://www.linkedin.com/in/ayman-osama-73b47626a/

Gmail: 
aymosam6@gmail.com

---

## ⭐ If you found this project useful, consider giving it a star!
