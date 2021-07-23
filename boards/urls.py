from django.urls import path
from .views import BoardListView, BoardOneView

urlpatterns = [
    path('',BoardListView.as_view()),
    path('<int:pk>/', BoardOneView.as_view())
]