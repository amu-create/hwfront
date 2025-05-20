from django.shortcuts import render

def example_view(request):
    # You can pass context data to your template here
    context = {
        'message': 'Hello from the view!'
    }
    return render(request, 'example_template.html', context)