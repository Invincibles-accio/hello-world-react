

const Info = ({name, description, property_class}) => {
        // props is read only object
        // obj.name = "Abhishek"
        
        // console.log("Value of name",obj.name)

        // props = {name="Skills", description="Hi I am here", property_class="info1"}
        
        return(
        <div className={property_class}>
            <h1>{name}</h1> 
            <p>{description}</p>
        </div>
        )
   
    
}

export default Info