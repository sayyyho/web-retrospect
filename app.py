import requests
from flask import Flask, request, render_template, redirect

app = Flask(__name__)

data = ["",""]

@app.route("/")
def home():
    user = data[0]
    data[0] = ""
    return render_template("index.html",user=user)

@app.route("/index")
def index():
    return render_template("index.html")

@app.route("/login/")
def login():
    code = request.args.get('code')
    state = request.args.get('state')
    error = request.args.get('error')
    error_description = request.args.get('error_description')
    print(f"{code}, {state}, {error}, {error_description}")

    res = requests.post(
        "https://kauth.kakao.com/oauth/token",
        data={
            "grant_type": "authorization_code",
            "client_id": "ec5ad0267ec5500511fd40d6fe705d43",
            "redirect_uri": "http://127.0.0.1:5000/login/",
            "code": code,
            "client_secret" : "laiht1JkWtUrg10sDiaD4xdcEDW02OO8"
        },
    )
    print(res)
    access_token = res.json()["access_token"]
    print(access_token)

    res = requests.post(
        "https://kapi.kakao.com/v2/user/me",
        headers={"Authorization": f"Bearer {access_token}"}
    )
    user = res.json()["properties"]["nickname"]
    email = res.json()["kakao_account"]["email"]
    data[0] = user
    data[1] = email
    return redirect("/") 

@app.route("/user")
def user_info():
    email = data[1]
    data[1] = ""
    print(email, "sdfdsf")
    return render_template("user.html", email = email)

@app.route("/content")
def view_content():
    return render_template("content.html")

@app.route("/post")
def view_posting():
    return render_template("post.html")

if __name__ == '__main__':
    app.run()