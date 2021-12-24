import React, { ChangeEvent, FormEvent,  useState } from 'react';

type products = {
    productName: string,
    categories: string,
    sellingPrice: number,
    salesDiscount: number,
    shippingCost: number,
    vat: number,
    materialCostingPerUnit: number,
    totalCost: number,
    profitMargin: number,
    date: string,
    avalableQuantity: number,
    productBy: string
    email: string
    contructNumber: string,
    presentAddress: string,
    productImg: string
}
const initPriducts: products = {
    productName: 'product name',
    categories: 'product categories',
    sellingPrice: 0,
    salesDiscount: 0,
    shippingCost: 0,
    vat: 0,
    materialCostingPerUnit: 0,
    totalCost: 0,
    profitMargin: 0,
    date: "date",
    avalableQuantity: 0,
    productBy: 'product by',
    email: 'email',
    contructNumber: 'contruct number',
    presentAddress: 'address',
    productImg: 'images'
}

const AddProduct = () => {
    const [product, setProduct] = useState(initPriducts);

    const onProductChange = <Q extends keyof products>(prop: Q, value: products[Q]) =>{
        setProduct({...product, [prop]: value});
    }

    const handleAddMember = (event: FormEvent<HTMLFormElement>) =>{

        // do the Redux task 
        // fetch the link to send the data to the server 

        console.log(product)
        event.preventDefault();
    }

    return (
        <div><br /><br /><br />
            <h1 className='text-3xl ml-2'>Add Products</h1>
            <form onSubmit={handleAddMember}>
                <div className='flex w-4/5 mx-auto'>
                    <div className='w-2/4'>

                        <fieldset className='flex flex-col border-2 p-2 m-2'>
                            <legend className='text-left text-bold text-xl '> Product Name </legend>
                            <input required onChange={(e)=>{onProductChange('productName', e.target.value.toString())}} className='p-2 border-b-2' type='text' name='ProductName' placeholder='Enter Product Name' />
                            <div className='flex p-2 border-b-2 '>
                                <label htmlFor='categories' className='w-2/4'>Select Category: </label>
                                <select required onChange={(e)=>{onProductChange('categories', e.target.value.toString())}} id="categories" name='categories' className='w-2/4'>
                                    <option value="electicalProducts">Select categories</option>
                                    <option value="convinientProducts">Convinient Products</option>
                                    <option value="convinientProducts">Electrical Gadgets</option>
                                </select>
                            </div>
                        </fieldset>

                        <fieldset className='flex flex-col border-2 p-2 m-2'>
                            <legend className='text-left text-bold text-xl '> Pricing Details </legend>
                            <input required onChange={(e)=>{onProductChange('sellingPrice', parseFloat(e.target.value))}} className='p-2 border-b-2' type='number' name='sellingPrice' placeholder='Selling Per Unit' />
                            <input required onChange={(e)=>{onProductChange('salesDiscount', parseFloat(e.target.value))}} className='p-2 border-b-2' type='number' name='salesDiscount' placeholder='Sales Discount' />
                            <input required onChange={(e)=>{onProductChange('shippingCost', parseFloat(e.target.value))}} className='p-2 border-b-2'  type='number' name='shippingCost' placeholder='Shipping Cost' />
                            <input required onChange={(e)=>{onProductChange('vat', parseFloat(e.target.value))}} className='p-2 border-b-2' type='number' name='vat' placeholder="VAT in Per Cent (%)" />
                            <input required onChange={(e)=>{onProductChange('materialCostingPerUnit', parseFloat(e.target.value))}} className='p-2 border-b-2' type='number' name='materialCostingPerUnit' placeholder="Material Costing" />
                            <input className='p-2 border-b-2'  type='number' name='totalCost' placeholder='Total Cost' readOnly />
                            <input className='p-2 border-b-2'  type='number' name='profitMargin' placeholder='Profit Margin (%)' readOnly />
                        </fieldset>
                    </div>

                    <fieldset className='flex flex-col w-2/4 border-2 p-2 m-2'>
                        <legend className='text-left text-bold text-xl '> Product Details </legend>
                        <input required onChange={(e)=>{onProductChange('date', e.target.value.toString())}} className='p-2 border-b-2'  type='date' name='date' placeholder='Date' />
                        <input required onChange={(e)=>{onProductChange('productName', e.target.value.toString())}} className='p-2 border-b-2' type='text' name='productDetails' placeholder='Product Details' />
                        <input required onChange={(e)=>{onProductChange('avalableQuantity', parseFloat(e.target.value))}} className='p-2 border-b-2' type='number' name='avalableQuantity' placeholder='Avalable Quantity' />
                        <input required onChange={(e)=>{onProductChange('productBy', e.target.value.toString())}} className='p-2 border-b-2' type='text' name='productBy' placeholder='Product By' />
                        <input required onChange={(e)=>{onProductChange('email', e.target.value.toString())}} className='p-2 border-b-2' type='email' name='email' placeholder='Enter Email' />
                        <input required onChange={(e)=>{onProductChange('contructNumber', e.target.value.toString())}} className='p-2 border-b-2' type='text' name='contructNumber' placeholder='Contruct Number' />
                        <input required onChange={(e)=>{onProductChange('presentAddress', e.target.value.toString())}} className='p-2 border-b-2' type='text' name='presentAddress' placeholder='Present Address' />
                        <input required onChange={(e)=>{onProductChange('productImg', e.target.value.toString())}} className='p-2 border-b-2' type='file' name='productImg' placeholder='Select Images' />
                        <br />
                        <input type="submit" value="Add Product" className='border-2 bg-indigo-800 px-2 text-center rounded-md ml-2 text-white hover:bg-purple-500' />
                    </fieldset>

                </div>
            </form><br /><br />
        </div>
    );
};

export default AddProduct;