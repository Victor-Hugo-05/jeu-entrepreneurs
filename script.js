const entrepreneurs = [
  {
    id: "musk",
    name: "Elon Musk",
    company: "Tesla",
    role: "",
    portrait:
      "https://cdn8.futura-sciences.com/s480/Elon%20Musk1.jpg",
    logo:
      "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png&w=180&h=180&fit=contain&we",
    description:
      "Elon Musk est un entrepreneur visionnaire qui aime résoudre de grands problèmes. Il est connu pour prendre des risques importants et investir dans des projets ambitieux liés à la technologie, à l'énergie et à l'espace. Son style de leadership est exigeant et orienté vers l'innovation. Il cherche souvent à transformer des industries entières grâce à de nouvelles idées et à des avancées technologiques.",
  },
  {
    id: "jobs",
    name: "Steve Jobs",
    company: "Apple",
    role: "",
    portrait:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhkr1C2ZtxFbC7PJRx407iGZ_RnU0Q-mTk5Q&s",
    logo:
      "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg&w=180&h=180&fit=contain&we",
    description:
      "Steve Jobs était un entrepreneur créatif et perfectionniste. Il accordait une grande importance au design, à l'expérience utilisateur et à la simplicité des produits. Son style de leadership reposait sur une vision claire et une forte exigence envers ses équipes. Il est surtout connu pour avoir créé des produits innovants qui ont changé la manière dont les gens utilisent la technologie au quotidien.",
  },
  {
    id: "bezos",
    name: "Jeff Bezos",
    company: "Amazon",
    role: "",
    portrait:
      "https://imageio.forbes.com/specials-images/imageserve/67531eb2b5f7c9e191f632d7/0x0.jpg?format=jpg&crop=711,713,x316,y125,safe&height=416&width=416&fit=bounds",
    logo:
      "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg&w=220&h=160&fit=contain&we",
    description:
      "Jeff Bezos est un entrepreneur analytique et très orienté client. Il construit ses projets avec une vision de long terme, en acceptant d'investir pendant des années avant de rechercher des résultats immédiats. Son style repose sur les données, l'efficacité opérationnelle et l'amélioration continue. Il a transformé le commerce en ligne en mettant la rapidité, le choix et la simplicité au centre de l'expérience client.",
  },
  {
    id: "zuckerberg",
    name: "Mark Zuckerberg",
    company: "Meta",
    role: "",
    portrait:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
    logo:
      "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png&w=220&h=160&fit=contain&we",
    description:
      "Mark Zuckerberg est un entrepreneur produit, rapide et centré sur les réseaux. Il cherche à connecter les personnes à grande échelle et à faire évoluer ses plateformes en fonction des usages. Son style entrepreneurial est marqué par l'expérimentation, la croissance rapide et la capacité à adapter sa stratégie quand le marché change. Il aime construire des outils utilisés quotidiennement par des milliards de personnes.",
  },
  {
    id: "winfrey",
    name: "Oprah Winfrey",
    company: "OWN",
    role: "",
    portrait:
      "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/b/bf/Oprah_in_2014.jpg&w=180&h=180&fit=cover",
    logo:
      "https://static.oprah.com/2022/05/OWN_Meta_Logo.png",
    description:
      "Oprah Winfrey est une entrepreneure relationnelle, inspirante et très attentive à la confiance de son public. Elle a construit une marque personnelle forte autour de l'écoute, de l'authenticité et de l'impact culturel. Son style de leadership valorise l'émotion, la narration et la capacité à donner de la visibilité à d'autres voix. Elle montre qu'une entreprise peut aussi se développer grâce à une communauté fidèle.",
  },
  {
    id: "branson",
    name: "Richard Branson",
    company: "Virgin",
    role: "",
    portrait:
      "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1052306510.jpg?crop=1xw:1.0xh;center,top&resize=640:*",
    logo:
      "https://upload.wikimedia.org/wikipedia/fr/5/5b/Virgin_group_logo.svg",
    description:
      "Richard Branson est un entrepreneur audacieux, communicant et très attaché à l'image de marque. Il aime entrer dans des secteurs variés avec une approche plus simple, plus humaine ou plus amusante que les acteurs traditionnels. Son style repose sur la prise de risque, la délégation et la capacité à raconter une aventure entrepreneuriale. Il incarne l'idée qu'une marque peut devenir un univers.",
  },
  {
    id: "whitney",
    name: "Whitney Wolfe Herd",
    company: "Bumble",
    role: "",
    portrait:
      "https://mastersofscale.com/wp-content/uploads/2022/09/MoS_WhitneyWolfeHerd_colorcutout-800x627.webp",
    logo:
      "https://cdn.worldvectorlogo.com/logos/bumble-1-1.svg",
    description:
      "Whitney Wolfe Herd est une entrepreneure moderne, orientée communauté et attentive aux usages sociaux. Elle a construit Bumble autour d'une idée claire : donner plus de contrôle et de sécurité aux utilisatrices. Son style entrepreneurial combine positionnement de marque, sens du produit et volonté de changer des comportements existants. Elle montre comment une mission sociale peut devenir un avantage compétitif.",
  },
  {
    id: "kutaragi",
    name: "Ken Kutaragi",
    company: "PlayStation",
    companyMeta: "Console de jeux",
    role: "",
    portrait: "",
    logo: "",
    description:
      "Ken Kutaragi est surtout connu comme le créateur de la PlayStation. Son style d'innovation repose sur une forte intuition technologique et sur la volonté de transformer le jeu vidéo en une expérience plus puissante, plus immersive et plus accessible au grand public. Il a su défendre une idée ambitieuse à l'intérieur d'une grande entreprise et faire d'une console un produit culturel mondial.",
  },
  {
    id: "buchheit",
    name: "Paul Buchheit",
    company: "Gmail",
    companyMeta: "Messagerie électronique",
    role: "",
    portrait: "",
    logo: "",
    description:
      "Paul Buchheit est l'inventeur de Gmail, un service qui a changé les habitudes de messagerie grâce à un grand espace de stockage, une recherche rapide et une interface simple. Son style d'innovation est très orienté produit : il cherche à résoudre un problème quotidien avec une solution claire, utile et scalable. Il montre qu'une bonne idée peut transformer un outil banal en service essentiel.",
  },
  {
    id: "kwolek",
    name: "Stephanie Kwolek",
    company: "Kevlar",
    companyMeta: "Fibre résistante",
    role: "",
    portrait: "",
    logo: "",
    description:
      "Stephanie Kwolek est la chimiste qui a inventé le Kevlar, une fibre très résistante utilisée notamment dans les gilets pare-balles, les équipements de protection et certains matériaux industriels. Son style d'invention repose sur la rigueur scientifique, la curiosité et la capacité à reconnaître le potentiel d'un résultat inattendu. Elle illustre l'importance de la recherche patiente et de l'expérimentation.",
  },
  {
    id: "johnson",
    name: "Kelly Johnson",
    company: "SR-71 Blackbird",
    companyMeta: "Avion de reconnaissance",
    role: "",
    portrait: "",
    logo: "",
    description:
      "Kelly Johnson était un ingénieur aéronautique célèbre pour son travail chez Lockheed Skunk Works, notamment sur le SR-71 Blackbird. Son style d'innovation était rapide, pragmatique et extrêmement exigeant. Il privilégiait de petites équipes, des décisions claires et une grande autonomie technique. Il montre comment l'ingénierie peut repousser les limites de la vitesse, de l'altitude et de la performance.",
  },
];

const state = {
  selectedEntrepreneur: null,
  selectedCompany: null,
  matched: new Set(),
};

const entrepreneursEl = document.querySelector("#entrepreneurs");
const companiesEl = document.querySelector("#companies");
const statusEl = document.querySelector("#status");
const scoreEl = document.querySelector("#score");
const totalEl = document.querySelector("#total");
const profileTitleEl = document.querySelector("#profile-title");
const profileCopyEl = document.querySelector("#profile-copy");
const resetEl = document.querySelector("#reset");

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function createCard(item, type) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "match-card";
  button.dataset.id = item.id;
  button.dataset.type = type;

  const visual = document.createElement("span");
  visual.className = type === "entrepreneur" ? "portrait" : "logo";

  const imageSrc = type === "entrepreneur" ? item.portrait : item.logo;
  const showFallback = () => {
    visual.textContent =
      type === "entrepreneur"
        ? item.name
            .split(" ")
            .map((part) => part[0])
            .join("")
        : item.company;
    visual.classList.add("image-fallback");
  };

  if (imageSrc) {
    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = type === "entrepreneur" ? `Portrait de ${item.name}` : `Image ${item.company}`;
    img.loading = "lazy";
    img.addEventListener("error", () => {
      img.remove();
      showFallback();
    });
    visual.append(img);
  } else {
    showFallback();
  }

  const text = document.createElement("span");
  const name = document.createElement("span");
  name.className = "card-name";
  name.textContent = type === "entrepreneur" ? item.name : item.company;

  const meta = document.createElement("span");
  meta.className = "card-meta";
  meta.textContent = type === "entrepreneur" ? item.role : item.companyMeta || "Logo de l'entreprise";

  text.append(name);
  if (meta.textContent) {
    text.append(meta);
  }
  button.append(visual, text);
  button.addEventListener("click", () => selectCard(button, item, type));

  return button;
}

function renderBoard() {
  entrepreneursEl.replaceChildren(
    ...shuffle(entrepreneurs).map((item) => createCard(item, "entrepreneur")),
  );
  companiesEl.replaceChildren(
    ...shuffle(entrepreneurs).map((item) => createCard(item, "company")),
  );
}

function selectCard(card, item, type) {
  if (state.matched.has(item.id)) return;

  document
    .querySelectorAll(`.match-card[data-type="${type}"]`)
    .forEach((node) => node.classList.remove("selected"));

  card.classList.add("selected");

  if (type === "entrepreneur") {
    state.selectedEntrepreneur = { card, item };
  } else {
    state.selectedCompany = { card, item };
  }

  if (state.selectedEntrepreneur && state.selectedCompany) {
    checkMatch();
  }
}

function checkMatch() {
  const entrepreneur = state.selectedEntrepreneur;
  const company = state.selectedCompany;
  const isMatch = entrepreneur.item.id === company.item.id;

  if (isMatch) {
    state.matched.add(entrepreneur.item.id);
    entrepreneur.card.classList.add("matched");
    company.card.classList.add("matched");
    profileTitleEl.textContent = `${entrepreneur.item.name} - ${entrepreneur.item.company}`;
    profileCopyEl.textContent = entrepreneur.item.description;
    statusEl.textContent = "Bonne association ! Continue avec une autre paire.";
    updateScore();
  } else {
    statusEl.textContent = "Pas encore. Essaie une autre combinaison.";
    entrepreneur.card.classList.add("wrong");
    company.card.classList.add("wrong");
    setTimeout(() => {
      entrepreneur.card.classList.remove("wrong", "selected");
      company.card.classList.remove("wrong", "selected");
    }, 420);
  }

  state.selectedEntrepreneur = null;
  state.selectedCompany = null;

  if (state.matched.size === entrepreneurs.length) {
    statusEl.textContent = "Bravo, toutes les associations sont correctes !";
  }
}

function updateScore() {
  scoreEl.textContent = state.matched.size;
  totalEl.textContent = entrepreneurs.length;
}

function resetGame() {
  state.selectedEntrepreneur = null;
  state.selectedCompany = null;
  state.matched.clear();
  statusEl.textContent = "Choisis un entrepreneur, puis la logo de son entreprise.";
  profileTitleEl.textContent = "Fais une association";
  profileCopyEl.textContent =
    "Quand tu trouves la bonne paire, le style entrepreneurial apparaît ici.";
  updateScore();
  renderBoard();
}

resetEl.addEventListener("click", resetGame);
updateScore();
renderBoard();
