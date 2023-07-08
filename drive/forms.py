from django import forms


class UploadFileForm(forms.Form):
    path = forms.CharField(max_length=255)
    file = forms.FileField()
