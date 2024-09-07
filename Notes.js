/*


there are two approach to load web page.

    1. load => API calls => Render
    
    2. load => Render => API calls [ recommnded approach], at least visible something on screen before api calls.





    useEffect(): 
        - call immediately after render component.
        - it take two arguments
            1. callback function
            2. dependencies array 

        useEffect(()=> {
                //code here
                console.log("useEffect called")
            }[]);


* Shimmer UI: 
    - show fake page, while load actual data. 
    









*/ 