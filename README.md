# README

## 目的

Docker + Rails + React + TypeScript の学習。

## 方針

### レンダリング

Rails と React は完全に分けて作るのではなく、React を Rails に組み込む。なので Rails を API モードにしない  
レンダリングを完全に React に任せるのではなく、一部のページのみ React に任せる(苦難の予感)  
デザインは、Rails 側は Bootstrap, React 側は Ant Design.

### assets

JS は Webpacker, 他(CSS, Image 等)は Sprockets で行く。(Rails6 の標準のやり方)  
なので Rails 側の View 用の JS パッケージも yarn で入れる。  
今回のように View を Rails, React 両方で構築する場合は、`/assets/javascript`を復活させて、Rails 側は Sprockets, React 側は Webpacker にしたの方が良さそうにも思えるが、とりあえず保留で

### test

テストは Rspec で Model, Feature のみの予定.  
ただし、先に Rails + React の学習を主にしたいのでテストは後回し.

TurboLinks は使用しない

## とりあえずの目標

### VSCode における Rails + TypeScript の開発環境構築

今まで Rails の開発は Atom がメインだったので、改めて VSCode の拡張パッケージの調査  
特に以前探したが見つからなかった Atom の rails-transporter パッケージの代替を見つけたい

TypeScript の開発環境はよくわからないのでその調査から  
必須パッケージ: React と TS における以下のパッケージ

- Lint
- Formatter
- Completion

VSCode でのデバッグは pry-byebug より良いか?

### マイルストーン

なんとなくで書いているので学習中にいろいろ変化するかも...

- React + TypeScript の使用準備
- Rails 側のホーム画面作成(Bootstrap を yarn で導入)
- React 側のホーム画面作成(CRUD を早く試したいのでデザインは抜きで)
- 適当なモデル作成 & API 作成 (モデルはリレーションもない簡単なもので)
- React 側で上記のモデルの CRUD ページ作成
- Devise と React の連携を学習しログインページの作成 (できれば OAuth も)
- Docker, Webpacker を使用した Rails の本番環境デプロイ方法  
  (capistrano の gem をサーチしてみたら, それっぽいのがあるのでその調査)

ログインまで学習したら、ここまでの集大成的な React のページを作りたい.  
モデルもアソシエーションがある少し複雑なものにし、React 側で API 叩く処理を複雑にしてみて、React での API まわりをブラッシュアップしていく.  
あとここからはきちんと feature spec を書いていく

ある程度 React の学習がすんだら Rails6 の新機能や Rails5 の新機能で使用したことない機能の学習予定

- Action Text (リッチテキスト)
- Action Cable (WebSocket 的な)
- Active Storage (Carrierwave から移行する価値があるなら)
- Active Job (非同期処理の共通インターフェース? sidekiq でも delayed_job でも同じ様に操作できる? デメリットがありそう)
- SystemTestCase (E2E テスト, feature spec の方が良いならスルー)

あと疑問というか調査したいこと

- docker 環境で pry-byebug 使うならコンテナに入らないとダメ?
- docker 環境でテストするために必要なこと. 例えば Chrome のインストールとか
- 公開したくない値は環境変数でセットする? 現在のベストプラクティスは?
- Atomic Design の学習、とりあえずなんとなくでやってみたけど間違った解釈してるかも

## TODO

- ~~VSCode における Rails + TypeScript の開発環境構築~~
- ~~React + TypeScript の使用準備~~
- ~~Rails 側のホーム画面作成(Bootstrap を yarn で導入)~~
- ~~React 側のホーム画面作成(Ant Design)~~
- ~~適当なモデル作成 & API 作成 (モデルはリレーションもない簡単なもので)~~
- React 側で上記のモデルの CRUD ページ作成
  - ~~正常系の動作~~
  - バリデート・例外処理
  - Rails でいう flash メッセージ的なものの実装 (パッケージあるかもしれないので調査)
  - 再読込すると state がリセットされる?保持しておきたいのもあるので調べる (Redux っていうのがそれっぽい)
  - ページを開くとき API から値を取得し、useEffect で設定している箇所で一瞬デフォルト値がちらつく  
    レンダリング前に state をセットできれば解消するか? (useLayoutEffect っぽい、要調査)
- Devise と React の連携を学習しログインページの作成 (できれば OAuth も)
- Docker, Webpacker を使用した Rails の本番環境デプロイ方法  
  (capistrano の gem をサーチしてみたら, それっぽいのがあるのでその調査)
