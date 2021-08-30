# README

## 目的

Docker + Rails + React + TypeScript の学習。  

RailsとReactは完全に分けて作るのではなく、ReactをRailsに組み込む。なのでRailsをAPIモードにしない  
レンダリングを完全にReactに任せるのではなく、一部のページのみReactに任せる(苦難の予感)  
Rails側はBootstrap, React側はMATERIAL-UI.  

assetsの方針  
JSはWebpacker, 他(CSS, Image等)はSprocketsで行く。(Rails6の標準のやり方)  
なのでRails側のView用のJSパッケージもyarnで入れる。  
今回のようにViewをRails, React両方で構築する場合は、`/assets/javascript`を復活させて、Rails側はSprockets, React側はWebpacker にしたの方が良さそうにも思えるが、とりあえず保留で  

テストはRspecでModel, Featureのみの予定.  
ただし、先に Rails + React の学習を主にしたいのでテストは後回し.  

TurboLinksは使用しない  

## とりあえずの目標

### VSCodeにおける Rails + TypeScript の開発環境構築

今までRailsの開発はAtomがメインだったので、改めてVSCodeの拡張パッケージの調査  
特に以前探したが見つからなかったAtomのrails-transporterパッケージの代替を見つけたい  

TypeScriptの開発環境はよくわからないのでその調査から  
必須パッケージ: ReactとTSにおける以下のパッケージ  

- Lint
- Formatter
- Completion

VSCodeでのデバッグはpry-byebugより良いか?

### マイルストーン

なんとなくで書いているので学習中にいろいろ変化するかも...  

- React + TypeScript の使用準備
- Rails側のホーム画面作成(Bootstrapをyarnで導入)
- React側のホーム画面作成(CRUDを早く試したいのでデザインは抜きで)
- 適当なモデル作成 & API作成 (モデルはリレーションもない簡単なもので)
- React側で上記のモデルのCRUDページ作成
- DeviseとReactの連携を学習しログインページの作成 (できればOAuthも)
- Docker, Webpackerを使用したRailsの本番環境デプロイ方法  
  (capistranoのgemをサーチしてみたら, それっぽいのがあるのでその調査)

ログインまで学習したら、ここまでの集大成的なReactのページを作りたい.  
モデルもアソシエーションがある少し複雑なものにし、React側でAPI叩く処理を複雑にしてみて、ReactでのAPIまわりをブラッシュアップしていく.  
あとここからはきちんと feature spec を書いていく  

ある程度Reactの学習がすんだらRails6の新機能やRails5の新機能で使用したことない機能の学習予定  

- Action Text (リッチテキスト)
- Action Cable (WebSocket的な)
- Active Storage (Carrierwaveから移行する価値があるなら)
- Active Job (非同期処理の共通インターフェース? sidekiqでもdelayed_jobでも同じ様に操作できる? デメリットがありそう)
- SystemTestCase (E2Eテスト, feature spec の方が良いならスルー)

あと疑問というか調査したいこと

- docker環境でpry-byebug使うならコンテナに入らないとダメ?
- docker環境でテストするために必要なこと. 例えばChromeのインストールとか
- 公開したくない値は環境変数でセットする? 現在のベストプラクティスは?
