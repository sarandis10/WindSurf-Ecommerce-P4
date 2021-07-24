from comments.serializers.common import CommentSerializer
from .common import BoardSerializer
from boardtypes.serializers.common import BoardTypeSerializer

class PopulatedWindsurfSerializer(BoardSerializer):
    comments = CommentSerializer(many=True)
    boardtype = BoardTypeSerializer(many=True)

