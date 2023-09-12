### 1. はじめに
いま進めている開発進捗について書きます。

今回は、Academia Matchingというウェブアプリを制作しました。<br>
大学、高等教育機関に所属する方限定で利用でき、学習仲間や情報共有できる相手を探すことができるようなウェブアプリです。<br>
制作したアプリの中身について、制作過程で学びになったことや自分なりに気を付けたこと、悩んだことについて書かせていただきました。<br>

**最後に開発を通して感じた大切なこと**について書きました。 <br>
長くなってしまいましたが、どうか暖かい目で読み進んでいただけると幸いです。<br>

### 2. 自己紹介
初めまして、九州工業大学20年卒、福岡在住の25歳です。<br>
趣味は、ドラマ・映画鑑賞、好きな食べ物はうどんです。<br>
アン・ハサウェイ主演の洋画「マイ・インターン」が好きです。<br>
大学では、機械知能工学宇宙工学専攻をしていました。<br>

新卒で、受託開発の企業に入社し、病院の業務システム開発、スポーツ選手専門オンラインサロン開発等を行っておりました。<br>
現在は、食品メーカーでECブランドの責任者として幅広い業務を担当しています。<br>
通販事業推進、利益管理、マーケティングをメインで行っており、商品開発やHPの作成・更新も担当しております。<br>
事務作業・単純作業が苦手なので、VBAやPythonを用いて作業自動化したりすることもあります。<br>
自分も同僚も思考の時間を多く取れるようになってハッピーです！

将来的には、フルスタックエンジニアを目指しています！

### 3. 学習媒体
| 期間 | 内容 | 媒体 |
| ------------- | ------------- | ------------- |
| 1ヶ月目 | Progateと公式サイトで下記の基本を学ぶ<br>Ruby, JS, Ruby on Rails, React | Progate(https://prog-8.com/)<br>Railsチュートリアル(https://railstutorial.jp/)<br>Railsガイド(https://railsguides.jp/)<br>React公式(https://ja.legacy.reactjs.org/) |
| 2ヶ月目 | Reactが全然理解できなかったのでハンズオン形式の動画で再学習 | プログラミングチュートリアル(https://www.youtube.com/@user-hl9uv6cv7k)<br>トラハックのエンジニア学習講座(https://www.youtube.com/@1492tiger) |
| 3カ月目〜　 | 実際にアプリを作成しながら基礎補完していく形で学習を継続 | Railsガイド(https://railsguides.jp/)<br>React公式(https://ja.legacy.reactjs.org/) |

### 4. アプリケーションの内容
■フロントエンド側<br>
アプリケーションはReactとTypescriptで書いています。<br>
フロントエンドからバックエンドへの通信には、axiosを使用しています。<br>

■バックエンド側<br>
アプリケーションはRuby on RailsのAPIモードを使用しており、<br>
ヘッダーの取得を可能にするためgemのrack-corsを使用してCORSの設定をしております。<br>
サインアップ時にメール認証を取り入れるためにdevise_token_authを使用しております。<br>

> ■ ホーム画面 <br>
・ **ユーザ全件の表示**：<br>
　1人ずつのユーザの基本的な情報(名前、プロフ画像、年齢、居住地、専攻分野、ログイン状況)を描画します。 <br>
・ **キーワード検索機能**：<br>
　ユーザが個々に登録している研究タグを検索してユーザを探すことが可能。キーワードに対する曖昧検索を行います。<br>
・ **並び替え機能**：<br>
　ユーザを、`ログイン順`、`いいね順`、`登録順`で並び替えることが可能。<br><br>
![home](https://github.com/chobencho/my-app/assets/119166395/8df8469e-2f20-4ced-8580-780ae2183b9d)

> ■ ユーザ詳細画面 <br>
・ **ユーザ情報の表示**：<br>
　ユーザが登録している情報を表示。<br>
・ **いいね機能**：<br>
　ユーザに対していいねを押すことが可能。現時点でいいねしたユーザ一覧などを見れるわけではない。<br>
 　後ほどフォロー機能等に変更していきたいと考えています。

> ■ 掲示板一覧画面 <br>
・ **掲示板全件の表示**：<br>
　ユーザが作成した掲示板一覧を表示。`タイトル`、`内容`、`サムネイル`、`作成ユーザ`を表示している。<br>
 　ページネーションを追加予定。<br>

> ■ 掲示板詳細画面 <br>
・ **掲示板情報の表示**：<br>
　1件の掲示板情報を表示。`掲示板の作成日時`も表示。<br>
 　閲覧している掲示板が自分の作成した掲示板の場合、`掲示板削除ボタン`、`掲示板編集ボタン`が表示される。<br>
・ **コメント機能**：<br>
　掲示板に対してコメントを付けることが可能。メンション機能を追加したい。<br><br>
![board](https://github.com/chobencho/my-app/assets/119166395/18d48966-fcde-4523-aed2-af94316e4b16)

> ■ 掲示板作成画面 <br>
・ **掲示板作成機能**：<br>
　`タイトル`、`サムネイル`、`内容`の入力で、簡単に掲示板を作成可能。<br>
　タイトルと内容は必須項目で、未入力の場合は作成ボタンが効かないようにしています。<br><br>
![board_create](https://github.com/chobencho/my-app/assets/119166395/88fa5799-3f89-464a-99f6-0365be7c9a13)

> ■ コミュニティ一覧画面 <br>
・ **コミュニティ一覧の表示**：<br>
　カテゴリから探す…9つのカテゴリから属する掲示板を探すことが可能。<br>
　人気コミュニティから探す…最新のコメントが付いているコミュニティを上位3件表示している<br>
　新着コミュニティから探す…新しく作成されたコミュニティを上位3件表示している<br>
・ **参加中の掲示板一覧の表示**：<br>
　自分が参加しているコミュニティを一覧表示する。コミュニティを退会したら表示されなくなる。<br><br>
![communities](https://github.com/chobencho/my-app/assets/119166395/f91e271c-8228-46b0-86db-9b2fa6b5b638)

> ■ コミュニティチャット画面 <br>
・ **オープンチャット機能**：<br>
　大人数でチャット形式で交流することが可能。<br>
　自分のコメントは右側、他人のコメントは左側に表示され、`ユーザーのプロフ画像`、`投稿日時`が表示される<br>
　テキスト送信に加えて、画像送信も可能。<br>
・ **コミュニティ参加確認機能**：<br>
　未参加のコミュニティに入室すると参加の可否を聞くモーダルが表示される<br>
　参加しないを選択するとコミュニティ一覧に戻される<br>
・ **コミュニティ退会機能**：<br>
　コミュニティを抜けることが可能。どこにも通知はされない。<br>

> ■ チャット一覧画面 <br>
・ **チャットユーザ一覧の表示**：<br>
　自分がチャットしている相手が一覧表示される。最新のコメント順にチャットルームが表示される<br>
　`チャット相手の名前`、`プロフ画像`、`最新のチャット内容`、`最新の更新日時`が表示される。<br>

> ■ チャット画面 <br>
・ **チャット機能**：<br>
　1on1のチャット機能。基本機能はコミュニティのチャット機能と同じ。<br>
・ **チャット削除機能**：<br>
　チャットを削除することが可能。ブロック機能を追加したい。<br><br>
![chat](https://github.com/chobencho/my-app/assets/119166395/414f9ca6-811f-47f2-a7e6-8915f00e2ceb)

> ■ マイページ画面 <br>
・ **設定一覧の表示**：<br>
　トップには自分の登録している`プロフ画像`、`名前`、`年齢`、`居住地`、`プロフ編集ボタン`、`年齢確認ボタン`が表示される。<br>
　`お知らせ一覧`、`お問い合わせ`、`パスワード変更`、`利用規約`、`プライバシーポリシー`、`ログアウト`、`アカウント削除`を操作可能。<br>
・ **ログアウト機能**：<br>
　ログイン情報、セッション情報を削除してログアウトし、ログイン画面に遷移する。<br>
・ **アカウント削除機能**：<br>
　アカウントに関連す
るすべての情報を削除する。削除前に、削除確認のモーダルが表示される。<br>
・ **自分の掲示板一覧の表示**：<br>
　自分の作成した掲示板一覧が表示される。<br>
・ **いいね掲示板一覧の表示**：<br>
　自分がいいねした掲示板一覧が表示される。いいねしていれば自分、他人関係なく表示される<br><br>
![mypage](https://github.com/chobencho/my-app/assets/119166395/a9e90b41-aaca-4f66-aa1f-15532c17e8ee)

> ■ ユーザ編集画面 <br>
・ **ユーザ編集機能**：<br>
　自分のプロフィールを編集可能。`名前`、`自己紹介`、`年齢`のみ必須項目。<br>
　編集項目…`名前`、`プロフ画像`、`自己紹介`、`年齢`、`年齢`、`性別`、`学年`、`専攻`、`居住地`、`出身地`、`研究タグ`、`興味分野`、`趣味`<br>
・ **ユーザ編集プレビュー機能**：<br>
　編集画面を入力して保存ボタンを押下すると、プレビュー画面が更新され、他ユーザにどのように表示されるのか確認することが可能。<br><br>
![user_edit](https://github.com/chobencho/my-app/assets/119166395/9048e28b-d563-4048-9a9c-a39db1a6f33f)

> ■ 年齢確認画面 <br>
・ **年齢確認証の送信機能**：<br>
　年齢確認用の学生証や証明書を画像で送信することが可能。<br>
　画像は管理人に送信され、管理人が確認し承認することで年齢確認が完了する。<br>

### 5. 使用技術
フロントエンドとバックエンドは分離して開発しています。

- フロントエンド<br>
HTML / CSS / Tailwind.css<br>
React.js<br>
TypeScript<br>
 
- インフラ(フロントエンド) 予定<br>
AWS(S3, IAM, CloudFont, ACM, Route53, CodePipeline, CodeBuild, CodeDeploy)

- バックエンド<br>
Ruby on Rails (APIモード)

- インフラ(バックエンド) 予定<br>
Nginx、PostgreSQL, AWS(VPC, EIP, IAM, EC2, ALB, Route53, RDS, CodePipeline, CodeDeploy, S3)

- テスト 予定<br>
Request Spec, Model Spec, jest, testing liblary, storybook

- コード管理<br>
GitHub<br>
Sourcetree

### 6. インフラ
AWSを利用する予定<br>
インフラ構成図アップ予定

### 7. DB
ER図の作成はお馴染みのdraw.ioを使用しました。<br>

![ER-1](https://github.com/chobencho/my-app/assets/119166395/84096986-d810-4356-8d5e-16e9321369cb)

テーブル定義書はスプレッドシートにまとめていました。<br>
https://docs.google.com/spreadsheets/d/1msh-b21RCtlXRvZLDTlD7Dqu_OFtOU8ffpMF4jedCiU/edit?usp=sharing


### 8. UI
UI設計はお馴染みのFigmaを使用しました。(一部抜粋)<br>

![map-1](https://github.com/chobencho/my-app/assets/119166395/1841c84a-b258-4a1d-aa7b-7b77a405fdaa)

Figma<br>
https://www.figma.com/file/7UBG8Wtn3nsDXjRBrtFX7u/%E9%99%A2%E7%94%9F?type=design&node-id=0%3A1&mode=design&t=svulOeaTSuKSlPZA-1

### 9. なぜ学習マッチングサービスを作ったのか

自分自身、大学に入ってから勉強について相談できる相手もあまりいなかったため苦労した経験があった。<br>
その際に、大学の先輩や教授にたくさん助けられた経験から、「**もっと気軽に誰かに聞ける環境があればいいのに**」と思っていました。<br>
そこで、**高等教育機関に属する人限定のアプリ**を作ろうと思ったのがきっかけです。<br>
大学生、専門学生、研究機関の研究員、大学教授などを含みます。<br>
他にも、「好きな本について語りたい」「自分と同じ専門の人と情報共有したい」みたいな使い方も良いと思います。<br>

### 10. React側開発で気を付けたこと

■ 同じコードの記述を避ける
 - よく言われていますが、将来的に機能追加や大幅な修正をすることを考慮して、同じコードの記述を避けるように努めました。<br>
コンポーネントをatoms(最小単位のコンポーネント),blocks(atomsで構成する中型コンポーネント),modules(機能を持つ<br>
コンポーネント)のように役割を切り分けていくことで修正箇所を明確にできるようにしました。<br>
具体的に、同じUIを描画する際は、**フォーマットとなるコンポーネントに対して任意のプロパティを渡すだけ**で済むようにしました。<br>
こうすることで、新たにコンポーネントを追加、修正の際に書くコードや量や時間などが大幅に減少しました。<br>
ただ、見る人やプロジェクトによってはこのやり方は見づらいと言われるような感じもあるため、<br>
いい塩梅を探すのは難しいなと感じました。反省点も多いです。

■ 使いやすいUI・UXを意識<br>
 - 配色は、聡明・知性を感じさせるブルーを基調としました。シンプルな配色のほうがユーザーにとっても頭に残るアプリに<br>
なるかなと考えた結果です。<br>
使いやすいUXを実現しようと考えると、よくあるアプリのような構成になってしまいましたが、1つのページに含まれる情報は<br>
なるべく簡潔にするようにして、ユーザーのそのページ内での目的や知りたい情報までの導線を明確にするように意識しました。


### 11. Rails側開発で気を付けたこと

■ リクエスト回数を減らし、レスポンスを高速で返す
 - 従来の設計<br>
開発を始めた当初は、ユーザー詳細やユーザー編集画面でのデータ取得する際に、`ユーザーデータの取得`→`ユーザーの趣味データ取得`→<br>
`ユーザーの興味データ取得`→`ユーザーのタグデータ取得`のようにそれぞれを別々のリクエストで取得していました。<br>
最低でも4回はフロントからリクエストを送信していたため、データ取得だけで数1000msの時間がかかっていました。
 - 変更後の設計<br>
1度のリクエストで、`ユーザーデータ`、`ユーザーの趣味データ`、`ユーザーの興味データ`、`ユーザーのタグデータ`を取得するように<br>
変更しました。1度に返されるJSONデータを画面で表示できるようにフロント側も変更したことでレスポンスは格段に速くなりました。<br>
ユーザーが増えていくと、こういう問題は様々な箇所で発生してくると思うので、常にレスポンスを早くするにはどうすればいいかを<br>
考えるという視点は非常に大切だと学びました。

### 12. これから追加したい機能
・ユーザーのフォロー機能<br>
・掲示板のページネーション機能<br>
・掲示板のいいね数ランキング機能<br>
・掲示板コメントのメンション機能<br>
・チャットのブロック機能<br>
・サードパーティAPIとの連携、共有機能<br>
・Dockerによる環境構築<br>
・CI/CDの実装<br>

### 13. 次のステップ
 ■ 次に学習したいこと
- Java
- Python
- Vue.js
- Go
- Firebase
- モバイルアプリ開発

■ 次に作りたいアプリ
- **独り飲みマッチングアプリ**<br>
独りで飲むのが好きな人同士が交流・情報共有でき、マッチングすれば実際に会うこともできるアプリ<br>
お店の広告も掲載できるようにしたい<br>

- **インバウンド旅行客と国内のガイドや宿をマッチングするアプリ**<br>
日本国内に旅行に来る外国人観光客と日本国内のディープなスポットまで知っているガイドをマッチング<br>
することで日本のインバウンド需要をさらに高めていく、日本の良さをさらに発信していくようなアプリ<br>

### 14.  最後に
初めての開発を通して感じたことをまとめます。この気持ちは大切にしていきたいなと思ったことです。<br>

- **ユーザに便利・楽しいを提供する**<br>
これが**コードを書くことで提供する価値の本質**であると感じました。<br>
 プログラミングすることを目的とするならば、すでにある仕様書通りに作れば良いが、<br>
 本来の目的はその先にいる**ユーザに楽しい時間を提供すること**です。<br>
 コードを書くことは手段であり、より良いユーザ体験を実現するためにあるのだと思いました。<br>
 極論、楽しい時間を提供できるのならコードを書かなくたっていいけど、ぼくらがシステム、ウェブアプリ、ゲームを通して、楽しいという感情を届けていくことで世の中が少しでも明るくなれば良いなと思いました。<br>

- **まずは行動！より良い未来は行動の先にしかない**<br>
やりたいことはたくさんあるが時間がなくて出来ないと嘆く時間があるのなら、まずはやってみる！<br>
その先に自分の成長・より良い未来があると信じる気持ちが強くなりました。<br>
それが自分を深く知ることにつながり、誰かの成長にもつながると信じています。<br>

- **毎日が小さな挑戦！いつの間にか成長している自分**<br>
  開発をしているとできないことに毎日出会います。<br>
  瞬間的な苦しさもありますが、**毎日新しいことができるようになる楽しさ・面白さ**を実感しています。<br>
  小さな達成感が積みあがっていく感覚は他にはないと思いました。<br>
  ふと1カ月前を思い返すと、いつの間にか成長した自分が見えてきました。<br>
  **自分の目標を自分でたてて着実に努力することの大切さ**を実感しています。<br>

- **技術に対する興味が深くなった**<br>
この挙動どうやって実現するの？？どんな技術を使っているの？？なんでこんなにレスポンス早いの？？<br>
と興味を持つ視点が変わりました。それらを実現するためのまだまだわからないことは多いのでもっと吸収して成長したい。<br>

- **なにより楽しくできることが一番大切**<br>
やりっぱなしではなく、ここもっとこうしたほうがユーザ的には良さそうじゃない？後の修正が楽になるくない？<br>
と細かな修正をすることも楽しめたのは、続けていく上でめちゃくちゃ大切やなと感じました。<br>

- **今後はもっと幅広く**<br>
今後は、ひとつの技術だけでなくサーバー・フロント・インフラ等の幅広いスキルを身に着けられるように動いて<br>
フルスタックを目指します。グローバルなサービス視点も持てるように、色んなサービスを触ってみてインプット量も増やしていきたい。<br>
