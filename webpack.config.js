const path = require('path');

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'production',

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: './src/assets/js/main.js',

  // ファイルの出力設定
  output: {
    path: path.resolve(__dirname, 'dist/assets/js/'),
    filename: '[name].js'
  },

  // ローカル開発用環境を立ち上げる
  // 実行時にブラウザが自動的に localhost を開く
  devServer: {
    static: path.join(__dirname, "./dist"),
    open: true
  },

};