# 基础镜像
FROM nginx

# 复制资源文件
COPY dist/ /usr/share/nginx/html/

# 复制nginx配置
COPY nginx/default.conf /etc/nginx/conf.d/default.conf