export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: null,
    token: 'BQAkk90IRU_ms6DYzwX8_WEn7EsfBau1Vc-h3-XgeJwxVrRAxPSlp0v9EoTP0aWCqIt0w0TJqlAQ1lGTf1K3klzNsct26dgfzpPLTuPaJ6yz9flBNZiKEBKpYeFxaKr2BEBt6Xe-sz_b__Jd7wagKUefsgisgzJ-sCDrHhNhQIkrGrYmgb04',
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists,
            };
        default:
            return state;
    }
}

export default reducer;