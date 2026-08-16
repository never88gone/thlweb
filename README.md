# 糖葫芦工作室 (THL Studio) 官方网站

这是一个企业级的高端产品展示网站。采用了基于 Vue 3 + Vite 的高性能 Glassmorphism (毛玻璃) 纯静态前端展示矩阵，用以全景呈现“糖葫芦”系列的旗舰应用矩阵（包括糖葫芦浏览器、糖葫芦投屏、糖葫芦享屏、糖葫芦TV、糖葫芦PDF、糖葫芦修仙）。

> **注意：**
> 当前代码结构为纯前端展示应用，系统本身不涉及后台数据交互或服务器运算，也不对外开放源码授权。

---

## 🚀 部署与构建指南 (Vue 3 + Vite)

前端项目负责全静态呈现各个应用的产品概览、核心卖点和下载引导。

### 1. 安装项目依赖

确保您已经安装了 Node.js 环境。在项目根目录下，使用包管理器安装所需依赖：

```bash
npm install
```

### 2. 启动本地开发服务 (Hot-Reload)

如果您需要开发、调试或者测试产品样式在不同尺寸设备上的响应速度，可以启动开发服务器：

```bash
npm run dev
```

该命令将会在本地启动一台服务器（默认地址一般为 `http://localhost:5173`），供您直接查看极客风动效与文案内容。

### 3. 构建生产级别静态文件

准备将网站部署到正式网络空间时，请执行打包构建命令：

```bash
npm run build
```

执行完毕后，所有经过极大压缩和重载优化的静态资源（包括 HTML, CSS, JavaScript 以及图片资产）将会生成在项目根目录的 `dist/` 文件夹中。

### 4. 正式部署环境配置 (Deployment)

由于经过编译后的产物是完全由 HTML、CSS (内置 Fira Code / Space Grotesk 等现代字体体系) 和 Javascript 组成的**纯静态站点**，您可以把它放置在任何轻量级的静态服务器中，比如：

- **Nginx 或 Apache**：直接将 `dist/` 文件夹内的所有内容传输并替换到服务器的 Web 根目录（例如 `/var/www/html/` 或您的域名所绑定的 `root` 指向路径）。
- **云端静态托管 (Vercel / Netlify / CDN 等)**：如果您使用了静态托管平台，只需将构建指令设置为 `npm run build`，发布目录 (Publish directory) 设置为 `dist`，即可享受到全球 CDN 级别的访问速度。

> **⚠️ 注意：前端路由刷新配置**
> 
> 我们的前端体系采用了 Vue-Router 并配置为 `history` 模式。
> 在服务器（如 Nginx）配置中，如果直接访问含有参数的深层链接（例如：`https://yourdomain.com/app/thl-browser`），可能会遇到 404 错误。切记将任意未命中的请求重定向转发至 `index.html`。
> 
> **Nginx 配置示例：**
> ```nginx
> location / {
>     try_files $uri $uri/ /index.html;
> }
> ```

---
*Powered by THL Studio & ui-ux-pro-max Framework.*

---

## 🤖 自动化部署 (GitHub Actions)

项目已配置 GitHub Actions 自动化部署流程。

### 1. 准备服务器
在阿里云服务器上运行初始化脚本：
```bash
bash scripts/init_server.sh
```

### 2. 配置 Nginx
将 `nginx/nginx.conf` 内容配置到服务器的 `/etc/nginx/sites-available/thlweb`，并启用它：
```bash
sudo ln -s /etc/nginx/sites-available/thlweb /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 3. 配置 GitHub Secrets
在 GitHub 仓库中添加以下 Secrets：
- `SERVER_IP`: 服务器公网 IP
- `SERVER_USER`: 登录用户 (如 root)
- `SSH_PRIVATE_KEY`: SSH 私钥

配置完成后，每次推送至 `main` 分支都会触发自动构建与部署。

### 4. 证书过期执行这个命令，手动更新证书：
acme.sh --install-cert -d myit2017.cn \
--key-file       /root/certs/key.pem  \
--fullchain-file /root/certs/cert.pem \
--reloadcmd     "service nginx force-reload"

---

## 🌍 多环境构建区分 (阿里云 vs Cloudflare)

项目通过一套代码同时部署在 **阿里云** 和 **Cloudflare** 上，我们需要在打包阶段对它们进行区分，以便控制特定代码（如阿里云的备案信息，或 Cloudflare 的 TestFlight 申请入口）是否渲染。

### 区分逻辑
两端的打包动作由各自的服务器独立完成，因此我们通过注入不同的 **Vite 环境变量 (`VITE_APP_PLATFORM`)** 进行标识：

1. **阿里云环境 (GitHub Actions)**
   - 打包机器：GitHub 服务器
   - 触发方式：推送到 `main` 分支时触发 `.github/workflows/deploy.yml`。
   - 注入变量：在部署脚本执行 `npm run build` 时，注入环境变量 `VITE_APP_PLATFORM=aliyun`。
   
2. **Cloudflare 环境 (Cloudflare Pages)**
   - 打包机器：Cloudflare 服务器
   - 触发方式：Cloudflare 监听到 GitHub 仓库变更后自动拉取打包。
   - 注入变量：在 Cloudflare Pages 的网页控制台 (Settings -> Environment variables) 手动添加变量 `VITE_APP_PLATFORM=cloudflare`。

### 前端代码识别
在 Vue 代码中，通过 Vite 暴露的环境变量对象 `import.meta.env` 进行判断：
```javascript
// 判断当前是否是阿里云环境
const isAliyun = import.meta.env.VITE_APP_PLATFORM === 'aliyun';

// 判断当前是否是 Cloudflare 环境
const isCloudflare = import.meta.env.VITE_APP_PLATFORM === 'cloudflare';
```
在模板中可以使用该变量动态绑定样式类或控制区块的显隐：
```html
<footer v-if="isAliyun">京ICP备XXXXXXXX号</footer>
```