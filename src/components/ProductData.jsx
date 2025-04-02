import React,{useState, useEffect} from "react";
import axios from "axios";
import NavBar from "./NavBar";

const ProductData = () => {

    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        price:"",
        description: "",
        category: "",
        image:"",
    });

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then(response => {
            setProducts(response.data);
        })
        .catch(error => {
            console.error("Error fetching the data:", error);
        })
    },[]);

    const handleEdit = (product) => {
        setSelectedProduct(product);
        setFormData({
            title: product.title,
            price: product.price,
            description: product.description,
            category: product.category,
            image: product.image
        });
        setShowModal(true);
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleUpdateProducts = async (e) => {
        e.preventDefault();
        if(!selectedProduct) return;
        const updatedProduct = {
            id: selectedProduct.id,
            title: formData.title,
            price: parseFloat(formData.price),
            description: formData.description,
            category: formData.category,
            image: formData.image
        };

        try{
            const response = await axios.put(`https://fakestoreapi.com/products/${selectedProduct.id}`, updatedProduct);
            setProducts(products.map(product =>  product.id === selectedProduct.id ? response.data : product));
            setShowModal(false);
        }catch(error){
            console.log("Error updating data:", error);
        }
    };




    return(
            <>
            <NavBar />
            <div className="container mt-4">
                <h4 className="text-center mt-2">Product Details</h4>
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <td>{product.category}</td>
                                    <td>{product.description}</td>
                                    <td><img src={product.image} alt={product.title} style={{ width: "50px", height: "50px" }} /></td>
                                    <td>${product.price}</td>
                                    <td>
                                        <button className="btn btn-primary me-2" onClick={() => handleEdit(product)}>Edit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Update Modal */}
            {showModal && (
                <>
                    <div className="modal-backdrop fade show"></div> {/* Fix modal backdrop */}
                    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Update Product</h5>
                                    <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={handleUpdateProducts}>
                                        <div className="mb-3">
                                            <label className="form-label">Title</label>
                                            <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} required />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Price</label>
                                            <input type="number" className="form-control" name="price" value={formData.price} onChange={handleChange} required />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Description</label>
                                            <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} required></textarea>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Category</label>
                                            <input type="text" className="form-control" name="category" value={formData.category} onChange={handleChange} required />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Image URL</label>
                                            <input type="text" className="form-control" name="image" value={formData.image} onChange={handleChange} required />
                                        </div>
                                        <button type="submit" className="btn btn-success">Update</button>
                                        <button type="button" className="btn btn-secondary ms-2" onClick={() => setShowModal(false)}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>

    )
}

export default ProductData;