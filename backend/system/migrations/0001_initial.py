# Generated by Django 2.2.6 on 2019-10-25 07:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PBI',
            fields=[
                ('pbi_id', models.IntegerField(primary_key=True, serialize=False)),
                ('project_id', models.IntegerField()),
                ('name', models.CharField(max_length=30)),
                ('desc', models.CharField(max_length=100)),
            ],
        ),
    ]