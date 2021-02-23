import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';

function RenderDish({dish}){
    if (dish!=null){
        return(
            <div className="col-12 col-md-5 m-1">
            <Card>
            <CardImg width='100%' src={dish.image} alt={dish.name} />
            <CardTitle className="font-weight-bold">{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
            </Card>
        </div>
        );
    }else return (<div></div>);
}

function RenderComments({comments}){
    if (comments!=null){
        return(
            <div className="col-12 col-md-5 m-1">
                <h4 className='font-weight-bold'>Comments</h4>
                {comments.map(comment=>{
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
                })}              
            </div>
        );
    }else return (<div></div>);
}

const DishDetail=(props)=>{
    if (props.dish!=null){
        return (
            <div className='container'>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.dish.comments} />
                </div>
            </div>
        );
    }else return <div></div>;
}

export default DishDetail;