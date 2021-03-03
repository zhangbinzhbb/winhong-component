const path = require("path");

// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// function resolve(dir) {
//   return path.join(__dirname, dir);
// }

module.exports = {
  publicPath: "./",
  devServer: {
    overlay: {
      warnings: false,
      errors: true
    }
  },
  // 修改 pages 入口
  pages: {
    index: {
      entry: "examples/main.js", // 入口
      template: "public/index.html", // 模板
      filename: "index.html" // 输出文件
    }
  },
  parallel: false,
  // 扩展 webpack 配置
  chainWebpack: (config) => {
    // @ 默认指向 src 目录，这里要改成 examples
    // 另外也可以新增一个 ~ 指向 packages
    config.resolve.alias
      .set("@", path.resolve("examples"))
      .set("~", path.resolve("packages"))
      .set("@src", path.resolve("src"));

    // 把 packages 和 examples 加入编译，因为新增的文件默认是不被 webpack 处理的
    config.module
      .rule("js")
      .include.add(/packages/)
      .end()
      .include.add(/examples/)
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        // 修改它的选项...
        return options;
      });
  },
  pluginOptions: {
    // 引入全局less变量的方式
    "style-resources-loader": {
      preProcessor: "less",
      // 这个是加上自己的路径，
      // 注意：试过不能使用别名路径
      patterns: [path.resolve(__dirname, "./src/styles/index.less")]
    }
  }
};
