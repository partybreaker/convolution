from django.contrib import admin
from .models import Cam, CPU, ROM, Manufacture, Screen, Coefficient, Battary, Phone, Price


# Register your models here.
class CamAdmin(admin.ModelAdmin):
    list_display = ('name',)


admin.site.register(Cam, CamAdmin)


class CPUAdmin(admin.ModelAdmin):
    list_display = ('name',)


admin.site.register(CPU, CPUAdmin)


class ROMAdmin(admin.ModelAdmin):
    list_display = ('name',)


admin.site.register(ROM, ROMAdmin)


class ManufactureAdmin(admin.ModelAdmin):
    list_display = ('name',)


admin.site.register(Manufacture, ManufactureAdmin)


class ScreenAdmin(admin.ModelAdmin):
    list_display = ('name', )


admin.site.register(Screen, ScreenAdmin)


class CoefficientAdmin(admin.ModelAdmin):
    list_display = ('coeff', )


admin.site.register(Coefficient, CoefficientAdmin)


class BattaryAdmin(admin.ModelAdmin):
    list_display = ('name', )


admin.site.register(Battary, BattaryAdmin)

admin.site.register(Phone)


class PriceAdmin(admin.ModelAdmin):
    list_display = ('value',)


admin.site.register(Price, PriceAdmin)
