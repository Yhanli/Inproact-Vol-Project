# Generated by Django 2.2.13 on 2020-08-27 00:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('websitePages', '0018_auto_20200826_2359'),
    ]

    operations = [
        migrations.AddField(
            model_name='ourbrand',
            name='page_name',
            field=models.CharField(blank=True, default=None, max_length=1000, null=True),
        ),
    ]
