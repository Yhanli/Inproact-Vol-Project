# Generated by Django 2.2.13 on 2020-07-11 22:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aboutus', '0002_auto_20200711_2223'),
    ]

    operations = [
        migrations.AlterField(
            model_name='aboutus',
            name='logo',
            field=models.FileField(upload_to='static/'),
        ),
    ]
