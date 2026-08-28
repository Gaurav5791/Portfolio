from django.db import models
from django.contrib.auth.models import User

class PersonalInfo(models.Model):
    name = models.CharField(max_length=100)
    bio = models.TextField()
    profile_photo = models.ImageField(upload_to='profile/', null=True, blank=True)
    resume = models.FileField(upload_to='resume/', null=True, blank=True)
    typing_texts = models.JSONField(default=list)  # List of typing texts for hero
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    
    def __str__(self):
        return self.name


class SkillCategory(models.Model):
    name = models.CharField(max_length=100)
    color = models.CharField(max_length=7, default="#3b82f6")  # Hex color
    
    def __str__(self):
        return self.name


class Skill(models.Model):
    category = models.ForeignKey(SkillCategory, on_delete=models.CASCADE, related_name='skills')
    name = models.CharField(max_length=100)
    proficiency = models.IntegerField(default=80)  # 0-100
    
    def __str__(self):
        return f"{self.name} ({self.category.name})"


class Project(models.Model):
    STATUS_CHOICES = [
        ('completed', 'Completed'),
        ('in_progress', 'In Progress'),
        ('archived', 'Archived'),
    ]
    
    title = models.CharField(max_length=200)
    description = models.TextField()
    category = models.CharField(max_length=100)
    image = models.ImageField(upload_to='projects/')
    github_link = models.URLField(blank=True)
    live_link = models.URLField(blank=True)
    tech_stack = models.JSONField(default=list)  # List of tech used
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='completed')
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title


class Experience(models.Model):
    EXPERIENCE_TYPE_CHOICES = [
        ('work', 'Work'),
        ('education', 'Education'),
    ]
    
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    location = models.CharField(max_length=200, blank=True)
    experience_type = models.CharField(max_length=20, choices=EXPERIENCE_TYPE_CHOICES)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    description = models.TextField()
    achievements = models.JSONField(default=list)  # List of achievements
    tech_used = models.JSONField(default=list)  # List of tech
    
    def __str__(self):
        return f"{self.title} at {self.company}"


class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    tags = models.JSONField(default=list)  # List of tags
    published = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title


class Message(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Message from {self.name} - {self.subject}"