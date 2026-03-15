const fruitsVegetables = [
  // === Fruits (فواكه) ===
  {
    name: "تفاح",
    englishName: "apple",
    searchTerm: "red apple fruit clipart",
    type: "فاكهة",
    isFruit: true,
    info: "فاكهة حمراء لذيذة وصحية"
  },
  {
    name: "موز",
    englishName: "banana",
    searchTerm: "banana fruit cartoon clipart",
    type: "فاكهة",
    isFruit: true,
    info: "فاكهة صفراء غنية بالطاقة"
  },
  {
    name: "برتقال",
    englishName: "orange",
    searchTerm: "orange fruit illustration",
    type: "فاكهة",
    isFruit: true,
    info: "فاكهة غنية بفيتامين سي"
  },
  {
    name: "توت",
    englishName: "strawberry",
    searchTerm: "strawberry fruit cartoon cute",
    type: "فاكهة",
    isFruit: true,
    info: "فاكهة حمراء صغيرة وحلوة"
  },
  {
    name: "عنب",
    englishName: "grapes",
    searchTerm: "grapes fruit cartoon clipart purple",
    type: "فاكهة",
    isFruit: true,
    info: "فاكهة صغيرة تنمو في عناقيد"
  },
  {
    name: "بطيخ",
    englishName: "watermelon",
    searchTerm: "watermelon cartoon illustration",
    type: "فاكهة",
    isFruit: true,
    info: "فاكهة كبيرة منعشة في الصيف"
  },
  {
    name: "مانجو",
    englishName: "mango",
    searchTerm: "mango fruit ripe sweet",
    type: "فاكهة",
    isFruit: true,
    info: "فاكهة استوائية حلوة جداً"
  },
  {
    name: "أناناس",
    englishName: "pineapple",
    searchTerm: "pineapple fruit cartoon clipart",
    type: "فاكهة",
    isFruit: true,
    info: "فاكهة استوائية لها تاج أخضر"
  },
  {
    name: "كرز",
    englishName: "cherry",
    searchTerm: "cherry fruit cartoon clipart red",
    type: "فاكهة",
    isFruit: true,
    info: "فاكهة صغيرة حمراء حلوة"
  },
  {
    name: "خوخ",
    englishName: "peach",
    searchTerm: "peach fruit cartoon clipart",
    type: "فاكهة",
    isFruit: true,
    info: "فاكهة ناعمة وحلوة"
  },
  {
    name: "كمثرى",
    englishName: "pear",
    searchTerm: "pear green fruit illustration",
    type: "فاكهة",
    isFruit: true,
    info: "فاكهة خضراء شكلها مميز"
  },
  {
    name: "ليمون",
    englishName: "lemon",
    searchTerm: "lemon fruit cartoon clipart yellow",
    type: "فاكهة",
    isFruit: true,
    info: "فاكهة حامضة صفراء"
  },
  {
    name: "رمان",
    englishName: "pomegranate",
    searchTerm: "pomegranate red fruit",
    type: "فاكهة",
    isFruit: true,
    info: "فاكهة مليئة بالحبوب الحمراء"
  },
  {
    name: "تين",
    englishName: "fig",
    searchTerm: "fig fruit cartoon",
    type: "فاكهة",
    isFruit: true,
    info: "فاكهة حلوة مذكورة في القرآن"
  },
  // {
  //   name: "توت",
  //   englishName: "blueberry",
  //   searchTerm: "blueberry fruit cartoon clipart",
  //   type: "فاكهة",
  //   isFruit: true,
  //   info: "فاكهة صغيرة زرقاء مفيدة"
  // },
  {
    name: "كيوي",
    englishName: "kiwi",
    searchTerm: "kiwi fruit cartoon clipart green",
    type: "فاكهة",
    isFruit: true,
    info: "فاكهة خضراء من الداخل بنية من الخارج"
  },
  {
    name: "تمر",
    englishName: "dates",
    searchTerm: "date fruit brown",
    type: "فاكهة",
    isFruit: true,
    info: "فاكهة حلوة من النخل"
  },
  {
    name: "جوز هند",
    englishName: "coconut",
    searchTerm: "coconut fruit cartoon",
    type: "فاكهة",
    isFruit: true,
    info: "فاكهة استوائية كبيرة بداخلها ماء"
  },

  // === Vegetables (خضروات) ===
  {
    name: "جزر",
    englishName: "carrot",
    searchTerm: "carrot vegetable cartoon clipart orange",
    type: "خضار",
    isFruit: false,
    info: "خضار برتقالي مفيد للعيون"
  },
  {
    name: "خيار",
    englishName: "cucumber",
    searchTerm: "cucumber vegetable cartoon clipart",
    type: "خضار",
    isFruit: false,
    info: "خضار أخضر منعش"
  },
  {
    name: "بطاطا",
    englishName: "potato",
    searchTerm: "potato vegetable cartoon clipart cute",
    type: "خضار",
    isFruit: false,
    info: "خضار يُطبخ بطرق كثيرة"
  },
  {
    name: "بصل",
    englishName: "onion",
    searchTerm: "onion vegetable illustration",
    type: "خضار",
    isFruit: false,
    info: "خضار يُبكينا عند تقطيعه"
  },
  {
    name: "فلفل",
    englishName: "bell pepper",
    searchTerm: "bell pepper vegetable cartoon colorful",
    type: "خضار",
    isFruit: false,
    info: "خضار ملون أحمر وأخضر وأصفر"
  },
  {
    name: "بروكلي",
    englishName: "broccoli",
    searchTerm: "broccoli green vegetable",
    type: "خضار",
    isFruit: false,
    info: "خضار أخضر يشبه الشجرة الصغيرة"
  },
  {
    name: "ذرة",
    englishName: "corn",
    searchTerm: "corn on the cob cartoon",
    type: "خضار",
    isFruit: false,
    info: "خضار أصفر لذيذ"
  },
  {
    name: "باذنجان",
    englishName: "eggplant",
    searchTerm: "eggplant vegetable cartoon clipart purple",
    type: "خضار",
    isFruit: false,
    info: "خضار بنفسجي كبير"
  },
  {
    name: "خس",
    englishName: "lettuce",
    searchTerm: "lettuce vegetable cartoon",
    type: "خضار",
    isFruit: false,
    info: "خضار أخضر يُستخدم في السلطة"
  },
  {
    name: "سبانخ",
    englishName: "spinach",
    searchTerm: "spinach green leaves",
    type: "خضار",
    isFruit: false,
    info: "خضار أخضر قوي مثل باباي"
  },
  {
    name: "قرع",
    englishName: "pumpkin",
    searchTerm: "pumpkin vegetable cartoon",
    type: "خضار",
    isFruit: false,
    info: "خضار برتقالي كبير"
  },
  {
    name: "فجل",
    englishName: "radish",
    searchTerm: "radish vegetable cartoon clipart red",
    type: "خضار",
    isFruit: false,
    info: "خضار أحمر صغير"
  },
  {
    name: "ثوم",
    englishName: "garlic",
    searchTerm: "garlic vegetable cartoon clipart",
    type: "خضار",
    isFruit: false,
    info: "خضار صغير له رائحة قوية"
  },
  {
    name: "بازلاء",
    englishName: "peas",
    searchTerm: "peas vegetable cartoon",
    type: "خضار",
    isFruit: false,
    info: "خضار أخضر صغير في قرون"
  },
  {
    name: "كوسا",
    englishName: "zucchini",
    searchTerm: "zucchini drawing sketch",
    type: "خضار",
    isFruit: false,
    info: "خضار أخضر طويل"
  },
  {
    name: "فطر",
    englishName: "mushroom",
    searchTerm: "mushroom vegetable cartoon",
    type: "خضار",
    isFruit: false,
    info: "خضار له شكل المظلة"
  },
  // {
  //   name: "بطاطا حلوة",
  //   englishName: "sweet potato",
  //   searchTerm: "sweet potato cartoon clipart orange",
  //   type: "خضار",
  //   isFruit: false,
  //   info: "خضار حلو ولذيذ"
  // }
];
