import React from 'react'

const Category = () => {

  const urls = [
    {
      url : "https://cdn.sanity.io/images/5gii1snx/production/9eb837785beca2565db39881b9b9d69b46a0759e-1080x1080.svg",
      category : "Headphones"
    },
    {
      url : "https://cdn.sanity.io/images/5gii1snx/production/4605f89b3c559b8aee49d69e8cb4595de8c698e9-1080x1080.svg",
      category : "Keyboards"
    },
    {
      url : "https://cdn.sanity.io/images/5gii1snx/production/abad9cb541a9415ac93041739e6740b7dad4f511-1080x1080.svg",
      category : "Mice & Pads"
    },
    {
      url : "https://cdn.sanity.io/images/5gii1snx/production/77b432e3323eac4ec2f8e972a6e3d1dfba411a1b-1080x1080.svg",
      category : "PCs/Desks/Chairs"
    },
    {
      url : "https://cdn.sanity.io/images/5gii1snx/production/249b07dde33b0a77c0d99bd792c4bbeddc0e471e-1080x1080.svg",
      category : "Pro Kit"
    },{
      url : "https://cdn.sanity.io/images/5gii1snx/production/1e1e44cbe878d8a7bfc52b7991e8344da6685369-1080x1080.svg",
      category : "Apparel"
    },{
      url : "https://cdn.sanity.io/images/5gii1snx/production/1e1e44cbe878d8a7bfc52b7991e8344da6685369-1080x1080.svg",
      category : "Accessories"
    },{
      url : "https://cdn.sanity.io/images/5gii1snx/production/0ab3d301609db4979cb7a9e6315afbe2f825f712-1080x1080.svg",
      category : "Digital Items"
    }
  ]

  return (
    <div>
      <div className='flex justify-center p-4'>
        <div className='flex gap-8 scroll-smooth overflow-x-auto'>
            {
              urls.map( (item,index) => (
                <div className='flex flex-col flex-shrink-0 gap-1 justify-center items-center'>
                    <img className='w-20 h-20' src={item.url} alt="Meowy" />
                    <p className='text-sm'>{item.category}</p>
                </div>
              ))
            }

        </div>
      </div>
    </div>
  )
}

export default Category;
