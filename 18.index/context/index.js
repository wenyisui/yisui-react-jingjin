import { btnStyle } from '../config/index.js';

export const BtnStyleContext = React.createContext({
    style: btnStyle.primary,
    doClick: ()=>{}
});


export const LoginStatusContext = React.createContext({
    status: false,
    login: ()=>{}
})