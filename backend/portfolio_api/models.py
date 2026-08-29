from django.db import models

class About(models.Model):
    title = models.CharField(max_length=200, default="Full Stack Developer")
    bio = models.TextField()
    skills = models.TextField(help_text="Comma-separated skills")
    image = models.ImageField(upload_to='about/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "About"


class PortfolioItem(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='portfolio/', null=True, blank=True)
    technologies = models.TextField(help_text="Comma-separated technologies")
    link = models.URLField(blank=True)
    github_link = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class Skill(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=100, default="Other")
    proficiency = models.IntegerField(default=80, help_text="0-100")

    def __str__(self):
        return self.name