module.exports = {
  extends: ['@commitlint/config-conventional'],
  // 检测规则
  // https://commitlint.js.org/#/reference-rules
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',       // 新功能（feature）
        'fix',        // bugfix
        'docs',       // 文档
        'style',      // 仅仅修改了空格,格式缩进,逗号等等（不影响代码运行效果的代码格式调整）
        'refactor',   // 重构（既不是新增功能，也不是修改bug的代码变动）
        'perf',       // 性能优化，比如性能提升、体验
        'test',       // 测试
        'chore',      // 构建、编译等杂事
        'revert',     // 回滚
        'build',      // 编译构建相关，主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
        'ci',         // CI流程相关
      ]
    ]
  }
}
