import {useState} from 'react';

const Family=({familyTree}:any)=>{
    const [isVisible,setIsVisible]=useState(false);

    const expand=()=>{
        setIsVisible(!isVisible);
    }

 return <div style={{paddingLeft:10}}>
    <span onClick={expand}>{familyTree.name}</span>
    {isVisible ?(familyTree?.children?.map((child:any)=>{
        return <div style={{paddingLeft:10}}>
            <Family familyTree={child}/>
        </div>
    })):<></>}
 </div>
}

export default Family;