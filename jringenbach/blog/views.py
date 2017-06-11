# -*- coding:Utf-8 -

from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
	text = """<h1>Blog de Julien RINGENBACH</h1>
		  <p> Blog de Julien RINGENBACH</p> """
	return HttpResponse(text)

def addition(request,nombre1, nombre2):
	resultat = int(nombre1) + int(nombre2)
	return render(request, 'blog/addition.html', locals())

def view_article(request, num_article):
	reponse = "Vous avez essayé de voir l'article {}.".format(num_article)
	return HttpResponse(reponse)

def bonjour(request, nom):
	return render(request, "blog/bonjour.html", locals())
