from rest_framework import generics
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from django.views.decorators.cache import never_cache
from django.views.decorators.csrf import ensure_csrf_cookie
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

from .models import Account
from .serializers import AccountSerializer


class AccountList(generics.ListCreateAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

    def list(self, request):
        queryset = self.get_queryset()
        serializer = AccountSerializer(queryset, many=True)
        return Response(dict(data=serializer.data))


@api_view(['GET', 'PUT'])
@csrf_exempt
def account(request, pk):
    try:
        account =Account.objects.get(pk=pk)
    except Account.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = AccountSerializer(account)
        return Response(dict(data=serializer.data))

    if request.method == 'PUT':
        data=JSONParser().parse(request)
        serializer=AccountSerializer(account, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(dict(data=serializer.data))
        return JsonResponse(serializer.errors, status=400)