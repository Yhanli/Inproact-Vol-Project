# Generated by Django 2.2.13 on 2020-08-20 10:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cover_image', models.FileField(blank=True, upload_to='posts/')),
                ('title', models.CharField(max_length=1000)),
                ('content', models.TextField(blank=True)),
                ('end_note', models.TextField(blank=True)),
                ('disclaimer', models.TextField(blank=True)),
                ('post_type', models.CharField(choices=[('Ftd', 'Featured Post'), ('Suc', 'Success Post'), ('Col', 'Collaboration Post'), ('Sha', 'Share Post'), ('Edu', 'Educational Post'), ('Bus', 'Business Post'), ('Oth', 'Other Post')], default='Oth', max_length=1)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
