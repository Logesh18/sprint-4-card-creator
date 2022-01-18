import React,{useState} from 'react';
import Card from 'src/Components/Card/Card';

const Form=()=>{
    const [items,setInputData]=useState([]); 
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [contactno,setContactno]=useState("");
    const [image,setImage]=useState("");
    const getInput=(e)=>{
        e.preventDefault();
        if(name!=="" && email!=="" && contactno!=="" && image!=="" &&!items.find((item)=>item.name===name)){
            setInputData([...items,{
                id:items.length,
                name:name,
                email:email,
                contactno:contactno,
                image:image
            }])
        }
        else{
            alert("Please enter correct data.....")
        }
        setName("");
        setEmail("");
        setContactno("");
        setImage("");
    }
    function removeContent (index) {
        let clone = [...items]
        clone.splice(index, 1)
        setInputData(clone);
    }
    return (
        <>
            <div id="heading">Card Creator</div>
            <div className="formcontainer">
                <div id="content">
                    <form id="form">
                        <label>Please Enter your name</label><br/>
                        <input type="text" data-testid="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} required/><br/> 
                        <label>Please Enter your email</label><br/>
                        <input type="text" data-testid="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/><br/> 
                        <label>Enter your Contact Number</label><br/>
                        <input type="text" data-testid="contactno" id="contactno" value={contactno} onChange={(e)=>setContactno(e.target.value)} required/><br/> 
                        <label>Paste your profile picture url</label><br/>
                        <input type="text" data-testid="image" id="image" value={image} onChange={(e)=>setImage(e.target.value)} required/><br/> 
                        <button onClick={getInput} id="create" data-testid="create">Create</button>
                    </form>
                </div>
            </div>
            <div id="cardContainer">
                {items.map((item,i)=><div key={item.id} id="resultContainer"><Card item={item} index={i} removeItem={removeContent}/></div>)}
            </div>
        </>
    );
}
export default Form;