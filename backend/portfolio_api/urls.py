from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    PersonalInfoViewSet, SkillCategoryViewSet, SkillViewSet,
    ProjectViewSet, ExperienceViewSet, BlogPostViewSet, MessageViewSet
)

router = DefaultRouter()
router.register(r'personal-info', PersonalInfoViewSet)
router.register(r'skill-categories', SkillCategoryViewSet)
router.register(r'skills', SkillViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'experiences', ExperienceViewSet)
router.register(r'blog', BlogPostViewSet)
router.register(r'messages', MessageViewSet)

urlpatterns = [
    path('', include(router.urls)),
]