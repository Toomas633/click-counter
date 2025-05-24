# Click Counter

A simple Vue 3 application that demonstrates a click counter with theme toggling functionality. The project uses Vuetify for UI components and Jest with Puppeteer for end-to-end testing.

## Features

* **Click Counter**: Increment, decrement, and reset the counter.
* **Theme Toggle**: Switch between light and dark themes.
* **Responsive Design**: Built with Vuetify for a modern and responsive UI.
* **TypeScript Support**: Fully typed with TypeScript for better developer experience.
* **Unit and E2E Testing**: Includes Jest and Puppeteer for testing.

## Project Structure

**public/ 	# Static assets**
**specs/	# Test files**
**src/
├── components/ 			# Reusable Vue components
├── enums/ 				# TypeScript enums
├── plugins/ 				# Vuetify plugin setup
├── views/ 				# Application views
├── App.vue				# Root Vue component
└── main.ts				# Application entry point**

## Installation

Install dependencies:

```
yarn install
```

## Development

Start the development server:

```
yarn dev
```

The application will be available at `http://localhost:5173`.

## Build

To build the project for production:

```
yarn build
```

The production-ready files will be in the `dist` directory.

## Testing

Build the project, serve with yarn preview and then run the tests:

```
yarn build
yarn preview #serves build webpage from dist on port 4123
yarn test
```

This will execute the Jest-Puppeteer test suite.

## Linting and Formatting

* Lint the code:
  ```
  yarn lint
  ```
* Format the code with Prettier:
  ```
  yarn prettier-fix
  ```
