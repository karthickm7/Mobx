import {observable} from 'mobx'

export const Store = observable({
    Name: "",
    result: [],
    getResult() {
      return Store.result;
    },
  });
