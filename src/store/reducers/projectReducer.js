const initState = {
    projects: [
        {id: '1', title: 'nsjdns', content: 'nfndjnfjkdsnjfndsf dfnjkdsf jdsnf'},
        {id: '2', title: 'nsjdns', content: 'nfndjnfjkdsnjfndsf dfnjkdsf jdsnf'},
        {id: '3', title: 'nsjdns', content: 'nfndjnfjkdsnjfndsf dfnjkdsf jdsnf'}
    ]
} ;

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('Created Project', action.project);
            return state;

        case 'CREATE_PROJECT_ERROR':
            console.log('Create Project Error', action.err);
            return state;
        default: 
            return state;
    }
};

export default projectReducer;