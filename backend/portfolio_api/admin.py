from django.contrib import admin
from .models import About, PortfolioItem, Skill, Experience

@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    pass

@admin.register(PortfolioItem)
class PortfolioItemAdmin(admin.ModelAdmin):
    pass

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    pass

@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    pass