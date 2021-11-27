# Next.js

[![Build Status][build-status-image]][build-status-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[build-status-url]: https://github.com/aginix/next-with-aginix/actions
[build-status-image]: https://img.shields.io/github/workflow/status/aginix/next-with-aginix/Node%20CI/master
[codecov-url]: https://codecov.io/gh/aginix/next-with-aginix
[codecov-image]: https://img.shields.io/codecov/c/github/aginix/next-with-aginix/master.svg
[david-dm-url]: https://david-dm.org/aginix/next-with-aginix
[david-dm-image]: https://img.shields.io/david/aginix/next-with-aginix.svg
[david-dm-dev-url]: https://david-dm.org/aginix/next-with-aginix?type=dev
[david-dm-dev-image]: https://img.shields.io/david/dev/aginix/next-with-aginix.svg

Aginix's boilerplate to accelerate the setup of new [Next.js](https://nextjs.org/) based web applications.

You may preview the boilerplate at https://next-with-aginix.vercel.app.

## Getting Started

To get a local copy up and running, please follow these simple steps.

### Prerequisites

Here is what you need to be able to run Cal.

- Node.js
- PostgreSQL
- Yarn (recommended)

## Development

### Setup

#### Manual

1. Clone the repo

   ```sh
   git clone https://github.com/aginix/next-with-aginix.git
   ```

2. Install packages with yarn

   ```sh
   yarn install
   ```

3. Copy `.env.example` to `.env`

4. Configure environment variables in the .env file. Replace `<user>`, `<pass>`, `<db-host>`, `<db-port>` with their applicable values

   ```
   DATABASE_URL='postgresql://<user>:<pass>@<db-host>:<db-port>'
   ```

5. Set up the database using the Prisma schema (found in `prisma/schema.prisma`)
   ```sh
   npx prisma migrate deploy
   ```
6. Run (in development mode)
   ```sh
   yarn dev
   ```
7. Open [Prisma Studio](https://www.prisma.io/studio) to look at or modify the database content:

   ```
   npx prisma studio
   ```

8. Click on the `TodoItem` model to add a new todo record.

9. Open a browser to [http://localhost:3000](http://localhost:3000).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Documentation

Please check out the documentation page at https://next-with.aginix.tech.

To view the documentation locally, you may run:

```bash
yarn --cwd docusaurus install
yarn run docs
```

## License

[MIT License](./LICENSE.md)
