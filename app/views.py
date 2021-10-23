from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from django.contrib.gis.geoip2 import GeoIP2

def ip2_loc(request):
    data = {}
    q = request.GET.get("ip") or request.META.get("REMOTE_ADDR") or "google.com"
    if q:
        g = GeoIP2()
        data = g.city(q)
    return JsonResponse(data)