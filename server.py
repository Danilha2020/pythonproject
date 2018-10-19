from flask import Flask, url_for, render_template
app = Flask(__name__) # __main__


@app.route('/')
def index() :
    with app.test_request_context():
        link = url_for('hello_user',username='Danil is host')

    return render_template('index.html',link=link)


@app.route('/user/')
@app.route('/user/<username>')
def hello_user(username=None):
    numbers = [1,2,3,4,5,6,7,8,9,0]
    return render_template(
            'user.html',
            username=username,
            numbers=numbers
    )

if __name__ == '__main__':
    app.run('0.0.0.0', debug=True)



