import { Component } from "react";
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';
class DishDetail extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        const dish=this.props.dish;
        if (dish!=null){
            const comments=this.props.dish.comments.map((comment)=>{
                return(
                    <div key={comment.id}>
                        <CardText>{comment.comment}</CardText>
                        <CardText className='mb-2'>-- {comment.author}, {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit"
                    }).format(new Date(Date.parse(comment.date)))}</CardText>
                    </div>
                );
            });
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                        <CardImg width='100%' src={dish.image} alt={dish.name} />
                        <CardBody className="font-weight-bold">{dish.name}</CardBody>
                        <CardBody>{dish.description}</CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                        <CardTitle className='font-weight-bold'>Comments</CardTitle>
                        {comments}
                        </Card>
                    </div>
                </div>
            );
        }else{
            return (
                <div></div>
            );
        }
    }
}
export default DishDetail;