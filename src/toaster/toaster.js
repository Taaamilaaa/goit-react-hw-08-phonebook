import { toast } from 'react-hot-toast';


export const notifySuccess = (text) => toast(text, {
  duration: 4000,
  position: 'top-right',
  icon: '✅',
  iconTheme: {
    primary: 'green',
    secondary: '#fff',
  },  
});

export const notifyWarning = (text) => toast(text, {
  duration: 4000,
  position: 'top-right',
  icon: '😱',
  iconTheme: {
    primary: 'green',
    secondary: '#fff',
  },
  
});
export const notifyDel = (text) => toast(text, {
  duration: 2000,
  position: 'top-right',
  icon: '❎',
  iconTheme: {
    primary: 'green',
    secondary: '#fff',
  },
  
});


