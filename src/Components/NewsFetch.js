import React from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const NewsFetch = (props) => {
    let {title,description,imageUrl,newsUrl} = props;
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={!imageUrl?"https://images.wsj.net/im614905/social":imageUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text> 
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </Card.Body>
      </Card>
    )
  
}

export default NewsFetch