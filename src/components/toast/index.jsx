import { useRef } from 'react';
import 'primeicons/primeicons.css';

function Toastc() {
    const toast = useRef(null);

    return {
        ref : toast,
        current: toast.current,
        showinfo: ({severity='info', summary='Message 1', detail='Message 1 Content', life= 3000}) => {
            toast.current.show({severity, summary, detail, life});
        },
        showwarn: ({severity='warn', summary='Message 1', detail='Message 1 Content', life= 3000}) => {
            toast.current.show({severity, summary, detail, life});
        },
        showerror: ({severity='error', summary='Message 1', detail='Message 1 Content', life= 3000}) => {
            toast.current.show({severity, summary, detail, life});
        },
        showsuccess: ({severity='success', summary='Message 1', detail='Message 1 Content', life= 3000}) => {
            toast.current.show({severity, summary, detail, life});
        },
        hide: () => {
            toast.current.hide();
        }
    }
}

export default Toastc