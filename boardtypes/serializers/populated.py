from .common import BoardTypeSerializer
from boards.serializers.common import BoardSerializer

class PopulatedBoardTypeSerializer(BoardSerializer):
    boardtype = BoardTypeSerializer(many=True)
