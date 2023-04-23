# # ムービーアプリ

[スタイルイシュー]
スタイル:アプリタイトルの中央揃え
「ムービーリスト」というフレーズを画面の真ん中に表示（text-align:center）
スタイル: リスト間の間隔改善
リスト間の間隔を10px程度与える (左右ではなく下段だけ与える)

[ロジックの話題]
ロジック:映画評点が8点以上の場合hoticonタイトルの横に表示
ctrlcmd spaceを通じて燃えるアイコンを入れる
ロジック: 映画ジャンル配列の length が 0 のときの処理
"ジャンル:情報なし"で表示
ロジック: 映画詳細情報トグル作成
* * リストをクリックすると、aタグに移動するのではなく、リストの下に以下の情報の表示をトグローオンオフする。
タイトル: title_long
ジャンル:genres
ランタイム: runtime
評点: rating
あらすじ:summary
トレントダウンロードリンク:torrents // リンク1リンク2···

[リファクタリングイシュー]
リファクタリング:vue面views、react面pagesにコンポーネントフォルダを移動させ、btnなどのコンポーネントでフォルダ分け
リファクタリング: Title コンポーネント化
<h1>ムービーリスト</h1>
textはtitle propsを渡すこと
リファクタリング: MovieList コンポーネント化
リファクタリング: コンポーネント フォルダーの整理
src/components/MovieList/index.js形態に変えること
src/components/MovieList/style.css
src/components/Title/index.js
src/components/Title/index.css
リファクトリング:Typescript導入
リファクタリング:scss導入後、変数をグローバル化してインポートする方式に変更
1. 1. 1. npm i node-sass
2. 2.css拡張子をすべてscssに変更
3. 3.次のファイルに変数宣言
src/style/font.scss
src/style/color。scss
4. 4. 既存のcssdすべてのfont-sizeとcolor変数化
例: $blue: '#？？？'
例 : $font-md: '15px' サイズは任意で
$font-xl, $font-lg, $font-md, $font-sm, $font-xs
5. 5。 ルートグローバル変数ファイルsrc/style/resources。scss生成
@import './font.scss'
@import './color。scss'
6. 6.既存のスタイルファイルに@importグローバル'~/style/resouces.scss'でインポートしておいて、該当変数を使用
リファクタリング:css-module適用
拡張子*.module.*に変えてインポート部分設定も一緒に変更
リファクタリング:MovieListコンポーネントレンダリングのパフォーマンスチューニング(最適化)

[機能追加]
機能:TodoList APIを読み込み、TO DOリストメニューおよびコンポーネント実装
API: https://jsonplaceholder.typicode.com/todos
機能:UserList APIを読み込み、ユーザーリストメニューおよびコンポーネント実装
API: https://jsonplaceholder.typicode.com/users



# # ニュースアプリ
