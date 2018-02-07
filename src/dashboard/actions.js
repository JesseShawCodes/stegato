export const DELETE_ALBUM = "DELETE_ALBUM"
export const REFRESH_DASHBOARD = "REFRESH_DASHBOARD"

export const deleteAlbum = () => ({
    type: DELETE_ALBUM
});

export const refreshDashboard = state => ({
    type: REFRESH_DASHBOARD,
    state
});
