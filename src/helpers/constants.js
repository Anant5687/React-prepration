export const VsCodeMockData = [
  {
    id: 1,
    name: 'src',
    type: 'folder',
    isOpen: true,
    children: [
      {
        id: 2,
        name: 'components',
        type: 'folder',
        isOpen: false,
        children: [
          {
            id: 3,
            name: 'Header.jsx',
            type: 'file',
            content: 'export const Header = () => <header>Header</header>;',
          },
          {
            id: 4,
            name: 'Footer.jsx',
            type: 'file',
            content: 'export const Footer = () => <footer>Footer</footer>;',
          },
        ],
      },
      {
        id: 5,
        name: 'pages',
        type: 'folder',
        isOpen: false,
        children: [
          {
            id: 6,
            name: 'Home.jsx',
            type: 'file',
            content:
              'export default function Home() { return <div>Home Page</div> }',
          },
          {
            id: 7,
            name: 'About.jsx',
            type: 'file',
            content:
              'export default function About() { return <div>About Page</div> }',
          },
        ],
      },
      {
        id: 8,
        name: 'App.jsx',
        type: 'file',
        content:
          "import { Header } from './components/Header';\nexport default function App() { return <Header /> }",
      },
      {
        id: 9,
        name: 'index.js',
        type: 'file',
        content:
          "import React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App';\nReactDOM.render(<App />, document.getElementById('root'));",
      },
    ],
  },
  {
    id: 10,
    name: 'public',
    type: 'folder',
    isOpen: false,
    children: [
      {
        id: 11,
        name: 'index.html',
        type: 'file',
        content:
          "<!DOCTYPE html>\n<html>\n  <head><title>VS Code Mock</title></head>\n  <body><div id='root'></div></body>\n</html>",
      },
    ],
  },
  {
    id: 12,
    name: 'package.json',
    type: 'file',
    content:
      '{\n  "name": "vscode-mock",\n  "version": "1.0.0",\n  "scripts": {\n    "start": "vite"\n  }\n}',
  },
  {
    id: 13,
    name: 'README.md',
    type: 'file',
    content:
      '# VS Code Mock Project\n\nThis is a mock structure for simulating a VS Code-like environment.',
  },
];
