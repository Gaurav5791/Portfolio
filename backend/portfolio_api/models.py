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
class Experience(models.Model):
    EXPERIENCE_TYPE_CHOICES = [
        ('internship', 'Internship'),
        ('training', 'Training'),
        ('work', 'Work'),
        ('education', 'Education'),
    ]
    
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    experience_type = models.CharField(max_length=20, choices=EXPERIENCE_TYPE_CHOICES)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    description = models.TextField()
    
    def __str__(self):
        return f"{self.title} at {self.company}"    