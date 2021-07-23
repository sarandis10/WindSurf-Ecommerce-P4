from django.urls import path
from .views import BoardListView, BoardOneView, DeleteWindsurf

urlpatterns = [
    path('',BoardListView.as_view()),
    path('<int:pk>/', BoardOneView.as_view()),
    path('<int:pk>/del', DeleteWindsurf.as_view())
]