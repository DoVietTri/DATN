import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

toast.configure({
    autoClose: 2000,
    draggable: false,
    position: toast.POSITION.TOP_RIGHT
});

const successToast = (content) => toast.success(content);

const errorToast = (content) => toast.error(content);

export { successToast, errorToast };