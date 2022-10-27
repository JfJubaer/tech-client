import React from 'react';

const FAQ = () => {
    return (
        <div className='m-5 p-5'>
            <h3>Chrome</h3>
            <p>Maximum height/width: 32,767 pixels</p>
            <p>Maximum area: 268,435,456 pixels (e.g., 16,384 x 16,384)</p>
            <h3>Firefox</h3>
            <p>Maximum height/width: 32,767 pixels</p>
            <p>Maximum area: 472,907,776 pixels (e.g., 22,528 x 20,992)</p>
            <h3>iOS</h3>
            <p>The maximum size for a canvas element is 3 megapixels for devices with less than 256 MB RAM and 5 megapixels for devices with greater or equal than 256 MB RAM</p>
        </div>
    );
};

export default FAQ;