function booksReducer(state, action) {
    let newState;
    switch (action.type) {
        case 'get_from_server':
            newState = action.payload.map((b, i) => ({ ...b, row: i }));
            break;
        case "DefSortList":
            newState = [...state].sort((a, b) => a.row - b.row);
            break;
        case "sort":
            newState = [...state].sort((a, b) => {
                if (a.title > b.title) return -1;
                if (a.title < b.title) return 1;
                return 0;
            });
        default:
            newState = [...state];
    }
    return newState;
}


export default booksReducer;