from django import forms

from ALU_Technologies.models import ArticleName


class AddArticleForm(forms.ModelForm):
    """Describing a form of adding a new article"""
    class Meta:
        model = ArticleName
        fields = ('topic', 'short_description', 'path_to_image')
