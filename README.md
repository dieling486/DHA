# DHA 产品介绍网站

## 项目简介
这是一个使用 React + TypeScript + Vite 构建的 DHA 产品介绍网站。

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 部署到 GitHub Pages

### 步骤 1: 创建 GitHub 仓库

1. 访问 [GitHub](https://github.com) 并登录账号 `dieling486`
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 仓库名称填写：`DHA`
4. 选择 Public（公开）
5. 不要勾选 "Initialize this repository with a README"
6. 点击 "Create repository"

### 步骤 2: 初始化本地 Git 仓库并推送代码

在项目根目录打开终端，执行以下命令：

```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交代码
git commit -m "Initial commit"

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/dieling486/DHA.git

# 重命名分支为 main
git branch -M main

# 推送代码到 GitHub
git push -u origin main
```

### 步骤 3: 配置 GitHub Pages

1. 在 GitHub 仓库页面，点击 "Settings"（设置）
2. 在左侧菜单找到 "Pages"
3. 在 "Build and deployment" 部分：
   - Source: 选择 "GitHub Actions"
4. 保存设置

### 步骤 4: 自动部署

现在每次你推送代码到 `main` 分支时，GitHub Actions 会自动构建并部署你的网站。

你可以在仓库的 "Actions" 标签页查看部署进度。

部署完成后，你的网站将在以下地址访问：
```
https://dieling486.github.io/DHA/
```

### 手动触发部署

如果需要手动触发部署：
1. 进入仓库的 "Actions" 标签页
2. 选择 "Deploy to GitHub Pages" 工作流
3. 点击 "Run workflow" 按钮

## 技术栈

- React 18
- TypeScript
- Vite
- React Router
- GitHub Pages

## 项目结构

```
DHA/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions 部署配置
├── public/
│   └── photos/             # 图片资源
├── src/
│   ├── components/         # React 组件
│   ├── App.tsx            # 主应用组件
│   ├── main.tsx           # 入口文件
│   └── index.css          # 全局样式
├── index.html
├── package.json
├── vite.config.ts         # Vite 配置
└── tsconfig.json          # TypeScript 配置
```

## 注意事项

- 确保 `vite.config.ts` 中的 `base` 配置为 `/DHA/`（与仓库名一致）
- 如果更改仓库名，需要同步更新 `vite.config.ts` 中的 `base` 配置
- 首次部署可能需要几分钟时间
