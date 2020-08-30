# Generated by Django 2.2.13 on 2020-08-18 11:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Subscriber',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active', models.BooleanField(default=True)),
                ('email_opt_out', models.BooleanField(default=False)),
                ('receive_feeds', models.BooleanField(default=False)),
                ('name', models.CharField(blank=True, max_length=250)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('phone', models.CharField(blank=True, max_length=250)),
                ('requested_contact', models.BooleanField(default=False)),
                ('preferred_contact_method', models.CharField(choices=[('ph', 'phone'), ('E', 'email')], default='E', max_length=1)),
            ],
        ),
    ]
