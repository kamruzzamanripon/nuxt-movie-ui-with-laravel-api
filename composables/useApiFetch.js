import {UseFetchOptions} from 'nuxt/app'

export function useApiFetch(path, options){
    let headers= {}
    const token = useCookie('XSRF-TOKEN');

    if(token.value){
        headers['X-XSRF-TOKEN'] = token.value
    }

    if(process.server){
        headers = {
            ...headers,
            ...useRequestHeaders(["referer", "cookie"])
        }
    }

    return useFetch("http://127.0.0.1:8000/api/" + path, {
        credentials: "include",
        watch: false,
        ...options,
        headers:{
            ...headers,
            ...options?.headers
        }
    });
}