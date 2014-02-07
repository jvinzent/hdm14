hdm14
=====

Hackaton Data + Municipales / Présence des élus marseillais

Contenu du repository :

- Scripts
Script export.sh permettant de convertir en xml les fichiers pdf inclus dans le répertoire /pdf (un seul inclus ici)
Le script lance ensuite extract_presence.py pour identifier les élus présents, à partir d'expressions régulières relevées dans les procès-verbaux de séance.

- Website
Mini-site construit lors du hackaton afin de présenter les résultats principaux (disponibles dans le répertoire /data).
Note : en l'absence de validation (vérification aléatoire dans les registres de présence / contact des intéressés), les données ne sont qu'indicatives, notamment pour Nora Remadnia-Preziosi.
