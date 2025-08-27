# ポモドーロタイマーWebアプリケーション アーキテクチャ案

## 技術スタック

- バックエンド: Flask (Python)
- フロントエンド: HTML, CSS, JavaScript
- 状態管理: JavaScript（クライアント側タイマー制御）
- データ保存: サーバー側でセッションやファイル/DB保存（進捗データ）

---

## ディレクトリ構成例

```
/workspaces/2025-Github-Copilot-Workshop-Python/
├── app.py                # Flaskアプリ本体
├── static/
│   ├── style.css         # CSS
│   └── timer.js          # JavaScript
├── templates/
│   └── index.html        # メイン画面
├── tests/
│   ├── test_app.py       # Flask APIのテスト
│   ├── test_progress.py  # 進捗ロジックのテスト
│   └── test_timer.js     # JSタイマーのテスト
└── architecture.md       # このファイル
```

---

## アーキテクチャ概要

### フロントエンド

- **index.html**  
  UIモックに基づき、タイマー表示・進捗表示・開始/リセットボタンを配置。
- **style.css**  
  モック画像のデザインを再現。
- **timer.js**  
  タイマーのカウントダウン、進捗管理、ボタン操作、円グラフ描画（CanvasやSVG）。

### バックエンド（Flask）

- `/`  
  メイン画面表示（index.htmlをレンダリング）。
- `/progress`  
  今日の進捗データ取得API（必要ならAjaxで取得）。
- `/reset`  
  タイマーや進捗のリセットAPI（必要ならPOST）。

### 状態管理

- タイマーは基本的にクライアント側（JavaScript）で管理。
- 進捗（完了回数・集中時間）はサーバー側で管理し、Ajaxで取得・保存可能。

---

## ユニットテスト容易化のための設計

- Flaskアプリ本体とルーティングを分離し、テスト時にインスタンス化しやすくする。
- ビジネスロジック（進捗計算など）を関数/クラス化し、個別にテスト可能にする。
- JavaScriptのタイマーや進捗管理ロジックを関数化し、Jest等で単体テストしやすくする。
- 進捗データ管理をサービス層に分離し、モック化してテスト可能にする。
- テスト用設定ファイル（config）を用意し、テスト時は本番と異なる設定を使えるようにする。
- APIはRESTfulに設計し、テストしやすくする。
- 依存関係の注入（DI）を意識し、モックやスタブを使いやすくする。

---

## 参考

- [Flask公式ドキュメント](https://flask.palletsprojects.com/)
- [HTML Canvas API](https://developer.mozilla.org/ja/docs/Web/API/Canvas_API)
- [SVG円グラフの作り方](https://developer.mozilla.org/ja/docs/Web/SVG)
