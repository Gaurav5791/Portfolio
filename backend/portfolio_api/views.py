from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import About, PortfolioItem, Skill
from .serializers import AboutSerializer, PortfolioItemSerializer, SkillSerializer

class AboutViewSet(viewsets.ModelViewSet):
    queryset = About.objects.all()
    serializer_class = AboutSerializer

class PortfolioItemViewSet(viewsets.ModelViewSet):
    queryset = PortfolioItem.objects.all()
    serializer_class = PortfolioItemSerializer

class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

@api_view(['GET'])
def api_root(request):
    return Response({
        'about': '/api/about/',
        'portfolio': '/api/portfolio/',
        'skills': '/api/skills/'
    })