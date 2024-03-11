import React, { useEffect, useState } from 'react'

function Search() {
    const[input,setInput]=useState('')
    const [arr,setArr]=useState([])
    const [showBackToTop, setShowBackToTop] = useState(false);



    const handleChange=(e)=>{
        setInput(e.target.value)
    }
     
    function handleScroll(){
        if(window.scrollY>100){
            setShowBackToTop(true)
        }
        else{
            setShowBackToTop(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // const scrollToTop =()=>{
    //     window.scrollTo(0,0)
    // }



function generateRandomWords(length){
    let word=''
    let letters='abcdefghijklmnopqrstuvwxyz'
    let randomNum=Math.trunc(Math.random()*letters.length)
    let randomLetter=letters[randomNum]
    
    for(let i=0;i<length;i++){
        word+=randomLetter
    }
    return word
}

// effect for words
useEffect(()=>{
    let newWords=[]
    for(let i=0;i<500;i++){
        newWords.push(generateRandomWords(5))
    }
    
    setArr(newWords)
    // setArr([...new Set(newWords)])
},[])


// effect for scroll

useEffect(()=>{
window.addEventListener("scroll",handleScroll)
return () => {
    window.removeEventListener('scroll', handleScroll);
};
},[])




const filteredWords = arr.filter(word => word.includes(input));

  return (
    <div className='flex flex-col items-center space-y-2'>
      <p className='text-3xl text-purple-800/75 uppercase'>search operation</p>
      <input type='text' onChange={handleChange} className='focus:outline-none border border-2 border-green-600 bg-green-200 px-2 py-1 w-72'/>
    
    <div>
        {/* {arr.map(word=><h1>{word}</h1>)} */}

        {/* {filteredWords.map((word, index) => <h1 key={index}>{word}</h1>)} */}

      
        {filteredWords.length === 0 ? (
                    <p className='text-red-500'>No items found...</p>
                ) : (
                    filteredWords.map((word, index) => <h1 key={index}>{word}</h1>)
                    )}
        
        {filteredWords.length !== 0 
        &&
   showBackToTop && <div className='fixed bottom-20 right-20'><button onClick={scrollToTop} className='px-3 py-1 bg-green-500 text-green-700 font-bold rounded-full text-2xl'>^</button></div>
        }


    </div>
    </div>
  )
}

export default Search
