# Perform below steps to run API server:
- Add **DATABASE_URL** in `.env` file
    ```
    For example: mysql://root:12345678@localhost:3306/localdb
    Here localdb is the schema that i have created in my local, So replace it with your local schema name. Similarly replace the local username or password.
    Construct and place the DATABASE_URL in .env file at root of the project.
    ```
- Install node_modules using `npm i`
- Run prisma migrations using `npx prisma migrate dev --name init`
- Start server using `npm run start`
- Server will be running in port 3200
