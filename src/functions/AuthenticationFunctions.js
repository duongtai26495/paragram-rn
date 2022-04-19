import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios";
import APIconstants from "../constants/APIconstants";
import Storage from "../constants/Storage"
export async function IsExistToken() {
    let token = await AsyncStorage.getItem(Storage.LOCAL_ACCESS_TOKEN);
    console.log("TOKEN: ", token)
    if (token != null) {
        return true;
    } else {
        return false;
    }
}

export async function LoginWithUsernamePassword(username, password) {
    let url = APIconstants.BASE_URL + APIconstants.LOGIN
    let uname = username;
    let pw = password;
    let dataLogin = new FormData();
    console.log(url)
    dataLogin.append('username', uname);
    dataLogin.append('password', pw);
    let option = {
        method:'POST',
        body: dataLogin,
    }

    return await fetch(url, option)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => console.log(error))

}