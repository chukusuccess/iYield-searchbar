# Country Finder

[Country Finder](https://iyield-searchbar.vercel.app/) implements a `case-sensitive` or `case-insensitive` custom search behaviour that is described as follows:

- If a user enters their search term in lowercase it performs a **case-insensitive**
  search.
- If the search term includes an uppercase letter it performs a **case-sensitive** search.

**For example:**

- If the user enters "sw" the search should return:
  - Botswana
  - Eswatini
  - Sweden
  - Switzerland
- If the user enters "Sw" the search should return:
  - Sweden
  - Switzerland
- If the user enters "SE" the search should return:
  - Sweden (since this country's 2-letter code is "SE")

# Country Finder Wiki

See [Wiki](https://github.com/chukusuccess/iYield-searchbar/wiki) for usage instructions or guides, code breakdown, function documentation, and more.

## Running the app

Requirements:

- node v18 or later
- npm v10 or later

```bash
git clone https://github.com/chukusuccess/iYield-searchbar.git
```

NOTE: if you use [Yarn](https://yarnpkg.com/) or any other package manager, delete the package-lock.json file before you proceed with running scripts. Run the corresponding commands as per your own package manager.

The command below is for those using [npm](https://www.npmjs.com/)

cd into the cloned project directory and start your terminal, then run:

```bash
npm install
npm run dev
# access the app at http://localhost:3000/ in your browser
```

when the app starts, the following command can be used to start the jest test runner:

```bash
npm test
```

NOTE: tests are not watched, so making changes to test files in the `__test__` directory will require a manual re-run of the test command.

- **CircleCI:** CircleCI is configured in this project for remote test runs

# Type of App

Web Application (NextJs)

# Development Stack:

Next.js, TypeScript, Material UI, Jest.

- **Next.js:** For client side functional components.
- **TypeScript:** For logic.
- **Material UI:** For styled UI components.
- **Jest:** For running unit tests.

## Project structure

```bash
__tests__
```

This directory contains all tests.

```bash
.circleci
```

This directory contains the CI/CD workflow config.

```bash
src/
```

source directory

## Deployment

App is live! deployed on: Vercel view here: [Country Finder](https://iyield-searchbar.vercel.app/)
