from django.db import models

from .enums import AccountStatus

    
class Account(models.Model):
    id
    balance = models.FloatField()
    status = models.CharField(max_length=100, choices=AccountStatus.CHOICES, default=AccountStatus.PENDING)