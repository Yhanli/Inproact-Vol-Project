# Generated by Django 2.2.13 on 2020-08-16 04:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0012_auto_20200810_1145'),
    ]

    operations = [
        migrations.AddField(
            model_name='websitemain',
            name='arrowdown_image',
            field=models.FileField(blank=True, upload_to='website_main/'),
        ),
    ]
