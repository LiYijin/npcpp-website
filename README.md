# NPC++ 数据平面编程语言网站

这是一个为NPC++数据平面编程语言设计的官方网站，提供了教程文档和在线开发环境的入口。

## 🌐 网站功能

### 主要功能
- **教程链接** - 连接到C语言教程文档 (localhost:8000)
- **在线开发环境** - 连接到在线IDE (localhost:3000)
- **响应式设计** - 支持桌面和移动设备
- **现代化界面** - 使用渐变色和动画效果
- **交互式元素** - 平滑滚动、代码复制、动画效果

### 页面结构
1. **导航栏** - 固定顶部导航
2. **英雄区域** - 介绍NPC++的主要特性
3. **快速入口** - 教程和在线IDE的入口卡片
4. **功能介绍** - NPC++的核心特性展示
5. **代码示例** - 展示NPC++代码语法
6. **学习资源** - 相关学习资源链接
7. **页脚** - 快速链接和社区信息

## 🚀 快速启动

### 方法1: 使用Python HTTP服务器 (推荐)
```bash
cd npcpp-website
python3 -m http.server 8080
```
然后访问: http://localhost:8080

### 方法2: 使用Node.js服务器
```bash
cd npcpp-website
npx serve .
```
然后访问: http://localhost:3000

### 方法3: 使用Live Server (VSCode扩展)
1. 在VSCode中打开项目
2. 安装Live Server扩展
3. 右键点击index.html
4. 选择"Open with Live Server"

## 📁 项目结构

```
npcpp-website/
├── index.html              # 主页面
├── assets/
│   ├── css/
│   │   └── style.css       # 样式文件
│   ├── js/
│   │   └── script.js       # JavaScript交互
│   └── images/             # 图片资源文件夹
├── docs/                   # 文档文件夹
└── README.md              # 项目说明
```

## 🔧 技术栈

- **HTML5** - 语义化标记
- **CSS3** - 现代样式和动画
- **JavaScript (ES6+)** - 交互功能
- **Font Awesome** - 图标库
- **Google Fonts** - Inter字体

## ✨ 主要特性

### 设计特色
- 🎨 **渐变色背景** - 紫色到蓝色的渐变
- 📱 **完全响应式** - 适配所有设备尺寸
- 🌟 **现代动画** - 平滑过渡和微交互
- 💫 **粒子效果** - 英雄区域的动态背景
- 📜 **代码高亮** - 语法高亮显示

### 交互功能
- 🖱️ **平滑滚动** - 导航链接平滑跳转
- 📋 **代码复制** - 一键复制代码示例
- 🎯 **滚动显示** - 元素随滚动逐渐显示
- ⌨️ **键盘导航** - 支持键盘快捷键
- 📊 **性能优化** - 节流和防抖处理

## 🔗 重要链接

- **教程文档**: http://localhost:8000
- **在线开发环境**: http://localhost:3000
- **NPC++官网**: http://localhost:8080

## 🛠️ 自定义配置

### 修改链接地址
在 `index.html` 中修改以下链接：
```html
<!-- 教程链接 -->
<a href="http://localhost:8000" class="action-card tutorial-card">

<!-- 在线IDE链接 -->
<a href="http://localhost:3000" class="action-card ide-card">
```

### 修改颜色主题
在 `assets/css/style.css` 中修改CSS变量：
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --text-color: #1a202c;
    /* ... */
}
```

### 添加新的功能模块
1. 在HTML中添加新的section
2. 在CSS中添加对应的样式
3. 在JavaScript中添加交互功能

## 📱 响应式断点

- **桌面**: > 768px
- **平板**: 768px - 1024px
- **手机**: < 768px

## 🚀 部署建议

### 静态托管
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

### 服务器部署
- Nginx + 静态文件服务
- Apache + 静态文件服务
- Docker + Nginx

## 🐛 常见问题

### Q: 页面显示不正常？
A: 检查是否所有文件都在正确的位置，确保CSS和JS文件路径正确。

### Q: 链接无法访问？
A: 确保目标服务器正在运行（8000端口的教程服务器，3000端口的IDE服务器）。

### Q: 动画效果卡顿？
A: 检查浏览器性能，可以禁用一些动画效果。

## 🤝 贡献指南

1. Fork 本仓库
2. 创建功能分支
3. 提交更改
4. 创建Pull Request

## 📄 许可证

MIT License - 可自由使用和修改

---

🎉 **NPC++网站已准备就绪！** 访问 http://localhost:8080 开始体验！