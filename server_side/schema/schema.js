const graphql = require('graphql')

var schema = graphql.buildSchema({
    type User{
        user_id: ID!,
        firstname: String!,
        surname:String!,
        date_of_birth:String!,
        id_type:String!,
        id_number:String!,
        gender:String!,
        location:String!,
        email:String!,
        digital_addr:String!,
        phone:String!,
        password:String!
    }
    
    type Device{
        posted_by:User!,
        device_type: String!,
        device_name: String!,
        price: String!,
        and_or_ios_version:String,
        description:String!,
        ram_size:String!,
        memory_size:String!,
        device_color:String!,
        device_image:String!
        
    }
    
    type Fashion{
        posted_by:User!,
        item_name:String!,
        item_price:String!,
        number_in_stock: Int!,
        gender_target:String!,
        size_range:String!,
        item_category:String!,
        description:String!,
        item_tag:String!,
        
    }
    
    type Property{
        posted_by:User!
        property_type:String!,
        property_name:String!,
        property_location:String!,
        property_price:String!,
        property_registered:Boolean!,
        property_description:String!
    }
    
    type Animal{
        posted_by:User!,
        animal_name:String!,
        number_available:Int!
        price:String!,
        description:String!
    }
})