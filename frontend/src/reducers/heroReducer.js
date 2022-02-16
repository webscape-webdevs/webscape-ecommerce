import {
    ALL_HERO_FAIL,
    ALL_HERO_REQUEST,
    ALL_HERO_SUCCESS,

    ADMIN_HERO_REQUEST,
    ADMIN_HERO_SUCCESS,
    ADMIN_HERO_FAIL,

    UPDATE_HERO_REQUEST,
    UPDATE_HERO_SUCCESS,
    UPDATE_HERO_FAIL,
    UPDATE_HERO_RESET,

    HERO_DETAILS_REQUEST,
    HERO_DETAILS_FAIL,
    HERO_DETAILS_SUCCESS,

    CLEAR_ERRORS,
} from "../constants/heroConstants";

export const heroReducer = (state = { hero: [] }, action) => {
    switch (action.type) {
        case ALL_HERO_REQUEST:
        case ADMIN_HERO_REQUEST:
            return {
                loading: true,
                hero: [],
            };

        case ALL_HERO_SUCCESS:
            return {
                loading: false,
                hero: action.payload.hero,

            };

        case ADMIN_HERO_SUCCESS:
            return {
                loading: false,
                hero: action.payload.hero,

            };


        case ALL_HERO_FAIL:
        case ADMIN_HERO_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

        case UPDATE_HERO_REQUEST:
            return {
                ...state,
                loading: true,
            };


        case UPDATE_HERO_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };

        case UPDATE_HERO_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case UPDATE_HERO_RESET:
            return {
                ...state,
                isUpdated: false,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};


export const heroDetailsReducer = (state = { heroDetails: {} }, action) => {
    switch (action.type) {
        case HERO_DETAILS_REQUEST:
            return {
                loading: true,
                ...state,
            };
        case HERO_DETAILS_SUCCESS:
            return {
                loading: false,
                heroDetails: action.payload,
            };
        case HERO_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};







