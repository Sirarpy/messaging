import './searchItem.css'

function SearchItem(prop) {
    return (
        <div className='searchItem'>
            <div className='searchItemAvatar'>
                <img src={prop.item.avatar}/>
            </div>
            <div style={{flexGrow:1}}>
                <p>{prop.item.first_name} {prop.item.last_name}</p>
                <p className='searchItemStatus'>{prop.item.status}</p>
            </div>
            <span>1</span>
            {/*<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQNSURBVHgBzVjbUtswEF1LsmSTSymFlrf+/2d1hodCGyBXfHf3iDiYxCSSQyhnBshgZXW8uzq7q6BmUA8sn1JKspxWSWb/Vmymqir7TAhBoZQUKkFGhzSIDA1iQ30Q+BCsqpom0zk9zFf8TUFKKUtGMJkgCOwPAJP1mnBZlvxTkOD/x0z2+8WYiUvXLd0Igtjd44ymy4SNhxSGmkmJDaFDaMhmWUp5ntOYvXn11Y3oQYKT6YLu50tSoWFiofXYMYBHCyYJr16OB3Q+OqPeBH9PpjTnHIuiiKRU9J4A0SRJaBRruuawexFESG/+3FNRI8kNp5tbKH2BrRH2msn+vP5GsmOfznj9up1QHSjruVORA5DDxrADODo3dw+da3YI3j3M+At8ELSmjwFIaqpYFe7uZ7tP2yF+XKzofpFaz7lCsBcGRpGG5qnn983LmpYpa2RWkjtqSpOUvpxpuuDDs7HffMiLkmarjLR2F1TkzNXI0ChSG3JAKAM6541+jKPOvOpGYKP2uEjsGdghOJktbS4Ij5y7HJq9BPAMa4SjXkLCFJMEl1cE4T2EQ0p3hT/T0sk7WDMw7nZRneZJvvGiJQjGEGEfDI37eu1R2ux6LomPiyf7+dmDnMs+3gOUdE+Fdn66IOATPeNmBBCrNGPNO53W9YFtPISkFSuBSDj3+tTXtKic1+al+9oGiGhWcBdUcJfRh2BWuGvcMi3IF/BiyrknerzcelPu86rDrSTW+An2M0AQgi+KngzRQf/lqrOPJJ5hzTFQdMQBAYHbWWI1EbLTnOyM8zPlFICXq34ThQXe/V2aPISwTxhdIIT4XBLTBkokn9/PS1Dx3CN8y9BHQnF0lQ5ZbzzTB28WKf4yZl873T0ba6PgDMchsm09H5ikqMlXMTD1KS0h0m4McVoHfFpDhzps335NOgolYSwCYXQqLgcKL4bvKROy0lBO+8QALdPFwDgRowN20MiOosMairWGCdoaN4zU3oVoOo8l12VzXyPbdED2N2aKtzCKQo+23R2wOXrDMQgv5uUNQTv46O7FcXjcTcI+xLpbQZDrTf5udh/FqtPlwQl7xa79rGfjl5FXtBcPo/+viQh7W7JexQ8FfzsfIQunwrZt7H22lWo7CfYlDu0Q/mKk4Pkgp/qIrmQbsDVlm7DdAF7D3tvovjxa93pF+fJIrg1API8BWrEHviBoayCKxcVQd5+BfddveMvtdh3eHXIofImC2IxDmm3NMrA1jt8eYQ9eYKIsIVe2Vd8qPZO15Yh7IlTM9hUwyi6GpbxEr1jtNK7wFg7EPg12Igj41FAXwGsg5yJhXpfoDVGMnC4DUxvNLdjQSC9t9SLYBkiijcLkhdYKdylNGIW98Sfbihm0TDLwvl1o8A9Ase135toIbwAAAABJRU5ErkJggg=='*/}
            {/*    alt=""/>*/}
            {/*<img src={prop.item.avatar} alt=""/>*/}
            {/*<img src={require(`../../../../images/{prop.item.avatar}`)} alt="avatar"/>*/}
            {/*<img src='./../../../../../images/activeUserAvatar.png' alt=""/>*/}
        </div>
    )
}

export default SearchItem