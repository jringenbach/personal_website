# -*- coding:Utf-8 -

from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, Http404
from blog.models import Article

# Create your views here.
def accueil(request):
	"""Page d'accueil du blog """
	articles = Article.objects.all()
	return render(request, "blog/accueil.html", {'derniers_articles':articles})

def addition(request,nombre1, nombre2):
	resultat = int(nombre1) + int(nombre2)
	return render(request, 'blog/addition.html', locals())

def lire(request, idArticle):
	"""Page permettant de lire un article du blog """
	article = get_object_or_404(Article, id=idArticle)
	return render(request, 'blog/lire.html', {'article':article})
