import React from "react";
import BasicLayout from "../layouts/BasicLayout";
import useCustomLogin from "../hooks/useCustomLogin";

function AboutPage(props) {

    const {isLogin, moveToLoginReturn} = useCustomLogin()

    if(!isLogin){
        return moveToLoginReturn();
    }

    return (  
        // <div className={'text-3xl'}>
        //     <div className={'flex'}>
        //         <Link to={'/about'}>About</Link>
        //     </div>

        //     <div>About Page</div>
        // </div>
        <BasicLayout>
            <div>AboutPage</div>
        </BasicLayout>
    );
}
 
export default AboutPage;