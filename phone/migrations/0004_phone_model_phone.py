# Generated by Django 2.1.4 on 2018-12-19 14:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('phone', '0003_auto_20181214_1402'),
    ]

    operations = [
        migrations.AddField(
            model_name='phone',
            name='model_phone',
            field=models.CharField(default='asd', max_length=120),
            preserve_default=False,
        ),
    ]