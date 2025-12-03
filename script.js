const characters = ['アミール','オーウェン','オルレア','カイロン','カシウス','カリーペ','セレーナ','トレサ','ニア','ハル','ヒューゴ','ベリル','ベロニカ','マグナ','マリベル','ミカ','メイリン','ユキ','リン','ルーカス','ルーク','レイ','レノア','チズル'];
let currentCharacter = 'リン';

// 内部IDは共通で開始1～3、固有1～5、共有、モンスター
const cardNameMap = {
   'リン': {
    '開始1':'開始カード1',
    '開始2':'開始カード2',
    '開始3':'開始カード3',
    '固有1':'リン固有1',
    '固有2':'リン固有2',
    '固有3':'リン固有3',
    '固有4':'リン固有4',
    '固有5':'リン固有5',
    '共有カード':'共有カード',
    'モンスターカード':'モンスターカード'
  },
  'アミール': {
    '開始1':'アミール開始1',
    '開始2':'アミール開始2',
    '開始3':'アミール開始3',
    '固有1':'アミール固有1',
    '固有2':'アミール固有2',
    '固有3':'アミール固有3',
    '固有4':'アミール固有4',
    '固有5':'アミール固有5',
    '共有カード':'共有カード',
    'モンスターカード':'モンスターカード'
  },
  'オーウェン': {
    '開始1':'オーウェン開始1',
    '開始2':'オーウェン開始2',
    '開始3':'オーウェン開始3',
    '固有1':'オーウェン固有1',
    '固有2':'オーウェン固有2',
    '固有3':'オーウェン固有3',
    '固有4':'オーウェン固有4',
    '固有5':'オーウェン固有5',
    '共有カード':'共有カード',
    'モンスターカード':'モンスターカード'
  },
  'オルレア': {
    '開始1':'オルレア開始1',
    '開始2':'オルレア開始2',
    '開始3':'オルレア開始3',
    '固有1':'オルレア固有1',
    '固有2':'オルレア固有2',
    '固有3':'オルレア固有3',
    '固有4':'オルレア固有4',
    '固有5':'オルレア固有5',
    '共有カード':'共有カード',
    'モンスターカード':'モンスターカード'
  },
  'カイロン': {
    '開始1':'滅',
    '開始2':'滅',
    '開始3':'救',
    '固有1':'虚無の残像',
    '固有2':'消滅の烙印',
    '固有3':'ブラックホール',
    '固有4':'虚妄の誓約',
    '固有5':'無憾の鼓動',
    '共有カード':'共有カード',
    'モンスターカード':'モンスターカード'
  },
  'カシウス': {
    '開始1':'カシウス開始1',
    '開始2':'カシウス開始2',
    '開始3':'カシウス開始3',
    '固有1':'カシウス固有1',
    '固有2':'カシウス固有2',
    '固有3':'カシウス固有3',
    '固有4':'カシウス固有4',
    '固有5':'カシウス固有5',
    '共有カード':'共有カード',
    'モンスターカード':'モンスターカード'
  },
  'カリーペ': {
    '開始1':'ムチ打ち',
    '開始2':'斬り上げ',
    '開始3':'ティールの誓い',
    '固有1':'バルチャー射出',
    '固有2':'大剣アクイラ',
    '固有3':'威圧',
    '固有4':'再集結',
    '固有5':'絶対守護',
    '共有カード':'共有カード',
    'モンスターカード':'モンスターカード'
  },
  'セレーナ': {
    '開始1':'セレーナ開始1',
    '開始2':'セレーナ開始2',
    '開始3':'セレーナ開始3',
    '固有1':'セレーナ固有1',
    '固有2':'セレーナ固有2',
    '固有3':'セレーナ固有3',
    '固有4':'セレーナ固有4',
    '固有5':'セレーナ固有5',
    '共有カード':'共有カード',
    'モンスターカード':'モンスターカード'
  },
  'トレサ': {
    '開始1':'トレサ開始1',
    '開始2':'トレサ開始2',
    '開始3':'トレサ開始3',
    '固有1':'トレサ固有1',
    '固有2':'トレサ固有2',
    '固有3':'トレサ固有3',
    '固有4':'トレサ固有4',
    '固有5':'トレサ固有5',
    '共有カード':'共有カード',
    'モンスターカード':'モンスターカード'
  },
  'ニア': {
    '開始1':'ストローク',
    '開始2':'アンプセラピー',
    '開始3':'アンプセラピー',
    '固有1':'Gコード',
    '固有2':'アクセントミュート',
    '固有3':'ソウルリーフ',
    '固有4':'アダジオ',
    '固有5':'ニアの好奇心',
    '共有カード':'共有カード',
    'モンスターカード':'モンスターカード'
  },
  'ハル': {
    '開始1':'アンカー',
    '開始2':'パワーアンカー',
    '開始3':'アンカードロップ',
    '固有1':'アンカーシュート',
    '固有2':'アンカーポインター',
    '固有3':'チャージ',
    '固有4':'エネルギーチャージ',
    '固有5':'クイックリフト',
    '共有カード':'共有カード',
    'モンスターカード':'モンスターカード'
  },
  'ヒューゴ': {
    '開始1':'ナイフ投げ',
    '開始2':'ナイフ投げ',
    '開始3':'防御システム',
    '固有1':'狩猟本能',
    '固有2':'ナイフ投擲',
    '固有3':'早い解決方法',
    '固有4':'ディンゴの遠吠え',
    '固有5':'万事屋のやり方',
    '共有カード':'共有カード',
    'モンスターカード':'モンスターカード'
  },
  'ベリル': {
    '開始1':'ベリル開始1',
    '開始2':'ベリル開始2',
    '開始3':'ベリル開始3',
    '固有1':'ベリル固有1',
    '固有2':'ベリル固有2',
    '固有3':'ベリル固有3',
    '固有4':'ベリル固有4',
    '固有5':'ベリル固有5',
    '共有カード':'共有カード',
    'モンスターカード':'モンスターカード'
  },
  'ベロニカ': {
    '開始1':'速射弾',
    '開始2':'速射弾',
    '開始3':'金○花の幻想',
    '固有1':'発射準備',
    '固有2':'息抜き',
    '固有3':'決意のペンダント',
    '固有4':'コワルスキー卿',
    '固有5':'爆撃準備',
    '共有カード':'共有カード',
    'モンスターカード':'モンスターカード'
  },
  'マグナ': {
    '開始1':'マグナ開始1',
    '開始2':'マグナ開始2',
    '開始3':'マグナ開始3',
    '固有1':'マグナ固有1',
    '固有2':'マグナ固有2',
    '固有3':'マグナ固有3',
    '固有4':'マグナ固有4',
    '固有5':'マグナ固有5',
    '共有カード':'共有カード',
    'モンスターカード':'モンスターカード'
  },
  'マリベル': {
    '開始1':'マリベル開始1',
    '開始2':'マリベル開始2',
    '開始3':'マリベル開始3',
    '固有1':'マリベル固有1',
    '固有2':'マリベル固有2',
    '固有3':'マリベル固有3',
    '固有4':'マリベル固有4',
    '固有5':'マリベル固有5',
    '共有カード':'共有カード',
    'モンスターカード':'モンスターカード'
  },
  'ミカ': {
    '開始1':'水の矢',
    '開始2':'水のバリア',
    '開始3':'水のバリア',
    '固有1':'水の根源',
    '固有2':'波の加護',
    '固有3':'作戦分析',
    '固有4':'渦巻き',
    '固有5':'氾濫',
    '共有カード':'共有カード',
    'モンスターカード':'モンスターカード'
  },
  'メイリン': {
    '開始1':'一撃',
    '開始2':'一撃',
    '開始3':'火竜護身',
    '固有1':'火竜の宝石',
    '固有2':'昇竜脚',
    '固有3':'攻防一体',
    '固有4':'芳香族の精神',
    '固有5':'火龍驚天',
    '共有カード':'共有カード',
    'モンスターカード':'モンスターカード'
  },
  'ユキ': {
    '開始1':'長剣斬り',
    '開始2':'高速斬り',
    '開始3':'受け流し',
    '固有1':'制圧準備',
    '固有2':'盗み斬り',
    '固有3':'騙し討ち',
    '固有4':'氷の刃',
    '固有5':'氷山斬り',
    '共有カード':'共有カード',
    'モンスターカード':'モンスターカード'
  },
  'ルーカス': {
    '開始1':'ルーカス開始1',
    '開始2':'ルーカス開始2',
    '開始3':'ルーカス開始3',
    '固有1':'ルーカス固有1',
    '固有2':'ルーカス固有2',
    '固有3':'ルーカス固有3',
    '固有4':'ルーカス固有4',
    '固有5':'ルーカス固有5',
    '共有カード':'共有カード',
    'モンスターカード':'モンスターカード'
  },
  'ルーク': {
    '開始1':'単発射撃',
    '開始2':'単発射撃',
    '開始3':'影隠れ',
    '固有1':'連続撃発',
    '固有2':'隠密な装填',
    '固有3':'機会補足',
    '固有4':'魔眼の乱舞',
    '固有5':'必殺弾',
    '共有カード':'共有カード',
    'モンスターカード':'モンスターカード'
  },
  'レイ': {
    '開始1':'レイ開始1',
    '開始2':'レイ開始2',
    '開始3':'レイ開始3',
    '固有1':'レイ固有1',
    '固有2':'レイ固有2',
    '固有3':'レイ固有3',
    '固有4':'レイ固有4',
    '固有5':'レイ固有5',
    '共有カード':'共有カード',
    'モンスターカード':'モンスターカード'
  },
  'レノア': {
    '開始1':'殲滅射撃',
    '開始2':'殲滅射撃',
    '開始3':'黒い帳',
    '固有1':'嘆きの山びこ',
    '固有2':'即決処刑',
    '固有3':'漆黒の頌詩',
    '固有4':'運命を飲み込んだ花',
    '固有5':'決死の一撃',
    '共有カード':'共有カード',
    'モンスターカード':'モンスターカード'
  },
  'チズル': {
    '開始1':'チズル開始1',
    '開始2':'チズル開始2',
    '開始3':'チズル開始3',
    '固有1':'チズル固有1',
    '固有2':'チズル固有2',
    '固有3':'チズル固有3',
    '固有4':'チズル固有4',
    '固有5':'チズル固有5',
    '共有カード':'共有カード',
    'モンスターカード':'モンスターカード'
}


};

// キャラクタータブ折り畳み
const toggleBtn = document.getElementById('toggleCharacterTabs');
const characterTabsDiv = document.getElementById('characterTabs');
toggleBtn.innerText = currentCharacter + ' ▼';
toggleBtn.addEventListener('click', ()=>{
  if(characterTabsDiv.style.display==='flex'){
    characterTabsDiv.style.display='none';
    toggleBtn.innerText = currentCharacter + ' ▼';
  } else {
    characterTabsDiv.style.display='flex';
    toggleBtn.innerText = currentCharacter + ' ▲';
  }
});

// キャラクタータブ作成
characters.forEach(c=>{
  const btn = document.createElement('button');
  btn.innerText = c;
  if(c === currentCharacter) btn.classList.add('active');
  btn.addEventListener('click', ()=>{
    currentCharacter = c;
    document.querySelectorAll('.character-tabs button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    renderCards();
    resetDeck();
    toggleBtn.innerText = currentCharacter + ' ▼';
    characterTabsDiv.style.display = 'none';
  });
  characterTabsDiv.appendChild(btn);
});

// Tier・モード設定
const tiers = 25;
let currentTier = 1;
let unlimitedMode = false;
const tierSelect = document.getElementById('tierSelect');
for(let i=1;i<=tiers;i++){
  const opt=document.createElement('option');
  opt.value=i; opt.innerText=i;
  if(i===1) opt.selected=true;
  tierSelect.appendChild(opt);
}
tierSelect.addEventListener('change', ()=>{ currentTier=parseInt(tierSelect.value); updatePoints(); });
document.getElementById('modeSwitch').addEventListener('change', e=>{
  unlimitedMode = e.target.checked;
  tierSelect.disabled = unlimitedMode;
  updatePoints();
});

// カードデータ
const cardData = [
  {name:'開始1', type:'開始'},
  {name:'開始2', type:'開始'},
  {name:'開始3', type:'開始'},
  {name:'固有1', type:'固有'},
  {name:'固有2', type:'固有'},
  {name:'固有3', type:'固有'},
  {name:'固有4', type:'固有'},
  {name:'固有5', type:'固有'},
  {name:'共有カード', type:'共用'},
  {name:'モンスターカード', type:'モンスター'}
];

const stateClasses = ['state-normal','state-hirameki','state-shin'];
let deck=[], currentPoints=0, addCount=0, deleteCount=0, deleteHistory=[], historyStack=[], copyCount=0;

const cardsDiv = document.getElementById('cards');
function renderCards(){
  cardsDiv.innerHTML = '';
  cardData.forEach((c,i)=>{
    const div = document.createElement('div');
    div.className = 'card ' + stateClasses[0];
    div.draggable = true;

    if(c.name==='共有カード' || c.name==='モンスターカード'){
      const span = document.createElement('span');
      span.innerText = cardNameMap[currentCharacter][c.name] || c.name;
      div.appendChild(span);
    } else {
      const img = document.createElement('img');
      img.src = `カード画像/${currentCharacter}/${currentCharacter}_${c.name}.png`;
      img.alt = cardNameMap[currentCharacter][c.name] || c.name;
      img.style.width = '100%';
      img.style.height = '100%';
      div.appendChild(img);
    }

    div.dataset.index = i;
    div.dataset.state = 0;
    div.addEventListener('dragstart', e=>{
      e.dataTransfer.setData('text/plain', i);
      e.dataTransfer.setData('from','list');
    });
    div.addEventListener('click', ()=>{
      if(deck.find(d=>d.name===c.name && (c.type==='開始'||c.type==='固有'))){
        alert('デッキにすでにカードが存在します。コピー不可もしくはデッキ内でコピーしてください。');
      } else {
        addToDeck({...c, state:0, isCopy:false}, true);
      }
    });
    cardsDiv.appendChild(div);
  });
}

// deck描画
const deckDiv = document.getElementById('deck');
deckDiv.addEventListener('dragover', e=>e.preventDefault());
deckDiv.addEventListener('drop', e=>{
  e.preventDefault();
  const from = e.dataTransfer.getData('from');
  const index = e.dataTransfer.getData('text/plain');

  if(from==='list'){
    const src = cardData[index];
    const targetCardDiv = e.target.closest('.deck-card');
    if(targetCardDiv){
      const targetIdx = Array.from(deckDiv.querySelectorAll('.deck-card')).indexOf(targetCardDiv);
      const targetCard = deck[targetIdx];

      if(src.name==='共有カード' || src.name==='モンスターカード'){
        deck.splice(targetIdx,1);
        const newCard = {
            ...src,
            state: 0,             // ★ 変換後は必ず通常状態で生成
            isCopy: false,
            isChange: true
        };
        deck.splice(targetIdx,0,newCard);
        historyStack.push({action:'change', before:targetCard, after:newCard});
        renderDeck();
        updatePoints();
        return;
      }
    }

    if(deck.find(d=>d.name===src.name && (src.type==='開始'||src.type==='固有'))){
      alert('開始・固有カードは一覧からコピー不可です。デッキ上で操作してください。');
      return;
    }
    addToDeck({...src, state:0, isCopy:false}, true);

  } else if(from==='deck'){
    const idx = e.dataTransfer.getData('text/plain');
    const srcCard = deck[idx];
    if(srcCard.name === '開始1' || srcCard.name === '開始2' || srcCard.name === '開始3'){
      alert('このカードはコピーできません。');
      return;
    }
    addToDeck({...srcCard, isCopy:true}, false);
  }
});

function makeDeckCardDraggable(div, index){
  div.draggable = true;
  div.addEventListener('dragstart', e=>{
    e.dataTransfer.setData('text/plain', index);
    e.dataTransfer.setData('from','deck');
  });
}

function addToDeck(cardObj, isAdd=true){
  deck.push(cardObj);
  if(isAdd) addCount++;
  if(cardObj.isCopy) copyCount++;
  historyStack.push({action:'add', card:cardObj});
  renderDeck();
  updatePoints();
}

function renderDeck(){
  deckDiv.innerHTML='';
  for(let i=0;i<deck.length;i+=4){
    const row = document.createElement('div');
    row.className='deck-row';
    deck.slice(i,i+4).forEach((c,j)=>{
      const div = document.createElement('div');
      div.className = 'deck-card ' + stateClasses[c.state];

      if(c.name==='共有カード' || c.name==='モンスターカード'){
        div.innerText = cardNameMap[currentCharacter][c.name] || c.name;
      } else {
        const img = document.createElement('img');
        img.src = `カード画像/${currentCharacter}/${currentCharacter}_${c.name}.png`;
        img.alt = cardNameMap[currentCharacter][c.name] || c.name;
        div.appendChild(img);
      }

      if(c.isCopy){
        const copyMark = document.createElement('div');
        copyMark.className='copy-mark';
        copyMark.innerText='COPY';
        div.appendChild(copyMark);
      }

      if(c.isChange){
        const changeMark = document.createElement('div');
        changeMark.className='change-mark';
        changeMark.innerText='CHANGE';
        div.appendChild(changeMark);
      }

      div.addEventListener('click', ()=>{
        if(c.name === '開始1' || c.name === '開始2' || c.name === '開始3') return;
        if(c.name === '固有5') return;

        c.state = (c.state+1)%3;
        div.className = 'deck-card ' + stateClasses[c.state];
        if(c.isCopy){
          const mark = div.querySelector('.copy-mark');
          if(mark) div.appendChild(mark);
        }
        if(c.isChange){
          const mark = div.querySelector('.change-mark');
          if(mark) div.appendChild(mark);
        }
        updatePoints();
      });

      const del = document.createElement('button');
      del.className='delete-btn';
      del.innerText='×';
      del.addEventListener('click', e=>{
        e.stopPropagation();
        const removed = deck.splice(i+j,1)[0];
        if(removed.isCopy) copyCount = Math.max(0, copyCount-1);
        if(!removed.isChange){
          deleteCount++;
          deleteHistory.push(removed);
        }
        historyStack.push({action:'delete', card:removed});
        renderDeck();
        updatePoints();
      });
      div.appendChild(del);

      makeDeckCardDraggable(div, i+j);
      row.appendChild(div);
    });
    deckDiv.appendChild(row);
  }
}

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function updatePoints(){
  let total = 0;

  // 1. デッキ内カードポイント計算
  deck.forEach(c => {
    if(deleteHistory.includes(c)) return; // 削除済みカードはスキップ
    let basePts = 0;

    if(c.isChange && !c.isCopy){
      // 変換操作ボーナス
      basePts += 10;

      // 変換前カード情報
      const history = historyStack.filter(h => h.after === c && h.action === 'change').pop();
      if(history){
        const before = history.before;
        if(before.type==='固有'){
          // 固有カードはヒラメキでも0pt
          if(before.state===2) basePts += 20; // 神ヒラメキのみ
        } else if(before.type==='共用'){
          basePts += 20 + (before.state===1?10:before.state===2?20:0);
        } else if(before.type==='モンスター'){
          basePts += 80 + (before.state===1?10:before.state===2?20:0);
        }
      }

      // 現在カードの状態加算
      if(c.type==='固有'){
        if(c.state===2) basePts += 20; // 神ヒラメキ
      } else if(c.type==='共用'){
        basePts += 20 + (c.state===1?10:c.state===2?20:0);
      } else if(c.type==='モンスター'){
        basePts += 80 + (c.state===1?10:c.state===2?20:0);
      }

    } else {
      // 通常カード
      if(c.type==='開始'){
        basePts += 0;
      } else if(c.type==='固有'){
        if(c.state===2) basePts += 20; // 神ヒラメキのみ
      } else if(c.type==='共用'){
        basePts += 20 + (c.state===1?10:c.state===2?20:0);
      } else if(c.type==='モンスター'){
        basePts += 80 + (c.state===1?10:c.state===2?20:0);
      }
    }

    total += basePts;
  });

  // コピーカードポイント計算
let copyPts = 0;
let copyIdx = 0;
deck.filter(c=>c.isCopy).forEach(c=>{
    copyIdx++;
    // コピー枚数による基本加算
    if(copyIdx===1) copyPts+=0;
    else if(copyIdx===2) copyPts+=10;
    else if(copyIdx===3) copyPts+=30;
    else if(copyIdx===4) copyPts+=50;
    else copyPts+=70;



    // ★変換ボーナスはコピー時には加算しない
});



  total += copyPts;

// 3. 削除履歴ポイント計算（デッキポイントには影響しない）
deleteHistory.forEach((c,i)=>{
    let delPts = 0;

    // 既存：削除順によるポイント
    if(i===0) delPts += 0;
    else if(i===1) delPts += 10;
    else if(i===2) delPts += 30;
    else if(i===3) delPts += 50;
    else delPts += 70;

    // 既存：開始カードまたはヒラメキ済（神ヒラメキ含む）の場合追加 +20
    if(c.type==='開始' || (c.type==='固有' && c.state > 0)){
        delPts += 20;
    }

    // 追加：カード状態・種類によるボーナス
    if(c.state === 1){ // ヒラメキ
        if(c.type === '固有') delPts += 0;
        else if(c.type === '共用') delPts += 30;
        else if(c.type === 'モンスター') delPts += 90;
    } else if(c.state === 2){ // 神ヒラメキ
        if(c.type === '固有') delPts += 20;
        else if(c.type === '共用') delPts += 40;
        else if(c.type === 'モンスター') delPts += 100;
    }

    total += delPts; // ★加算のみ
});



  // 4. 最終ポイント反映
  currentPoints = total;
  document.getElementById('currentPoints').innerText = currentPoints;

  const maxPts = 30 + (currentTier-1)*10;
  document.getElementById('maxPoints').innerText = maxPts;

  const requiredTier = Math.max(1, Math.ceil((currentPoints-30)/10)+1);
  document.getElementById('requiredTier').innerText = requiredTier;

  const deckArea = document.querySelector('.deck-area');
  let deckTitle = deckArea.querySelector('h2');
  let warning = deckTitle.querySelector('#overWarning');
  if(!warning){
    warning = document.createElement('span');
    warning.id='overWarning';
    warning.style.color='red';
    warning.style.marginLeft='10px';
    deckTitle.appendChild(warning);
  }
  if(!unlimitedMode && currentPoints>maxPts){
    warning.innerText='セーブデータ容量がオーバーしました';
  } else warning.innerText='';
}

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// デッキリセット
function resetDeck(){
  deck=[]; addCount=0; deleteCount=0; deleteHistory=[]; historyStack=[]; copyCount=0;
  [0,1,2,3,4,5,6,7].forEach(i=>deck.push({...cardData[i], state:0, isCopy:false}));
  renderDeck();
  updatePoints();
}

// 戻る・リセットボタン
document.getElementById('undoBtn').addEventListener('click', ()=>{
  const last = historyStack.pop();
  if(!last) return;
  if(last.action==='add'){
    const idx = deck.findIndex(c=>c===last.card);
    if(idx>=0){
      if(deck[idx].isCopy) copyCount=Math.max(0,copyCount-1);
      deck.splice(idx,1);
    }
    addCount=Math.max(0,addCount-1);
  } else if(last.action==='delete'){
    deck.push(last.card);
    if(last.card.isCopy) copyCount++;
    deleteCount=Math.max(0,deleteCount-1);
    deleteHistory.pop();
  } else if(last.action==='change'){
    const idx = deck.findIndex(c=>c===last.after);
    if(idx>=0){
      deck.splice(idx,1,last.before);
    }
  }
  renderDeck();
  updatePoints();
});

document.getElementById('resetDeckBtn').addEventListener('click', resetDeck);

// 初期表示
renderCards();
resetDeck();


