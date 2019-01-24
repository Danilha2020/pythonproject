from flask import Flask, url_for, render_template
from repository import shop

app = Flask(__name__)


def generate_links():
    with app.test_request_context():
        misha_the_great_link = url_for(
            'hello_user',

        )
        danil_the_great_link = url_for(
            'hello_user',

        )
        index_link = url_for('index')



        links = {


        }

    return links


@app.route('/')
def index():
    links = generate_links()

    categories = shop.find_all_categories()
    slides = list()
    for x in categories:
        slide = {
        'category_id': x.get('id'),
        'heading': x.get('title'),
        'image_title': x.get('title'),
        'subheading': x.get('description'),
        'image_src': x.get('image_url')
        }
        slides.append(slide)

    return render_template('index.html', links=links, slides=slides)

@app.route('/cart')
def cart():
    links = generate_links()
    return render_template(
        'basket.html',
        links=links,
    )



@app.route('/user')
def hello_user(username=None):
    links = generate_links()
    return render_template(
        'user.html',
        username=username,
        links=links,
    )

@app.route('/category')
def category_page(username=None):
    links = generate_links()
    return render_template(
        'category.html',
        username=username,
        links=links
    )


if __name__ == '__main__':
    app.run('0.0.0.0', debug=True)
