import { createSlice } from '@reduxjs/toolkit';

export interface MembershipsState {
    name: string;
    id: string;
}

const initialState: MembershipsState[] = [
    { name: 'gold', id: '001' },
    { name: 'silver', id: '002' },
    { name: 'bronze', id: '003' },
    { name: 'none', id: '004' },
];

export const membershipsSlice = createSlice({
    name: 'memberships',
    initialState,
    reducers: {},
});

export default membershipsSlice.reducer;