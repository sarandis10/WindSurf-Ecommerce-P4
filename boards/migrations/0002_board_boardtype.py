# Generated by Django 3.2.5 on 2021-07-24 08:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('boardtypes', '0001_initial'),
        ('boards', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='board',
            name='boardtype',
            field=models.ManyToManyField(related_name='boards', to='boardtypes.BoardTypes'),
        ),
    ]