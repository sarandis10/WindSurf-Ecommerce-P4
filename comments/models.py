from django.db import models

# Create your models here.

class Comment(models.Model):
    text = models.TextField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    board = models.ForeignKey(
        "boards.Board",
        related_name= "comments",
        on_delete= models.CASCADE
    )



    def __str__(self):
        return f"{self.text}"
