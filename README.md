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

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.tsx`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

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
