from django.db import models

# Create your models here.

class Board(models.Model):
    manufacturer = models.CharField(max_length=50, default=None)
    make = models.CharField(max_length=50, default=None)
    liters = models.PositiveIntegerField()
    price = models.PositiveIntegerField()
    new = models.BooleanField()
    image = models.CharField(max_length=500, default=None)
    boardtype = models.ManyToManyField(
        "boardtypes.BoardTypes",
        related_name= "boards"
    )

    def __str__ (self):
        return f"{self.manufacturer}-{self.make}"