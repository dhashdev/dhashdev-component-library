## 📕 Table of Contents

- [Introduction](#Introduction)
- [Features](#features)
- [Usage](#installation)
- [Contributing](#contributing)
- [License](#license)

# 👋 Introduction

Welcome to dhashdev component library, a collection of reusable UI components built with design code principles. Our library aims to provide developers with a set of consistent, customizable, and easy-to-use components to streamline the development process and ensure a cohesive user experience across applications. The components are based on [Design+Code](https://designcode.io/), a extensible UI component build by [Meng to](https://twitter.com/MengTo) as [Figma](https://www.figma.com/file/uyBV0KLTueIe9Tu2hxZfRH/Design-System?type=design&node-id=6-2&mode=design) Components.

## ⁇ What is Design Code?

Design code is the practice of using design systems to bridge the gap between design and development. It involves translating design elements, such as colors, typography, spacing, and layout, into reusable code components. By following design code principles, developers can maintain consistency in UI elements, reduce redundancy in code, and accelerate the development process.

## 🤔 About dhashdev Component Library

![alt text](./src/assets/images/desing-system-gif-blog.gif)
dhashdev component library is built on top of popular frameworks like React and styled-components, making it easy to integrate into your projects. Each component is meticulously crafted with attention to detail, accessibility, and performance in mind.

## ✨ Features

- **Reusable Components**: Our library includes a variety of reusable components such as buttons, inputs, cards, and more, allowing you to quickly build interfaces without reinventing the wheel.
- **Customizable Styles**: Components are highly customizable, with support for theming, custom styles, and props to adapt to your project's specific needs.
- **Documentation and Examples**: Comprehensive documentation and live examples are provided for each component, making it easy to understand how to use and customize them in your projects.
- **Responsive Design**: Components are designed to be responsive, ensuring they look and function seamlessly across different screen sizes and devices.

# Installation

To get started with our component library, simply install it via npm or yarn:

```bash
npm i dhashdev-component-library
```

Then import the componet and start using the library

```bash

import { Button, Card, Input } from "dhashdev-component-library";

const MyComponent = () => {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Card>
        <Input placeholder="Enter your name" />
      </Card>
    </div>
  );
};
```

## 🤝 Contribution

Thank you for considering contributing to our project! To maintain a collaborative and productive environment, please adhere to the following guidelines when contributing:

1. Reporting Issues: If you encounter any bugs, inconsistencies, or have suggestions for improvements, please create an issue on GitHub. Clearly describe the problem or suggestion, along with steps to reproduce if applicable.

2. Submitting Pull Requests: Before starting work on a new feature or fix, please open an issue to discuss the proposed changes. This helps ensure that your contribution aligns with the project goals and prevents duplicate efforts.

3. Branching Strategy: We follow a Git branching strategy to organize our work. Please adhere to the following naming conventions when creating branches:

   - For working on a particular component and its feature: `component/feature/feature-name`
   - For building a new component: `component/component-name`
   - For fixing a bug or improving an existing feature: `bug/fix/bug-name`

4. Coding Standards:Follow the coding standards and style guidelines established in the project. Ensure your code is well-documented and follows best practices to maintain readability and consistency.

5. Testing: Write tests for any new features or fixes you contribute. Ensure existing tests pass and write additional tests as necessary to cover edge cases. Test should be written for all components inside the respective component directory in folder named `__tests__`, follow the naming convention.

6. Commit Messages: Write clear and descriptive commit messages that explain the purpose of each change. Use present-tense verbs and be concise but informative. Before commiting husky will automatically format, lint and test the code, please respect those pre-commit guidelines and make sure it passes.

## Git Branching Rules

We use Git branches to manage our development workflow. Here are some rules to follow when creating and managing branches:

**Main Branch**: The main branch represents the latest stable version of the project and is also the production branch. Avoid committing directly to this branch.

**Development Branch**: `development` is the development branch for the project. All new features and bug fixes should be developed against this branch, and then merged into the main branch. But no direct pull request should be made to main branch.

**Feature Branches**: When working on a new feature or improvement, create a feature branch off the main branch. Name the branch according to the feature you're working on, following the format `component/feature/feature-name`.

**Component Branches**: If you're building a new component, create a component branch off the main branch. Name the branch according to the component you're building, following the format `component/component-name`.

**Pull Requests**: When your work is complete, submit a pull request from your feature or component branch to the main branch. Ensure the pull request includes a clear description of the changes and any related issues it addresses.

By following these guidelines and branching rules, we can collaborate effectively and maintain a high-quality codebase. Thank you for your contributions!

## 🔐 LICENSE

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 📲 Contact

> GitHub [@dhashdev](https://github.com/dhashdev) &nbsp;&middot;&nbsp;
> Twitter [@dhashdev](https://twitter.com/dhashdev) &nbsp;&middot;&nbsp;
> LinkedIn [@dhashdev](https://www.linkedin.com/in/dhashdev/) &nbsp;&middot;&nbsp;
> Instagram [@dhashdev](https://www.instagram.com/dhashdev/) &nbsp;&middot;&nbsp;
