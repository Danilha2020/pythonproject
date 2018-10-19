from flask import Flask, url_for
app = Flask(__name__) # __main__


@app.route('/')
def index() :
    return("Hello world!")


@app.route('/user/<path:username>')
def hello_user(username):
    return "Hello %s" % username


with app.test_request_context():
    print("http://localhost" + url_for('hello_user', username='Danil host'))

if __name__ == '__main__':
    app.run('0.0.0.0', debug=True)



