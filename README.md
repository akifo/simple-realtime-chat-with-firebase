# Firebase を使った簡単なリアルタイムチャットのサンプルコードです。

## 注意点
このプログラムはFirebaseを理解することに特化しているため、次の点において実務では使えません。
javascriptのモジュール化を覚えたら、このコードをどのように書き換えたら良いか分かってきます。

- Global変数を使いまくっている
- 各モジュールが密結合

## プログラムの概要

- `main.js` が全ての始まりとなるファイルです。
- `user.js` でユーザー情報を管理
- `rooms.js` でグループ情報を管理
- `messages.js` でメッセージ情報を管理

## 貢献方法
バグなどがございましたらお気軽にPRお願いします。
