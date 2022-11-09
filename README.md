## Page Home

![image](https://user-images.githubusercontent.com/93483481/200800065-aab01e04-9282-4aac-a420-6308d8b6a422.png)

## Page Login

![image](https://user-images.githubusercontent.com/93483481/200800130-4e0b50a5-dfd5-4298-8dad-081b69e44b56.png)

## Page with login

![image](https://user-images.githubusercontent.com/93483481/200800286-b76eeac5-5ef1-4488-ab58-d03fa64504ca.png)

## Required log api hello

![image](https://user-images.githubusercontent.com/93483481/200799859-2e3c0ded-71b7-48f1-8de1-a27078099956.png)
## -
https://www.youtube.com/watch?v=rQok7nlqzFo&ab_channel=GarajedeIdeas
auth0-applications-new-next_config
    Allow callback URLs
        al completar el registro de auth0 redirecciona a una pagina con privilegios, guardando el token que se genere
            http://localhost:3000/api/auth/callback
    Allow logout URLs
        url de logout
            http://localhost:3000/

pnpm add --save @auth0/nextjs-auth0
.env.local
    AUTH0_SECRET='gen_hex'
    AUTH0_BASE_URL='http://localhost:3000/'
    AUTH0_ISSUER_='FROM_AUTH0'
    AUTH0_CLIENT_ID='FROM_AUTH0'
    AUTH0_CLIENT_SECRET='FROM_AUTH0'

create pages-auth-[...auth0].js
configurar provider 
    _app.js
        <UserProvider>
            <Component {...pageProps} />/...
        </UserProvider>
index.js
    <LoginLogout/>
    \next-13-auth0\src\components\LoginLogout.js    
    pagina con auth requier 
config apiendpoint \pages\api\hello.js
    ...
    export default withApiAuthRequired(handler);


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
