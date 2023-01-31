from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return render( request , "lecture3/practice_ml.html" )

def user_interfaces(request):
    return render(request , "lecture3/UI_base.html")



image_src = ["img/a.jpg",'img/b.jpg','img/c.jpg','img/d.jpg']
color_src = ["img/color/black.jpg","img/color/blue.jpg","img/color/red.jpg","img/color/star.jpg","img/color/yellow.jpg"]
clr = ["black","blue","red","star","yellow"]

lvl_info = [
    "for level 1"
]
#fun RPG page 
def rpg(request):
    return render(request , "fun/Base.html",{
        "imgs" : image_src ,"color" : color_src ,"name" :clr
    })

def fin(request):
    return render(request,'fun/centre.html',{
        "imgs" : image_src ,"color" : color_src ,"name" :clr
    })
def final(request):
    return render(request , 'final/arr.html',{
        "imgs" : image_src ,"color" : color_src ,"name" :clr
    })