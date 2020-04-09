from django.shortcuts import render
from django.views.generic import TemplateView

from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response

from .models import Vehiculo
from .serializers import VehiculoSerializer

#Vistas

class VehiculoAPI(viewsets.ModelViewSet):
    queryset = Vehiculo.objects.all()
    serializer_class = VehiculoSerializer

    def create(self, request, *args, **kwargs):
        request.data._mutable = True
        request.data.update({'created_by': request.user.pk})
        request.data._mutable = False
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        queryset = queryset.filter(created_by=request.user.pk)

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

class InicioView(TemplateView):
    template_name = "inicio.html"