import Reduser, {viewBookIDAC} from "../reducers/SampleReducer";

const INITIAL_STATE =
    {
        id: '',
        totalItems: 0,
        items: {
            _id: '',
            title: '',
            authors: '',
            image: '',
            link: '',
            categories: ''

        }
    }
test("receiving id - test", () => {
    const id = 42;
    const state = Reduser(INITIAL_STATE, viewBookIDAC(id))
    expect(state.id).toBe(42)
});

