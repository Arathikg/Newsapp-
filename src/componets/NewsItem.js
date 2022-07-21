import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;

    return (
      <div className=" my-3">
        this is a newsitem
        <div className="card" style={{ width: " 18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text"> {description}...</p>
            <a href={newsUrl} target="_blank" className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
        
      </div>

    );
  }
}

export default NewsItem;
/* whener we make class in js we make use of a constructor 
constructor(){
super class ke constructor ko call karna is neceessary--super();
constructor runs everytime jab woh class ka object bantha hai 
 {/*for js u wil have to make this style as an object as u remb and an object has key value pairs so ,
                    altho i didnt understand why do brackets hai
}
{
      array destruccing hua hai yaha so here this object is broken down as u see */
