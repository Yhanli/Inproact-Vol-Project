# Generated by Django 2.2.13 on 2020-08-26 00:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('websitePages', '0009_auto_20200826_0022'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contactustickboxitems',
            name='websitePagesID',
        ),
    ]
