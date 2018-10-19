from flask import Flask, url_for, render_template
app = Flask(__name__) # __main__



def generate_links():
    with app.test_request_context():
        danil_is_host_link = url_for('hello_user',username='Danil is host')
        misha_the_great_link = url_for(
            'hello_user',
            username='Danil The Great'
        )
        index_link = url_for('index')

        links = (
            ("Danil's page", danil_is_host_link),
            ("Misha's page", misha_the_great_link),
            ('Index', index_link),
        )
        return links


@app.route('/')
def index() :
    links = generate_links()
    return render_template('index.html', links=links)



@app.route('/user/')
@app.route('/user/<username>')
def hello_user(username=None):
    links = generate_links()
    return render_template(
            'user.html',
            username=username,
            links=links
    )

if __name__ == '__main__':
    app.run('0.0.0.0', debug=True)


