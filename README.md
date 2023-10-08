1. atoms file syntax

   ```ts
   import { atom } from "recoil";
   // importing atom from recoil

   type TodoItem = {
     name: string;
     id: string;
   };
   // what a single todo must have

   interface TodoItems {
     todos: Array<TodoItem>;
   }
   // this is an interface that will tell us the structure of TodoItems which will have a property in it called, todos which is an Array of the above metioned TodoItem

   const defaultTodoItems: TodoItems = {
     todos: [],
   };
   // here, we define the default value for our todoState which initially is [] but will eventually have items added to it

   export const todoState = atom<TodoItems>({
     default: defaultTodoItems,
     key: "todos",
   });
   // this is the state that we will be exporting throughout our entire app, we mention the state's default value and also provide a key for uniqueness
   ```

   - we also need to wrap the entire app inside of a <RecoilRoot> which is very similar to how we'd wrap the app in Global Context

2. usage of custom hooks

- usage of hooks breaks down operations into simpler chunks of files which are re-usable throughout our application while grouping similar functionalities within certain files for usage. For example: user hooks, authentication hooks, count hooks, etc.
- returns an object which contain references to the functions that can be destructured in our application as required.

3. recoil functions

- we have 3 functions we'll ever need

1. getter & setter - useRecoilState(the atom that is to be read & modified)
2. getter - useRecoilValue(the atom that is to be read)
3. setter - useSetRecoilState(the atom that is to be modified)
