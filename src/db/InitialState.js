let initialState = [{
    1: {
        A1: "",
        B1: "",
        C1: "",
        D1: "",
        E1: "",
        F1: ""
    },

    2: {
        A2: "",
        B2: "",
        C2: "",
        D2: "",
        E2: "",
        F2: ""

    },

    3: {
        A3: "",
        B3: "",
        C3: "",
        D3: "",
        E3: "",
        F3: ""
    },

    4: {
        A4: "",
        B4: "",
        C4: "",
        D4: "",
        E4: "",
        F4: ""
    },

    5: {
        A5: "",
        B5: "",
        C5: "",
        D5: "",
        E5: "",
        F5: ""
    },
     6: {
        A6: "",
        B6: "",
        C6: "",
        D6: "",
        E6: "",
        F6: ""
    }



}]
function generateArray(number) {
  const array = [];

  for (let i = 1; i <= number; i++) {
    const obj = {};

    obj[i] = {};

    for (let j = 65; j <= 90; j++) {
      obj[i][String.fromCharCode(j) + i] = "";
    }

    array.push(obj);
  }

  return array;
}
export default initialState;