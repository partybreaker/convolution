from django.contrib import admin
from .models import Cam, CPU, ROM, Manufacture, Screen, Coefficient, Battary, Phone, Price


# Register your models here.
class CamAdmin(admin.ModelAdmin):
    list_display = ('name', 'get_cam_coeff',)

    def get_cam_coeff(self, object):
        return object.coefficient
    get_cam_coeff.short_description = 'Коэффициент'


admin.site.register(Cam, CamAdmin)


class CPUAdmin(admin.ModelAdmin):
    list_display = ('name', 'get_cpu_coeff', )

    def get_cpu_coeff(self, object):
        return object.coefficient
    get_cpu_coeff.short_description = 'Коэффициент'


admin.site.register(CPU, CPUAdmin)


class ROMAdmin(admin.ModelAdmin):
    list_display = ('name', 'get_rom_coeff',)

    def get_rom_coeff(self, object):
        return object.coefficient
    get_rom_coeff.short_description = 'Коэффициент'


admin.site.register(ROM, ROMAdmin)


class ManufactureAdmin(admin.ModelAdmin):
    list_display = ('name', 'get_manf_coeff',)

    def get_manf_coeff(self, object):
        return object.coefficient
    get_manf_coeff.short_description = 'Коэффициент'


admin.site.register(Manufacture, ManufactureAdmin)


class ScreenAdmin(admin.ModelAdmin):
    list_display = ('name', 'get_screen_coeff',)

    def get_screen_coeff(self, object):
        return object.coefficient
    get_screen_coeff.short_description = 'Коэффициент'


admin.site.register(Screen, ScreenAdmin)


class CoefficientAdmin(admin.ModelAdmin):
    list_display = ('coeff', )


admin.site.register(Coefficient, CoefficientAdmin)


class BattaryAdmin(admin.ModelAdmin):
    list_display = ('name', 'get_batt_coeff', )

    def get_batt_coeff(self, object):
        return object.coefficient
    get_batt_coeff.short_description = 'Коэффициент'


admin.site.register(Battary, BattaryAdmin)


# class InlineImage(admin.TabularInline):
#     model = Image


# class PhoneAdmin(admin.ModelAdmin):
#     inlines = [InlineImage]
class PhoneAdmin(admin.ModelAdmin):
    fields = ('manufacture', 'cpu', 'rom', 'screen', 'cam', 'battary', 'price', 'image',)

    # def get_image(self, object):
    #     return mark_safe('<img src="{url}" width="{width}" height={height} />'.format(
    #         url=object.image.url,
    #         width=object.image.width,
    #         height=object.image.height,
    #     )
    #     )

    # def get_price(self, object):
    #     return object.price


admin.site.register(Phone, PhoneAdmin)


class PriceAdmin(admin.ModelAdmin):
    list_display = ('value', 'get_price_coeff',)

    def get_price_coeff(self, object):
        return object.coefficient
    get_price_coeff.short_description = 'Коэффициент'


admin.site.register(Price, PriceAdmin)
