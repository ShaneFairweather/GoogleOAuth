import React from 'react';
import { Card } from 'reactstrap';

const BlogDetail = ({post}) => {
    const {title, content, date} = post;
    return (
        <Card className="blog-detail">
            <div className="blog-detail__title">{title}</div>
            <div className="blog-detail__date">{date}</div>
            <div className="blog-detail__content">{content}</div>
        </Card>
    )
};

export default BlogDetail;