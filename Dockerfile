# pull official base image
FROM node:16.13.0

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package*.json ./

RUN npm install
RUN npm install react-scripts@5.0.0 -g

# add app
COPY . ./

RUN npm run build

FROM nginx

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html

# start app
CMD ["npm", "start"]