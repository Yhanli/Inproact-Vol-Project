# Generated by Django 2.2.13 on 2020-08-27 00:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('websitePages', '0019_ourbrand_page_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='ourbrand',
            name='section_1_content_paragraph',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='ourbrand',
            name='thread_title_1',
            field=models.CharField(blank=True, default=None, max_length=1000, null=True),
        ),
        migrations.AddField(
            model_name='ourbrand',
            name='thread_title_2',
            field=models.CharField(blank=True, default=None, max_length=1000, null=True),
        ),
        migrations.AddField(
            model_name='ourbrand',
            name='thread_title_3',
            field=models.CharField(blank=True, default=None, max_length=1000, null=True),
        ),
        migrations.AddField(
            model_name='ourbrand',
            name='thread_title_4',
            field=models.CharField(blank=True, default=None, max_length=1000, null=True),
        ),
    ]
