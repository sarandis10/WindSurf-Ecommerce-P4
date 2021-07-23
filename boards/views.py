from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound

from .models import Board
from .serializers import BoardSerializer

class BoardListView(APIView):
    def get(self,_request):
        windsurf = Board.objects.all()
        serialised_windsurfs=BoardSerializer(windsurf,many=True)
        return Response(serialised_windsurfs.data,status = status.HTTP_200_OK)

class BoardOneView(APIView):
    def check_board_exists(self, pk):
        try:
            print("111111")
            return Board.objects.get(pk=pk)
        except Board.DoesNotExist:
            print("333333333")
            raise NotFound(detail="🆘 Can't find that Board")

    def get(self, _request, pk):
        print("222222222")
        windsuf_board = self.check_board_exists(pk=pk)
        serialized_board = BoardSerializer(windsuf_board)
        return Response(serialized_board.data, status=status.HTTP_200_OK)