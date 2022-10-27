import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContextProvider';
import { Card } from 'react-bootstrap';
import { FaBookmark, FaDollarSign, FaDownload, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';





const CourseDetails = () => {
    const { color } = useContext(AuthContext);
    const { title, image_url,id, details, rating, total_view } = useLoaderData();

    const inputRef = useRef(null);
    const printDocument = () => {
      html2canvas(inputRef.current).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, "JPEG", 0, 0);
        pdf.save("download.pdf");
      });
    };
  
    
    return (
        <div>
            <br />
            <div className={!color ? 'text-center text-white' : 'text-center text-dark'}>
                <h2><button onClick={printDocument}
                 className={!color ? 'btn btn-outline-light' : 'btn btn-outline-dark'}>DownLoad Now <FaDownload /></button></h2>
                <br />
            </div>
            <Card id="divToPrint" ref={inputRef}
            className='mt-2 shadow-lg img-fluid bg-info' style={{ width: '45rem' }}>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <Card.Title>{title}</Card.Title>
                    </div>
                    <div>
                        <FaBookmark></FaBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>

                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Card.Footer className='d-flex justify-content-between align-items-center'>
                        <p >  <FaStar></FaStar> {rating.number}</p>
                        <p><FaDollarSign />  {total_view}</p>
                    </Card.Footer>
                    <button className='btn btn-secondary w-100' ><Link className='text-decoration-none text-light' to={`/premium/${id}`}>
                    Get Premium</Link>
                    </button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetails;