export const selectLibrary = (libraryId) => { // This is the action crator.
    return {
        type: 'select_library',
        payload: libraryId
    };
};