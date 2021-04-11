import React from 'react';
import HomepageCarousel from './Carousel';
import HomepageAccordion from './Accordion';
import HomepageTabs from './Tabs';


function Home() {
    return (
        <>

        <HomepageCarousel />
    
        <h1>We do YAY Things</h1>
        <p>Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.</p>
        
        <HomepageAccordion />
        
        <div className="d-none d-md-block">
            <HomepageTabs />
        </div>

        </>
    );
}

export default Home;
