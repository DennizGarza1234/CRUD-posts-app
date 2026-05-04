# CRUD Posts App (Expo + TanStack Query)

## Project Overview

This project is a mobile application built using React Native with Expo and TanStack Query. It demonstrates full CRUD (Create, Read, Update, Delete) operations using the JSONPlaceholder API. The application also includes filtering functionality and both full and partial updates using PUT and PATCH requests.

The goal of this project is to demonstrate understanding of API integration, asynchronous data handling, and state management using TanStack Query.

---

## Features

- Fetch and display posts from an external API
- Create new posts using POST requests
- Fully update posts using PUT requests
- Partially update posts using PATCH requests
- Delete posts using DELETE requests
- Filter posts by user ID
- Modal-based editing interface
- Automatic UI updates using query invalidation

---

## Technologies Used

- React Native
- Expo
- TanStack Query
- Axios
- TypeScript
- JSONPlaceholder API

---

## Project Structure

app/
_layout.tsx
index.tsx

src/
api/
posts.ts
hooks/
usePosts.ts
components/
PostForm.tsx
PostList.tsx
FilterBar.tsx
EditModal.tsx


---

## Installation and Setup

### 1. Install dependencies

npm install


### 2. Install required packages

npm install @tanstack/react-query axios


### 3. Start the development server

npx expo start


---

## How to Use

1. The app loads all posts from the API automatically.
2. Use the input field to filter posts by user ID.
3. Add a new post using the form.
4. Click edit to open the modal for updating or patching a post.
5. Use delete to remove a post from the list.

---

## API Endpoints Used

- GET https://jsonplaceholder.typicode.com/posts
- POST https://jsonplaceholder.typicode.com/posts
- PUT https://jsonplaceholder.typicode.com/posts/{id}
- PATCH https://jsonplaceholder.typicode.com/posts/{id}
- DELETE https://jsonplaceholder.typicode.com/posts/{id}

---

## Key Concepts Demonstrated

- React Query data fetching with useQuery
- Mutations with useMutation
- Query invalidation for automatic UI updates
- Controlled form inputs
- Modal-based editing system
- Filtering and derived query data

---

## Youtube
