// Fiches projets : termes techniques conservés et expliqués en langage courant.
const projects = [
  {
    "id": "docker",
    "n": "01",
    "category": "stage",
    "label": "Stage · Déploiement",
    "title": "Comprendre Docker et tester Nginx",
    "summary": "Installer un serveur web dans un espace de test séparé, ouvrir le port 8080 et vérifier la page.",
    "tools": [
      "Docker",
      "Docker Compose",
      "Nginx",
      "Bac à sable"
    ],
    "context": "Chez Hilt Technology, je devais tester l’installation d’un service sans toucher aux outils utilisés par l’entreprise.",
    "steps": [
      "Analyser le fichier docker-compose.yml d’une infrastructure Docker / Traefik, comme indiqué dans mon tableau de stage. Traefik dirige les requêtes vers le bon service.",
      "Préparer les fichiers qui décrivent les réglages du service de test Nginx.",
      "Lancer Nginx avec Docker et relier le port 8080 de la machine au port du serveur web.",
      "Vérifier que le conteneur fonctionne et que la page d’accueil s’affiche.",
      "Échanger avec le tuteur sur Slack en cas de difficulté."
    ],
    "result": "La page d’accueil Nginx a pu être affichée en utilisant le port 8080 dans l’environnement de test.",
    "learned": "Une image Docker est un modèle d’application ; un conteneur est l’application lancée à partir de ce modèle. Docker sépare les applications, mais leur sécurité dépend aussi des droits, des mises à jour et des accès ouverts.",
    "skills": "Gérer le patrimoine informatique (C1) · travailler en mode projet (C4). Mise en pratique : lire les réglages, organiser les essais et vérifier un service.",
    "limit": "Les essais ont été faits sur une plateforme de test, pas sur les services utilisés par l’entreprise."
  },
  {
    "id": "debian",
    "n": "02",
    "category": "systeme",
    "label": "Projet de formation · Systèmes",
    "title": "Une machine Debian et un service d’IA",
    "summary": "Créer un ordinateur virtuel sous Debian et préparer l’installation d’un service d’intelligence artificielle.",
    "tools": [
      "Debian",
      "VirtualBox",
      "SSH",
      "UFW",
      "Ollama"
    ],
    "context": "Projet scolaire : installer Linux dans une machine virtuelle, puis travailler sur un service d’intelligence artificielle.",
    "steps": [
      "Créer une machine virtuelle avec VirtualBox et y installer Debian, un système Linux.",
      "Vérifier son adresse IP et sa connexion au réseau.",
      "Mettre en place SSH pour gérer la machine à distance, puis les règles du pare-feu UFW.",
      "Travailler sur Ollama, un outil pour faire fonctionner des modèles d’IA, et son accès depuis une page web."
    ],
    "result": "Préparation d’un serveur Linux et mise en place de l’accès SSH. Le projet porte aussi sur l’installation d’un service d’IA.",
    "learned": "Pour trouver une panne, je vérifie séparément les logiciels nécessaires, les services, le réseau et les règles de sécurité.",
    "skills": "Installer Linux · préparer une machine virtuelle · mettre en place un service.",
    "limit": "Travail en laboratoire. Les captures et les résultats des essais restent à ajouter pour montrer le fonctionnement complet du service d’IA."
  },
  {
    "id": "ssh",
    "n": "03",
    "category": "reseau",
    "label": "Projet de formation · Accès distant",
    "title": "Gérer une machine à distance avec SSH",
    "summary": "Relier un poste Windows à une machine Debian et autoriser les connexions nécessaires.",
    "tools": [
      "OpenSSH",
      "Debian",
      "VirtualBox",
      "UFW"
    ],
    "context": "Utiliser SSH pour gérer une machine virtuelle Debian depuis un ordinateur Windows, sans ouvrir directement son écran.",
    "steps": [
      "Installer SSH sur Debian et vérifier qu’il fonctionne.",
      "Choisir le port 2222 pour recevoir les connexions SSH dans la machine virtuelle.",
      "Avec le mode réseau NAT de VirtualBox, faire suivre les connexions du port 2224 de l’ordinateur vers le port 2222 de la machine virtuelle.",
      "Autoriser l’accès nécessaire dans UFW, le pare-feu, puis tester la connexion.",
      "Travailler ensuite sur une clé SSH, un moyen de connexion qui peut remplacer la saisie du mot de passe."
    ],
    "result": "La connexion SSH a été établie après le diagnostic des difficultés d’accès et d’authentification.",
    "learned": "Un port est un point d’entrée vers un service. Ici, le numéro utilisé sur l’ordinateur est différent de celui utilisé dans la machine virtuelle. Changer ce numéro ne suffit pas à sécuriser la connexion.",
    "skills": "Gérer une machine à distance · trouver la cause d’un problème de connexion · contrôler les accès.",
    "limit": "Les ports 2224 et 2222 correspondent à mes essais. La mise en place finale des clés SSH reste à confirmer avec les traces du projet."
  },
  {
    "id": "cisco",
    "n": "04",
    "category": "reseau",
    "label": "AP de classe · Réseaux",
    "title": "Séparer un réseau avec Cisco Packet Tracer",
    "summary": "Choisir les adresses IP, créer des groupes dans le réseau et tester leurs communications.",
    "tools": [
      "Cisco Packet Tracer",
      "IPv4",
      "VLAN",
      "802.1Q"
    ],
    "context": "Atelier professionnel de classe : construire un réseau simulé avec Cisco Packet Tracer et organiser les échanges entre les groupes d’ordinateurs.",
    "steps": [
      "Choisir les adresses IP, les masques et les passerelles qui permettent de joindre les autres réseaux.",
      "Créer les VLAN : des groupes séparés au sein d’un même réseau physique.",
      "Mettre en place les trunks : des liaisons qui transportent plusieurs VLAN entre les équipements.",
      "Régler le routage inter-VLAN, qui permet aux groupes de communiquer, puis tester les échanges.",
      "Définir les règles de filtrage : qui peut accéder à quel service et quelles connexions sont refusées."
    ],
    "result": "Le travail relie les réglages des équipements à un schéma du réseau et à une liste d’adresses IP.",
    "learned": "Séparer les groupes, les faire communiquer et contrôler leurs accès sont trois étapes différentes. Un port « access » dessert généralement un seul VLAN ; un « trunk » en transporte plusieurs.",
    "skills": "Organiser les adresses IP · séparer un réseau · vérifier les connexions.",
    "limit": "Le fichier Packet Tracer (.pkt) et les résultats de mes tests restent à joindre. La continuité du réseau avec HSRP a aussi été étudiée, mais son fonctionnement n’est pas démontré ici."
  },
  {
    "id": "audit",
    "n": "05",
    "category": "stage",
    "label": "Stage · Diagnostic",
    "title": "Contrôler la rapidité et la sécurité d’un site",
    "summary": "Vérifier le nom de domaine, le temps de réponse et la protection des échanges HTTPS.",
    "tools": [
      "PageSpeed Insights",
      "SSL Labs",
      "DNS",
      "Cloudflare",
      "curl"
    ],
    "context": "Pendant le stage, j’ai contrôlé des sites web pour repérer les problèmes de rapidité et vérifier la protection des échanges.",
    "steps": [
      "Vérifier le DNS, qui relie le nom du site à son adresse, et la prise en compte des changements.",
      "Mesurer la rapidité avec PageSpeed Insights, notamment le délai avant la première réponse du serveur (TTFB).",
      "Vérifier avec SSL Labs la configuration TLS, qui protège les échanges HTTPS.",
      "Comparer les résultats : un site rapide ou bien noté sur un contrôle n’est pas forcément sécurisé sur tous les points."
    ],
    "result": "Les contrôles rapportés pendant le stage ont notamment donné une note A+ sur SSL Labs et des pistes pour comprendre certains délais de réponse.",
    "learned": "La note A+ porte sur la protection des échanges testée par SSL Labs. Elle ne prouve pas que le site entier est sans faille.",
    "skills": "Mesurer des indicateurs · repérer les problèmes d’un service · présenter les résultats.",
    "limit": "Ces notes décrivent des contrôles à un moment donné. Il reste à ajouter les captures, les dates et le site concerné pour les présenter comme preuves."
  },
  {
    "id": "remediation",
    "n": "06",
    "category": "stage",
    "label": "Stage · Cybersécurité",
    "title": "Repérer les protections web manquantes",
    "summary": "Vérifier les règles de sécurité envoyées au navigateur et proposer des corrections.",
    "tools": [
      "Security Headers",
      "curl -I",
      "HTTP",
      "Cloudflare"
    ],
    "context": "Analyse d’un site web : examiner ses protections et les problèmes d’accès à certaines pages.",
    "steps": [
      "Lire les en-têtes HTTP, les informations et règles envoyées par le serveur au navigateur.",
      "Comparer les résultats avec un outil de contrôle et repérer les protections manquantes.",
      "Étudier le clickjacking : une technique qui trompe l’utilisateur pour lui faire cliquer sur un élément caché.",
      "Proposer les corrections à effectuer dans le site, le serveur ou le service placé devant lui.",
      "Prévoir de nouveaux tests après les corrections."
    ],
    "result": "J’ai proposé une analyse et un plan de correction. Une note F sur le contrôle des en-têtes faisait partie des constats rapportés.",
    "learned": "Une protection manquante ne prouve pas qu’une attaque a eu lieu. Il faut comprendre le problème et vérifier qu’une correction ne perturbe pas le site.",
    "skills": "Repérer les risques · classer les corrections par priorité · expliquer les résultats.",
    "limit": "Les corrections sont des propositions : elles ne sont pas présentées comme déjà appliquées sur le site de l’entreprise. Les résultats datés restent à ajouter."
  },
  {
    "id": "windows",
    "n": "07",
    "category": "ap",
    "label": "AP de classe · Windows",
    "title": "Comptes, groupes et partages Windows",
    "summary": "Donner à chaque utilisateur les bons droits sur les dossiers partagés.",
    "tools": [
      "Windows Server",
      "Windows client",
      "VirtualBox",
      "NTFS"
    ],
    "context": "Atelier de classe : préparer un serveur de fichiers et des ordinateurs clients dans un réseau virtuel.",
    "steps": [
      "Préparer les machines virtuelles et vérifier leurs connexions.",
      "Créer les comptes et regrouper les utilisateurs selon leur fonction.",
      "Partager les dossiers et définir qui peut les lire ou les modifier.",
      "Tester les accès avec différents comptes.",
      "Expliquer aux utilisateurs comment retrouver leurs dossiers."
    ],
    "result": "Le but est que chaque utilisateur accède aux documents utiles à son travail, avec les droits adaptés.",
    "learned": "Le moindre privilège consiste à donner seulement les droits nécessaires. Les permissions NTFS portent sur les fichiers et dossiers ; les droits de partage contrôlent aussi leur accès par le réseau.",
    "skills": "Gérer les comptes et les droits · partager des dossiers · limiter les accès.",
    "limit": "Sujet commun de la classe. Mes captures et résultats de tests restent à joindre pour montrer les réglages réalisés."
  },
  {
    "id": "linux",
    "n": "08",
    "category": "ap",
    "label": "AP de classe · Linux",
    "title": "Partager un espace de travail sous Linux",
    "summary": "Permettre à une équipe de modifier des fichiers tout en conservant les bons droits.",
    "tools": [
      "Debian",
      "Apache",
      "Groupes",
      "SGID",
      "ACL"
    ],
    "context": "Atelier de classe : préparer un dossier de travail partagé pour les fichiers d’un site web sous Linux.",
    "steps": [
      "Créer le dossier de travail et le groupe d’utilisateurs.",
      "Régler les droits de lecture, de modification et d’accès.",
      "Étudier comment garder des droits cohérents sur les nouveaux fichiers.",
      "Vérifier que le serveur web et les membres de l’équipe ont les accès nécessaires."
    ],
    "result": "Le but est que plusieurs utilisateurs puissent travailler sur les fichiers sans bloquer les autres ni ouvrir trop largement les accès.",
    "learned": "Le SGID aide les nouveaux fichiers à garder le groupe du dossier. L’umask détermine les droits retirés à la création. Les ACL permettent d’ajouter des droits plus précis pour certains comptes ou groupes.",
    "skills": "Gérer les droits sous Linux · partager un dossier · tester les accès.",
    "limit": "Sujet commun de la classe. Mes commandes et résultats de tests restent à ajouter."
  },
  {
    "id": "infra",
    "n": "09",
    "category": "ap",
    "label": "AP de classe · Infrastructure",
    "title": "Créer un réseau virtuel et travailler sur les sauvegardes",
    "summary": "Relier plusieurs machines virtuelles, sauvegarder les fichiers et rechercher les pannes réseau.",
    "tools": [
      "VirtualBox",
      "Debian",
      "Windows",
      "UrBackup",
      "ping",
      "arp"
    ],
    "context": "Atelier de classe : construire un réseau de test avec des postes et un serveur, puis travailler sur les sauvegardes et les problèmes de connexion.",
    "steps": [
      "Créer ou importer les machines virtuelles et les relier au réseau.",
      "Vérifier les adresses du serveur, des postes et de la passerelle, le point de sortie vers un autre réseau.",
      "Travailler sur la sauvegarde des fichiers avec UrBackup et vérifier les résultats.",
      "Utiliser ping pour tester les réponses et la table ARP pour examiner les correspondances d’adresses sur le réseau local."
    ],
    "result": "Le travail combine la création d’un réseau de test, les sauvegardes et la recherche de pannes.",
    "learned": "Il faut vérifier les sauvegardes et tester la récupération des fichiers. Une adresse inhabituelle dans la table ARP doit être examinée avant de conclure à une attaque.",
    "skills": "Préparer des machines virtuelles · protéger les fichiers · rechercher un problème réseau.",
    "limit": "Sujet de classe : aucun test de récupération ni incident réel en entreprise n’est affirmé sans preuve."
  },
  {
    "id": "web",
    "n": "10",
    "category": "ap",
    "label": "AP de classe · Services web",
    "title": "Créer des pages web reliées à des données",
    "summary": "Des pages HTML / CSS, un formulaire PHP et une application Python qui interroge une base de données.",
    "tools": [
      "HTML",
      "CSS",
      "Apache",
      "PHP",
      "Python",
      "Flask",
      "SQL"
    ],
    "context": "Trois ateliers de classe : un portail web, un formulaire d’assistance et une page indiquant les salles disponibles.",
    "steps": [
      "Organiser les pages avec HTML et leur apparence avec CSS.",
      "Installer Apache et PHP, puis traiter les informations envoyées par un formulaire.",
      "Utiliser Flask, un outil Python, pour relier des adresses web aux pages à afficher.",
      "Écrire des requêtes SQL pour chercher des informations dans une base de données et afficher le résultat."
    ],
    "result": "Ces ateliers permettent de suivre une demande depuis le navigateur jusqu’au serveur et à la base de données.",
    "learned": "Le navigateur affiche la page, le serveur traite la demande et la base contient les données. Les informations saisies par l’utilisateur doivent être vérifiées côté serveur.",
    "skills": "Créer un service web · comprendre les échanges avec le serveur · lire des données avec SQL.",
    "limit": "Sujets communs de la classe. Mon code et mes démonstrations restent à ajouter ; ces travaux ne signifient pas que je maîtrise déjà le développement avancé."
  },
  {
    "id": "parc",
    "n": "11",
    "category": "ap",
    "label": "AP de classe · Gestion de parc",
    "title": "Proposer une configuration adaptée",
    "summary": "Choisir un ordinateur selon le travail à effectuer et expliquer son prix.",
    "tools": [
      "Cahier des charges",
      "Comparatif matériel",
      "Chiffrage"
    ],
    "context": "Atelier de classe sur le remplacement de postes de travail et le choix du matériel.",
    "steps": [
      "Identifier les besoins des utilisateurs et le budget disponible.",
      "Comparer les composants et expliquer les choix.",
      "Calculer le prix de l’ensemble.",
      "Présenter une configuration adaptée et facile à gérer pour l’entreprise."
    ],
    "result": "Une démarche pour choisir le matériel selon les usages et justifier son coût.",
    "learned": "Un ordinateur se choisit selon le travail à réaliser, le budget et les besoins d’entretien, pas seulement selon sa puissance.",
    "skills": "Participer à la gestion du matériel · comparer les solutions · justifier ses choix.",
    "limit": "Le budget et les composants du portfolio d’exemple ne sont pas repris comme mes résultats personnels."
  }
];
const esc = s => s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const grid=document.querySelector('#project-grid');
if(grid) grid.innerHTML=projects.map(p=>`<article class="project" data-category="${p.category}" data-id="${p.id}"><div class="project-top"><span>${p.n} / ${esc(p.label)}</span><span class="pill">${p.category==='stage'?'STAGE':'FORMATION'}</span></div><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p><button type="button" data-open-project="${p.id}" aria-label="Lire la fiche : ${esc(p.title)}">Lire la fiche <span aria-hidden="true">↗</span></button></article>`).join('');
const dialog=document.querySelector('#project-dialog');
function openProject(id){const p=projects.find(p=>p.id===id);if(!p||!dialog)return;document.querySelector('#dialog-label').textContent=p.label;document.querySelector('#dialog-title').textContent=p.title;document.querySelector('#dialog-content').innerHTML=`<h3>Le contexte</h3><p>${esc(p.context)}</p><h3>La démarche</h3><ol>${p.steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol><h3>Résultat ou objectif de l’atelier</h3><p>${esc(p.result)}</p><h3>Ce que je retiens</h3><p>${esc(p.learned)}</p><h3>Compétences associées</h3><p>${esc(p.skills)}</p><div class="tools">${p.tools.map(t=>`<span>${esc(t)}</span>`).join('')}</div><p class="note">${esc(p.limit)}</p><a class="skill-link" href="#competences" data-close-dialog>Voir les compétences associées →</a>`;dialog.showModal();dialog.scrollTop=0;}
document.addEventListener('click',e=>{const trigger=e.target.closest('[data-open-project]');if(trigger){e.preventDefault();openProject(trigger.dataset.openProject);}if(e.target.closest('.close,[data-close-dialog]'))dialog?.close();});
dialog?.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
document.querySelectorAll('[data-project-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-project-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));document.querySelectorAll('.project').forEach(p=>p.hidden=button.dataset.projectFilter!=='all'&&p.dataset.category!==button.dataset.projectFilter);}));
const menu=document.querySelector('.menu'),nav=document.querySelector('.links');menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'Fermer −':'Menu +';nav.classList.toggle('open',open);});nav?.addEventListener('click',e=>{if(e.target.closest('a')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu +';}});
document.querySelectorAll('.print').forEach(b=>b.addEventListener('click',()=>window.print()));
document.querySelectorAll('[data-watch-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-watch-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));document.querySelectorAll('.watch-entry').forEach(a=>a.hidden=button.dataset.watchFilter!=='all'&&a.dataset.year!==button.dataset.watchFilter);}));

// Le lien reste utilisable sans JavaScript ; la copie aide dans les navigateurs intégrés.
document.querySelectorAll('[data-copy-url]').forEach(button=>button.addEventListener('click',async()=>{
  const url=button.dataset.copyUrl;
  const status=document.querySelector('#copy-status');
  let copied=false;
  try {
    if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(url);copied=true;}
  } catch {}
  if(!copied){
    const field=document.createElement('textarea');
    field.value=url;field.readOnly=true;field.style.cssText='position:fixed;left:0;top:0;opacity:0;font-size:16px';
    document.body.append(field);field.select();field.setSelectionRange(0,url.length);
    try{copied=document.execCommand('copy');}catch{}
    field.remove();button.focus();
  }
  if(copied){button.textContent='Lien copié ✓';if(status)status.textContent='Lien copié. Vous pouvez le coller dans votre navigateur.';}
  else{
    button.textContent='Sélectionnez le lien ci-dessous';
    const address=button.closest('.source-block').querySelector('.source-url');
    const range=document.createRange();range.selectNodeContents(address);
    const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);
    if(status)status.textContent='Copie automatique indisponible. Sélectionnez et copiez l’adresse affichée.';
  }
}));

// Animations discrètes, jouées une fois. Tout reste visible si le navigateur ne les gère pas.
const reducedMotion=window.matchMedia?.('(prefers-reduced-motion: reduce)');
if('IntersectionObserver' in window && !reducedMotion?.matches){
  const reveals=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        entry.target.classList.remove('reveal-pending');
        reveals.unobserve(entry.target);
      }
    });
  },{threshold:0.05});
  document.querySelectorAll('.section-head,.about,.stage-panel,.table-wrap,.watch-banner,.contact,.watch-entry,.method-grid,.glossary').forEach(el=>{
    el.classList.add('reveal-pending');reveals.observe(el);
  });
  reducedMotion?.addEventListener('change',event=>{
    if(event.matches){reveals.disconnect();document.querySelectorAll('.reveal-pending').forEach(el=>el.classList.remove('reveal-pending'));}
  });
}
// Signaler une collecte ancienne sans modifier la date réelle de vérification.
document.addEventListener('DOMContentLoaded',()=>{
  const stamp=document.querySelector('[data-watch-checked]');
  if(!stamp)return;
  const checked=Date.parse(stamp.dataset.watchChecked);
  if(Number.isFinite(checked)&&Date.now()-checked>72*60*60*1000){
    const warning=document.createElement('p');warning.className='feed-stale';
    warning.textContent='La dernière collecte date de plus de 3 jours. Consultez directement le CERT-FR pour les informations récentes.';
    stamp.after(warning);
  }
});
