import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

    function RenderCampsite({campsite}) {
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
    function RenderComments({comments}) {
        if (comments) {
            return (
                <span className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment => <div key={comment.id}>{comment.text}
                        <br></br>
                        {'--'.concat((comment.author).concat(','))}
                        {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                        <br></br>
                        <br></br>
                    </div>)
                    }
                </span>
            );
        }
        return <div />;
    }
    function CampsiteInfo(props) {
        //if(!(this.props.campsite==null) && !(typeof this.props.campsite === 'undefined'))
        if (props.campsite){
            return (
                <div className="container">
                <div className="row">
                    <RenderCampsite campsite={props.campsite}/>
                    <RenderComments comments={props.campsite.comments}/>
                </div>
                </div>
                );
        }
        return <div />;
    }
export default CampsiteInfo;