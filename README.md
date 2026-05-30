# College Discovery Platform

A full-stack web application that helps students discover, compare, and save colleges based on placements, fees, ratings, courses, and reviews.

## Features

### College Discovery

* Search colleges by name
* Filter by location
* Filter by college type
* Sort by rating, fees, placements, and median package
* Pagination support

### College Details

* Detailed college information
* Placement statistics
* Course offerings
* Student reviews

### College Comparison

* Compare up to 3 colleges
* Side-by-side comparison table
* Save comparison sets
* Access saved comparisons later

### Authentication

* User registration
* User login
* JWT-based authentication
* Persistent login sessions

### Saved Colleges

* Save favorite colleges
* View saved colleges
* Remove saved colleges

### Saved Comparisons

* Save named comparison sets
* Open saved comparisons
* Delete saved comparisons

---

## Tech Stack

### Frontend

* React
* React Router DOM
* Zustand
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcrypt

### Database

* PostgreSQL
* Neon Database

---

## Project Structure

### Frontend

```bash
frontend/
├── src/
│   ├── api/
│   ├── components/
│   ├── pages/
│   ├── routes/
│   ├── store/
│   └── App.jsx
```

### Backend

```bash
backend/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── routes/
│   ├── services/
│   └── server.js
```

---

## API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/me
```

### Colleges

```http
GET /api/colleges
GET /api/colleges/:id
GET /api/colleges/meta
POST /api/colleges/compare
```

### Saved Colleges

```http
GET    /api/saved
POST   /api/saved/:collegeId
DELETE /api/saved/:collegeId
```

### Saved Comparisons

```http
GET    /api/comparisons
POST   /api/comparisons
DELETE /api/comparisons/:id
```

---

## Local Setup

### Clone Repository

```bash
git clone <repository-url>
cd project
```

### Backend Setup

```bash
cd backend

npm install

npm run dev
```

Create a `.env` file:

```env
DATABASE_URL=your_neon_database_url
JWT_SECRET=your_secret_key
PORT=5000
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000/api
```

---

## Future Improvements

* College ranking system
* AI-powered recommendations
* Recently viewed colleges
* College image galleries
* Advanced analytics dashboard

---

## Author

Built as a full-stack internship project using React, Node.js, PostgreSQL, and Neon.
