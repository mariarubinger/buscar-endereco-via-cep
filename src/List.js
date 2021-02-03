/* import React from 'react';

class List extends React.Component {
    state = {
        linguagens: []
    };

    componentDidMount() {
        fetch('http://alefesouza.dev/api/languages.php')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    linguagens: res
                });
            });
    }

    render() {
        return (
            <div>
                <h1>Lista de linguagens</h1>

                <ul>
                    {this.state.linguagens.map(item => (
                        <li key={item.id}>
                            <p><b>Nome:</b> {item.name}</p>
                            <p><b>Criador:</b> {item.creator}</p>
                            <p><b>Ano de criação:</b> {item.year}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default List; */