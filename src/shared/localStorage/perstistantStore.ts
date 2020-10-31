export function saveToLocalStorage(state: any) {
    try {
        const serialisedState = JSON.stringify(state);
        console.log('State ----> ', state)
        // localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
        console.warn(e);
    }
}

