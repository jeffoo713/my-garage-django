# Generated by Django 3.2 on 2022-02-23 17:54

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('garage_backend', '0020_vehiclenote'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='serviceDate',
            field=models.DateField(default=datetime.datetime(2022, 2, 23, 17, 54, 27, 513848, tzinfo=utc)),
        ),
    ]
