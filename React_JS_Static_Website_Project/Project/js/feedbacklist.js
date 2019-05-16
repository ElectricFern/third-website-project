class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }

        this._inputElement.value = "";

        console.log(this.state.items);

        e.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key)   
        });

        this.setState({
            items: filteredItems
        });
    }

    render() {
        return (
            <div className="feedbackList">  
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a} 
                            placeholder="leave some feedback">
                        </input> 
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}
                            delete={this.deleteItem}/>
            </div>
        );
    }
}

class TodoItems extends React.Component {
    constructor(props) {
        super(props);

    this.createTasks = this.createTasks.bind(this);
    }

    createTasks(item) {
        return <li onClick={() => this.delete(item.key)}
                key={item.key}>{item.text}</li>
    }

    delete(key){
        this.props.delete(key);
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
        
        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
}


var destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <TodoList/>
    </div>,
    destination

);
