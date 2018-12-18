from django import forms
from .models import Phone


class PhoneForm(forms.ModelForm):
    class Meta:
        model = Phone
        fields = ('manufacture', 'cpu', 'rom',
                  'screen', 'cam', 'battary', 'price', )


class PhoneCreateForm(forms.ModelForm):

    class Meta:
        model = Phone

        fields = "__all__"
