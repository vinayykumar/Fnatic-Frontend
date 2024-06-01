import React from 'react';

const Sidebar = ({ data, close }) => {
  return (
    <>
      <div className="fixed z-50 h-full inset-0 flex w-screen">
        <div className="w-2/3 h-full inset-0 bg-black opacity-60"></div>
        <div className="absolute z-50 w-1/3 h-full bg-white inset-y-0 right-0 overflow-y-scroll opacity-100">
          <div className="flex flex-col  justify-between mt-5 mx-7">
            <div className='text-right'>
            <button className='w-10 h-10 rotate-45 bg-[rgba(239,240,242)] rounded-full p-1  right-0' onClick={close}>+</button>

            </div>

              
            
                  <p className="text-xl uppercase font-druk mb-4 mt-4">Shipping</p>
                 
                 
                 
                  <h4 className='uppercase font-semibold'>GENERAL</h4>
            <p className="font-sans text-sm font-light text-gray-400 m-2">
                    We aim to dispatch all in-stock items within 2 working days. If you made an order on Friday, it will be dispatched on Monday next week.
                  </p>
            <p className="font-sans text-sm font-light text-gray-400 m-2">
                    Check{' '}
                    <a href="https://help.fnatic.com/support/solutions/articles/77000302061-shipping-countries-and-estimated-time-of-arrival-eta-">
                      Average Shipping Time per Country
                    </a>
                  </p>
            <p className="font-sans text-sm font-light text-gray-400 m-2">
                    If you placed a Pre-Order or ordered a customised item, the shipping info in the product description is relevant.
                  </p>





                  <h4 className='uppercase font-semibold'>FREE SHIPPING</h4>
            <p className="font-sans text-sm font-light text-gray-400 m-2">
                    Free shipping is available for orders above €100/£100 for certain countries within the EU and for orders above $100 in the United States.
                  </p>
            <p className="font-sans text-sm font-light text-gray-400 m-2">
                    For all other orders, the shipping costs will be calculated depending on items' weight and destination country.
                  </p>
            <p className="font-sans text-sm font-light text-gray-400 m-2">
                    Please note that some orders may be dispatched in more than one parcel due to weight restrictions.
                  </p>
            <p className="font-sans text-sm font-light text-gray-400 m-2">
                    <a href="https://help.fnatic.com/support/solutions/folders/77000206840">Please read the full shipping policy here.</a>
                  </p>


                 <p className="text-xl uppercase font-druk mb-4 mt-4">Returns</p>


                  <h4 className='uppercase font-semibold'>APPAREL</h4>
            <p className="font-sans text-sm font-light text-gray-400 m-2">
                    Just give us a heads up within 14 days of delivery if you're not satisfied with your purchase, and we'll sort it for you!
                  </p>
            <p className="font-sans text-sm font-light text-gray-400 m-2">
                    In case you ordered a custom named item, we won't be able to offer size exchanges because we are tailoring the custom named product just for you - please check the size chart before ordering.
                  </p>



                  <h4 className='uppercase font-semibold'>GEAR</h4>
                  <ul className='list-disc'>
                    <li className="font-sans text-sm font-light text-gray-400 m-2">For any new unopened unwanted item: please contact us within 14 days upon delivery</li>
                    <li className="font-sans text-sm font-light text-gray-400 m-2">Defective upon arrival: please contact us within 30 days upon reception and we'll assist</li>
                    <li className="font-sans text-sm font-light text-gray-400 m-2">Defect occurred within 2 years since the purchase, but not caused by the customer: our 2 Year Warranty covers you, more information is available below!</li>
                    <li className="font-sans text-sm font-light text-gray-400 m-2">Item must be sealed, in its original packaging, sealed goods cannot be returned once unsealed.</li>
                    <li className="font-sans text-sm font-light text-gray-400 m-2"> Item must be unused, and not damaged in any way.</li>
                  </ul>
            <p className="font-sans text-sm font-light text-gray-400 m-2">
                    Please reach out to our support team at{' '}
                    <a href="mailto:shop@fnatic.com">shop@fnatic.com</a>, they will provide you with the return instructions. Please state your order number (usually starts with FNC/FNCT or a 6-digit number) or proof of purchase. After your notice, you have another 14 days to send it back to us.
                  </p>
            <p className="font-sans text-sm font-light text-gray-400 m-2">
                    Please do not send your purchase back to the manufacturer or to the address you received the order from.
                    <br />
                    <br />
                    <a className='underline' href="https://help.fnatic.com/support/solutions/folders/77000207117">Please read the full return policy here.</a>
                  </p>



                </div>
              </div>
            </div>
  
       
   
    </>
  );
};

export default Sidebar;
