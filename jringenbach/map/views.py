# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.

def begin(request):
	"""Première map créée avec OpenLayers pour faire des tests """
	return render(request, "map/begin.html", locals())

def map02(request):
	"""OpenLayers 3 Beginner's guide - chapter 2 - Map example """
	return render(request, "map/map02.html", locals())

def map03(request):
	"""OpenLayers 3 Beginner's guide - chapter 2 - Second Example - Overlays
	We'll see how to display the position of the mouse cursor with overlays"""
	return render(request, "map/map03.html", locals())

def map04(request):
	"""OpenLayers 3 beginner's guide - Chapter 3 - First example """
	return render(request, "map/map04.html", locals())

def map05Animation(request):
	"""Tests sur les animations de la carte"""
	return render(request, "map/map05Animation.html", locals())
