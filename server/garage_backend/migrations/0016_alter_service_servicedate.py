# Generated by Django 3.2 on 2022-02-23 06:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('garage_backend', '0015_alter_service_note'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='serviceDate',
            field=models.DateField(default='February 23, 2022'),
        ),
    ]
