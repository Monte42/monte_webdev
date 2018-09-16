from django.conf.urls import url
from basic_app import views

app_name = 'basic_app'

urlpatterns = [
    url(r'^register/$',views.register,name="register"),
    url(r'^user_login/$',views.user_login,name='user_login'),
    url(r'^history/$',views.history,name='history'),
    url(r'^projects/$',views.projects,name='projects'),
    url(r'^connectfour/$',views.connectfour,name='connectfour'),
    url(r'^tictactoe/',views.tictactoe,name='tictactoe'),
]
