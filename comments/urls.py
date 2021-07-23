from django.urls import path
from .views import CommentListView, CommentDeleteView

urlpatterns = [
    path('', CommentListView.as_view()),
    path('<int:pk>/', CommentDeleteView.as_view()),

]