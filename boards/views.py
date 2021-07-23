from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Board
from .serializers import BoardSerializer

class BoardListView(APIView):
    def get(self,_request):
        windsurf = Board.objects.all()
        serialised_windsurfs=BoardSerializer(windsurf,many=True)
        return Response(serialised_windsurfs.data,status = status.HTTP_200_OK)