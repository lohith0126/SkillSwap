# SkillSwap

SkillSwap is a full-stack MERN web platform for peer-to-peer skill exchange. Users can connect with each other, chat in real-time, and share expertise across various skill categories — completely free of cost.

## Features

- **Google OAuth 2.0 + JWT Authentication** — Secure login and session management
- **Real-time Chat** — Powered by Socket.io for instant messaging between connected peers
- **Skill-based Discovery** — Find and connect with people based on skills
- **Rating & Feedback System** — Rate peers after skill exchange sessions
- **Meeting Scheduler** — Request meetings via email using Nodemailer
- **Profile Management** — Upload profile photo via Cloudinary, add education, projects and skills
- **Docker Support** — Containerized with Docker and Docker Compose for easy setup

## Tech Stack

- **Frontend:** React.js, React Router, Context API, React-Bootstrap, Axios, Socket.io-client
- **Backend:** Node.js, Express.js, MongoDB Atlas, Mongoose, Socket.io, JWT, Passport.js
- **Tools:** Cloudinary, Nodemailer, Docker, Google OAuth, Git, GitHub, Postman

## Installation

### Prerequisites

- Node.js
- Git
- MongoDB Atlas account
- Google Cloud Console account (for OAuth)
- Cloudinary account
- Gmail App Password (for Nodemailer)

### Clone the Repository

```bash
git clone https://github.com/lohith0126/SkillSwap
cd SkillSwap
```

### Backend Setup

```bash
cd Backend
npm install
```

Create `.env` file in the `Backend` folder:

```env
PORT = 8000
CORS_ORIGIN = *
MONGODB_URI = mongodb+srv://<your-username>:<your-password>@cluster0.<your-project>.mongodb.net

CLOUDINARY_CLOUD_NAME = <your-cloudinary-cloud-name>
CLOUDINARY_API_KEY = <your-cloudinary-api-key>
CLOUDINARY_API_SECRET = <your-cloudinary-api-secret>

GOOGLE_CLIENT_ID = <your-google-client-id>
GOOGLE_CLIENT_SECRET = <your-google-client-secret>
GOOGLE_CALLBACK_URL = http://localhost:8000/auth/google/callback

JWT_SECRET = <your-jwt-secret>

EMAIL_ID = <your-email-id>
APP_PASSWORD = <your-app-password>
```

Run backend:

```bash
npm run dev
```

Backend runs on `http://localhost:8000`

### Frontend Setup

```bash
cd Frontend
npm install
```

Create `.env` file in the `Frontend` folder:

```env
VITE_LOCALHOST = http://localhost:8000
VITE_SERVER_URL = http://localhost:8000
```

Run frontend:

```bash
npm run dev
```

Frontend runs on `http://localhost:5173`

### Docker Setup (Alternative)

Create `docker-compose.yml` in the root folder and fill in your credentials, then run:

```bash
docker-compose up --build
```

To stop and remove containers:

```bash
docker-compose down --rmi all
```

## Deployment

Backend and Frontend are deployed on Render.

## Author

Lohith Reddy Thotli  
[GitHub](https://github.com/lohith0126) | [LinkedIn](https://www.linkedin.com/in/lohithreddythotli/) | [LeetCode](https://leetcode.com/u/lohith0126/)
