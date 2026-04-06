const pagesData = [
  {
    title: 'Login',
    isLogin: true,
    content: '<p style="font-size:28px;margin:20px 0;">❤️ 💕 💖</p><p>Karthik, Do You Think About Me? 💝</p><p style="font-size:14px;color:#b30059;margin-top:10px;">Answer my questions honestly... I\'m waiting... 😘</p>'
  },
  {
    title: '💕 test1 - Think About Me',
    questions: [
      { key: '1-1', label: '😊 When you see my message notification, what do you feel?', options: ['I smile immediately 😊','I open it instantly because it\'s you','My mood becomes better ❤️','I get excited to talk to you','Others'] },
      { key: '1-2', label: '🌙 When do you miss me the most?', options: ['In the morning when I wake up','At night before sleeping','When something reminds me of you','Honestly… all the time ❤️','Others'] },
      { key: '1-3', label: '✨ What was the first thing that made you attracted to me?', options: ['Your smile 😊','Your personality 💕','The way you talk to me 💬','Your eyes 👀','Others'] },
      { key: '1-4', label: '🤗 If I suddenly appear in front of you right now, what would you do?', options: ['Hug you immediately 🤗','Smile and stare at you 😍','Tease you a little 😏','Pull you close and not let go 💕','Others'] },
      { key: '1-5', label: '😍 What emoji reminds you of me the most?', options: ['❤️','🥰','😘','💖','Others'] }
    ]
  },
  {
    title: '💕 test2 - How Much Do You Love Me',
    questions: [
      { key: '2-1', label: '😢 If I say "I miss you", what would you do?', options: ['Say "I miss you too" 💕','Call you immediately ☎️','Wish I could hug you 🤗','Come meet you if possible 🏃','Others'] },
      { key: '2-2', label: '😭 If I am sad, what would you do?', options: ['Comfort you 💕','Try to make you laugh 😄','Stay with you until you feel better','Hug you until you smile 😊','Others'] },
      { key: '2-3', label: '😻 What is the cutest thing about me?', options: ['Your smile 😊','Your voice 🎵','Your expressions 😍','Your caring nature 💕','Others'] },
      { key: '2-4', label: '🫂 If we were sitting alone together, what would you do?', options: ['Talk with you for hours 💬','Hold your hand 🤝','Hug you 🤗','Just enjoy the moment together 💕','Others'] },
      { key: '2-5', label: '🌟 What is one thing you love the most about our relationship?', options: ['The way we understand each other 💕','Our late night conversations 🌙','The way we make each other laugh 😄','The comfort we give each other 🫂','Others'] }
    ]
  },
  {
    title: '😏 test3 - Flirty Round',
    questions: [
      { key: '3-1', label: '👑 What nickname would you give me?', options: ['My baby 👶','My queen 👑','My favourite person 💕','My everything 🌟','Others'] },
      { key: '3-2', label: '🎀 What do you like most when we talk?', options: ['Your voice 🎵','Your laugh 😄','The way you tease me 😏','The way you care for me 💕','Others'] },
      { key: '3-3', label: '🫂 If I hug you tightly, what will you do?', options: ['Hug you back tighter 💪','Smile and enjoy the moment 😊','Tease you for being cute 😏','Never let you go 💕','Others'] },
      { key: '3-4', label: '💋 If I whisper "I love you", what will you say?', options: ['I love you too 💕','I love you more 🔥','I\'m lucky to have you 🌟','You mean everything to me 💖','Others'] },
      { key: '3-5', label: '🌹 What romantic thing would you like to do with me?', options: ['Go on a cute date 🍽️','Watch a movie together 🎬','Travel somewhere together ✈️','Spend a whole day with you 💕','Others'] }
    ]
  },
  {
    title: '💖 test4 - Future With Me',
    questions: [
      { key: '4-1', label: '☕ Where would you take me on a date?', options: ['A cozy café ☕','A beach walk 🏖️','A movie night 🎬','A long drive 🚗','Others'] },
      { key: '4-2', label: '🌍 If we travel together, where should we go?', options: ['Beach 🏖️','Mountains ⛰️','A peaceful nature place 🌿','Anywhere with you 💕','Others'] },
      { key: '4-3', label: '🌅 What is one memory you want to create with me?', options: ['Watching sunset together 🌅','Traveling together ✈️','A special romantic date 🌹','Late night talks and laughter 🌙','Others'] },
      { key: '4-4', label: '🎁 What sweet thing would you do for me?', options: ['Surprise me with something cute 🎁','Make me laugh when I\'m sad 😄','Always support me 💪','Stay by my side 💕','Others'] },
      { key: '4-5', label: '💍 What promise would you make to me?', options: ['Always respect you 🙏','Always care for you 💕','Always be honest with you 🤝','Always stay with you 🫂','Others'] }
    ]
  },
  {
    title: '🔥 SECRET - Just Between Us',
    questions: [
      { key: '5-1', label: '💋 If we were alone right now, would you kiss me?', options: ['Kiss you softly 💋','Kiss you passionately 🔥','Kiss you and never stop 😘','Pull you closer and kiss you more 💕','Others'] },
      { key: '5-2', label: '🌙 What do you fantasize about doing with me at night?', options: ['Cuddling together under stars ⭐','Talking all night 💬','Holding you close and falling asleep 😴','Dancing slowly together 💃','Others'] },
      { key: '5-3', label: '😍 What is the most attractive thing about my body?', options: ['Your smile 😊','Your eyes 👀','Your curves 😏','The way you move 💃','Others'] },
      { key: '5-4', label: '🔥 How badly do you want to spend the whole night with me?', options: ['Very badly 🥵','Like... desperately 😍','Can\'t stop thinking about it 💭','So much it\'s driving me crazy 🔥','Others'] },
      { key: '5-5', label: '💕 What would you whisper in my ear that would make me blush?', options: ['I\'m madly in love with you 💕','You drive me crazy 🔥','I want you all to myself 😍','You\'re my only desire 🌹','Others'] }
    ]
  }
];

const pagesEl = document.getElementById('pages');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const titleEl = document.getElementById('title');
let current = 0;

// Store answers as user progresses
const answers = {};

function render() {
  pagesEl.innerHTML = '';
  pagesData.forEach((p, i) => {
    const pageDiv = document.createElement('div');
    pageDiv.className = 'page' + (i === current ? ' active' : '');

    const h = document.createElement('h2');
    h.textContent = p.title;
    pageDiv.appendChild(h);

    if (p.isLogin) {
      const content = document.createElement('div');
      content.innerHTML = p.content;
      pageDiv.appendChild(content);

      const form = document.createElement('div');
      form.style.marginTop = '20px';

      const userLabel = document.createElement('label');
      userLabel.textContent = 'Username:';
      userLabel.style.display = 'block';
      userLabel.style.marginBottom = '8px';
      form.appendChild(userLabel);

      const userInput = document.createElement('input');
      userInput.type = 'text';
      userInput.id = 'username';
      userInput.value = 'Jekitha Chelladurai';
      userInput.disabled = true;
      userInput.style.width = '100%';
      userInput.style.padding = '8px';
      userInput.style.borderRadius = '6px';
      userInput.style.border = '1px solid #ffd1e6';
      userInput.style.boxSizing = 'border-box';
      userInput.style.marginBottom = '12px';
      form.appendChild(userInput);

      const passLabel = document.createElement('label');
      passLabel.textContent = 'Password:';
      passLabel.style.display = 'block';
      passLabel.style.marginBottom = '8px';
      form.appendChild(passLabel);

      const passInput = document.createElement('input');
      passInput.type = 'password';
      passInput.id = 'password';
      passInput.placeholder = 'Enter password...';
      passInput.style.width = '100%';
      passInput.style.padding = '8px';
      passInput.style.borderRadius = '6px';
      passInput.style.border = '1px solid #ffd1e6';
      passInput.style.boxSizing = 'border-box';
      passInput.style.marginBottom = '12px';
      form.appendChild(passInput);

      const hint = document.createElement('p');
      hint.textContent = '💝 Think about our special moments...';
      hint.style.fontSize = '12px';
      hint.style.color = '#b30059';
      hint.style.marginTop = '8px';
      form.appendChild(hint);

      pageDiv.appendChild(form);
    } else if (!p.isLogin) {
      p.questions.forEach((q) => {
        const qd = document.createElement('div');
        qd.className = 'question';

        const label = document.createElement('div');
        label.textContent = q.label;
        qd.appendChild(label);

        const opts = document.createElement('div');
        opts.className = 'options';

        q.options.forEach((opt, idx) => {
          const id = `${q.key}-${idx}`;
          const wrap = document.createElement('label');
          wrap.style.cursor = 'pointer';
          const input = document.createElement('input');
          input.type = 'radio';
          input.name = q.key;
          input.value = opt;
          input.id = id;
          wrap.appendChild(input);
          const span = document.createElement('span');
          span.textContent = ' ' + opt;
          wrap.appendChild(span);
          opts.appendChild(wrap);

          if (opt === 'Others') {
            const other = document.createElement('input');
            other.type = 'text';
            other.placeholder = 'Tell me what you really feel...';
            other.className = 'other-input';
            other.style.display = 'none';
            other.dataset.for = q.key;
            opts.appendChild(other);

            input.addEventListener('change', () => {
              other.style.display = 'block';
              other.focus();
            });
          } else {
            input.addEventListener('change', () => {
              const others = opts.querySelectorAll('.other-input');
              others.forEach(o => { if (o.dataset.for === q.key) o.style.display = 'none'; });
            });
          }
        });

        qd.appendChild(opts);
        pageDiv.appendChild(qd);
      });
    }

    pagesEl.appendChild(pageDiv);
  });

  prevBtn.disabled = current === 0;
  if (current === 0) {
    nextBtn.textContent = 'Login 💕';
  } else if (current === pagesData.length - 1) {
    nextBtn.textContent = 'Finish';
  } else {
    nextBtn.textContent = 'Next';
  }
  titleEl.textContent = pagesData[current].title;
}

prevBtn.addEventListener('click', () => {
  if (current > 0) { current--; render(); }
});

nextBtn.addEventListener('click', async () => {
  // Handle login
  if (current === 0) {
    const passInput = document.getElementById('password');
    if (passInput.value === 'Surprisetraining') {
      current++;
      render();
    } else {
      alert('❌ Wrong password, babe! Try again... 💕');
      passInput.value = '';
      passInput.focus();
    }
    return;
  }

  // Check if all questions on current page are answered
  const currentPage = pagesData[current];
  if (currentPage.questions) {
    const allAnswered = currentPage.questions.every(q => {
      return document.querySelector(`input[name="${q.key}"]:checked`);
    });

    if (!allAnswered) {
      alert('😢 Answer all questions, baby! I need to know everything about you... 💕');
      return;
    }

    // Save answers from current page before moving
    currentPage.questions.forEach(q => {
      const selected = document.querySelector(`input[name="${q.key}"]:checked`);
      const otherInput = document.querySelector(`.other-input[data-for="${q.key}"]`);
      answers[q.key] = {
        answer: selected ? selected.value : 'No answer',
        otherText: selected.value === 'Others' && otherInput ? otherInput.value : ''
      };
    });
  }

  if (current < pagesData.length - 1) { current++; render(); return; }

  // On final page finish, build payload from saved answers
  const payload = { name: '', pages: [] };
  const questionPages = pagesData.filter(p => !p.isLogin);
  payload.pages = questionPages.map(p => ({ 
    title: p.title, 
    questions: p.questions.map(q => ({ 
      label: q.label, 
      answer: answers[q.key]?.answer || 'No answer',
      otherText: answers[q.key]?.otherText || ''
    })) 
  }));

  // Show Submit button
  pagesEl.innerHTML = `<div class="final"><p style="font-size:20px;">💕 Ready to submit your answers? 💕</p><p style="font-size:14px;color:#b30059;">I'm so excited to read what you really think about us... 😍</p><div class="claim"><button id="submitBtn" class="btn">Submit 📤 Let Me Know! 💌</button></div></div>`;

  const submitBtn = document.getElementById('submitBtn');
  submitBtn.addEventListener('click', async () => {
    submitBtn.disabled = true;
    submitBtn.textContent = '💌 Sending My Way... ✈️';
    try {
      const resp = await fetch('/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const j = await resp.json();
      console.log('Response:', j);
      if (j.ok) {
        // Show Claim Your Reward button
        pagesEl.innerHTML = `<div class="final"><p style="font-size:20px;">Karthik ❤️ 💕 💖</p><p>You finished my little love game! 🎉</p><p class="small">Your answers have been secretly sent to me…<br/>Now I know all your thoughts... 💭</p><p style="font-size:16px;margin-top:20px;">💝 Click below to claim your reward... 💝</p><div class="claim"><button id="claimBtn" class="btn">Claim Your Reward 💋 KISS ME!</button></div></div>`;
        
        const claimBtn = document.getElementById('claimBtn');
        claimBtn.addEventListener('click', () => {
          pagesEl.innerHTML = `<div class="final"><p style="font-size:24px;">Karthik ❤️ 💕 💖</p><p>You finished my little love game! 🎉✨</p><p class="small">Your answers have been secretly sent to me…<br/>Now I know all your thoughts... 💭😍</p><p style="font-size:80px;margin:30px 0;line-height:1;">😘😘😘<br/>💋💋💋</p><p style="font-size:18px;color:#b30059;font-weight:bold;">🌹 One tight hug from me and unlimited kisses 💕 🌹</p><p style="font-size:14px;margin-top:20px;">I love you so much, baby! 😍💕</p></div>`;
        });
      } else {
        submitBtn.textContent = '❌ Error: ' + (j.error || 'Try again');
        submitBtn.disabled = false;
        console.error('Error:', j);
      }
    } catch (e) {
      submitBtn.textContent = '❌ Error sending';
      submitBtn.disabled = false;
      console.error('Catch error:', e);
    }
  });
});

render();
