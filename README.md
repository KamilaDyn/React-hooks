### Używanie useReducer w React

Reducer przyjmuje stan i akcję.

Tworzymy własną fukcję, reducer np.

const booksReducer =(state, action) => {}

Powyższa funkcja przyjmuje dwa argumenty

1. state to stan przechowywany
2. action -> stan akcji (np. ADD, FETCH, REMOVE) , tutaj tworzymy własne nazwy adekwatne do przeprowadzanej akcji.
   Nowy stan zwracamy na podstawie akcji.

Wewnątrz naszej funcji, reducera wybieramy akcję przez switch

const booksReducer =(state, action) =>{

switch(action.type){

case 'ADD':
return;

case 'REMOVE':
return;

case 'FETCH:
return;

default:
throw new Error('sth went wrong');
}
}

action.type => typ naszej akcji

importujemy useReducer z 'react'

import React, {useReducer} from 'react'

useReducer przyjmuje dwa argumenty, reducer i początkowy stan -> useReducer(booksReducer, [])

const [state, dispatch] = useReducer(booksReducer, []);

dispatch jest to metoda zawierająca obiekt akcji, przekazuje argument z typem akcji i przekazuje dane do reducera.
Reducer zmienia stan przy renderowaniu, na podstawie akcji np 'ADD'

....

switch (action.type) {

case "ADD":

return [...state, action.newBookItem];

...

const handleOnClick = () => {
const newBookItem = {
id: Math.floor(Math.random \* 1000),
title: newBook.title,
author: newBook.author,
};

    dispatch({type: 'ADD', newBookItem})

};

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
