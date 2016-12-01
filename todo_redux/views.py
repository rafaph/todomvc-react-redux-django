from django.shortcuts import render
from rest_framework import viewsets

from .models import Todo
from .serializers import TodoSerializer


def index(request):
    return render(request, 'index.html')


class TodosViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


todo_detail = TodosViewSet.as_view({
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

todo_list = TodosViewSet.as_view({
    'get': 'list',
    'post': 'create'
})
