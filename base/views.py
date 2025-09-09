from django.shortcuts import render,redirect
from django.http import HttpResponse
from .models import Room, RoomType, Feature, Booking, Guest 
from .forms import CustomUserCreationForm, BookingForm
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required





def home(request):
    room_types = RoomType.objects.all()
    rooms = Room.objects.all()

    room_types_count = room_types.count()
    context = {
        'room_types': room_types,
        'room_types_count': room_types_count,
        'rooms': rooms
    }
    return render(request, 'base/home.html', context)

def register_user(request):
    page = 'register'
    form = CustomUserCreationForm()
    if request.method == "POST":
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            redirect('home')
        else:
            print(form.errors)
        
    context ={
        'form': form,
        'page': page
    }

    return render(request, 'base/login_template.html', context)

def login_user(request):
    page = 'login'
    if request.method == "POST":
        username = request.POST.get('username')
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        password = request.POST.get('password')
        print(username,first_name, last_name, password)

        try:
            user = User.objects.get(username=username)
        except:
            messages.error(request, 'User does not exist')
        user = authenticate(request, username=username, password=password, first_name=first_name, last_name=last_name)

        if user is not None:
            login(request, user)
            redirect('home')
        else:
            messages.error(request, 'Username OR password is incorrect')
    context = {
        'page': page
    }


    return render(request, 'base/login_template.html', context)

def logout_user(request):
    return render(request, 'base/logout.html')


@login_required
def profile(request):
    user = request.user
    guest, created = Guest.objects.get_or_create(user=user)

    context = {
        'user': user,
        'guest': guest
    }
    return render(request, 'base/profile.html', context)

def logout_user(request):
    logout(request)
    return redirect('home')

def update_profile(request):
    user = request.user
    guest, created = Guest.objects.get_or_create(user=user)

    if request.method == "POST":
        user.first_name = request.POST.get('first_name')
        user.last_name = request.POST.get('last_name')
        user.email = request.POST.get('email')
        user.username = request.POST.get('username')
        guest.phone = request.POST.get('phone')
        guest.address = request.POST.get('address')

        user.save()
        guest.save()
        messages.success(request, 'Profile updated successfully')
        return redirect('profile')

    return render(request, 'base/profile_form.html')


def booking_room(request):
    form = BookingForm()
    if request.method == "POST":
        form = BookingForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Room booked successfully')
            return redirect('home')
    context = {
        'form': form
    }

    return render(request, 'base/booking_room.html', context)

def update_booking(request, pk):
    booking = Booking.objects.get(id=pk)
    form = BookingForm(instance = booking)
    if request.method == "POST":
        form = BookingForm(request.POST, instance=booking)
        if form.is_valid():
            form.save()
            messages.success(request, 'Booking updated successfully')
            return redirect('home')

    context = {
        'form': form
    }

    return render(request, 'base/booking_room.html', context)

def rooms(request):

    return render(request, 'base/hotelroom.html')


# Create your views here.
