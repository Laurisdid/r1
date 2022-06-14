function coltReducer(state, action) {
    let newState;
    switch (action.type) {

        case "sortid":
            newState = [...state].sort((a, b) => {
              if (a.id > b.id) return 1;
              if (b.id > a.id) return -1;
              return 0;
            });
        case "sortKm":
        newState = [...state].sort((a, b) => {
          if (a.totalKm > b.totalKm) return 1;
          if (b.totalKm > a.totalKm) return -1;
          return 0;
        });
        break;
        case "reload":
          newState = [...state].map((b, i) => ({ ...b, row: i }));
          break;
  
      default:
        newState = [...state];
    }
  
    return newState;
  }
  
  export default coltReducer;
  