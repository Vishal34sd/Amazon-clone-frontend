import React from "react";

const Filter = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 w-80  ">
      <aside className="max-w-xs mx-auto bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <h2 className="text-xl font-bold mb-6">Filters</h2>

        {/* Category */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Category</h3>
          <div className="space-y-1 text-sm">
            <label className="block"><input type="checkbox" className="mr-2" /> Mobiles</label>
            <label className="block"><input type="checkbox" className="mr-2" /> Televisions</label>
            <label className="block"><input type="checkbox" className="mr-2" /> Laptops</label>
          </div>
        </div>

        {/* Brand */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Brand</h3>
          <div className="space-y-1 text-sm">
            <label className="block"><input type="checkbox" className="mr-2" /> Samsung</label>
            <label className="block"><input type="checkbox" className="mr-2" /> Apple</label>
            <label className="block"><input type="checkbox" className="mr-2" /> OnePlus</label>
          </div>
        </div>

        {/* Price */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Price</h3>
          <div className="space-y-1 text-sm">
            <label className="block"><input type="radio" name="price" className="mr-2" /> Under ₹20,000</label>
            <label className="block"><input type="radio" name="price" className="mr-2" /> ₹20,000 - ₹50,000</label>
            <label className="block"><input type="radio" name="price" className="mr-2" /> ₹50,000 & Above</label>
          </div>
        </div>

        {/* Rating */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Customer Rating</h3>
          <div className="space-y-1 text-sm">
            <label className="block"><input type="checkbox" className="mr-2" /> 4★ & above</label>
            <label className="block"><input type="checkbox" className="mr-2" /> 3★ & above</label>
            <label className="block"><input type="checkbox" className="mr-2" /> 2★ & above</label>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Filter;
