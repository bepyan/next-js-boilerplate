# Next JS Boilerplate

Typescript
Tailwind

<br>

### Prisma with PalentScale

initial PalentScale settings

```shell
pscale login
pscale database create your_db_name --region ap-northeast
# change **your_db_name** in package.json and .env
yarn db:connect
yarn db:push
```

```shell
yarn db:dev
yarn db:studio
```

### Generate Cookies Password

Make a password longer than 32 characters
https://passwordsgenerator.net/

Write your password in `.env`

```
COOKIE_PASSWORD=
```

### VSCODE plugins

| name                      | link                                                                          |
| ------------------------- | ----------------------------------------------------------------------------- |
| ESLint                    | https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint    |
| Prisma                    | https://marketplace.visualstudio.com/items?itemName=Prisma.prisma             |
| Tailwind CSS IntelliSense | https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss |
| Prettier - Code formatter | https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode    |
