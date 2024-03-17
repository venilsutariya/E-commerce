import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdOutlineCancel } from 'react-icons/md'
import validationArr from './JSON/validationProduct.json'
import { useDispatch } from 'react-redux';
import { addProductApi, editProductApi } from '../../redux/actions/productAction';
import { loginContext } from '../../App';

function ProductCompForm({obj ,setobj , show, handleClose, errObj, seterrObj , imagepath , setimagepath }) {

    const login = useContext(loginContext);
    const dispatch = useDispatch();

    const formData = new FormData();
    formData.append('productName', obj.productName);
    formData.append('price', obj.price);
    formData.append('category', obj.category);
    formData.append('shopName', obj.shopName);
    formData.append('mobile', obj.mobile);
    formData.append('discount', obj.discount);
    formData.append('discription', obj.discription);
    formData.append('colors', obj.colors);
    formData.append('productImage', obj.productImage);

    const getBase64 = (file) =>
        new Promise(function (resolve, reject) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject("Error: ", error);
        });

    const handleProductChange = (event) => {
        const { name, value, type } = event.target
        if (type === 'file') {
            obj[name] = event.target.files[0];
            getImagetoShow(event.target.files[0]);
        }
        else {
            obj[name] = value;
        }
        handleProductValidation(name);
        setobj({ ...obj });
    }

    const getImagetoShow = async (image) => {
        setimagepath(await getBase64(image));
    }

    const handleAddProduct = (e) => {
        e.preventDefault();
        for (let key in obj) {
            handleProductValidation(key);
        }
        if (Object.values(errObj).every((x) => x === "")) {
            if(obj._id){
                dispatch(editProductApi(obj._id , formData));
                login.setlogin(localStorage.getItem('user'));
            }
            else{
                dispatch(addProductApi(formData));
            }
            setimagepath(null);
            handleClose();
        }
    }

    const handleProductValidation = (name) => {
        const validateObj = validationArr.find(x => x.name === name);
        // eslint-disable-next-line no-eval
        const checkcondition = validateObj?.conditions.find(x => eval(x.condition));
        if (checkcondition) {
            errObj[name] = checkcondition.errmessage;
        }
        else {
            errObj[name] = '';
        }
        seterrObj({ ...errObj });
    }

    return (
        <>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='xl'
            >
                <Modal.Header>
                    <Modal.Title>{obj._id ? 'Edit Product' :'Add Product'}</Modal.Title>
                    <MdOutlineCancel className='fs-3' onClick={() => {
                        handleClose();
                        setimagepath(null);
                    }} />
                </Modal.Header>
                <Modal.Body
                    className=' bg-gray-100'>
                    <form className="form">
                        <div className="sm:col-span-3 mb-3">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Product name</label>
                            <div className="mt-2">
                                <input value={obj.productName} placeholder='enter ProductName' type="text" onChange={handleProductChange} name="productName" className="px-2 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                <span className='text-danger'>{errObj.productName?.toUpperCase()}</span>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col'>
                                <div className="sm:col-span-3 mb-3">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                                    <div className="mt-2">
                                        <input value={obj.price} placeholder='enter price' type="number" onChange={handleProductChange} name="price" className="px-2 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                        <span className='text-danger'>{errObj.price?.toUpperCase()}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className="sm:col-span-3 mb-3">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">Category</label>
                                    <div className="mt-2">
                                    </div>
                                    <input value={obj.category} placeholder='enter category' type="text" onChange={handleProductChange} name="category" className="px-2 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    <span className='text-danger'>{errObj.category?.toUpperCase()}</span>
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-3 mb-3">
                            <label className="block text-sm font-medium leading-6 text-gray-900">Shopname</label>
                            <div className="mt-2">
                            </div>
                            <input value={obj.shopName} placeholder='enter Shopname' type="text" onChange={handleProductChange} name="shopName" className="px-2 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            <span className='text-danger'>{errObj.shopName?.toUpperCase()}</span>
                        </div>

                        <div className="sm:col-span-3 mb-3">
                            <label className="block text-sm font-medium leading-6 text-gray-900">Mobile</label>
                            <div className="mt-2">
                            </div>
                            <input value={obj.mobile} placeholder='enter mobile' type="number" onChange={handleProductChange} name="mobile" className="px-2 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            <span className='text-danger'>{errObj.mobile?.toUpperCase()}</span>
                        </div>

                        <div className="sm:col-span-3 mb-3">
                            <label className="block text-sm font-medium leading-6 text-gray-900">Discount</label>
                            <div className="mt-2">
                            </div>
                            <input value={obj.discount} placeholder='enter discount' type="number" onChange={handleProductChange} name="discount" className="px-2 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            <span className='text-danger'>{errObj.discount?.toUpperCase()}</span>
                        </div>

                        <div className="col-span-full mb-3">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">discription</label>
                            <div className="mt-2">
                                <textarea value={obj.discription} onChange={handleProductChange} placeholder='discription' id="about" name="discription" rows="3" className="block w-full rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                <span className='text-danger'>{errObj.discription?.toUpperCase()}</span>
                            </div>
                        </div>

                        Color
                        <div className="radio-input mb-3">
                            <label>
                                <input checked={obj.colors === 'red'} onChange={handleProductChange} type="radio" id="value-1" name="colors" value="red" />
                                <span>Red</span>
                            </label>
                            <label>
                                <input checked={obj.colors === 'black'} onChange={handleProductChange} type="radio" id="black" name="colors" value="black" />
                                <span>Black</span>
                            </label>
                            <label>
                                <input checked={obj.colors === 'blue'} onChange={handleProductChange} type="radio" id="blue" name="colors" value="blue" />
                                <span>Blue</span>
                            </label>
                            <span className="selection"></span>
                        </div>
                        <span className='text-danger'>{errObj.colors?.toUpperCase()}</span>

                        <div className="rounded-md mt-4">
                            <div className="mb-4">
                                <div className='mb-3'>Add Product Photo</div>
                                <label className="block hover:cursor-pointer text-white rounded-lg p-2 bg-violet-950 d-inline text-sm mb-2" htmlFor="fileInput">Add Product Photo
                                </label>
                                <img src={imagepath ? imagepath : 'https://us.123rf.com/450wm/urfandadashov/urfandadashov1806/urfandadashov180601827/150417827-photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept.jpg'} style={{ width: '100%', height: '400px', objectFit: 'contain' }} alt="" />
                                <input onChange={handleProductChange} name='productImage' type="file" id="fileInput" className="border d-none rounded-lg px-3 py-2 w-full" />
                                <span className='text-danger'>{errObj.productImage?.toUpperCase()}</span>
                            </div>
                        </div>

                        <button onClick={(e) => handleAddProduct(e)} type='submit' className='btn btn-dark mt-4'>{obj._id ? 'Edit PRODUCT' :'Add PRODUCT'}</button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {
                        handleClose();
                        setimagepath(null);
                    }}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default ProductCompForm;
