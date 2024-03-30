This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


<!-- 
{
   "extends": ["next/babel","next/core-web-vitals"]
}

BackendUri = `http://localhost:5000/data`
crud-app/
├── components/  # Your reusable UI components
│   └── ...
├── lib/         # Non-UI related helper functions (optional)
│   └── ...
├── models/       # Mongoose data models
│   └── data.js
├── pages/        # Application pages
│   ├── _app.js    # (Optional)
│   ├── index.js   # Main landing page (or other pages)
│   └── ...
├── api/          # API routes handled by Next.js
│   └── data.js   # CRUD functionality for your data
├── public/       # Static assets (images, fonts, etc.)
│   └── ...
├── next.config.js  # (Optional) for Next.js configuration
├── package.json  # Project dependencies
└── ...            # Other project files (e.g., .gitignore, README.md)

crud-app/
├── components/  # Reusable UI components
│   ├── DataTable.js   # Displays data in a table
│   ├── DataForm.js    # (Optional) Form for adding/editing data
│   └── ...           # Other reusable UI components
├── lib/          # Non-UI related helper functions (optional)
│   └── [mongodb].config.js  # (Replace `[mongodb]` with your database provider)
│       └── connectDB.js      # Database connection logic
├── models/       # Mongoose data models
│   └── data.js    # Defines the schema for your data
├── pages/        # Application pages
│   ├── _app.js    # (Optional) Global layout and providers
│   ├── index.js   # Main landing page (or other pages)
│   └── ...        # Additional pages for your application
├── api/          # API routes handled by Next.js
│   └── data.js    # CRUD functionality for your data
├── public/       # Static assets (images, fonts, etc.)
│   └── ...
├── next.config.js  # (Optional) Configuration for Next.js
├── package.json  # Project dependencies
└── ...            # Other project files (e.g., .gitignore, README.md)
 -->
