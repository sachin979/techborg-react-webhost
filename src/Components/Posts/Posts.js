import React from 'react';


import './Post.css';

function Posts() {

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Acticles</span>
            <span><button className='list1'>View more</button></span>
        </div>
        <div className="cards">
          <div className="card">
           <div className="favorite">        
        </div>
        <div className="image">
        <img src="../../../Images/prolang/c.png" alt="" />
            </div>
            <div className="content">
              <p className=""></p>
              <span className="">C</span>
              <p className=""></p>
            </div>
            <div className="date">     
            </div>      
          </div>
        </div>
        
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
            
            </div>
            <div className="image">
              <img src="../../../Images/event/1.png" alt="" />
            </div>
            <div className="content">
              <p className=""> </p>
              <span className=""></span>
              <p className="name">C++</p>
            </div>
            <div className="date">
              <span></span>
            </div>
          </div>
          <div className="cards">
          <div className="card">
            <div className="favorite">
            
            </div>
            <div className="image">
              <img src="../../../Images/event/2.png" alt="" />
            </div>
            <div className="content">
              <p className=""> </p>
              <span className=""></span>
              <p className="name">Web Programming</p>
            </div>
            <div className="date">
              <span></span>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
            
            </div>
            <div className="image">
              <img src="../../../Images/event/3.png" alt="" />
            </div>
            <div className="content">
              <p className=""> </p>
              <span className=""></span>
              <p className="name">Smart Device Programming</p>
            </div>
            <div className="date">
              <span></span>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
            
            </div>
            <div className="image">
              <img src="../../../Images/weblang/angular.png" alt="" />
            </div>
            <div className="content">
              <p className=""> </p>
              <span className=""></span>
              <p className="name">Angular</p>
            </div>
            <div className="date">
              <span></span>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
            
            </div>
            <div className="image">
              <img src="../../../Images/prolang/python.png" alt="" />
            </div>
            <div className="content">
              <p className=""> </p>
              <span className=""></span>
              <p className="name">Python</p>
            </div>
            <div className="date">
              <span></span>
            </div>
          </div>
        </div>
        
        </div> 
      </div>
      
    </div>
  );
}

export default Posts;
