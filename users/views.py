from django.shortcuts import render
# from django.contrib.auth.decorators import login_required
from .forms import UserProfileForm, UpdateProfileForm
from .models import UserProfile
from django.contrib.auth.decorators import login_required


@login_required
def view_profile(request):
    profile = request.user.userprofile
    return render(request, 'account/profile/view.html', {'profile': profile})


@login_required
def edit_profile(request):
    if request.method == 'POST':
        form = UpdateProfileForm(
            data=request.POST, instance=request.user.userprofile)
        if form.is_valid():
            form.save()
            return redirect('profile')
    else:
        form = UpdateProfileForm(instance=request.user.userprofile)
    return render(request, 'account/profile/edit.html', {'form': form})

    # if request.method == 'POST':
    #     form = UserProfileForm(
    #         data=request.POST, instanse=request.user.userprofile)
    #     if form.is_valid():
    #         form.save()
    #         return redirect('profile')
    # else:
    #     form = UserProfileForm(instanse=request.user.userprofile)
    # return render(request, 'account/profile/view.html', {'form': form})
