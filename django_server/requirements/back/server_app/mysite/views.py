from django.http import JsonResponse

def hello(request):
	if request.method == "GET":
		return JsonResponse(
			{
				"result" : "hello"
			}
		)
	else:
		return JsonResponse(
			{
				"result" : "fail"
			}
		)