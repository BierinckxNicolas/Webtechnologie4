# SET 'Answer:1' 'It is certain'
# SET 'Answer:2' 'It is decidedly so'
# SET 'Answer:3' 'Without a doubt'
# SET 'Answer:4' 'Yes definitely'

from django.shortcuts import render
import HttpResponseRedirect
import string
import redis

from .forms import QuestionForm

r = redis.StrictRedis(host='localhost', port=6379, db=0)


def get_question(request):
    if request.method == 'POST':
        form = QuestionForm(request.POST)
        if form.is_valid():
            r.SET Question
            return HttpResponseRedirect('/index').get_answer
    else:
        form = QuestionForm()

    return render(request, 'index.html', {'form': form})



def get_answer(request):
    answer_list = r.keys('answer:*')
    answer_text = []
    for a in answer_list:
        answer_text.append(r.get(a))

    return render(request, 'quotes/index.html', {'answer_list': answer_text[0]})