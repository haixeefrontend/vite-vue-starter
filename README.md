# Vue 3 + TypeScript + Vite

用于开发 Vue 3 + TypeScript 的 Vite 模板。

## Usage

使用 `npx` 初始化:

```bash
npx tiged haixeefrontend/vite-vue-starter#master my-vue-app
```

使用 `yarn dlx` (需要 Node.js >= 16.9.0):

```bash
corepack yarn@4 dlx tiged haixeefrontend/vite-vue-starter#master my-vue-app
```

> [!NOTE]
>
> 若出现网络问题无法拉取仓库，可以尝试在后面加上 `--mode=git` 的参数，这样它会调用默认的 git (ssh) 的方式拉取。还有 `--disable-cache`
> 参数可以让它永远通过网络拉取最新的模板。

然后安装依赖：

```bash
cd my-vue-app
yarn
```

## VSCode 设置

- 安装所有推荐扩展

在第一次打开项目时，VSCode 会提示安装推荐扩展，点击安装即可。

如果没有提示，可以在扩展界面输入 `@recommended` 列出所有推荐扩展，然后点击安装全部按钮即可。

- 指定 TypeScript 版本

打开任意 `.ts` 文件或 `.vue` 文件，点击右下角的 `TypeScript` 左侧的 `{}` 图标，选择 `Use Workspace Version`。
