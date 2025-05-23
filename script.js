// 抽選対象のデータ（名前と画像ファイル名）
const allParticipants = [
    // ... (あなたの現在の参加者リスト) ...
    { name: "内山 直揮", image: "1.jpg" },
    { name: "中津川 浩平", image: "2.jpg" },
    { name: "有地 悠人", image: "3.jpg" },
    { name: "西谷 頼征", image: "4.jpg" },
    { name: "中尾 恵太", image: "5.jpg" }, 
    { name: "草別 秀", image: "6.jpg" },
    { name: "高橋 克巳", image: "7.jpg" },
    { name: "小笠原 一彦", image: "8.jpg" },
    { name: "尾﨑 誠", image: "9.jpg" },
    { name: "渡邊 龍和", image: "10.jpg" },
    { name: "小田 翔矢", image: "11.jpg" },
    { name: "高橋 章徳", image: "12.jpg" },
    { name: "石田 貴徳", image: "13.jpg" },
    { name: "谷藤 良祐", image: "14.jpg" },
    { name: "相澤 勇也", image: "15.jpg" },
    { name: "小原 健心", image: "16.jpg" },
    { name: "渡邉 綾乃", image: "17.jpg" },
    { name: "小野寺 広敏", image: "18.jpg" },
    { name: "清水 陽平", image: "19.jpg" },
    { name: "渡部 司", image: "20.jpg" },
    { name: "青柳 月弥", image: "21.jpg" },
    { name: "橋詰 仁美", image: "22.jpg" },
    { name: "井出 陸奥雄", image: "23.jpg" },
    { name: "中村 武剛", image: "24.jpg" },
    { name: "岡崎 侑波", image: "25.jpg" },
    { name: "和田 紗耶香", image: "26.jpg" },
    { name: "佐々木 進", image: "27.jpg" },
    { name: "志村 佑真", image: "28.jpg" },
    { name: "松永 初輝", image: "29.jpg" },
    { name: "金子 竜久", image: "30.jpg" },
    { name: "石川 朋華", image: "31.jpg" },
    { name: "林 家俊", image: "32.jpg" },
    { name: "亀山 剛彦", image: "33.jpg" },
    { name: "上口 昌史", image: "34.jpg" },
    { name: "髙橋 護", image: "35.jpg" },
    { name: "高橋 涼", image: "36.jpg" },
    { name: "工藤 嶺", image: "37.jpg" },
    { name: "佐藤 玲偉", image: "38.jpg" },
    { name: "苅谷 暁代", image: "39.jpg" },
    { name: "外山 泰生", image: "40.jpg" },
    { name: "中村 享永", image: "41.jpg" },
    { name: "渡邉 政伸", image: "42.jpg" },
    { name: "八木 彩菜", image: "43.jpg" },
    { name: "八子 泰周", image: "44.jpg" },
    { name: "松浦 正志", image: "45.jpg" },
    { name: "佐藤 明弘", image: "46.jpg" },
    { name: "大黒 将史", image: "47.jpg" },
    { name: "西 赳", image: "48.jpg" },
    { name: "岡﨑 拓也", image: "49.jpg" },
    { name: "上田 恵里花", image: "50.jpg" },
    { name: "菊地 一勝", image: "51.jpg" },
    { name: "内藤 圭一", image: "52.jpg" },
    { name: "木村 晃士", image: "53.jpg" },
    { name: "菅原 敏之", image: "54.jpg" },
    { name: "吉川 賢哉", image: "55.jpg" },
    { name: "佐伯 柚樹", image: "56.jpg" },
    { name: "今岡 美乃里", image: "57.jpg" },
    { name: "小林 賢二", image: "58.jpg" },
    { name: "西山 大亮", image: "59.jpg" },
    { name: "菅谷 楓", image: "60.jpg" },
    { name: "佐藤 登", image: "61.jpg" },
    { name: "和田 圭司", image: "62.jpg" },
    { name: "黒羽子 大輔", image: "63.jpg" },
    { name: "井上 幸治", image: "64.jpg" },
    { name: "竹島 岳也", image: "65.jpg" },
    { name: "平川 桜子", image: "66.jpg" },
    { name: "吉村 優七", image: "67.jpg" },
    { name: "山本 寧々", image: "68.jpg" },
    { name: "上田 将太", image: "69.jpg" },
    { name: "浅野 領太", image: "70.jpg" },
    { name: "芥川 隆太", image: "71.jpg" },
    { name: "鈴木 亮広", image: "72.jpg" },
    { name: "佐賀 雄樹", image: "73.jpg" },
    { name: "菊池 明日香", image: "74.jpg" },
    { name: "吉田 矩萌", image: "75.jpg" },
    { name: "古川 雄太", image: "76.jpg" },
    { name: "飛田 悠里", image: "77.jpg" },
    { name: "森 結衣子", image: "78.jpg" },
    { name: "佐々木 歩", image: "79.jpg" },
    { name: "谷内山 勝俊", image: "80.jpg" },
    { name: "一法師 達也", image: "81.jpg" },
    { name: "葛岡 拓真", image: "82.jpg" },
    { name: "厚木 菜良", image: "83.jpg" },
    { name: "下道 銀士", image: "84.jpg" },
    { name: "小林 達夫", image: "85.jpg" },
    { name: "林 容", image: "86.jpg" },
    { name: "橋田 昌之", image: "87.jpg" },
    { name: "田久 敦士", image: "88.jpg" },
    { name: "小川 浩一", image: "89.jpg" },
    { name: "福重 実", image: "90.jpg" },
    { name: "内間 直人", image: "91.jpg" },
    { name: "大野 卓実", image: "92.jpg" },
    { name: "近藤 肇", image: "93.jpg" },
    { name: "木村 剛大", image: "94.jpg" },
    { name: "石黒 翔太", image: "95.jpg" },
    { name: "小助川 祐", image: "96.jpg" },
    { name: "酒井 茜", image: "97.jpg" },
    { name: "佐々木 豪", image: "98.jpg" },
    { name: "増田 晃次", image: "99.jpg" },
    { name: "福原 光咲", image: "100.jpg" },
    { name: "LUONG　MY　NGUYET", image: "101.jpg" },
    { name: "伊谷 会那", image: "102.jpg" },
    { name: "古川 麻耶", image: "103.jpg" },
    { name: "小林 輝久", image: "104.jpg" },
    { name: "昆 克実", image: "105.jpg" },
    { name: "中野 智子", image: "106.jpg" },
    { name: "髙井 悠", image: "107.jpg" },
    { name: "鈴木 孝陸", image: "108.jpg" },
    { name: "渡邉 佑夏", image: "109.jpg" },
    { name: "村上 明穂", image: "110.jpg" },
    { name: "田中 淳子", image: "111.jpg" },
    { name: "栗原 しのぶ", image: "112.jpg" },
    { name: "清水 瞳", image: "113.jpg" },
    { name: "稲崎 江里", image: "114.jpg" },
    { name: "安井 亜美", image: "115.jpg" },
    { name: "大久保 明朗", image: "116.jpg" },
    { name: "神 慶人", image: "117.jpg" },
    { name: "松沢 弘太", image: "118.jpg" },
    { name: "石井 創", image: "119.jpg" },
    { name: "廣田 佳祐", image: "120.jpg" },
    { name: "大西 裕治", image: "121.jpg" },
    { name: "山口 浩平", image: "122.jpg" },
    { name: "小山 真平", image: "123.jpg" },
    { name: "笠井 瑛里香", image: "124.jpg" },
    { name: "安田 優樹", image: "125.jpg" },
    { name: "早坂 康佑", image: "126.jpg" },
    { name: "隈川 雛奈子", image: "127.jpg" },
    // 必要に応じてここに追加してください
];

// 抽選に使用する、現在の残りの参加者リスト（重複なし抽選用）
let currentParticipants = [];

// ★追加: 画像の事前読み込み用配列
const preloadedImages = []; // ここに追加

// HTML要素の取得
const mainTitle = document.getElementById('mainTitle');
const selectedImage = document.getElementById('selectedImage');
const selectedName = document.getElementById('selectedName');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');

// 画像が保存されているフォルダのパス
const imageFolderPath = 'images/';

// 抽選演出に関する設定
const SHUFFLE_DURATION = 2000; // シャッフル演出の継続時間（ミリ秒、例: 2000ms = 2秒）
const SHUFFLE_INTERVAL = 100; // シャッフル中の画像切り替え間隔（ミリ秒、例: 100ms）
let shuffleIntervalId = null; // setIntervalのIDを保持（停止するために必要）

// --- 初期化処理 ---
function initializeLottery() {
    console.log("initializeLottery: Lottery system initializing...");

    currentParticipants = [...allParticipants]; // 参加者リストを元の状態に戻す

    // 全ての表示要素を初期状態にリセット
    if (selectedImage) {
        selectedImage.classList.add('hidden'); // hiddenクラスを適用
        selectedImage.style.transition = 'none'; // アニメーションを無効化
        selectedImage.style.transform = 'scale(0)'; // 透明かつ最小サイズにリセット
        selectedImage.style.opacity = '0';
    }
    if (selectedName) {
        selectedName.classList.add('hidden'); // hiddenクラスを適用
        selectedName.style.transition = 'none'; // アニメーションを無効化
        selectedName.style.opacity = '0'; // 透明に設定
    }
    if (resetButton) resetButton.classList.add('hidden');
    if (startButton) startButton.classList.remove('hidden');
    if (startButton) startButton.disabled = false;

    // h1 の初期設定
    if (mainTitle) {
        mainTitle.textContent = "抽選システム"; // 初期タイトル
        mainTitle.style.transition = 'none'; // アニメーションを無効化
        mainTitle.style.transform = 'scale(1)'; // 通常サイズ
        mainTitle.style.opacity = '1'; // 不透明
    }

    if (selectedImage) selectedImage.src = ""; // 画像をクリア
    if (selectedName) selectedName.textContent = ""; // 名前をクリア

    updateRemainingCount(); // 残り人数の表示を更新
    console.log("initializeLottery: Initialization complete. currentParticipants length:", currentParticipants.length);
}

// 残り人数を表示する関数
function updateRemainingCount() {
    console.log("updateRemainingCount: Updating count. currentParticipants length:", currentParticipants.length);
    if (startButton) {
        startButton.textContent = `抽選開始 (${currentParticipants.length}人)`;
    }
}

// --- イベントリスナーの設定 ---
// window.onload の代わりに DOMContentLoaded を使うのが一般的です
document.addEventListener('DOMContentLoaded', () => { // ここを修正
    console.log("DOMContentLoaded: DOM fully loaded and parsed.");
    initializeLottery();

    if (startButton) {
        startButton.addEventListener('click', handleStartButtonClick);
        console.log("DOMContentLoaded: Start Button event listener added.");
    } else {
        console.error("DOMContentLoaded: Start Button element not found!");
    }

    if (resetButton) {
        resetButton.addEventListener('click', handleResetButtonClick);
        console.log("DOMContentLoaded: Reset Button event listener added.");
    } else {
        console.error("DOMContentLoaded: Reset Button element not found!");
    }

    // ★追加: 全画像を事前に読み込む関数を呼び出す
    preloadAllImages(); // ここに追加
});

// ★追加: 画像の事前読み込み関数
function preloadAllImages() {
    console.log("Preloading all images...");
    allParticipants.forEach(participant => {
        const img = new Image();
        img.src = imageFolderPath + participant.image;
        preloadedImages.push(img); // 後で参照できるように配列に保持
        // ロード完了時の処理（オプション）
        img.onload = () => {
            // console.log(`Image loaded: ${participant.image}`);
        };
        img.onerror = () => {
            console.error(`Failed to load image: ${participant.image}`);
        };
    });
    console.log("All images preloading initiated.");
}


// --- 抽選開始ボタンのクリックハンドラー ---
function handleStartButtonClick() {
    console.log("handleStartButtonClick: Start button clicked.");
    startButton.disabled = true; // ボタンを無効化

    // シャッフル演出が始まった時点で抽選対象がいない場合は処理を中断し、アラート
    if (currentParticipants.length === 0) {
        alert("すべての参加者が選ばれました！リセットしてください。");
        startButton.classList.add('hidden');
        resetButton.classList.remove('hidden');
        updateRemainingCount();
        console.log("handleStartButtonClick: No participants left. Exiting.");
        return;
    }

    // 抽選開始時にh1を隠す
    if (mainTitle) {
        mainTitle.style.transition = 'none';
        mainTitle.style.transform = 'scale(0)';
        mainTitle.style.opacity = '0';
    }

    // シャッフル演出前に画像と名前をリセット
    if (selectedImage) {
        selectedImage.classList.add('hidden');
        selectedImage.style.transition = 'none';
        selectedImage.style.transform = 'scale(0)';
        selectedImage.style.opacity = '0';
    }
    if (selectedName) {
        selectedName.classList.add('hidden'); // hiddenクラスを確実に適用
        selectedName.style.transition = 'none'; // アニメーションを無効化
        selectedName.style.opacity = '0'; // 透明に設定
    }


    shuffleIntervalId = setInterval(() => {
        // 全参加者リストからランダムに画像と名前を選んで表示
        const tempRandomIndex = Math.floor(Math.random() * allParticipants.length);
        const tempParticipant = allParticipants[tempRandomIndex];

        if (selectedImage) {
            // 事前読み込みされた画像を使う (ブラウザがキャッシュからロードする)
            selectedImage.src = imageFolderPath + tempParticipant.image;
            selectedImage.classList.remove('hidden'); // hiddenクラスを一時的に解除
            selectedImage.style.transition = 'none'; // シャッフル中はアニメーション無効
            selectedImage.style.transform = 'scale(1)'; // 通常サイズ
            selectedImage.style.opacity = '1'; // 不透明
        }
        if (selectedName) {
            selectedName.textContent = tempParticipant.name; // シャッフル中は「さん」を付けない
            // シャッフル中の名前は一時的に表示。アニメーションは無し
            selectedName.classList.remove('hidden'); // hiddenクラスを一時的に解除
            selectedName.style.transition = 'none'; // シャッフル中はアニメーション無効
            selectedName.style.opacity = '1'; // 不透明
        }
    }, SHUFFLE_INTERVAL);

    // --- シャッフル演出の終了と結果表示 ---
    setTimeout(() => {
        clearInterval(shuffleIntervalId); // シャッフルを停止
        console.log("handleStartButtonClick: Shuffle animation stopped.");

        const randomIndex = Math.floor(Math.random() * currentParticipants.length);
        const selectedParticipant = currentParticipants[randomIndex];

        // 選ばれた参加者をリストから削除
        currentParticipants.splice(randomIndex, 1);

        // 最終的な画像と名前を設定
        if (selectedImage) selectedImage.src = imageFolderPath + selectedParticipant.image;
        if (selectedName) selectedName.textContent = selectedParticipant.name + "さん"; // ここで「さん」を追加

        // --- ズームイン演出のトリガー（画像と名前、おめでとうメッセージ） ---
        // 強制的に初期状態に戻し、短い遅延後にアニメーションをトリガー
        if (selectedImage) {
            selectedImage.style.transition = 'none'; // 一旦トランジション無効
            selectedImage.style.transform = 'scale(0)'; // 強制的に0倍
            selectedImage.style.opacity = '0'; // 透明
        }
        if (selectedName) {
            selectedName.style.transition = 'none'; // 一旦トランジション無効
            selectedName.style.opacity = '0'; // 透明
            selectedName.classList.add('hidden'); // 念のためhiddenクラスを適用し、確実に非表示に
        }


        // ごく短い時間（例: 50ミリ秒）後に、ズームインアニメーションを開始
        setTimeout(() => {
            if (selectedImage) {
                selectedImage.style.transition = 'transform 1.0s ease-out, opacity 1.0s ease-in'; // トランジション有効
                selectedImage.classList.remove('hidden'); // hiddenクラス削除
                selectedImage.style.transform = 'scale(1)'; // 拡大
                selectedImage.style.opacity = '1'; // 不透明
            }
            if (selectedName) {
                selectedName.style.transition = 'opacity 1.5s ease-in-out'; // トランジション有効
                selectedName.classList.remove('hidden'); // hiddenクラス削除（ここでhiddenが解除される）
                selectedName.style.opacity = '1'; // 不透明
            }
            console.log("handleStartButtonClick: Final result displayed with zoom-in.");

            // h1 を「おめでとうございます」に設定し、ズームイン表示
            if (mainTitle) {
                mainTitle.textContent = "おめでとうございます！";
                mainTitle.style.transition = 'transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 0.8s ease-in';
                mainTitle.style.transform = 'scale(1)';
                mainTitle.style.opacity = '1';
            }


            // ボタンの表示状態を切り替え
            if (currentParticipants.length === 0) {
                // すべての抽選が終わった場合
                startButton.classList.add('hidden');
                resetButton.classList.remove('hidden');
            } else {
                // まだ参加者が残っている場合
                startButton.classList.remove('hidden');
                resetButton.classList.add('hidden');
                startButton.disabled = false;
            }

            updateRemainingCount(); // 残り人数を更新
        }, 50); // わずかな遅延

    }, SHUFFLE_DURATION);
}

// --- リセットボタンのクリックハンドラー ---
function handleResetButtonClick() {
    console.log("handleResetButtonClick: Reset button clicked.");
    // 表示内容を隠す
    if (selectedImage) {
        selectedImage.classList.add('hidden');
        selectedImage.style.transition = 'none';
        selectedImage.style.transform = 'scale(0)';
        selectedImage.style.opacity = '0';
    }
    if (selectedName) {
        selectedName.classList.add('hidden');
        selectedName.style.transition = 'none';
        selectedName.style.opacity = '0';
    }
    // h1 をリセット
    if (mainTitle) {
        mainTitle.textContent = "抽選システム"; // 初期タイトルに戻す
        mainTitle.style.transition = 'none';
        mainTitle.style.transform = 'scale(1)';
        mainTitle.style.opacity = '1';
    }


    // もし抽選演出が実行中なら停止する
    if (shuffleIntervalId) {
        clearInterval(shuffleIntervalId);
        shuffleIntervalId = null;
    }

    initializeLottery(); // 初期化処理を実行して、抽選をリセット
    console.log("handleResetButtonClick: Lottery system reset.");
}
