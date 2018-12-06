from django.contrib.auth.models import AbstractUser
from django.db import models
from phone.models import Phone
from django.dispatch import receiver
from django.db.models.signals import post_save
# import signals


class CustomUser(AbstractUser):
    pass

    def __str__(self):
        return self.email


class UserProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=40)
    # история рекомендуемых телефонов
    #phone = models.ForeignKey(Phone, on_delete=models.CASCADE)

    def __str__(self):
        return 'Пользователь {} {}'.format(self.first_name, self.last_name)

    class Meta:
        verbose_name = 'Профиль пользователя'
        verbose_name_plural = 'Профиль пользователя'


@receiver(post_save, sender=CustomUser)
def create_or_update_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)
    instance.userprofile.save()
