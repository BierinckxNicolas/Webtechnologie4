from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Question(models.Model):
	question_text = models.CharField(max_length=300)
	
	def __unicode__(self):
		return self.question_text

class Answer(models.Model):
	answer_text = models.CharField(max_length=300)
	
	def __unicode__(self):
		return self.answer_text