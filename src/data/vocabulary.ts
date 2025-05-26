import { Vocabulary, Category } from '../types';
import { BookOpenText, Utensils, Plane, Briefcase, Home, Shirt, MegaphoneIcon, HeartPulse } from 'lucide-react';

export const categories: Category[] = [
  { id: 'basics', name: 'Temel', icon: 'BookOpenText', color: '#3B82F6' },
  { id: 'food', name: 'Yiyecek', icon: 'Utensils', color: '#EF4444' },
  { id: 'travel', name: 'Seyahat', icon: 'Plane', color: '#10B981' },
  { id: 'business', name: 'İş', icon: 'Briefcase', color: '#F59E0B' },
  { id: 'home', name: 'Ev', icon: 'Home', color: '#8B5CF6' },
  { id: 'clothing', name: 'Giyim', icon: 'Shirt', color: '#EC4899' },
  { id: 'phrases', name: 'Deyimler', icon: 'MegaphoneIcon', color: '#6366F1' },
  { id: 'health', name: 'Sağlık', icon: 'HeartPulse', color: '#14B8A6' },
];

export const vocabularyData: Vocabulary[] = [
    // Basics
    { id: '1', german: 'Hallo', turkish: 'Merhaba', category: 'basics', difficulty: 'easy' },
    { id: '2', german: 'Auf Wiedersehen', turkish: 'Hoşça kal', category: 'basics', difficulty: 'easy' },
    { id: '3', german: 'Bitte', turkish: 'Lütfen', category: 'basics', difficulty: 'easy' },
    { id: '4', german: 'Danke', turkish: 'Teşekkür ederim', category: 'basics', difficulty: 'easy' },
    { id: '5', german: 'Ja', turkish: 'Evet', category: 'basics', difficulty: 'easy' },
    { id: '6', german: 'Nein', turkish: 'Hayır', category: 'basics', difficulty: 'easy' },
    { id: '7', german: 'Wie geht es dir?', turkish: 'Nasılsın?', category: 'basics', difficulty: 'medium' },
    { id: '8', german: 'Ich verstehe nicht', turkish: 'Anlamıyorum', category: 'basics', difficulty: 'medium' },
    { id: '9', german: 'Ich heiße...', turkish: 'Adım...', category: 'basics', difficulty: 'medium' },
    { id: '10', german: 'Ich komme aus...', turkish: '...den geliyorum', category: 'basics', difficulty: 'medium' },
    { id: '11', german: 'Sprechen Sie Englisch?', turkish: 'İngilizce konuşuyor musunuz?', category: 'basics', difficulty: 'hard' },
    { id: '12', german: 'Können Sie das wiederholen?', turkish: 'Bunu tekrar eder misiniz?', category: 'basics', difficulty: 'hard' },
    { id: '13', german: 'Was bedeutet das?', turkish: 'Bu ne anlama geliyor?', category: 'basics', difficulty: 'medium' },
    { id: '14', german: 'Entschuldigung', turkish: 'Affedersiniz', category: 'basics', difficulty: 'easy' },
    { id: '15', german: 'Ich weiß nicht', turkish: 'Bilmiyorum', category: 'basics', difficulty: 'medium' },
    { id: '16', german: 'Natürlich', turkish: 'Tabii ki', category: 'basics', difficulty: 'easy' },
    { id: '17', german: 'Vielleicht', turkish: 'Belki', category: 'basics', difficulty: 'easy' },
    { id: '18', german: 'Ich bin müde', turkish: 'Yorgunum', category: 'basics', difficulty: 'medium' },
    { id: '19', german: 'Was machst du?', turkish: 'Ne yapıyorsun?', category: 'basics', difficulty: 'medium' },
    { id: '20', german: 'Viel Glück!', turkish: 'Bol şans!', category: 'basics', difficulty: 'easy' },
  
    // Food
    { id: '21', german: 'Wasser', turkish: 'Su', category: 'food', difficulty: 'easy' },
    { id: '22', german: 'Brot', turkish: 'Ekmek', category: 'food', difficulty: 'easy' },
    { id: '23', german: 'Käse', turkish: 'Peynir', category: 'food', difficulty: 'easy' },
    { id: '24', german: 'Apfel', turkish: 'Elma', category: 'food', difficulty: 'easy' },
    { id: '25', german: 'Kaffee', turkish: 'Kahve', category: 'food', difficulty: 'easy' },
    { id: '26', german: 'Frühstück', turkish: 'Kahvaltı', category: 'food', difficulty: 'medium' },
    { id: '27', german: 'Mittagessen', turkish: 'Öğle yemeği', category: 'food', difficulty: 'medium' },
    { id: '28', german: 'Abendessen', turkish: 'Akşam yemeği', category: 'food', difficulty: 'medium' },
    { id: '29', german: 'Fisch', turkish: 'Balık', category: 'food', difficulty: 'easy' },
    { id: '30', german: 'Fleisch', turkish: 'Et', category: 'food', difficulty: 'easy' },
    { id: '31', german: 'Gemüse', turkish: 'Sebze', category: 'food', difficulty: 'easy' },
    { id: '32', german: 'Obst', turkish: 'Meyve', category: 'food', difficulty: 'easy' },
    { id: '33', german: 'Salz', turkish: 'Tuz', category: 'food', difficulty: 'easy' },
    { id: '34', german: 'Pfeffer', turkish: 'Karabiber', category: 'food', difficulty: 'easy' },
    { id: '35', german: 'Zucker', turkish: 'Şeker', category: 'food', difficulty: 'easy' },
    { id: '36', german: 'Milch', turkish: 'Süt', category: 'food', difficulty: 'easy' },
    { id: '37', german: 'Tee', turkish: 'Çay', category: 'food', difficulty: 'easy' },
    { id: '38', german: 'Essen', turkish: 'Yemek', category: 'food', difficulty: 'easy' },
    { id: '39', german: 'Trinken', turkish: 'İçmek', category: 'food', difficulty: 'easy' },
    { id: '40', german: 'Rezept', turkish: 'Tarif', category: 'food', difficulty: 'medium' },
  
    // Travel
    { id: '41', german: 'Flughafen', turkish: 'Havalimanı', category: 'travel', difficulty: 'medium' },
    { id: '42', german: 'Bahnhof', turkish: 'Tren istasyonu', category: 'travel', difficulty: 'medium' },
    { id: '43', german: 'Hotel', turkish: 'Otel', category: 'travel', difficulty: 'easy' },
    { id: '44', german: 'Reisepass', turkish: 'Pasaport', category: 'travel', difficulty: 'medium' },
    { id: '45', german: 'Ticket', turkish: 'Bilet', category: 'travel', difficulty: 'easy' },
    { id: '46', german: 'Straße', turkish: 'Cadde', category: 'travel', difficulty: 'easy' },
    { id: '47', german: 'Stadtplan', turkish: 'Şehir haritası', category: 'travel', difficulty: 'medium' },
    { id: '48', german: 'links', turkish: 'sol', category: 'travel', difficulty: 'easy' },
    { id: '49', german: 'rechts', turkish: 'sağ', category: 'travel', difficulty: 'easy' },
    { id: '50', german: 'Abfahrt', turkish: 'Kalkış', category: 'travel', difficulty: 'medium' },
    { id: '51', german: 'Ankunft', turkish: 'Varış', category: 'travel', difficulty: 'medium' },
    { id: '52', german: 'Fahrkarte', turkish: 'Yolculuk bileti', category: 'travel', difficulty: 'medium' },
    { id: '53', german: 'Zug', turkish: 'Tren', category: 'travel', difficulty: 'easy' },
    { id: '54', german: 'Bus', turkish: 'Otobüs', category: 'travel', difficulty: 'easy' },
    { id: '55', german: 'U-Bahn', turkish: 'Metro', category: 'travel', difficulty: 'easy' },
    { id: '56', german: 'Flugzeug', turkish: 'Uçak', category: 'travel', difficulty: 'easy' },
    { id: '57', german: 'Grenze', turkish: 'Sınır', category: 'travel', difficulty: 'medium' },
    { id: '58', german: 'Visum', turkish: 'Vize', category: 'travel', difficulty: 'medium' },
    { id: '59', german: 'Koffer', turkish: 'Bavul', category: 'travel', difficulty: 'easy' },
    { id: '60', german: 'Führerschein', turkish: 'Sürücü belgesi', category: 'travel', difficulty: 'medium' },
  
    // Business
    { id: '61', german: 'Büro', turkish: 'Ofis', category: 'business', difficulty: 'easy' },
    { id: '62', german: 'Termin', turkish: 'Randevu', category: 'business', difficulty: 'medium' },
    { id: '63', german: 'Besprechung', turkish: 'Toplantı', category: 'business', difficulty: 'medium' },
    { id: '64', german: 'Arbeit', turkish: 'İş', category: 'business', difficulty: 'easy' },
    { id: '65', german: 'Kollege', turkish: 'Meslektaş', category: 'business', difficulty: 'medium' },
    { id: '66', german: 'Gehalt', turkish: 'Maaş', category: 'business', difficulty: 'medium' },
    { id: '67', german: 'Vertrag', turkish: 'Sözleşme', category: 'business', difficulty: 'hard' },
    { id: '68', german: 'Bewerbung', turkish: 'Başvuru', category: 'business', difficulty: 'hard' },
    { id: '69', german: 'Chef', turkish: 'Patron', category: 'business', difficulty: 'easy' },
    { id: '70', german: 'Mitarbeiter', turkish: 'Çalışan', category: 'business', difficulty: 'medium' },
    { id: '71', german: 'Firma', turkish: 'Şirket', category: 'business', difficulty: 'easy' },
    { id: '72', german: 'Kunde', turkish: 'Müşteri', category: 'business', difficulty: 'medium' },
    { id: '73', german: 'Rechnung', turkish: 'Fatura', category: 'business', difficulty: 'medium' },
    { id: '74', german: 'Steuer', turkish: 'Vergi', category: 'business', difficulty: 'hard' },
    { id: '75', german: 'Verkauf', turkish: 'Satış', category: 'business', difficulty: 'medium' },
    { id: '76', german: 'Marketing', turkish: 'Pazarlama', category: 'business', difficulty: 'medium' },
    { id: '77', german: 'Projekt', turkish: 'Proje', category: 'business', difficulty: 'easy' },
    { id: '78', german: 'Ziel', turkish: 'Hedef', category: 'business', difficulty: 'medium' },
    { id: '79', german: 'Team', turkish: 'Takım', category: 'business', difficulty: 'easy' },
    { id: '80', german: 'Abteilung', turkish: 'Departman', category: 'business', difficulty: 'medium' },
  
    // Home
    { id: '81', german: 'Haus', turkish: 'Ev', category: 'home', difficulty: 'easy' },
    { id: '82', german: 'Wohnung', turkish: 'Daire', category: 'home', difficulty: 'easy' },
    { id: '83', german: 'Zimmer', turkish: 'Oda', category: 'home', difficulty: 'easy' },
    { id: '84', german: 'Küche', turkish: 'Mutfak', category: 'home', difficulty: 'easy' },
    { id: '85', german: 'Badezimmer', turkish: 'Banyo', category: 'home', difficulty: 'easy' },
    { id: '86', german: 'Schlafzimmer', turkish: 'Yatak odası', category: 'home', difficulty: 'medium' },
    { id: '87', german: 'Wohnzimmer', turkish: 'Oturma odası', category: 'home', difficulty: 'medium' },
    { id: '88', german: 'Flur', turkish: 'Koridor', category: 'home', difficulty: 'medium' },
    { id: '89', german: 'Fenster', turkish: 'Pencere', category: 'home', difficulty: 'easy' },
    { id: '90', german: 'Tür', turkish: 'Kapı', category: 'home', difficulty: 'easy' },
    { id: '91', german: 'Tisch', turkish: 'Masa', category: 'home', difficulty: 'easy' },
    { id: '92', german: 'Stuhl', turkish: 'Sandalye', category: 'home', difficulty: 'easy' },
    { id: '93', german: 'Lampe', turkish: 'Lamba', category: 'home', difficulty: 'easy' },
    { id: '94', german: 'Bett', turkish: 'Yatak', category: 'home', difficulty: 'easy' },
    { id: '95', german: 'Schrank', turkish: 'Dolap', category: 'home', difficulty: 'medium' },
    { id: '96', german: 'Spiegel', turkish: 'Ayna', category: 'home', difficulty: 'medium' },
    { id: '97', german: 'Teppich', turkish: 'Halı', category: 'home', difficulty: 'medium' },
    { id: '98', german: 'Vorhang', turkish: 'Perde', category: 'home', difficulty: 'medium' },
    { id: '99', german: 'Waschmaschine', turkish: 'Çamaşır makinesi', category: 'home', difficulty: 'hard' },
    { id: '100', german: 'Balkon', turkish: 'Balkon', category: 'home', difficulty: 'medium' },
  
    // Clothing  
    { id: '101', german: 'Hemd', turkish: 'Gömlek', category: 'clothing', difficulty: 'easy' },
    { id: '102', german: 'Hose', turkish: 'Pantolon', category: 'clothing', difficulty: 'easy' },
    { id: '103', german: 'Jacke', turkish: 'Ceket', category: 'clothing', difficulty: 'easy' },
    { id: '104', german: 'Mantel', turkish: 'Kaban', category: 'clothing', difficulty: 'easy' },
    { id: '105', german: 'Kleid', turkish: 'Elbise', category: 'clothing', difficulty: 'easy' },
    { id: '106', german: 'Rock', turkish: 'Etek', category: 'clothing', difficulty: 'easy' },
    { id: '107', german: 'Anzug', turkish: 'Takım elbise', category: 'clothing', difficulty: 'medium' },
    { id: '108', german: 'Pullover', turkish: 'Kazak', category: 'clothing', difficulty: 'easy' },
    { id: '109', german: 'T-Shirt', turkish: 'Tişört', category: 'clothing', difficulty: 'easy' },
    { id: '110', german: 'Bluse', turkish: 'Bluz', category: 'clothing', difficulty: 'easy' },
    { id: '111', german: 'Schuhe', turkish: 'Ayakkabılar', category: 'clothing', difficulty: 'easy' },
    { id: '112', german: 'Stiefel', turkish: 'Botlar', category: 'clothing', difficulty: 'easy' },
    { id: '113', german: 'Sandalen', turkish: 'Sandaletler', category: 'clothing', difficulty: 'easy' },
    { id: '114', german: 'Socken', turkish: 'Çoraplar', category: 'clothing', difficulty: 'easy' },
    { id: '115', german: 'Handschuhe', turkish: 'Eldivenler', category: 'clothing', difficulty: 'medium' },
    { id: '116', german: 'Mütze', turkish: 'Bere', category: 'clothing', difficulty: 'easy' },
    { id: '117', german: 'Hut', turkish: 'Şapka', category: 'clothing', difficulty: 'easy' },
    { id: '118', german: 'Schal', turkish: 'Atkı', category: 'clothing', difficulty: 'easy' },
    { id: '119', german: 'Unterwäsche', turkish: 'İç çamaşırı', category: 'clothing', difficulty: 'medium' },
    { id: '120', german: 'Reißverschluss', turkish: 'Fermuar', category: 'clothing', difficulty: 'hard' },
  
    // Phrases
  
    { id: '121', german: 'Hallo', turkish: 'Merhaba', category: 'phrases', difficulty: 'easy' },
    { id: '122', german: 'Auf Wiedersehen', turkish: 'Hoşça kal', category: 'phrases', difficulty: 'easy' },
    { id: '123', german: 'Bitte', turkish: 'Lütfen', category: 'phrases', difficulty: 'easy' },
    { id: '124', german: 'Danke', turkish: 'Teşekkür ederim', category: 'phrases', difficulty: 'easy' },
    { id: '125', german: 'Ja', turkish: 'Evet', category: 'phrases', difficulty: 'easy' },
    { id: '126', german: 'Nein', turkish: 'Hayır', category: 'phrases', difficulty: 'easy' },
    { id: '127', german: 'Wie geht es dir?', turkish: 'Nasılsın?', category: 'phrases', difficulty: 'medium' },
    { id: '128', german: 'Ich verstehe nicht', turkish: 'Anlamıyorum', category: 'phrases', difficulty: 'medium' },
    { id: '129', german: 'Ich heiße...', turkish: 'Adım...', category: 'phrases', difficulty: 'medium' },
    { id: '130', german: 'Ich komme aus...', turkish: '...den geliyorum', category: 'phrases', difficulty: 'medium' },
    { id: '131', german: 'Sprechen Sie Englisch?', turkish: 'İngilizce konuşuyor musunuz?', category: 'phrases', difficulty: 'hard' },
    { id: '132', german: 'Können Sie das wiederholen?', turkish: 'Bunu tekrar eder misiniz?', category: 'phrases', difficulty: 'hard' },
    { id: '133', german: 'Was bedeutet das?', turkish: 'Bu ne anlama geliyor?', category: 'phrases', difficulty: 'medium' },
    { id: '134', german: 'Entschuldigung', turkish: 'Affedersiniz', category: 'phrases', difficulty: 'easy' },
    { id: '135', german: 'Ich weiß nicht', turkish: 'Bilmiyorum', category: 'phrases', difficulty: 'medium' },
    { id: '136', german: 'Natürlich', turkish: 'Tabii ki', category: 'phrases', difficulty: 'easy' },
    { id: '137', german: 'Vielleicht', turkish: 'Belki', category: 'phrases', difficulty: 'easy' },
    { id: '138', german: 'Ich bin müde', turkish: 'Yorgunum', category: 'phrases', difficulty: 'medium' },
    { id: '139', german: 'Was machst du?', turkish: 'Ne yapıyorsun?', category: 'phrases', difficulty: 'medium' },
    { id: '140', german: 'Viel Glück!', turkish: 'Bol şans!', category: 'phrases', difficulty: 'easy' },
  
    // Health
  
    { id: '141', german: 'Krank', turkish: 'Hasta', category: 'health', difficulty: 'medium' },
    { id: '142', german: 'Krankheit', turkish: 'Hastalık', category: 'health', difficulty: 'medium' },
    { id: '143', german: 'Krankenhaus', turkish: 'Hastane', category: 'health', difficulty: 'hard' },
    { id: '144', german: 'Arzt', turkish: 'Doktor', category: 'health', difficulty: 'easy' },
    { id: '145', german: 'Krankenkasse', turkish: 'Sigorta', category: 'health', difficulty: 'medium' },
    { id: '146', german: 'Rezept', turkish: 'Reçete', category: 'health', difficulty: 'medium' },
    { id: '147', german: 'Medizin', turkish: 'Tıbbi', category: 'health', difficulty: 'medium' },
    { id: '148', german: 'Operation', turkish: 'Ameliyat', category: 'health', difficulty: 'hard' },
    { id: '149', german: 'Krankenpfleger', turkish: 'Hemşire', category: 'health', difficulty: 'medium' },
    { id: '150', german: 'Krankenhaus', turkish: 'Hastane', category: 'health', difficulty: 'hard' },
    { id: '151', german: 'Krankenhaus', turkish: 'Hastane', category: 'health', difficulty: 'hard' },
    { id: '152', german: 'Krankenhaus', turkish: 'Hastane', category: 'health', difficulty: 'hard' },
    { id: '153', german: 'Krankenhaus', turkish: 'Hastane', category: 'health', difficulty: 'hard' },
    { id: '154', german: 'Krankenhaus', turkish: 'Hastane', category: 'health', difficulty: 'hard' },
    { id: '155', german: 'Krankenhaus', turkish: 'Hastane', category: 'health', difficulty: 'hard' },
    { id: '156', german: 'Krankenhaus', turkish: 'Hastane', category: 'health', difficulty: 'hard' },
    { id: '157', german: 'Krankenhaus', turkish: 'Hastane', category: 'health', difficulty: 'hard' },
    { id: '158', german: 'Krankenhaus', turkish: 'Hastane', category: 'health', difficulty: 'hard' },
    { id: '159', german: 'Krankenhaus', turkish: 'Hastane', category: 'health', difficulty: 'hard' },
    { id: '160', german: 'Krankenhaus', turkish: 'Hastane', category: 'health', difficulty: 'hard' },
  
];

export const getVocabularyByCategory = (categoryId: string): Vocabulary[] => {
  return vocabularyData.filter(item => item.category === categoryId);
};

export const getRandomVocabulary = (count: number, categories: string[] = []): Vocabulary[] => {
  let filteredVocabulary = vocabularyData;
  
  if (categories.length > 0) {
    filteredVocabulary = vocabularyData.filter(item => categories.includes(item.category));
  }
  
  // Shuffle array and get the first 'count' items
  return [...filteredVocabulary]
    .sort(() => 0.5 - Math.random())
    .slice(0, Math.min(count, filteredVocabulary.length));
};

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};

export const getCategoryIcon = (categoryId: string) => {
  const category = getCategoryById(categoryId);
  switch (category?.icon) {
    case 'BookOpenText': return BookOpenText;
    case 'Utensils': return Utensils;
    case 'Plane': return Plane;
    case 'Briefcase': return Briefcase;
    case 'Home': return Home;
    case 'Shirt': return Shirt;
    case 'MegaphoneIcon': return MegaphoneIcon;
    case 'HeartPulse': return HeartPulse;
    default: return BookOpenText;
  }
};