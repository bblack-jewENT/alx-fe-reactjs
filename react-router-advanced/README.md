# React Router Advanced

This project demonstrates advanced React Router concepts including nested routes, dynamic routing, and protected routes.

## Features

### React Router Integration

- Basic router setup in `App.jsx` with `BrowserRouter` configured in `main.jsx`
- Route configuration using `Routes` and `Route` components

### Nested Routes

- Profile component contains nested routes for:
  - `/profile/details` - ProfileDetails component
  - `/profile/settings` - ProfileSettings component
- Nested routes are handled within the Profile component using relative paths

### Dynamic Routing

- Blog posts with dynamic URLs: `/posts/:id`
- Uses `useParams` hook to access route parameters
- Example: `/posts/1`, `/posts/2`, etc.

### Protected Routes

- ProtectedRoute component wraps routes requiring authentication
- Checks for authentication status in localStorage
- Redirects unauthenticated users to `/login`
- Profile routes are protected and require login

## Route Structure

```
/                     - Home (not implemented)
/login                - Login page
/profile/*            - Protected profile routes
  /profile/details    - Profile details (nested)
  /profile/settings   - Profile settings (nested)
/posts/:id            - Dynamic blog post route
```

## Authentication

Simple authentication simulation using localStorage:

- Login sets `isAuthenticated` to "true"
- Protected routes check this value
- Logout functionality not implemented (can be added)

## Getting Started

```bash
npm install
npm run dev
```

Navigate to the displayed localhost URL to test the routes.

## Testing Routes

1. **Public Routes**: `/posts/1` should display blog post content
2. **Protected Routes**: `/profile` redirects to `/login` if not authenticated
3. **Nested Routes**: `/profile/details` and `/profile/settings` work within profile
4. **Authentication**: Login at `/login` to access protected routes

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
