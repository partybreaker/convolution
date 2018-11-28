from django.db import models


class ValueWeight(models.Model):
    value = models.DecimalField(max_digits=5, decimal_places=3)

    def __str__(self):
        return self.value


class Cam(models.Model):
    name = models.CharField(max_length=2)
    weight = models.ForeignKey(ValueWeight, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Камера'
        verbose_name_plural = 'Камера'


class Manufacture(models.Model):
    name = models.CharField(max_length=60)
    weight = models.ForeignKey(ValueWeight, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Производитель'
        verbose_name_plural = 'Производитель'


class Battary(models.Model):
    name = models.CharField(max_length=7)
    weight = models.ForeignKey(ValueWeight, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Батарея'
        verbose_name_plural = 'Батарея'


class Screen(models.Model):
    name = models.CharField(max_length=2)
    weight = models.ForeignKey(ValueWeight, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Экран'
        verbose_name_plural = 'Экран'


class CPU(models.Model):
    name = models.CharField(max_length=14)
    weight = models.ForeignKey(ValueWeight, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Процессор'
        verbose_name_plural = 'Процессор'


class ROM(models.Model):
    name = models.CharField(max_length=10)
    weight = models.ForeignKey(ValueWeight, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Оперативная память'
        verbose_name_plural = 'Оперативная память'


class Phone(models.Model):
    manufacture = models.ForeignKey(Manufacture, on_delete=models.CASCADE)
    cpu = models.ForeignKey(CPU, on_delete=models.CASCADE)
    rom = models.ForeignKey(ROM, on_delete=models.CASCADE)
    screen = models.ForeignKey(Screen, on_delete=models.CASCADE)
    cam = models.ForeignKey(Cam, on_delete=models.CASCADE)
    battary = models.ForeignKey(Battary, on_delete=models.CASCADE)

    def __str__(self):
        return 'Телефон {} {} {} {} {} {}, сохранен'.format(self.manufacture,
                                                            self.cpu, self.rom,
                                                            self.screen,
                                                            self.cam,
                                                            self.battary)



