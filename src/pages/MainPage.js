import React from "react";
import BasicLayout from "../layouts/BasicLayout";

function MainPage(props) {
    return (  
        // <div className={'text-3xl'}>
        //     <div className={'flex'}>
        //         <Link to={'/about'}>About</Link>
        //     </div>

        //     <div>MainPage</div>
        // </div>
        <BasicLayout>
            <div className={'flex'}>MainPage</div>
        </BasicLayout>
    );
}
 
export default MainPage;