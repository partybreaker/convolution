from django.shortcuts import render
# from .models import Phone
from .forms import PhoneForm, PhoneCreateForm
from .models import Phone
from django.contrib.auth.decorators import login_required

# Create your views here.


@login_required
def view_list_phone(request):
    phones = Phone.objects.all()
    return render(request, 'phone/all.html', {'phones': phones})


@login_required
def search_phone(request):
    phones = Phone.objects.all()
    return render(request, 'phone/search.html', {'phones': phones})


@login_required
def search_history(request):
    phones = Phone.objects.all()
    return render(request, 'phone/history', {'phones': phones})


# @login_required
# def search_phone_post(request):
#     if request.method == 'POST':
#         phones = Phone.objects.get()
#         phones.koff = request.POST('r')
#         phones.save()
#         message = 'updated'
#     return HttpResponse(message)


# @login_required
# def create_phone(request):
#     if request.method == 'POST':
#         form = PhoneCreateForm(data=request.POST, instance=request.phone)
#         if form.is_valid():
#             form.save()
#             return redirect('phone/list')
#     else:
#         form = PhoneCreateForm(instance=request.phone)
#     return render(request, 'phone/create.html', {'form': form})
