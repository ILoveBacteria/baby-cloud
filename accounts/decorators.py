from django.http import HttpResponseForbidden


def disable_view(view):
    """Decorator for views that temporarily has been disabled."""
    def decorator(*args, **kwargs) -> HttpResponseForbidden:
        return HttpResponseForbidden()
    return decorator
