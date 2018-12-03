from django import signals
from .models import CustomUser, UserProfile


@receiver(post_save, sender=CustomUser)
def create_profile_for_user(sender, instance=None, created=False, **kwargs):
    if created:
        UserProfile.objects.get_or_create(user=instance)
