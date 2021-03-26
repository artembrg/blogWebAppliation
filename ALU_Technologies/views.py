from django.shortcuts import render
from django.views import View
from .forms import AddArticleForm
from .models import ArticleName


class MainView(View):

    def get(self, request):
        return render(request, 'index.html', {})

    def post(self, request):
        """If a request to add a new article has sent"""
        form = AddArticleForm(request.POST, request.FILES)
        form.save()
        return render(request, 'index.html', {})


class ArticlesView(View):

    def get(self, request):
        """Forming a dynamic content using context data gotten from db"""
        articles = ArticleName.objects.all().order_by('-id')
        context = {"data": []}
        i = 0
        for a in articles:
            article_data = {
                'id_on_view': i,
                'topic': a.topic,
                'description': a.short_description,
                'img': a.path_to_image
            }
            i += 1
            context['data'].append(article_data)
        return render(request, 'articles.html', context)


class NewArticleView(View):

    def get(self, request):
        """Creating form using described in forms.py class"""
        form = AddArticleForm()
        return render(request, 'add_article.html', {'form': form})


class AboutView(View):
    def get(self, request):
        return render(request, 'about.html', {})
