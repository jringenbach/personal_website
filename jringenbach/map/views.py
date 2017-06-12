# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.

def begin(request):
	"""Première map créée avec OpenLayers pour faire des tests """
	return render(request, "map/begin.html", locals())
