import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface CaseItem {
    slug: string;
    title: string;
    tagsDisplayed: string[];
    poster: {
        image: {
            src: string;
        };
        alt: string;
    };
}

interface CasesState {
    items: CaseItem[];
    loading: boolean;
    error: string | null;
    hasMore: boolean;
}

const initialState: CasesState = {
    items: [],
    loading: false,
    error: null,
    hasMore: true,
};

interface FetchCasesArgs {
    offset: number;
    limit: number;
}

export const fetchCases = createAsyncThunk(
    "cases/fetchCases",
    async ({ offset, limit }: FetchCasesArgs) => {
        const response = await axios.get("https://api.cms.chulakov.dev/page/work", {
            params: { offset, limit },
        });
        return response.data.items;
    }
);

const casesSlice = createSlice({
    name: "cases",
    initialState,
    reducers: {
        resetCases(state) {
            state.items = [];
            state.hasMore = true;
            state.error = null;
            state.loading = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCases.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCases.fulfilled, (state, action) => {
                state.loading = false;
                // если пришло меньше 10 кейсов — значит кейсы закончились
                if (action.payload.length < 10) {
                    state.hasMore = false;
                }
                // добавляем новые кейсы к старым
                state.items = [...state.items, ...action.payload];
            })
            .addCase(fetchCases.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Ошибка при загрузке кейсов";
            });
    },
});

export const { resetCases } = casesSlice.actions;
export default casesSlice.reducer;