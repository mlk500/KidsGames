const animals = [
  // === Predators (حيوانات مفترسة) ===
  {
    name: "أسد",
    englishName: "lion",
    searchTerm: "cute lion clipart",
    type: "ثديي",
    isPredator: true,
    reason: "يصطاد الحمار الوحشي والظباء"
  },
  {
    name: "نمر",
    englishName: "tiger",
    searchTerm: "tiger cartoon drawing",
    type: "ثديي",
    isPredator: true,
    reason: "يصطاد الغزلان والخنازير البرية"
  },
  {
    name: "ذئب",
    englishName: "wolf",
    searchTerm: "wolf grey animal illustration",
    type: "ثديي",
    isPredator: true,
    reason: "يصطاد في مجموعات"
  },
  {
    name: "قرش",
    englishName: "shark",
    searchTerm: "shark cartoon drawing",
    type: "سمكة",
    isPredator: true,
    reason: "أقوى مفترس في المحيط"
  },
  {
    name: "تمساح",
    englishName: "crocodile",
    searchTerm: "cute crocodile clipart",
    type: "زاحف",
    isPredator: true,
    reason: "يصطاد بالمباغتة في الأنهار"
  },
  {
    name: "دب قطبي",
    englishName: "polar bear",
    searchTerm: "cute polar bear clipart white",
    type: "ثديي",
    isPredator: true,
    reason: "يصطاد الفقمات على الجليد"
  },
  {
    name: "نسر",
    englishName: "eagle",
    searchTerm: "bald eagle illustration",
    type: "طائر",
    isPredator: true,
    reason: "يصطاد الأسماك والحيوانات الصغيرة"
  },
  {
    name: "حوت",
    englishName: "whale",
    searchTerm: "orca killer whale cartoon",
    type: "ثديي",
    isPredator: true,
    reason: "صياد ذكي يصطاد في مجموعات"
  },
  {
    name: "فهد",
    englishName: "leopard",
    searchTerm: "leopard cat cartoon cute",
    type: "ثديي",
    isPredator: true,
    reason: "متسلق قوي يصطاد الظباء"
  },
  {
    name: "بومة",
    englishName: "owl",
    searchTerm: "cute owl clipart",
    type: "طائر",
    isPredator: true,
    reason: "صياد ليلي صامت"
  },
  {
    name: "دب",
    englishName: "bear",
    searchTerm: "brown bear cartoon drawing",
    type: "ثديي",
    isPredator: true,
    reason: "يصطاد الأسماك والحيوانات"
  },
  {
    name: "ثعلب",
    englishName: "fox",
    searchTerm: "red fox cartoon drawing",
    type: "ثديي",
    isPredator: true,
    reason: "يصطاد الفئران والطيور"
  },
  {
    name: "ضبع",
    englishName: "hyena",
    searchTerm: "hyena cartoon drawing",
    type: "ثديي",
    isPredator: true,
    reason: "يصطاد في مجموعات ماهرة"
  },

  {
    name: "قرد",
    englishName: "monkey",
    searchTerm: "monkey ape cartoon nature",
    type: "ثديي",
    isPredator: true,
    reason: "حيوان بري قد يكون خطيراً"
  },

  // === Non-Predators (حيوانات أليفة / غير مفترسة) ===
  {
    name: "حمار وحشي",
    englishName: "zebra",
    searchTerm: "zebra cartoon drawing",
    type: "ثديي",
    isPredator: true,
    reason: "يأكل العشب"
  },
  {
    name: "أرنب",
    englishName: "rabbit",
    searchTerm: "rabbit bunny cartoon drawing cute",
    type: "ثديي",
    isPredator: false,
    reason: "يأكل الخضروات والأعشاب"
  },
  {
    name: "غزال",
    englishName: "deer",
    searchTerm: "deer cartoon drawing cute",
    type: "ثديي",
    isPredator: false,
    reason: "يأكل العشب في الغابات"
  },
  {
    name: "كنغر",
    englishName: "kangaroo",
    searchTerm: "kangaroo cartoon animal",
    type: "ثديي",
    isPredator: true,
    reason: "يأكل العشب والشجيرات"
  },
  {
    name: "خروف",
    englishName: "sheep",
    searchTerm: "cute sheep lamb clipart",
    type: "ثديي",
    isPredator: false,
    reason: "يأكل العشب في المزرعة"
  },
  {
    name: "بقرة",
    englishName: "cow",
    searchTerm: "cow cartoon drawing cute farm",
    type: "ثديي",
    isPredator: false,
    reason: "تأكل العشب في المزرعة"
  },
  {
    name: "حصان",
    englishName: "horse",
    searchTerm: "horse cartoon drawing brown",
    type: "ثديي",
    isPredator: false,
    reason: "يأكل العشب والحبوب"
  },
  {
    name: "باندا",
    englishName: "panda",
    searchTerm: "panda bear cartoon cute",
    type: "ثديي",
    isPredator: true,
    reason: "يأكل الخيزران فقط تقريباً"
  },
  {
    name: "وحيد القرن",
    englishName: "rhinoceros",
    searchTerm: "rhino cartoon drawing cute",
    type: "ثديي",
    isPredator: true,
    reason: "يأكل الشجيرات والأعشاب"
  },
  {
    name: "سلحفاة",
    englishName: "tortoise",
    searchTerm: "turtle tortoise cartoon drawing cute",
    type: "زاحف",
    isPredator: false,
    reason: "تأكل الصبار والعشب"
  },
  {
    name: "قطة",
    englishName: "cat",
    searchTerm: "cat pet cartoon cute",
    type: "ثديي",
    isPredator: false,
    reason: "حيوان أليف يعيش مع الإنسان"
  },
  {
    name: "دجاجة",
    englishName: "chicken",
    searchTerm: "chicken hen cartoon drawing",
    type: "طائر",
    isPredator: false,
    reason: "طائر أليف في المزرعة"
  },
  {
    name: "ببغاء",
    englishName: "parrot",
    searchTerm: "parrot cartoon drawing colorful",
    type: "طائر",
    isPredator: false,
    reason: "طائر أليف يأكل البذور والفواكه"
  },
  {
    name: "جمل",
    englishName: "camel",
    searchTerm: "camel desert clipart",
    type: "ثديي",
    isPredator: false,
    reason: "يأكل النباتات ويعيش في الصحراء"
  },
  {
    name: "بطة",
    englishName: "duck",
    searchTerm: "duck cartoon drawing cute yellow",
    type: "طائر",
    isPredator: false,
    reason: "طائر أليف يعيش قرب الماء"
  },
  {
    name: "حمار",
    englishName: "donkey",
    searchTerm: "donkey cartoon drawing cute",
    type: "ثديي",
    isPredator: false,
    reason: "حيوان أليف يساعد الإنسان"
  },
  {
    name: "كلب",
    englishName: "dog",
    searchTerm: "golden retriever cartoon",
    type: "ثديي",
    isPredator: false,
    reason: "أفضل صديق للإنسان"
  },
  {
    name: "هامستر",
    englishName: "hamster",
    searchTerm: "hamster pet cartoon illustration",
    type: "ثديي",
    isPredator: false,
    reason: "حيوان أليف صغير وجميل"
  },
  {
    name: "سمكة",
    englishName: "fish",
    searchTerm: "goldfish cartoon cute aquarium",
    type: "سمكة",
    isPredator: false,
    reason: "تعيش في الماء وتربى في البيت"
  },
  {
    name: "عصفور",
    englishName: "bird",
    searchTerm: "bird cartoon cute small",
    type: "طائر",
    isPredator: false,
    reason: "طائر صغير أليف يغرد"
  }
];
