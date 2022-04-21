import AsyncStorage from "@react-native-async-storage/async-storage"
import { StackActions } from "@react-navigation/native";

import APIconstants from "../constants/APIconstants";
import NavigationPath from "../constants/NavigationPath";
import Storage from "../constants/Storage"

export async function deleteAllItemLogout(){
    let items = [
        Storage.LOCAL_ACCESS_TOKEN,
        Storage.FULLNAME_STORAGE,
        Storage.EMAIL_STORAGE,
        Storage.USERNAME_STORAGE,
        Storage.GENDER_STORAGE,
        Storage.AVATAR_STORAGE
    ]
   await AsyncStorage.multiRemove(items, ()=>{
        console.log("Removed all items local.")
    })

}

export async function IsExistToken(navigation) {
    let token = await AsyncStorage.getItem(Storage.LOCAL_ACCESS_TOKEN);
    console.log("TOKEN: ", token)
    if (token != null) {
        console.log("User logged in")
        return true;
    } else {
        console.log("User do not login")
        navigation.dispatch(StackActions.replace(NavigationPath.AUTHENTICATIONSTACK))
    }
}

export async function SignOut (navigation){
    await deleteAllItemLogout()
    .then(() => {
        IsExistToken(navigation)
    })
    .catch(error => console.log(error))
}
