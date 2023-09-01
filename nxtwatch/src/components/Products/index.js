import {Component} from 'react'
import AllProducts from '../AllProducts'
import FilterProducts from '../FilterProducts'
import './index.css'

class Products extends Component {
  render() {
    return (
      <div className="productContainer">
        <FilterProducts />
        <AllProducts />
      </div>
    )
  }
}
export default Products
