from django.contrib import admin
from .models import Guest, Room, RoomType, Feature, Booking

# Register your models here.
admin.site.register(Guest)
admin.site.register(Room)
admin.site.register(RoomType)
admin.site.register(Feature)
admin.site.register(Booking)


