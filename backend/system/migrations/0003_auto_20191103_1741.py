# Generated by Django 2.2.6 on 2019-11-03 09:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('system', '0002_auto_20191103_1732'),
    ]

    operations = [
        migrations.AlterField(
            model_name='developer',
            name='e_id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='manager',
            name='e_id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='pbi',
            name='pbi_id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='project',
            name='p_id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='task',
            name='task_id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
