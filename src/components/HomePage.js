import React, { Component } from 'react'
import Image from 'react-bootstrap/Image';



class HomePage extends Component{



render(){
        return (
            
       //     D:\React\DreamCars\dreamcars\public\luxury-cars.jpg
                  
            <div>
              <h3>  DREAMCARS HOMEPAGE </h3>

                {/* <Image src={'http://s3://chickenbucket3/luxury-cars.jpg'} /> */}
                {/* <Image src={'D:/React/DreamCars/dreamcars/public/luxury-cars.jpg'} /> */}
                <div  styles={{ backgroundImage:`D:/React/DreamCars/dreamcars/public/luxury-cars.jpg` }}></div>

                <div>
                    <button>Login</button> &nbsp; &nbsp;
                    <button>Create User</button><br/>
                </div>  
            </div>    
        );
        }
}

export default HomePage;