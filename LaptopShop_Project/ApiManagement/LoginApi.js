/* eslint-disable prettier/prettier */
import ApiManager,{AthenUrl} from './ApiManager';


export const user_login = async data => {
    try{
        const result = await ApiManager(AthenUrl,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            data: data,
        });
        return result;
    }
    catch(error) {
        return error.response.data;
    }
}