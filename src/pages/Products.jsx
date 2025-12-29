import React from "react";

export default function Products () {
  return(
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border p-4">
          <h2 className="font-semibold">Product 1</h2>
          <p>Rs.500</p>
        </div>
        
         <div className="border p-4">
          <h2 className="font-semibold">Product 2</h2>
          <p>Rs.500</p>
        </div>

         <div className="border p-4">
          <h2 className="font-semibold">Product 3</h2>
          <p>Rs.500</p>
        </div>
      </div>
    </div>
  )
}