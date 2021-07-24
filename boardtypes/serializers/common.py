from rest_framework import serializers
from ..models import BoardTypes


class BoardTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = BoardTypes
        fields = '__all__'