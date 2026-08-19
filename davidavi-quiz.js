'use strict';



/* 問題
   ここに問題を追加
   question ＝ 問題
   correct   ＝ 正解
   incorrect ＝ 不正解
    */

const questions = [

  {
    question: 'ダビダビと一緒に授業をしてくれるのは？',
    correct: 'ウサギちゃん',
    incorrect: 'アスタリスくん'
  },

  {
    question: 'ダビダビがやっているのは？',
    correct: '株式投資',
    incorrect: '投資詐欺'
  },

  {
    question: 'ダビダビは何のハーフ？',
    correct: '日本人とイタリア人のハーフ',
    incorrect: 'ピザハットのハーフ＆ハーフ'
  },

  {
    question: '「情報」とは？',
    correct: '毎日を豊かにする学問',
    incorrect: '一生を台無しにする学問'
  },
  
  {
    question: 'ダビダビは、何を感じながらプログラミングを学んでほしい<br>と言っていた？',
    correct: '楽しさ',
    incorrect: '苦しみ'
  },
  
  {
    question: 'プログラミングは子供の頃の何に似ている？',
    correct: '落書き帳',
    incorrect: '連絡帳'
  },

  {
    question: 'アカデミックリテラシーでダビダビは何をつけて登場した？',
    correct: 'VRゴーグル',
    incorrect: '格好'
  },
  
  {
    question: 'ダビダビのおばあちゃん家があるのは？',
    correct: 'ヴェネツィア',
    incorrect: '東京ディズニーシーの<br>メディテレーニアンハーバー'
  },

  {
    question: 'ダビダビが言ったのは？',
    correct: '大ヒットアプリを開発して<br>一発当てましょう！',
    incorrect: 'ジャンボ宝くじを買って<br>一発当てましょう！'
  },
  
  {
    question: 'プログラミングは？',
    correct: '頭の中で考えるだけより<br>実際に書いて動かしてみる',
    incorrect: '頭の中で考えるだけで<br>やった気になれる'
  },

  {
    question: '「夏休みに利確しハロウィンまでに戻って来い」<br>というダビダビの格言は何について言っている？',
    correct: 'S&P500',
    incorrect: 'オルカン'
  },

  {
    question: 'ダビダビはレポートを書くと？',
    correct: '「ちゃんと書けて偉いです✨」と褒めてくれる',
    incorrect: '「ベホマズン✨」<br>と疲れを回復してくれる'
  },

  {
    question: 'LinuxというOSの一種に？',
    correct: '「Ubuntu」がある',
    incorrect: '「うっふ～ん ♪ ２」がある'
  },

  {
    question: 'Multipassというのは？',
    correct: '仮想マシンを作成・管理する<br>ためのソフトウェア ',
    incorrect: '手っ取り早く大金を稼ぐ<br>ためのマルチ商法'
  },
 
  {
    question: 'Linuxの癒し系コマンドは？',
    correct: 'cat',
    incorrect: 'dog'
  }

];

/* 画面 */

const titleScreen =
  document.getElementById('title-screen');

const quizScreen =
  document.getElementById('quiz-screen');

const resultCheckScreen =
  document.getElementById('result-check-screen');

const resultScreen =
  document.getElementById('result-screen');

const againScreen =
  document.getElementById('again-screen');

const endScreen =
  document.getElementById('end-screen');

  /* タイトル */

const mainTitle =
  document.getElementById('main-title');

const quizTitle =
  document.getElementById('quiz-title');

const qTitle = document.getElementById('q-title');

const uizTitle = document.getElementById('uiz-title');

  /* ボタン */

const startButton =
  document.getElementById('start-button');

const resultButton =
  document.getElementById('result-button');

const resultNextButton =
  document.getElementById('result-next-button');

const againButton =
  document.getElementById('again-button');

const endButton =
  document.getElementById('end-button');

/* 問題 */

const questionNumber =
  document.getElementById('question-number');

const questionText =
  document.getElementById('question');

const answerA =
  document.getElementById('answer-a');

const answerB =
  document.getElementById('answer-b');

/* 結果画像 */

const resultImage =
  document.getElementById('result-image');

/* クイズの状態 */

let quizQuestions = [];

let currentQuestionIndex = 0;

let correctCount = 0;

/* 画面切り替え */

function showScreen(screen) {

  const screens = [
    titleScreen,
    quizScreen,
    resultCheckScreen,
    resultScreen,
    againScreen,
    endScreen
  ];

  screens.forEach(function(screenElement) {
    screenElement.classList.add('hidden');
  });

  screen.classList.remove('hidden');
}

/* タイトル表示 */

function showTitle() {

  const titleText = 'ビビデダビデ';
  let index = 0;

  /* ビビデダビデを1文字ずつ表示 */

  const titleTimer = setInterval(function() {

    mainTitle.textContent += titleText[index];
    index++;

    /* ビビデダビデが全部表示されたら */

    if (index >= titleText.length) {

      clearInterval(titleTimer);

      /* Qが出るまで少し待つ */

      setTimeout(function() {

        /* 普通サイズのQを表示 */

        qTitle.textContent = 'Q';
        qTitle.classList.add('q-normal');

        /* 少し待ってからQを大きくする */

        setTimeout(function() {

          qTitle.classList.remove('q-normal');
          qTitle.classList.add('q-large');

          /* Qを大きくしたまま少し待つ */

          setTimeout(function() {

            /* Qを元のサイズに戻す */

            qTitle.classList.remove('q-large');
            qTitle.classList.add('q-normal');

            /* 少し待ってからuizを表示 */

            setTimeout(function() {

              uizTitle.textContent = 'uiz';
              uizTitle.classList.add('show');

            }, 500);

          }, 1000);

        }, 500);

      }, 500);
    }

  }, 250);
}

/* シャッフル */

function shuffle(array) {
  const shuffled =
    [...array];
  for (
    let i = shuffled.length - 1;
    i > 0;
    i--
  ) {
    const randomIndex =
      Math.floor(
        Math.random() * (i + 1)
      );
    const temp =
      shuffled[i];


    shuffled[i] =
      shuffled[randomIndex];
    shuffled[randomIndex] =
      temp;
  }
  return shuffled;
}

/* クイズ開始 */

function startQuiz() {

  /* 問題をランダムに並べる */

  const shuffledQuestions =
    shuffle(questions);

  /* その中から5問選ぶ */

  quizQuestions =
    shuffledQuestions.slice(0, 5);

  /* 最初に戻す */

  currentQuestionIndex = 0;
  correctCount = 0;

  /* 問題画面へ */

  showScreen(quizScreen);
  showQuestion();
}

/* 問題表示 */

function showQuestion() {
  const currentQuestion =
    quizQuestions[
      currentQuestionIndex
    ];

  /* 問題番号 */

  questionNumber.textContent =
    `第${currentQuestionIndex + 1}問 / 5問`;

  /* 問題文 */

  questionText.innerHTML =
    currentQuestion.question;

  /* 正解と不正解をランダムに並べる */

  const answers =
    shuffle([
      {
        text: currentQuestion.correct,
        correct: true
      },
      {
        text: currentQuestion.incorrect,

        correct: false
      }
    ]);

  /* A */

  answerA.innerHTML =
    answers[0].text;

    answerA.dataset.correct =
    answers[0].correct;

  /* B */

  answerB.innerHTML =
    answers[1].text;

  answerB.dataset.correct =
    answers[1].correct;

  }

/* 回答 */

function answerQuestion(button) {

  /* 正解かどうか確認 */

  const isCorrect =
    button.dataset.correct === 'true';

  /* 正解なら1点 */

  if (isCorrect) {
    correctCount++;
  }

  /* 次の問題 */

  currentQuestionIndex++;

  /* 5問終わった場合 */

  if (
    currentQuestionIndex >= 5
  ) {

    /*「結果を見る」画面へ */

    showScreen(
      resultCheckScreen
    );

    return;
  }

  /* 次の問題を表示 */

  showQuestion();
}

/* 結果表示 */

function showResult() {

  /*
  　正解数によって画像を決める
    0問 → 40.jpg
    1問 → 41.jpg
    2問 → 42.jpg
    3問 → 43.jpg
    4問 → 44.jpg
    5問 → 45.jpg
  */

  const imageNumber =
    40 + correctCount;

  /* 結果画像を設定 */

  resultImage.src =
    `images/${imageNumber}.jpg`;

  resultImage.alt =
    `${correctCount}問正解`;

  /* 結果画面を表示 */

  showScreen(
    resultScreen
  );
}

/* スタート */

startButton.addEventListener(
  'click',
  function() {
    startQuiz();
  }
);

/* 回答A */

answerA.addEventListener(
  'click',
  function() {
    answerQuestion(answerA);
  }
);

/* 回答B */

answerB.addEventListener(
  'click',
  function() {
    answerQuestion(answerB);
  }
);

/* 結果を見る */

resultButton.addEventListener(
  'click',
  function() {
    showResult();
  }
);

/* 結果 → もう一回 / 終了 */

resultNextButton.addEventListener(
  'click',
  function() {
    showScreen(
      againScreen
    );
  }
);

/* もう一回 */

againButton.addEventListener(
  'click',
  function() {
    startQuiz();
  }
);

/* 終了 */

endButton.addEventListener(
  'click',
  function() {
    showScreen(
      endScreen
    );
  }
);

/* 最初にタイトル画面を表示 */

showScreen(
  titleScreen
);
showTitle();

