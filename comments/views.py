from .serializers.common import CommentSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from.serializers.common import CommentSerializer
from rest_framework.exceptions import NotFound
from comments.models import Comment

class CommentListView(APIView):
    def post(self, request):
        comment_created = CommentSerializer(data=request.data)
        if comment_created .is_valid():
            comment_created .save()
            return Response(comment_created .data, status=status.HTTP_201_CREATED)
        return Response(comment_created .errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def get(self,_request):
        windsurf = Comment.objects.all()
        serialised_windsurfs=CommentSerializer(windsurf,many=True)
        return Response(serialised_windsurfs.data,status = status.HTTP_200_OK)


class CommentDeleteView(APIView):

    def delete(self, _request, pk):
        try:
            comment_to_delete = Comment.objects.get(pk=pk)
        except Comment.DoesNotExist:
            raise NotFound(detail="Comment not found")
        comment_to_delete.delete() # delete from table
        return Response(status=status.HTTP_204_NO_CONTENT)
