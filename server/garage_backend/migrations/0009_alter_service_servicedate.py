# Generated by Django 3.2 on 2022-02-26 07:51

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('garage_backend', '0008_alter_service_servicedate'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='serviceDate',
            field=models.DateField(default=datetime.datetime(2022, 2, 26, 7, 51, 26, 914191, tzinfo=utc)),
        ),
    ]