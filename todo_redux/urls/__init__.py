from django.conf.urls import url, include
from . import web, api

urlpatterns = [
    url(r'^', include(web, namespace='web')),
    url(r'^api/', include(api, namespace='api'))
]
