// 抽選対象のデータ（名前と画像ファイル名）
const allParticipants = [
    { name: "フシギダネ", image: "husigidane.png" }, 
    { name: "フシギソウ", image: "husigisou.png" },
    { name: "フシギバナ", image: "husigibana.png" },
    { name: "ヒトカゲ", image: "hitokage.png" },
    { name: "リザード", image: "riza-do.png" },
    { name: "リザードン", image: "riza-donn.png" },
    { name: "ゼニガメ", image: "zenigame.png" },
    { name: "カメール", image: "kame-ru.png" },
    { name: "カメックス", image: "kamekkusu.png" },
    { name: "キャタピー", image: "kyatapi-.png" },
    { name: "トランセル", image: "torannseru.png" },
    { name: "バタフリー", image: "batahuri-.png" },
    { name: "ビードル", image: "bi-doru.png" },
    { name: "コクーン", image: "koku-nn.png" },
    { name: "スピアー", image: "supia-.png" },
    // 必要に応じてここに追加してください
];

// 抽選に使用する、現在の残りの参加者リスト（重複なし抽選用）
let currentParticipants = [];

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
window.onload = function() {
    console.log("window.onload: Page fully loaded.");
    initializeLottery();

    if (startButton) {
        startButton.addEventListener('click', handleStartButtonClick);
        console.log("window.onload: Start Button event listener added.");
    } else {
        console.error("window.onload: Start Button element not found!");
    }

    if (resetButton) {
        resetButton.addEventListener('click', handleResetButtonClick);
        console.log("window.onload: Reset Button event listener added.");
    } else {
        console.error("window.onload: Reset Button element not found!");
    }
};

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