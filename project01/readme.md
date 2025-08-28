# User Management REST API

This is a simple **User Management** application built using **Node.js**, **Express**, and **MongoDB**. The app demonstrates CRUD operations and exposes a RESTful API for managing users.  

---

## Features

- Render HTML page for `/users`
- REST API endpoints for CRUD operations
- Store user data in MongoDB
- JSON responses for API routes

---

## REST API Endpoints

### HTML Route

| Method | Route    | Description                  |
|--------|----------|------------------------------|
| GET    | /users   | Render HTML page with users  |

### API Routes

| Method | Route             | Description                   |
|--------|-----------------|-------------------------------|
| GET    | /api/users       | List all users (JSON)         |
| GET    | /api/users/:id   | Get a specific user by ID     |
| POST   | /api/users       | Create a new user             |
| PATCH  | /api/users/:id   | Edit a user by ID             |
| DELETE | /api/users/:id   | Delete a user by ID           |

**Examples:**  

- `GET /api/users/1` → Get user with ID 1  
- `PATCH /api/users/1` → Update user with ID 1  
- `DELETE /api/users/1` → Delete user with ID 1  

---

## Installation

1. Clone the repository:

```bash
git clone lavlesh349/node_learn/edit/main/project01
