# Generated by Django 2.2.13 on 2020-08-30 09:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('subscriber', '0003_subscriber_source_subscribed'),
    ]

    operations = [
        migrations.AddField(
            model_name='subscriber',
            name='contacted',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='subscriber',
            name='note_internal_use',
            field=models.TextField(blank=True),
        ),
    ]