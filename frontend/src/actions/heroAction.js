import axios from "axios";

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

    HERO_DETAILS_REQUEST,
    HERO_DETAILS_FAIL,
    HERO_DETAILS_SUCCESS,

    CLEAR_ERRORS,
} from "../constants/heroConstants";

// Get All Products
export const getHero = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_HERO_REQUEST });

        const { data } = await axios.get("/api/v1/hero/find");

        dispatch({
            type: ALL_HERO_SUCCESS,
            payload: data,

        });

    } catch (error) {
        dispatch({
            type: ALL_HERO_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get All Products For Admin
export const getAdminHero = () => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_HERO_REQUEST });

        const { data } = await axios.get("/api/v1/hero/find");

        dispatch({
            type: ADMIN_HERO_SUCCESS,
            payload: data,

        });

    } catch (error) {
        dispatch({
            type: ADMIN_HERO_FAIL,
            payload: error.response.data.message,
        });
    }
};



// Update Product
export const updateHero = (id, heroData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_HERO_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" },
        };

        const { data } = await axios.put(
            `/api/v1/admin/hero/${id}`,
            heroData,
            config
        );

        dispatch({
            type: UPDATE_HERO_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_HERO_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get Products Details
export const getHeroDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: HERO_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/v1/hero/${id}`);

        dispatch({
            type: HERO_DETAILS_SUCCESS,
            payload: data.hero,
        });
    } catch (error) {
        dispatch({
            type: HERO_DETAILS_FAIL,
            payload: error.response.data.message,
        });
    }
};


// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};
