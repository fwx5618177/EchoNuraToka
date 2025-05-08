目前我打算做一个全站式客服系统，既提供 sdk，也提供 kit，还提供组件包给三方使用。目前按照下面给我搭建框架，

技术选型:

1. 开发的语言是 typescript
2. 当前项目采用 pnpm 作为包管理工具，采用 mono-repo。 app、packages 都是 mono-repo 的子包
3. 子包名字以 @echoNuraToka 来开头
4. app 下的主要是展示, 分为 3 块: 官方展示、三方可以使用的 kit(通过指定 id 的 dom 元素来替换)、webComponents kit
5. packages 下目前有: sdk 等常见的逻辑
6. 在 root 搭建 eslint + prettier + husky + lint-staged + commitlint
7. 主要使用 react + webrtc + sass + react-router + redux + axios/ useQuery + react-query + react-hook-form + react-i18next， 组件库目前用 materialUI
8. 构建工具都用 vite

代码规范：

1.  所有的代码都要遵循单一功能原则、单一职责原则、单一变化原则、接口隔离原则、依赖倒置原则、开闭原则、里氏替换原则、合成复用原则
2.  代码的架构设计要记得功能、职责分离
3.  代码的命名要符合语义化，变量、函数、类、文件、文件夹都要有语义化的命名
4.  代码的注释要清晰明了，能让人一眼看懂
