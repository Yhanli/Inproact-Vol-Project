# Generated by Django 2.2.13 on 2020-08-26 23:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('websitePages', '0015_auto_20200826_0418'),
    ]

    operations = [
        migrations.CreateModel(
            name='OurBrand',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cover_image', models.FileField(blank=True, upload_to='sidepages/aboutus/services')),
                ('button_name', models.CharField(blank=True, default=None, max_length=1000, null=True)),
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
                ('websitePages', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='websitePages.WebsitePages')),
            ],
            options={
                'verbose_name': 'Service',
                'verbose_name_plural': 'Service',
            },
        ),
    ]