const quotes = [
    "English: Good Morning",
    "Zulu: Sawubona ",
"Xhosa: Mholo, kusile",
"Afrikaans: Goeie môre",
"Sotho (Sesotho): Khotsong",
"Tswana (Setswana): Dumela O tsogile jang?", 
"Venda: Ndi matsheloni",
"Tsonga: Avuxeni",
"Swati (Swazi): Kusile",
"Ndebele: Livukile",
"Spanish: Buenos días",
"French: Bonjour",
"German: Guten Morgen",
"Italian: Buongiorno",
"Portuguese: Bom dia",
"Russian: Доброе утро (Dobroye utro)",
"Chinese (Mandarin): 早上好 (Zǎoshang hǎo)",
"Japanese: おはようございます (Ohayō gozaimasu)",
"Korean: 좋은 아침 (Joheun achim)",
"Hindi: शुभ प्रभात (Shubh prabhat)",
"Arabic: صباح الخير (Sabah al-khayr)",
"Swahili: Habari ya asubuhi",
"Dutch: Goedemorgen",
"Greek: Καλημέρα (Kaliméra)",
"Turkish: Günaydın",
"Hebrew: בוקר טוב (Boker tov)",
"Thai: สวัสดีตอนเช้า (S̄wạs̄dī txn chêā)",
"Bengali: সুপ্রভাত (Suprabhat)",
"Urdu: صبح بخیر (Subah bakhair)",
"Finnish: Hyvää huomenta",
"Swedish: God morgon",
"Norwegian: God morgen",
"Danish: God morgen",
"Polish: Dzień dobry",
"Czech: Dobré ráno",
"Hungarian: Jó reggelt",
"Romanian: Bună dimineața",
"Indonesian: Selamat pagi",
"Malay: Selamat pagi",
"Filipino (Tagalog): Magandang umaga",
"Vietnamese: Chào buổi sáng",
"Icelandic: Góðan daginn",
"Serbian: Добро јутро (Dobro jutro)",
"Croatian: Dobro jutro",
"Slovak: Dobré ráno",
"Ukrainian: Добрий ранок (Dobryy ranok)",
"Malayalam: സുപ്രഭാതം (Suprabhatham)",
"Tamil: காலை வணக்கம் (Kaalai vaṇakkam)",
"Telugu: శుభోదయం (Śubhōdayaṁ)",
]
    
const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")


function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }
    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)
        if (usedIndexes.has(randomIdx)) continue
        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }
}