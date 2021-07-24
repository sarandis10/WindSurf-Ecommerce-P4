import rest_framework


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers.populated import PopulatedBoardTypeSerializer
from .models import BoardTypes

class BoardTypeListView(APIView):
    def get(self, _request):
        boardtype = BoardTypes.objects.all()
        ser_boardTypes = PopulatedBoardTypeSerializer(boardtype, many=True)
        return Response(ser_boardTypes.data, status=status.HTTP_200_OK)