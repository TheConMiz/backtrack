# Generated by Django 2.2.6 on 2019-11-06 04:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('system', '0005_auto_20191106_0450'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pbi',
            name='project_id',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='project',
            name='manager_id',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='project',
            name='owner_id',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='task',
            name='pbi_id',
            field=models.IntegerField(),
        ),
    ]
