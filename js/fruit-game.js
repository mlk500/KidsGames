const FruitGame = {
  currentItems: [],
  currentIndex: 0,
  imageCache: {},

  el: {},

  init() {
    this.el = {
      welcomeScreen: document.getElementById('welcome-screen'),
      fruitMenuScreen: document.getElementById('fruit-menu-screen'),
      fruitLearnScreen: document.getElementById('fruit-learn-screen'),
      fruitGameScreen: document.getElementById('fruit-game-screen'),
      fruitBrowseScreen: document.getElementById('fruit-browse-screen'),
      fruitEndScreen: document.getElementById('fruit-end-screen'),
      fruitStartBtn: document.getElementById('fruit-start-btn'),
      fruitBrowseBtn: document.getElementById('fruit-browse-btn'),
      fruitBackBtn: document.getElementById('fruit-back-btn'),
      fruitLearnStartBtn: document.getElementById('fruit-learn-start-btn'),
      fruitLearnHomeBtn: document.getElementById('fruit-learn-home-btn'),
      fruitLearnGrid: document.getElementById('fruit-learn-grid'),
      fruitCard: document.getElementById('fruit-card'),
      fruitImage: document.getElementById('fruit-image'),
      fruitName: document.getElementById('fruit-name'),
      fruitSpinner: document.getElementById('fruit-loading-spinner'),
      btnFruit: document.getElementById('btn-fruit'),
      btnVegetable: document.getElementById('btn-vegetable'),
      fruitFeedback: document.getElementById('fruit-feedback'),
      fruitFeedbackIcon: document.getElementById('fruit-feedback-icon'),
      fruitFeedbackText: document.getElementById('fruit-feedback-text'),
      fruitFeedbackReason: document.getElementById('fruit-feedback-reason'),
      fruitFeedbackClose: document.getElementById('fruit-feedback-close'),
      fruitCardCounter: document.getElementById('fruit-card-counter'),
      fruitGameHomeBtn: document.getElementById('fruit-game-home-btn'),
      fruitNextBtn: document.getElementById('fruit-next-btn'),
      fruitBrowseGrid: document.getElementById('fruit-browse-grid'),
      fruitBrowseBackBtn: document.getElementById('fruit-browse-back-btn'),
      fruitBrowseHomeBtn: document.getElementById('fruit-browse-home-btn'),
      fruitPlayAgainBtn: document.getElementById('fruit-play-again-btn'),
      fruitHomeBtn: document.getElementById('fruit-home-btn'),
    };

    this.el.fruitStartBtn.addEventListener('click', () => this.showLearnScreen());
    this.el.fruitBrowseBtn.addEventListener('click', () => this.showBrowse());
    this.el.fruitBackBtn.addEventListener('click', () => this.showScreen('welcome'));
    this.el.fruitLearnStartBtn.addEventListener('click', () => this.startGame());
    this.el.fruitLearnHomeBtn.addEventListener('click', () => this.showScreen('fruit-menu'));
    this.el.btnFruit.addEventListener('click', () => this.answer(true));
    this.el.btnVegetable.addEventListener('click', () => this.answer(false));
    this.el.fruitGameHomeBtn.addEventListener('click', () => this.showScreen('welcome'));
    this.el.fruitNextBtn.addEventListener('click', () => this.skipCard());
    this.el.fruitFeedbackClose.addEventListener('click', () => this.dismissFeedback());
    this.el.fruitBrowseBackBtn.addEventListener('click', () => this.showScreen('fruit-menu'));
    this.el.fruitBrowseHomeBtn.addEventListener('click', () => this.showScreen('welcome'));
    this.el.fruitPlayAgainBtn.addEventListener('click', () => this.showLearnScreen());
    this.el.fruitHomeBtn.addEventListener('click', () => this.showScreen('welcome'));

    // Browse filter buttons
    document.querySelectorAll('.fruit-filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.fruit-filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        this.filterBrowse(e.target.dataset.filter);
      });
    });
  },

  showScreen(name) {
    SoundEffects.click();
    const allScreens = document.querySelectorAll('.screen');
    allScreens.forEach(s => s.classList.remove('active'));

    const map = {
      welcome: this.el.welcomeScreen,
      'fruit-menu': this.el.fruitMenuScreen,
      'fruit-learn': this.el.fruitLearnScreen,
      'fruit-game': this.el.fruitGameScreen,
      'fruit-browse': this.el.fruitBrowseScreen,
      'fruit-end': this.el.fruitEndScreen
    };
    if (map[name]) map[name].classList.add('active');
  },

  shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  // Show learn screen with all items before game
  async showLearnScreen() {
    this.showScreen('fruit-learn');
    this.el.fruitLearnGrid.innerHTML = '';

    for (const item of fruitsVegetables) {
      const card = document.createElement('div');
      card.className = 'learn-card';
      const tagClass = item.isFruit ? 'fruit-tag' : 'vegetable-tag';
      const tagText = item.isFruit ? 'فاكهة 🍎' : 'خضار 🥦';

      card.innerHTML = `
        <img class="learn-card-img" src="" alt="${item.name}">
        <div class="learn-card-body">
          <div class="learn-card-name">${item.name}</div>
          <span class="learn-card-tag ${tagClass}">${tagText}</span>
        </div>
      `;

      this.el.fruitLearnGrid.appendChild(card);

      this.fetchImage(item.searchTerm).then(url => {
        if (url) {
          card.querySelector('.learn-card-img').src = url;
        }
      });
    }
  },

  startGame() {
    this.currentIndex = 0;
    this.currentItems = this.shuffleArray(fruitsVegetables);
    this.showScreen('fruit-game');
    this.currentItems.slice(0, 3).forEach(a => this.fetchImage(a.searchTerm));
    this.showCard();
  },

  skipCard() {
    this.currentIndex++;
    if (this.currentIndex >= this.currentItems.length) {
      this.showEnd();
    } else {
      this.showCard();
    }
  },

  async fetchImage(searchTerm) {
    if (this.imageCache[searchTerm]) return this.imageCache[searchTerm];

    try {
      const url = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(searchTerm)}&image_type=illustration&safesearch=true&per_page=10`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.hits && data.hits.length > 0) {
        const imageUrl = data.hits[0].webformatURL;
        this.imageCache[searchTerm] = imageUrl;
        return imageUrl;
      }
    } catch (e) {
      console.warn('Image fetch failed for:', searchTerm, e);
    }

    try {
      const url = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(searchTerm)}&image_type=vector&safesearch=true&per_page=10`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.hits && data.hits.length > 0) {
        const imageUrl = data.hits[0].webformatURL;
        this.imageCache[searchTerm] = imageUrl;
        return imageUrl;
      }
    } catch (e) {
      console.warn('Vector image fetch failed for:', searchTerm, e);
    }

    try {
      const url = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(searchTerm)}&image_type=photo&safesearch=true&per_page=5&category=food`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.hits && data.hits.length > 0) {
        const imageUrl = data.hits[0].webformatURL;
        this.imageCache[searchTerm] = imageUrl;
        return imageUrl;
      }
    } catch (e) {
      console.warn('Photo fallback failed for:', searchTerm, e);
    }

    return null;
  },

  async showCard() {
    const item = this.currentItems[this.currentIndex];

    this.el.fruitCard.classList.remove('card-enter');
    this.el.fruitCard.classList.add('flipped');
    this.el.btnFruit.disabled = true;
    this.el.btnVegetable.disabled = true;

    this.el.fruitCardCounter.textContent = `${this.currentIndex + 1} / ${this.currentItems.length}`;

    this.el.fruitImage.style.opacity = '0';
    this.el.fruitSpinner.classList.add('active');
    this.el.fruitName.textContent = item.name;

    const imageUrl = await this.fetchImage(item.searchTerm);

    if (imageUrl) {
      const img = new Image();
      img.onload = () => {
        this.el.fruitImage.src = imageUrl;
        this.el.fruitImage.alt = item.name;
        this.el.fruitImage.style.opacity = '1';
        this.el.fruitSpinner.classList.remove('active');
      };
      img.onerror = () => {
        this.el.fruitImage.src = '';
        this.el.fruitSpinner.classList.remove('active');
      };
      img.src = imageUrl;
    } else {
      this.el.fruitImage.src = '';
      this.el.fruitSpinner.classList.remove('active');
    }

    if (this.currentIndex + 1 < this.currentItems.length) {
      this.fetchImage(this.currentItems[this.currentIndex + 1].searchTerm);
    }

    setTimeout(() => {
      SoundEffects.flip();
      this.el.fruitCard.classList.remove('flipped');
      this.el.fruitCard.classList.add('card-enter');
      this.el.btnFruit.disabled = false;
      this.el.btnVegetable.disabled = false;
    }, 400);
  },

  answer(choseFruit) {
    const item = this.currentItems[this.currentIndex];
    const isCorrect = choseFruit === item.isFruit;

    this.el.btnFruit.disabled = true;
    this.el.btnVegetable.disabled = true;

    const chosenBtn = choseFruit ? this.el.btnFruit : this.el.btnVegetable;
    chosenBtn.classList.add(isCorrect ? 'flash-correct' : 'flash-wrong');
    setTimeout(() => {
      chosenBtn.classList.remove('flash-correct', 'flash-wrong');
    }, 600);

    if (isCorrect) {
      SoundEffects.correct();
    } else {
      SoundEffects.wrong();
    }

    this.showFeedback(isCorrect, item);
  },

  showFeedback(correct, item) {
    this.el.fruitFeedback.classList.remove('hidden', 'correct', 'wrong');
    this.el.fruitFeedback.classList.add(correct ? 'correct' : 'wrong');

    this.el.fruitFeedbackIcon.textContent = correct ? '🎉' : '😅';
    this.el.fruitFeedbackText.textContent = correct ? 'أحسنت!' : 'لا! الإجابة الصحيحة:';

    const typeText = item.isFruit ? 'فاكهة 🍎' : 'خضار 🥦';
    this.el.fruitFeedbackReason.innerHTML = `<strong>${item.name}</strong> - ${typeText}<br>${item.info}`;
  },

  dismissFeedback() {
    this.el.fruitFeedback.classList.add('hidden');
    this.currentIndex++;

    if (this.currentIndex >= this.currentItems.length) {
      this.showEnd();
    } else {
      this.showCard();
    }
  },

  showEnd() {
    SoundEffects.victory();
    this.launchConfetti();
    this.showScreen('fruit-end');
  },

  async showBrowse() {
    this.showScreen('fruit-browse');
    this.renderBrowseCards('all');
  },

  async renderBrowseCards(filter) {
    this.el.fruitBrowseGrid.innerHTML = '';

    const filtered = filter === 'all'
      ? fruitsVegetables
      : filter === 'fruit'
        ? fruitsVegetables.filter(a => a.isFruit)
        : fruitsVegetables.filter(a => !a.isFruit);

    for (const item of filtered) {
      const card = document.createElement('div');
      card.className = 'browse-card';

      const tagClass = item.isFruit ? 'fruit-tag' : 'vegetable-tag';
      const tagText = item.isFruit ? 'فاكهة 🍎' : 'خضار 🥦';

      card.innerHTML = `
        <img class="browse-card-img" src="" alt="${item.name}">
        <div class="browse-card-body">
          <div class="browse-card-name">${item.name}</div>
          <span class="browse-card-tag ${tagClass}">${tagText}</span>
          <div class="browse-card-reason">${item.info}</div>
        </div>
      `;

      this.el.fruitBrowseGrid.appendChild(card);

      this.fetchImage(item.searchTerm).then(url => {
        if (url) {
          card.querySelector('.browse-card-img').src = url;
        }
      });
    }
  },

  filterBrowse(filter) {
    this.renderBrowseCards(filter);
  },

  launchConfetti() {
    const colors = ['#ff6b6b', '#ffd900', '#51cf66', '#339af0', '#f06595', '#845ef7'];
    for (let i = 0; i < 60; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = Math.random() * 100 + 'vw';
      piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDuration = (2 + Math.random() * 2) + 's';
      piece.style.animationDelay = Math.random() * 1 + 's';
      piece.style.transform = `rotate(${Math.random() * 360}deg)`;
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 5000);
    }
  }
};

document.addEventListener('DOMContentLoaded', () => FruitGame.init());
