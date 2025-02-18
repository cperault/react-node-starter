# Fullstack Starter App
This is a fullstack starter template to help you quickly get started creating a web app.

# Frontend
- React, TypeScript, React Router, Redux Toolkit, MUI + MUI Icons, Vite

```
.
├── eslint.config.js
├── index.html
├── package.json
├── public
│   ├── 404.svg
│   └── cat.svg
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── ErrorBoundary.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   ├── NotFound.tsx
│   │   ├── PageContainer.tsx
│   │   └── PageHeader.tsx
│   ├── constants
│   │   └── app.ts
│   ├── main.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   └── PageTwo.tsx
│   ├── providers
│   │   ├── ThemeProvider.tsx
│   │   └── ToastProvider.tsx
│   ├── redux
│   │   ├── apiSlice.ts
│   │   └── store.ts
│   ├── shared
│   ├── theme.ts
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

I've preconfigured things in a way I believe is conducive to keeping a clear separation of concerns, enforcing modularity via reusable components and helper functions, centralized state management, and type safety. Of course, this all makes it easier for maintainability, extensibility, and following good principles.

As outlined in the tree above, I've provided:

## Root configuration files (frontend)
- `declarations.d.ts`: allows use of SVG files; can be extended to support other extensions as needed, e.g., `*.PDF`, `*.PNG`, etc.
- `eslint.config.js`: recommended ESLint code quality and styling guidelines for TypeScript and React
- `index.html`: the "entry point" or base HTML file in which the React application script is contained within the DOM
- `package.json`: the configured React project metadata file which also includes the frontend's npm scripts and dependencies
 - Contains the single source of truth for `displayName` and `version`, referenced in the `constants` and displayed in `Footer.tsx`
- `tsconfig.app.json`: app-specific TypeScript settings
- `tsconfig.json`: the main TypeScript configuration for the frontend
- `tsconfig.node.json`: Node.js-specific TypeScript settings (for build tools)
- `vite.config.ts`: Vite build tool configuration including dev server, plugins, and build options

 ## `/public`
Static assets served directly:

| File | Preview |
|------|---------|
| `404.svg` - a cute 404 error page SVG because WHY NOT?! | ![404 Cat](https://raw.githubusercontent.com/cperault/react-node-starter/refs/heads/main/frontend/public/404.svg) |
| `cat.svg` - used for the favicon (browser tab logo) image; *meow* | ![Favicon Cat](https://raw.githubusercontent.com/cperault/react-node-starter/refs/heads/main/frontend/public/cat.svg) |

## `/src` 
Core files:
- `App.tsx`: root React component
- `main.tsx`: application entry point
- `theme.ts`: Material UI theme configuration
  - you can set your color/brand theme here
- `vite-env.d.ts`: Vite type declarations

## `/components`
Reusable UI components:
- `ErrorBoundary.tsx`: React error boundary for graceful error handling
- `Footer.tsx`: site footer component
- `Layout.tsx`: main layout wrapper
  - where the `AppBar` items, navigation links, application theme, and footer are set
  - supports light/dark mode based on system preferences (light mode as default)
- `NotFound.tsx`: 404 page component
- `PageContainer.tsx`: container for page content
- `PageHeader.tsx`: header component for pages

## `/constants`
As the name implies, where constants are defined:
- `app.ts`: Application-wide constants

## `/pages`
Page components:
- `Home.tsx`: example landing page where you can see use of RTK Query (as working E2E), the error boundary, and the toast notification hook from `ToastProvider`
- `PageTwo.tsx`: example secondary page component (as working navigation)


## `/providers`
Context providers:
- `ThemeProvider.tsx`: Material UI theme provider
- `ToastProvider.tsx`: toast notification provider

## `/redux`
State management:
- `apiSlice.ts`: RTK Query API definitions
- `store.ts`: Redux store configuration

## `/shared`
Directory for shared utilities, types, or helpers in the frontend

# Backend
- Node.js, TypeScript, Express

```
.
├── package.json
├── src
│   ├── app.ts
│   ├── controller
│   │   └── HelloWorldController.ts
│   ├── model
│   │   └── HelloWorld.ts
│   ├── routes
│   │   ├── BaseRouter.ts
│   │   ├── api
│   │   │   └── ApiRouter.ts
│   │   └── hello-world
│   │       └── HelloWorldRouter.ts
│   ├── server.ts
│   ├── service
│   │   └── HelloWorldService.ts
│   └── shared
└── tsconfig.json
```

## Root configuration files (backend)
- `package.json`: the configured Node.js project metadata file which also includes the backend's npm scripts and dependencies
- `tsconfig.json`: the main TypeScript configuration for the backend

## `src`
Core files:
- `app.ts`: Express app setup, middleware configuration, dependency injection, and core app settings
- `server.ts`: HTTP server creation and port configuration

## `controller`
Route handlers and business logic:
- `HelloWorldController.ts`: an example controller demonstrating service integration with request handling

## `model`
Data models and types:
- `HelloWorld.ts`: example model to be used with backend integrations

## `routes`
API route definitions:
- `BaseRouter.ts`: base router class with common routing functionality from which feature routers extend
- `/api`:
  - `ApiRouter.ts`: router to manage all requests to `/api`
- `/hello-world`:
  - `HelloWorldRouter.ts`: example route module showing route organization and intergration with service/controller for all requests to `/api/hello-world`

## `/service`
Services containing business logic
- `HelloWorldService.ts`: example service

## `/shared`
Directory for shared utilities, types, or helpers in the backend
