# Generated by Django 2.2.13 on 2020-08-08 21:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0007_auto_20200808_2058'),
    ]

    operations = [
        migrations.AddField(
            model_name='websitemain',
            name='section_1_subheading1',
            field=models.CharField(blank=True, max_length=1000),
        ),
        migrations.AddField(
            model_name='websitemain',
            name='section_1_subheading2',
            field=models.CharField(blank=True, max_length=1000),
        ),
        migrations.AddField(
            model_name='websitemain',
            name='section_2_subheading1',
            field=models.CharField(blank=True, max_length=1000),
        ),
        migrations.AddField(
            model_name='websitemain',
            name='section_2_subheading2',
            field=models.CharField(blank=True, max_length=1000),
        ),
        migrations.AddField(
            model_name='websitemain',
            name='section_3_subheading1',
            field=models.CharField(blank=True, max_length=1000),
        ),
        migrations.AddField(
            model_name='websitemain',
            name='section_3_subheading2',
            field=models.CharField(blank=True, max_length=1000),
        ),
    ]
