import React, { Component } from 'react'
import axios from 'axios'
import NumberFormat from 'react-number-format';

export class GetPrices extends Component {
    constructor(props){
        super(props)

        this.state = {
            cryptos:[],
            counter: 0
        };

    }

    componentDidMount(){
        axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,USDT,XRP,BCH,BSV,LTC,BNB,EOS,ADA&tsyms=USD&api_key={362a965976ce99a80e7e7955dbb0353c2d9db8df0ecd2817c32052ea3453b07f}')
        .then(res => {
            const cryptos = res.data
            //console.log(cryptos);
            
            this.setState({cryptos: cryptos})
        })
    }

    render() {
        var counter = 1;
        return (
            
            <div className="fullTable">
                <table className="table table-striped table-dark" >
                <thead>
                    <tr id="tableHead"> 
                    <th scope="col">Rank</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price(USD)</th>
                    
                    </tr>
                </thead>
                <tbody>
                {Object.keys(this.state.cryptos).map((key, index)=> (
                    
                     
                        <tr className="roar">
                            <td id ="rank" scope="row">{counter++}</td>
                            
                                <td id ="name">{key}</td>
                                <td id="price"><NumberFormat value={this.state.cryptos[key].USD} displayType={'text'} decimalPrecision={2} thousandSeparator={true} prefix={'$'} /></td>
                                <td id ="dog"></td>
                                

                        </tr>
                        
                        
                 
                ))}
                 </tbody>
                 </table>

            </div>
            
        );
        
    }
    
}


export default GetPrices