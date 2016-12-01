from django.conf.urls import url, include
from django.contrib import admin
from todo_redux import urls

urlpatterns = [
    url(r'^', include(urls, namespace='todo_redux')),
    url(r'^admin/', admin.site.urls),
]