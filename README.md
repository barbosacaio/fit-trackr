# 🍗 FitTrackr

**FitTrackr** is a personal project motivated by my current hobbies and code-related studies. The goal is to have a fully working application running on the web that allows you to manage your **diet, meals, workout plans and track results** with a responsive design to allow easy day-to-day mobile use. This project was made for educational reasons as well as to fullfill the need of a free alternative to provide all these functionalities.

## 🏗️ Project Status: `development`

## 📋 Functions

- Diet planner
- Meal logs with macronutrients
- Customized preset meals/food items
- Workout planner
- Workout logs
- Dynamic progress charts
- JWT authentication
- User management
- Role-based permission system

## 🛠️ Tech Stack

- **Front-end**
  <p align="center">
    <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React">
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
    <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  </p>

- **Back-end**
  <p align="center">
    <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js">
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  </p>

- **Database**
  <p align="center">
    <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL">
  </p>

- **ORM**
  <p align="center">
    <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="Prisma">
  </p>

- **Authentication**
  <p align="center">
    <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" alt="JWT">
  </p>

## 🔗 Relationships

- **User** 1:N **Diet Plan**
- **User** N:N **Meal**
- **User** N:N **Workout Plan**
- **User** N:N **Workout**
- **Diet Plan** N:N **Meal**
- **Workout** Plan N:N **Workout**
- **Meal** N:N **Food Item**

## ❔ How To Run

- [Clone the project](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

- Access the project and install the required dependencies

```bash
cd fit-trackr
npm install
```

## 👤 Author

- [@barbosacaio](https://github.com/barbosacaio)
