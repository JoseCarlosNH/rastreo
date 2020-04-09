from django.db import models
from django.contrib.auth.models import User

# Modelos

class Vehiculo(models.Model):
    
    identificador = models.CharField(
        max_length=255,
        null=True,
        unique=True,
        default="0"
    )
    placas = models.CharField(
        max_length=255,
        null=True,
    )
    lat = models.DecimalField(
        blank=True,
        max_digits=20,
        decimal_places=15,
        default=0.0
    )
    lng = models.DecimalField(
        blank=True,
        max_digits=20,
        decimal_places=15,
        default=0.0
    )
    created_date = models.DateTimeField(
        auto_now=False,
        auto_now_add=True,
        null=True,
        blank=True
    )
    created_by = models.ForeignKey(
        User,
        null=True,
        blank=True,
        on_delete= models.CASCADE
    )

    def __str__(self):
        return "({0}) {1}".format(self.identificador, self.placas)

    def __unicode__(self):
        return "({0}) {1}".format(self.identificador, self.placas)