import React ,{ Fragment } from 'react';

// 函数式组件
const Header = props=>(
    <div className="header">
        <div className="grid">
            <div className="start">
                <a href="/">Home</a>
            </div>
            <div className="end">
                {props.nickname ? (
                    <span className="nickname">
                        <i className="far fa-user"></i>
                        {props.nickname}                        
                    </span>
                ) :(
                    <Fragment>
                        <a href="/">Login</a>
                        <a href="/">Register</a>
                    </Fragment>                    
                )}
            </div>
        </div>
    </div>

)
// class Header extends React.Component {
//     renderLink() {
//         const nickname = this.props.nickname;
//         if(nickname){
//             return(
//                 <span className="nickname">
//                     <i className="far fa-user"></i>
//                     {nickname}
//                 </span>
//             )
//         }else{
//             return(
//                 <Fragment>
//                     <a href="/">Login</a>
//                     <a href="/">Register</a>
//                 </Fragment>

//             )
//         }
//     }
//     state = {  }
//     render() { 
//         return ( 
//             <div className="header">
//                 <div className="grid">
//                     <div className="start">
//                         <a href="/">Home</a>
//                     </div>
//                     <div className="end">
//                         {this.renderLink()}
//                     </div>
//                 </div>
//             </div>
//          );
//     }
// }
 
export default Header;