# Firebase を使った簡単なリアルタイムチャットのサンプルコードです。

## 使い方

### 手動ダウンロード・解答
https://github.com/akifo/simple-realtime-chat-with-firebase/archive/master.zip

### コマンド

```bash
git clone git@github.com:akifo/simple-realtime-chat-with-firebase.git
```

## 注意点
Firebaseを学習するjavascript初心者向けのサンプルコードです。  
以下、参考にして欲しくない点です。

- Global変数を宣言し放題
- 各モジュールが密結合

## プログラムの概要

- `main.js` が全ての始まりとなるファイル
- `user.js` でユーザー情報を管理
- `rooms.js` でグループ情報を管理
- `messages.js` でメッセージ情報を管理

## Firebase と JavaScript 初心者の方に参考にして欲しいステップアップ情報
- git
- npm
- eslint

このコードは、git でバージョン管理をしています。  
npm のパッケージの１つである eslint を使っています。  
eslint で JavaScript のコードの書き方についてルールを決めています。  
このリポジトリでは、 airbnb の ES5以下を使用したルールをベースに少しだけアレンジをしています。

## 貢献方法
バグなどがございましたらお気軽にPRお願いします。
