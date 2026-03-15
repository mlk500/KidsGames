const Game = {
  currentAnimals: [],
  currentIndex: 0,
  imageCache: {},
  currentAudio: null,

  el: {},

  init() {
    this.el = {
      welcomeScreen: document.getElementById('welcome-screen'),
      animalMenuScreen: document.getElementById('animal-menu-screen'),
      gameScreen: document.getElementById('game-screen'),
      browseScreen: document.getElementById('browse-screen'),
      endScreen: document.getElementById('end-screen'),
      animalGameBtn: document.getElementById('animal-game-btn'),
      fruitGameBtn: document.getElementById('fruit-game-btn'),
      startBtn: document.getElementById('start-btn'),
      browseBtn: document.getElementById('browse-btn'),
      animalBackBtn: document.getElementById('animal-back-btn'),
      animalCard: document.getElementById('animal-card'),
      animalImage: document.getElementById('animal-image'),
      animalName: document.getElementById('animal-name'),
      loadingSpinner: document.getElementById('loading-spinner'),
      btnPredator: document.getElementById('btn-predator'),
      btnFriendly: document.getElementById('btn-friendly'),
      feedback: document.getElementById('feedback'),
      feedbackIcon: document.getElementById('feedback-icon'),
      feedbackText: document.getElementById('feedback-text'),
      feedbackReason: document.getElementById('feedback-reason'),
      cardCounter: document.getElementById('card-counter'),
      gameHomeBtn: document.getElementById('game-home-btn'),
      nextBtn: document.getElementById('next-btn'),
      browseGrid: document.getElementById('browse-grid'),
      feedbackClose: document.getElementById('feedback-close'),
      browseBackBtn: document.getElementById('browse-back-btn'),
      browseHomeBtn: document.getElementById('browse-home-btn'),
      playAgainBtn: document.getElementById('play-again-btn'),
      homeBtn: document.getElementById('home-btn'),
    };

    // Welcome hub buttons
    this.el.animalGameBtn.addEventListener('click', () => this.showScreen('animal-menu'));
    this.el.fruitGameBtn.addEventListener('click', () => {
      SoundEffects.click();
      const allScreens = document.querySelectorAll('.screen');
      allScreens.forEach(s => s.classList.remove('active'));
      document.getElementById('fruit-menu-screen').classList.add('active');
    });

    // Animal menu buttons
    this.el.startBtn.addEventListener('click', () => this.startGame());
    this.el.browseBtn.addEventListener('click', () => this.showBrowse());
    this.el.animalBackBtn.addEventListener('click', () => this.showScreen('welcome'));

    // Game buttons
    this.el.btnPredator.addEventListener('click', () => this.answer(true));
    this.el.btnFriendly.addEventListener('click', () => this.answer(false));
    this.el.gameHomeBtn.addEventListener('click', () => this.showScreen('welcome'));
    this.el.nextBtn.addEventListener('click', () => this.skipCard());
    this.el.feedbackClose.addEventListener('click', () => this.dismissFeedback());
    this.el.browseBackBtn.addEventListener('click', () => this.showScreen('animal-menu'));
    this.el.browseHomeBtn.addEventListener('click', () => this.showScreen('welcome'));
    this.el.playAgainBtn.addEventListener('click', () => this.startGame());
    this.el.homeBtn.addEventListener('click', () => this.showScreen('welcome'));

    // Browse filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
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
      'animal-menu': this.el.animalMenuScreen,
      game: this.el.gameScreen,
      browse: this.el.browseScreen,
      end: this.el.endScreen
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

  startGame() {
    this.currentIndex = 0;
    this.currentAnimals = this.shuffleArray(animals);
    this.showScreen('game');
    this.currentAnimals.slice(0, 3).forEach(a => this.fetchImage(a.searchTerm));
    this.showCard();
  },

  skipCard() {
    this.currentIndex++;
    if (this.currentIndex >= this.currentAnimals.length) {
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
      const url = `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(searchTerm)}&image_type=photo&safesearch=true&per_page=5&category=animals`;
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
    const animal = this.currentAnimals[this.currentIndex];

    this.el.animalCard.classList.remove('card-enter');
    this.el.animalCard.classList.add('flipped');
    this.el.btnPredator.disabled = true;
    this.el.btnFriendly.disabled = true;

    this.el.cardCounter.textContent = `${this.currentIndex + 1} / ${this.currentAnimals.length}`;

    this.el.animalImage.style.opacity = '0';
    this.el.loadingSpinner.classList.add('active');
    this.el.animalName.textContent = animal.name;

    const imageUrl = await this.fetchImage(animal.searchTerm);

    if (imageUrl) {
      const img = new Image();
      img.onload = () => {
        this.el.animalImage.src = imageUrl;
        this.el.animalImage.alt = animal.name;
        this.el.animalImage.style.opacity = '1';
        this.el.loadingSpinner.classList.remove('active');
      };
      img.onerror = () => {
        this.el.animalImage.src = '';
        this.el.loadingSpinner.classList.remove('active');
      };
      img.src = imageUrl;
    } else {
      this.el.animalImage.src = '';
      this.el.loadingSpinner.classList.remove('active');
    }

    if (this.currentIndex + 1 < this.currentAnimals.length) {
      this.fetchImage(this.currentAnimals[this.currentIndex + 1].searchTerm);
    }

    setTimeout(() => {
      SoundEffects.flip();
      this.playVoice(animal.englishName);
      this.el.animalCard.classList.remove('flipped');
      this.el.animalCard.classList.add('card-enter');
      this.el.btnPredator.disabled = false;
      this.el.btnFriendly.disabled = false;
    }, 400);
  },

  answer(chosePredator) {
    const animal = this.currentAnimals[this.currentIndex];
    const isCorrect = chosePredator === animal.isPredator;

    this.el.btnPredator.disabled = true;
    this.el.btnFriendly.disabled = true;

    const chosenBtn = chosePredator ? this.el.btnPredator : this.el.btnFriendly;
    chosenBtn.classList.add(isCorrect ? 'flash-correct' : 'flash-wrong');
    setTimeout(() => {
      chosenBtn.classList.remove('flash-correct', 'flash-wrong');
    }, 600);

    if (isCorrect) {
      SoundEffects.correct();
    } else {
      SoundEffects.wrong();
    }

    this.showFeedback(isCorrect, animal);
  },

  showFeedback(correct, animal) {
    this.el.feedback.classList.remove('hidden', 'correct', 'wrong');
    this.el.feedback.classList.add(correct ? 'correct' : 'wrong');

    this.el.feedbackIcon.textContent = correct ? '🎉' : '😅';
    this.el.feedbackText.textContent = correct ? 'أحسنت!' : 'لا! الإجابة الصحيحة:';

    const typeText = animal.isPredator ? 'حيوان مفترس 🦁' : 'حيوان أليف 🐰';
    this.el.feedbackReason.innerHTML = `<strong>${animal.name}</strong> - ${typeText}<br>${animal.reason}`;
  },

  playVoice(name) {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
    }
    this.currentAudio = new Audio(`voices/${name}.mp3`);
    this.currentAudio.play().catch(e => console.warn("Audio playback failed:", e));
  },

  dismissFeedback() {
    this.el.feedback.classList.add('hidden');
    this.currentIndex++;

    if (this.currentIndex >= this.currentAnimals.length) {
      this.showEnd();
    } else {
      this.showCard();
    }
  },

  showEnd() {
    SoundEffects.victory();
    this.launchConfetti();
    this.showScreen('end');
  },

  async showBrowse() {
    this.showScreen('browse');
    this.renderBrowseCards('all');
  },

  async renderBrowseCards(filter) {
    this.el.browseGrid.innerHTML = '';

    const filtered = filter === 'all'
      ? animals
      : filter === 'predator'
        ? animals.filter(a => a.isPredator)
        : animals.filter(a => !a.isPredator);

    for (const animal of filtered) {
      const card = document.createElement('div');
      card.className = 'browse-card';
      card.dataset.predator = animal.isPredator ? 'true' : 'false';

      const tagClass = animal.isPredator ? 'predator' : 'friendly';
      const tagText = animal.isPredator ? 'مفترس 🦁' : 'أليف 🐰';

      card.innerHTML = `
        <img class="browse-card-img" src="" alt="${animal.name}" data-search="${animal.englishName}">
        <div class="browse-card-body">
          <div class="browse-card-name">${animal.name}</div>
          <span class="browse-card-tag ${tagClass}">${tagText}</span>
          <div class="browse-card-reason">${animal.reason}</div>
        </div>
      `;

      this.el.browseGrid.appendChild(card);

      this.fetchImage(animal.searchTerm).then(url => {
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

document.addEventListener('DOMContentLoaded', () => Game.init());
