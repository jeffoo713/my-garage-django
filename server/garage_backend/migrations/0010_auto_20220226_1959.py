# Generated by Django 3.2 on 2022-02-26 19:59

import datetime
from django.db import migrations, models
import django.db.models.deletion
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('garage_backend', '0009_alter_service_servicedate'),
    ]

    operations = [
        migrations.AlterField(
            model_name='parts',
            name='service',
            field=models.ForeignKey(db_column='service_id', on_delete=django.db.models.deletion.CASCADE, related_name='parts', related_query_name='part', to='garage_backend.service'),
        ),
        migrations.AlterField(
            model_name='service',
            name='serviceDate',
            field=models.DateField(default=datetime.datetime(2022, 2, 26, 19, 59, 43, 939121, tzinfo=utc)),
        ),
    ]
