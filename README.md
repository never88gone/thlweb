# 糖葫芦工作室 (THL Studio) 官方网站与数据收集中心

这是一个企业级的高端产品展示网站。采用了包含“多开发者账号并行处理”的 Python 后端数据抓取体系，以及基于 Vue 3 + Vite 的高性能 Glassmorphism 纯静态前端展示矩阵。

本指南将协助您在各类环境快速部署前端演示页并持久化运行 Python 后台脚本。

---

## 🚀 一、前端展示页：打包与部署指南 (Vue 3 + Vite)

前端项目位于 `/web` 目录下，负责全静态呈现各个应用的产品概览，并可以通过访问本地目录下的 `metrics.json` 获取动态图表数据（目前图表在官方模式下处于隐身状态）。

### 1. 安装项目依赖
进入前端根目录，并使用包管理器安装：
```bash
cd web
npm install
```

### 2. 启动本地开发服务 (Hot-Reload)
如果您仍需要开发、调试或者测试产品样式在不同尺寸设备上的响应速度：
```bash
npm run dev
```
将会在本地启动一台服务器（如 `http://localhost:5173`），供您直接查看极客风动效与中文文案。

### 3. 构建生产级别静态文件
准备将网站部署到正式网络空间时，请执行打包构建：
```bash
npm run build
```
执行完毕后，所有经过极大压缩和重载优化的静态文件将会生成在 `web/dist/` 文件夹中。

### 4. 正式部署环境配置 (Deployment)
由于经过编译后的产物是完全由 HTML、CSS (Fira Code/Space Grotesk字体体系) 和 Javascript 组成的**纯静态站点**，您可以把它扔进任何轻量级的静态服务器中，比如：

- **Nginx 或 Apache**：直接将 `web/dist` 内的所有文件传输并替换到服务器的 Web 根目录（如 `/var/www/html/` 或您的域名所绑定的 `root` 指向路径）。
- **Vercel / Netlify / GitHub Pages**：如果您使用了静态托管平台，直接将构建指令设置为 `npm run build`，发布目录 (Publish directory) 设置为 `web/dist` 即可享受到全球 CDN 级别的访问速度。

> **注意：前端路由刷新配置**
> 前端体系采用了 Vue-Router 并配置为 `history` 模式。
> 在服务器 (如 Nginx) 配置中，如果直接访问含有参数的链接 (例如：`https://domain.com/app/hsb-browser`)，切记将任意的请求重定向转发至 `index.html` 规避 404，Nginx 示例：
> ```nginx
> location / {
>     try_files $uri $uri/ /index.html;
> }
> ```

---

## 🐍 二、Python 数据服务：获取工具与鉴权说明

负责连接 Apple App Store Connect 服务器去日均查询各个应用 TestFlight 和 日活分布的脚本保存在 `/python-scripts` 目录中。

### 1. 环境准备
脚本建立在标准的 Python 3 环境之上，依赖以下库支撑：
```bash
cd python-scripts
pip install requests pyjwt schedule
```

### 2. 多开发者账号签名的鉴权配置
目前支持跨账号独立鉴权机制。如欲让脚本真实去苹果库内拖拽数据：
1. 打开 `python-scripts/fetch_appstore_data.py` 文件。
2. 找到首部的核心配置字典 `APPS_CONFIG`。
3. 把您的 **APP ID (Apple ID)** 填写进去。并把苹果发放的 **Key ID** 与 **Issuer ID** 对应填入字典的每个 App 详情的 `auth` 当中即可。

*示例（隔离配置）：*
```python
APPS_CONFIG = {
    "hsb-browser": {
        "name": "糖葫芦浏览器", 
        "apple_id": "你的数字ID",
        "auth": {
            "key_id": "专属的 KEY_ID",
            "issuer_id": "专属的 ISSUER_ID",
            "p8_path": "Browser_AuthKey.p8"  # 将真实下载的 .p8 鉴权密钥文件与脚本一同放置
        }
    },
    ...
```

### 3. 如何运行与驻留
配置完环境与鉴权变量后，即可启动监听轮询：
```bash
python3 fetch_appstore_data.py
```
- **首次执行**：它会立刻执行一次 API 拉取抓走最新数据。
- **定时调度**：它内置了 `schedule` 模块。挂着运行此代码后，它每天的凌晨 02:00（基于服务器本地时间）会自动再次抓取所有 App 的新鲜报表。
- **持久化存放**：成功生成的数据会自动越级存放在 `web/public/data/metrics.json` 中；当您打包时就会携带此最新数据供给前端消耗（如被需要）。

如果在真实的云主机环境下，如果您不想当前 SSH 控制台卡住，您可以通过 `nohup` 使其处于守护进程后台：
```bash
nohup python3 fetch_appstore_data.py > app_fetch_logs.log 2>&1 &
```

---
*Powered by THL Studio & ui-ux-pro-max Framework.*