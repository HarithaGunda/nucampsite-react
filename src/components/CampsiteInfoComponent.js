import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

export class CampsiteInfo extends Component{
    renderCampsite(campsite){
        return (
            <div className="col-md-5 m-1">
                 <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    renderComments(comments){
        if (comments)
        {
            return (
                <span className="col-md-5 m-1">
                    <h4>Comments</h4>
                   {comments.map(comment => <div>{comment.text}
                                                 <br></br>
                                                 {'--'.concat((comment.author).concat(','))}
                                                 {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                                                 <br></br>
                                                 <br></br>
                                            </div>) 
                    }   
                </span>
            );
        }
        return <div/>;
    }
    render(){
        //if(!(this.props.campsite==null) && !(typeof this.props.campsite === 'undefined'))
        if(this.props.campsite)
            return <div className="row">{this.renderCampsite(this.props.campsite)}
                            {this.renderComments(this.props.campsite.comments)}
            </div>;
        return <div/>;
    }
}
