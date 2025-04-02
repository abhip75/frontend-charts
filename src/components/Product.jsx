import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProducts, updatedProducts } from "../features/productSlice";
import NavBar from "./NavBar";

const Product = () => {
    const dispatch = useDispatch();
    const { products, status, error } = useSelector((state) => state.productData);
    
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (status === "loading") return <p>Loading...</p>;
    if (status === "failed") return <p>{error}</p>;

    const handleDelete = (id) => {
        dispatch(deleteProducts(id));
    };

    const handleEdit = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updatedProducts({ id: selectedProduct.id, updatedProduct: selectedProduct }));
        setShowModal(false); // Close modal after update
    };

    return (
        <>
            <NavBar />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="text-center mt-2">Product Details</h4>
                        <div className="table-responsive">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product) => (
                                        <tr key={product.id}>
                                            <td>{product.id}</td>
                                            <td>{product.title}</td>
                                            <td>{product.category}</td>
                                            <td>{product.description}</td>
                                            <td>
                                                <img src={product.image} alt={product.title} style={{ width: "50px", height: "50px" }} />
                                            </td>
                                            <td>{product.price}</td>
                                            <td>
                                                <button className="btn btn-primary me-2" onClick={() => handleEdit(product)}>Edit</button>
                                                <button className="btn btn-danger" onClick={() => handleDelete(product.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bootstrap Modal for Editing */}
            {showModal && selectedProduct && (
                <div className="modal d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Product</h5>
                                <button className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleUpdate}>
                                    <div className="mb-3">
                                        <label className="form-label">Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={selectedProduct.title}
                                            onChange={(e) => setSelectedProduct({ ...selectedProduct, title: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Price</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={selectedProduct.price}
                                            onChange={(e) => setSelectedProduct({ ...selectedProduct, price: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Description</label>
                                        <textarea
                                            className="form-control"
                                            value={selectedProduct.description}
                                            onChange={(e) => setSelectedProduct({ ...selectedProduct, description: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Category</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={selectedProduct.category}
                                            onChange={(e) => setSelectedProduct({ ...selectedProduct, category: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Image URL</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={selectedProduct.image}
                                            onChange={(e) => setSelectedProduct({ ...selectedProduct, image: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-success" >Update</button>
                                    <button type="button" className="btn btn-secondary ms-2" onClick={() => setShowModal(false)}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Product;
