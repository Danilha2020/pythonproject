from flask import Flask, url_for, render_template
app = Flask(__name__) # __main__



def generate_links():
    with app.test_request_context():
        danil_is_host_link = url_for('hello_user',username='В ближайшем обновлении')
        misha_the_great_link = url_for(
            'hello_user',
            username='Скоро добавим'
        )
        index_link = url_for('index')
        index_with_params_link = url_for(
            'index',
            param1='param1',
            param2='param2'
        )

        links = {
            "Каталог": danil_is_host_link,
            "Новости": misha_the_great_link,
            'Корзина': index_link,
            'Тех.поддержка': index_with_params_link,
        }
        return links


@app.route('/')
def index() :
    links = generate_links()
    slides = [
        {
          'image_src':'http://www.vokrugsveta.ru/img/cmn/2013/05/06/005.jpg',
          'image_title': 'Image title',
          'heading':'Посмотрите природу Турции',
          'subheading': 'Тайланд',
        },
        {
            'image_src':'https://ejourney.ru/files/img/2013/01/kogda_luchshe_ehat_v_egipet_0.jpg',
            'image_title': 'Image 2 title',
            'heading': 'Посмотрите природу Египта',
            'subheading': 'Заказ билетов у нас!',
        },
        {
            'image_src': 'https://well.ru/upload/uf/ba4/15.jpg',
            'image_title': 'Image 3 title',
            'heading': 'Посмотрите природу Тайланда',
            'subheading': 'заказ билетов у нас!',
        },
        {
            'image_src': 'https://wallpaperstudio10.com/static/wpdb/wallpapers/3840x2160/171847.jpg',
            'image_title': 'Image 4 title',
            'heading': 'Посмотрите природу Мальдив',
            'subheading': 'заказ билетов у нас!',
        }
    ]
    return render_template('index.html', links=links, slides=slides)



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



