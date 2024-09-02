# React Pizza Order Demo

A simple react application which includes a fundamental structure for advanced projects.

### How to run the demo

1. Install the dependencies:

        npm install

2. Run the application:

        npm start

3. (Optionally) Run unit tests:

        npm test

### Folder structure

```
/
├── public
├── src
|    ├── assets
|    |     └── images
|    ├── components
|    ├── configs
|    ├── features
|    ├── hooks
|    ├── layouts
|    |     └── navigation
|    ├── models
|    ├── modules
|    ├── pages
|    |     ├── home
|    |     └── order
|    ├── routes
|    ├── services
|    ├── styles
|    |     ├── components
|    |     ├── layouts
|    |     └── pages
|    ├── tests
|    |     ├── components
|    |     └── styles
|    ├── types
|    ├── utils
|    ├── App.jsx
|    └── index.jsx
|
├── package-lock.json
├── package.json
├── README.md
└── ...
```

### Notable folders

| `components`   | Small, reusable UI components.                                                                                          |
| `configs`      | Configurations, e.g. for i18next.                                                                                       |
| `features`     | (Optional) Encapsulated features. Allows individual (de-)activation; but, often hard to separate from main application. |
| `hooks`        | (Optional) Reusable hooks for state management.                                                                         |
| `layout`       | Reusable layout components.                                                                                             |
| `models`       | Domain models with business logic.                                                                                      |
| `modules`      | (Optional) Complex, reusable UI components.                                                                             |
| `pages`        | Pages of the application. Each page may hold dedicated hooks and components.                                            |
| `routes`       | Routes of the application.                                                                                              |
| `services`     | Services to communicate with external endpoints.                                                                        |
| `styles`       | Styles of the application.                                                                                              |
| `types`        | Types of the application.                                                                                               |
| `utils`        | Common utility functions and constants.                                                                                 |

