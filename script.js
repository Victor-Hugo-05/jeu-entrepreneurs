const entrepreneurs = [
  {
    id: "musk",
    name: "Elon Musk",
    company: "Tesla",
    role: "Tesla, SpaceX",
    portrait:
      "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society_%28crop2%29.jpg&w=180&h=180&fit=cover",
    logo:
      "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png&w=180&h=180&fit=contain&we",
    description:
      "Elon Musk est un entrepreneur visionnaire qui aime résoudre de grands problèmes. Il est connu pour prendre des risques importants et investir dans des projets ambitieux liés à la technologie, à l'énergie et à l'espace. Son style de leadership est exigeant et orienté vers l'innovation. Il cherche souvent à transformer des industries entières grâce à de nouvelles idées et à des avancées technologiques.",
  },
  {
    id: "jobs",
    name: "Steve Jobs",
    company: "Apple",
    role: "Apple, Pixar",
    portrait:
      "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/f/f5/Steve_Jobs_Headshot_2010-CROP.jpg&w=180&h=180&fit=cover",
    logo:
      "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg&w=180&h=180&fit=contain&we",
    description:
      "Steve Jobs était un entrepreneur créatif et perfectionniste. Il accordait une grande importance au design, à l'expérience utilisateur et à la simplicité des produits. Son style de leadership reposait sur une vision claire et une forte exigence envers ses équipes. Il est surtout connu pour avoir créé des produits innovants qui ont changé la manière dont les gens utilisent la technologie au quotidien.",
  },
  {
    id: "bezos",
    name: "Jeff Bezos",
    company: "Amazon",
    role: "Amazon, Blue Origin",
    portrait:
      "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/1/1b/Jeff_Bezos%27_iconic_laugh.jpg&w=180&h=180&fit=cover",
    logo:
      "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg&w=220&h=160&fit=contain&we",
    description:
      "Jeff Bezos est un entrepreneur analytique et très orienté client. Il construit ses projets avec une vision de long terme, en acceptant d'investir pendant des années avant de rechercher des résultats immédiats. Son style repose sur les données, l'efficacité opérationnelle et l'amélioration continue. Il a transformé le commerce en ligne en mettant la rapidité, le choix et la simplicité au centre de l'expérience client.",
  },
  {
    id: "zuckerberg",
    name: "Mark Zuckerberg",
    company: "Meta",
    role: "Facebook, Meta",
    portrait:
      "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/0/01/Mark_Zuckerberg_at_the_37th_G8_Summit_in_Deauville_018_v1.jpg&w=180&h=180&fit=cover",
    logo:
      "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png&w=220&h=160&fit=contain&we",
    description:
      "Mark Zuckerberg est un entrepreneur produit, rapide et centré sur les réseaux. Il cherche à connecter les personnes à grande échelle et à faire évoluer ses plateformes en fonction des usages. Son style entrepreneurial est marqué par l'expérimentation, la croissance rapide et la capacité à adapter sa stratégie quand le marché change. Il aime construire des outils utilisés quotidiennement par des milliards de personnes.",
  },
  {
    id: "winfrey",
    name: "Oprah Winfrey",
    company: "OWN",
    role: "Harpo, OWN",
    portrait:
      "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/b/bf/Oprah_in_2014.jpg&w=180&h=180&fit=cover",
    logo:
      "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/6/69/Oprah_Winfrey_Network_logo.svg&w=220&h=160&fit=contain&we",
    description:
      "Oprah Winfrey est une entrepreneure relationnelle, inspirante et très attentive à la confiance de son public. Elle a construit une marque personnelle forte autour de l'écoute, de l'authenticité et de l'impact culturel. Son style de leadership valorise l'émotion, la narration et la capacité à donner de la visibilité à d'autres voix. Elle montre qu'une entreprise peut aussi se développer grâce à une communauté fidèle.",
  },
  {
    id: "branson",
    name: "Richard Branson",
    company: "Virgin",
    role: "Virgin Group",
    portrait:
      "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/7/74/Richard_Branson_2015.jpg&w=180&h=180&fit=cover",
    logo:
      "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/f/ff/Virgin_logo.svg&w=220&h=160&fit=contain&we",
    description:
      "Richard Branson est un entrepreneur audacieux, communicant et très attaché à l'image de marque. Il aime entrer dans des secteurs variés avec une approche plus simple, plus humaine ou plus amusante que les acteurs traditionnels. Son style repose sur la prise de risque, la délégation et la capacité à raconter une aventure entrepreneuriale. Il incarne l'idée qu'une marque peut devenir un univers.",
  },
  {
    id: "whitney",
    name: "Whitney Wolfe Herd",
    company: "Bumble",
    role: "Bumble",
    portrait:
      "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/a/a1/Whitney_Wolfe_Herd_in_2021.png&w=180&h=180&fit=cover",
    logo:
      "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/2/2f/Bumble_Logo_2020.svg&w=220&h=160&fit=contain&we",
    description:
      "Whitney Wolfe Herd est une entrepreneure moderne, orientée communauté et attentive aux usages sociaux. Elle a construit Bumble autour d'une idée claire : donner plus de contrôle et de sécurité aux utilisatrices. Son style entrepreneurial combine positionnement de marque, sens du produit et volonté de changer des comportements existants. Elle montre comment une mission sociale peut devenir un avantage compétitif.",
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

  const img = document.createElement("img");
  img.src = type === "entrepreneur" ? item.portrait : item.logo;
  img.alt = type === "entrepreneur" ? `Portrait de ${item.name}` : `Logo ${item.company}`;
  img.loading = "lazy";
  img.addEventListener("error", () => {
    img.remove();
    visual.textContent =
      type === "entrepreneur"
        ? item.name
            .split(" ")
            .map((part) => part[0])
            .join("")
        : item.company;
    visual.classList.add("image-fallback");
  });
  visual.append(img);

  const text = document.createElement("span");
  const name = document.createElement("span");
  name.className = "card-name";
  name.textContent = type === "entrepreneur" ? item.name : item.company;

  const meta = document.createElement("span");
  meta.className = "card-meta";
  meta.textContent = type === "entrepreneur" ? item.role : "Logo de l'entreprise";

  text.append(name, meta);
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
renderBoard();
