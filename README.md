# Next.js + InstantDB Template

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and integrated with [InstantDB](https://www.instantdb.com/).

## Project Setup

1. Install dependencies:

```bash
npm install
```

2. Install InstantDB CLI (if not already installed):

```bash
npm install -D instant-cli
```

3. Login to InstantDB:

```bash
npx instant-cli@latest login
```

4. Initialize InstantDB in your project:

```bash
npx instant-cli@latest init
```

This will:

- Create a new InstantDB app
- Generate a `.env` file with your app ID
- Create `instant.schema.ts` and `instant.perms.ts` files

## Development Server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [InstantDB Documentation](https://www.instantdb.com/docs) - learn about InstantDB features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

**Note:** When deploying, make sure to set up your InstantDB environment variables in your deployment platform.
