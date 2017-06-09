# -*- coding:Utf-8 -

from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
	text = """<h1>Blog de Julien RINGENBACH</h1>
		  <p> Blog de Julien RINGENBACH</p> """
	return HttpResponse(text)

def view_article(request, num_article):
	reponse = "Vous avez essayé de voir l'article {}.".format(num_article)
	return HttpResponse(reponse)

def contact(request):
	reponse = """<h1>Julien RINGENBACH</h1>
		     <h2>Contact</h2>"""
	return HttpResponse(reponse)
