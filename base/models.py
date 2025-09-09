from django.db import models
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError

# Create your models here.

class Guest(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=20, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    profile_image = models.ImageField(upload_to='guest_profiles/', blank=True, null=True)

    def __str__(self):
        return self.user.username
    

class Room(models.Model):
    room_number = models.CharField(max_length=10, unique=True)
    room_type = models.ForeignKey('RoomType', on_delete=models.CASCADE)
    room_picture = models.ImageField(upload_to='room_pics/', null=True)
    room_price = models.DecimalField(max_digits=10, decimal_places=2)
    bed_number = models.IntegerField()
    is_available = models.BooleanField(default=True)


    def clean(self):
        if self.room_type and not self.pk:
            existing_room = Room.objects.filter(room_type = self.room_type).count()
            if existing_room >= self.room_type.rooms_count:
                raise ValidationError(f"Cannot add more rooms of type {self.room_type.name}. Maximum limit reached.")
            
    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"Room {self.room_number} ({self.room_price})"


class RoomType(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    base_price = models.DecimalField(max_digits=10, decimal_places=2)
    max_guests = models.IntegerField()
    features = models.ManyToManyField('Feature', blank=True, related_name='room_types')
    rooms_count = models.IntegerField()
    image = models.ImageField(upload_to='room_type_pics/', null=True)

    def __str__(self):
        return self.name
    
    
class Feature(models.Model):
    name = models.CharField(max_length=100)
    icon = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.name


class Booking(models.Model):
    guest = models.ForeignKey('Guest', on_delete=models.CASCADE)
    room = models.ForeignKey('Room', on_delete=models.CASCADE)
    check_in = models.DateField()
    check_out = models.DateField()
    No_of_guests = models.IntegerField()
    status = models.CharField(max_length=20, choices=[
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('cancelled', 'Cancelled')
    ], default='pending')
    created_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.guest.user.username} | Room {self.room.room_number} | {self.check_in} - {self.check_out}"

    @property
    def nights_count(self):
        return (self.check_out - self.check_in).days
    



class AddOn(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    is_per_night = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.name} for {self.price} {'per night' if self.is_per_night else ''}"
