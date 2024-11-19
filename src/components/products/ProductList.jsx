import { useContext } from 'react'
import useGetProducts from '../../hooks/useGetProducts'
import Product from './ProductItem'
import './products.css'
import { ProductsContext } from '../../state/context/ProductsContext'


const ProductList = () => {
  
  const { loading } = useGetProducts()
  const { products } = useContext(ProductsContext)

  if (loading) {
    return (
      <div className="loader-box">
        <div className="loader"></div>
      </div>
    )
  }

  return (
    <section className="products">
        {!!products && !loading ? (
            products.map(product => <Product key={product.id} product={product} />)
        ) : null}
    </section>
  )
}

export default ProductList













// [{
//     "id": "30452234-91c6-496e-bf54-9f6d04e7224a",
//     "name": "Wine - Bouchard La Vignee Pinot",
//     "price": 1064,
//     "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=500&q=60",
//     "category": 5,
//     "description": "Lorem"
//   }, {
//     "id": "3a0736f1-de15-40da-820a-531b4108a86b",
//     "name": "Glass - Juice Clear 5oz 55005",
//     "price": 1943,
//     "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=1000&q=60",
//     "category": 3,
//     "description": "Ipsum"
//   }, {
//     "id": "4e5c70fd-520c-46fb-a7d7-a6e01c93e544",
//     "name": "Ice Cream - Strawberry",
//     "price": 1811,
//     "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=1000&q=60",
//     "category": 7,
//     "description": "Dolor"
//   }, {
//     "id": "6ac4e84b-08ce-4da4-a383-7ae4c6936e86",
//     "name": "Tuna - Sushi Grade",
//     "price": 2020,
//     "image": "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=1000&q=60",
//     "category": 4,
//     "description": "Isit"
//   }, {
//     "id": "af5814d7-735a-4db4-9f20-08cd12fb99da",
//     "name": "Wine - Sake",
//     "price": 2131,
//     "image": "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=1000&q=60",
//     "category": 7,
//     "description": "Maleba"
//   }, {
//     "id": "2bdaec29-f967-4ff9-abfb-6ee72f4bedeb",
//     "name": "Carbonated Water - Peach",
//     "price": 589,
//     "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
//     "category": 6,
//     "description": "Jeneva"
//   }, {
//     "id": "1f34182e-a62f-499a-9517-881ea617eaf8",
//     "name": "Pepper - Red, Finger Hot",
//     "price": 2354,
//     "image": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=1000&q=60",
//     "category": 1,
//     "description": "Siku"
//   }, {
//     "id": "8451b69c-01f8-4063-9e97-0a65fa6985f1",
//     "name": "Creme De Menthe Green",
//     "price": 1804,
//     "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=1000&q=60",
//     "category": 0,
//     "description": "Iondepa"
//   }, {
//     "id": "c6e86803-d32e-4126-a3bc-be43d42e7a6c",
//     "name": "Bread Crumbs - Japanese Style",
//     "price": 1829,
//     "image": "https://images.unsplash.com/photo-1553456558-aff63285bdd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZHVjdHxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=1000&q=60",
//     "category": 5,
//     "description": "Liolua"
//   }, {
//     "id": "449b3c01-50d1-40f0-a56e-76894ac683aa",
//     "name": "Cookie - Oatmeal",
//     "price": 511,
//     "image": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=1000&q=60",
//     "category": 6,
//     "description": "Typiolili"
//   }, {
//     "id": "2f1dcb0e-8cba-4f0b-9681-6826b59cdfda",
//     "name": "Fish - Atlantic Salmon, Cold",
//     "price": 2459,
//     "image": "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=1000&q=60",
//     "category": 5,
//     "description": "Wankuja"
//   }, {
//     "id": "0e443ce3-1d96-480a-b85a-6293611f42d2",
//     "name": "Tart - Lemon",
//     "price": 1441,
//     "image": "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3R8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=1000&q=60",
//     "category": 1,
//     "description": "Lemtra"
//   }, {
//     "id": "cf2c0c72-8748-494b-936d-a2788ef0a2af",
//     "name": "Rappini - Andy Boy",
//     "price": 1327,
//     "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=1000&q=60",
//     "category": 5,
//     "description": "Faskeli"
//   }, {
//     "id": "e72d5944-7dca-4d03-98ee-f8ab2125bcde",
//     "name": "Lamb - Racks, Frenched",
//     "price": 1516,
//     "image": "https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=1000&q=60",
//     "category": 5,
//     "description": "Brusajska"
//   }, {
//     "id": "46dece60-3d0d-403b-9145-64bb05b440bd",
//     "name": "Cheese - Woolwich Goat, Log",
//     "price": 1291,
//     "image": "https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=1000&q=60",
//     "category": 7,
//     "description": "Moranaka"
//   }, {
//     "id": "24e1ef55-279a-40dd-baec-bb34a5ca58c1",
//     "name": "Pimento - Canned",
//     "price": 788,
//     "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=1000&q=60",
//     "category": 4,
//     "description": "Wewekeli"
//   }, {
//     "id": "4f16def8-18f5-4850-a3f6-37fcfeb1a356",
//     "name": "Honey - Lavender",
//     "price": 1647,
//     "image": "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHByb2R1Y3R8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=1000&q=60",
//     "category": 2,
//     "description": "Lovaberi"
//   }, {
//     "id": "30f02b6f-9ae3-4637-8238-956b84e3db76",
//     "name": "Creme De Cacao White",
//     "price": 1181,
//     "image": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2R1Y3R8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=1000&q=60",
//     "category": 4,
//     "description": "Chasteri"
//   }, {
//     "id": "d20ccbd7-73a6-40ce-986f-a24c6d54869a",
//     "name": "Rice - 7 Grain Blend",
//     "price": 2142,
//     "image": "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2R1Y3R8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=1000&q=60",
//     "category": 1,
//     "description": "Homkini"
//   }, {
//     "id": "4b4a4719-a8cd-4c07-8112-a8c9c90e4cdf",
//     "name": "Chervil - Fresh",
//     "price": 2250,
//     "image": "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2R1Y3R8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=1000&q=60",
//     "category": 9,
//     "description": "Dipkons"
//   }]