import React from 'react'
import Image from "next/image";
import cor_bg from "../public/assets/images/corporate-page-bg.png";
import cor_img from "../public/assets/images/corporate-page-img.png";
import { Row, Col } from 'react-bootstrap';

export default function corporate() {

    let Private_Sector_Corporates = ['American President Lines',
        'AMP Tools (India) Pvt Ltd',
        'Hindustan Lever Ltd',
        'Maersk India Private Ltd',
        'Apollo Tyres Ltd',
        'Binani Zinc Ltd',
        'BPL Cellular Ltd',
        'J B Boda Surveyors',
        'Goodlass Nerolac Paints Ltd',
        'Premier Auto Electric',
        'Elite Food Industries',
        'Malayala Manorama',
        'Aristrocrat Marketing Ltd',
        'Indus Motor Co Ltd',
        'Big India Engineers',
        'V-Guard Industries',
        'Godrej-GE Appliances',
        'Godrej Pacific Technology',
        'Thomas Cook (India) Ltd',
        'Finolex Cables Limited',
        'Lucent Technologies',
        'United Catalysts',
        'Medical Trust Hospital']

    let Banks_Financial_Institutions = [
        'The Dhanalakshmi Bank Ltd',
        'The Federal Bank Ltd',
        'Lord Krishna Bank Ltd',
        'Bank of India',
        'Indian Bank',
        'Central Bank of India',
        'ICICI Banking',
        'Corpn.Ltd',
        'Times Bank'
    ]

    let ISO_9000_Organisations = [
        'Harrissons Malayalam Ltd',
        'GTN Textiles Ltd',
        'Patspin India Ltd',
        'Pamba Electronic Systems',
        'Indian Aluminium Co Ltd',
        'TATA Tea, Munnar',
        'TATA Tetley, Cochin'
    ]

    let Public_Sector_Organisations = [
        'Indian Rare Earths Ltd',
        'National Insurance Co. Ltd',
        'The Income Tax Department',
        'Kerala Books and Publications Society',
        'The Fertilisers and Chemicals Travancore Ltd',
        'FACT Engineering and Design Organisation',
        'FACT Engineering Works',
        'Coconut Development Board',
        'The State Trading Corporation of India Ltd',
        'Bharat Petroleum Corporation Ltd',
        'Central Marine Fisheries Research Institute',
        'Kerala Horticulture Development Programme',
        'Office of the Commissioner of Customs and Central Excise',
        'World Bank Assisted Technician Education Project',
        'Kochi Refineries Ltd',
        'Spices Board',
        'Rubber Board',
        'Office of The GM Transmission Projects, BSNL',
        'Cochin Port Trust',
        'Southern Railways',
        'Indian Navy',
        'Department of Tourism',
        'Kerala Shipping & Inland Navigation Corporation Ltd',
        'Kerala Chemicals and Proteins Ltd',
        'Cochin Shipyard Ltd',
        'Kerala Financial Corporation',
        'Kerala State Civil Supplies Corpn. Ltd',
        'Cochin University of Science & Technology',
        'IHRD Kuttikanam'
    ]
    return (
        <>
            <div className='corporate__bg'>
                <div className='corporate__bg-wrapepr'>
                    <div className='corporate__bg-img'></div>
                    <div className='corporate__bg-bg'></div>
                    <div className='corporate__bg-title'>CORPORATE TRAINING</div>
                </div>
            </div>

            <div className='corporate__description mb-5'>
                <p className=''>Technology evolves on a daily basis. Sometimes it becomes necessary to train even the smartest developer on the latest IT developments, market trends and challenges to keep up your company’s staff intellect.
                    <br />
                    <br />
                    We understand these requirements and have a dedicated team to identify the cream of the crop solutions relevant for your staff to excel and grow beyond horizons. Our corporate training sessions have helped start-ups to global enterprises to remain ahead of the technology curve.
                    <br />
                    <br />
                    We have extended our training to major corporate, banking/financial institutions, Central/State Government organizations, and public/private sector companies across the country.
                    <br />
                    <br />
                    Our corporate training programs cover a lot of areas that are closely connected with employees’ professional as well as personal life, aiming at injecting positive energy in their endeavours. This has helped employees to be more productive which has in turn resulted in better ROIs for the company. Over 98% of our clients testify that they have utilized the tips and tricks we provided during sessions. And over 50% ofemployee performance improvements noticed in companieswas directly attributed to our brainstorming sessions for the keen learners.
                    <br />
                    <br />
                    Training programs are conducted either at clients’ place or at the LCC headquarters in Cochin. We carefully evaluate the clients’ requirements and advice programs and packages relevant to their needs. Training programs encompass almost everything from the very basic to the latest and most advanced techniques and practices, with extensive hands-on and instructor-led sessions.
                </p>

                <div className='portfolio-wrapper '>
                    <div className='portfolio__title-wrapper'>
                        <div className='portfolio-title'>Client<br />Portfolio</div>
                    </div>


                    <Row className='gy-2 mt-3 mt-md-0'>
                        <Col md={4}>
                            <div className='portfolio__data-wrapper'>
                                <ul>
                                    {
                                        Private_Sector_Corporates.map(data => {
                                            return (
                                                <><li>{data}</li></>)
                                        })
                                    }
                                </ul>
                                <div className='portfolio__data-btn'>Private Sector<br />Corporates</div>
                            </div>

                        </Col>
                        <Col md={3}>
                            <Row className='h-100 '>
                                <Col md={12} className="p-md-0">
                                    <div className='portfolio__data-wrapper'>
                                        <ul>
                                            {
                                                Banks_Financial_Institutions.map(data => {
                                                    return (
                                                        <><li>{data}</li></>)
                                                })
                                            }
                                        </ul>
                                        <div className='portfolio__data-btn'>Private Sector<br />Corporates</div>
                                    </div>
                                </Col >
                                <Col md={12} className="p-md-0 gy-3">
                                    <div className='portfolio__data-wrapper'>
                                        <ul>
                                            {
                                                Banks_Financial_Institutions.map(data => {
                                                    return (
                                                        <><li>{data}</li></>)
                                                })
                                            }
                                        </ul>
                                        <div className='portfolio__data-btn'>Private Sector<br />Corporates</div>
                                    </div>
                                </Col >
                            </Row>
                        </Col>
                        <Col md={5}>
                            <div className='portfolio__data-wrapper'>
                                <ul>
                                    {
                                        Public_Sector_Organisations.map(data => {
                                            return (
                                                <><li>{data}</li></>)
                                        })
                                    }
                                </ul>
                                <div className='portfolio__data-btn'>Private Sector<br />Corporates</div>
                            </div>
                        </Col>
                    </Row>
                </div>


            </div>
        </>
    )
}
