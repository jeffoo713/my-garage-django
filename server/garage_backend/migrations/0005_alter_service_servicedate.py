# Generated by Django 3.2 on 2022-02-24 23:16

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('garage_backend', '0004_auto_20220224_0638'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='serviceDate',
            field=models.DateTimeField(default=datetime.datetime(2022, 2, 24, 23, 16, 15, 54711, tzinfo=utc)),
        ),
    ]
