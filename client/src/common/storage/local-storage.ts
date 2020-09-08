import { IStorage } from './types';

const storage: IStorage = {
    get: localStorage.getItem.bind(localStorage),
    set: localStorage.setItem.bind(localStorage),
    remove: localStorage.removeItem.bind(localStorage),
};

export default storage;
