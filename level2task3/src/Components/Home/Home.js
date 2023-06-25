import React , {useState} from "react";
 import './Home.css'
 import videoplay from './video.mp4'
 
 function Home(){
     const [val1,setval1]=useState('');
     const [val2,setval2]=useState('');
     const [completeres,setcompleteres]=useState([]);
     const [pendingres,setpendingres]=useState([]);
     const handleval1=(event)=>{
         setval1(event.target.value);
     }
      const handleval2=(event)=>{
           setval2(event.target.value);
      }
      
     const handlesubmit=(event)=>{
         event.preventDefault();
         if(val1.trim() !== '' && val2.trim() !== ''){
             const newres={
                 Title: val1,
                 Descrption: val2,
             };
             setpendingres([...pendingres,newres]);
             setval1('');
             setval2('');
         }
     };
     const handlecomplete=(index)=>{
         const complete=pendingres[index];
         setcompleteres([...completeres,complete]);
         const updatedval=pendingres.filter((_,i)=>i !== index);
         setpendingres(updatedval);
     }
     const handledelete=(index,iscomplete)=>{
         if(iscomplete){
             const updatedval=completeres.filter((_,i)=>i !== index);
             setcompleteres(updatedval);
         }else{
             const updatedval=pendingres.filter((_,i)=>i !== index);
             setpendingres(updatedval);
         }
     };
     return (
         <div className='video-background'>
              <video src={videoplay} autoPlay loop muted type='video/mp4' /> 
             <div className="content">
                 <form onSubmit={handlesubmit} className="forms">
                     <label >
                         <input type="text" placeholder="Title" value={val1} onChange={handleval1} className="field1" style={{borderRadius:"20px" }}
                         />
                     </label >
                     <br />
                      <label>
                         <textarea type="text" placeholder="Description" value={val2} onChange={handleval2} className="field2" style={{borderRadius:"20px" }}
                        />
                     </label> 
                     <br />
                     <button type="submit" style={{borderRadius:"20px",fontSize:"20px",fontFamily:"cursive",padding:"5px"}}>Submit</button>
                     <br />
                 </form>
                 
                <div className="result">
                 <h2>Pending Tasks:</h2>
                 <ul>
                     {pendingres.map((data,index)=>(
                         <li key={index}>
                             <div className="container">
                            <span className="display">{data.Title}</span>
                             <span className="display">{data.Descrption}</span>
                             <button onClick={()=>handlecomplete(index)} style={{borderRadius:"20px",fontFamily:"cursive",backgroundColor:"white",fontSize:"15px"}}>Complete</button>
                             <button onClick={()=>handledelete(index,false)} style={{borderRadius:"20px",fontFamily:"cursive",backgroundColor:"white",fontSize:"15px"}} >Delete</button>
                             </div>
                             <br />
                         </li>
                     ))}
                 </ul>
                 <h2>Completed Tasks:</h2>
                 <ul>
                     {completeres.map((data,index)=>(
                         <li key={index}>
                             <div className="container">
                             <span className="display1">{data.Title}</span>
                             <span className="display1">{data.Descrption}</span>
                             <button onClick={()=>handledelete(index,true)} style={{borderRadius:"20px",fontFamily:"cursive",color:"black",backgroundColor:"white",fontSize:"15px"}} className="display1" >Delete</button>
                             
                             </div>
                             <br />
                         </li>
                     ))}
                 </ul>   
                 </div>
                 
             </div>
         </div>
     )
 }
 export default Home;