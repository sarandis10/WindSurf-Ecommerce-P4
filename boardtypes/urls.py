from django.urls import path
from .views import BoardTypeListView

urlpatterns = [
    path('', BoardTypeListView.as_view())
]