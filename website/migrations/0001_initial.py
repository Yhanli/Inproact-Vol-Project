# Generated by Django 2.2.13 on 2020-08-05 23:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='WebsiteMain',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('active', models.BooleanField(default=False)),
                ('site_name', models.CharField(blank=True, max_length=1000)),
                ('logo', models.FileField(upload_to='website_main/')),
                ('footer_title', models.CharField(max_length=1000)),
                ('footer_phrase', models.TextField(blank=True)),
                ('favicon', models.FileField(upload_to='website_main/')),
                ('facebook', models.CharField(blank=True, max_length=1000)),
                ('instagram', models.CharField(blank=True, max_length=1000)),
                ('twitter', models.CharField(blank=True, max_length=1000)),
                ('youtube', models.CharField(blank=True, max_length=1000)),
                ('linkedin', models.CharField(blank=True, max_length=1000)),
                ('section_1_title', models.CharField(blank=True, max_length=1000)),
                ('section_1_words', models.TextField(blank=True)),
                ('section_1_picture', models.ImageField(blank=True, upload_to='website_main/')),
                ('section_1_2_divider', models.CharField(blank=True, max_length=1000)),
                ('section_2_picture', models.ImageField(blank=True, upload_to='website_main/')),
                ('section_2_text_1_title', models.CharField(blank=True, max_length=1000)),
                ('section_2_text_1_paragraph', models.TextField(blank=True)),
                ('section_2_text_2_title', models.CharField(blank=True, max_length=1000)),
                ('section_2_text_2_paragraph', models.TextField(blank=True)),
                ('section_2_text_3_title', models.CharField(blank=True, max_length=1000)),
                ('section_2_text_3_paragraph', models.TextField(blank=True)),
                ('section_2_text_4_title', models.CharField(blank=True, max_length=1000)),
                ('section_2_text_4_paragraph', models.TextField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='LandingPictures',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('picture', models.ImageField(blank=True, upload_to='website_main/landing_corousel/')),
                ('pageId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='landing_images', to='website.WebsiteMain')),
            ],
        ),
    ]