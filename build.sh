source .env
docker_user="vis"
docker_pwd="visPower@2021"
docker_project="vis"
docker_domain="ub20-docker.com"

app_name=$(echo $VUE_APP_NAME | sed -e 's/\r//g')
app_version=$(echo $VUE_APP_RELEASE_VERSION | sed -e 's/\r//g')

echo "node version: \c"
node -v
echo "npm version: \c"
npm -v
echo "vue version: \c"
vue -V
echo "docker version: \c"
docker -v

npm i --verbose

npm run build

docker login --username=${docker_user} --password=${docker_pwd} ${docker_domain}

docker build -t ${docker_domain}/${docker_project}/${app_name}:${app_version} .

docker image ls ${app_name}

docker push ${docker_domain}/${docker_project}/${app_name}:${app_version}