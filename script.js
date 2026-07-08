// ==========================================
// 1. CONFIGURATION & OBJECTIFS DE BASE
// ==========================================
const objectifsJournaliers = {
  repas: {
    petitDejeuner: ["feculentFibre", "proteine", "matiereGrasse", "fruit"],
    dejeuner: ["legume", "feculent", "proteine", "matiereGrasse", "produitLaitier", "fruit"],
    diner: ["legume", "feculent", "proteine", "matiereGrasse", "produitLaitier", "fruit"]
  },
  quotidienGlobal: {
    legumes: { cible: 3, actuel: 0 },
    fruits: { cible: 3, actuel: 0 },
    crudites: { cible: 3, actuel: 0 },
    eau: { cible: 8, actuel: 0 }
  }
};

// ==========================================
// 2. LA BOUSSOLE NUTRITIONNELLE (CONSEILS DYNAMIQUES)
// ==========================================
const boussoleNutritionnelle = {
  tresSouvent: [
    "Protéines : Vise 2 portions par jour pour une bonne structure musculaire !",
    "Féculents : À chaque repas ! Alterne entre complets et blancs pour l'énergie.",
    "Végétaux : Vise au moins 5 portions de fruits et légumes par jour pour les vitamines.",
    "Produits laitiers : 1 à 2 portions par jour pour faire le plein de calcium.",
    "Matières grasses : 3 à 4 portions par jour pour le bon fonctionnement de ton corps."
  ],
  souvent: [
    "Légumes secs : Objectif 2 portions par semaine (pois chiches, lentilles...).",
    "Poisson : Objectif 2 portions par semaine (1 blanc + 1 gras comme le saumon sauvage).",
    "Œufs : Jusqu'à 1 œuf par jour si tu aimes ça, c'est une protéine parfaite !",
    "Avocat : 1/4 à 1/2 avocat, 1 à 2 fois par semaine (en remplacement d'un gras).",
    "Fromage : 1 portion de 20-30g par jour à la place d'un laitage.",
    "Sucres simples : 15g max par jour si tu as envie d'une touche sucrée plaisir."
  ]
};

// Fonction pour piocher un conseil au hasard dans la boussole
function getConseil() {
  const toutesLesPhrases = [...boussoleNutritionnelle.tresSouvent, ...boussoleNutritionnelle.souvent];
  return toutesLesPhrases[Math.floor(Math.random() * toutesLesPhrases.length)];
}

// ==========================================
// 3. LA BASE DE DONNÉES ULTRA-COMPLÈTE
// ==========================================
const database = {
  // --- PROTÉINES DU MATIN ---
  proteine_matin: {
    options: [
      "🍳 2 Oeufs entiers",
      "🥛 Skyr nature (100g à 120g)",
      "🥣 Fromage blanc 3% (100g - 1 pot)",
      "🍼 Petits-suisses (2 pièces)",
      "🥓 Jambon blanc ou de volaille (2 tranches)"
    ]
  },
  
  // --- PROTÉINES CLASSIQUES ---
  proteine: {
    options: [
      "🍳 2 Oeufs entiers",
      "🍗 Filet de poulet ou dinde (100g à 120g)",
      "🥩 Steak haché 5% (1 pièce)",
      "🥓 Jambon blanc (2 tranches)",
      "🥩 Viande des grisons (4 tranches)",
      "🥓 Jambon cru (2 à 3 tranches)",
      "🐟 Thon en boîte (1/2 à 1 boîte ~110g)",
      "🐟 Maquereau en boîte (1/2 boîte ~80g)",
      "🐟 Sardines en boîte (1 boîte)",
      "🐟 Saumon (1 filet)",
      "🐟 Saumon fumé (1 à 2 tranches)",
      "🐟 Cabillaud ou Colin (1 filet)",
      "🦀 Crevettes (4 à 5 pièces)",
      "🦀 Chair de moules (150g)",
      "🌱 Tofu nature ou fumé (100g)",
      "🌱 Seitan (100g)",
      "🌱 Steak végétal (1 pièce)",
      "🫘 Lentilles cuites (5 à 6 càs - 120g)",
      "🫘 Haricots rouges/noirs/blancs cuits (5 à 6 càs)",
      "🌾 Quinoa cuit (5 à 6 càs - 120g)"
    ]
  },

  // --- FÉCULENTS DU MATIN ---
  feculent_matin: {
    options: [
      "🥣 Muesli sans sucre ajouté (4 à 5 càs)",
      "🥣 Granola (3 à 4 càs)",
      "🍞 Pain de mie 'La Boulangère' (1 à 2 tranches)",
      "🥯 Muffin anglais (1 pièce - 60g)",
      "🍞 Pain complet (3 à 4 tranches)",
      "🌾 Flocons d'avoine (4 à 5 càs)"
    ]
  },

  // --- FÉCULENTS REPAS PRINCIPAUX ---
  feculent: {
    options: [
      "🍝 Pâtes (4 à 6 càs crues)",
      "🍚 Riz (4 à 6 càs crus)",
      "🌾 Semoule ou Quinoa (4 à 6 càs crus)",
      "🥔 Pommes de terre cuites (200g - 3 à 4 pièces)",
      "🍠 Patate douce (170g - 1/2 ou 1 pièce)",
      "🍞 Pain (3 à 4 tranches - 80g)",
      "🍞 Pain de mie 'La Boulangère' (2 tranches)",
      "🫓 Wrap (1 pièce - 60g)",
      "🫘 Pois chiches ou Lentilles (4 à 6 càs crus)",
      "🌾 Flocons d'avoine (4 à 5 càs)",
      "🥔 Gnocchis (90g crus)",
      "🥧 Pâte à tarte (1/4 de tarte)"
    ]
  },

  // --- MATIÈRES GRASSES ---
  lipide: {
    options: [
      "🫒 Huile d'olive, colza ou lin (1 càs)",
      "🧈 Beurre (1 portion individuelle - 12g)",
      "🥑 Avocat (1/4 de pièce - 70g)",
      "🫒 Olives vertes ou noires (8 pièces)",
      "🥜 Purée d'oléagineux 100% (1 càc)",
      "🌰 Amandes (16 pièces) ou Noisettes (12 pièces)",
      "🌰 Noix du Brésil (4 pièces) ou Noix de cajou (20g)",
      "🥛 Crème fraîche épaisse (1 càs - 10g)",
      "🍫 Chocolat noir 70% (1 carré - 10g)",
      "🥣 Pesto (1 càs)"
    ]
  },

  // --- FRUITS ---
  fruit: {
    options: [
      "🍎 1 Pomme, Poire, Orange ou Pamplemousse",
      "🍌 1 Banane moyenne",
      "🍑 1 Pêche, Brugnon ou Nectarine",
      "🥝 2 Kiwis ou Fruits de la passion",
      "🍊 2 Abricots, Prunes ou Clémentines",
      "🍓 Fruits rouges (1 bol)",
      "🍒 Cerises (16 pièces)",
      "🥭 Mangue (1/2 pièce)",
      "🍉 Pastèque (1 tranche)",
      "🍍 Ananas (1 tranche ou 2 rondelles)",
      "🏺 Compote sans sucre ajouté (100g)"
    ]
  },

  // --- LÉGUMES & CRUDITÉS ---
  legume: {
    options: [
      "🥦 Brocolis, Courgettes, Haricots verts",
      "🍅 Tomates, Concombres, Salade verte",
      "🥕 Carottes, Poivrons, Champignons",
      "🥣 Soupe de légumes maison"
    ]
  },

  // --- PRODUITS LAITIERS ---
  laitier: {
    options: [
      "🧀 Comté, Emmental, Parmesan (20g)",
      "🧀 Camembert (1/8 de pièce ~30g)",
      "🧀 Mozzarella (1 grosse tranche - 30g)",
      "🧀 Feta (1 ligne - 25g)",
      "🧀 Fromage à tartiner (1 à 2 portions)",
      "🥛 Skyr nature (100g à 120g)",
      "🥣 Fromage blanc 3% (100g)",
      "🥛 Yaourt nature ou végétal (soja, avoine)",
      "🥛 Verre de lait ou lait végétal (150ml à 250ml)"
    ]
  },

  // --- PRODUITS SUCRÉS ---
  sucre: {
    options: [
      "🍯 1 càc de Miel ou Sirop d'érable",
      "🍓 1 càc de Confiture (15g)",
      "🥜 1 càc de Pâte à tartiner (SANS huile de palme)",
      "🍫 1 Carré de chocolat noir 70%",
      "🥛 2 Carrés de chocolat Milka",
      "🌴 3 à 4 Dattes ou 2 à 3 abricots secs",
      "🍇 Raisins secs ou Cranberries (1 càs)"
    ]
  }
};

// ==========================================
// 4. GESTION DES DATES & DU STOCKAGE (LOCALSTORAGE)
// ==========================================

// On initialise la date sur "Aujourd'hui"
let dateAffichee = new Date();

// Structure pour stocker l'état des boutons cochés
// Format : { "2026-07-08": ["breakfast-proteine_matin", "lunch-feculent"] }
let historiqueJournalier = JSON.parse(localStorage.getItem('dopamine_diary_history')) || {};

// Fonction pour formater la date proprement (AAAA-MM-JJ) pour servir de clé de stockage
function obtenirCleDate(date) {
  return date.toISOString().split('T')[0];
}

// Fonction pour afficher la date de manière mignonne à l'écran
function rafraichirAffichageDate() {
  const aujourdhui = obtenirCleDate(new Date());
  const cleSelectionnee = obtenirCleDate(dateAffichee);
  
  const options = { weekday: 'long', day: 'numeric', month: 'short' };
  let texteDate = dateAffichee.toLocaleDateString('fr-FR', options);
  
  // On met une majuscule au jour
  texteDate = texteDate.charAt(0).toUpperCase() + texteDate.slice(1);

  if (cleSelectionnee === aujourdhui) {
    document.getElementById('current-date-display').textContent = `Aujourd'hui ✨`;
  } else {
    document.getElementById('current-date-display').textContent = texteDate;
  }
}

// Sauvegarder l'état actuel de la journée dans la mémoire du téléphone/navigateur
function sauvegarderEtatDuJour() {
  const cleDate = obtenirCleDate(dateAffichee);
  const boutonsValides = [];
  
  document.querySelectorAll('.cat-btn.validated').forEach(btn => {
    // On enregistre l'id du repas + la catégorie du bouton
    const idRepas = btn.closest('.meal-card').id;
    const categorie = btn.getAttribute('data-cat');
    boutonsValides.push(`${idRepas}-${categorie}`);
  });
  
  historiqueJournalier[cleDate] = boutonsValides;
  localStorage.setItem('dopamine_diary_history', JSON.stringify(historiqueJournalier));
  
  calculerScoreDopamine();
}

// Charger les données d'une date spécifique depuis la mémoire
function chargerEtatDuJour() {
  const cleDate = obtenirCleDate(dateAffichee);
  const boutonsAValider = historiqueJournalier[cleDate] || [];
  
  // On remet d'abord tous les boutons à zéro
  document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('validated'));
  
  // On recoche ceux qui étaient sauvegardés
  boutonsAValider.forEach(cleBouton => {
    const [idRepas, categorie] = cleBouton.split('-');
    const repasCard = document.getElementById(idRepas);
    if (repasCard) {
      const btn = repasCard.querySelector(`[data-cat="${categorie}"]`);
      if (btn) btn.classList.add('validated');
    }
  });
  
  // On remet à jour les badges de chaque repas (Complet / Incomplet)
  document.querySelectorAll('.meal-card').forEach(card => checkMealStatus(card));
  calculerScoreDopamine();
}

// ==========================================
// 5. LE DOPAMINE-MÈTRE (AVANCEMENT EN DIRECT)
// ==========================================
function calculerScoreDopamine() {
  // On compte TOUS les boutons de catégories de l'appli
  const totalBoutons = document.querySelectorAll('.cat-btn').length;
  // On compte combien sont au vert (validés)
  const totalValides = document.querySelectorAll('.cat-btn.validated').length;
  
  // Calcul du pourcentage réel
  const pourcentage = totalBoutons > 0 ? Math.round((totalValides / totalBoutons) * 100) : 0;
  
  const barreProgression = document.getElementById('global-progress-bar');
  const texteStatut = document.getElementById('progress-status-text');
  
  // On met à jour la largeur de la barre en direct
  barreProgression.style.width = `${pourcentage}%`;
  
  // Évolution des messages ultra-bienveillants
  if (pourcentage === 0) {
    texteStatut.textContent = "C'est le début d'une belle journée ! 🌟";
    barreProgression.style.background = "linear-gradient(90deg, #f4acb7, #ffb5a7)"; // Rose doudou
  } else if (pourcentage < 30) {
    texteStatut.textContent = `Chaque pas compte ! Tu es à ${pourcentage}% 🌸`;
    barreProgression.style.background = "linear-gradient(90deg, #f4acb7, #ffb5a7)";
  } else if (pourcentage < 60) {
    texteStatut.textContent = `Regarde ça avance ! ${pourcentage}% d'énergie 🚀`;
    barreProgression.style.background = "linear-gradient(90deg, #bde0fe, #a2d2ff)"; // Bleu focus pastel
  } else if (pourcentage < 100) {
    texteStatut.textContent = `Tu gères de fou ! ${pourcentage}% complétés 🥰`;
    barreProgression.style.background = "linear-gradient(90deg, #bde0fe, #cdb4db)"; // Violet dopamine
  } else {
    texteStatut.textContent = "✨ JOURNÉE PARFAITE ! Tu as nourri ton corps avec amour ! 🎉💃";
    barreProgression.style.background = "linear-gradient(90deg, #4ade80, #2bc48a)"; // Vert victoire !
  }
}

// ==========================================
// 6. LOGIQUE INTERACTIVE ET POP-UP (MISE À JOUR)
// ==========================================
let currentActiveButton = null;

const modal = document.getElementById('food-modal');
const modalTitle = document.getElementById('modal-title');
const modalTip = document.getElementById('modal-tip');
const foodOptionsContainer = document.getElementById('food-options');
const closeBtn = document.querySelector('.close-modal-btn');

document.querySelectorAll('.cat-btn').forEach(button => {
  button.addEventListener('click', () => {
    // ↩️ DECOCHAGE : Si déjà validé, on enlève la coche verte
    if (button.classList.contains('validated')) {
      button.classList.remove('validated');
      checkMealStatus(button.closest('.meal-card'));
      sauvegarderEtatDuJour(); // 🔄 Sauvegarde + Recalcule la jauge globale immédiatement !
      return;
    }

    currentActiveButton = button;
    const category = button.getAttribute('data-cat');
    
    if (!database[category]) {
      modalTitle.textContent = "Choisir ton option :";
      modalTip.textContent = "💡 Choisis une option dans ton catalogue d'équivalences.";
      foodOptionsContainer.innerHTML = '<p style="color: gray; font-style: italic; padding: 10px;">Aucune option enregistrée.</p>';
      modal.classList.add('open');
      return;
    }
    
    modalTitle.textContent = "Choisir ton option :";
    modalTip.textContent = getConseil();
    
    foodOptionsContainer.innerHTML = '';
    database[category].options.forEach(item => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = item;
      
      btn.addEventListener('click', () => {
        currentActiveButton.classList.add('validated');
        modal.classList.remove('open');
        checkMealStatus(currentActiveButton.closest('.meal-card'));
        sauvegarderEtatDuJour(); // 🔄 Sauvegarde + Recalcule la jauge globale immédiatement !
      });
      
      foodOptionsContainer.appendChild(btn);
    });
    
    modal.classList.add('open');
  });
});

closeBtn.addEventListener('click', () => modal.classList.remove('open'));

function checkMealStatus(card) {
  const allButtons = card.querySelectorAll('.cat-btn');
  const validatedButtons = card.querySelectorAll('.cat-btn.validated');
  const badge = card.querySelector('.status-badge');
  
  if (allButtons.length === validatedButtons.length) {
    badge.textContent = "Repas Complet ! 🎉";
    badge.style.background = "#dcfce7";
    badge.style.color = "#15803d";
  } else {
    badge.textContent = "Incomplet 📝";
    badge.style.background = "#fee2e2";
    badge.style.color = "#ef4444";
  }
}

// ==========================================
// 7. ÉCOUTEURS DES BOUTONS DE DATE
// ==========================================
document.getElementById('prev-day-btn').addEventListener('click', () => {
  dateAffichee.setDate(dateAffichee.getDate() - 1);
  rafraichirAffichageDate();
  chargerEtatDuJour();
});

document.getElementById('next-day-btn').addEventListener('click', () => {
  dateAffichee.setDate(dateAffichee.getDate() + 1);
  rafraichirAffichageDate();
  chargerEtatDuJour();
});

// Lancement automatique au chargement de la page
rafraichirAffichageDate();
chargerEtatDuJour();