from django.db import models
import decimal

#
#


class Coefficient(models.Model):
    coeff = models.DecimalField(max_length=30, max_digits=10, decimal_places=5)

    def __str__(self):
        return str(self.coeff)

    @property
    def get_coeff(self):
        return self.coeff

    class Meta:
        verbose_name = 'Коэффициент'
        verbose_name_plural = 'Коэффициенты'


class Cam(models.Model):
    name = models.CharField(max_length=10)
    coefficient = models.ForeignKey(Coefficient, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Камера'
        verbose_name_plural = 'Камера'

    @property
    def get_cam_coefficient(self):
        return self.coefficient.get_coeff


class Manufacture(models.Model):
    name = models.CharField(max_length=60)
    coefficient = models.ForeignKey(Coefficient, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    @property
    def get_manufacture(self):
        return self.name

    @property
    def get_manufacture_coeff(self):
        return self.coefficient.get_coeff

    class Meta:
        verbose_name = 'Производитель'
        verbose_name_plural = 'Производитель'


class Battary(models.Model):
    name = models.CharField(max_length=10)
    coefficient = models.ForeignKey(Coefficient, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    @property
    def get_battary(self):
        return self.name

    @property
    def get_battary_coefficient(self):
        return self.coefficient.get_coeff

    class Meta:
        verbose_name = 'Батарея'
        verbose_name_plural = 'Батарея'


class Screen(models.Model):
    name = models.CharField(max_length=10)
    coefficient = models.ForeignKey(Coefficient, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    @property
    def get_screen(self):
        return self.name

    @property
    def get_screen_coefficient(self):
        return self.coefficient.get_coeff

    class Meta:
        verbose_name = 'Экран'
        verbose_name_plural = 'Экран'


class CPU(models.Model):
    name = models.CharField(max_length=14)
    coefficient = models.ForeignKey(Coefficient, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    @property
    def get_cpu(self):
        return self.name

    @property
    def get_cpu_coefficient(self):
        return self.coefficient.get_coeff

    class Meta:
        verbose_name = 'Процессор'
        verbose_name_plural = 'Процессор'


class ROM(models.Model):
    name = models.CharField(max_length=10)
    coefficient = models.ForeignKey(Coefficient, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    @property
    def get_rom(self):
        return self.name

    @property
    def get_rom_coefficient(self):
        return self.coefficient.get_coeff

    class Meta:
        verbose_name = 'Оперативная память'
        verbose_name_plural = 'Оперативная память'


class Price(models.Model):
    value = models.DecimalField(max_length=30, max_digits=10, decimal_places=5)
    coefficient = models.ForeignKey(Coefficient, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.value)

    @property
    def get_price(self):
        return self.value

    @property
    def get_price_coefficient(self):
        return self.coefficient.get_coeff

    class Meta:
        verbose_name = 'Цена'
        verbose_name_plural = 'Цена'


class Phone(models.Model):
    manufacture = models.ForeignKey(Manufacture, on_delete=models.CASCADE)
    cpu = models.ForeignKey(CPU, on_delete=models.CASCADE)
    rom = models.ForeignKey(ROM, on_delete=models.CASCADE)
    screen = models.ForeignKey(Screen, on_delete=models.CASCADE)
    cam = models.ForeignKey(Cam, on_delete=models.CASCADE)
    battary = models.ForeignKey(Battary, on_delete=models.CASCADE)
    price = models.ForeignKey(Price, on_delete=models.CASCADE)
    image = models.ImageField()
    # koff = models.DecimalField(max_length=30, max_digits=10, decimal_places=5)

    def __str__(self):
        return 'Телефон {} {} {} {} {} {} {}'.format(self.manufacture,
                                                     self.cpu, self.rom,
                                                     self.screen,
                                                     self.cam,
                                                     self.battary,
                                                     self.price)

    @property
    def get_sum_coeff(self):
        return self.manufacture.get_manufacture_coeff \
            + self.cpu.get_cpu_coefficient \
            + self.rom.get_rom_coefficient \
            + self.screen.get_screen_coefficient + \
            self.cam.get_cam_coefficient + \
            self.battary.get_battary_coefficient + \
            self.price.get_price_coefficient

    class Meta:
        verbose_name = 'Мобильный телефон'
        verbose_name_plural = 'Мобильный телефон'



# class Image(models.Model):
#     phone = models.ForeignKey(Phone, on_delete=models.CASCADE)
#     image = models.ImageField()
