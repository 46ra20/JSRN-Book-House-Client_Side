import React from 'react';
import SummaryChart from './SummaryChart';

const WebsiteSummary = () => {
    return (
        <div>
            <h2 className='text-3xl text-center divider font-semibold'>Web Site Summary</h2>
            <div  className='md:flex justify-around container mx-auto items-center'>
                <div className='md:w-2/4'>

                    <h2 className='mb-8 underline text-2xl font-semibold text-center'>About Our Services</h2>
                    <p className='text-center'>
                        Many consumers love buying and selling second-hand items due to cost-effectiveness, as well as ethical and environmental benefits. Additionally, as the societal stigma around second-hand clothes has been flipped and it is becoming ever more trendy to buy vintage, repurposed, and second-hand products, these numbers are continuing to grow quickly.

                        According to Research Gate, the speed of development and Compound Annual Growth Rate (CAGR) of the multi-billion dollar second-hand industry is much higher than that of newly manufactured items. This is consistent across all areas, from fashion and furniture, to automotives and electronics, and is predicted to continue increasing in the next few years.
                    </p>
                </div>
                <div className='md:w-1/2 mt-8'>
                    <SummaryChart></SummaryChart>
                </div>
            </div>
        </div>
    );
};

export default WebsiteSummary;