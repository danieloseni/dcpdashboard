import agentActionTypes from '../types/agent';

const initialState = {
    agents: [],
    fetchingAgents: false,
    fetchAgentsError: null,
};

const agentsReducer = (state = initialState, action) => {
    switch (action.type) {
        // case profileActionTypes.FETCH_FLAT_RATES_START: {
        //     return {
        //         ...state,
        //         fetchingFlatRates: true,
        //         fetchFlatRatesError: null,
        //     }
        // }
        // case profileActionTypes.FETCH_FLAT_RATES_SUCCESS: {
        //     return {
        //         ...state,
        //         flatRates: action.payload,
        //         fetchingFlatRates: false,
        //         fetchFlatRatesError: null,
        //     }
        // }
        // case profileActionTypes.FETCH_FLAT_RATES_FAILURE: {
        //     return {
        //         ...state,
        //         fetchFlatRatesError: action.payload,
        //         fetchingFlatRates: false,
        //     }
        // }

        // case profileActionTypes.DELETE_FLAT_RATE_START: {
        //     return {
        //         ...state,
        //         deletingFlatRate: true,
        //         deleteFlatRatesError: null,
        //     }
        // }
        // case profileActionTypes.DELETE_FLAT_RATE_SUCCESS: {
        //     const newRates = state.flatRates.filter(rate => rate.id !== action.payload)
        //     return {
        //         ...state,
        //         flatRates: newRates,
        //         deletingFlatRate: false,
        //         deleteFlatRatesError: null,
        //     }
        // }
        // case profileActionTypes.DELETE_FLAT_RATE_FAILURE: {
        //     return {
        //         ...state,
        //         deleteFlatRatesError: action.payload,
        //         deletingFlatRate: false,
        //     }
        // }

        case agentActionTypes.CREATE_AGENT_START: {
            return {
                ...state,
                creatingAgent: true,
                createAgentError: null,
            }
        }
        case agentActionTypes.CREATE_AGENT_SUCCESS: {
            // const newRates = [...state.flatRates, action.payload]
            return {
                ...state,
                creatingAgent: false,
                createAgentError: null,
            }
        }
        case agentActionTypes.CREATE_AGENT_FAILURE: {
            return {
                ...state,
                creatingAgent: false,
                createAgentError: action.payload,
            }
        }

        // case profileActionTypes.UPDATE_FLAT_RATE_START: {
        //     return {
        //         ...state,
        //         updatingFlatRate: true,
        //         updateFlatRateError: null,
        //     }
        // }
        // case profileActionTypes.UPDATE_FLAT_RATE_SUCCESS: {
            
        //     const index = state.flatRates.findIndex(el => el.id === action.payload.id); 
        //     const newRates = [...state.flatRates]; 
            
        //     newRates[index] = action.payload;
            
        //     return {
        //         ...state,
        //         flatRates: newRates,
        //         updatingFlatRate: false,
        //         updateFlatRateError: null,
        //     }
        // }
        // case profileActionTypes.UPDATE_FLAT_RATE_FAILURE: {
        //     return {
        //         ...state,
        //         updatingFlatRate: false,
        //         updateFlatRateError: action.payload,
        //     }
        // }

        // case profileActionTypes.FETCH_PROFILE_START: {
        //     return {
        //         ...state,
        //         fetchingProfile: true,
        //         fetchProfileError: null,
        //     }
        // }
        // case profileActionTypes.FETCH_PROFILE_SUCCESS: {
        //     return {
        //         ...state,
        //         ...action.payload,
        //         fetchingProfile: false,
        //         fetchProfileError: null,
        //     }
        // }
        // case profileActionTypes.FETCH_PROFILE_FAILURE: {
        //     return {
        //         ...state,
        //         fetchingProfile: false,
        //         fetchProfileError: action.payload,
        //     }
        // }
        
        // case profileActionTypes.UPDATE_COMPANY_DETAILS_START: {
        //     return {
        //         ...state,
        //         updatingCompanyDetails: true,
        //         updateCompanyDetailsError: null,
        //     }
        // }
        // case profileActionTypes.UPDATE_COMPANY_DETAILS_SUCCESS: {
        //     const newCompanyDetails = {
        //         ...state.companyDetails,
        //         ...action.payload
        //     };
        //     return {
        //         ...state,
        //         companyDetails: newCompanyDetails,
        //         updatingCompanyDetails: false,
        //         updateCompanyDetailsError: null,
        //     }
        // }
        // case profileActionTypes.UPDATE_COMPANY_DETAILS_FAILURE: {
        //     return {
        //         ...state,
        //         updatingCompanyDetails: false,
        //         updateCompanyDetailsError: action.payload,
        //     }
        // }

        // case profileActionTypes.UPDATE_MANAGER_DETAILS_START: {
        //     return {
        //         ...state,
        //         updatingManagerDetails: true,
        //         updateManagerDetailsError: null,
        //     }
        // }
        // case profileActionTypes.UPDATE_MANAGER_DETAILS_SUCCESS: {
        //     const newManagerDetails = { 
        //         ...state.managerDetails, 
        //         ...action.payload 
        //     };
        //     return {
        //         ...state,
        //         managerDetails: newManagerDetails,
        //         updatingManagerDetails: false,
        //         updateManagerDetailsError: null,
        //     }
        // }
        // case profileActionTypes.UPDATE_MANAGER_DETAILS_FAILURE: {
        //     return {
        //         ...state,
        //         updatingManagerDetails: false,
        //         updateManagerDetailsError: action.payload,
        //     }
        // }
        // case profileActionTypes.CREATE_FLAT_RATE: {
        //     return {
        //         ...state,
        //         flatRates: [...state.flatRates, action.payload]
        //     }
        // }
        // case profileActionTypes.DELETE_FLAT_RATE: {
        //     return {
        //         ...state,
        //     }
        // }
        default: {
            return state;
        }
    }
}

export default agentsReducer;