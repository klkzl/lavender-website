import React from 'react';

const articleItems = [
    {
        title: 'Duis iaculis purus',
        date: '19-05-2018',
        content: 'Pellentesque hendrerit tortor eget ligula gravida mattis. Fusce non tellus eget elit lobortis feugiat. Maecenas rhoncus rutrum felis, quis pretium lectus egestas vel. Curabitur ut diam ornare, euismod urna ut, vulputate turpis. Vivamus diam sapien, convallis vel tellus tempor, congue volutpat erat. Aenean tempor in odio quis ultricies. Mauris eu leo aliquam, molestie purus quis, luctus odio. Duis dictum volutpat ex, eget lobortis nunc scelerisque vitae.'
    },
    {
        title: 'Proin porta',
        date: '07-07-2018', 
        content: 'Quisque non ante vitae tellus egestas elementum sed sit amet arcu. Vestibulum ac vulputate turpis, id pretium eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie a nisi at fringilla. Nulla dui dolor, mollis ut enim suscipit, aliquam elementum leo. Suspendisse ut arcu ac purus aliquam tempus. Morbi pellentesque diam ac pellentesque accumsan. Duis varius efficitur tincidunt. Vestibulum mi mi, ultrices id porttitor suscipit, convallis vel metus. Suspendisse egestas sagittis diam sit amet fermentum. '
    }, {
        title: 'Duis dictum volutpat ex',
        date: '11-08-2018',
        content: 'Nunc ac gravida ipsum, quis faucibus justo. Morbi sed ex sit amet ligula tincidunt fermentum vitae sed metus. Donec sapien velit, tincidunt nec volutpat nec, porta a urna. Aliquam in porta dui. Maecenas varius eros nec tortor scelerisque, vel congue dolor egestas. Aenean posuere eget lorem in congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis ac dapibus purus, eu semper nisl. '
    }
]

class Main extends React.Component {
    render() {
        return (
            <div className="content">
                <section>
                    <h2>Galeria</h2>
                    <p>Quisque non ante vitae tellus egestas elementum sed sit amet arcu. Vestibulum ac vulputate turpis, id pretium eros.</p>
                </section>
                <section>
                    <h2>Ostatnie wpisy</h2>
                    <div className="article-section">
                        {articleItems.map((el) => (
                            <article key={el.date.toString()}>
                                <div className="article-item">
                                    <p>{el.date}</p>
                                    <h3>{el.title}</h3>
                                    <p>{el.content}</p>
                                    <button>Read more</button>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        );
    }
}

export default Main;