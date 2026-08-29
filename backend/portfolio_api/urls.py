from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AboutViewSet, PortfolioItemViewSet, SkillViewSet, api_root

router = DefaultRouter()
router.register(r'about', AboutViewSet)
router.register(r'portfolio', PortfolioItemViewSet)
router.register(r'skills', SkillViewSet)

urlpatterns = [
    path('', api_root, name='api-root'),
    path('', include(router.urls)),
]