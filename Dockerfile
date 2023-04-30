FROM node:lts-alpine as base
#ENV NODE_ENV=development
WORKDIR /app
COPY . .
RUN npm install && npm run build


FROM node:lts-alpine as final
WORKDIR /app
COPY --from=base ./app/dist ./dist
COPY ["package.json", "package-lock.json*", "./"]
EXPOSE 4004:3030
RUN npm install --production
#ENV DB_URL=mongodb+srv://buvu:mnwZxyHOvse88drT@cluster0.x9wyz.mongodb.net/mstack?retryWrites=true&w=majority
USER node
CMD ["node", "dist/src/app.js"]
