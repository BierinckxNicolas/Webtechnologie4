from django import forms

class QuestionForm(forms.Form):
    your_question = forms.CharField(label='Question', max_length=100)