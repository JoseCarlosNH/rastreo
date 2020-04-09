from rest_framework import serializers

from tracking.models import Vehiculo

# Serializadores

class VehiculoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehiculo
        fields = (
            'pk',
            'identificador',
            'placas',
            'lat',
            'lng',
            'created_by',
            'created_date',
        )
