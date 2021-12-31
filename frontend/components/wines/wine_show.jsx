import React from 'react';

export default class WineShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            title: "",
            body: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount(){
        this.props.fetchWines(this.props.match.params.wineId);
        this.props.fetchTastingNotes()
    }

    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value})
        }
    }

    handleSubmit(e){
        e.preventDefault();
        let tasting_note = {
            username: this.state.username,
            title: this.state.title,
            body: this.state.body,
            wine_id: this.props.wine.id
        }

        this.props.createTastingNote(tasting_note)
            .then(() => this.props.fetchTastingNotes());
        this.setState({username: "", title: "", body: ""})
    }

    handleDelete(tasting_noteId){
        this.props.deleteTastingNote(tasting_noteId);
    }

    render(){
        console.log(this.props.tasting_notes);

        if(!this.props.wine){
            return null;
        }

        return (
            <div className="splash">
                <div className="splash-slogan">
                    <div className="slogan">{this.props.wine.wine_full} Wine</div>
                </div>
                <div className='tasting-notes-list'>
                <ul className="tasting-notes-ul">
                    {this.props.tasting_notes.map(tasting_note => 
                        <li key={tasting_note.id}>
                            <div className='sub-header'>
                                <div className="username">
                                    Username:&nbsp; <b>{tasting_note.username}</b>
                                </div>
                                <div className='sub-header-comment'>Tasting Note: {tasting_note.body}</div>
                            </div>
                            <div className='sub-header-title'>Title: {tasting_note.title}</div>
                            <div className='sub-header-delete'>
                                <button className="delete-button" onClick={() => this.handleDelete(tasting_note.id)}>Delete</button>
                            </div>
                        </li>)}
                </ul>
                <form className="tasting-note-form" onSubmit={this.handleSubmit}>
                    <lable className="tasting-note-name">Username: </lable>
                    <input className="tasting-note-input" type="text" placeholder="Username" value={this.state.username} onChange={this.update("username")}/>
                    <lable className="tasting-note-name">Title: </lable>
                    <input className="tasting-note-input" type="text" placeholder="Wine Name" value={this.state.title} onChange={this.update("title")}/>
                    <br/>
                    <lable className="tasting-note-name">Body: </lable>   
                    <br/>
                    <textarea className="textarea-input" rows="4" cols="53" placeholder="Comment Here" value={this.state.body} onChange={this.update("body")}/>
                    <br/>
                    <button className="tasting-note-button">Submit</button>
                </form>
                </div>
            </div>
        )
    }
}