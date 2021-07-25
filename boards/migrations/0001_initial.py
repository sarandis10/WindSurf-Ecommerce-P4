# Generated by Django 3.2.5 on 2021-07-24 11:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('boardtypes', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Board',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('manufacturer', models.CharField(default=None, max_length=50)),
                ('make', models.CharField(default=None, max_length=50)),
                ('liters', models.PositiveIntegerField()),
                ('price', models.PositiveIntegerField()),
                ('new', models.BooleanField()),
                ('image', models.CharField(default=None, max_length=500)),
                ('boardtype', models.ManyToManyField(related_name='boards', to='boardtypes.BoardTypes')),
            ],
        ),
    ]
