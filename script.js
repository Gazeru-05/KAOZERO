const characters = ['リン','ユキ','ハル','レノア','カリーペ','メイリン','ベロニカ','ルーク','ヒューゴ','カイロン'];
let currentCharacter = 'リン';

// 内部IDは共通で開始1～3、固有1～5、共有、モンスター
const cardNameMap = {
  'リン': {
    '開始1':'黒雲剣・一式',
    '開始2':'黒雲剣・三式',
    '開始3':'守護',
    '固有1':'抜刀',
    '固有2':'黒雲奥義:残',
    '固有3':'黒雲奥義:滅',
    '固有4':'黒雲の心法',
    '固有5':'黒雲奥義:黒舞',
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
  }
};

// キャラクタータブ作成
const characterTabsDiv = document.getElementById('characterTabs');
characters.forEach(c=>{
  const btn = document.createElement('button');
  btn.innerText = c;
  if(c === currentCharacter) btn.classList.add('active');
  btn.addEventListener('click', ()=>{
    currentCharacter = c;
    document.querySelectorAll('.character-tabs button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    renderCards();
    renderDeck();
  });
  characterTabsDiv.appendChild(btn);
});

// Tier・モード設定
const tiers = 15;
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
let deck=[];
let currentPoints=0;
let addCount=0;
let deleteCount=0;
let deleteHistory=[];
let historyStack=[];
let copyCount=0;

const cardsDiv = document.getElementById('cards');
function renderCards(){
  cardsDiv.innerHTML = '';
  cardData.forEach((c,i)=>{
    const div = document.createElement('div');
    div.className = 'card ' + stateClasses[0];
    div.draggable = true;
    div.innerText = cardNameMap[currentCharacter][c.name] || c.name;
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

const deckDiv = document.getElementById('deck');
deckDiv.addEventListener('dragover', e=>e.preventDefault());
deckDiv.addEventListener('drop', e=>{
  e.preventDefault();
  const from = e.dataTransfer.getData('from');
  if(from==='list'){
    const index = e.dataTransfer.getData('text/plain');
    const src = cardData[index];
    if(deck.find(d=>d.name===src.name && (src.type==='開始'||src.type==='固有'))){
      alert('開始・固有カードはコピー不可');
      return;
    }
    addToDeck({...src, state:0, isCopy:false}, true);
  } else if(from==='deck'){
    const idx = e.dataTransfer.getData('text/plain');
    const srcCard = deck[idx];

    // 開始1〜3はコピー不可
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
      div.innerText = cardNameMap[currentCharacter][c.name] || c.name;

      if(c.isCopy){
        const copyMark = document.createElement('div');
        copyMark.className='copy-mark';
        copyMark.innerText='COPY';
        div.appendChild(copyMark);
      }

      div.addEventListener('click', ()=>{
        // 開始1〜3はヒラメキ・神ヒラメキ不可
        if(c.name === '開始1' || c.name === '開始2' || c.name === '開始3') return;
        // 固有5はヒラメキ・神ヒラメキ不可
        if(c.name === '固有5') return;

        c.state = (c.state+1)%3;
        div.className = 'deck-card ' + stateClasses[c.state];
        if(c.isCopy){
          const mark = div.querySelector('.copy-mark');
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
        deleteCount++;
        deleteHistory.push(removed);
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

function updatePoints(){
  let total=0;
  deck.forEach(c=>{
    if(c.type==='固有' && c.state===2 && !c.isCopy) total +=20;
    if(c.type==='共用') total +=20 + (c.state===1?10:(c.state===2?20:0));
    if(c.type==='モンスター') total +=80 + (c.state===1?10:(c.state===2?20:0));
  });

  let copyPts=0;
  for(let i=1;i<=copyCount;i++){
    if(i===1) copyPts +=0;
    else if(i===2) copyPts +=10;
    else if(i===3) copyPts +=30;
    else if(i===4) copyPts +=50;
    else copyPts +=70;
  }
  deck.filter(c=>c.isCopy).forEach(c=>{
    if(c.state===1) copyPts +=10;
    else if(c.state===2) copyPts +=20;
  });
  total += copyPts;

  deleteHistory.forEach((c,i)=>{
    let base=0;
    if(i===0) base=0;
    else if(i===1) base=10;
    else if(i===2) base=30;
    else if(i===3) base=50;
    else base=70;
    if(c.type==='開始'||c.type==='固有') base+=20;
    total+=base;
  });

  currentPoints = total;
  document.getElementById('currentPoints').innerText = currentPoints;

  const maxPts = 30 + (currentTier-1)*10;
  document.getElementById('maxPoints').innerText = maxPts;

  const requiredTier = Math.max(1, Math.ceil((currentPoints-30)/10)+1);
  document.getElementById('requiredTier').innerText = requiredTier;

  // デッキタイトル横に忠告表示
  const deckArea = document.querySelector('.deck-area');
  let deckTitle = deckArea.querySelector('h2');
  let warning = deckTitle.querySelector('#overWarning');
  if(!warning){
    warning = document.createElement('span');
    warning.id = 'overWarning';
    warning.style.color = 'red';
    warning.style.marginLeft = '10px';
    deckTitle.appendChild(warning);
  }
  if(!unlimitedMode && currentPoints > maxPts){
    warning.innerText = 'セーブデータ容量がオーバーしました';
  } else {
    warning.innerText = '';
  }
}

function resetDeck(){
  deck=[];
  addCount=0;
  deleteCount=0;
  deleteHistory=[];
  historyStack=[];
  copyCount=0;
  [0,1,2,3,4,5,6,7].forEach(i=>deck.push({...cardData[i], state:0, isCopy:false}));
  renderDeck();
  updatePoints();
}

document.getElementById('undoBtn').addEventListener('click', ()=>{
  const last = historyStack.pop();
  if(!last) return;
  if(last.action==='add'){
    const idx = deck.findIndex(c=>c===last.card);
    if(idx>=0){
      if(deck[idx].isCopy) copyCount = Math.max(0, copyCount-1);
      deck.splice(idx,1);
    }
    addCount = Math.max(0, addCount-1);
  } else if(last.action==='delete'){
    deck.push(last.card);
    if(last.card.isCopy) copyCount++;
    deleteCount = Math.max(0, deleteCount-1);
    deleteHistory.pop();
  }
  renderDeck();
  updatePoints();
});

document.getElementById('resetDeckBtn').addEventListener('click', resetDeck);

renderCards();
resetDeck();
