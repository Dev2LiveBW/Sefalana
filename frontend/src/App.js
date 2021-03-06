import data from './data';

function App() {
    return (
        <div className="grid-container">
            <header className="row ">
                <div>
                    <a className="brand" href="/">Segarona</a>
                </div>
                <div>
                    <a href="/cart">Cart</a>
                    <a href="/signin">Sign In</a>
                </div>
            </header>
            <main>
             <div className="row center">
                 {
                     data.products.map((product) => (
                        <div key={product._id} className="card">
                        <a href={`/product/${product._id}`}>
                            
                            <img className="medium"
                             src={product.image} 
                             alt={product.name}>
                            </img>
                        </a>
                        <div className="card-body">
                            <a href={`/product/${product._id}`}> <h2>{product.name}</h2></a>
                        </div>
                        <div className="rating">
                            <span>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </span>
                        </div>
                        <div className="price">
                            BWP {product.price}
                        </div>
                    </div>
                     ))
                 }                
             </div>   
            </main>
            <footer className="row center">
                All rights reserved
            </footer>
        </div>
    );
  }
  
  export default App;
  