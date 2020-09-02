import React from 'react';
class NameCard extends React.Component{
    render(){
        const {name,number,isHuman,tags} = this.props;
        return (
            <div className="alert alert-success">
                <h4 className="alert-heading">{name}</h4>
                <ul>
                    <li>电话：{number}</li>
                    <li>{isHuman ? '人类' : '外星生物'}</li>
                </ul>
                <p className="badge badge-pill badge-primary">
                    {tags.map(
                        (tag,index)=>(
                            <span key={index}>{tag}</span>
                        )
                    )}
                </p>
            </div>
        )
    }
}
export default NameCard;