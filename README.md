# Movies

Basic Movies app, set up for learning purposes ONLY. It is NOT production-ready and it will never be.

Features:

- `React.lazy`
- `React.useDeferredValue`
- React Suspense
- experimental caching library
- custom vscode utility snippet

## The project under the hood

The project is a React app, built using [react-no-CRA](https://github.com/morels/react-no-CRA).

It consists of a single component rendering either a list of Movies or the details of the selected movie alternatively.

The project takes huge inspiration from Dan Abramov's demo "Beyond React 16".

Data is arbitrary, and images come from an IMDB CDN endpoint which is not tracked (it might have changed over time).
