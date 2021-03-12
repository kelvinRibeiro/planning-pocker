# Planning Pocker 

Execute commands in your terminal to run project 

npm install

Development/Local

sequelize db:migrate
sequelize db:seed:all

npm run dev

Production DB
npm start 

---------------------------

Use POST request http://localhost:3009/auth/authenticate to authenticate user

User: admin@pocker.com.br
Pass: #adminxyz

Get Token returned and use to make requests on API 

headers: 'x-access-token' = TOKEN

Access http://localhost:3009/api-docs on the browser to get API Documentation 

----------------------