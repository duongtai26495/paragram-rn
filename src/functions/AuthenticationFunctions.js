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
        method: 'POST',
        body: dataLogin,
    }

    return await fetch(url, option)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => console.log(error))
}

export async function RegisterWithUsernamePassword(User) {
    let url = APIconstants.BASE_URL + APIconstants.SIGNUP
    let UserRegister = User;

    return await axios.post(url, UserRegister)
        .then(response => { return response.data })
        .catch(error => console.log(error))
}

export async function saveUserStorage(username) {
    let url = APIconstants.BASE_URL + APIconstants.PROFILE + username;
    return await axios.get(url)
        .then(response => {
            const data = response.data.result
            const items = [
                [Storage.FULLNAME_STORAGE, data.full_name],
                [Storage.USERNAME_STORAGE, data.username],
                [Storage.EMAIL_STORAGE, data.email],
                [Storage.AVATAR_STORAGE, data.avatar != null ? data.avatar : "" ],
                [Storage.GENDER_STORAGE, data.gender + ""]
            ]
            AsyncStorage.multiSet(
                items,
                () => {
                    console.log("Save info success!")
                }
            )
        })
        .catch(error => console.log(error))
}