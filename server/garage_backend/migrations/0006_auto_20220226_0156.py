# Generated by Django 3.2 on 2022-02-26 01:56

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('garage_backend', '0005_alter_service_servicedate'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='serviceDate',
            field=models.DateTimeField(default=datetime.datetime(2022, 2, 26, 1, 56, 37, 367968, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='service',
            name='vehicle',
            field=models.ForeignKey(db_column='vehicle_id', on_delete=django.db.models.deletion.CASCADE, related_name='services', related_query_name='service', to='garage_backend.vehicle'),
        ),
        migrations.AlterField(
            model_name='shop',
            name='user',
            field=models.ForeignKey(db_column='user_id', on_delete=django.db.models.deletion.CASCADE, related_name='shops', related_query_name='shop', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='vehicle',
            name='user',
            field=models.ForeignKey(db_column='user_id', on_delete=django.db.models.deletion.CASCADE, related_name='vehicles', related_query_name='vehicle', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='vehiclenote',
            name='vehicle',
            field=models.ForeignKey(db_column='vehicle_id', on_delete=django.db.models.deletion.CASCADE, related_name='vehicle_notes', related_query_name='vehicle_note', to='garage_backend.vehicle'),
        ),
    ]
