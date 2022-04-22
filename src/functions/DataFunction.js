import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios";
import APIconstants from "../constants/APIconstants";
import Storage from "../constants/Storage"
export async function SearchUser (keyword) {
    let url = APIconstants.BASE_URL + APIconstants.SEARCH + keyword;

    let token = await AsyncStorage.getItem(Storage.LOCAL_ACCESS_TOKEN);
    
    if(token != null){
        let option = {
            headers:{
                'Authorization':'Bearer '+ token
            }
        }
    
        return await axios.get(url, option)
        .then(response => {return response.data})
        .catch(error => console.log(error))
    }
   
}