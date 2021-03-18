import React, { Component } from "react"



export default class GetAllCars extends Component {
    render() {

        
        return (
            <div>
                <table class="table table-striped table-inverse table-responsive">
                    <thead class="thead-inverse">
                        <tr>
                            <th>CarId</th>
                            <th>CarName</th>
                            <th>Manufacturer</th>
                            <th>CarImage</th>
                            <th>Likes</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row"></td>
                                <td>Hundai i20</td>
                                <td>Hundai</td>
                            </tr>
                            <tr>
                                <td scope="row"></td>
                                <td>Skoda Superb</td>
                                <td>Skoda</td>
                            </tr>
                        </tbody>
                </table>
            
            </div>
        )
    }
}

