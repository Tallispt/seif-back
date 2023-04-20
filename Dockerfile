FROM node:18

WORKDIR /src/usr/

COPY . .

EXPOSE 5000

RUN npm i
# RUN npm run build

# CMD ["npm", "start"]

# RUN npm run prisma:migrate:dev
CMD [ "npm", "run", "dev" ]
