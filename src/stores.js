import { readable } from 'svelte/store';

export const headerDrinks = readable([['whisky','Whisky'], ['rum','Rum'],['port-sherry','Porto & sherry'],['bier','Bier']])
export const imgRoot = readable('https://res.cloudinary.com/boozeboodcdn/image/upload/q_auto/w_200,h_300,c_limit/')