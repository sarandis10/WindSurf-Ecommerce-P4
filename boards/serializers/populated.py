from comments.serializers.common import CommentSerializer
from .common import BoardSerializer

class PopulatedWindsurfSerializer(BoardSerializer):
    comments = CommentSerializer(many=True)
    