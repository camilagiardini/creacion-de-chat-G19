"use client"

export default function Button(props){
    return(
        <>
            <button className {
                clsx(
                    {
                        [styles.button] : true
                    }
                )
               
            } onClick={props.onClick}>{props.title}</button>
        
         </>
    )

}

       

