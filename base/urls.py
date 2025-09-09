from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('rooms/', views.rooms, name='rooms'),
    path('register/', views.register_user, name='register'),
    path('login/', views.login_user, name='login'),
    path('profile/', views.profile, name='profile'),
    path('update_profile/', views.update_profile, name='update_profile'),
    path('logout/', views.logout_user, name='logout'),
    path('book_a_room/', views.booking_room, name='book_a_room'),
    path('update_booking/<str:pk>/', views.update_booking, name='update_booking'),
]