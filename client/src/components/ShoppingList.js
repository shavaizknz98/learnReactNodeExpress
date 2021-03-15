import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export class ShoppingList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shoppingData: null
        };

    }

    componentDidMount() {
        this.getShoppingDataFromAPI();
    }

    async getShoppingDataFromAPI() {
        const response = await fetch('/shopping_list');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        this.setState({ shoppingData: body.shoppingData });
    }

    render() {

        let products = this.state.shoppingData ? this.state.shoppingData.products : null;
        var content = <tbody><tr><td>Loading...</td></tr></tbody>;

        if (products) {
            for (var vendor in products) {

                console.log(products[vendor]);
                for (var productsKey in products[vendor]) {
                    console.log(productsKey);
                    
                }

                content = <tbody>
                    <tr>
                        <td>
                            {vendor}
                        </td>
                        <td>
                        </td>
                    </tr>
                </tbody>;
            }

        }

        return (
            <div style={{ width: "60%", justifyContent: 'center', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
                <h1>Shopping List</h1>
                <Table striped bordered hover variant="dark" size="sm">
                    <thead>
                        <tr>
                            <th>Vendors available</th>
                            <th>Products</th>
                        </tr>
                    </thead>
                    {content}
                </Table>
            </div>
        );
    }
}
