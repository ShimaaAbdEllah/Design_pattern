import { useEffect, useState } from 'react';
import { Toast } from './Toast';
import { ToastProps } from './Toast';
import { observable } from '../task2';

export function ToastContainer() {
  const [toasts,setToasts]=useState<Pick<ToastProps,"id"|"message"|"variant">[]>([])

  useEffect(()=>{
    return observable.subscribe(event=>{
      if(event.type==="ADD TOAST"){
        //@ts-ignore
        setToasts((old)=>[...old,event.toast])
      }
      if(event.type==="REMOVE ALL"){
        //@ts-ignore
        setToasts([])
      }
    })

  },[])

  return (
    <div className="absolute bottom-0 end-0 p-4 space-y-2 w-full h-full justify-end pointer-events-none flex flex-col max-w-xs ">
      {toasts.map((toast)=><Toast key={toast.id} id={toast.id} variant={toast.variant} message={toast.message} onClose={() => {}} />) }
    </div>
  );
}
