# -*- coding:Utf-8 -

from django.db import models

# Create your models here.

class Article(models.Model):
	"""Classe représentant les articles du blog """
	titre = models.CharField(max_length=100)
	auteur = models.CharField(max_length=42)
	contenu = models.TextField(null=True)
	date = models.DateTimeField(auto_now_add=True, auto_now=False, 
				    verbose_name="Date de parution")
	
	#Clé étrangère désignant la catégorie de l'article
	categorie = models.ForeignKey("Categorie")
	
	def __unicode__(self):
		"""Cette méthode que nous définirons dans tous les modèles
        	nous permettra de reconnaître facilement les différents objets que 
        	nous traiterons plus tard et dans l'administration """
		return u''+self.titre

class Categorie(models.Model):
	"""Classe représentant la catégorie d'un article """
	nom_cat = models.CharField(max_length=30)

	def __unicode__(self):
		return u''+self.nom_cat
