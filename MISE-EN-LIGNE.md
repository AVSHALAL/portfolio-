# Portfolio — compétences de stage et veille

L’image du tableau n’est pas incluse dans le site. Ses trois missions et leurs correspondances sont recréées en HTML, dans la rubrique Compétences. Les AP existants sont conservés.

## Mettre cette version sur GitHub

1. Décompresser l’archive. Dans le dépôt AVSHALAL/portfolio-, importer son contenu **à la racine**, pas le ZIP lui-même et pas un dossier englobant. Conserver les dossiers assets, data, scripts, tests et .github. Remplacer index.html et veille.html par les nouvelles versions.
2. Vérifier que le fichier `.github/workflows/veille.yml` existe dans GitHub. Si le dossier n’apparaît pas lors de l’import, utiliser **Add file → Create new file**, saisir exactement ce chemin et coller le contenu du fichier fourni.
3. Aller dans **Settings → Pages → Build and deployment → Source** et choisir **GitHub Actions**.
4. Dans **Actions → Portfolio et veille quotidienne → Run workflow**, lancer une première exécution sur main. Attendre que build et deploy soient verts.
5. Ouvrir https://avshalal.github.io/portfolio-/veille.html#actualites et vérifier la date de collecte. Le lien public du portfolio reste le même.

## Ce qui sera automatique

Chaque jour à 06 h 17 UTC (08 h 17 à Paris en été, 07 h 17 en hiver), GitHub récupère les flux avis et alertes du CERT-FR. Il sélectionne les publications mentionnant Fortinet, FortiOS ou FortiGate, conserve les 40 plus récentes et en affiche 12. Aucune clé API ou abonnement payant n’est nécessaire à ce code.

L’historique est repris depuis le dernier site publié, avec repli sur la copie fournie. Les flux ne contiennent pas toutes les anciennes publications. Le programme n’invente ni résumé ni analyse : ces articles sont à lire ; les fiches personnelles restent séparées et inchangées.

Si l’un des flux échoue, la publication est arrêtée et le site précédent reste en ligne. Après 3 jours sans collecte réussie, la page indique que les données sont anciennes. Consulter l’onglet Actions en cas d’échec. GitHub peut retarder les tâches planifiées et les désactiver après 60 jours sans activité sur un dépôt public ; réactiver le workflow dans Actions si nécessaire.

L’automatisation est **préparée mais non activée** tant que ces fichiers et réglages ne sont pas en place dans GitHub. La prévisualisation Sites ne déclenche pas le workflow GitHub.

## Tester localement

Python 3.12 : `python -m unittest discover -s tests -v`.

Depuis l’archive décompressée : `python scripts/update_watch.py --root .`.

Documentation officielle :
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule

Les documents de preuve cités dans le tableau (rapports, fichier Compose et scripts de test) ne sont pas joints : il faudra les ajouter si leur partage est autorisé. Aucun numéro de candidat n’a été inventé.
