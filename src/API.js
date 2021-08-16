const base_url = "https://localhost:44304";
export const API = {
    categories:{
        url:base_url+"/api/Categories",
        params:{},
        method:"GET"
    },
    add_category:{
        url:base_url+"/api/Categories",
        params:JSON.stringify({
            name:"",
            image:"",
            description:""
        }),
        method:"POST"
    },
    detail_category:{
        url:base_url+"/api/Categories/",// +id
        params:{},
        method:"GET"
    },
    edit_category:{
        url:base_url+"/api/Categories/",// +id
        params:JSON.stringify({
            id:0,
            name:"",
            image:"",
            description:""
        }),
        method:"PUT"
    },
    delete_category:{
        url:base_url+"/api/Categories/",// +id
        params:{},
        method:"DELETE"
    }
}