import React from 'react';

const CommentsCard = ({commentInfo}) => {
    const {name, company, comment, img} = commentInfo;
    const imageDataType = typeof(img);
    return (
        <div className="col-sm-6 col-md-4 col-lg-4 mb-5">
            <div className="commentCard">
                <div className="commentCard-head">
                    {imageDataType === "object" && 
                        <img src={`data:image/png;base64,${img.img}`} alt={`${name}`} />
                    }
                    {imageDataType === "string" && 
                        <img src={img} style={{borderRadius: "50%"}} alt={`${name}`} />
                    }
                    <div className="commenter-Info">
                        <h4>{name}</h4>
                        <h5>{company}</h5>
                    </div>
                </div>
                <p>{comment}</p>
            </div>
        </div>
    );
};

export default CommentsCard;