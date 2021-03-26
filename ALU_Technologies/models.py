from django.db import models


class ArticleName(models.Model):
    """Model of article to db"""
    topic = models.CharField(max_length=100)
    short_description = models.CharField(max_length=500)
    path_to_image = models.ImageField(upload_to='')
