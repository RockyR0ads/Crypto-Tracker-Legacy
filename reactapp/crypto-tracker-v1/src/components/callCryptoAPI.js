import React, { Component } from "react";
import axios from "axios";
import NumberFormat from "react-number-format";

export class GetPrices extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cryptos: [],
      coins: [],
      counter: 0,
      changeColor: "#FFFFFF",
      amendedList: [],
      
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,USDT,XRP,BCH,BSV,LTC,BNB,EOS,ADA&tsyms=USD&api_key={362a965976ce99a80e7e7955dbb0353c2d9db8df0ecd2817c32052ea3453b07f}"
      )
      .then((res) => {

        const cryptos = res.data;
        const coins = cryptos["DISPLAY"];
        this.setState({cryptos: cryptos})
        this.setState({ coins: coins });

      });
  
  }

  checkChange = (value) => {
    
    let a = 0;
    {Object.keys(this.state.coins).map((key) => (
        
        a = this.state.coins[key].USD.CHANGEPCT24HOUR
        
      ))}
  
    var check = Math.sign(value);
    console.log(a);
    if (check == -1) {
       this.setState({ changeColor: "#ff0000" });
    } else {
      
      this.setState({ changeColor: "#00cc00" });
      
    }
    
  }

  componentDidUpdate(){
      // runs whenever any state gets updated

  }

  

  render() {
    var counter = 1;

    return (
      <div className="fullTable">
        <table className="table table-striped table-dark">
          <thead>
            <tr id="tableHead">
              <th scope="col">Rank</th>
              <th scope="col">Name</th>
              <th scope="col">Price(USD)</th>
              <th scope="col">1Hr Change</th>
              <th scope="col">24Hr Change</th>
              <th scope="col">24Hr Volume</th>
              <th scope="col">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.state.coins).map((key) => (
              <tr className="roar">
                <td id="rank" scope="row">
                  {counter++}
                </td>

                <td id="name">{key}</td>
                {
                  <td id="price">
                    <NumberFormat
                      value={this.state.coins[key].USD.PRICE}
                      displayType={"text"}
                      decimalPrecision={2}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </td>
                }
                <td
                  id="1hrChange"
                  value={this.state.coins[key].USD.CHANGEPCTHOUR}
                  style={{ color: this.state.changeColor }}
                >
                  {this.state.coins[key].USD.CHANGEPCTHOUR}%
                </td>
                <td
                  id="24hrChange"
                  style={{ color: this.state.changeColor }}
                  onClick={() =>
                    this.checkChange(this.state.coins[key].USD.CHANGEPCT24HOUR)
                   
                  }
                >
                      
                  {this.state.coins[key].USD.CHANGEPCT24HOUR}%
                </td>
                <td id="24Volume">{this.state.coins[key].USD.VOLUME24HOUR}</td>
                <td id="marketCap">{this.state.coins[key].USD.MKTCAP}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default GetPrices;
