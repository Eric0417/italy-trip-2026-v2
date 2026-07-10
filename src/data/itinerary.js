export const tripInfo = {
  title: "義大利之旅",
  subtitle: "2026.7.25 — 8.9",
  totalDays: 16,
  cities: ["羅馬", "佛羅倫斯", "威尼斯", "米蘭"],
  cityNames: {
    "羅馬": "Rome",
    "佛羅倫斯": "Florence",
    "威尼斯": "Venice",
    "米蘭": "Milan"
  },
  cityColors: {
    "羅馬": { bg: "#FFF8E7", accent: "#C8953B", dark: "#8B6914", gradient: "linear-gradient(135deg, #fdf4d8, #f5e1a4)" },
    "佛羅倫斯": { bg: "#EDF5E8", accent: "#6B8F5E", dark: "#3D5A2E", gradient: "linear-gradient(135deg, #e8f0e2, #c8d9ba)" },
    "威尼斯": { bg: "#E6EEF6", accent: "#4A7BA7", dark: "#1E4A6B", gradient: "linear-gradient(135deg, #dce8f3, #b8d0e8)" },
    "米蘭": { bg: "#F5F0EB", accent: "#8B6F5E", dark: "#4A3729", gradient: "linear-gradient(135deg, #f2ece5, #e0d4c4)" },
    "交通": { bg: "#F0F0F0", accent: "#777", dark: "#444", gradient: "linear-gradient(135deg, #e8e8e8, #d0d0d0)" },
  }
};

export const days = [
  {
    day: 1, date: "7/25", weekday: "六", city: "交通",
    title: "澳門 → 台北 → 阿布扎比",
    icon: "✈️",
    events: [
      { time: "13:15-15:00", type: "✈️ 交通", title: "澳門 → 台北 TPE T2", detail: "BR802，A330-300", budget: "" },
      { time: "15:00-19:40", type: "🍜 餐飲", title: "桃園機場轉機，B2美食街用餐", detail: "選擇豐富、價格實惠", budget: "NT$200-400" },
      { time: "19:40-00:55+1", type: "✈️ 交通", title: "台北 TPE T2 → 阿布扎比 AUH", detail: "EY899，B787-10（原19:25-00:15，已改點）", budget: "" },
    ]
  },
  {
    day: 2, date: "7/26", weekday: "日", city: "羅馬",
    title: "到達羅馬",
    icon: "🏛️",
    events: [
      { time: "02:15-06:25", type: "✈️ 交通", title: "阿布扎比 → 羅馬 FCO", detail: "EY085，B787-10", budget: "" },
      { time: "07:00-07:32", type: "🚄 交通", title: "Leonardo Express → Roma Termini", detail: "約32分鐘，€14", budget: "€14" },
      { time: "08:00-13:30", type: "🎒 自由活動", title: "Termini周邊閒逛，適應時差", detail: "行李可先寄放酒店", budget: "" },
      { time: "14:00", type: "🏨 住宿", title: "入住 拿破崙酒店", detail: "★★★★ | Piazza Vittorio Emanuele II 105, 00185 | Tel: +39 06 4467 264", budget: "" },
      { time: "晚餐", type: "🍝 餐飲", title: "La Famiglia", detail: "家庭式羅馬/阿布魯佐風味，步行可達，人均€15-30", budget: "€15-30" },
    { time: "全天", type: "💡 建議回應", title: "羅馬五日交通券方案", detail: "建議購買 ATAC 週票 CIS (Carta Integrata Settimanale) €24，有效期7天，可無限次搭乘地鐵、巴士、電車。購買地點：任一地鐵站自動售票機或 Tabacchi 煙草店。如不買週票，也可考慮 72小時票 €18 搭配單程票 €1.5。", budget: "€24" },
    { time: "晚間", type: "💡 建議回應", title: "酒店附近超市（宵夜採購）", detail: "拿破崙酒店周邊超市：① Carrefour Express — Via Giovanni Giolitti 近 Termini 車站，步行約6分鐘，營業至22:00。② Conad City — Via Merulana 與 Piazza Vittorio 路口，步行約4分鐘。③ Simply — Piazza Vittorio Emanuele II 市場旁，新鮮蔬果和熟食選擇多。", budget: "" },
    ]
  },
  {
    day: 3, date: "7/27", weekday: "一", city: "羅馬",
    title: "羅馬探索日",
    icon: "🏛️",
    events: [
      { time: "07:00-09:00", type: "🥐 早餐", title: "酒店早餐", detail: "酒店包", budget: "" },
      { time: "09:00-12:00", type: "🏛️ 景點", title: "羅馬競技場 + 古羅馬廣場 + 帕拉提諾山", detail: "建議提前網上買票，可購買 Roma Pass", budget: "€16+" },
      { time: "12:00-13:30", type: "🍝 午餐", title: "特斯塔西奧市場 (Mercato Testaccio)", detail: "在地人喜愛的美食市場，新鮮現做意麵€6-8、羅馬披薩€4-5", budget: "€10-15" },
      { time: "14:00-17:00", type: "🏛️ 景點", title: "威尼斯廣場 → 萬神殿 → 納沃納廣場", detail: "步行可達，沿途欣賞羅馬街景", budget: "" },
      { time: "晚餐", type: "🍝 餐飲", title: "La Famiglia 或 特斯塔西奧市場周邊", detail: "", budget: "€15-30" },
    { time: "晚間", type: "💡 建議回應", title: "酒店附近超市（宵夜採購）", detail: "拿破崙酒店周邊超市：① Carrefour Express — Via Giovanni Giolitti 近 Termini 車站，步行約6分鐘，營業至22:00。② Conad City — Via Merulana 與 Piazza Vittorio 路口，步行約4分鐘。③ Simply — Piazza Vittorio Emanuele II 市場旁，新鮮蔬果和熟食選擇多。", budget: "" },
    ]
  },
  {
    day: 4, date: "7/28", weekday: "二", city: "羅馬",
    title: "羅馬藝術日",
    icon: "🎨",
    events: [
      { time: "07:00-09:00", type: "🥐 早餐", title: "酒店早餐", detail: "酒店包", budget: "" },
      { time: "09:00-12:00", type: "🏛️ 景點", title: "博爾蓋塞美術館 (Galleria Borghese)", detail: "✅ 建議預約，門票€13-15，美術館+花園很值得", budget: "€13-15" },
      { time: "12:00-13:30", type: "🍝 午餐", title: "Vizi e Sfizi", detail: "家庭式小餐館，紙包魚、意麵、羅馬披薩，價格非常實惠", budget: "€10-15" },
      { time: "下午", type: "🏛️ 景點", title: "真理之口 → 西班牙階梯 → 許願池", detail: "", budget: "" },
      { time: "晚餐", type: "🍝 餐飲", title: "Luzzi 或 猶太區傳統菜", detail: "猶太區必試：炸朝鮮薊 Carciofi alla Giudia", budget: "€15-25" },
    { time: "晚間", type: "💡 建議回應", title: "酒店附近超市（宵夜採購）", detail: "拿破崙酒店周邊超市：① Carrefour Express — Via Giovanni Giolitti 近 Termini 車站，步行約6分鐘，營業至22:00。② Conad City — Via Merulana 與 Piazza Vittorio 路口，步行約4分鐘。③ Simply — Piazza Vittorio Emanuele II 市場旁，新鮮蔬果和熟食選擇多。", budget: "" },
    ]
  },
  {
    day: 5, date: "7/29", weekday: "三", city: "羅馬",
    title: "梵蒂岡日",
    icon: "⛪",
    events: [
      { time: "07:00-08:30", type: "🥐 早餐", title: "酒店早餐", detail: "酒店包", budget: "" },
      { time: "09:00-10:45", type: "🚶 交通", title: "前往梵蒂岡", detail: "步行或地鐵", budget: "" },
      { time: "11:00-13:00", type: "🎨 景點", title: "梵蒂岡博物館 (Musei Vaticani)", detail: "⭐樂記得帶國際學生證！世界最偉大博物館之一", budget: "€17+" },
      { time: "13:00-14:00", type: "🍝 午餐", title: "梵蒂岡博物館內餐廳", detail: "最方便，節省再次安檢時間", budget: "€10-15" },
      { time: "14:00-15:30", type: "⛪ 景點", title: "西斯汀小堂", detail: "米開朗基羅《創世紀》穹頂畫", budget: "" },
      { time: "15:30-17:00", type: "⛪ 景點", title: "聖伯多祿大殿", detail: "世界最大教堂，可登頂俯瞰羅馬 (登頂電梯€10，樓梯€8)", budget: "€8-10" },
      { time: "17:00-19:00", type: "🌇 散步", title: "沿台伯河散步 → 人民廣場", detail: "沿途風景優美，有許多餐廳", budget: "" },
      { time: "晚餐", type: "🍝 餐飲", title: "人民廣場周邊餐廳", detail: "依現場人潮和菜單決定", budget: "€15-30" },
    { time: "晚間", type: "💡 建議回應", title: "酒店附近超市（宵夜採購）", detail: "拿破崙酒店周邊超市：① Carrefour Express — Via Giovanni Giolitti 近 Termini 車站，步行約6分鐘，營業至22:00。② Conad City — Via Merulana 與 Piazza Vittorio 路口，步行約4分鐘。③ Simply — Piazza Vittorio Emanuele II 市場旁，新鮮蔬果和熟食選擇多。", budget: "" },
    ]
  },
  {
    day: 6, date: "7/30", weekday: "四", city: "羅馬",
    title: "羅馬最後一天",
    icon: "🎒",
    events: [
      { time: "07:00-09:00", type: "🥐 早餐", title: "酒店早餐", detail: "酒店包", budget: "" },
      { time: "上午", type: "🎒 自由活動", title: "補齊想去但未去的景點／購物", detail: "", budget: "" },
      { time: "12:00-13:30", type: "🍝 午餐", title: "猶太區傳統料理", detail: "推薦：炸朝鮮薊 Carciofi alla Giudia，羅馬猶太區特色菜", budget: "€15-20" },
      { time: "下午", type: "🎒 自由活動", title: "最後的羅馬時光、紀念品採購", detail: "", budget: "" },
      { time: "晚餐", type: "🍝 餐飲", title: "回訪喜歡的餐廳或嘗試新餐廳", detail: "", budget: "€15-30" },
    { time: "晚間", type: "💡 建議回應", title: "酒店附近超市（宵夜採購）", detail: "拿破崙酒店周邊超市：① Carrefour Express — Via Giovanni Giolitti 近 Termini 車站，步行約6分鐘，營業至22:00。② Conad City — Via Merulana 與 Piazza Vittorio 路口，步行約4分鐘。③ Simply — Piazza Vittorio Emanuele II 市場旁，新鮮蔬果和熟食選擇多。", budget: "" },
    ]
  },
  {
    day: 7, date: "7/31", weekday: "五", city: "佛羅倫斯",
    title: "羅馬 → 佛羅倫斯",
    icon: "🚄",
    events: [
      { time: "07:00-09:00", type: "🥐 早餐", title: "酒店早餐", detail: "酒店包", budget: "" },
      { time: "11:00", type: "🏨 退房", title: "退房 拿破崙酒店", detail: "", budget: "" },
      { time: "11:55-13:31", type: "🚄 交通", title: "羅馬 → 佛羅倫斯（高鐵）", detail: "約1小時36分", budget: "€40-60" },
      { time: "13:31-14:30", type: "🍝 午餐", title: "車站附近輕食", detail: "披薩/三明治", budget: "€8-12" },
      { time: "15:00", type: "🏨 住宿", title: "入住 C-安巴夏特利酒店", detail: "★★★★ | Via Alamanni, 3, 50123 | Tel: +39 05 5287 421", budget: "" },
      { time: "16:00", type: "🎨 景點", title: "烏菲茲美術館 (Uffizi Galleries)", detail: "🎯 已訂票 16:00 ｜世界著名藝術博物館", budget: "€20+" },
      { time: "晚餐", type: "🍝 餐飲", title: "Trattoria Le Mossacce", detail: "⭐⭐ 地道托斯卡納菜，近百年歷史，份量大 €15-25", budget: "€15-25" },
    { time: "晚間", type: "💡 建議回應", title: "酒店附近超市（宵夜採購）", detail: "C-安巴夏特利酒店周邊：① Conad City — Via Nazionale 13，步行約5分鐘，營業至21:00。② Carrefour Express — Via dei Banchi 與車站之間，步行約7分鐘。③ Mercato Centrale（中央市場）— 日間有新鮮食材，晚上部分攤位仍在營業。", budget: "" },
    ]
  },
  {
    day: 8, date: "8/1", weekday: "六", city: "佛羅倫斯",
    title: "佛羅倫斯文藝復興日",
    icon: "🎭",
    events: [
      { time: "07:00-09:30", type: "🥐 早餐", title: "酒店早餐", detail: "酒店包", budget: "" },
      { time: "11:00-11:15", type: "🎨 景點", title: "學院美術館 — 大衛像", detail: "🎯 11:00-11:15入場 ｜米開朗基羅曠世巨作", budget: "€12+" },
      { time: "12:00-13:30", type: "🍝 午餐", title: "La Capannina Bistrot", detail: "中央市場附近，當地人最愛，意麵€9.5起", budget: "€9.5-15" },
      { time: "14:00-16:00", type: "⛪ 景點", title: "聖母百花大教堂登穹頂", detail: "布魯內萊斯基穹頂，俯瞰佛羅倫斯，聯票約€30", budget: "€30" },
      { time: "16:00-17:00", type: "🏛️ 景點", title: "領主廣場", detail: "露天雕塑博物館", budget: "" },
      { time: "17:00-18:00", type: "🌉 景點", title: "老橋 (Ponte Vecchio)", detail: "佛羅倫斯最古老橋樑，日落時分最美", budget: "" },
      { time: "晚餐", type: "🍝 餐飲", title: "Trattoria Marione", detail: "深受當地人喜愛，佛羅倫斯牛排聞名", budget: "€25" },
    { time: "晚間", type: "💡 建議回應", title: "酒店附近超市（宵夜採購）", detail: "C-安巴夏特利酒店周邊：① Conad City — Via Nazionale 13，步行約5分鐘，營業至21:00。② Carrefour Express — Via dei Banchi 與車站之間，步行約7分鐘。③ Mercato Centrale（中央市場）— 日間有新鮮食材，晚上部分攤位仍在營業。", budget: "" },
    ]
  },
  {
    day: 9, date: "8/2", weekday: "日", city: "威尼斯",
    title: "佛羅倫斯 → 威尼斯",
    icon: "🚄",
    events: [
      { time: "07:00-09:00", type: "🥐 早餐", title: "酒店早餐", detail: "酒店包", budget: "" },
      { time: "11:00", type: "🏨 退房", title: "退房 C-安巴夏特利酒店", detail: "", budget: "" },
      { time: "11:39-13:42", type: "🚄 交通", title: "佛羅倫斯 → 威尼斯（高鐵）", detail: "約2小時3分", budget: "€40-60" },
      { time: "13:42-14:30", type: "🍝 午餐", title: "梅斯特車站附近 —「小食堂」中餐館", detail: "物美價廉", budget: "€8-12" },
      { time: "15:00", type: "🏨 住宿", title: "入住 威尼斯廣場酒店", detail: "★★★★ | Viale Stazione, 36, 30171 Venice Mestre | Tel: +39 04 1929 388", budget: "" },
      { time: "16:00-19:00", type: "🌊 景點", title: "威尼斯主島散步：聖馬可廣場 → 嘆息橋", detail: "傍晚光線最美，遊客較少", budget: "" },
      { time: "晚餐", type: "🍝 餐飲", title: "Osteria \"Alla Staffa\"", detail: "家庭式經營，正宗威尼斯菜：墨魚汁意麵、海鮮", budget: "€15-25" },
    { time: "全天", type: "💡 建議回應", title: "威尼斯入城費（Contributo di Accesso）說明", detail: "2026年威尼斯對一日遊旅客可能收取 €5 入城費，但入住酒店（含 Mestre）的過夜旅客豁免，因為酒店已代收城市稅（City Tax）。無需額外支付入城費。若需註冊，可在官網 cda.ve.it 申請豁免 QR Code。建議出發前再次確認最新政策。", budget: "€0（酒店已含）" },
    { time: "晚間", type: "💡 建議回應", title: "酒店附近超市（宵夜採購）", detail: "威尼斯廣場酒店（Mestre）周邊：① PAM Supermarket — Via Piave 31，步行約5分鐘，營業至20:30。② Ali Supermercati — Via Ca Rossa，稍遠但種類齊全。③ Despar — Viale Stazione 車站對面，最方便快速採購。", budget: "" },
    ]
  },
  {
    day: 10, date: "8/3", weekday: "一", city: "威尼斯",
    title: "威尼斯水都日",
    icon: "🌊",
    events: [
      { time: "06:30-08:00", type: "🥐 早餐", title: "酒店早餐 (06:30-10:00)", detail: "酒店包", budget: "" },
      { time: "08:00-12:00", type: "🏘️ 景點", title: "彩色島 (Burano)", detail: "🎯 建議早出發！水上巴士約40分鐘，彩色房屋拍照聖地", budget: "€10-15(船票)" },
      { time: "12:00-13:30", type: "🍝 午餐", title: "Rosticceria Gislon（近里亞爾托橋）", detail: "歷史悠久熟食店，炸海鮮、意麵，€10-15", budget: "€10-15" },
      { time: "14:00-16:00", type: "🏛️ 景點", title: "總督宮 → 聖馬可大教堂", detail: "威尼斯哥德式建築代表，可參觀嘆息橋內部", budget: "€20+" },
      { time: "16:00-17:00", type: "🛶 體驗", title: "貢多拉 (Gondola)", detail: "議價後約€80-100/艘(30分鐘)，建議在安靜小巷上船", budget: "€40-50/人" },
      { time: "17:00-18:30", type: "🎒 自由活動", title: "里亞爾托橋周邊購物", detail: "", budget: "" },
      { time: "晚餐", type: "🍝 餐飲", title: "Osteria \"Alla Staffa\" 或嘗試其他小館", detail: "", budget: "€15-25" },
    { time: "晚間", type: "💡 建議回應", title: "酒店附近超市（宵夜採購）", detail: "威尼斯廣場酒店（Mestre）周邊：① PAM Supermarket — Via Piave 31，步行約5分鐘，營業至20:30。② Ali Supermercati — Via Ca Rossa，稍遠但種類齊全。③ Despar — Viale Stazione 車站對面，最方便快速採購。", budget: "" },
    ]
  },
  {
    day: 11, date: "8/4", weekday: "二", city: "米蘭",
    title: "威尼斯 → 米蘭",
    icon: "🚄",
    events: [
      { time: "06:30-08:00", type: "🥐 早餐", title: "酒店早餐", detail: "酒店包", budget: "" },
      { time: "12:00", type: "🏨 退房", title: "退房 威尼斯廣場酒店", detail: "", budget: "" },
      { time: "12:00-15:45", type: "🚄 交通", title: "威尼斯 → 米蘭（高鐵）", detail: "約3小時45分", budget: "€40-60" },
      { time: "15:45-16:00", type: "🚶 交通", title: "Milano Centrale → 酒店", detail: "步行約12分鐘(1KM) 或巴士60/81約4分鐘", budget: "" },
      { time: "14:00起", type: "🏨 住宿", title: "入住 米蘭嘉萊士烏納酒店", detail: "★★★★ | Piazza Lima 20124 - 2 | Tel: +39 02 2048 41 | ⚠️前台付住宿稅 €280", budget: "" },
      { time: "午餐", type: "🍝 餐飲", title: "梅斯特/米蘭車站輕食", detail: "", budget: "€8-12" },
      { time: "晚餐", type: "🍝 餐飲", title: "Osteria Tajoli", detail: "家庭經營傳統餐館，近米蘭中央車站，道地倫巴第菜", budget: "€15-25" },
    { time: "晚間", type: "💡 建議回應", title: "酒店附近超市（宵夜採購）", detail: "米蘭嘉萊士烏納酒店（Piazza Lima）周邊：① Carrefour Express — Corso Buenos Aires 57，步行約2分鐘，營業至22:00，最方便。② Esselunga — Viale Piave，步行約8分鐘，品種齊全的高級超市。③ Pam Local — Via Plinio 路口，24小時營業的便利店。", budget: "" },
    ]
  },
  {
    day: 12, date: "8/5", weekday: "三", city: "米蘭",
    title: "米蘭時尚日",
    icon: "🎨",
    events: [
      { time: "07:00-09:00", type: "🥐 早餐", title: "酒店早餐", detail: "酒店包", budget: "" },
      { time: "09:00-12:00", type: "⛪ 景點", title: "米蘭大教堂 (Duomo) 登頂", detail: "世界第三大教堂，屋頂可步行，登頂€15+", budget: "€15+" },
      { time: "12:00-13:30", type: "🍝 午餐", title: "Risoelatte Duomo", detail: "60年代復古風情家庭式餐廳，近米蘭大教堂", budget: "€10-15" },
      { time: "13:30-14:30", type: "🛍️ 購物", title: "埃馬努埃萊二世拱廊", detail: "意大利最古老購物中心，奢侈品旗艦店", budget: "" },
      { time: "下午/晚", type: "🖼️ 景點", title: "最後的晚餐 (Santa Maria delle Grazie)", detail: "🎯 確認預訂時間！達文西曠世壁畫，票極難搶", budget: "€15+" },
      { time: "可選", type: "🏰 景點", title: "斯福爾扎城堡 或 黃金四角區購物", detail: "城堡免費入場，黃金四角區：蒙提拿破崙街等名牌街", budget: "" },
      { time: "晚餐", type: "🍝 餐飲", title: "Ristorante Galleria", detail: "艾曼紐二世迴廊內，景觀一流，經典番紅花燉飯", budget: "€20-35" },
    { time: "晚間", type: "💡 建議回應", title: "酒店附近超市（宵夜採購）", detail: "米蘭嘉萊士烏納酒店（Piazza Lima）周邊：① Carrefour Express — Corso Buenos Aires 57，步行約2分鐘，營業至22:00，最方便。② Esselunga — Viale Piave，步行約8分鐘，品種齊全的高級超市。③ Pam Local — Via Plinio 路口，24小時營業的便利店。", budget: "" },
    ]
  },
  {
    day: 13, date: "8/6", weekday: "四", city: "米蘭",
    title: "科莫湖一日遊",
    icon: "🏔️",
    events: [
      { time: "07:00-08:00", type: "🥐 早餐", title: "酒店早餐", detail: "酒店包", budget: "" },
      { time: "~09:00-10:00", type: "🚄 交通", title: "米蘭 → 科莫 (Como) 火車", detail: "約1小時，從Milano Centrale出發", budget: "€10-15" },
      { time: "10:00-12:00", type: "🏔️ 景點", title: "科莫鎮漫步", detail: "科莫大教堂、老城區", budget: "" },
      { time: "12:00-13:30", type: "🍝 午餐", title: "科莫湖邊餐廳", detail: "品嘗當地湖鮮，景觀一流", budget: "€15-25" },
      { time: "13:30-16:00", type: "🚢 景點", title: "乘船遊覽科莫湖", detail: "可前往貝拉焦 (Bellagio) 等小鎮，湖光山色", budget: "€15-20(船票)" },
      { time: "傍晚", type: "🚄 交通", title: "返回米蘭", detail: "", budget: "" },
      { time: "晚餐", type: "🍝 餐飲", title: "回訪喜愛餐廳 或 探索新區", detail: "", budget: "€15-30" },
    { time: "晚間", type: "💡 建議回應", title: "酒店附近超市（宵夜採購）", detail: "米蘭嘉萊士烏納酒店（Piazza Lima）周邊：① Carrefour Express — Corso Buenos Aires 57，步行約2分鐘，營業至22:00，最方便。② Esselunga — Viale Piave，步行約8分鐘，品種齊全的高級超市。③ Pam Local — Via Plinio 路口，24小時營業的便利店。", budget: "" },
    ]
  },
  {
    day: 14, date: "8/7", weekday: "五", city: "米蘭",
    title: "米蘭最後一天",
    icon: "🎒",
    events: [
      { time: "07:00-09:00", type: "🥐 早餐", title: "酒店早餐", detail: "酒店包", budget: "" },
      { time: "上午", type: "🎨 景點", title: "布雷拉區 (Brera) 漫步", detail: "藝術家聚集區，布雷拉美術館，特色小店和咖啡館", budget: "" },
      { time: "12:00-13:30", type: "🍝 午餐", title: "布雷拉區餐廳", detail: "該區餐廳選擇豐富", budget: "€15-25" },
      { time: "下午", type: "🎒 自由活動", title: "納維利區 (Navigli) 運河畔漫步", detail: "米蘭夜生活區，運河兩旁有市集和餐廳", budget: "" },
      { time: "晚餐", type: "🍝 餐飲", title: "納維利區餐廳自由選擇", detail: "享受在米蘭最後一晚", budget: "€15-30" },
    { time: "晚間", type: "💡 建議回應", title: "酒店附近超市（宵夜採購）", detail: "米蘭嘉萊士烏納酒店（Piazza Lima）周邊：① Carrefour Express — Corso Buenos Aires 57，步行約2分鐘，營業至22:00，最方便。② Esselunga — Viale Piave，步行約8分鐘，品種齊全的高級超市。③ Pam Local — Via Plinio 路口，24小時營業的便利店。", budget: "" },
    ]
  },
  {
    day: 15, date: "8/8", weekday: "六", city: "交通",
    title: "米蘭 → 回程",
    icon: "✈️",
    events: [
      { time: "07:00-08:00", type: "🥐 早餐", title: "酒店早餐", detail: "酒店包", budget: "" },
      { time: "08:00", type: "🏨 退房", title: "退房米蘭嘉萊士烏納酒店 + 包車出發", detail: "🚗 包車：酒店 → 米蘭 MXP 機場 T1", budget: "包車費另計" },
      { time: "09:00-11:00", type: "🛂 機場", title: "抵達機場，辦理手續", detail: "", budget: "" },
      { time: "11:40-19:40", type: "✈️ 交通", title: "米蘭 MXP → 阿布扎比 AUH", detail: "EY082，A350", budget: "" },
      { time: "21:20-09:00+1", type: "✈️ 交通", title: "阿布扎比 → 香港 HKG", detail: "EY870，B787-9", budget: "" },
    ]
  },
  {
    day: 16, date: "8/9", weekday: "日", city: "交通",
    title: "回到澳門",
    icon: "🏠",
    events: [
      { time: "09:00", type: "🏠 回家", title: "到香港 → 返回澳門家中", detail: "🏡 旅程結束！", budget: "" },
    ]
  },
];

// Group days by city for filtering
export const cityDays = {};
days.forEach(d => {
  const city = d.city;
  if (!cityDays[city]) cityDays[city] = [];
  cityDays[city].push(d);
});

// City summary stats
export const cityStats = {
  "羅馬": { nights: 5, range: "7/26 - 7/31", hotels: ["拿破崙酒店 (Hotel Napoleon)"] },
  "佛羅倫斯": { nights: 2, range: "7/31 - 8/2", hotels: ["C-安巴夏特利酒店"] },
  "威尼斯": { nights: 2, range: "8/2 - 8/4", hotels: ["威尼斯廣場酒店"] },
  "米蘭": { nights: 4, range: "8/4 - 8/8", hotels: ["米蘭嘉萊士烏納酒店"] },
};

export const hotels = [
  { city: "羅馬", name: "拿破崙酒店 (Hotel Napoleon)", stars: 4, address: "Piazza Vittorio Emanuele II 105, 00185 Rome", tel: "+39 06 4467 264", checkin: "7/26 14:00", checkout: "7/31 11:00" },
  { city: "佛羅倫斯", name: "C-安巴夏特利酒店 (C-Hotels Ambasciatori)", stars: 4, address: "Via Alamanni, 3, Firenze 50123", tel: "+39 05 5287 421", email: "fi.ambasciatori@c-hotels.it", checkin: "7/31 15:00", checkout: "8/2 11:00" },
  { city: "威尼斯", name: "威尼斯廣場酒店 (Hotel Plaza Venice)", stars: 4, address: "Viale Stazione, 36, 30171 Venice Mestre", tel: "+39 04 1929 388", email: "info@hotelplazavenice.com", checkin: "8/2 15:00", checkout: "8/4 12:00", note: "早餐 06:30-10:00" },
  { city: "米蘭", name: "米蘭嘉萊士烏納酒店 (UNA Hotels Galles Milano)", stars: 4, address: "Piazza Lima 20124 - 2", tel: "+39 02 2048 41", email: "hotel.galles@unahotels.it", checkin: "8/4 14:00", checkout: "8/8 12:00", note: "前台支付住宿稅 €280" },
];

export const checklist = [
  { category: "📄 證件", items: ["護照（有效期6個月以上）", "國際學生證（樂用，7/29梵蒂岡博物館用）", "台灣入台證（如有需要）", "護照影本（分開存放）", "簽證（申根區免簽）"] },
  { category: "✈️ 機票/交通", items: ["BR802 澳門→台北", "EY899 台北→阿布扎比（已確認改點19:40）", "EY085 阿布扎比→羅馬", "羅馬→佛羅倫斯高鐵 11:55", "佛羅倫斯→威尼斯高鐵 11:39", "威尼斯→米蘭高鐵 12:00", "EY082 米蘭→阿布扎比", "EY870 阿布扎比→香港", "8/8 包車 酒店→MXP機場 08:00", "Leonardo Express 車票 €14"] },
  { category: "🎫 景點門票", items: ["梵蒂岡博物館 7/29 11:00", "烏菲茲美術館 7/31 16:00 ✅已訂", "學院美術館大衛像 8/1 11:00 ✅已訂", "最後的晚餐 ⚠️確認預訂", "羅馬競技場（建議提前買）", "博爾蓋塞美術館（建議預約）", "聖母百花大教堂登頂聯票", "米蘭大教堂登頂門票"] },
  { category: "🏨 住宿", items: ["拿破崙酒店（羅馬）7/26-7/31 ✅", "C-安巴夏特利酒店（佛羅倫斯）7/31-8/2 ✅", "威尼斯廣場酒店（威尼斯）8/2-8/4 ✅", "米蘭嘉萊士烏納酒店 8/4-8/8 ✅（前台付稅€280）"] },
  { category: "💰 金錢", items: ["歐元現金（建議500-800€）", "信用卡（Visa/Master）", "旅行保險（確認已購買）"] },
  { category: "📱 3C", items: ["歐盟上網卡 / eSIM", "充電器+轉接頭（歐規雙圓腳）", "行動電源", "自拍棒 / 相機"] },
  { category: "🧳 衣物", items: ["舒適步行鞋（最重要！）", "輕薄外套/防曬", "教堂參觀衣物（有袖+過膝）", "泳衣（如有酒店泳池）"] },
  { category: "💊 其他", items: ["常用藥品（腸胃藥、感冒藥、暈車藥）", "防曬乳 + 太陽眼鏡", "保溫水壺", "輕便背包（一日遊用）"] },
];
