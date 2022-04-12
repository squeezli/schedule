import { useCallback } from 'react'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure({
    autoClose: 2000,
    draggable: false,
  });

 
export const useMessage = () => {
    return useCallback(text => {
        console.log(text)
        if (text) {
            toast(text,{position:'bottom-right'})
        }
    }, [])
}