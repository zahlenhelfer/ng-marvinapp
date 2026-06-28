FROM nginx:1.29
COPY dist/ng-marvinapp/browser/* /usr/share/nginx/html
