from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound

from .models import Board
from .serializers.common import BoardSerializer
from .serializers.populated import PopulatedWindsurfSerializer

class BoardListView(APIView):
    def get(self,_request):
        windsurf = Board.objects.all()
        serialised_windsurfs=PopulatedWindsurfSerializer(windsurf,many=True)
        return Response(serialised_windsurfs.data,status = status.HTTP_200_OK)

    def post(self, request):
        board_to_add = BoardSerializer(data=request.data)
        if board_to_add.is_valid():
            board_to_add.save()
            return Response(board_to_add.data, status=status.HTTP_201_CREATED)
        return Response(board_to_add.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

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
        serialized_board = PopulatedWindsurfSerializer(windsuf_board)
        return Response(serialized_board.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        boards_to_alter = self.check_board_exists(pk=pk)
        updated_board =BoardSerializer(boards_to_alter, data= request.data)
        if updated_board.is_valid():
            updated_board.save()
            return Response(updated_board.data, status=status.HTTP_202_ACCEPTED)
        return Response (updated_board.errors,status=status.HTTP_422_UNPROCESSABLE_ENTITY)

wind=BoardOneView()

class DeleteWindsurf(APIView):
    def delete(self, _request, pk):
        # event = Windsurf.objects.get(pk=pk)
        event=wind.check_board_exists(pk=pk)
        event.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)